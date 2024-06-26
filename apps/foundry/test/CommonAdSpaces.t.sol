// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import {console} from "forge-std/Test.sol";
import {CommonAdSpacesBase, ISuperToken, SuperToken} from "./helpers/CommonAdSpacesBase.sol";
import {WETH9} from "../test/mocks/WETH9.sol";
import {DirectListingsLogic} from "contracts/prebuilts/marketplace/direct-listings/DirectListingsLogic.sol";
import {MarketplaceV3} from "contracts/prebuilts/marketplace/entrypoint/MarketplaceV3.sol";
import {CurrencyTransferLib} from "contracts/lib/CurrencyTransferLib.sol";
import {IDirectListings} from "contracts/prebuilts/marketplace/IMarketplace.sol";
import {UD60x18, ud, intoUint256} from "@prb/math/src/UD60x18.sol";
import {SuperTokenV1Library} from "@superfluid-finance/ethereum-contracts/contracts/apps/SuperTokenV1Library.sol";
import {ISETH} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/tokens/ISETH.sol";
import {StreamCreator} from "./mocks/StreamCreator.sol";
import {TestToken} from "@superfluid-finance/ethereum-contracts/contracts/utils/TestToken.sol";

import {AdSpaceConfig} from "../src/CommonAdSpaces.sol";
import {AdGroup} from "../src/lib/Structs.sol";
import {CommonAdPool} from "../src/CommonAdPool.sol";
import {SimpleAccountFactory} from "account-abstraction/samples/SimpleAccountFactory.sol";
import {SimpleAccount, IEntryPoint} from "account-abstraction/samples/SimpleAccount.sol";

contract CommonAdSpacesTest is CommonAdSpacesBase {
    using SuperTokenV1Library for ISuperToken;
    uint256 constant baseTaxRateBPS = 120; // 1.2% per month
    uint256 constant MAX_BPS = 10_000;
    uint256 constant DEFAULT_QUANTITY = 1;
    string buyerAdURI = "https://www.google.com";
    string buyer2AdURI = "https://www.yahoo.com";
    IEntryPoint entryPoint = IEntryPoint(address(0));
    SimpleAccountFactory factory = new SimpleAccountFactory(entryPoint);

    function testSimpleAccount() public {
        address owner = vm.addr(69);
        uint256 salt = 0;
        SimpleAccount account = factory.createAccount(owner, salt);

        label(owner, "Owner");
        console.log("Owner: ", address(owner));

        label(address(account), "SimpleAccount 1");
        console.log("Simple Account 1: ", address(account));

        vm.prank(owner);
        account.execute(
            address(commonAds),
            uint256(0),
            abi.encodeWithSignature(
                "createAdGroup(address,(address,uint256,uint256),uint256,string)",
                address(account),
                AdSpaceConfig({
                    currency: CurrencyTransferLib.NATIVE_TOKEN,
                    initialPrice: initialPrice,
                    taxRate: baseTaxRateBPS
                }),
                3,
                ""
            )
        );

        vm.prank(owner);
        account.execute(
            address(commonAds),
            uint256(0),
            abi.encodeWithSignature(
                "createAdPool(uint256,address)",
                0,
                address(ethx)
            )
        );

        vm.startPrank(owner);
        account.execute(
            address(commonAds.getAdPool(0, address(ethx))),
            uint256(0),
            abi.encodeWithSignature(
                "grantRole(bytes32,address)",
                commonAds.getAdPool(0, address(ethx)).DEFAULT_ADMIN_ROLE(),
                vm.addr(12345)
            )
        );
        vm.stopPrank();

        vm.startPrank(owner);
        account.execute(
            address(sf.gdaV1Forwarder),
            uint256(0),
            abi.encodeWithSignature(
                "distributeFlow(address,address,address,int96,bytes)",
                ethx,
                address(account),
                commonAds.getAdPool(0, address(ethx)).pool(),
                int96(int256(uint256(1 ether) / 30 days)),
                ""
            )
        );
        vm.stopPrank();

        assertEq(commonAds.getAdGroupOwner(0), address(account));
        // Assert account has admin role
        assertEq(
            commonAds.getAdPool(0, address(ethx)).hasRole(
                commonAds.getAdPool(0, address(ethx)).DEFAULT_ADMIN_ROLE(),
                address(account)
            ),
            true
        );
    }

    function testOpenAdPool() public {
        vm.prank(recipient);
        commonAds.createAdGroup(
            recipient,
            AdSpaceConfig({
                currency: CurrencyTransferLib.NATIVE_TOKEN,
                initialPrice: initialPrice,
                taxRate: baseTaxRateBPS
            }),
            3,
            ""
        );

        vm.deal(recipient, 10000 ether);
        _upgradeETH(ethx, recipient, 100 ether);

        uint256 adId = 0;
        address frameDistributor = vm.addr(1234);
        /**
         * 1 - Create ad pool
         */
        vm.prank(recipient);
        commonAds.createAdPool(adId, address(ethx));

        // Create a flow of 1 ether per month
        int96 adCampaignFlowRate = int96(int256(uint256(1 ether) / 30 days));
        CommonAdPool adPool = commonAds.getAdPool(adId, address(ethx));

        SimpleAccount smartAccount = factory.createAccount(frameDistributor, 0);

        /**
         * 2 - Grant member units admin role to frame distributor
         */
        vm.startPrank(recipient);
        adPool.grantRole(
            adPool.MEMBER_UNITS_ADMIN_ROLE(),
            address(smartAccount)
        );
        vm.stopPrank();

        /**
         * 3 - Grab first member units for frame distributor
         */
        vm.prank(frameDistributor);
        smartAccount.execute(
            address(adPool),
            uint256(0),
            abi.encodeWithSignature(
                "updateMemberUnits(address,uint128)",
                vm.addr(109372),
                1000
            )
        );

        /**
         * 4 - Campaign creator initiates pool flow
         */
        vm.startPrank(recipient);
        sf.gdaV1Forwarder.distributeFlow(
            ethx,
            recipient,
            adPool.pool(),
            adCampaignFlowRate,
            ""
        );
        // ethx.distributeFlow(recipient, adPool.pool(), adCampaignFlowRate);
        vm.stopPrank();
    }

    function testCannotTransferAsOwnerOfListing() public {
        vm.prank(recipient);
        commonAds.createAdGroup(
            recipient,
            AdSpaceConfig({
                currency: CurrencyTransferLib.NATIVE_TOKEN,
                initialPrice: initialPrice,
                taxRate: baseTaxRateBPS
            }),
            3,
            ""
        );

        address buyer = _getAccount(69, 1000 ether);

        _grantMaxFlowPermissions(ethx, buyer, address(marketplace));

        _upgradeETH(ethx, buyer, _taxDuePerWeek(baseTaxRateBPS, initialPrice));

        vm.prank(buyer);
        marketplace.buyFromListing{value: initialPrice}(
            1,
            buyer,
            DEFAULT_QUANTITY,
            CurrencyTransferLib.NATIVE_TOKEN,
            initialPrice
        );

        assertEq(commonAds.ownerOf(1), buyer);

        vm.prank(buyer);
        vm.expectRevert("CommonAdSpaces: Only marketplace can transfer");
        commonAds.transferFrom(buyer, vm.addr(111), 1);
    }

    function testCreateAdGroup() public {
        vm.prank(recipient);
        commonAds.createAdGroup(
            recipient,
            AdSpaceConfig({
                currency: CurrencyTransferLib.NATIVE_TOKEN,
                initialPrice: initialPrice,
                taxRate: baseTaxRateBPS
            }),
            3,
            ""
        );
    }

    function testStreamCreator() public {
        StreamCreator streamCreator = new StreamCreator();
        address account = _getAccount(69, 1000 ether);

        uint256 priceOfPurchase = 100e18; // 100 DAI
        uint256 taxRateBPS = 120; // 1.2% per month
        uint256 duePerMonth = (priceOfPurchase * taxRateBPS) / 10000;
        uint256 duePerSecond = duePerMonth / 30 days;
        int96 duePerSecondInt = int96(int256(duePerSecond));

        _grantMaxFlowPermissions(daix, account, address(streamCreator));

        _mintAndUpgradeERC20(daix, account, 12 * duePerMonth);

        streamCreator.createStream(
            address(daix),
            account,
            vm.addr(96),
            duePerSecondInt
        );
    }

    function testBuyerCancelsStream() public {
        vm.prank(recipient);
        commonAds.createAdGroup(
            recipient,
            AdSpaceConfig({
                currency: CurrencyTransferLib.NATIVE_TOKEN,
                initialPrice: initialPrice,
                taxRate: baseTaxRateBPS
            }),
            3,
            ""
        );

        address buyer = _getAccount(69, 1000 ether);

        _grantMaxFlowPermissions(ethx, buyer, address(marketplace));

        _upgradeETH(
            ethx,
            buyer,
            _taxDuePerWeek(baseTaxRateBPS, initialPrice) * 10
        );

        vm.prank(buyer);
        marketplace.buyFromListing{value: initialPrice}(
            1,
            buyer,
            DEFAULT_QUANTITY,
            CurrencyTransferLib.NATIVE_TOKEN,
            initialPrice
        );

        _logFlowInfo(buyer, recipient);

        vm.warp(block.timestamp + 1 days);

        vm.startPrank(buyer);
        ISuperToken(ethx).deleteFlow(buyer, recipient);
        vm.stopPrank();

        vm.prank(recipient);
        marketplace.forecloseListing(1);
    }

    function testBuyListingETH() public {
        vm.prank(recipient);
        commonAds.createAdGroup(
            recipient,
            AdSpaceConfig({
                currency: CurrencyTransferLib.NATIVE_TOKEN,
                initialPrice: initialPrice,
                taxRate: baseTaxRateBPS
            }),
            3,
            ""
        );

        address buyer = _getAccount(69, 1000 ether);

        _grantMaxFlowPermissions(ethx, buyer, address(marketplace));

        uint256 missingAmount = 1;

        _upgradeETH(
            ethx,
            buyer,
            _taxDuePerWeek(baseTaxRateBPS, initialPrice) - missingAmount
        );

        vm.prank(buyer);
        vm.expectRevert("Marketplace: TokenX insufficient balance");
        marketplace.buyFromListing{value: initialPrice}(
            1,
            buyer,
            DEFAULT_QUANTITY,
            CurrencyTransferLib.NATIVE_TOKEN,
            initialPrice
        );

        // Add missing amount
        _upgradeETH(ethx, buyer, missingAmount);

        assertEq(commonAds.ownerOf(1), recipient);
        assertEq(recipient.balance, 0);

        vm.prank(buyer);
        marketplace.buyFromListing{value: initialPrice}(
            1,
            buyer,
            DEFAULT_QUANTITY,
            CurrencyTransferLib.NATIVE_TOKEN,
            initialPrice
        );

        vm.prank(buyer);
        commonAds.updateAdURI(1, buyerAdURI);

        vm.warp(block.timestamp + 1 days);

        assertEq(recipient.balance, initialPrice);
        assertEq(commonAds.ownerOf(1), buyer);

        IDirectListings.Listing memory listing = marketplace.getListing(1);

        assertEq(
            uint256(listing.status),
            uint256(IDirectListings.Status.CREATED)
        );

        address buyer2 = _getAccount(96, 1000 ether);

        _grantMaxFlowPermissions(ethx, buyer2, address(marketplace));

        _upgradeETH(ethx, buyer2, 1 ether);

        assertEq(commonAds.getAdUri(1), buyerAdURI);

        vm.prank(buyer2);
        marketplace.buyFromListing{value: initialPrice}(
            1,
            buyer2,
            DEFAULT_QUANTITY,
            CurrencyTransferLib.NATIVE_TOKEN,
            initialPrice
        );

        assertEq(commonAds.getAdUri(1), "");

        assertEq(commonAds.ownerOf(1), buyer2);
        vm.prank(buyer2);
        vm.expectRevert("CommonAdSpaces: Only marketplace can transfer");
        commonAds.safeTransferFrom(buyer2, vm.addr(22), 1);

        // Expect flow for buyer to be stopped
        assertEq(_getFlowRate(address(ethx), buyer, recipient), 0);

        // Test Buyer 2 can set ad uri
        vm.prank(buyer);
        vm.expectRevert("CommonAdSpaces: Not ad owner");
        commonAds.updateAdURI(1, "https://www.google.com");

        vm.prank(buyer2);
        commonAds.updateAdURI(1, "https://www.google.com");
    }

    function testBuyMultipleListings() public {
        vm.prank(recipient);
        commonAds.createAdGroup(
            recipient,
            AdSpaceConfig({
                currency: CurrencyTransferLib.NATIVE_TOKEN,
                initialPrice: initialPrice,
                taxRate: baseTaxRateBPS
            }),
            3,
            ""
        );

        address buyer = _getAccount(69, 1000 ether);

        _grantMaxFlowPermissions(ethx, buyer, address(marketplace));
        _upgradeETH(ethx, buyer, 1 ether);

        vm.prank(buyer);
        marketplace.buyFromListing{value: initialPrice}(
            0,
            buyer,
            DEFAULT_QUANTITY,
            CurrencyTransferLib.NATIVE_TOKEN,
            initialPrice
        );

        assertEq(
            _computeAssetFlowRate(baseTaxRateBPS, initialPrice),
            _getFlowRate(address(ethx), buyer, recipient)
        );

        vm.prank(buyer);
        marketplace.buyFromListing{value: initialPrice}(
            1,
            buyer,
            DEFAULT_QUANTITY,
            CurrencyTransferLib.NATIVE_TOKEN,
            initialPrice
        );

        assertEq(
            _computeAssetFlowRate(baseTaxRateBPS, initialPrice) * 2,
            _getFlowRate(address(ethx), buyer, recipient)
        );

        address buyer2 = _getAccount(22, 1000 ether);

        _grantMaxFlowPermissions(ethx, buyer2, address(marketplace));

        _upgradeETH(ethx, buyer2, 1 ether);

        vm.prank(buyer2);
        marketplace.buyFromListing{value: initialPrice}(
            1,
            buyer2,
            DEFAULT_QUANTITY,
            CurrencyTransferLib.NATIVE_TOKEN,
            initialPrice
        );

        assertEq(
            _computeAssetFlowRate(baseTaxRateBPS, initialPrice),
            _getFlowRate(address(ethx), buyer, recipient)
        );

        vm.prank(buyer2);
        marketplace.buyFromListing{value: initialPrice}(
            0,
            buyer2,
            DEFAULT_QUANTITY,
            CurrencyTransferLib.NATIVE_TOKEN,
            initialPrice
        );

        assertEq(0, _getFlowRate(address(ethx), buyer, recipient));
    }

    function testBuyListingDAI() public {
        uint256 initialPriceInDai = 100e18; // 100 DAI
        uint256 taxRateBPS = 120; // 1.2% per month
        vm.prank(recipient);
        commonAds.createAdGroup(
            recipient,
            AdSpaceConfig({
                currency: address(dai),
                initialPrice: initialPriceInDai,
                taxRate: taxRateBPS
            }),
            3,
            ""
        );

        address buyer = _getAccount(69, 1000 ether);

        _grantMaxFlowPermissions(daix, buyer, address(marketplace));

        // Mint DAI for actual purchase
        dai.mint(buyer, 1000e18);

        // Mint more DAI & upgrade to DAIx for tax
        _mintAndUpgradeERC20(daix, buyer, 1000e18);

        assertEq(dai.balanceOf(buyer), 1000e18);

        vm.prank(buyer);
        dai.approve(address(marketplace), initialPriceInDai);

        vm.prank(buyer);
        marketplace.buyFromListing(
            1,
            buyer,
            DEFAULT_QUANTITY,
            address(dai),
            initialPriceInDai
        );
    }

    function testBuyListingDAIWithTaxRateZero() public {
        uint256 initialPriceInDai = 100e18; // 100 DAI
        uint256 taxRateBPS = 0;
        vm.prank(recipient);
        commonAds.createAdGroup(
            recipient,
            AdSpaceConfig({
                currency: address(dai),
                initialPrice: initialPriceInDai,
                taxRate: taxRateBPS
            }),
            3,
            ""
        );

        address buyer = _getAccount(69, 1000 ether);

        _grantMaxFlowPermissions(daix, buyer, address(marketplace));

        // Mint DAI for actual purchase
        dai.mint(buyer, 1000e18);

        // Mint more DAI & upgrade to DAIx for tax
        _mintAndUpgradeERC20(daix, buyer, 1000e18);

        assertEq(dai.balanceOf(buyer), 1000e18);

        vm.prank(buyer);
        dai.approve(address(marketplace), initialPriceInDai);

        vm.prank(buyer);
        marketplace.buyFromListing(
            1,
            buyer,
            DEFAULT_QUANTITY,
            address(dai),
            initialPriceInDai
        );

        IDirectListings.Listing memory listing = marketplace.getListing(1);

        uint256 newPrice = 200e18;

        IDirectListings.ListingParameters
            memory priceChangeParams = IDirectListings.ListingParameters(
                listing.assetContract,
                listing.tokenId,
                listing.quantity,
                listing.currency,
                listing.taxRate,
                listing.taxBeneficiary,
                newPrice,
                listing.startTimestamp,
                listing.endTimestamp,
                listing.reserved
            );

        vm.prank(buyer);
        marketplace.updateListing(listing.listingId, priceChangeParams);
    }

    function testSelfAssessListingPrice() public {
        vm.prank(recipient);
        commonAds.createAdGroup(
            recipient,
            AdSpaceConfig({
                currency: CurrencyTransferLib.NATIVE_TOKEN,
                initialPrice: initialPrice,
                taxRate: baseTaxRateBPS
            }),
            3,
            ""
        );

        IDirectListings.Listing memory listing = marketplace.getListing(1);

        uint256 newPrice = 0.2 ether;

        IDirectListings.ListingParameters
            memory priceChangeParams = IDirectListings.ListingParameters(
                listing.assetContract,
                listing.tokenId,
                listing.quantity,
                listing.currency,
                listing.taxRate,
                listing.taxBeneficiary,
                newPrice,
                listing.startTimestamp,
                listing.endTimestamp,
                listing.reserved
            );
        address buyer = _getAccount(69, 1000 ether);

        _grantMaxFlowPermissions(ethx, buyer, address(marketplace));

        _upgradeETH(ethx, buyer, _taxDuePerWeek(baseTaxRateBPS, initialPrice));

        vm.prank(buyer);
        marketplace.buyFromListing{value: initialPrice}(
            1,
            buyer,
            DEFAULT_QUANTITY,
            CurrencyTransferLib.NATIVE_TOKEN,
            initialPrice
        );

        assertEq(
            _computeAssetFlowRate(baseTaxRateBPS, initialPrice),
            _getFlowRate(address(ethx), buyer, recipient)
        );

        console.log(
            "flowBefore",
            uint256(int256(_getFlowRate(address(ethx), buyer, recipient)))
        );

        vm.prank(buyer);
        marketplace.updateListing(listing.listingId, priceChangeParams);

        console.log(
            "flowAfter",
            uint256(int256(_getFlowRate(address(ethx), buyer, recipient)))
        );

        assertEq(
            _computeAssetFlowRate(baseTaxRateBPS, newPrice),
            _getFlowRate(address(ethx), buyer, recipient)
        );

        priceChangeParams.pricePerToken = initialPrice;

        vm.prank(buyer);
        marketplace.updateListing(listing.listingId, priceChangeParams);

        assertEq(
            _computeAssetFlowRate(baseTaxRateBPS, initialPrice),
            _getFlowRate(address(ethx), buyer, recipient)
        );

        priceChangeParams.pricePerToken = newPrice;
        vm.prank(buyer);
        marketplace.updateListing(listing.listingId, priceChangeParams);

        address buyer2 = _getAccount(96, 1000 ether);

        _grantMaxFlowPermissions(ethx, buyer2, address(marketplace));

        _upgradeETH(ethx, buyer2, _taxDuePerWeek(baseTaxRateBPS, newPrice));

        vm.prank(buyer2);
        vm.expectRevert(
            "Marketplace: msg.value must exactly be the total price."
        );
        marketplace.buyFromListing{value: initialPrice}(
            1,
            buyer2,
            DEFAULT_QUANTITY,
            CurrencyTransferLib.NATIVE_TOKEN,
            newPrice
        );

        vm.prank(buyer2);
        marketplace.buyFromListing{value: newPrice}(
            1,
            buyer2,
            DEFAULT_QUANTITY,
            CurrencyTransferLib.NATIVE_TOKEN,
            newPrice
        );
    }

    function testCreateDaiXStream() public {
        address account = vm.addr(69);
        address account2 = vm.addr(96);

        uint256 priceOfAsset = 104e18; // 104 DAI

        // 1.2% per week
        uint256 taxRateBPS = 120;

        uint256 duePerWeek = (priceOfAsset * taxRateBPS) / 10000;

        int96 duePerSecond = int96(int256(duePerWeek / 7 days));

        vm.startPrank(account);
        dai.mint(account, duePerWeek);
        dai.approve(address(daix), duePerWeek);
        daix.upgrade(duePerWeek);

        daix.createFlow(account2, duePerSecond);
        vm.stopPrank();

        vm.warp(block.timestamp + 7 days + 1);
        assertEq(daix.balanceOf(account), 0);
        assertGte(daix.balanceOf(account2), duePerWeek);
    }

    function testSetTokenXToDirectListingForTax() public {
        vm.prank(deployer);
        commonAds.setTokenX(address(dai), address(daix));
    }

    function testCancelListing() public {
        vm.prank(recipient);
        commonAds.createAdGroup(
            recipient,
            AdSpaceConfig({
                currency: CurrencyTransferLib.NATIVE_TOKEN,
                initialPrice: initialPrice,
                taxRate: baseTaxRateBPS
            }),
            3,
            ""
        );

        address buyer = _getAccount(69, 1000 ether);

        _grantMaxFlowPermissions(ethx, buyer, address(marketplace));

        _upgradeETH(ethx, buyer, 1 ether);

        vm.prank(buyer);
        marketplace.buyFromListing{value: initialPrice}(
            1,
            buyer,
            DEFAULT_QUANTITY,
            CurrencyTransferLib.NATIVE_TOKEN,
            initialPrice
        );

        assertEq(
            _getFlowRate(address(ethx), buyer, recipient),
            _computeFlowRate(baseTaxRateBPS, initialPrice)
        );
        assertEq(commonAds.ownerOf(1), buyer);

        vm.prank(buyer);
        marketplace.cancelListing(1);

        assertEq(_getFlowRate(address(ethx), buyer, recipient), 0);
        assertEq(commonAds.ownerOf(1), recipient);
    }

    function testForecloseListing() public {
        vm.prank(recipient);
        commonAds.createAdGroup(
            recipient,
            AdSpaceConfig({
                currency: CurrencyTransferLib.NATIVE_TOKEN,
                initialPrice: initialPrice,
                taxRate: baseTaxRateBPS
            }),
            3,
            ""
        );

        address buyer = _getAccount(69, 1000 ether);

        _grantMaxFlowPermissions(ethx, buyer, address(marketplace));

        _upgradeETH(ethx, buyer, _taxDuePerWeek(baseTaxRateBPS, initialPrice));

        vm.prank(buyer);
        marketplace.buyFromListing{value: initialPrice}(
            1,
            buyer,
            DEFAULT_QUANTITY,
            CurrencyTransferLib.NATIVE_TOKEN,
            initialPrice
        );

        // 4 hour protocol deposit
        vm.warp(block.timestamp + 6 days + 20 hours - 2);

        vm.prank(recipient);
        vm.expectRevert("Marketplace: owner has balance");
        marketplace.forecloseListing(1);

        vm.warp(block.timestamp + 4 hours);

        vm.prank(recipient);
        marketplace.forecloseListing(1);

        assertEq(commonAds.ownerOf(1), recipient);
        assertEq(_getFlowRate(address(ethx), buyer, recipient), 0);

        _upgradeETH(ethx, buyer, _taxDuePerWeek(baseTaxRateBPS, initialPrice));

        vm.prank(buyer);
        marketplace.buyFromListing{value: initialPrice}(
            1,
            buyer,
            DEFAULT_QUANTITY,
            CurrencyTransferLib.NATIVE_TOKEN,
            initialPrice
        );

        vm.warp(block.timestamp + 7 days);

        address landlord = _getAccount(420, 1000 ether);

        vm.prank(landlord);
        vm.expectRevert("Marketplace: not tax beneficiary or landlord");
        marketplace.forecloseListing(1);

        vm.prank(deployer);
        MarketplaceV3(payable(address(marketplace))).grantRole(
            keccak256("LANDLORD_ROLE"),
            landlord
        );

        vm.prank(landlord);
        marketplace.forecloseListing(1);
    }

    ////////////////////////// HELPERS //////////////////////////

    function _getFlowRate(
        address token,
        address sender,
        address reciever
    ) internal view returns (int96) {
        (, int96 flowRate, , ) = cfa.getFlow(
            ISuperToken(token),
            sender,
            reciever
        );
        return flowRate;
    }

    function _computeAssetFlowRate(
        uint256 taxRateBPS,
        uint256 price
    ) internal pure returns (int96) {
        uint256 duePerWeek = _taxDuePerWeek(taxRateBPS, price);

        return int96(int256(duePerWeek / 7 days));
    }

    function _logFlowInfo(
        address sender,
        address receiver
    )
        internal
        view
        returns (
            uint256 timestamp,
            int96 flowRate,
            uint256 deposit,
            uint256 owedDeposit
        )
    {
        (timestamp, flowRate, deposit, owedDeposit) = cfa.getFlow(
            ethx,
            sender,
            receiver
        );

        console.log("..................... Flow Info .....................");
        console.log("flowRate             :", uint256(int256(flowRate)));
        console.log("deposit              :", deposit);
        console.log("owedDeposit          :", owedDeposit);
        console.log("timestamp            :", timestamp);
    }

    function _computeFlowRate(
        uint256 taxRateBPS,
        uint256 price
    ) internal pure returns (int96) {
        uint256 duePerWeek = _taxDuePerWeek(taxRateBPS, price);

        return int96(int256(duePerWeek / 7 days));
    }

    function _taxDuePerWeek(
        uint256 taxRateBPS,
        uint256 price
    ) internal pure returns (uint256) {
        return (price * taxRateBPS) / MAX_BPS;
    }

    function _grantAssetRole(address tokenContract) internal {
        vm.prank(deployer);
        MarketplaceV3(payable(address(marketplace))).grantRole(
            keccak256("ASSET_ROLE"),
            tokenContract
        );
    }

    function _upgradeETH(
        ISuperToken ethX,
        address to,
        uint256 amount
    ) internal {
        vm.prank(to);
        ISETH(address(ethX)).upgradeByETH{value: amount}();
    }
}

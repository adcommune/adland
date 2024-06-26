// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import {console} from "forge-std/Test.sol";
import {CommonAdSpacesBase, ISuperToken, SuperToken} from "./helpers/CommonAdSpacesBase.sol";
import {CommonAdValidator} from "../src/CommonAdValidator.sol";
import {IEAS, AttestationRequest, AttestationRequestData} from "eas/IEAS.sol";
import {NO_EXPIRATION_TIME, EMPTY_UID} from "eas/Common.sol";
import {ISchemaRegistry} from "eas/ISchemaRegistry.sol";
import {AdSpaceConfig} from "../src/CommonAdSpaces.sol";
import {CurrencyTransferLib} from "contracts/lib/CurrencyTransferLib.sol";

contract CommonAdValidatorTest is CommonAdSpacesBase {
    CommonAdValidator internal validator;
    ISchemaRegistry registry =
        ISchemaRegistry(0x4200000000000000000000000000000000000020);
    IEAS internal eas = IEAS(0x4200000000000000000000000000000000000021);
    uint256 initialPriceInDai = 100e18; // 100 DAI
    uint256 taxRateBPS = 120; // 1.2% per month
    uint256 constant DEFAULT_QUANTITY = 1;
    string buyerAdURI = "https://www.google.com";
    address buyer = _getAccount(69, 1000 ether);

    function setUp() public override {
        vm.createSelectFork("optsepolia");

        super.setUp();

        validator = new CommonAdValidator(eas);
        validator.setCommonAdSpaces(commonAds);
    }

    function testSomething() public {
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

        bytes32 schema = registry.register(
            "uint256 adGroupId,uint256 adSpaceId,string cid",
            validator,
            false
        );

        uint256 spaceId = _buyListingDAI();

        vm.prank(vm.addr(99123));
        vm.expectRevert("CommonAdValidator: Not group owner");
        eas.attest(
            AttestationRequest({
                schema: schema,
                data: AttestationRequestData({
                    recipient: buyer, // No recipient
                    expirationTime: NO_EXPIRATION_TIME, // No expiration time
                    revocable: false,
                    refUID: EMPTY_UID, // No references UI
                    data: abi.encode(
                        uint256(0),
                        uint256(spaceId),
                        string("SUPER_CID")
                    ), // Encode a single uint256 as a parameter to the schema
                    value: 0 // No value/ETH
                })
            })
        );

        vm.prank(recipient);
        eas.attest(
            AttestationRequest({
                schema: schema,
                data: AttestationRequestData({
                    recipient: buyer, // No recipient
                    expirationTime: NO_EXPIRATION_TIME, // No expiration time
                    revocable: false,
                    refUID: EMPTY_UID, // No references UI
                    data: abi.encode(
                        uint256(0),
                        uint256(spaceId),
                        string("SUPER_CID")
                    ), // Encode a single uint256 as a parameter to the schema
                    value: 0 // No value/ETH
                })
            })
        );
    }

    function _buyListingDAI() public returns (uint256 adSpaceId) {
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

        _grantMaxFlowPermissions(daix, buyer, address(marketplace));

        // Mint DAI for actual purchase
        dai.mint(buyer, 1000e18);

        // Mint more DAI & upgrade to DAIx for tax
        _mintAndUpgradeERC20(daix, buyer, 1000e18);

        assertEq(dai.balanceOf(buyer), 1000e18);

        vm.prank(buyer);
        dai.approve(address(marketplace), initialPriceInDai);

        adSpaceId = 1;

        vm.prank(buyer);
        marketplace.buyFromListing(
            adSpaceId,
            buyer,
            DEFAULT_QUANTITY,
            address(dai),
            initialPriceInDai
        );

        vm.prank(buyer);
        commonAds.updateAdURI(1, "ipfs://[SUPER_CID]");
    }
}

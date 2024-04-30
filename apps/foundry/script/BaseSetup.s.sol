// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {WETH9} from "../test/mocks/WETH9.sol";
import {ISuperfluid, ISuperToken} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol";
import {ERC6551Registry} from "erc6551/ERC6551Registry.sol";
import {BaseScript} from "./Base.s.sol";
import "@thirdweb-dev/dynamic-contracts/src/interface/IExtension.sol";
import {DirectListingsLogic} from "contracts/prebuilts/marketplace/direct-listings/DirectListingsLogic.sol";
import {MarketplaceV3} from "contracts/prebuilts/marketplace/entrypoint/MarketplaceV3.sol";

contract BaseSetup is BaseScript, IExtension {
    /// @dev utils
    ISuperToken[] public superTokens;
    WETH9 public weth;
    ISuperToken daix;
    ISuperToken ethx;
    ISuperToken degenx;
    address cfav1;
    address cfav1Fowarder;

    address wethSepolia = 0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9;
    address daixSepolia = 0x9Ce2062b085A2268E8d769fFC040f6692315fd2c;
    address ethXSepolia = 0x30a6933Ca9230361972E413a15dC8114c952414e;
    address cfav1Sepolia = 0x6836F23d6171D74Ef62FcF776655aBcD2bcd62Ef;

    address wethBase = 0x4200000000000000000000000000000000000006;
    address ethXBase = 0x46fd5cfB4c12D87acD3a13e92BAa53240C661D93;
    address daiXBase = 0x708169c8C87563Ce904E0a7F3BFC1F3b0b767f41;
    address degenXBase = 0x1efF3Dd78F4A14aBfa9Fa66579bD3Ce9E1B30529;
    address cfav1Base = 0x19ba78B9cDB05A877718841c574325fdB53601bb;
    address cfav1FowarderBase = 0xcfA132E353cB4E398080B9700609bb008eceB125;

    address wethOptimismSepolia = 0x74A4A85C611679B73F402B36c0F84A7D2CcdFDa3;
    address daixOptimismSepolia = 0xD6FAF98BeFA647403cc56bDB598690660D5257d2;
    address ethXOptimismSepolia = 0x0043d7c85C8b96a49A72A92C0B48CdC4720437d7;
    address cfav1OptimismSepolia = 0x8a3170AdbC67233196371226141736E4151e7C26;
    address cfav1FowarderOptimismSepolia =
        0xcfA132E353cB4E398080B9700609bb008eceB125;

    function _initialize() internal {
        if (currentChain == DeployementChain.Sepolia) {
            weth = WETH9(payable(wethSepolia));
            superTokens = new ISuperToken[](2);
            superTokens[0] = ISuperToken(daixSepolia);
            superTokens[1] = ISuperToken(ethXSepolia);
            cfav1 = cfav1Sepolia;
            cfav1Fowarder = address(0);
        } else if (currentChain == DeployementChain.OptimismSepolia) {
            weth = WETH9(payable(wethOptimismSepolia));
            superTokens = new ISuperToken[](2);
            superTokens[0] = ISuperToken(daixOptimismSepolia);
            superTokens[1] = ISuperToken(ethXOptimismSepolia);
            cfav1 = cfav1OptimismSepolia;
            cfav1Fowarder = cfav1FowarderOptimismSepolia;
        } else if (currentChain == DeployementChain.Base) {
            weth = WETH9(payable(wethBase));
            superTokens = new ISuperToken[](3);
            superTokens[0] = ISuperToken(ethXBase);
            superTokens[1] = ISuperToken(daiXBase);
            superTokens[2] = ISuperToken(degenXBase);
            cfav1 = cfav1Base;
            cfav1Fowarder = cfav1FowarderBase;
        }
    }

    function _setupExtensions()
        internal
        returns (Extension[] memory extensions)
    {
        extensions = new Extension[](1);

        // Deploy `DirectListings`
        address directListings = address(
            new DirectListingsLogic(address(weth))
        );

        // Extension: DirectListingsLogic
        Extension memory extensionDirectListings;
        extensionDirectListings.metadata = ExtensionMetadata({
            name: "DirectListingsLogic",
            metadataURI: "ipfs://DirectListings",
            implementation: directListings
        });

        extensionDirectListings.functions = new ExtensionFunction[](14);
        extensionDirectListings.functions[0] = ExtensionFunction(
            DirectListingsLogic.totalListings.selector,
            "totalListings()"
        );
        extensionDirectListings.functions[1] = ExtensionFunction(
            DirectListingsLogic.isBuyerApprovedForListing.selector,
            "isBuyerApprovedForListing(uint256,address)"
        );
        extensionDirectListings.functions[2] = ExtensionFunction(
            DirectListingsLogic.isCurrencyApprovedForListing.selector,
            "isCurrencyApprovedForListing(uint256,address)"
        );
        extensionDirectListings.functions[3] = ExtensionFunction(
            DirectListingsLogic.currencyPriceForListing.selector,
            "currencyPriceForListing(uint256,address)"
        );
        extensionDirectListings.functions[4] = ExtensionFunction(
            DirectListingsLogic.createListing.selector,
            "createListing((address,uint256,uint256,address,uint256,address,uint256,uint128,uint128,bool))"
        );
        extensionDirectListings.functions[5] = ExtensionFunction(
            DirectListingsLogic.updateListing.selector,
            "updateListing(uint256,(address,uint256,uint256,address,uint256,address,uint256,uint128,uint128,bool))"
        );
        extensionDirectListings.functions[6] = ExtensionFunction(
            DirectListingsLogic.cancelListing.selector,
            "cancelListing(uint256)"
        );
        extensionDirectListings.functions[7] = ExtensionFunction(
            DirectListingsLogic.approveBuyerForListing.selector,
            "approveBuyerForListing(uint256,address,bool)"
        );
        extensionDirectListings.functions[8] = ExtensionFunction(
            DirectListingsLogic.approveCurrencyForListing.selector,
            "approveCurrencyForListing(uint256,address,uint256)"
        );
        extensionDirectListings.functions[9] = ExtensionFunction(
            DirectListingsLogic.buyFromListing.selector,
            "buyFromListing(uint256,address,uint256,address,uint256)"
        );
        extensionDirectListings.functions[10] = ExtensionFunction(
            DirectListingsLogic.getAllListings.selector,
            "getAllListings(uint256,uint256)"
        );
        extensionDirectListings.functions[11] = ExtensionFunction(
            DirectListingsLogic.getAllValidListings.selector,
            "getAllValidListings(uint256,uint256)"
        );
        extensionDirectListings.functions[12] = ExtensionFunction(
            DirectListingsLogic.getListing.selector,
            "getListing(uint256)"
        );
        extensionDirectListings.functions[13] = ExtensionFunction(
            DirectListingsLogic.forecloseListing.selector,
            "forecloseListing(uint256)"
        );

        extensions[0] = extensionDirectListings;
    }

    function _grandCommonAdsAccessToMarketplace(
        address marketplace,
        address commonAds
    ) internal {
        MarketplaceV3(payable(address(marketplace))).grantRole(
            keccak256("LISTER_ROLE"),
            address(commonAds)
        );
        MarketplaceV3(payable(address(marketplace))).grantRole(
            keccak256("ASSET_ROLE"),
            address(commonAds)
        );
    }
}

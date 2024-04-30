// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {console} from "forge-std/Script.sol";
import {WETH9} from "../test/mocks/WETH9.sol";
import {BaseSetup} from "./BaseSetup.s.sol";
import {TWProxy} from "contracts/infra/TWProxy.sol";
import {MarketplaceV3} from "contracts/prebuilts/marketplace/entrypoint/MarketplaceV3.sol";
import {DirectListingsLogic} from "contracts/prebuilts/marketplace/direct-listings/DirectListingsLogic.sol";
import "@thirdweb-dev/dynamic-contracts/src/interface/IExtension.sol";
import {ISuperfluid, ISuperToken} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol";
import {UUPSProxy} from "../src/lib/UUPSProxy.sol";
import {CommonAdSpaces} from "../src/CommonAdSpaces.sol";

contract AdLandScripts is BaseSetup {
    function delpoyAdLand(
        DeployementChain chain,
        address marketplace
    ) public broadcastOn(chain) {
        _initialize();

        CommonAdSpaces commonAds = CommonAdSpaces(
            address(
                new UUPSProxy(
                    address(new CommonAdSpaces()),
                    abi.encodeWithSelector(
                        CommonAdSpaces.initialize.selector,
                        address(marketplace),
                        ""
                    )
                )
            )
        );

        _saveDeployment(address(commonAds), "CommonAdSpaces");

        for (uint i = 0; i < superTokens.length; i++) {
            commonAds.setTokenX(
                superTokens[i].getUnderlyingToken(),
                address(superTokens[i])
            );
        }

        _grandCommonAdsAccessToMarketplace(
            address(marketplace),
            address(commonAds)
        );
    }

    function deployMarketplace(
        DeployementChain chain
    ) public broadcastOn(chain) {
        (, address caller, ) = vm.readCallers();

        _initialize();

        _deployMarketplace(caller);
    }

    function _deployMarketplace(
        address deployer
    ) public returns (DirectListingsLogic) {
        Extension[] memory extensions = _setupExtensions();

        address impl = address(
            new MarketplaceV3(
                MarketplaceV3.MarketplaceConstructorParams(
                    extensions,
                    address(0),
                    address(weth)
                )
            )
        );

        address marketplace = address(
            new TWProxy(
                impl,
                abi.encodeCall(
                    MarketplaceV3.initialize,
                    (deployer, "", new address[](0), deployer, 0)
                )
            )
        );

        MarketplaceV3(payable(address(marketplace))).revokeRole(
            keccak256("LISTER_ROLE"),
            address(0)
        );
        MarketplaceV3(payable(address(marketplace))).revokeRole(
            keccak256("ASSET_ROLE"),
            address(0)
        );

        return DirectListingsLogic(marketplace);
    }

    function replaceWithNewDirectListingLogic(
        address marketplace
    ) public broadcastOn(DeployementChain.OptimismSepolia) {
        Extension[] memory extensions = _setupExtensions();

        MarketplaceV3(payable(address(marketplace))).replaceExtension(
            extensions[0]
        );
    }
}

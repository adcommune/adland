// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {console} from "forge-std/Script.sol";
import {WETH9} from "../test/mocks/WETH9.sol";
import {BaseSetup} from "./BaseSetup.s.sol";
import {TWProxy} from "contracts/infra/TWProxy.sol";
import {MarketplaceV3} from "contracts/prebuilts/marketplace/entrypoint/MarketplaceV3.sol";
import {DirectListingsLogic} from "contracts/prebuilts/marketplace/direct-listings/DirectListingsLogic.sol";
import {CurrencyTransferLib} from "contracts/lib/CurrencyTransferLib.sol";
import "@thirdweb-dev/dynamic-contracts/src/interface/IExtension.sol";
import {ISuperfluid, ISuperToken} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol";
import {UUPSProxy} from "../src/lib/UUPSProxy.sol";
import {CommonAdSpaces} from "../src/CommonAdSpaces.sol";
import {CommonAdValidator} from "../src/CommonAdValidator.sol";
import {IEAS, ISchemaRegistry} from "eas/IEAS.sol";
import {UserBase} from "../src/UserBase.sol";

contract AdLandScripts is BaseSetup {
    function updateDeployUserBase(
        DeployementChain chain
    ) public broadcastOn(chain) {
        UserBase userBase = UserBase(_readDeployment("UserBase"));

        UserBase newBase = new UserBase();

        userBase.upgradeTo(address(newBase));
    }

    function deployUserBase(DeployementChain chain) public broadcastOn(chain) {
        _initialize();

        address userBase = address(
            new UUPSProxy(
                address(new UserBase()),
                abi.encodeWithSelector(UserBase.initialize.selector)
            )
        );

        _saveDeployment(userBase, "UserBase");
    }

    function deployAdSpaceValidator(
        DeployementChain chain
    ) public broadcastOn(chain) {
        _initialize();

        CommonAdValidator validator = new CommonAdValidator(
            IEAS(0x4200000000000000000000000000000000000021)
        );

        validator.setCommonAdSpaces(
            CommonAdSpaces(_readDeployment("CommonAdSpaces"))
        );

        bytes32 schema = ISchemaRegistry(
            0x4200000000000000000000000000000000000020
        ).register(
                "uint256 adGroupId,uint256 adSpaceId,string cid,string reason",
                validator,
                true
            );

        _saveDeployment(address(validator), "CommonAdValidator");
    }

    function updateTokenX(
        DeployementChain chain,
        address commonAdSapceAddress
    ) public broadcastOn(chain) {
        CommonAdSpaces(commonAdSapceAddress).setTokenX(
            ISuperToken(usdcXBase).getUnderlyingToken(),
            address(0)
        );
    }

    function deployAdLand(
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
                        "ipfs://QmcsF6ZVPk1HskHEHPe9eNxw69rtWC1W7WriP6QT9GybMe"
                    )
                )
            )
        );

        _saveDeployment(address(commonAds), "CommonAdSpaces");

        for (uint i = 0; i < superTokens.length; i++) {
            commonAds.setTokenX(
                superTokens[i].getUnderlyingToken() == address(0)
                    ? CurrencyTransferLib.NATIVE_TOKEN
                    : superTokens[i].getUnderlyingToken(),
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

        _saveDeployment(marketplace, "DirectListingsLogic");

        return DirectListingsLogic(marketplace);
    }

    function replaceWithNewDirectListingLogic(
        DeployementChain chain,
        address marketplace
    ) public broadcastOn(chain) {
        Extension[] memory extensions = _setupExtensions();

        MarketplaceV3(payable(address(marketplace))).replaceExtension(
            extensions[0]
        );
    }
}

// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {console} from "forge-std/Script.sol";
import {BaseScript} from "./Base.s.sol";
import {CommonAdGroupAdminFactory} from "../src/CommonAdGroupAdminFactory.sol";

contract UpgradeAdGroupAdminScript is BaseScript {
    function upgradeTestnet()
        public
        broadcastOn(DeployementChain.OptimismSepolia)
    {
        CommonAdGroupAdminFactory deployedCommonAdGroupFactory = CommonAdGroupAdminFactory(
                _readDeployment("CommonAdGroupAdminFactory")
            );

        CommonAdGroupAdminFactory newFactory = new CommonAdGroupAdminFactory();

        deployedCommonAdGroupFactory.upgradeTo(address(newFactory));
    }
}

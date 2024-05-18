// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {console} from "forge-std/Script.sol";
import {BaseScript} from "./Base.s.sol";
import {CommonAdSpaces} from "../src/CommonAdSpaces.sol";

contract UpgradeCommonAdSpacesScript is BaseScript {
    function upgradeTestnet()
        public
        broadcastOn(DeployementChain.OptimismSepolia)
    {
        CommonAdSpaces deployCommonAdSpaces = CommonAdSpaces(
            _readDeployment("CommonAdSpaces")
        );

        console.log(deployCommonAdSpaces.owner());

        CommonAdSpaces newCommonAds = new CommonAdSpaces();

        deployCommonAdSpaces.upgradeTo(address(newCommonAds));
    }
}

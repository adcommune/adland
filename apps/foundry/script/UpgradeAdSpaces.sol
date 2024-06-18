// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {console} from "forge-std/Script.sol";
import {BaseScript} from "./Base.s.sol";
import {CommonAdSpaces} from "../src/CommonAdSpaces.sol";
import {AdGroup} from "../src/lib/Structs.sol";

contract UpgradeScripts is BaseScript {
    function upgradeCommonAds(
        DeployementChain chain
    ) public broadcastOn(chain) {
        CommonAdSpaces deployCommonAdSpaces = CommonAdSpaces(
            _readDeployment("CommonAdSpaces")
        );

        console.log(deployCommonAdSpaces.owner());

        CommonAdSpaces newCommonAds = new CommonAdSpaces();

        deployCommonAdSpaces.upgradeTo(address(newCommonAds));
    }
}

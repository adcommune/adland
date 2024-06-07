// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import {console} from "forge-std/Test.sol";
import {CommonAdSpacesBase, ISuperToken, SuperToken} from "./helpers/CommonAdSpacesBase.sol";
import {CurrencyTransferLib} from "contracts/lib/CurrencyTransferLib.sol";

import {AdSpaceConfig} from "../src/CommonAdSpaces.sol";
import {AdGroup} from "../src/lib/Structs.sol";
import {CommonAdPool} from "../src/CommonAdPool.sol";
import {SimpleAccountFactory} from "account-abstraction/samples/SimpleAccountFactory.sol";
import {SimpleAccount, IEntryPoint} from "account-abstraction/samples/SimpleAccount.sol";

contract CommonAdPoolTest is CommonAdSpacesBase {
    IEntryPoint entryPoint = IEntryPoint(address(0));
    SimpleAccountFactory factory = new SimpleAccountFactory(entryPoint);
    uint256 constant baseTaxRateBPS = 120; // 1.2% per month

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
                "createAdGroup(address,(address,uint256,uint256),uint256)",
                address(account),
                AdSpaceConfig({
                    currency: CurrencyTransferLib.NATIVE_TOKEN,
                    initialPrice: initialPrice,
                    taxRate: baseTaxRateBPS
                }),
                3
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
            3
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
}

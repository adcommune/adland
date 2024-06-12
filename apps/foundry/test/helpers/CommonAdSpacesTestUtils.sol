// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {CommonAdSpacesBase} from "./CommonAdSpacesBase.sol";
import {AdSpaceConfig} from "../../src/CommonAdSpaces.sol";
import {CurrencyTransferLib} from "contracts/lib/CurrencyTransferLib.sol";

contract CommonAdSpaceTestUtils is CommonAdSpacesBase {
    uint256 constant baseTaxRateBPS = 120; // 1.2% per month

    function _createAdGroup(
        address to,
        uint256 price,
        uint256 size
    ) internal returns (uint256 groupId) {
        vm.prank(to);
        return
            commonAds.createAdGroup(
                to,
                AdSpaceConfig({
                    currency: CurrencyTransferLib.NATIVE_TOKEN,
                    initialPrice: price,
                    taxRate: baseTaxRateBPS
                }),
                size
            );
    }

    function _getBuyerAccount(
        uint256 pk,
        uint256 deal
    ) internal returns (address acct) {
        acct = _getAccount(pk, deal);
        _grantMaxFlowPermissions(ethx, acct, address(marketplace));
    }
}

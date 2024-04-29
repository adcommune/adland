// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import {CFASuperAppBase} from "@superfluid-finance/ethereum-contracts/contracts/apps/CFASuperAppBase.sol";
import {ISuperfluid, ISuperToken, SuperAppDefinitions} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol";
import {SuperTokenV1Library} from "@superfluid-finance/ethereum-contracts/contracts/apps/SuperTokenV1Library.sol";
import {SimpleAccount} from "account-abstraction/samples/SimpleAccount.sol";
import {IEntryPoint} from "account-abstraction/interfaces/IEntryPoint.sol";
import {console} from "forge-std/Test.sol";

contract CommonAdGroupAccount is SimpleAccount, CFASuperAppBase {
    constructor(
        IEntryPoint _entryPoint,
        ISuperfluid _host
    ) SimpleAccount(_entryPoint) CFASuperAppBase(_host) {}

    function initialize(address owner) public virtual override initializer {
        super._initialize(owner);

        uint256 configWord = SuperAppDefinitions.APP_LEVEL_FINAL |
            // SuperAppDefinitions.BEFORE_AGREEMENT_CREATED_NOOP |
            // SuperAppDefinitions.AFTER_AGREEMENT_CREATED_NOOP |
            // SuperAppDefinitions.BEFORE_AGREEMENT_UPDATED_NOOP |
            // SuperAppDefinitions.AFTER_AGREEMENT_UPDATED_NOOP |
            SuperAppDefinitions.BEFORE_AGREEMENT_TERMINATED_NOOP |
            SuperAppDefinitions.AFTER_AGREEMENT_TERMINATED_NOOP;

        HOST.registerAppWithKey(configWord, "");
    }
}

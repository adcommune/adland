// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import {CFASuperAppBase} from "@superfluid-finance/ethereum-contracts/contracts/apps/CFASuperAppBase.sol";
import {ISuperfluid, ISuperToken, SuperAppDefinitions} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol";
import {SuperTokenV1Library} from "@superfluid-finance/ethereum-contracts/contracts/apps/SuperTokenV1Library.sol";
import {SimpleAccount} from "account-abstraction/samples/SimpleAccount.sol";
import {IEntryPoint} from "account-abstraction/interfaces/IEntryPoint.sol";
import {ISuperfluidPool} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/agreements/gdav1/ISuperfluidPool.sol";
import {PoolConfig} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/agreements/gdav1/IGeneralDistributionAgreementV1.sol";
import {console} from "forge-std/Test.sol";

contract CommonAdGroupAccount is SimpleAccount, CFASuperAppBase {
    using SuperTokenV1Library for ISuperToken;

    address poolManager;

    mapping(ISuperToken => ISuperfluidPool) public pools;

    constructor(
        IEntryPoint _entryPoint,
        ISuperfluid _host
    ) SimpleAccount(_entryPoint) CFASuperAppBase(_host) {}

    function initialize(
        address _owner,
        address _poolManager
    ) public virtual initializer {
        super._initialize(_owner);
        poolManager = _poolManager;

        selfRegister(true, true, true);
    }

    function onFlowCreated(
        ISuperToken _superToken,
        address _sender,
        bytes calldata _ctx
    ) internal override returns (bytes memory newCtx) {
        (address pool, bytes memory poolCtx) = _getPool(_superToken, _ctx);

        newCtx = poolCtx;

        int96 inflowRate = _superToken.getFlowRate(_sender, address(this));

        return _superToken.createFlowWithCtx(pool, inflowRate, newCtx);
    }

    function onFlowUpdated(
        ISuperToken _superToken,
        address _sender,
        int96 /* _previousFlowRate */,
        uint256 /*lastUpdated*/,
        bytes calldata ctx
    ) internal override returns (bytes memory newCtx) {
        (address pool, bytes memory poolCtx) = _getPool(_superToken, ctx);

        newCtx = poolCtx;

        int96 inflowChange = _superToken.getFlowRate(_sender, address(this));

        return _superToken.updateFlowWithCtx(pool, inflowChange, newCtx);
    }

    function onFlowDeleted(
        ISuperToken _superToken,
        address /*sender*/,
        address /*receiver*/,
        int96 /*previousFlowRate*/,
        uint256 /*lastUpdated*/,
        bytes calldata ctx
    ) internal override returns (bytes memory newCtx) {
        (address pool, bytes memory poolCtx) = _getPool(_superToken, ctx);

        newCtx = poolCtx;

        return _superToken.deleteFlowWithCtx(address(this), pool, newCtx);
    }

    function _getPool(
        ISuperToken _superToken,
        bytes memory ctx
    ) internal returns (address pool, bytes memory newCtx) {
        if (address(pools[_superToken]) == address(0)) {
            pools[_superToken] = _superToken.createPool(
                address(this),
                PoolConfig(false, true)
            );
            newCtx = _superToken.updateMemberUnitsWithCtx(
                pools[_superToken],
                address(this),
                1000,
                ctx
            );
            newCtx = _superToken.connectPoolWithCtx(pools[_superToken], newCtx);
        } else {
            newCtx = ctx;
        }
        pool = address(pools[_superToken]);
    }

    function getPool(
        ISuperToken _superToken
    ) public view returns (ISuperfluidPool) {
        return pools[_superToken];
    }
}

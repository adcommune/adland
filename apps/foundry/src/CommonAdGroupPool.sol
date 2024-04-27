// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import {CFASuperAppBase} from "@superfluid-finance/ethereum-contracts/contracts/apps/CFASuperAppBase.sol";
import {ISuperfluid, ISuperToken} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol";
import {SuperTokenV1Library} from "@superfluid-finance/ethereum-contracts/contracts/apps/SuperTokenV1Library.sol";
import {PoolConfig} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/agreements/gdav1/IGeneralDistributionAgreementV1.sol";
import {ISuperfluidPool} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/agreements/gdav1/ISuperfluidPool.sol";

contract CommonAdGroup is CFASuperAppBase {
    using SuperTokenV1Library for ISuperToken;

    address poolManager;

    mapping(ISuperToken => ISuperfluidPool) public pools;

    constructor(
        ISuperfluid _host,
        address _poolManager
    ) CFASuperAppBase(_host) {
        selfRegister(true, true, true);
        poolManager = _poolManager;
    }

    function onFlowCreated(
        ISuperToken _superToken,
        address _sender,
        bytes calldata _ctx
    ) internal override returns (bytes memory) {
        address pool = _getPool(_superToken);

        int96 inflowRate = _superToken.getFlowRate(_sender, address(this));

        return _superToken.createFlowWithCtx(pool, inflowRate, _ctx);
    }

    function onFlowUpdated(
        ISuperToken _superToken,
        address _sender,
        int96 _previousFlowRate,
        uint256 /*lastUpdated*/,
        bytes calldata ctx
    ) internal override returns (bytes memory) {
        address pool = _getPool(_superToken);

        int96 inflowChange = _superToken.getFlowRate(_sender, address(this)) -
            _previousFlowRate;

        return _superToken.updateFlowWithCtx(pool, inflowChange, ctx);
    }

    function onFlowDeleted(
        ISuperToken _superToken,
        address /*sender*/,
        address /*receiver*/,
        int96 /*previousFlowRate*/,
        uint256 /*lastUpdated*/,
        bytes calldata ctx
    ) internal override returns (bytes memory) {
        address pool = _getPool(_superToken);

        return _superToken.deleteFlowWithCtx(address(this), pool, ctx);
    }

    function _getPool(ISuperToken _superToken) internal returns (address pool) {
        if (address(pools[_superToken]) != address(0)) {
            pools[_superToken] = _superToken.createPool(
                poolManager,
                PoolConfig(false, true)
            );
        }
        pool = address(pools[_superToken]);
    }
}

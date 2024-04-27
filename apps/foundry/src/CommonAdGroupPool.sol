// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import {CFASuperAppBase} from "@superfluid-finance/ethereum-contracts/contracts/apps/CFASuperAppBase.sol";
import {ISuperfluid, ISuperToken} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol";
import {SuperTokenV1Library} from "@superfluid-finance/ethereum-contracts/contracts/apps/SuperTokenV1Library.sol";

contract CommonAdGroup is CFASuperAppBase {
    using SuperTokenV1Library for ISuperToken;
    address pool;

    constructor(ISuperfluid _host) CFASuperAppBase(_host) {
        selfRegister(true, true, true);
    }

    function onFlowCreated(
        ISuperToken _superToken,
        address _sender,
        bytes calldata _ctx
    ) internal override returns (bytes memory) {
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
        int96 inflowChange = _superToken.getFlowRate(_sender, address(this)) -
            _previousFlowRate;

        return _superToken.updateFlowWithCtx(pool, inflowChange, ctx);
    }

    function onFlowDeleted(
        ISuperToken superToken,
        address /*sender*/,
        address receiver,
        int96 previousFlowRate,
        uint256 /*lastUpdated*/,
        bytes calldata ctx
    ) internal override returns (bytes memory) {
        return superToken.deleteFlowWithCtx(address(this), pool, ctx);
    }
}

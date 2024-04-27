// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import {CFASuperAppBase} from "@superfluid-finance/ethereum-contracts/contracts/apps/CFASuperAppBase.sol";
import {ISuperfluid, ISuperToken} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol";
import {SuperTokenV1Library} from "@superfluid-finance/ethereum-contracts/contracts/apps/SuperTokenV1Library.sol";

contract CommonAdGroup is CFASuperAppBase {
    using SuperTokenV1Library for ISuperToken;

    address poolManager;

    mapping(ISuperToken => address) public pools;

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
        int96 inflowRate = _superToken.getFlowRate(_sender, address(this));

        return
            _superToken.createFlowWithCtx(pools[_superToken], inflowRate, _ctx);
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

        return
            _superToken.updateFlowWithCtx(
                pools[_superToken],
                inflowChange,
                ctx
            );
    }

    function onFlowDeleted(
        ISuperToken _superToken,
        address /*sender*/,
        address /*receiver*/,
        int96 /*previousFlowRate*/,
        uint256 /*lastUpdated*/,
        bytes calldata ctx
    ) internal override returns (bytes memory) {
        return
            _superToken.deleteFlowWithCtx(
                address(this),
                pools[_superToken],
                ctx
            );
    }
}

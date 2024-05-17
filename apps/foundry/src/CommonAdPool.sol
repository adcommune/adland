// SPDX-License-Identifier: MIT
pragma solidity 0.8.23;

import {ISuperfluid, ISuperToken} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol";
import {SuperTokenV1Library} from "@superfluid-finance/ethereum-contracts/contracts/apps/SuperTokenV1Library.sol";
import {ISuperfluidPool} from "@superfluid-finance/ethereum-contracts/contracts/agreements/gdav1/SuperfluidPool.sol";
import {PoolConfig} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/agreements/gdav1/IGeneralDistributionAgreementV1.sol";
import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";

contract CommonAdPool is AccessControl {
    using SuperTokenV1Library for ISuperToken;

    bytes32 public constant POOL_ADMIN_ROLE = keccak256("POOL_ADMIN_ROLE");

    ISuperToken public superToken;

    ISuperfluidPool public pool;

    constructor(ISuperToken _superToken) {
        superToken = _superToken;
        pool = superToken.createPool(
            address(this),
            PoolConfig({
                transferabilityForUnitsOwner: false,
                distributionFromAnyAddress: false
            })
        );
    }

    /**
     * Update the units of a member
     * @param member address of the member
     * @param units new units
     */
    function updateMemberUnits(
        address member,
        uint128 units
    ) public onlyRole(POOL_ADMIN_ROLE) {
        superToken.updateMemberUnits(pool, member, units);
    }

    /**
     * Discrete distribution of tokens to the pool
     * @param amount The amount of tokens to distribute
     */
    function distribute(uint256 amount) public onlyRole(POOL_ADMIN_ROLE) {
        superToken.distributeToPool(address(this), pool, amount);
    }

    /**
     * Distribute a flow to the pool
     * @param flowRate The flow rate to distribute
     */
    function distributeFlow(int96 flowRate) public onlyRole(POOL_ADMIN_ROLE) {
        superToken.distributeFlow(address(this), pool, flowRate);
    }
}

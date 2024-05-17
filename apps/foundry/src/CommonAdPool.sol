// SPDX-License-Identifier: MIT
pragma solidity 0.8.23;

import {ISuperfluid, ISuperToken} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol";
import {SuperTokenV1Library} from "@superfluid-finance/ethereum-contracts/contracts/apps/SuperTokenV1Library.sol";
import {ISuperfluidPool} from "@superfluid-finance/ethereum-contracts/contracts/agreements/gdav1/SuperfluidPool.sol";
import {PoolConfig} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/agreements/gdav1/IGeneralDistributionAgreementV1.sol";
import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";

contract CommonAdPool is AccessControl {
    using SuperTokenV1Library for ISuperToken;

    bytes32 public constant MEMBER_UNITS_ADMIN_ROLE =
        keccak256("MEMBER_ADMIN_ROLE");

    ISuperToken public superToken;

    ISuperfluidPool public pool;

    constructor(ISuperToken _superToken) {
        superToken = _superToken;
        pool = superToken.createPool(
            address(this),
            PoolConfig({
                transferabilityForUnitsOwner: false,
                distributionFromAnyAddress: true
            })
        );
        // Granting commonAdsContract the DEFAULT_ADMIN_ROLE
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    /**
     * Update the units of a member
     * @param member address of the member
     * @param units new units
     */
    function updateMemberUnits(address member, uint128 units) public {
        require(
            hasRole(MEMBER_UNITS_ADMIN_ROLE, msg.sender) ||
                hasRole(DEFAULT_ADMIN_ROLE, msg.sender),
            "CommonAdPool: not authorized to update member units"
        );
        superToken.updateMemberUnits(pool, member, units);
    }
}

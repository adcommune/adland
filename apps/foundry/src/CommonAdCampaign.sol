// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import {ISuperToken} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol";
import {SuperTokenV1Library} from "@superfluid-finance/ethereum-contracts/contracts/apps/SuperTokenV1Library.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";
import {CommonAdSpaces} from "./CommonAdSpaces.sol";

contract CommonAdCampaign is AccessControl {
    CommonAdSpaces public commonAds;
    ISuperToken public superToken;
    bytes32 public constant REWARD_MANAGER_ROLE =
        keccak256("REWARD_MANAGER_ROLE");

    constructor(CommonAdSpaces _commonAds, ISuperToken _superToken) {
        commonAds = _commonAds;
        superToken = _superToken;

        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    modifier onlyAdGroupOwner(uint256 adId) {
        require(_isAdGroupOwner(adId), "CommonAdCampaign: Not ad group owner");
        _;
    }

    function startRewardStream(
        uint256 adId,
        int96 flowRate
    ) external onlyAdGroupOwner(adId) {
        // Require owner of ad group be calling this function
    }

    function updateRewardStream(
        uint256 adId,
        int96 newFlowRate
    ) external onlyAdGroupOwner(adId) {
        // Require owner of ad group be calling this function
    }

    function transferRewardStream(
        address from,
        address to
    ) external onlyRole(REWARD_MANAGER_ROLE) {
        // Require owner of ad group be calling this function
    }

    function _isAdGroupOwner(uint256 adId) internal view returns (bool) {
        return commonAds.getGroupByAd(adId).owner == msg.sender;
    }
}

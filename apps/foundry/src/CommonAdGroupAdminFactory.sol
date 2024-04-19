// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import {ERC721Upgradeable} from "@openzeppelin-upgradeable/contracts/token/ERC721/ERC721Upgradeable.sol";
import {UUPSUpgradeable} from "@openzeppelin-upgradeable/contracts/proxy/utils/UUPSUpgradeable.sol";
import {OwnableUpgradeable} from "@openzeppelin-upgradeable/contracts/access/OwnableUpgradeable.sol";
import {ICommonAdGroupAdminFactory} from "./interfaces/ICommonAdGroupAdminFactory.sol";
import {ERC6551AccountCreatorUpgradeable, AccountCreatorConfig} from "./lib/ERC6551AccountCreator.sol";

/**
 * @title CommonAdGroupAdminFactory
 * @dev A contract that creates and manages group admins for ad groups.
 */
contract CommonAdGroupAdminFactory is
    ERC6551AccountCreatorUpgradeable,
    ERC721Upgradeable,
    OwnableUpgradeable,
    UUPSUpgradeable
{
    /// @dev incrementing groupIds
    uint256 internal _groupIds;

    /**
     * @dev Constructor function.
     * @param accountConfig The configuration for the account creator.
     */
    function initialize(
        AccountCreatorConfig memory accountConfig
    ) public initializer {
        __ERC6551AccountCreator__init(accountConfig);
        __ERC721_init("CommonAdGroupAdminFactory", "CAGAF");
        __Ownable_init();
        __UUPSUpgradeable_init();
        _groupIds = 1;
    }

    /**
     * @dev Creates a new group admin and assigns it to the specified recipient.
     * Only the contract owner can call this function.
     * @param recipient The address of the recipient to whom the group admin will be assigned.
     * @return adGroupAdmin The address of the newly created group admin.
     * @return adGroupId The ID of the newly created group.
     */
    function createGroupAdmin(
        address recipient
    ) external onlyOwner returns (address adGroupAdmin, uint256 adGroupId) {
        uint256 groupId = _groupIds;

        _safeMint(recipient, groupId);

        adGroupAdmin = _createAccount(block.chainid, address(this), groupId);

        adGroupId = groupId;

        _groupIds++;
    }

    /**
     * @dev Retrieves the address of the ad group admin for a given ad group ID.
     * @param adGroupId The ID of the ad group.
     * @return adGroupAdmin The address of the ad group admin.
     */
    function getGroupAdmin(
        uint256 adGroupId
    ) external view returns (address adGroupAdmin) {
        adGroupAdmin = _getAccount(block.chainid, address(this), adGroupId);
    }

    function _authorizeUpgrade(
        address newImplementation
    ) internal override onlyOwner {}
}

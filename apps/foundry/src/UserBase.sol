// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import {UUPSUpgradeable} from "@openzeppelin-upgradeable/contracts/proxy/utils/UUPSUpgradeable.sol";
import {OwnableUpgradeable} from "@openzeppelin-upgradeable/contracts/access/OwnableUpgradeable.sol";

contract UserBase is UUPSUpgradeable, OwnableUpgradeable {
    event UserCreated(
        /**
         * @dev The address of the user (Smart Account)
         */
        address indexed smartAccount,
        /**
         * @dev Farcaster ID of the user
         */
        uint256 indexed fid
    );

    function initialize() public initializer {
        __Ownable_init();
        __UUPSUpgradeable_init();
    }

    function addUser(address smartAccount, uint256 fid) external {
        emit UserCreated(smartAccount, fid);
    }

    function _authorizeUpgrade(
        address newImplementation
    ) internal override onlyOwner {}
}

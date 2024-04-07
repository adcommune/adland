// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import {ERC6551Registry} from "erc6551/ERC6551Registry.sol";
import {AccountProxy} from "tokenbound/AccountProxy.sol";
import {Initializable} from "@openzeppelin-upgradeable/contracts/proxy/utils/Initializable.sol";

struct AccountCreatorConfig {
    ERC6551Registry registry;
    address implementation;
    address accountProxy;
}

contract ERC6551AccountCreatorUpgradeable is Initializable {
    AccountCreatorConfig internal _config;
    bytes32 internal _SALT;

    // solhint-disable-next-line func-name-mixedcase
    function __ERC6551AccountCreator__init(
        AccountCreatorConfig memory config
    ) internal onlyInitializing {
        _config = config;
        _SALT = bytes32("");
    }

    function _createAccount(
        uint256 chainId,
        address tokenContract,
        uint256 tokenId
    ) internal returns (address accountAddress) {
        accountAddress = _config.registry.createAccount(
            _config.implementation,
            _SALT,
            chainId,
            tokenContract,
            tokenId
        );
    }

    function _getAccount(
        uint256 chainId,
        address tokenContract,
        uint256 tokenId
    ) internal view returns (address accountAddress) {
        accountAddress = _config.registry.account(
            _config.implementation,
            _SALT,
            chainId,
            tokenContract,
            tokenId
        );
    }

    // Reserved storage space to allow for layout changes in the future.
    uint256[50] private __gap;
}

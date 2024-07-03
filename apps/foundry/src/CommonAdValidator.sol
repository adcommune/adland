// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import {CommonAdSpaces} from "./CommonAdSpaces.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {SchemaResolver} from "eas/resolver/SchemaResolver.sol";
import {IEAS, Attestation} from "eas/IEAS.sol";

contract CommonAdValidator is SchemaResolver, Ownable {
    CommonAdSpaces public commonAdSpaces;

    constructor(IEAS _eas) SchemaResolver(_eas) {}

    event AttestAd(bytes32 indexed uid, uint256 indexed adSpaceId, string cid);

    event RevokeAd(bytes32 indexed uid, uint256 indexed adSpaceId, string cid);

    function onAttest(
        Attestation calldata attestation,
        uint256 /*value*/
    ) internal override returns (bool) {
        (uint256 adGroupId, uint256 adSpaceId, string memory cid) = abi.decode(
            attestation.data,
            (uint256, uint256, string)
        );

        _requireAdGroupOwner(attestation.attester, adGroupId);

        emit AttestAd(attestation.uid, adSpaceId, cid);

        return true;
    }

    function onRevoke(
        Attestation calldata attestation,
        uint256 /*value*/
    ) internal override returns (bool) {
        (uint256 adGroupId, uint256 adSpaceId, string memory cid) = abi.decode(
            attestation.data,
            (uint256, uint256, string)
        );

        _requireAdGroupOwner(attestation.attester, adGroupId);

        emit RevokeAd(attestation.uid, adSpaceId, cid);

        return true;
    }

    function setCommonAdSpaces(
        CommonAdSpaces _commonAdSpaces
    ) external onlyOwner {
        commonAdSpaces = _commonAdSpaces;
    }

    function _requireAdGroupOwner(
        address attester,
        uint256 adGroupId
    ) private view {
        require(
            attester == commonAdSpaces.getGroup(adGroupId).owner,
            "CommonAdValidator: Not group owner"
        );
    }

    uint256[50] private __gap;
}

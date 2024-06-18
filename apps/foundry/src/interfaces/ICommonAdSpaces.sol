// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import {AdSpace, AdSpaceConfig} from "../lib/Structs.sol";
import {IAdStrategy} from "./IAdStrategy.sol";

/// @title ICommonAds
interface ICommonAdSpaces {
    event AdGroupCreated(
        uint256 indexed groupId,
        address indexed recipient,
        string indexed metadataURI
    );

    event AdSpaceCreated(uint256 indexed groupId, uint256 indexed adId);

    event AdSpaceURIUpdated(uint256 indexed adId, string uri);

    event AdGroupMetadataUpdated(uint256 indexed groupId, string metadataURI);

    event AdPoolCreated(
        uint256 indexed adId,
        address indexed superToken,
        address indexed pool,
        address underlyingToken
    );

    event AdSpaceStrategyUpdated(
        uint256 indexed adId,
        IAdStrategy indexed strategy
    );

    event TokenXSet(
        address indexed underlyingToken,
        address indexed superToken
    );

    function createAdGroup(
        address recipient,
        AdSpaceConfig memory initialAdSpaceConfig,
        uint256 numberOfAdSpaces,
        string memory metadataURI
    ) external returns (uint256 adGroupId);

    function openAdSpaces(
        uint256 adGroupId,
        AdSpaceConfig memory initialAdSpaceConfig,
        uint256 numberOfAdSpaces
    ) external;

    function updateAdURI(uint256 adId, string memory uri) external;

    function updateAdStrategy(uint256 adId, IAdStrategy strategy) external;

    function getAdUri(uint256 adId) external view returns (string memory uri);
}

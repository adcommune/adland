// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import {IDirectListings} from "contracts/prebuilts/marketplace/IMarketplace.sol";
import {CurrencyTransferLib} from "contracts/lib/CurrencyTransferLib.sol";
import {ERC721RoyaltyUpgradeable, ERC721Upgradeable} from "@openzeppelin-upgradeable/contracts/token/ERC721/extensions/ERC721RoyaltyUpgradeable.sol";
import {UUPSUpgradeable} from "@openzeppelin-upgradeable/contracts/proxy/utils/UUPSUpgradeable.sol";
import {OwnableUpgradeable} from "@openzeppelin-upgradeable/contracts/access/OwnableUpgradeable.sol";
// Local imports
import {CommonAdGroupAdminFactory} from "./CommonAdGroupAdminFactory.sol";
import {ICommonAdSpaces} from "./interfaces/ICommonAdSpaces.sol";
import {IAdStrategy} from "./interfaces/IAdStrategy.sol";
import {AdGroup, AdSpace, AdSpaceConfig} from "./lib/Structs.sol";

contract CommonAdSpaces is
    ERC721RoyaltyUpgradeable,
    ICommonAdSpaces,
    OwnableUpgradeable,
    UUPSUpgradeable
{
    uint256 internal MAX_BPS;
    string public placeholderURI;
    IDirectListings marketplace;
    CommonAdGroupAdminFactory public adGroupAdminFactory;

    mapping(uint256 => AdGroup) adGroups;

    mapping(uint256 => AdSpace) ads;

    mapping(address => address) public tokenXs;

    constructor() {}

    function initialize(
        address _marketplace,
        address _adGroupAdminFactory,
        string memory _placeholderURI
    ) public initializer {
        __ERC721Royalty_init();
        __ERC721_init("CommonAdSpaces", "CAS");
        __Ownable_init();
        __UUPSUpgradeable_init();

        marketplace = IDirectListings(_marketplace);
        adGroupAdminFactory = CommonAdGroupAdminFactory(_adGroupAdminFactory);
        placeholderURI = _placeholderURI;
        MAX_BPS = 10_000;
    }

    modifier onlyAdGroupAdmin(uint256 adGroupId) {
        require(
            adGroupAdminFactory.getGroupAdmin(adGroupId) == msg.sender,
            "CommonAdSpaces: Not group admin"
        );
        _;
    }

    modifier onlyAdOwner(uint256 adId) {
        require(ownerOf(adId) == msg.sender, "CommonAdSpaces: Not ad owner");
        _;
    }

    /**
     * @dev Creates a new ad group for the specified recipient.
     * @param recipient The address of the recipient for the ad group.
     * @return adGroupAdmin The address of the ad group admin.
     * @return adGroupId The ID of the newly created ad group.
     */
    function createAdGroup(
        address recipient
    ) external returns (address adGroupAdmin, uint256 adGroupId) {
        return _createdGroup(recipient);
    }

    /**
     * @dev Creates a new ad group with the specified recipient, initial ad space configuration, and size.
     * @param recipient The address of the recipient for the ad group.
     * @param initialAdSpaceConfig The initial configuration for the ad spaces in the ad group.
     * @param size The size of the ad group.
     * @return adGroupAdmin The address of the ad group admin.
     * @return adGroupId The ID of the created ad group.
     */
    function createAdGroup(
        address recipient,
        AdSpaceConfig memory initialAdSpaceConfig,
        uint256 size
    ) external returns (address adGroupAdmin, uint256 adGroupId) {
        (adGroupAdmin, adGroupId) = _createdGroup(recipient);

        _openAdSpaces(adGroupId, initialAdSpaceConfig, size);
    }

    /**
     * @dev Opens a specified number of ad spaces within an ad group.
     * Only the ad group admin can call this function.
     *
     * @param adGroupId The ID of the ad group.
     * @param initialAdSpaceConfig The initial configuration for the ad spaces.
     * @param numberOfAdSpaces The number of ad spaces to open.
     */
    function openAdSpaces(
        uint256 adGroupId,
        AdSpaceConfig memory initialAdSpaceConfig,
        uint256 numberOfAdSpaces
    ) external onlyAdGroupAdmin(adGroupId) {
        _openAdSpaces(adGroupId, initialAdSpaceConfig, numberOfAdSpaces);
    }

    /**
     * @dev Updates the URI of an advertisement.
     * @param adId The ID of the advertisement.
     * @param adURI The new URI for the advertisement.
     * @dev Requires the `adURI` to be a non-empty string.
     * @dev Emits an `AdSpaceURIUpdated` event with the updated `adId` and `adURI`.
     */
    function updateAdURI(
        uint256 adId,
        string memory adURI
    ) external onlyAdOwner(adId) {
        require(!_isEmptyString(adURI), "CommonAdSpaces: Empty URI");

        ads[adId].uri = adURI;

        emit AdSpaceURIUpdated(adId, adURI);
    }

    /**
     * @dev Updates the advertising strategy for a specific ad.
     * @param adId The ID of the ad to update.
     * @param strategy The new advertising strategy to set for the ad.
     * Requirements:
     * - The caller must be the admin of the ad group that the ad belongs to.
     */
    function updateAdStrategy(
        uint256 adId,
        IAdStrategy strategy
    ) external onlyAdGroupAdmin(ads[adId].adGroupId) {
        ads[adId].strategy = strategy;

        emit AdSpaceStrategyUpdated(adId, strategy);
    }

    function getAdUri(
        uint256 adId
    ) external view override returns (string memory uri) {
        if (ads[adId].strategy != IAdStrategy(address(0))) {
            return ads[adId].strategy.uri(adId);
        } else if (!_isEmptyString(ads[adId].uri)) {
            return ads[adId].uri;
        } else {
            return tokenURI(adId);
        }
    }

    function getTokenX(address underlying) external view returns (address) {
        return tokenXs[underlying];
    }

    /// @notice Set the tokenX address for a currency
    function setTokenX(
        address underlyingToken,
        address superToken
    ) external onlyOwner {
        tokenXs[underlyingToken] = superToken;

        emit TokenXSet(underlyingToken, superToken);
    }

    /**
     * INTERNAL METHODS
     */

    function _createdGroup(
        address recipient
    ) internal returns (address adGroupAdmin, uint256 adGroupId) {
        (adGroupAdmin, adGroupId) = adGroupAdminFactory.createGroupAdmin(
            recipient
        );

        adGroups[adGroupId] = AdGroup({admin: adGroupAdmin});

        emit AdGroupCreated(adGroupId, adGroupAdmin);
    }

    function _openAdSpaces(
        uint256 adGroupId,
        AdSpaceConfig memory config,
        uint256 numberOfAdSpaces
    ) internal {
        for (uint256 i = 0; i < numberOfAdSpaces; i++) {
            _openAdSpace(adGroupId, config);
        }
    }

    function _openAdSpace(
        uint256 adGroupId,
        AdSpaceConfig memory config
    ) internal returns (uint256 adId) {
        require(config.taxRate < MAX_BPS, "CommonAdSpaces: Tax rate too high");

        adId = marketplace.totalListings();
        address admin = adGroupAdminFactory.getGroupAdmin(adGroupId);

        _mint(address(this), adId);

        marketplace.createListing(
            IDirectListings.ListingParameters(
                address(this),
                adId,
                1,
                config.currency,
                config.taxRate,
                admin,
                config.initialPrice,
                uint128(block.timestamp),
                type(uint128).max,
                false
            )
        );

        _transfer(address(this), admin, adId);

        emit AdSpaceCreated(adGroupId, adId);
    }

    function _isEmptyString(string memory str) internal pure returns (bool) {
        return bytes(str).length == 0;
    }

    function isApprovedForAll(
        address,
        address operator
    ) public view override returns (bool) {
        return operator == address(marketplace);
    }

    /// @dev for safeTransferFrom() method use on buyListing()
    /// @dev then _beforeTokenTransfer() will decide if the transfer is allowed
    function _isApprovedOrOwner(
        address spender,
        uint256 tokenId
    ) internal view override returns (bool) {
        return
            super._isApprovedOrOwner(spender, tokenId) ||
            spender == address(marketplace);
    }

    // @dev only marketplace can transfer
    function _beforeTokenTransfer(
        address from,
        address,
        uint256 adId,
        uint256
    ) internal override {
        require(
            // Can only transfer from this contract or marketplace
            (from == address(0) || from == address(this)) ||
                msg.sender == address(marketplace),
            "CommonAdSpaces: Only marketplace can transfer"
        );

        _resetAd(adId);
    }

    function setTokenURI(string memory uri) external onlyOwner {
        placeholderURI = uri;
    }

    function tokenURI(uint256) public view override returns (string memory) {
        return placeholderURI;
    }

    function _resetAd(uint256 adId) internal {
        ads[adId].uri = "";
        ads[adId].strategy = IAdStrategy(address(0));
    }

    function _authorizeUpgrade(
        address newImplementation
    ) internal override onlyOwner {}
}

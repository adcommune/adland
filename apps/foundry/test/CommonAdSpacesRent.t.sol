pragma solidity ^0.8.19;

import {console} from "forge-std/Test.sol";
import {ISuperToken, SuperToken} from "./helpers/CommonAdSpacesBase.sol";
import {MarketplaceV3} from "contracts/prebuilts/marketplace/entrypoint/MarketplaceV3.sol";
import {CurrencyTransferLib} from "contracts/lib/CurrencyTransferLib.sol";
import {IDirectListings} from "contracts/prebuilts/marketplace/IMarketplace.sol";
import {SuperTokenV1Library} from "@superfluid-finance/ethereum-contracts/contracts/apps/SuperTokenV1Library.sol";
import {TestToken} from "@superfluid-finance/ethereum-contracts/contracts/utils/TestToken.sol";
import {AdSpaceConfig} from "../src/CommonAdSpaces.sol";
import {CommonAdSpaceTestUtils} from "./helpers/CommonAdSpacesTestUtils.sol";
import {AdGroup} from "../src/lib/Structs.sol";

contract CommonAdSpacesTest is CommonAdSpaceTestUtils {
    using SuperTokenV1Library for ISuperToken;
    uint256 constant MAX_BPS = 10_000;
    uint256 constant DEFAULT_QUANTITY = 1;

    address creator;
    address buyer;

    function setUp() public override {
        super.setUp();
        creator = _getAccount(1000, 1000 ether);
        buyer = _getBuyerAccount(1001, 1000 ether);
    }
}

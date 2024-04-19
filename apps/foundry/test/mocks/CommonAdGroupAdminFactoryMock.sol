// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {CommonAdGroupAdminFactory} from "../../src/CommonAdGroupAdminFactory.sol";

contract CommonAdGroupAdminFactoryMock is CommonAdGroupAdminFactory {
    function whoAmI() public pure returns (string memory) {
        return "CommonAdGroupAdminFactoryMock";
    }
}

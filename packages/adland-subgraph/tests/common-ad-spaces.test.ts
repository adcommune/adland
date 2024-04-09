import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { AdGroupCreated } from "../generated/schema"
import { AdGroupCreated as AdGroupCreatedEvent } from "../generated/CommonAdSpaces/CommonAdSpaces"
import { handleAdGroupCreated } from "../src/common-ad-spaces"
import { createAdGroupCreatedEvent } from "./common-ad-spaces-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let groupId = BigInt.fromI32(234)
    let beneficiary = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newAdGroupCreatedEvent = createAdGroupCreatedEvent(groupId, beneficiary)
    handleAdGroupCreated(newAdGroupCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AdGroupCreated created and stored", () => {
    assert.entityCount("AdGroupCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AdGroupCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "groupId",
      "234"
    )
    assert.fieldEquals(
      "AdGroupCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "beneficiary",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})

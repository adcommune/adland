import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  AdGroupCreated,
  AdSpaceCreated,
  AdSpaceStrategyUpdated,
  AdSpaceURIUpdated,
  AdminChanged,
  Approval,
  ApprovalForAll,
  BeaconUpgraded,
  Initialized,
  OwnershipTransferred,
  TokenXSet,
  Transfer,
  Upgraded
} from "../generated/CommonAdSpaces/CommonAdSpaces"

export function createAdGroupCreatedEvent(
  groupId: BigInt,
  beneficiary: Address
): AdGroupCreated {
  let adGroupCreatedEvent = changetype<AdGroupCreated>(newMockEvent())

  adGroupCreatedEvent.parameters = new Array()

  adGroupCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "groupId",
      ethereum.Value.fromUnsignedBigInt(groupId)
    )
  )
  adGroupCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "beneficiary",
      ethereum.Value.fromAddress(beneficiary)
    )
  )

  return adGroupCreatedEvent
}

export function createAdSpaceCreatedEvent(
  groupId: BigInt,
  adId: BigInt,
  adSpace: ethereum.Tuple
): AdSpaceCreated {
  let adSpaceCreatedEvent = changetype<AdSpaceCreated>(newMockEvent())

  adSpaceCreatedEvent.parameters = new Array()

  adSpaceCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "groupId",
      ethereum.Value.fromUnsignedBigInt(groupId)
    )
  )
  adSpaceCreatedEvent.parameters.push(
    new ethereum.EventParam("adId", ethereum.Value.fromUnsignedBigInt(adId))
  )
  adSpaceCreatedEvent.parameters.push(
    new ethereum.EventParam("adSpace", ethereum.Value.fromTuple(adSpace))
  )

  return adSpaceCreatedEvent
}

export function createAdSpaceStrategyUpdatedEvent(
  adId: BigInt,
  strategy: Address
): AdSpaceStrategyUpdated {
  let adSpaceStrategyUpdatedEvent = changetype<AdSpaceStrategyUpdated>(
    newMockEvent()
  )

  adSpaceStrategyUpdatedEvent.parameters = new Array()

  adSpaceStrategyUpdatedEvent.parameters.push(
    new ethereum.EventParam("adId", ethereum.Value.fromUnsignedBigInt(adId))
  )
  adSpaceStrategyUpdatedEvent.parameters.push(
    new ethereum.EventParam("strategy", ethereum.Value.fromAddress(strategy))
  )

  return adSpaceStrategyUpdatedEvent
}

export function createAdSpaceURIUpdatedEvent(
  adId: BigInt,
  uri: string
): AdSpaceURIUpdated {
  let adSpaceUriUpdatedEvent = changetype<AdSpaceURIUpdated>(newMockEvent())

  adSpaceUriUpdatedEvent.parameters = new Array()

  adSpaceUriUpdatedEvent.parameters.push(
    new ethereum.EventParam("adId", ethereum.Value.fromUnsignedBigInt(adId))
  )
  adSpaceUriUpdatedEvent.parameters.push(
    new ethereum.EventParam("uri", ethereum.Value.fromString(uri))
  )

  return adSpaceUriUpdatedEvent
}

export function createAdminChangedEvent(
  previousAdmin: Address,
  newAdmin: Address
): AdminChanged {
  let adminChangedEvent = changetype<AdminChanged>(newMockEvent())

  adminChangedEvent.parameters = new Array()

  adminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdmin",
      ethereum.Value.fromAddress(previousAdmin)
    )
  )
  adminChangedEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return adminChangedEvent
}

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createBeaconUpgradedEvent(beacon: Address): BeaconUpgraded {
  let beaconUpgradedEvent = changetype<BeaconUpgraded>(newMockEvent())

  beaconUpgradedEvent.parameters = new Array()

  beaconUpgradedEvent.parameters.push(
    new ethereum.EventParam("beacon", ethereum.Value.fromAddress(beacon))
  )

  return beaconUpgradedEvent
}

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createTokenXSetEvent(
  underlyingToken: Address,
  superToken: Address
): TokenXSet {
  let tokenXSetEvent = changetype<TokenXSet>(newMockEvent())

  tokenXSetEvent.parameters = new Array()

  tokenXSetEvent.parameters.push(
    new ethereum.EventParam(
      "underlyingToken",
      ethereum.Value.fromAddress(underlyingToken)
    )
  )
  tokenXSetEvent.parameters.push(
    new ethereum.EventParam(
      "superToken",
      ethereum.Value.fromAddress(superToken)
    )
  )

  return tokenXSetEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}

export function createUpgradedEvent(implementation: Address): Upgraded {
  let upgradedEvent = changetype<Upgraded>(newMockEvent())

  upgradedEvent.parameters = new Array()

  upgradedEvent.parameters.push(
    new ethereum.EventParam(
      "implementation",
      ethereum.Value.fromAddress(implementation)
    )
  )

  return upgradedEvent
}

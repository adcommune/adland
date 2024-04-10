import {
  AdGroupCreated as AdGroupCreatedEvent,
  AdSpaceCreated as AdSpaceCreatedEvent,
  AdSpaceStrategyUpdated as AdSpaceStrategyUpdatedEvent,
  AdSpaceURIUpdated as AdSpaceURIUpdatedEvent,
  AdminChanged as AdminChangedEvent,
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  BeaconUpgraded as BeaconUpgradedEvent,
  Initialized as InitializedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  TokenXSet as TokenXSetEvent,
  Transfer as TransferEvent,
  Upgraded as UpgradedEvent,
} from "../generated/CommonAdSpaces/CommonAdSpaces";
import {
  AdGroup,
  AdGroupCreated,
  AdSpace,
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
  Upgraded,
} from "../generated/schema";

export function handleAdGroupCreated(event: AdGroupCreatedEvent): void {
  let entity = new AdGroupCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.groupId = event.params.groupId;
  entity.beneficiary = event.params.beneficiary;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();

  let adGroup = new AdGroup(event.params.groupId.toString());

  adGroup.beneficiary = event.params.beneficiary;
  adGroup.blockTimestamp = event.block.timestamp;
  adGroup.transactionHash = event.transaction.hash;

  adGroup.save();
}

export function handleAdSpaceCreated(event: AdSpaceCreatedEvent): void {
  let entity = new AdSpaceCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.groupId = event.params.groupId;
  entity.adId = event.params.adId;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();

  let adSpace = new AdSpace(event.params.adId.toString());

  adSpace.adGroup = event.params.groupId.toString();
  adSpace.blockTimestamp = event.block.timestamp;
  adSpace.transactionHash = event.transaction.hash;

  adSpace.save();
}

export function handleAdSpaceStrategyUpdated(
  event: AdSpaceStrategyUpdatedEvent
): void {
  let entity = new AdSpaceStrategyUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.adId = event.params.adId;
  entity.strategy = event.params.strategy;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleAdSpaceURIUpdated(event: AdSpaceURIUpdatedEvent): void {
  let entity = new AdSpaceURIUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.adId = event.params.adId;
  entity.uri = event.params.uri;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();

  let adSpace = AdSpace.load(event.params.adId.toString());

  if (adSpace) {
    adSpace.uri = event.params.uri;
    adSpace.save();
  }
}

export function handleAdminChanged(event: AdminChangedEvent): void {
  let entity = new AdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.previousAdmin = event.params.previousAdmin;
  entity.newAdmin = event.params.newAdmin;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.owner = event.params.owner;
  entity.approved = event.params.approved;
  entity.tokenId = event.params.tokenId;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.owner = event.params.owner;
  entity.operator = event.params.operator;
  entity.approved = event.params.approved;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleBeaconUpgraded(event: BeaconUpgradedEvent): void {
  let entity = new BeaconUpgraded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.beacon = event.params.beacon;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.version = event.params.version;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.previousOwner = event.params.previousOwner;
  entity.newOwner = event.params.newOwner;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleTokenXSet(event: TokenXSetEvent): void {
  let entity = new TokenXSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.underlyingToken = event.params.underlyingToken;
  entity.superToken = event.params.superToken;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.from = event.params.from;
  entity.to = event.params.to;
  entity.tokenId = event.params.tokenId;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleUpgraded(event: UpgradedEvent): void {
  let entity = new Upgraded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.implementation = event.params.implementation;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

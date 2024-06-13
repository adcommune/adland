import {
  BuyerApprovedForListing as BuyerApprovedForListingEvent,
  CancelledListing as CancelledListingEvent,
  CurrencyApprovedForListing as CurrencyApprovedForListingEvent,
  NewListing as NewListingEvent,
  NewSale as NewSaleEvent,
  UpdatedListing as UpdatedListingEvent,
} from "../generated/DirectListing/DirectListing";
import {
  BuyerApprovedForListing,
  CancelledListing,
  CurrencyApprovedForListing,
  Listing,
  NewSale,
} from "../generated/schema";

export function handleBuyerApprovedForListing(
  event: BuyerApprovedForListingEvent
): void {
  let entity = new BuyerApprovedForListing(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.listingId = event.params.listingId;
  entity.buyer = event.params.buyer;
  entity.approved = event.params.approved;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleCancelledListing(event: CancelledListingEvent): void {
  let entity = new CancelledListing(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.listingCreator = event.params.listingCreator;
  entity.listingId = event.params.listingId;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleCurrencyApprovedForListing(
  event: CurrencyApprovedForListingEvent
): void {
  let entity = new CurrencyApprovedForListing(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.listingId = event.params.listingId;
  entity.currency = event.params.currency;
  entity.pricePerToken = event.params.pricePerToken;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleNewListing(event: NewListingEvent): void {
  let entity = new Listing(event.params.listingId.toString());

  entity.listingCreator = event.params.listingCreator;
  entity.listingId = event.params.listingId;
  entity.assetContract = event.params.assetContract;
  entity.listing_listingId = event.params.listing.listingId;
  entity.listing_tokenId = event.params.listing.tokenId;
  entity.listing_quantity = event.params.listing.quantity;
  entity.listing_pricePerToken = event.params.listing.pricePerToken;
  entity.listing_startTimestamp = event.params.listing.startTimestamp;
  entity.listing_endTimestamp = event.params.listing.endTimestamp;
  entity.listing_listingCreator = event.params.listing.listingCreator;
  entity.listing_listingOwner = event.params.listing.listingOwner;
  entity.listing_assetContract = event.params.listing.assetContract;
  entity.listing_currency = event.params.listing.currency;
  entity.listing_taxRate = event.params.listing.taxRate;
  entity.listing_taxBeneficiary = event.params.listing.taxBeneficiary;
  entity.listing_tokenType = event.params.listing.tokenType;
  entity.listing_status = event.params.listing.status;
  entity.listing_reserved = event.params.listing.reserved;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleNewSale(event: NewSaleEvent): void {
  let entity = new NewSale(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.listingCreator = event.params.listingCreator;
  entity.listingId = event.params.listingId;
  entity.assetContract = event.params.assetContract;
  entity.tokenId = event.params.tokenId;
  entity.buyer = event.params.buyer;
  entity.quantityBought = event.params.quantityBought;
  entity.totalPricePaid = event.params.totalPricePaid;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleUpdatedListing(event: UpdatedListingEvent): void {
  let entity = Listing.load(event.params.listingId.toString());

  if (entity) {
    entity.listingCreator = event.params.listingCreator;
    entity.listingId = event.params.listingId;
    entity.assetContract = event.params.assetContract;
    entity.listing_listingId = event.params.listing.listingId;
    entity.listing_tokenId = event.params.listing.tokenId;
    entity.listing_quantity = event.params.listing.quantity;
    entity.listing_pricePerToken = event.params.listing.pricePerToken;
    entity.listing_startTimestamp = event.params.listing.startTimestamp;
    entity.listing_endTimestamp = event.params.listing.endTimestamp;
    entity.listing_listingCreator = event.params.listing.listingCreator;
    entity.listing_listingOwner = event.params.listing.listingOwner;
    entity.listing_assetContract = event.params.listing.assetContract;
    entity.listing_currency = event.params.listing.currency;
    entity.listing_taxRate = event.params.listing.taxRate;
    entity.listing_taxBeneficiary = event.params.listing.taxBeneficiary;
    entity.listing_tokenType = event.params.listing.tokenType;
    entity.listing_status = event.params.listing.status;
    entity.listing_reserved = event.params.listing.reserved;

    entity.blockNumber = event.block.number;
    entity.blockTimestamp = event.block.timestamp;
    entity.transactionHash = event.transaction.hash;

    entity.save();
  }
}

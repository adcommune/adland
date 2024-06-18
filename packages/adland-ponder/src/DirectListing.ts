import { ponder } from "@/generated";

ponder.on(
  "DirectListing:BuyerApprovedForListing",
  async ({ event, context }) => {
    console.log(event.args);
  }
);

ponder.on("DirectListing:CancelledListing", async ({ event, context }) => {
  console.log(event.args);
});

ponder.on(
  "DirectListing:CurrencyApprovedForListing",
  async ({ event, context }) => {
    console.log(event.args);
  }
);

ponder.on("DirectListing:NewListing", async ({ event, context }) => {
  const { Listing } = context.db;

  await Listing.create({
    id: event.args.listingId.toString(),
    data: event.args.listing,
  });
});

ponder.on("DirectListing:UpdatedListing", async ({ event, context }) => {
  const { Listing } = context.db;

  await Listing.update({
    id: event.args.listingId.toString(),
    data: event.args.listing,
  });
});

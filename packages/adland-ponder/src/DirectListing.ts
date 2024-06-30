import { ponder } from "@/generated";
import { erc20Abi } from "../abis/ERC20";

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

  const { currencyName, currencySymbol } = await context.client
    .multicall({
      contracts: [
        {
          abi: erc20Abi,
          functionName: "name",
          address: event.args.listing.currency,
        },
        {
          abi: erc20Abi,
          functionName: "symbol",
          address: event.args.listing.currency,
        },
      ],
    })
    .then((res) => {
      return {
        currencyName: res[0].result ?? "Ethereum",
        currencySymbol: res[1].result ?? "ETH",
      };
    });

  await Listing.create({
    id: event.args.listingId.toString(),
    data: { ...event.args.listing, currencyName, currencySymbol },
  });
});

ponder.on("DirectListing:UpdatedListing", async ({ event, context }) => {
  const { Listing } = context.db;

  await Listing.update({
    id: event.args.listingId.toString(),
    data: event.args.listing,
  });
});

ponder.on("DirectListing:UpdateAdFLowRate", async ({ event, context }) => {
  const { AdFlow, AdSpace } = context.db;

  const flowRate = event.args.flowRate;
  const adId = event.args.listingId.toString();

  await AdFlow.upsert({
    id: event.args.listingId.toString(),
    create: {
      adSpaceId: event.args.listingId.toString(),
      flowRate,
      weeklyFlowRate: flowRate * BigInt(60 * 60 * 24 * 7),
      blockNumber: event.block.number,
      blockTimestamp: event.block.timestamp,
      transactionHash: event.transaction.hash,
    },
    update: {
      adSpaceId: event.args.listingId.toString(),
      flowRate,
      weeklyFlowRate: flowRate * BigInt(60 * 60 * 24 * 7),
      blockNumber: event.block.number,
      blockTimestamp: event.block.timestamp,
      transactionHash: event.transaction.hash,
    },
  });

  if (await AdSpace.findUnique({ id: adId })) {
    await AdSpace.update({
      id: adId,
      data: {
        flowId: adId,
      },
    });
  }
});

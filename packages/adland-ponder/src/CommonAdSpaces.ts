import { ponder } from "@/generated";
import { zeroAddress } from "viem";

export const NATIVE_CURRENCY = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";

ponder.on("CommonAdSpaces:AdGroupCreated", async ({ event, context }) => {
  const { AdGroup } = context.db;

  console.log(event.args);

  const url = event.args.metadataURI;

  await AdGroup.create({
    id: event.args.groupId.toString(),
    data: {
      beneficiary: event.args.recipient,
      blockTimestamp: event.block.timestamp,
    },
  });
});

ponder.on("CommonAdSpaces:TokenXSet", async ({ event, context }) => {
  const { TokenX } = context.db;

  await TokenX.upsert({
    id: event.args.underlyingToken,
    create: {
      underlyingToken: event.args.underlyingToken,
      superToken: event.args.superToken,
      isNativeToken:
        event.args.underlyingToken.toLowerCase() ===
        NATIVE_CURRENCY.toLowerCase(),
      blockNumber: event.block.number,
      blockTimestamp: event.block.timestamp,
      transactionHash: event.transaction.hash,
    },
    update: {
      underlyingToken: event.args.underlyingToken,
      superToken: event.args.superToken,
      isNativeToken:
        event.args.underlyingToken.toLowerCase() ===
        NATIVE_CURRENCY.toLowerCase(),
      blockNumber: event.block.number,
      blockTimestamp: event.block.timestamp,
      transactionHash: event.transaction.hash,
    },
  });
});

ponder.on("CommonAdSpaces:AdPoolCreated", async ({ event, context }) => {
  console.log(event.args);
});

ponder.on("CommonAdSpaces:AdSpaceCreated", async ({ event, context }) => {
  console.log(event.args);

  const { AdSpace, Listing } = context.db;

  const listing = await Listing.findUnique({ id: event.args.adId.toString() });

  await AdSpace.create({
    id: event.args.adId.toString(),
    data: {
      adGroupId: event.args.groupId.toString(),
      tokenXId: listing?.currency || zeroAddress,
      transactionHash: event.transaction.hash,
    },
  });
});

ponder.on("CommonAdSpaces:AdSpaceURIUpdated", async ({ event, context }) => {
  const { AdSpaceMetadata } = context.db;
  const isIPFS = event.args.uri.startsWith("ipfs://");
  const adId = event.args.adId.toString();

  if (isIPFS) {
    const cid = event.args.uri.replace("ipfs://", "");
    const data = (await fetch(
      `https://amethyst-representative-mandrill-369.mypinata.cloud/ipfs/${cid}`
    ).then((res) => res.json())) as {
      name: string;
      description: string;
      image: string;
      external_url?: string;
      aspect_ratio: string;
      frame_redirect_url?: string;
    };

    console.log({ data });

    await AdSpaceMetadata.create({
      id: cid + "/" + adId,
      data: {
        adSpaceId: adId,
        name: data.name,
        description: data.description,
        image: data.image,
        imageGatewayUri: `https://amethyst-representative-mandrill-369.mypinata.cloud/ipfs/${cid}`,
        externalUrl: data.external_url || "",
        aspectRatio: data.aspect_ratio,
        frameRedirectUrl: data.frame_redirect_url,
        blockNumber: event.block.number,
        transactionHash: event.transaction.hash,
      },
    });

    console.log(data);
  }
});

ponder.on(
  "CommonAdSpaces:AdGroupMetadataUpdated",
  async ({ event, context }) => {
    const { AdGroupMetadata, AdGroup } = context.db;

    const uri = event.args.metadataURI;

    if (uri.startsWith("ipfs://")) {
      const cid = uri.replace("ipfs://", "");
      const data = (await fetch(
        `https://amethyst-representative-mandrill-369.mypinata.cloud/ipfs/${cid}`
      ).then((res) => res.json())) as {
        name?: string;
        description?: string;
        image?: string;
        banner?: string;
      };

      console.log({ data });
      await AdGroup.update({
        id: event.args.groupId.toString(),
        data: {
          metadataId: event.args.groupId.toString(),
        },
      });
      await AdGroupMetadata.upsert({
        id: event.args.groupId.toString(),
        create: {
          name: data.name,
          description: data.description,
          image: data.image,
          banner: data.banner,
        },
        update: {
          name: data.name,
          description: data.description,
          image: data.image,
          banner: data.banner,
        },
      });
    }
  }
);

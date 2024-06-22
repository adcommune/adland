import { ponder } from "@/generated";
import { zeroAddress } from "viem";

export const NATIVE_CURRENCY = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";

ponder.on(
  "CommonAdSpaces:AdGroupCreated(uint256 indexed groupId, address indexed recipient)",
  async ({ event, context }) => {
    const { AdGroup } = context.db;

    await AdGroup.create({
      id: event.args.groupId.toString(),
      data: {
        beneficiary: event.args.recipient,
        blockTimestamp: event.block.timestamp,
      },
    });
  }
);

ponder.on(
  "CommonAdSpaces:AdGroupCreated(uint256 indexed groupId, address indexed recipient, string indexed metadataURI)",
  async ({ event, context }) => {
    const { AdGroup, AdGroupMetadata } = context.db;

    const metadataURI = event.args.metadataURI;

    if (metadataURI.startsWith("ipfs://")) {
      const cid = metadataURI.replace("ipfs://", "");

      const data = (await fetch(
        `https://amethyst-representative-mandrill-369.mypinata.cloud/ipfs/${cid}`
      ).then((res) => res.json())) as {
        name?: string;
        description?: string;
        image?: string;
        banner?: string;
      };

      const metadataId = cid;

      await AdGroupMetadata.upsert({
        id: metadataId,
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

      await AdGroup.update({
        id: event.args.groupId.toString(),
        data: {
          metadataId,
        },
      });
    }
  }
);

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

  const { AdSpace, Listing, AdGroup } = context.db;

  const listing = await Listing.findUnique({ id: event.args.adId.toString() });
  const group = await AdGroup.findUnique({
    id: event.args.groupId.toString(),
  });

  await AdSpace.create({
    id: event.args.adId.toString(),
    data: {
      owner: group?.beneficiary ?? zeroAddress,
      listingId: event.args.adId.toString(),
      adGroupId: event.args.groupId.toString(),
      tokenXId: listing?.currency || zeroAddress,
      transactionHash: event.transaction.hash,
    },
  });
});

ponder.on("CommonAdSpaces:AdSpaceURIUpdated", async ({ event, context }) => {
  const { AdSpaceMetadata, AdSpace } = context.db;
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

    const adSpaceMetadataId = cid + "/" + adId;

    if (!(await AdSpaceMetadata.findUnique({ id: adSpaceMetadataId }))) {
      await AdSpaceMetadata.create({
        id: adSpaceMetadataId,
        data: {
          adSpaceId: adId,
          name: data.name,
          description: data.description,
          image: data.image,
          imageGatewayUri: data.image.startsWith("ipfs://")
            ? `https://amethyst-representative-mandrill-369.mypinata.cloud/ipfs/${data.image.split("//")[1]}`
            : "",
          externalUrl: data.external_url || "",
          aspectRatio: data.aspect_ratio,
          frameRedirectUrl: data.frame_redirect_url,
          blockNumber: event.block.number,
          transactionHash: event.transaction.hash,
        },
      });
    }

    await AdSpace.update({
      id: adId,
      data: {
        currentMetadataId: adSpaceMetadataId,
      },
    });
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

      const metadataId = cid;

      console.log({
        metadataId,
      });

      await AdGroupMetadata.upsert({
        id: metadataId,
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

      if (await AdGroup.findUnique({ id: event.args.groupId.toString() })) {
        await AdGroup.update({
          id: event.args.groupId.toString(),
          data: {
            metadataId,
          },
        });
      }
    }
  }
);

ponder.on("CommonAdSpaces:Transfer", async ({ event, context }) => {
  const { AdSpace } = context.db;
  if (await AdSpace.findUnique({ id: event.args.tokenId.toString() })) {
    await AdSpace.update({
      id: event.args.tokenId.toString(),
      data: {
        owner: event.args.to,
      },
    });
  }
});

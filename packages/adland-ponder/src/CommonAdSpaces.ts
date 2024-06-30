import { ponder } from "@/generated";
import { Address, zeroAddress } from "viem";
import { erc20Abi } from "../abis/ERC20";

export const NATIVE_CURRENCY = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";

ponder.on("UserBase:UserCreated", async ({ event, context }) => {
  const { User } = context.db;

  const ars = event.args as {
    smartAccount: Address;
    fid: bigint;
  };

  let pfp = undefined;
  let username = undefined;
  let displayName = undefined;

  if (ars.fid) {
    const data = (await fetch(
      "https://api.neynar.com/v2/farcaster/user/bulk?fids=" + ars.fid,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          api_key: "6FE85682-2067-4594-88CA-816AD2A8A837",
        },
      }
    ).then((res) => res.json())) as {
      users: {
        display_name: string;
        username: string;
        pfp_url: string;
      }[];
    };

    pfp = data.users[0]?.pfp_url;
    displayName = data.users[0]?.display_name;
    username = data.users[0]?.username;
  }

  await User.upsert({
    id: ars.smartAccount,
    create: {
      fid: ars.fid,
      pfp,
      username,
      displayName,
      blockTimestamp: event.block.timestamp,
      transactionHash: event.transaction.hash,
    },
    update: {
      fid: ars.fid,
      pfp,
      username,
      displayName,
      blockTimestamp: event.block.timestamp,
      transactionHash: event.transaction.hash,
    },
  });
});

ponder.on(
  "CommonAdSpaces:AdGroupCreated(uint256 indexed groupId, address indexed recipient)",
  async ({ event, context }) => {
    const { AdGroup, User } = context.db;

    const benef = event.args.recipient;

    // if (!(await User.findUnique({ id: benef }))) {
    //   await User.create({
    //     id: benef,
    //     data: {
    //       blockTimestamp: event.block.timestamp,
    //       transactionHash: event.transaction.hash,
    //     },
    //   });
    // }

    await AdGroup.create({
      id: event.args.groupId.toString(),
      data: {
        beneficiary: benef,
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

    let metadataId: string | undefined;

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

      metadataId = cid;

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
    }

    await AdGroup.create({
      id: event.args.groupId.toString(),
      data: {
        beneficiary: event.args.recipient,
        metadataId,
        blockTimestamp: event.block.timestamp,
      },
    });
  }
);

ponder.on("CommonAdSpaces:TokenXSet", async ({ event, context }) => {
  const { client, db } = context;
  const { TokenX } = db;

  const underlyingAddress = event.args.underlyingToken;
  const superTokenAddress = event.args.superToken;

  const { underlyingName, underlyingSymbol, superName, superSymbol } =
    await client
      .multicall({
        contracts: [
          {
            abi: erc20Abi,
            functionName: "symbol",
            address: superTokenAddress,
          },
          {
            abi: erc20Abi,
            functionName: "name",
            address: superTokenAddress,
          },
          {
            abi: erc20Abi,
            functionName: "symbol",
            address: underlyingAddress,
          },
          {
            abi: erc20Abi,
            functionName: "name",
            address: underlyingAddress,
          },
        ],
      })
      .then((res) => {
        return {
          underlyingName: res[3].result ?? "Unknown",
          underlyingSymbol: res[2].result ?? "UKNWN",
          superName: res[1].result ?? "Super Unknown",
          superSymbol: res[0].result ?? "UKNWNx",
        };
      });

  await TokenX.upsert({
    id: event.args.underlyingToken,
    create: {
      underlyingToken: underlyingAddress,
      superToken: superTokenAddress,
      isNativeToken:
        underlyingAddress.toLowerCase() === NATIVE_CURRENCY.toLowerCase(),
      underlyingName,
      underlyingSymbol,
      superName,
      superSymbol,
      blockNumber: event.block.number,
      blockTimestamp: event.block.timestamp,
      transactionHash: event.transaction.hash,
    },
    update: {
      underlyingToken: underlyingAddress,
      superToken: superTokenAddress,
      isNativeToken:
        underlyingAddress.toLowerCase() === NATIVE_CURRENCY.toLowerCase(),
      underlyingName,
      underlyingSymbol,
      superName,
      superSymbol,
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
      noBillboard?: boolean;
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
          noBillboard: data?.noBillboard,
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
        currentMetadataId: undefined,
      },
    });
  }
});

ponder.on("CommonAdValidator:AttestAd", async ({ event, context }) => {
  const { Attestation, AdSpaceMetadata } = context.db;

  let { uid, adSpaceId, cid } = event.args as {
    uid: string;
    adSpaceId: bigint;
    cid: Address;
  };

  const adSpaceMetadataId = cid + "/" + adSpaceId.toString();

  if (
    await AdSpaceMetadata.findUnique({
      id: adSpaceMetadataId,
    })
  ) {
    await Attestation.upsert({
      id: uid,
      create: {
        revoked: undefined,
        timestamp: event.block.timestamp,
        transactionHash: event.transaction.hash,
      },
      update: {
        revoked: false,
        timestamp: event.block.timestamp,
        transactionHash: event.transaction.hash,
      },
    });

    // Link attestation to ad space metadata
    await AdSpaceMetadata.update({
      id: adSpaceMetadataId,
      data: {
        attestationId: uid,
      },
    });
  }
});

ponder.on("CommonAdValidator:RevokeAd", async ({ event, context }) => {
  const { Attestation } = context.db;

  const { uid } = event.args as {
    uid: string;
    adSpaceId: bigint;
    cid: Address;
  };

  await Attestation.update({
    id: uid,
    data: {
      revoked: true,
    },
  });
});

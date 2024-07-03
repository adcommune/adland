import { createConfig } from "@ponder/core";
import { http } from "viem";

import { CommonAdSpacesAbi } from "./abis/CommonAdSpacesAbi";
import { directListingsLogicAbi } from "./abis/DirectListingAbi";
import { commonAdValidatorAbi } from "./abis/CommonAdValidator";
import { userBaseAbi } from "./abis/UserBaseAbi";

const mainnet = process.env.STAGE === "mainnet";

export default createConfig({
  networks: mainnet
    ? {
        base: {
          chainId: 8453,
          transport: http(process.env.PONDER_RPC_URL_8453),
        },
      }
    : {
        "optimism-sepolia": {
          chainId: 11155420,
          transport: http(process.env.PONDER_RPC_URL_11155420),
        },
      },
  contracts: mainnet
    ? {
        CommonAdSpaces: {
          network: "base",
          address: "0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57",
          abi: CommonAdSpacesAbi,
          startBlock: 13846869,
        },
        DirectListing: {
          network: "base",
          address: "0x9825f700754534108BFE2239C9e66a12FDEBB33e",
          abi: directListingsLogicAbi,
          startBlock: 13846869,
        },
        CommonAdValidator: {
          network: "base",
          address: "0x1e871e8a8960076B0F17112a696E81963201b45C",
          abi: commonAdValidatorAbi,
          startBlock: 16613294,
        },
        UserBase: {
          network: "base",
          address: "0x4cf9236A6bdc9D0b5cf5c3cD801983148A20d09D",
          abi: userBaseAbi,
          startBlock: 16623043,
        },
      }
    : {
        CommonAdSpaces: {
          network: "optimism-sepolia",
          address: "0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1",
          abi: CommonAdSpacesAbi,
          startBlock: 13331750,
        },
        DirectListing: {
          network: "optimism-sepolia",
          address: "0x44f808B028cD582b21C04f6de3580029d3E31Cb6",
          abi: directListingsLogicAbi,
          startBlock: 13331750,
        },
        CommonAdValidator: {
          network: "optimism-sepolia",
          address: "0x4B346185c3c26d8F99336155035226655D2ADBe1",
          abi: commonAdValidatorAbi,
          startBlock: 13756755,
        },
        UserBase: {
          network: "optimism-sepolia",
          address: "0x2Bb04c711813685187F52d2f096ff715A5C4287C",
          abi: userBaseAbi,
          startBlock: 13972799,
        },
      },
});

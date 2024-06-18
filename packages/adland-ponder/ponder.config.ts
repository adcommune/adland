import { createConfig } from "@ponder/core";
import { http } from "viem";

import { CommonAdSpacesAbi } from "./abis/CommonAdSpacesAbi";
import { DirectListingAbi } from "./abis/DirectListingAbi";

export default createConfig({
  networks: {
    "optimism-sepolia": {
      chainId: 11155420,
      transport: http(process.env.PONDER_RPC_URL_11155420),
    },
  },
  contracts: {
    CommonAdSpaces: {
      network: "optimism-sepolia",
      address: "0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1",
      abi: CommonAdSpacesAbi,
      startBlock: 13331750,
    },
    DirectListing: {
      network: "optimism-sepolia",
      address: "0x44f808B028cD582b21C04f6de3580029d3E31Cb6",
      abi: DirectListingAbi,
      startBlock: 13331750,
    },
  },
});

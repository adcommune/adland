import { optimismSepolia } from "viem/chains";
import { Constants } from "./types";

export const constants: Constants = {
  ponderUrl: "http://localhost:42069/graphql",
  superfluidSubgraphUrl: "https://optimism-sepolia.subgraph.x.superfluid.dev/",
  subgraphUrl:
    "https://api.studio.thegraph.com/query/958/adland-optsepolia/version/latest",
  pinataPublicGateway: "amethyst-representative-mandrill-369.mypinata.cloud",
  chain: optimismSepolia,
  landingPageAdGroup: "1",
  appUrl: "http://localhost:3001",
};

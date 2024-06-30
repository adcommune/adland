import { defineConfig } from "@wagmi/cli";
import { foundry, react } from "@wagmi/cli/plugins";
import { foundryPath, getFoundryDeployments } from "./wagmi.helpers";
import { erc20Abi, erc721Abi } from "viem";

export default defineConfig(async () => {
  const deployments = await getFoundryDeployments();

  return {
    out: "src/generated.ts",
    contracts: [
      {
        abi: erc721Abi,
        name: "ERC721",
      },
      {
        abi: erc20Abi,
        name: "ERC20",
      },
    ],
    plugins: [
      foundry({
        artifacts: `${foundryPath}/out`,
        deployments,
        include: [
          "DirectListingsLogic.sol/*.json",
          "CommonAdSpaces.sol/*.json",
          "CommonAdPool.sol/*.json",
          "SuperToken.sol/*.json",
          "ISETH.sol/*.json",
          "CFAv1Forwarder.sol/*.json",
          "GDAv1Forwarder.sol/*.json",
          "SuperTokenV1Library.sol/*.json",
          "GeneralDistributionAgreementV1.sol/*.json",
          "CommonAdValidator.sol/*.json",
          "IEAS.sol/*.json",
          "ConstantFlowAgreementV1.sol/*.json",
          "UserBase.sol/*.json",
        ],
      }),
      react({}),
    ],
  };
});

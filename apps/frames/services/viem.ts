import { createWalletClient, http } from "viem";
import { Address, privateKeyToAccount } from "viem/accounts";
import { constants } from "@adland/common";
import { alchemyUrlByChain } from "@/config/constants";

const frameAccountPK = process.env.FRAME_ACCOUNT_KEY as Address;

const account = privateKeyToAccount(frameAccountPK);

const wallet = createWalletClient({
  account,
  chain: constants.chain,
  transport: http(alchemyUrlByChain[constants.chain.id]),
});

export { wallet };

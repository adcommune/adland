import { Address, erc20Abi } from "viem";
import { wallet } from "./viem";

const airdropAmount = (to: Address, token: Address, amount: bigint) => {
  return wallet.writeContract({
    address: token,
    abi: erc20Abi,
    functionName: "transferFrom",
    args: [wallet.account.address, to, amount],
  });
};

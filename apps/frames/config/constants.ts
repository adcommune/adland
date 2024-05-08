import { Address } from "viem";
import { optimismSepolia, base } from "viem/chains";

export const airdropConfig: Record<
  number,
  {
    token: Address;
    amount: bigint;
  }
> = {
  [optimismSepolia.id]: {
    token: "0x4247ba6c3658fa5c0f523bacea8d0b97af1a175e",
    amount: BigInt(1),
  }, // fDAI
  [base.id]: {
    token: "0x4ed4e862860bed51a9570b96d89af5e1b0efefed",
    amount: BigInt(1),
  },
};

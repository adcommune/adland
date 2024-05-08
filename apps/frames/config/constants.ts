import { Address } from "viem";
import { optimismSepolia, base } from "viem/chains";

export const airdropToken: Record<number, Address> = {
  [optimismSepolia.id]: "0x4247ba6c3658fa5c0f523bacea8d0b97af1a175e", // fDAI
  [base.id]: "0x4ed4e862860bed51a9570b96d89af5e1b0efefed", // Degen
};

import { directListingsLogicAbi } from '@adland/contracts'
import { ContractFunctionReturnType } from 'viem'

export type Listings = ContractFunctionReturnType<
  typeof directListingsLogicAbi,
  'view',
  'getAllListings'
>

export type Listing = ContractFunctionReturnType<
  typeof directListingsLogicAbi,
  'view',
  'getAllListings'
>[0]

export type Metadata = {
  name: string
  image: string
  description: string
  animation_url?: string
  external_url?: string
  aspect_ratio?: string
}

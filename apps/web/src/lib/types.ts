import { directListingsLogicAbi } from '@adland/contracts'
import {
  AdGroup_subgraph,
  AdPool_subgraph,
  AdSpace_subgraph,
} from '@adland/webkit'
import { TokenX } from '@adland/webkit/src/hooks'
import { User } from '@neynar/nodejs-sdk/build/neynar-api/v2'
import { FrameDistribution } from '@adland/db'
import { Address, ContractFunctionReturnType } from 'viem'
import { SuperfluidPool } from './superfluid-subgraph'

export type Listing = ContractFunctionReturnType<
  typeof directListingsLogicAbi,
  'view',
  'getListing'
>

export type AdGroupMetadata = {
  name: string
  description: string
  image: string
  banner: string
}

export type Metadata = {
  name: string
  image: string
  imageGatewayURI?: string
  description: string
  animation_url?: string
  external_url?: string
  aspect_ratio?: string
  frame_redirect_url?: string
}

/**
 * AdSpace is a stitched together object
 * - Listing returned from the marketplace contract
 *     struct Listing {
        uint256 listingId;
        uint256 tokenId;
        uint256 quantity;
        uint256 pricePerToken;
        uint128 startTimestamp;
        uint128 endTimestamp;
        address listingCreator;
        address listingOwner;
        address assetContract;
        address currency;
        uint256 taxRate;
        address taxBeneficiary;
        TokenType tokenType;
        Status status;
        bool reserved;
    }
 * - AdSpace returned from the subgraph
 * - Metadata fetched from the IPFS gateway
 * Note: Good enough for now :)
 */
export type AdSpace = {
  // Omits adGroup from AdSpace_subgraph, query directly the adGroup if needed
  adSpace_subgraph: Omit<AdSpace_subgraph, 'adGroup' | 'adPools'> & {
    adPools: Omit<AdPool_subgraph, 'adSpace'>[]
  }
  listing: Listing
  // undefined if adSpace_subgraph.uri undefined
  metadata?: Metadata
  tokenX?: TokenX
}

export type AdGroup = {
  adGroup_subgraph: Omit<AdGroup_subgraph, 'adSpaces'>
  adSpaces: Omit<AdSpace, 'listing'>[]
  metadata?: AdGroupMetadata
}

export type AppDistributor = FrameDistribution & { caster?: User }

export type AdCampaign = {
  // Access Controled Adland Pool Wrapper
  commonAdPoolAddress?: Address
  // Superfluid Pool Address
  sfPoolAddress?: Address
  // Superfluid Pool
  sfPool?: SuperfluidPool
}

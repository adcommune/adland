import { directListingsLogicAbi } from '@adland/contracts'
import { AdSpace_subgraph } from '@adland/webkit'
import { ContractFunctionReturnType } from 'viem'

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
  adSpace_subgraph: Omit<AdSpace_subgraph, 'adGroup'>
  listing: ContractFunctionReturnType<
    typeof directListingsLogicAbi,
    'view',
    'getListing'
  >
  // undefined if adSpace_subgraph.uri undefined
  metadata?: {
    name: string
    image: string
    imageGatewayURI?: string
    description: string
    animation_url?: string
    external_url?: string
    aspect_ratio?: string
  }
}

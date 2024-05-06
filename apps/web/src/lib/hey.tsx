import { Address } from 'viem'

export const StandartNFTMetadata = ({
  chain,
  collection,
  contract_address,
  creator_address,
  media_url,
}: {
  chain: string
  collection: string
  contract_address: string | Address
  media_url: string
  creator_address?: string | Address
}) => {
  return (
    <>
      <meta property="eth:nft:chain" content={chain} />
      <meta property="eth:nft:collection" content={collection} />
      <meta property="eth:nft:contract_address" content={contract_address} />
      <meta property="eth:nft:creator_address" content={creator_address} />
      <meta property="eth:nft:media_url" content={media_url} />
    </>
  )
}

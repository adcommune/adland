import { AdSpaceQuery_subgraph } from '@adland/webkit'
import { fetchJSON, getGatewayUri } from './utils'

export const resolveAdSpaceWithMetadata = async (
  ad: AdSpaceQuery_subgraph['adSpace'],
) => {
  const uri = ad?.uri
  const gatewayURI = uri ? getGatewayUri(uri) : null

  const metadata = gatewayURI ? await fetchJSON(gatewayURI) : null

  if (metadata) {
    metadata.imageGatewayURI = metadata.image
      ? getGatewayUri(metadata.image)
      : null
  }

  return {
    ...ad,
    uri,
    gatewayURI,
    metadata,
  }
}

export const formatAmount = (amount: string) => {
  const num = parseFloat(amount)
  if (num >= 1000) {
    return (num / 1000).toFixed(2).replace(/\.00$/, '') + 'k'
  }
  if (num < 1) {
    return num.toFixed(8).replace(/0+$/, '')
  }
  return num.toFixed(2).replace(/\.00$/, '')
}

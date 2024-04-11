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

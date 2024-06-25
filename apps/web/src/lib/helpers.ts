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
  const num = Number(amount)
  if (num < 1000) {
    return num
  } else if (num < 1000000) {
    const formattedNum = (num / 1000).toFixed(1)
    return formattedNum.endsWith('.0')
      ? formattedNum.slice(0, -2) + 'k'
      : formattedNum + 'k'
  } else {
    const formattedNum = (num / 1000000).toFixed(1)
    return formattedNum.endsWith('.0')
      ? formattedNum.slice(0, -2) + 'm'
      : formattedNum + 'M'
  }
}


import { GraphQLClient } from 'graphql-request'
import { NextResponse, NextRequest } from 'next/server'
import { ipfsGateway } from '@/config/constants'
import { getSdk as getAdland } from '@adland/webkit'
import { fetchJSON } from '../../helpers'

type GetAdsRouteParams = { params: { groupId: string } }

export async function GET(_: NextRequest, { params }: GetAdsRouteParams) {
  const adland = getAdland(
    new GraphQLClient(
      'https://api.thegraph.com/subgraphs/name/nezz0746/adland-optsepolia',
    ),
  )

  const group = await adland
    .adGroup({
      id: params.groupId,
    })
    .then((response) => {
      return response.adGroup
    })

  if (!group) {
    throw new Error('Group not found')
  } else {
    const group_response = {
      ...group,
      adSpaces: await Promise.all(
        group.adSpaces.map(async (adSpace) => {
          const uri = adSpace.uri
          const gatewayURI = uri
            ? `${ipfsGateway}/${uri.split('ipfs://')[1]}`
            : null

          const metadata = gatewayURI ? await fetchJSON(gatewayURI) : null

          if (metadata) {
            metadata.imageGatewayURI = metadata.image
              ? `${ipfsGateway}/${metadata.image.split('ipfs://')[1]}`
              : null
          }

          return {
            ...adSpace,
            uri,
            gatewayURI,
            metadata,
          }
        }),
      ),
    }
    return NextResponse.json(group_response)
  }
}

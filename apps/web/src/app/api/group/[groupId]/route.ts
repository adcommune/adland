import { NextResponse, NextRequest } from 'next/server'
import { adland } from '@/lib/services'
import { resolveAdSpaceWithMetadata } from '@/lib/helpers'
import { AdSpaceQuery } from '@adland/webkit'

type GetAdsRouteParams = { params: { groupId: string } }

export async function GET(_: NextRequest, { params }: GetAdsRouteParams) {
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
        group.adSpaces.map(async (adSpace) =>
          resolveAdSpaceWithMetadata(adSpace as AdSpaceQuery['adSpace']),
        ),
      ),
    }
    return NextResponse.json(group_response)
  }
}

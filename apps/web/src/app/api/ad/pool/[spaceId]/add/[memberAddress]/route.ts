import { CommonAdPool } from '@/lib/adPool'
import { AdLand } from '@/lib/adland'
import { NextRequest, NextResponse } from 'next/server'
import { Address } from 'viem'

export const POST = async (
  _req: NextRequest,
  { params }: { params: { spaceId: string; memberAddress: Address } },
) => {
  const { spaceId, memberAddress } = params

  const adSpace = await new AdLand().getAdSpace(spaceId, {
    withMetadata: false,
  })

  if (!adSpace.tokenX) {
    return NextResponse.json({ error: 'Invalid super token' })
  }

  const campaign = await new AdLand().getAdCampaign(
    spaceId,
    adSpace.tokenX?.superToken,
    {
      withPoolDetails: false,
    },
  )

  const poolAddress = campaign.commonAdPoolAddress

  if (!poolAddress) {
    return NextResponse.json({ error: 'Invalid pool address' })
  }

  const pool = new CommonAdPool(poolAddress)

  const receipt = await pool.addMemeberToGroup(memberAddress, 1000)

  if (receipt.status !== 'success') {
    return NextResponse.json({
      error: {
        message: 'Failed to add member to group',
      },
      sender: receipt.from,
      hash: receipt.transactionHash,
    })
  } else {
    return NextResponse.json({
      success: true,
      sender: receipt.from,
      hash: receipt.transactionHash,
    })
  }
}

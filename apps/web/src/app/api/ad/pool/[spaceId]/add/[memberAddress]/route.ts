import { CommonAdPool } from '@/lib/adPool'
import { AdLand } from '@/lib/adland'
import { neynar } from '@/lib/neynar'
import { publicClient } from '@/lib/viem'
import { NextRequest, NextResponse } from 'next/server'
import { Address } from 'viem'

export const POST = async (
  _req: NextRequest,
  { params }: { params: { spaceId: string; memberAddress: Address } },
) => {
  const { spaceId, memberAddress } = params
  const { message, signature } = (await _req.json()) as {
    message: string
    signature: `0x${string}`
  }

  const valid = await publicClient.verifyMessage({
    message,
    signature,
    address: memberAddress,
  })

  if (!valid) {
    return NextResponse.json({ error: 'Invalid signature' })
  }

  const data = message.split('-')
  const castHash = data[0]
  const fid = parseInt(data[1])

  const cast = (await neynar.fetchBulkCasts([castHash])).result.casts[0]

  if (!cast) {
    return NextResponse.json({ error: 'Invalid cast hash' })
  }

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

  const receipt = await pool.updateMemberUnits(memberAddress, 1000)

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

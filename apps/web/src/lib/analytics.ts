import { FrameRequest } from '@coinbase/onchainkit'
import prisma from '@/lib/prisma'
import { constants } from '@adland/common'

export type AnalyticsPostParams = {
  frameId: string // frame-{chainId}-{spaceId}
  castHash: string
  castFid: number
  frameRequest?: FrameRequest
}

export const getFrameId = (spaceId: string) =>
  `ad-${constants.chain.id}-${spaceId}`

export const postFrameInteractionAnalytics = async ({
  frameId,
  castFid,
  castHash,
  frameRequest,
}: AnalyticsPostParams) => {
  // upsert new frame entry
  const { id } = await prisma.frame.upsert({
    where: {
      id: frameId,
    },
    create: {
      id: frameId,
    },
    update: {},
  })

  console.log({ id })
  // upsert new frame distribution
  const { interactions } = await prisma.frameDistribution.upsert({
    where: { id: castHash },
    create: {
      id: castHash,
      frameId: id,
      casterFid: castFid,
      interactions: 0,
    },
    update: {},
  })

  console.log({ interactions })

  // increment interactions
  await prisma.frameDistribution.update({
    where: { id: castHash },
    data: {
      interactions: interactions + 1,
    },
  })
}

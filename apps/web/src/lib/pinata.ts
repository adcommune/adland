import { constants } from '@adland/common'
import { FrameRequest } from '@coinbase/onchainkit'

export const postInteraction = async (data: {
  frame_id: string
  frameRequest: FrameRequest
  custom_id: string
}) => {
  return fetch('https://api.pinata.cloud/farcaster/frames/interactions', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      Authorization: `Bearer ${process.env.PINATA_JWT}`,
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json())
}

export const getFramePinataId = (spaceId: string) =>
  `ad-${constants.chain.id}-${spaceId}`

/**
 * Used to index interactions by caster
 * @param request
 */
export const getFramePinataCustomId = (request: FrameRequest) => {
  return `interaction-${constants.chain.id}-${request.untrustedData.castId.fid}`
}

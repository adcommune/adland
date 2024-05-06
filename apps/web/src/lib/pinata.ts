import { constants } from '@adland/common'
import { FrameRequest } from '@coinbase/onchainkit'
import { format, subDays } from 'date-fns'

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

export const getInteractions = async (frameId: string) => {
  // Past 30 days startDate, endDate in the format YYYY-MM-DD HH:MM:SS
  const startDate = format(subDays(new Date(), 30), 'yyyy-MM-dd HH:mm:ss')
  const endDate = format(new Date(), 'yyyy-MM-dd HH:mm:ss')

  return fetch(
    'https://api.pinata.cloud/farcaster/frames/interactions?frame_id=' +
      frameId +
      '&start_date=' +
      startDate +
      '&end_date=' +
      endDate,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.PINATA_JWT}`,
        'Content-Type': 'application/json',
      },
    },
  ).then((res) => res.json())
}
export const getTopInteractions = async () => {
  // Past 30 days startDate, endDate in the format YYYY-MM-DD HH:MM:SS
  const startDate = format(subDays(new Date(), 30), 'yyyy-MM-dd HH:mm:ss')
  const endDate = format(new Date(), 'yyyy-MM-dd HH:mm:ss')

  const url =
    'https://api.pinata.cloud/farcaster/frames/interactions/top?by=cast_fid' +
    '&start_date=' +
    startDate +
    '&end_date=' +
    endDate

  return fetch(url, {
    method: 'GET',
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

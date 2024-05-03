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

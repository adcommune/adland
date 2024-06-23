import { Address } from 'viem'

type FrameImageType = 'default'

export const framePoolAdminAddressPublicKey =
  '0xA9BA6fF2879155489454D03b51FaEc4Cf1968315' as Address

export const frameAdPositions: Record<
  FrameImageType,
  {
    top: number
    left: number
    width: number
    height: number
  }
> = {
  default: {
    top: 0.25,
    left: 0.175,
    width: 0.65,
    height: 0.32,
  },
}

export const frameConfig = {
  initialFrameImageMaxAge: 1 * 60,
  height: 1000,
}

export const noAdBillboardBackground = 'https://i.imgur.com/Utb4w8A.jpg'
export const squareBillboardBackground = 'https://i.imgur.com/vvNJpNf.jpg'
export const learnMoreBillboardBackground = 'https://i.imgur.com/jABvz51.jpg'
export const distributorBillboardBackground = 'https://i.imgur.com/FoJusWv.jpg'
export const successDistributorBillboardBackground =
  'https://i.imgur.com/Hl6vkzW.jpg'
export const errorDistributorBillboardBackground =
  'https://i.imgur.com/uf5FOVb.jpg'
export const claimBillboardBackground =
  'https://62wlochdkzby9bfe.public.blob.vercel-storage.com/claim-bg-HAmA9VuGplBlPbT9WHpsnao1MLtF4H.jpg'

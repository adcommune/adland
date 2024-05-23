type FrameImageType = 'default'

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
  initialFrameImageMaxAge: 2 * 60,
  height: 1000,
}

export const squareBillboardBackground = 'https://i.imgur.com/vvNJpNf.jpg'
export const learnMoreBillboardBackground = 'https://i.imgur.com/jABvz51.jpg'
export const distributorBillboardBackground = 'https://i.imgur.com/FoJusWv.jpg'
export const successDistributorBillboardBackground =
  'https://i.imgur.com/Hl6vkzW.jpg'
export const errorDistributorBillboardBackground =
  'https://i.imgur.com/uf5FOVb.jpg'

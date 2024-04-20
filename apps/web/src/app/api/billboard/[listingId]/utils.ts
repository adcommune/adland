import { FrameAspectRatio } from '@/config/constants'

const initialWidth = 500

type BillboardSettings = {
  top: number
  left: number
  billboardWith: number
  billboardHeight: number
}

const billboardSettings: Record<FrameAspectRatio, BillboardSettings> = {
  '1.91:1': {
    top: 27,
    left: 30,
    billboardWith: 385,
    billboardHeight: 200,
  },
  '1:1': {
    top: 80,
    left: 90,
    billboardWith: 320,
    billboardHeight: 320,
  },
}

const applyMultiplier = (
  settings: BillboardSettings,
  multiplier: number,
): BillboardSettings => {
  return {
    top: Math.round(settings.top * multiplier),
    left: Math.round(settings.left * multiplier),
    billboardWith: Math.round(settings.billboardWith * multiplier),
    billboardHeight: Math.round(settings.billboardHeight * multiplier),
  }
}

export { initialWidth, billboardSettings, applyMultiplier }

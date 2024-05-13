type BillboardSettings = {
  billboardTop: number
  billboardLeft: number
  billboardWith: number
  billboardHeight: number
}

const applyRatios = (
  ratios: {
    top: number
    left: number
    width: number
    height: number
  },
  width: number,
): BillboardSettings => {
  return {
    billboardTop: ratios.top * width,
    billboardLeft: ratios.left * width,
    billboardWith: ratios.width * width,
    billboardHeight: ratios.height * width,
  }
}

export { applyRatios }

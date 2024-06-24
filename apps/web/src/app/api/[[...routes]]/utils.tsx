import { frameAdPositions, frameConfig } from '@/config/frame'
import { FrameResponse } from 'frog'
import { colors, createSystem, units } from 'frog/ui'

const {
  Box,
  Columns,
  Column,
  Heading,
  HStack,
  Rows,
  Row,
  Spacer,
  Text,
  VStack,
  Image,
  Divider,
  vars,
} = createSystem({
  fonts: {
    default: [
      {
        name: 'Montserrat',
        weight: 400,
        source: 'google',
      },
      {
        name: 'Montserrat',
        weight: 700,
        source: 'google',
      },
    ],
  },
  colors: {
    ...colors.light,
    black: '#000000',
    white: '#ffffff',
  },
  units: {
    ...units,
    'billboard-top': frameAdPositions.default.top,
    'billboard-left': frameAdPositions.default.left,
    'billboard-width': frameAdPositions.default.width,
    'billboard-height': frameAdPositions.default.height,
  },
})

const { height } = frameConfig

export let imageOptions: NonNullable<FrameResponse['imageOptions']> = {
  height,
  width: height,
}

export {
  Box,
  Columns,
  Column,
  Heading,
  HStack,
  Rows,
  Row,
  Spacer,
  Text,
  VStack,
  Image,
  Divider,
  vars,
}

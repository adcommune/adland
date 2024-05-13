import { frameAdPositions } from '@/config/frame'
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
  vars,
} = createSystem({
  fonts: {
    default: [
      {
        name: 'Montserrat',
        weight: 400,
        source: 'google',
      },
    ],
  },
  colors: colors.light,
  units: {
    ...units,
    'billboard-top': frameAdPositions.default.top,
    'billboard-left': frameAdPositions.default.left,
    'billboard-width': frameAdPositions.default.width,
    'billboard-height': frameAdPositions.default.height,
  },
})

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
  vars,
}

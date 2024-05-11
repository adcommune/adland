import { colors, createSystem, units } from 'frog/ui'

export const frameConfig = {
  maxAge: 5 * 60,
  height: 1000,
}

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
    // Ad Billboard
    'billboard-top': 0.25,
    'billboard-left': 0.175,
    'billboard-width': 0.65,
    'billboard-height': 0.32,
    // Distributor Ad Billboard
    'distributor-billboard-top': 0.25,
    'distributor-billboard-left': 0.175,
    'distributor-billboard-width': 0.65,
    'distributor-billboard-height': 0.32,
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

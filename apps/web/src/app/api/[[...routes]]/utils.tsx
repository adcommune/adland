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
  colors: colors.light,
  units: {
    ...units,
    'billboard-top': 0.225,
    'billboard-left': 0.05,
    'billboard-width': 0.89,
    'billboard-height': 0.435,
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

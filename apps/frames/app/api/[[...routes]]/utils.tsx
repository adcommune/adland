import { colors, createSystem } from "frog/ui";

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
  vars,
} = createSystem({
  colors: colors.light,
});

const header = (
  <Column
    grow
    alignVertical="center"
    alignHorizontal="center"
    backgroundColor={"background"}
  >
    AdLand Promo Mint
  </Column>
);

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
  vars,
  header,
};

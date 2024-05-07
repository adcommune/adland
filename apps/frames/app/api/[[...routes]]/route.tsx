/** @jsxImportSource frog/jsx */

import { Button, Frog } from "frog";
import { devtools } from "frog/dev";
import { neynar } from "frog/hubs";
import { handle } from "frog/next";
import { serveStatic } from "frog/serve-static";
import { colors } from "frog/ui";
import { vars, Box, Column, HStack } from "./utils";

const app = new Frog({
  assetsPath: "/",
  basePath: "/api",
  imageAspectRatio: "1.91:1",
  ui: { vars },
  // hub: neynar({ apiKey: process.env.NEYNAR_API_KEY ?? "" }),
});

// Uncomment to use Edge Runtime
export const runtime = "edge";

const fruitColors: Record<string, keyof typeof colors.light> = {
  apple: "green",
  banana: "amber300",
  cherry: "red",
  date: "amber1000",
};

app.frame("/", (c) => {
  const { buttonValue, inputText, status } = c;
  const fruit = inputText || buttonValue;

  return c.res({
    title: "Fruit Picker",
    image: (
      <Box grow>
        <HStack gap="8" grow>
          <Column grow alignVertical="center" alignHorizontal="center">
            Fruit
          </Column>
          {buttonValue ? (
            <Column
              grow
              alignVertical="center"
              alignHorizontal="center"
              backgroundColor={fruitColors[buttonValue]}
            >
              {fruit ?? "no-fruit"}
            </Column>
          ) : (
            <></>
          )}
        </HStack>
      </Box>
    ),
    intents: [
      <Button value="apple">Apple</Button>,
      <Button value="banana">Banana</Button>,
      <Button value="cherry">Cherry</Button>,
      <Button value="date">Date</Button>,
    ],
  });
});

devtools(app, { serveStatic, appFid: 1733 });

export const GET = handle(app);
export const POST = handle(app);

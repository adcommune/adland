/** @jsxImportSource frog/jsx */

import { Button, Frog } from "frog";
import { devtools } from "frog/dev";
import { neynar as neynarHub } from "frog/hubs";
import { neynar } from "frog/middlewares";
import { handle } from "frog/next";
import { serveStatic } from "frog/serve-static";
import { colors } from "frog/ui";
import { vars, Box, Column, HStack } from "./utils";

const app = new Frog({
  assetsPath: "/",
  basePath: "/api",
  imageAspectRatio: "1.91:1",
  ui: { vars },
  verify: true,
  hub: neynarHub({
    apiKey: process.env.NEYNAR_API_KEY as string,
  }),
});
// Uncomment to use Edge Runtime
export const runtime = "edge";

const fruitColors: Record<string, keyof typeof colors.light> = {
  apple: "green",
  banana: "amber300",
  cherry: "red",
  date: "amber1000",
};

app.frame(
  "/",
  neynar({
    apiKey: process.env.NEYNAR_API_KEY as string,
    features: ["cast", "interactor"],
  }),
  (c) => {
    const {
      buttonValue,
      inputText,
      status,
      var: { interactor, cast },
    } = c;
    const fruit = inputText || buttonValue;
    const recasted = cast?.reactions.recasts.find(
      (rc) => rc.fid === interactor?.fid
    );
    const liked = cast?.reactions.likes.find(
      (lk) => lk.fid === interactor?.fid
    );

    if (status === "initial") {
      return c.res({
        title: "Fruit Picker",
        image: (
          <Box grow>
            <Column grow alignVertical="center" alignHorizontal="center">
              Fruit Frame
            </Column>
          </Box>
        ),
        intents: [<Button value="verify">Get Started</Button>],
      });
    }

    if (!liked && !recasted) {
      return c.res({
        title: "Fruit Picker",
        image: (
          <Box grow>
            <Column grow alignVertical="center" alignHorizontal="center">
              Please like or recast the fruit frame
            </Column>
          </Box>
        ),
        intents: [<Button value="verify">Get Started</Button>],
      });
    }

    return c.res({
      title: "Fruit Picker",
      image: (
        <Box grow>
          <HStack gap="8" grow>
            <Column grow alignVertical="center" alignHorizontal="center">
              {interactor?.displayName ?? "no-interactor"}
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
  }
);

devtools(app, { serveStatic, appFid: 1733 });

export const GET = handle(app);
export const POST = handle(app);

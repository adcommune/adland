/** @jsxImportSource frog/jsx */

import { Button, Frog } from "frog";
import { devtools } from "frog/dev";
import { neynar as neynarHub } from "frog/hubs";
import { neynar } from "frog/middlewares";
import { handle } from "frog/next";
import { serveStatic } from "frog/serve-static";
import { colors } from "frog/ui";
import { vars, Box, Column, HStack, header } from "./utils";
import { kv } from "@vercel/kv";
import { airdropConfig } from "@/config/constants";
import { constants } from "@adland/common";

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

const local = process.env.NODE_ENV === "development";

app.frame(
  "/",
  neynar({
    apiKey: process.env.NEYNAR_API_KEY as string,
    features: ["cast", "interactor"],
  }),
  async (c) => {
    const {
      buttonValue,
      inputText,
      status,
      var: { interactor, cast },
    } = c;
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
            <HStack gap="8" grow>
              {header}
              <Column grow alignVertical="center" alignHorizontal="center">
                Fruit Frame
              </Column>
            </HStack>
          </Box>
        ),
        intents: [<Button value="verify">Get Started</Button>],
      });
    }

    if (!liked && !recasted && !local) {
      return c.res({
        title: "Fruit Picker",
        image: (
          <Box grow>
            <HStack gap="8" grow>
              {header}
              <Column grow alignVertical="center" alignHorizontal="center">
                Please like or recast the fruit frame
              </Column>
            </HStack>
          </Box>
        ),
        intents: [<Button value="verify">Get Started</Button>],
      });
    }

    const airdrop = airdropConfig[constants.chain.id];

    if (airdrop) {
      const { maxCount } = airdrop;
      const k = (cast?.parentHash ?? "hash") + ":count";
      const count = parseInt((await kv.get(k)) ?? "0");

      if (buttonValue === "mint" && count < maxCount) {
        await kv.incr(k);
      }
    }

    return c.res({
      title: "Fruit Picker",
      image: (
        <Box grow>
          <HStack gap="8" grow>
            {header}
            {buttonValue ? (
              <Column
                grow
                alignVertical="center"
                alignHorizontal="center"
                backgroundColor={fruitColors[buttonValue]}
              >
                You can mint !
              </Column>
            ) : (
              <></>
            )}
          </HStack>
        </Box>
      ),
      intents: [<Button value="mint">Mint</Button>],
    });
  }
);

devtools(app, { serveStatic, appFid: 1733 });

export const GET = handle(app);
export const POST = handle(app);

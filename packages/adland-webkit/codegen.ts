import { CodegenConfig } from "@graphql-codegen/cli";
import { constants } from "@adland/common";

const config: CodegenConfig = {
  overwrite: true,
  generates: {
    "./src/generated.ts": {
      schema: constants.subgraphUrl,
      documents: "./documents/adland.graphql",
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
      config: {
        typesSuffix: "_subgraph",
      },
    },
    "./src/hooks.ts": {
      schema: constants.subgraphUrl,
      documents: "./documents/adland.graphql",
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-query",
      ],
      config: {
        reactQueryVersion: 5,
        fetcher: {
          func: "./fetcher#fetcher",
          isReactHook: true,
        },
      },
    },
    "./src/ponder.ts": {
      schema: "http://localhost:42069/graphql",
      documents: "./documents/ponder.graphql",
      plugins: [
        "typescript",
        "typescript-operations",
        // "typescript-react-query",
        "typescript-graphql-request",
      ],
      config: {
        reactQueryVersion: 5,
        fetcher: {
          func: "./fetcher#fetcher",
          isReactHook: true,
        },
      },
    },
  },
};

export default config;

import { CodegenConfig } from "@graphql-codegen/cli";
import { constants } from "@adland/common";

const config: CodegenConfig = {
  overwrite: true,
  schema: [constants.subgraphUrl],
  documents: "./documents/**/*.graphql",
  generates: {
    "./src/generated.ts": {
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
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-query",
      ],
      config: {
        reactQueryVersion: 5,
        fetcher: {
          endpoint: constants.subgraphUrl,
          fetchParams: {},
        },
      },
    },
  },
};

export default config;

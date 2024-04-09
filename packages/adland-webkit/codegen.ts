import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    "https://api.thegraph.com/subgraphs/name/nezz0746/adland-optsepolia",
  ],
  documents: "./documents/**/*.graphql",
  generates: {
    "./src/generated.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
      config: {},
    },
  },
};

export default config;

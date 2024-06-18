const {
  getIntrospectionQuery,
  parse,
  buildClientSchema,
  print,
} = require("graphql");
const { buildOperationNodeForField } = require("@graphql-tools/utils");
const axios = require("axios").default;
const fs = require("fs/promises");
const { constants } = require("@adland/common");

async function getSchemaFromUrl(url) {
  const response = await axios
    .post(url, { query: getIntrospectionQuery({}).toString() })
    .catch((e) => console.log(e));

  return buildClientSchema(response.data.data);
}

const pullSchema = async function ({
  schemaUrl,
  fileName,
  operations,
  depthLimit,
  removeLastArg,
}) {
  const schema = await getSchemaFromUrl(schemaUrl);

  const operationsDictionary = {
    query: { ...(schema.getQueryType()?.getFields() || {}) },
  };

  let documentString = "";
  for (const operationKind in operationsDictionary) {
    for (const operationName in operationsDictionary[operationKind]) {
      if (operations && !operations.includes(operationName)) {
        continue;
      }

      // Removing subgraphError argument from the query
      if (removeLastArg) {
        operationsDictionary[operationKind][operationName].args.pop();
      }

      // List of queries to remove
      const exclude = ["_meta"];

      if (exclude.includes(operationName)) {
        continue;
      }

      const operationAST = buildOperationNodeForField({
        schema,
        kind: operationKind,
        field: operationName,
        depthLimit: depthLimit || 4,
      });

      // Hardcoding naming fixes
      operationAST.name.value = operationAST.name.value.replace("_query", "");

      documentString += print(operationAST);
    }
  }

  await fs.writeFile(
    `./documents/${fileName}.graphql`,
    documentString,
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );

  return documentString;
};

const main = async function () {
  const urls = [
    // {
    //   schemaUrl: constants.superfluidSubgraphUrl,
    //   fileName: "superfluid",
    //   operations: ["pool"],
    // },
    {
      schemaUrl: constants.subgraphUrl,
      fileName: "adland",
      removeLastArg: true,
    },
    // {
    //   schemaUrl: "http://localhost:42069/graphql",
    //   fileName: "ponder",
    //   depthLimit: 5,
    // },
  ];

  let documentString = "";

  for (const url of urls) {
    documentString += await pullSchema(url);
  }

  return parse(documentString);
};

main();

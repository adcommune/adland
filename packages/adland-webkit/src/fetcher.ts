import { GraphQLClient } from "graphql-request";
import { constants } from "@adland/common";

export function fetcher<TData, TVariables extends { [key: string]: any }>(
  query: string
) {
  return (variables?: TVariables): Promise<TData> => {
    const client = new GraphQLClient(constants.subgraphUrl);

    return client.request(query, variables);
  };
}

import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Bytes: { input: any; output: any; }
  Int8: { input: any; output: any; }
  Timestamp: { input: any; output: any; }
};

export type AdGroup_subgraph = {
  __typename?: 'AdGroup';
  adSpaces: Array<AdSpace_subgraph>;
  beneficiary: Scalars['Bytes']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  transactionHash: Scalars['Bytes']['output'];
};


export type AdGroupAdSpacesArgs_subgraph = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdSpace_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AdSpace_Filter_subgraph>;
};

export type AdGroupCreated_subgraph = {
  __typename?: 'AdGroupCreated';
  beneficiary: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  groupId: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type AdGroupCreated_Filter_subgraph = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter_subgraph>;
  and?: InputMaybe<Array<InputMaybe<AdGroupCreated_Filter_subgraph>>>;
  beneficiary?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_contains?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_gt?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_gte?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  beneficiary_lt?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_lte?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_not?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
  groupId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  groupId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  groupId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  groupId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  groupId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  groupId_not?: InputMaybe<Scalars['BigInt']['input']>;
  groupId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<AdGroupCreated_Filter_subgraph>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum AdGroupCreated_OrderBy_subgraph {
  Beneficiary_subgraph = 'beneficiary',
  BlockNumber_subgraph = 'blockNumber',
  BlockTimestamp_subgraph = 'blockTimestamp',
  GroupId_subgraph = 'groupId',
  Id_subgraph = 'id',
  TransactionHash_subgraph = 'transactionHash'
}

export type AdGroup_Filter_subgraph = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter_subgraph>;
  adSpaces_?: InputMaybe<AdSpace_Filter_subgraph>;
  and?: InputMaybe<Array<InputMaybe<AdGroup_Filter_subgraph>>>;
  beneficiary?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_contains?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_gt?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_gte?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  beneficiary_lt?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_lte?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_not?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  beneficiary_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<AdGroup_Filter_subgraph>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum AdGroup_OrderBy_subgraph {
  AdSpaces_subgraph = 'adSpaces',
  Beneficiary_subgraph = 'beneficiary',
  BlockTimestamp_subgraph = 'blockTimestamp',
  Id_subgraph = 'id',
  TransactionHash_subgraph = 'transactionHash'
}

export type AdPool_subgraph = {
  __typename?: 'AdPool';
  adSpace: AdSpace_subgraph;
  adToken: TokenX_subgraph;
  blockTimestamp: Scalars['BigInt']['output'];
  dPool: Scalars['Bytes']['output'];
  id: Scalars['String']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type AdPool_Filter_subgraph = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter_subgraph>;
  adSpace?: InputMaybe<Scalars['String']['input']>;
  adSpace_?: InputMaybe<AdSpace_Filter_subgraph>;
  adSpace_contains?: InputMaybe<Scalars['String']['input']>;
  adSpace_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  adSpace_ends_with?: InputMaybe<Scalars['String']['input']>;
  adSpace_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  adSpace_gt?: InputMaybe<Scalars['String']['input']>;
  adSpace_gte?: InputMaybe<Scalars['String']['input']>;
  adSpace_in?: InputMaybe<Array<Scalars['String']['input']>>;
  adSpace_lt?: InputMaybe<Scalars['String']['input']>;
  adSpace_lte?: InputMaybe<Scalars['String']['input']>;
  adSpace_not?: InputMaybe<Scalars['String']['input']>;
  adSpace_not_contains?: InputMaybe<Scalars['String']['input']>;
  adSpace_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  adSpace_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  adSpace_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  adSpace_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  adSpace_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  adSpace_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  adSpace_starts_with?: InputMaybe<Scalars['String']['input']>;
  adSpace_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  adToken?: InputMaybe<Scalars['String']['input']>;
  adToken_?: InputMaybe<TokenX_Filter_subgraph>;
  adToken_contains?: InputMaybe<Scalars['String']['input']>;
  adToken_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  adToken_ends_with?: InputMaybe<Scalars['String']['input']>;
  adToken_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  adToken_gt?: InputMaybe<Scalars['String']['input']>;
  adToken_gte?: InputMaybe<Scalars['String']['input']>;
  adToken_in?: InputMaybe<Array<Scalars['String']['input']>>;
  adToken_lt?: InputMaybe<Scalars['String']['input']>;
  adToken_lte?: InputMaybe<Scalars['String']['input']>;
  adToken_not?: InputMaybe<Scalars['String']['input']>;
  adToken_not_contains?: InputMaybe<Scalars['String']['input']>;
  adToken_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  adToken_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  adToken_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  adToken_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  adToken_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  adToken_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  adToken_starts_with?: InputMaybe<Scalars['String']['input']>;
  adToken_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  and?: InputMaybe<Array<InputMaybe<AdPool_Filter_subgraph>>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  dPool?: InputMaybe<Scalars['Bytes']['input']>;
  dPool_contains?: InputMaybe<Scalars['Bytes']['input']>;
  dPool_gt?: InputMaybe<Scalars['Bytes']['input']>;
  dPool_gte?: InputMaybe<Scalars['Bytes']['input']>;
  dPool_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  dPool_lt?: InputMaybe<Scalars['Bytes']['input']>;
  dPool_lte?: InputMaybe<Scalars['Bytes']['input']>;
  dPool_not?: InputMaybe<Scalars['Bytes']['input']>;
  dPool_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  dPool_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<AdPool_Filter_subgraph>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum AdPool_OrderBy_subgraph {
  AdSpace_subgraph = 'adSpace',
  AdSpaceBlockTimestamp_subgraph = 'adSpace__blockTimestamp',
  AdSpaceId_subgraph = 'adSpace__id',
  AdSpaceTransactionHash_subgraph = 'adSpace__transactionHash',
  AdSpaceUri_subgraph = 'adSpace__uri',
  AdToken_subgraph = 'adToken',
  AdTokenBlockNumber_subgraph = 'adToken__blockNumber',
  AdTokenBlockTimestamp_subgraph = 'adToken__blockTimestamp',
  AdTokenId_subgraph = 'adToken__id',
  AdTokenIsNativeToken_subgraph = 'adToken__isNativeToken',
  AdTokenSuperToken_subgraph = 'adToken__superToken',
  AdTokenTransactionHash_subgraph = 'adToken__transactionHash',
  AdTokenUnderlyingToken_subgraph = 'adToken__underlyingToken',
  BlockTimestamp_subgraph = 'blockTimestamp',
  DPool_subgraph = 'dPool',
  Id_subgraph = 'id',
  TransactionHash_subgraph = 'transactionHash'
}

export type AdSpace_subgraph = {
  __typename?: 'AdSpace';
  adGroup: AdGroup_subgraph;
  adPools: Array<AdPool_subgraph>;
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  transactionHash: Scalars['Bytes']['output'];
  uri?: Maybe<Scalars['String']['output']>;
};


export type AdSpaceAdPoolsArgs_subgraph = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdPool_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AdPool_Filter_subgraph>;
};

export type AdSpaceCreated_subgraph = {
  __typename?: 'AdSpaceCreated';
  adId: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  groupId: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type AdSpaceCreated_Filter_subgraph = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter_subgraph>;
  adId?: InputMaybe<Scalars['BigInt']['input']>;
  adId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  adId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  adId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  adId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  adId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  adId_not?: InputMaybe<Scalars['BigInt']['input']>;
  adId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<AdSpaceCreated_Filter_subgraph>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  groupId?: InputMaybe<Scalars['BigInt']['input']>;
  groupId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  groupId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  groupId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  groupId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  groupId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  groupId_not?: InputMaybe<Scalars['BigInt']['input']>;
  groupId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<AdSpaceCreated_Filter_subgraph>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum AdSpaceCreated_OrderBy_subgraph {
  AdId_subgraph = 'adId',
  BlockNumber_subgraph = 'blockNumber',
  BlockTimestamp_subgraph = 'blockTimestamp',
  GroupId_subgraph = 'groupId',
  Id_subgraph = 'id',
  TransactionHash_subgraph = 'transactionHash'
}

export type AdSpaceStrategyUpdated_subgraph = {
  __typename?: 'AdSpaceStrategyUpdated';
  adId: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  strategy: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type AdSpaceStrategyUpdated_Filter_subgraph = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter_subgraph>;
  adId?: InputMaybe<Scalars['BigInt']['input']>;
  adId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  adId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  adId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  adId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  adId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  adId_not?: InputMaybe<Scalars['BigInt']['input']>;
  adId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<AdSpaceStrategyUpdated_Filter_subgraph>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<AdSpaceStrategyUpdated_Filter_subgraph>>>;
  strategy?: InputMaybe<Scalars['Bytes']['input']>;
  strategy_contains?: InputMaybe<Scalars['Bytes']['input']>;
  strategy_gt?: InputMaybe<Scalars['Bytes']['input']>;
  strategy_gte?: InputMaybe<Scalars['Bytes']['input']>;
  strategy_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  strategy_lt?: InputMaybe<Scalars['Bytes']['input']>;
  strategy_lte?: InputMaybe<Scalars['Bytes']['input']>;
  strategy_not?: InputMaybe<Scalars['Bytes']['input']>;
  strategy_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  strategy_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum AdSpaceStrategyUpdated_OrderBy_subgraph {
  AdId_subgraph = 'adId',
  BlockNumber_subgraph = 'blockNumber',
  BlockTimestamp_subgraph = 'blockTimestamp',
  Id_subgraph = 'id',
  Strategy_subgraph = 'strategy',
  TransactionHash_subgraph = 'transactionHash'
}

export type AdSpaceUriUpdated_subgraph = {
  __typename?: 'AdSpaceURIUpdated';
  adId: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
  uri: Scalars['String']['output'];
};

export type AdSpaceUriUpdated_Filter_subgraph = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter_subgraph>;
  adId?: InputMaybe<Scalars['BigInt']['input']>;
  adId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  adId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  adId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  adId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  adId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  adId_not?: InputMaybe<Scalars['BigInt']['input']>;
  adId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<AdSpaceUriUpdated_Filter_subgraph>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<AdSpaceUriUpdated_Filter_subgraph>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  uri?: InputMaybe<Scalars['String']['input']>;
  uri_contains?: InputMaybe<Scalars['String']['input']>;
  uri_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_ends_with?: InputMaybe<Scalars['String']['input']>;
  uri_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_gt?: InputMaybe<Scalars['String']['input']>;
  uri_gte?: InputMaybe<Scalars['String']['input']>;
  uri_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uri_lt?: InputMaybe<Scalars['String']['input']>;
  uri_lte?: InputMaybe<Scalars['String']['input']>;
  uri_not?: InputMaybe<Scalars['String']['input']>;
  uri_not_contains?: InputMaybe<Scalars['String']['input']>;
  uri_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  uri_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uri_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  uri_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_starts_with?: InputMaybe<Scalars['String']['input']>;
  uri_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum AdSpaceUriUpdated_OrderBy_subgraph {
  AdId_subgraph = 'adId',
  BlockNumber_subgraph = 'blockNumber',
  BlockTimestamp_subgraph = 'blockTimestamp',
  Id_subgraph = 'id',
  TransactionHash_subgraph = 'transactionHash',
  Uri_subgraph = 'uri'
}

export type AdSpace_Filter_subgraph = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter_subgraph>;
  adGroup?: InputMaybe<Scalars['String']['input']>;
  adGroup_?: InputMaybe<AdGroup_Filter_subgraph>;
  adGroup_contains?: InputMaybe<Scalars['String']['input']>;
  adGroup_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  adGroup_ends_with?: InputMaybe<Scalars['String']['input']>;
  adGroup_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  adGroup_gt?: InputMaybe<Scalars['String']['input']>;
  adGroup_gte?: InputMaybe<Scalars['String']['input']>;
  adGroup_in?: InputMaybe<Array<Scalars['String']['input']>>;
  adGroup_lt?: InputMaybe<Scalars['String']['input']>;
  adGroup_lte?: InputMaybe<Scalars['String']['input']>;
  adGroup_not?: InputMaybe<Scalars['String']['input']>;
  adGroup_not_contains?: InputMaybe<Scalars['String']['input']>;
  adGroup_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  adGroup_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  adGroup_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  adGroup_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  adGroup_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  adGroup_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  adGroup_starts_with?: InputMaybe<Scalars['String']['input']>;
  adGroup_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  adPools_?: InputMaybe<AdPool_Filter_subgraph>;
  and?: InputMaybe<Array<InputMaybe<AdSpace_Filter_subgraph>>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<AdSpace_Filter_subgraph>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  uri?: InputMaybe<Scalars['String']['input']>;
  uri_contains?: InputMaybe<Scalars['String']['input']>;
  uri_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_ends_with?: InputMaybe<Scalars['String']['input']>;
  uri_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_gt?: InputMaybe<Scalars['String']['input']>;
  uri_gte?: InputMaybe<Scalars['String']['input']>;
  uri_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uri_lt?: InputMaybe<Scalars['String']['input']>;
  uri_lte?: InputMaybe<Scalars['String']['input']>;
  uri_not?: InputMaybe<Scalars['String']['input']>;
  uri_not_contains?: InputMaybe<Scalars['String']['input']>;
  uri_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  uri_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uri_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  uri_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_starts_with?: InputMaybe<Scalars['String']['input']>;
  uri_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum AdSpace_OrderBy_subgraph {
  AdGroup_subgraph = 'adGroup',
  AdGroupBeneficiary_subgraph = 'adGroup__beneficiary',
  AdGroupBlockTimestamp_subgraph = 'adGroup__blockTimestamp',
  AdGroupId_subgraph = 'adGroup__id',
  AdGroupTransactionHash_subgraph = 'adGroup__transactionHash',
  AdPools_subgraph = 'adPools',
  BlockTimestamp_subgraph = 'blockTimestamp',
  Id_subgraph = 'id',
  TransactionHash_subgraph = 'transactionHash',
  Uri_subgraph = 'uri'
}

export type AdminChanged_subgraph = {
  __typename?: 'AdminChanged';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  newAdmin: Scalars['Bytes']['output'];
  previousAdmin: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type AdminChanged_Filter_subgraph = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter_subgraph>;
  and?: InputMaybe<Array<InputMaybe<AdminChanged_Filter_subgraph>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newAdmin?: InputMaybe<Scalars['Bytes']['input']>;
  newAdmin_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newAdmin_gt?: InputMaybe<Scalars['Bytes']['input']>;
  newAdmin_gte?: InputMaybe<Scalars['Bytes']['input']>;
  newAdmin_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newAdmin_lt?: InputMaybe<Scalars['Bytes']['input']>;
  newAdmin_lte?: InputMaybe<Scalars['Bytes']['input']>;
  newAdmin_not?: InputMaybe<Scalars['Bytes']['input']>;
  newAdmin_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newAdmin_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<AdminChanged_Filter_subgraph>>>;
  previousAdmin?: InputMaybe<Scalars['Bytes']['input']>;
  previousAdmin_contains?: InputMaybe<Scalars['Bytes']['input']>;
  previousAdmin_gt?: InputMaybe<Scalars['Bytes']['input']>;
  previousAdmin_gte?: InputMaybe<Scalars['Bytes']['input']>;
  previousAdmin_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  previousAdmin_lt?: InputMaybe<Scalars['Bytes']['input']>;
  previousAdmin_lte?: InputMaybe<Scalars['Bytes']['input']>;
  previousAdmin_not?: InputMaybe<Scalars['Bytes']['input']>;
  previousAdmin_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  previousAdmin_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum AdminChanged_OrderBy_subgraph {
  BlockNumber_subgraph = 'blockNumber',
  BlockTimestamp_subgraph = 'blockTimestamp',
  Id_subgraph = 'id',
  NewAdmin_subgraph = 'newAdmin',
  PreviousAdmin_subgraph = 'previousAdmin',
  TransactionHash_subgraph = 'transactionHash'
}

export enum Aggregation_Interval_subgraph {
  Day_subgraph = 'day',
  Hour_subgraph = 'hour'
}

export type Approval_subgraph = {
  __typename?: 'Approval';
  approved: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  owner: Scalars['Bytes']['output'];
  tokenId: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type ApprovalForAll_subgraph = {
  __typename?: 'ApprovalForAll';
  approved: Scalars['Boolean']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  operator: Scalars['Bytes']['output'];
  owner: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type ApprovalForAll_Filter_subgraph = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter_subgraph>;
  and?: InputMaybe<Array<InputMaybe<ApprovalForAll_Filter_subgraph>>>;
  approved?: InputMaybe<Scalars['Boolean']['input']>;
  approved_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  approved_not?: InputMaybe<Scalars['Boolean']['input']>;
  approved_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  operator?: InputMaybe<Scalars['Bytes']['input']>;
  operator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  operator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  operator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  operator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  operator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  operator_not?: InputMaybe<Scalars['Bytes']['input']>;
  operator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ApprovalForAll_Filter_subgraph>>>;
  owner?: InputMaybe<Scalars['Bytes']['input']>;
  owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum ApprovalForAll_OrderBy_subgraph {
  Approved_subgraph = 'approved',
  BlockNumber_subgraph = 'blockNumber',
  BlockTimestamp_subgraph = 'blockTimestamp',
  Id_subgraph = 'id',
  Operator_subgraph = 'operator',
  Owner_subgraph = 'owner',
  TransactionHash_subgraph = 'transactionHash'
}

export type Approval_Filter_subgraph = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter_subgraph>;
  and?: InputMaybe<Array<InputMaybe<Approval_Filter_subgraph>>>;
  approved?: InputMaybe<Scalars['Bytes']['input']>;
  approved_contains?: InputMaybe<Scalars['Bytes']['input']>;
  approved_gt?: InputMaybe<Scalars['Bytes']['input']>;
  approved_gte?: InputMaybe<Scalars['Bytes']['input']>;
  approved_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  approved_lt?: InputMaybe<Scalars['Bytes']['input']>;
  approved_lte?: InputMaybe<Scalars['Bytes']['input']>;
  approved_not?: InputMaybe<Scalars['Bytes']['input']>;
  approved_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  approved_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Approval_Filter_subgraph>>>;
  owner?: InputMaybe<Scalars['Bytes']['input']>;
  owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokenId?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum Approval_OrderBy_subgraph {
  Approved_subgraph = 'approved',
  BlockNumber_subgraph = 'blockNumber',
  BlockTimestamp_subgraph = 'blockTimestamp',
  Id_subgraph = 'id',
  Owner_subgraph = 'owner',
  TokenId_subgraph = 'tokenId',
  TransactionHash_subgraph = 'transactionHash'
}

export type BeaconUpgraded_subgraph = {
  __typename?: 'BeaconUpgraded';
  beacon: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type BeaconUpgraded_Filter_subgraph = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter_subgraph>;
  and?: InputMaybe<Array<InputMaybe<BeaconUpgraded_Filter_subgraph>>>;
  beacon?: InputMaybe<Scalars['Bytes']['input']>;
  beacon_contains?: InputMaybe<Scalars['Bytes']['input']>;
  beacon_gt?: InputMaybe<Scalars['Bytes']['input']>;
  beacon_gte?: InputMaybe<Scalars['Bytes']['input']>;
  beacon_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  beacon_lt?: InputMaybe<Scalars['Bytes']['input']>;
  beacon_lte?: InputMaybe<Scalars['Bytes']['input']>;
  beacon_not?: InputMaybe<Scalars['Bytes']['input']>;
  beacon_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  beacon_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<BeaconUpgraded_Filter_subgraph>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum BeaconUpgraded_OrderBy_subgraph {
  Beacon_subgraph = 'beacon',
  BlockNumber_subgraph = 'blockNumber',
  BlockTimestamp_subgraph = 'blockTimestamp',
  Id_subgraph = 'id',
  TransactionHash_subgraph = 'transactionHash'
}

export type BlockChangedFilter_subgraph = {
  number_gte: Scalars['Int']['input'];
};

export type Block_Height_subgraph = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type BuyerApprovedForListing_subgraph = {
  __typename?: 'BuyerApprovedForListing';
  approved: Scalars['Boolean']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  buyer: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  listingId: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type BuyerApprovedForListing_Filter_subgraph = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter_subgraph>;
  and?: InputMaybe<Array<InputMaybe<BuyerApprovedForListing_Filter_subgraph>>>;
  approved?: InputMaybe<Scalars['Boolean']['input']>;
  approved_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  approved_not?: InputMaybe<Scalars['Boolean']['input']>;
  approved_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  buyer?: InputMaybe<Scalars['Bytes']['input']>;
  buyer_contains?: InputMaybe<Scalars['Bytes']['input']>;
  buyer_gt?: InputMaybe<Scalars['Bytes']['input']>;
  buyer_gte?: InputMaybe<Scalars['Bytes']['input']>;
  buyer_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  buyer_lt?: InputMaybe<Scalars['Bytes']['input']>;
  buyer_lte?: InputMaybe<Scalars['Bytes']['input']>;
  buyer_not?: InputMaybe<Scalars['Bytes']['input']>;
  buyer_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  buyer_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  listingId?: InputMaybe<Scalars['BigInt']['input']>;
  listingId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  listingId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  listingId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  listingId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  listingId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  listingId_not?: InputMaybe<Scalars['BigInt']['input']>;
  listingId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<BuyerApprovedForListing_Filter_subgraph>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum BuyerApprovedForListing_OrderBy_subgraph {
  Approved_subgraph = 'approved',
  BlockNumber_subgraph = 'blockNumber',
  BlockTimestamp_subgraph = 'blockTimestamp',
  Buyer_subgraph = 'buyer',
  Id_subgraph = 'id',
  ListingId_subgraph = 'listingId',
  TransactionHash_subgraph = 'transactionHash'
}

export type CancelledListing_subgraph = {
  __typename?: 'CancelledListing';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  listingCreator: Scalars['Bytes']['output'];
  listingId: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type CancelledListing_Filter_subgraph = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter_subgraph>;
  and?: InputMaybe<Array<InputMaybe<CancelledListing_Filter_subgraph>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  listingCreator?: InputMaybe<Scalars['Bytes']['input']>;
  listingCreator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  listingCreator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  listingCreator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  listingCreator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  listingCreator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  listingCreator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  listingCreator_not?: InputMaybe<Scalars['Bytes']['input']>;
  listingCreator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  listingCreator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  listingId?: InputMaybe<Scalars['BigInt']['input']>;
  listingId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  listingId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  listingId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  listingId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  listingId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  listingId_not?: InputMaybe<Scalars['BigInt']['input']>;
  listingId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<CancelledListing_Filter_subgraph>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum CancelledListing_OrderBy_subgraph {
  BlockNumber_subgraph = 'blockNumber',
  BlockTimestamp_subgraph = 'blockTimestamp',
  Id_subgraph = 'id',
  ListingCreator_subgraph = 'listingCreator',
  ListingId_subgraph = 'listingId',
  TransactionHash_subgraph = 'transactionHash'
}

export type CurrencyApprovedForListing_subgraph = {
  __typename?: 'CurrencyApprovedForListing';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  currency: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  listingId: Scalars['BigInt']['output'];
  pricePerToken: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type CurrencyApprovedForListing_Filter_subgraph = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter_subgraph>;
  and?: InputMaybe<Array<InputMaybe<CurrencyApprovedForListing_Filter_subgraph>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  currency?: InputMaybe<Scalars['Bytes']['input']>;
  currency_contains?: InputMaybe<Scalars['Bytes']['input']>;
  currency_gt?: InputMaybe<Scalars['Bytes']['input']>;
  currency_gte?: InputMaybe<Scalars['Bytes']['input']>;
  currency_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  currency_lt?: InputMaybe<Scalars['Bytes']['input']>;
  currency_lte?: InputMaybe<Scalars['Bytes']['input']>;
  currency_not?: InputMaybe<Scalars['Bytes']['input']>;
  currency_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  currency_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  listingId?: InputMaybe<Scalars['BigInt']['input']>;
  listingId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  listingId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  listingId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  listingId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  listingId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  listingId_not?: InputMaybe<Scalars['BigInt']['input']>;
  listingId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<CurrencyApprovedForListing_Filter_subgraph>>>;
  pricePerToken?: InputMaybe<Scalars['BigInt']['input']>;
  pricePerToken_gt?: InputMaybe<Scalars['BigInt']['input']>;
  pricePerToken_gte?: InputMaybe<Scalars['BigInt']['input']>;
  pricePerToken_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pricePerToken_lt?: InputMaybe<Scalars['BigInt']['input']>;
  pricePerToken_lte?: InputMaybe<Scalars['BigInt']['input']>;
  pricePerToken_not?: InputMaybe<Scalars['BigInt']['input']>;
  pricePerToken_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum CurrencyApprovedForListing_OrderBy_subgraph {
  BlockNumber_subgraph = 'blockNumber',
  BlockTimestamp_subgraph = 'blockTimestamp',
  Currency_subgraph = 'currency',
  Id_subgraph = 'id',
  ListingId_subgraph = 'listingId',
  PricePerToken_subgraph = 'pricePerToken',
  TransactionHash_subgraph = 'transactionHash'
}

export type Initialized_subgraph = {
  __typename?: 'Initialized';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
  version: Scalars['Int']['output'];
};

export type Initialized_Filter_subgraph = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter_subgraph>;
  and?: InputMaybe<Array<InputMaybe<Initialized_Filter_subgraph>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Initialized_Filter_subgraph>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  version?: InputMaybe<Scalars['Int']['input']>;
  version_gt?: InputMaybe<Scalars['Int']['input']>;
  version_gte?: InputMaybe<Scalars['Int']['input']>;
  version_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  version_lt?: InputMaybe<Scalars['Int']['input']>;
  version_lte?: InputMaybe<Scalars['Int']['input']>;
  version_not?: InputMaybe<Scalars['Int']['input']>;
  version_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export enum Initialized_OrderBy_subgraph {
  BlockNumber_subgraph = 'blockNumber',
  BlockTimestamp_subgraph = 'blockTimestamp',
  Id_subgraph = 'id',
  TransactionHash_subgraph = 'transactionHash',
  Version_subgraph = 'version'
}

export type NewListing_subgraph = {
  __typename?: 'NewListing';
  assetContract: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  listingCreator: Scalars['Bytes']['output'];
  listingId: Scalars['BigInt']['output'];
  listing_assetContract: Scalars['Bytes']['output'];
  listing_currency: Scalars['Bytes']['output'];
  listing_endTimestamp: Scalars['BigInt']['output'];
  listing_listingCreator: Scalars['Bytes']['output'];
  listing_listingId: Scalars['BigInt']['output'];
  listing_listingOwner: Scalars['Bytes']['output'];
  listing_pricePerToken: Scalars['BigInt']['output'];
  listing_quantity: Scalars['BigInt']['output'];
  listing_reserved: Scalars['Boolean']['output'];
  listing_startTimestamp: Scalars['BigInt']['output'];
  listing_status: Scalars['Int']['output'];
  listing_taxBeneficiary: Scalars['Bytes']['output'];
  listing_taxRate: Scalars['BigInt']['output'];
  listing_tokenId: Scalars['BigInt']['output'];
  listing_tokenType: Scalars['Int']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type NewListing_Filter_subgraph = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter_subgraph>;
  and?: InputMaybe<Array<InputMaybe<NewListing_Filter_subgraph>>>;
  assetContract?: InputMaybe<Scalars['Bytes']['input']>;
  assetContract_contains?: InputMaybe<Scalars['Bytes']['input']>;
  assetContract_gt?: InputMaybe<Scalars['Bytes']['input']>;
  assetContract_gte?: InputMaybe<Scalars['Bytes']['input']>;
  assetContract_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  assetContract_lt?: InputMaybe<Scalars['Bytes']['input']>;
  assetContract_lte?: InputMaybe<Scalars['Bytes']['input']>;
  assetContract_not?: InputMaybe<Scalars['Bytes']['input']>;
  assetContract_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  assetContract_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  listingCreator?: InputMaybe<Scalars['Bytes']['input']>;
  listingCreator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  listingCreator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  listingCreator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  listingCreator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  listingCreator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  listingCreator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  listingCreator_not?: InputMaybe<Scalars['Bytes']['input']>;
  listingCreator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  listingCreator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  listingId?: InputMaybe<Scalars['BigInt']['input']>;
  listingId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  listingId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  listingId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  listingId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  listingId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  listingId_not?: InputMaybe<Scalars['BigInt']['input']>;
  listingId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  listing_assetContract?: InputMaybe<Scalars['Bytes']['input']>;
  listing_assetContract_contains?: InputMaybe<Scalars['Bytes']['input']>;
  listing_assetContract_gt?: InputMaybe<Scalars['Bytes']['input']>;
  listing_assetContract_gte?: InputMaybe<Scalars['Bytes']['input']>;
  listing_assetContract_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  listing_assetContract_lt?: InputMaybe<Scalars['Bytes']['input']>;
  listing_assetContract_lte?: InputMaybe<Scalars['Bytes']['input']>;
  listing_assetContract_not?: InputMaybe<Scalars['Bytes']['input']>;
  listing_assetContract_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  listing_assetContract_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  listing_currency?: InputMaybe<Scalars['Bytes']['input']>;
  listing_currency_contains?: InputMaybe<Scalars['Bytes']['input']>;
  listing_currency_gt?: InputMaybe<Scalars['Bytes']['input']>;
  listing_currency_gte?: InputMaybe<Scalars['Bytes']['input']>;
  listing_currency_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  listing_currency_lt?: InputMaybe<Scalars['Bytes']['input']>;
  listing_currency_lte?: InputMaybe<Scalars['Bytes']['input']>;
  listing_currency_not?: InputMaybe<Scalars['Bytes']['input']>;
  listing_currency_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  listing_currency_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  listing_endTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  listing_endTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  listing_endTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  listing_endTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  listing_endTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  listing_endTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  listing_endTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  listing_endTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  listing_listingCreator?: InputMaybe<Scalars['Bytes']['input']>;
  listing_listingCreator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  listing_listingCreator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  listing_listingCreator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  listing_listingCreator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  listing_listingCreator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  listing_listingCreator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  listing_listingCreator_not?: InputMaybe<Scalars['Bytes']['input']>;
  listing_listingCreator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  listing_listingCreator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  listing_listingId?: InputMaybe<Scalars['BigInt']['input']>;
  listing_listingId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  listing_listingId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  listing_listingId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  listing_listingId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  listing_listingId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  listing_listingId_not?: InputMaybe<Scalars['BigInt']['input']>;
  listing_listingId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  listing_listingOwner?: InputMaybe<Scalars['Bytes']['input']>;
  listing_listingOwner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  listing_listingOwner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  listing_listingOwner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  listing_listingOwner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  listing_listingOwner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  listing_listingOwner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  listing_listingOwner_not?: InputMaybe<Scalars['Bytes']['input']>;
  listing_listingOwner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  listing_listingOwner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  listing_pricePerToken?: InputMaybe<Scalars['BigInt']['input']>;
  listing_pricePerToken_gt?: InputMaybe<Scalars['BigInt']['input']>;
  listing_pricePerToken_gte?: InputMaybe<Scalars['BigInt']['input']>;
  listing_pricePerToken_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  listing_pricePerToken_lt?: InputMaybe<Scalars['BigInt']['input']>;
  listing_pricePerToken_lte?: InputMaybe<Scalars['BigInt']['input']>;
  listing_pricePerToken_not?: InputMaybe<Scalars['BigInt']['input']>;
  listing_pricePerToken_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  listing_quantity?: InputMaybe<Scalars['BigInt']['input']>;
  listing_quantity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  listing_quantity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  listing_quantity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  listing_quantity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  listing_quantity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  listing_quantity_not?: InputMaybe<Scalars['BigInt']['input']>;
  listing_quantity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  listing_reserved?: InputMaybe<Scalars['Boolean']['input']>;
  listing_reserved_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  listing_reserved_not?: InputMaybe<Scalars['Boolean']['input']>;
  listing_reserved_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  listing_startTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  listing_startTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  listing_startTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  listing_startTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  listing_startTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  listing_startTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  listing_startTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  listing_startTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  listing_status?: InputMaybe<Scalars['Int']['input']>;
  listing_status_gt?: InputMaybe<Scalars['Int']['input']>;
  listing_status_gte?: InputMaybe<Scalars['Int']['input']>;
  listing_status_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  listing_status_lt?: InputMaybe<Scalars['Int']['input']>;
  listing_status_lte?: InputMaybe<Scalars['Int']['input']>;
  listing_status_not?: InputMaybe<Scalars['Int']['input']>;
  listing_status_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  listing_taxBeneficiary?: InputMaybe<Scalars['Bytes']['input']>;
  listing_taxBeneficiary_contains?: InputMaybe<Scalars['Bytes']['input']>;
  listing_taxBeneficiary_gt?: InputMaybe<Scalars['Bytes']['input']>;
  listing_taxBeneficiary_gte?: InputMaybe<Scalars['Bytes']['input']>;
  listing_taxBeneficiary_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  listing_taxBeneficiary_lt?: InputMaybe<Scalars['Bytes']['input']>;
  listing_taxBeneficiary_lte?: InputMaybe<Scalars['Bytes']['input']>;
  listing_taxBeneficiary_not?: InputMaybe<Scalars['Bytes']['input']>;
  listing_taxBeneficiary_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  listing_taxBeneficiary_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  listing_taxRate?: InputMaybe<Scalars['BigInt']['input']>;
  listing_taxRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  listing_taxRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  listing_taxRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  listing_taxRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  listing_taxRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  listing_taxRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  listing_taxRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  listing_tokenId?: InputMaybe<Scalars['BigInt']['input']>;
  listing_tokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  listing_tokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  listing_tokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  listing_tokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  listing_tokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  listing_tokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  listing_tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  listing_tokenType?: InputMaybe<Scalars['Int']['input']>;
  listing_tokenType_gt?: InputMaybe<Scalars['Int']['input']>;
  listing_tokenType_gte?: InputMaybe<Scalars['Int']['input']>;
  listing_tokenType_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  listing_tokenType_lt?: InputMaybe<Scalars['Int']['input']>;
  listing_tokenType_lte?: InputMaybe<Scalars['Int']['input']>;
  listing_tokenType_not?: InputMaybe<Scalars['Int']['input']>;
  listing_tokenType_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  or?: InputMaybe<Array<InputMaybe<NewListing_Filter_subgraph>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum NewListing_OrderBy_subgraph {
  AssetContract_subgraph = 'assetContract',
  BlockNumber_subgraph = 'blockNumber',
  BlockTimestamp_subgraph = 'blockTimestamp',
  Id_subgraph = 'id',
  ListingCreator_subgraph = 'listingCreator',
  ListingId_subgraph = 'listingId',
  ListingAssetContract_subgraph = 'listing_assetContract',
  ListingCurrency_subgraph = 'listing_currency',
  ListingEndTimestamp_subgraph = 'listing_endTimestamp',
  ListingListingCreator_subgraph = 'listing_listingCreator',
  ListingListingId_subgraph = 'listing_listingId',
  ListingListingOwner_subgraph = 'listing_listingOwner',
  ListingPricePerToken_subgraph = 'listing_pricePerToken',
  ListingQuantity_subgraph = 'listing_quantity',
  ListingReserved_subgraph = 'listing_reserved',
  ListingStartTimestamp_subgraph = 'listing_startTimestamp',
  ListingStatus_subgraph = 'listing_status',
  ListingTaxBeneficiary_subgraph = 'listing_taxBeneficiary',
  ListingTaxRate_subgraph = 'listing_taxRate',
  ListingTokenId_subgraph = 'listing_tokenId',
  ListingTokenType_subgraph = 'listing_tokenType',
  TransactionHash_subgraph = 'transactionHash'
}

export type NewSale_subgraph = {
  __typename?: 'NewSale';
  assetContract: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  buyer: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  listingCreator: Scalars['Bytes']['output'];
  listingId: Scalars['BigInt']['output'];
  quantityBought: Scalars['BigInt']['output'];
  tokenId: Scalars['BigInt']['output'];
  totalPricePaid: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type NewSale_Filter_subgraph = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter_subgraph>;
  and?: InputMaybe<Array<InputMaybe<NewSale_Filter_subgraph>>>;
  assetContract?: InputMaybe<Scalars['Bytes']['input']>;
  assetContract_contains?: InputMaybe<Scalars['Bytes']['input']>;
  assetContract_gt?: InputMaybe<Scalars['Bytes']['input']>;
  assetContract_gte?: InputMaybe<Scalars['Bytes']['input']>;
  assetContract_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  assetContract_lt?: InputMaybe<Scalars['Bytes']['input']>;
  assetContract_lte?: InputMaybe<Scalars['Bytes']['input']>;
  assetContract_not?: InputMaybe<Scalars['Bytes']['input']>;
  assetContract_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  assetContract_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  buyer?: InputMaybe<Scalars['Bytes']['input']>;
  buyer_contains?: InputMaybe<Scalars['Bytes']['input']>;
  buyer_gt?: InputMaybe<Scalars['Bytes']['input']>;
  buyer_gte?: InputMaybe<Scalars['Bytes']['input']>;
  buyer_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  buyer_lt?: InputMaybe<Scalars['Bytes']['input']>;
  buyer_lte?: InputMaybe<Scalars['Bytes']['input']>;
  buyer_not?: InputMaybe<Scalars['Bytes']['input']>;
  buyer_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  buyer_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  listingCreator?: InputMaybe<Scalars['Bytes']['input']>;
  listingCreator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  listingCreator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  listingCreator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  listingCreator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  listingCreator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  listingCreator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  listingCreator_not?: InputMaybe<Scalars['Bytes']['input']>;
  listingCreator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  listingCreator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  listingId?: InputMaybe<Scalars['BigInt']['input']>;
  listingId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  listingId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  listingId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  listingId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  listingId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  listingId_not?: InputMaybe<Scalars['BigInt']['input']>;
  listingId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<NewSale_Filter_subgraph>>>;
  quantityBought?: InputMaybe<Scalars['BigInt']['input']>;
  quantityBought_gt?: InputMaybe<Scalars['BigInt']['input']>;
  quantityBought_gte?: InputMaybe<Scalars['BigInt']['input']>;
  quantityBought_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quantityBought_lt?: InputMaybe<Scalars['BigInt']['input']>;
  quantityBought_lte?: InputMaybe<Scalars['BigInt']['input']>;
  quantityBought_not?: InputMaybe<Scalars['BigInt']['input']>;
  quantityBought_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenId?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalPricePaid?: InputMaybe<Scalars['BigInt']['input']>;
  totalPricePaid_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalPricePaid_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalPricePaid_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalPricePaid_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalPricePaid_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalPricePaid_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalPricePaid_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum NewSale_OrderBy_subgraph {
  AssetContract_subgraph = 'assetContract',
  BlockNumber_subgraph = 'blockNumber',
  BlockTimestamp_subgraph = 'blockTimestamp',
  Buyer_subgraph = 'buyer',
  Id_subgraph = 'id',
  ListingCreator_subgraph = 'listingCreator',
  ListingId_subgraph = 'listingId',
  QuantityBought_subgraph = 'quantityBought',
  TokenId_subgraph = 'tokenId',
  TotalPricePaid_subgraph = 'totalPricePaid',
  TransactionHash_subgraph = 'transactionHash'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection_subgraph {
  Asc_subgraph = 'asc',
  Desc_subgraph = 'desc'
}

export type OwnershipTransferred_subgraph = {
  __typename?: 'OwnershipTransferred';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  newOwner: Scalars['Bytes']['output'];
  previousOwner: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type OwnershipTransferred_Filter_subgraph = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter_subgraph>;
  and?: InputMaybe<Array<InputMaybe<OwnershipTransferred_Filter_subgraph>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newOwner?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newOwner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_not?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newOwner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<OwnershipTransferred_Filter_subgraph>>>;
  previousOwner?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  previousOwner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_not?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  previousOwner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum OwnershipTransferred_OrderBy_subgraph {
  BlockNumber_subgraph = 'blockNumber',
  BlockTimestamp_subgraph = 'blockTimestamp',
  Id_subgraph = 'id',
  NewOwner_subgraph = 'newOwner',
  PreviousOwner_subgraph = 'previousOwner',
  TransactionHash_subgraph = 'transactionHash'
}

export type Query_subgraph = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta__subgraph>;
  adGroup?: Maybe<AdGroup_subgraph>;
  adGroupCreated?: Maybe<AdGroupCreated_subgraph>;
  adGroupCreateds: Array<AdGroupCreated_subgraph>;
  adGroups: Array<AdGroup_subgraph>;
  adPool?: Maybe<AdPool_subgraph>;
  adPools: Array<AdPool_subgraph>;
  adSpace?: Maybe<AdSpace_subgraph>;
  adSpaceCreated?: Maybe<AdSpaceCreated_subgraph>;
  adSpaceCreateds: Array<AdSpaceCreated_subgraph>;
  adSpaceStrategyUpdated?: Maybe<AdSpaceStrategyUpdated_subgraph>;
  adSpaceStrategyUpdateds: Array<AdSpaceStrategyUpdated_subgraph>;
  adSpaceURIUpdated?: Maybe<AdSpaceUriUpdated_subgraph>;
  adSpaceURIUpdateds: Array<AdSpaceUriUpdated_subgraph>;
  adSpaces: Array<AdSpace_subgraph>;
  adminChanged?: Maybe<AdminChanged_subgraph>;
  adminChangeds: Array<AdminChanged_subgraph>;
  approval?: Maybe<Approval_subgraph>;
  approvalForAll?: Maybe<ApprovalForAll_subgraph>;
  approvalForAlls: Array<ApprovalForAll_subgraph>;
  approvals: Array<Approval_subgraph>;
  beaconUpgraded?: Maybe<BeaconUpgraded_subgraph>;
  beaconUpgradeds: Array<BeaconUpgraded_subgraph>;
  buyerApprovedForListing?: Maybe<BuyerApprovedForListing_subgraph>;
  buyerApprovedForListings: Array<BuyerApprovedForListing_subgraph>;
  cancelledListing?: Maybe<CancelledListing_subgraph>;
  cancelledListings: Array<CancelledListing_subgraph>;
  currencyApprovedForListing?: Maybe<CurrencyApprovedForListing_subgraph>;
  currencyApprovedForListings: Array<CurrencyApprovedForListing_subgraph>;
  initialized?: Maybe<Initialized_subgraph>;
  initializeds: Array<Initialized_subgraph>;
  newListing?: Maybe<NewListing_subgraph>;
  newListings: Array<NewListing_subgraph>;
  newSale?: Maybe<NewSale_subgraph>;
  newSales: Array<NewSale_subgraph>;
  ownershipTransferred?: Maybe<OwnershipTransferred_subgraph>;
  ownershipTransferreds: Array<OwnershipTransferred_subgraph>;
  tokenX?: Maybe<TokenX_subgraph>;
  tokenXs: Array<TokenX_subgraph>;
  transfer?: Maybe<Transfer_subgraph>;
  transfers: Array<Transfer_subgraph>;
  updatedListing?: Maybe<UpdatedListing_subgraph>;
  updatedListings: Array<UpdatedListing_subgraph>;
  upgraded?: Maybe<Upgraded_subgraph>;
  upgradeds: Array<Upgraded_subgraph>;
};


export type Query_MetaArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
};


export type QueryAdGroupArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy__subgraph;
};


export type QueryAdGroupCreatedArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy__subgraph;
};


export type QueryAdGroupCreatedsArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdGroupCreated_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy__subgraph;
  where?: InputMaybe<AdGroupCreated_Filter_subgraph>;
};


export type QueryAdGroupsArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdGroup_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy__subgraph;
  where?: InputMaybe<AdGroup_Filter_subgraph>;
};


export type QueryAdPoolArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy__subgraph;
};


export type QueryAdPoolsArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdPool_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy__subgraph;
  where?: InputMaybe<AdPool_Filter_subgraph>;
};


export type QueryAdSpaceArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy__subgraph;
};


export type QueryAdSpaceCreatedArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy__subgraph;
};


export type QueryAdSpaceCreatedsArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdSpaceCreated_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy__subgraph;
  where?: InputMaybe<AdSpaceCreated_Filter_subgraph>;
};


export type QueryAdSpaceStrategyUpdatedArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy__subgraph;
};


export type QueryAdSpaceStrategyUpdatedsArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdSpaceStrategyUpdated_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy__subgraph;
  where?: InputMaybe<AdSpaceStrategyUpdated_Filter_subgraph>;
};


export type QueryAdSpaceUriUpdatedArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy__subgraph;
};


export type QueryAdSpaceUriUpdatedsArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdSpaceUriUpdated_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy__subgraph;
  where?: InputMaybe<AdSpaceUriUpdated_Filter_subgraph>;
};


export type QueryAdSpacesArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdSpace_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy__subgraph;
  where?: InputMaybe<AdSpace_Filter_subgraph>;
};


export type QueryAdminChangedArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy__subgraph;
};


export type QueryAdminChangedsArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdminChanged_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy__subgraph;
  where?: InputMaybe<AdminChanged_Filter_subgraph>;
};


export type QueryApprovalArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy__subgraph;
};


export type QueryApprovalForAllArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy__subgraph;
};


export type QueryApprovalForAllsArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ApprovalForAll_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy__subgraph;
  where?: InputMaybe<ApprovalForAll_Filter_subgraph>;
};


export type QueryApprovalsArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Approval_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy__subgraph;
  where?: InputMaybe<Approval_Filter_subgraph>;
};


export type QueryBeaconUpgradedArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy__subgraph;
};


export type QueryBeaconUpgradedsArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BeaconUpgraded_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy__subgraph;
  where?: InputMaybe<BeaconUpgraded_Filter_subgraph>;
};


export type QueryBuyerApprovedForListingArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy__subgraph;
};


export type QueryBuyerApprovedForListingsArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BuyerApprovedForListing_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy__subgraph;
  where?: InputMaybe<BuyerApprovedForListing_Filter_subgraph>;
};


export type QueryCancelledListingArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy__subgraph;
};


export type QueryCancelledListingsArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CancelledListing_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy__subgraph;
  where?: InputMaybe<CancelledListing_Filter_subgraph>;
};


export type QueryCurrencyApprovedForListingArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy__subgraph;
};


export type QueryCurrencyApprovedForListingsArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CurrencyApprovedForListing_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy__subgraph;
  where?: InputMaybe<CurrencyApprovedForListing_Filter_subgraph>;
};


export type QueryInitializedArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy__subgraph;
};


export type QueryInitializedsArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Initialized_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy__subgraph;
  where?: InputMaybe<Initialized_Filter_subgraph>;
};


export type QueryNewListingArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy__subgraph;
};


export type QueryNewListingsArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NewListing_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy__subgraph;
  where?: InputMaybe<NewListing_Filter_subgraph>;
};


export type QueryNewSaleArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy__subgraph;
};


export type QueryNewSalesArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NewSale_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy__subgraph;
  where?: InputMaybe<NewSale_Filter_subgraph>;
};


export type QueryOwnershipTransferredArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy__subgraph;
};


export type QueryOwnershipTransferredsArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OwnershipTransferred_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy__subgraph;
  where?: InputMaybe<OwnershipTransferred_Filter_subgraph>;
};


export type QueryTokenXArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy__subgraph;
};


export type QueryTokenXsArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenX_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy__subgraph;
  where?: InputMaybe<TokenX_Filter_subgraph>;
};


export type QueryTransferArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy__subgraph;
};


export type QueryTransfersArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Transfer_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy__subgraph;
  where?: InputMaybe<Transfer_Filter_subgraph>;
};


export type QueryUpdatedListingArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy__subgraph;
};


export type QueryUpdatedListingsArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UpdatedListing_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy__subgraph;
  where?: InputMaybe<UpdatedListing_Filter_subgraph>;
};


export type QueryUpgradedArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy__subgraph;
};


export type QueryUpgradedsArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Upgraded_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy__subgraph;
  where?: InputMaybe<Upgraded_Filter_subgraph>;
};

export type Subscription_subgraph = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta__subgraph>;
  adGroup?: Maybe<AdGroup_subgraph>;
  adGroupCreated?: Maybe<AdGroupCreated_subgraph>;
  adGroupCreateds: Array<AdGroupCreated_subgraph>;
  adGroups: Array<AdGroup_subgraph>;
  adPool?: Maybe<AdPool_subgraph>;
  adPools: Array<AdPool_subgraph>;
  adSpace?: Maybe<AdSpace_subgraph>;
  adSpaceCreated?: Maybe<AdSpaceCreated_subgraph>;
  adSpaceCreateds: Array<AdSpaceCreated_subgraph>;
  adSpaceStrategyUpdated?: Maybe<AdSpaceStrategyUpdated_subgraph>;
  adSpaceStrategyUpdateds: Array<AdSpaceStrategyUpdated_subgraph>;
  adSpaceURIUpdated?: Maybe<AdSpaceUriUpdated_subgraph>;
  adSpaceURIUpdateds: Array<AdSpaceUriUpdated_subgraph>;
  adSpaces: Array<AdSpace_subgraph>;
  adminChanged?: Maybe<AdminChanged_subgraph>;
  adminChangeds: Array<AdminChanged_subgraph>;
  approval?: Maybe<Approval_subgraph>;
  approvalForAll?: Maybe<ApprovalForAll_subgraph>;
  approvalForAlls: Array<ApprovalForAll_subgraph>;
  approvals: Array<Approval_subgraph>;
  beaconUpgraded?: Maybe<BeaconUpgraded_subgraph>;
  beaconUpgradeds: Array<BeaconUpgraded_subgraph>;
  buyerApprovedForListing?: Maybe<BuyerApprovedForListing_subgraph>;
  buyerApprovedForListings: Array<BuyerApprovedForListing_subgraph>;
  cancelledListing?: Maybe<CancelledListing_subgraph>;
  cancelledListings: Array<CancelledListing_subgraph>;
  currencyApprovedForListing?: Maybe<CurrencyApprovedForListing_subgraph>;
  currencyApprovedForListings: Array<CurrencyApprovedForListing_subgraph>;
  initialized?: Maybe<Initialized_subgraph>;
  initializeds: Array<Initialized_subgraph>;
  newListing?: Maybe<NewListing_subgraph>;
  newListings: Array<NewListing_subgraph>;
  newSale?: Maybe<NewSale_subgraph>;
  newSales: Array<NewSale_subgraph>;
  ownershipTransferred?: Maybe<OwnershipTransferred_subgraph>;
  ownershipTransferreds: Array<OwnershipTransferred_subgraph>;
  tokenX?: Maybe<TokenX_subgraph>;
  tokenXs: Array<TokenX_subgraph>;
  transfer?: Maybe<Transfer_subgraph>;
  transfers: Array<Transfer_subgraph>;
  updatedListing?: Maybe<UpdatedListing_subgraph>;
  updatedListings: Array<UpdatedListing_subgraph>;
  upgraded?: Maybe<Upgraded_subgraph>;
  upgradeds: Array<Upgraded_subgraph>;
};


export type Subscription_MetaArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
};


export type SubscriptionAdGroupArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy__subgraph;
};


export type SubscriptionAdGroupCreatedArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy__subgraph;
};


export type SubscriptionAdGroupCreatedsArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdGroupCreated_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy__subgraph;
  where?: InputMaybe<AdGroupCreated_Filter_subgraph>;
};


export type SubscriptionAdGroupsArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdGroup_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy__subgraph;
  where?: InputMaybe<AdGroup_Filter_subgraph>;
};


export type SubscriptionAdPoolArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy__subgraph;
};


export type SubscriptionAdPoolsArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdPool_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy__subgraph;
  where?: InputMaybe<AdPool_Filter_subgraph>;
};


export type SubscriptionAdSpaceArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy__subgraph;
};


export type SubscriptionAdSpaceCreatedArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy__subgraph;
};


export type SubscriptionAdSpaceCreatedsArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdSpaceCreated_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy__subgraph;
  where?: InputMaybe<AdSpaceCreated_Filter_subgraph>;
};


export type SubscriptionAdSpaceStrategyUpdatedArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy__subgraph;
};


export type SubscriptionAdSpaceStrategyUpdatedsArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdSpaceStrategyUpdated_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy__subgraph;
  where?: InputMaybe<AdSpaceStrategyUpdated_Filter_subgraph>;
};


export type SubscriptionAdSpaceUriUpdatedArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy__subgraph;
};


export type SubscriptionAdSpaceUriUpdatedsArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdSpaceUriUpdated_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy__subgraph;
  where?: InputMaybe<AdSpaceUriUpdated_Filter_subgraph>;
};


export type SubscriptionAdSpacesArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdSpace_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy__subgraph;
  where?: InputMaybe<AdSpace_Filter_subgraph>;
};


export type SubscriptionAdminChangedArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy__subgraph;
};


export type SubscriptionAdminChangedsArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdminChanged_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy__subgraph;
  where?: InputMaybe<AdminChanged_Filter_subgraph>;
};


export type SubscriptionApprovalArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy__subgraph;
};


export type SubscriptionApprovalForAllArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy__subgraph;
};


export type SubscriptionApprovalForAllsArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ApprovalForAll_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy__subgraph;
  where?: InputMaybe<ApprovalForAll_Filter_subgraph>;
};


export type SubscriptionApprovalsArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Approval_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy__subgraph;
  where?: InputMaybe<Approval_Filter_subgraph>;
};


export type SubscriptionBeaconUpgradedArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy__subgraph;
};


export type SubscriptionBeaconUpgradedsArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BeaconUpgraded_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy__subgraph;
  where?: InputMaybe<BeaconUpgraded_Filter_subgraph>;
};


export type SubscriptionBuyerApprovedForListingArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy__subgraph;
};


export type SubscriptionBuyerApprovedForListingsArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BuyerApprovedForListing_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy__subgraph;
  where?: InputMaybe<BuyerApprovedForListing_Filter_subgraph>;
};


export type SubscriptionCancelledListingArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy__subgraph;
};


export type SubscriptionCancelledListingsArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CancelledListing_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy__subgraph;
  where?: InputMaybe<CancelledListing_Filter_subgraph>;
};


export type SubscriptionCurrencyApprovedForListingArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy__subgraph;
};


export type SubscriptionCurrencyApprovedForListingsArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CurrencyApprovedForListing_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy__subgraph;
  where?: InputMaybe<CurrencyApprovedForListing_Filter_subgraph>;
};


export type SubscriptionInitializedArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy__subgraph;
};


export type SubscriptionInitializedsArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Initialized_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy__subgraph;
  where?: InputMaybe<Initialized_Filter_subgraph>;
};


export type SubscriptionNewListingArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy__subgraph;
};


export type SubscriptionNewListingsArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NewListing_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy__subgraph;
  where?: InputMaybe<NewListing_Filter_subgraph>;
};


export type SubscriptionNewSaleArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy__subgraph;
};


export type SubscriptionNewSalesArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NewSale_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy__subgraph;
  where?: InputMaybe<NewSale_Filter_subgraph>;
};


export type SubscriptionOwnershipTransferredArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy__subgraph;
};


export type SubscriptionOwnershipTransferredsArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OwnershipTransferred_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy__subgraph;
  where?: InputMaybe<OwnershipTransferred_Filter_subgraph>;
};


export type SubscriptionTokenXArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy__subgraph;
};


export type SubscriptionTokenXsArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenX_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy__subgraph;
  where?: InputMaybe<TokenX_Filter_subgraph>;
};


export type SubscriptionTransferArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy__subgraph;
};


export type SubscriptionTransfersArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Transfer_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy__subgraph;
  where?: InputMaybe<Transfer_Filter_subgraph>;
};


export type SubscriptionUpdatedListingArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy__subgraph;
};


export type SubscriptionUpdatedListingsArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UpdatedListing_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy__subgraph;
  where?: InputMaybe<UpdatedListing_Filter_subgraph>;
};


export type SubscriptionUpgradedArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy__subgraph;
};


export type SubscriptionUpgradedsArgs_subgraph = {
  block?: InputMaybe<Block_Height_subgraph>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Upgraded_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy__subgraph;
  where?: InputMaybe<Upgraded_Filter_subgraph>;
};

export type TokenX_subgraph = {
  __typename?: 'TokenX';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  isNativeToken: Scalars['Boolean']['output'];
  superToken: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
  underlyingToken: Scalars['Bytes']['output'];
};

export type TokenX_Filter_subgraph = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter_subgraph>;
  and?: InputMaybe<Array<InputMaybe<TokenX_Filter_subgraph>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  isNativeToken?: InputMaybe<Scalars['Boolean']['input']>;
  isNativeToken_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isNativeToken_not?: InputMaybe<Scalars['Boolean']['input']>;
  isNativeToken_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  or?: InputMaybe<Array<InputMaybe<TokenX_Filter_subgraph>>>;
  superToken?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_contains?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_gt?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_gte?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  superToken_lt?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_lte?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_not?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  superToken_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  underlyingToken?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingToken_contains?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingToken_gt?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingToken_gte?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingToken_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  underlyingToken_lt?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingToken_lte?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingToken_not?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingToken_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingToken_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum TokenX_OrderBy_subgraph {
  BlockNumber_subgraph = 'blockNumber',
  BlockTimestamp_subgraph = 'blockTimestamp',
  Id_subgraph = 'id',
  IsNativeToken_subgraph = 'isNativeToken',
  SuperToken_subgraph = 'superToken',
  TransactionHash_subgraph = 'transactionHash',
  UnderlyingToken_subgraph = 'underlyingToken'
}

export type Transfer_subgraph = {
  __typename?: 'Transfer';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  from: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  to: Scalars['Bytes']['output'];
  tokenId: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type Transfer_Filter_subgraph = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter_subgraph>;
  and?: InputMaybe<Array<InputMaybe<Transfer_Filter_subgraph>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  from?: InputMaybe<Scalars['Bytes']['input']>;
  from_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_gt?: InputMaybe<Scalars['Bytes']['input']>;
  from_gte?: InputMaybe<Scalars['Bytes']['input']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_lt?: InputMaybe<Scalars['Bytes']['input']>;
  from_lte?: InputMaybe<Scalars['Bytes']['input']>;
  from_not?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Transfer_Filter_subgraph>>>;
  to?: InputMaybe<Scalars['Bytes']['input']>;
  to_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to_gt?: InputMaybe<Scalars['Bytes']['input']>;
  to_gte?: InputMaybe<Scalars['Bytes']['input']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  to_lt?: InputMaybe<Scalars['Bytes']['input']>;
  to_lte?: InputMaybe<Scalars['Bytes']['input']>;
  to_not?: InputMaybe<Scalars['Bytes']['input']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokenId?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum Transfer_OrderBy_subgraph {
  BlockNumber_subgraph = 'blockNumber',
  BlockTimestamp_subgraph = 'blockTimestamp',
  From_subgraph = 'from',
  Id_subgraph = 'id',
  To_subgraph = 'to',
  TokenId_subgraph = 'tokenId',
  TransactionHash_subgraph = 'transactionHash'
}

export type UpdatedListing_subgraph = {
  __typename?: 'UpdatedListing';
  assetContract: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  listingCreator: Scalars['Bytes']['output'];
  listingId: Scalars['BigInt']['output'];
  listing_assetContract: Scalars['Bytes']['output'];
  listing_currency: Scalars['Bytes']['output'];
  listing_endTimestamp: Scalars['BigInt']['output'];
  listing_listingCreator: Scalars['Bytes']['output'];
  listing_listingId: Scalars['BigInt']['output'];
  listing_listingOwner: Scalars['Bytes']['output'];
  listing_pricePerToken: Scalars['BigInt']['output'];
  listing_quantity: Scalars['BigInt']['output'];
  listing_reserved: Scalars['Boolean']['output'];
  listing_startTimestamp: Scalars['BigInt']['output'];
  listing_status: Scalars['Int']['output'];
  listing_taxBeneficiary: Scalars['Bytes']['output'];
  listing_taxRate: Scalars['BigInt']['output'];
  listing_tokenId: Scalars['BigInt']['output'];
  listing_tokenType: Scalars['Int']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type UpdatedListing_Filter_subgraph = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter_subgraph>;
  and?: InputMaybe<Array<InputMaybe<UpdatedListing_Filter_subgraph>>>;
  assetContract?: InputMaybe<Scalars['Bytes']['input']>;
  assetContract_contains?: InputMaybe<Scalars['Bytes']['input']>;
  assetContract_gt?: InputMaybe<Scalars['Bytes']['input']>;
  assetContract_gte?: InputMaybe<Scalars['Bytes']['input']>;
  assetContract_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  assetContract_lt?: InputMaybe<Scalars['Bytes']['input']>;
  assetContract_lte?: InputMaybe<Scalars['Bytes']['input']>;
  assetContract_not?: InputMaybe<Scalars['Bytes']['input']>;
  assetContract_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  assetContract_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  listingCreator?: InputMaybe<Scalars['Bytes']['input']>;
  listingCreator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  listingCreator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  listingCreator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  listingCreator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  listingCreator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  listingCreator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  listingCreator_not?: InputMaybe<Scalars['Bytes']['input']>;
  listingCreator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  listingCreator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  listingId?: InputMaybe<Scalars['BigInt']['input']>;
  listingId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  listingId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  listingId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  listingId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  listingId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  listingId_not?: InputMaybe<Scalars['BigInt']['input']>;
  listingId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  listing_assetContract?: InputMaybe<Scalars['Bytes']['input']>;
  listing_assetContract_contains?: InputMaybe<Scalars['Bytes']['input']>;
  listing_assetContract_gt?: InputMaybe<Scalars['Bytes']['input']>;
  listing_assetContract_gte?: InputMaybe<Scalars['Bytes']['input']>;
  listing_assetContract_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  listing_assetContract_lt?: InputMaybe<Scalars['Bytes']['input']>;
  listing_assetContract_lte?: InputMaybe<Scalars['Bytes']['input']>;
  listing_assetContract_not?: InputMaybe<Scalars['Bytes']['input']>;
  listing_assetContract_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  listing_assetContract_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  listing_currency?: InputMaybe<Scalars['Bytes']['input']>;
  listing_currency_contains?: InputMaybe<Scalars['Bytes']['input']>;
  listing_currency_gt?: InputMaybe<Scalars['Bytes']['input']>;
  listing_currency_gte?: InputMaybe<Scalars['Bytes']['input']>;
  listing_currency_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  listing_currency_lt?: InputMaybe<Scalars['Bytes']['input']>;
  listing_currency_lte?: InputMaybe<Scalars['Bytes']['input']>;
  listing_currency_not?: InputMaybe<Scalars['Bytes']['input']>;
  listing_currency_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  listing_currency_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  listing_endTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  listing_endTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  listing_endTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  listing_endTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  listing_endTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  listing_endTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  listing_endTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  listing_endTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  listing_listingCreator?: InputMaybe<Scalars['Bytes']['input']>;
  listing_listingCreator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  listing_listingCreator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  listing_listingCreator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  listing_listingCreator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  listing_listingCreator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  listing_listingCreator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  listing_listingCreator_not?: InputMaybe<Scalars['Bytes']['input']>;
  listing_listingCreator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  listing_listingCreator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  listing_listingId?: InputMaybe<Scalars['BigInt']['input']>;
  listing_listingId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  listing_listingId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  listing_listingId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  listing_listingId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  listing_listingId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  listing_listingId_not?: InputMaybe<Scalars['BigInt']['input']>;
  listing_listingId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  listing_listingOwner?: InputMaybe<Scalars['Bytes']['input']>;
  listing_listingOwner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  listing_listingOwner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  listing_listingOwner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  listing_listingOwner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  listing_listingOwner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  listing_listingOwner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  listing_listingOwner_not?: InputMaybe<Scalars['Bytes']['input']>;
  listing_listingOwner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  listing_listingOwner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  listing_pricePerToken?: InputMaybe<Scalars['BigInt']['input']>;
  listing_pricePerToken_gt?: InputMaybe<Scalars['BigInt']['input']>;
  listing_pricePerToken_gte?: InputMaybe<Scalars['BigInt']['input']>;
  listing_pricePerToken_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  listing_pricePerToken_lt?: InputMaybe<Scalars['BigInt']['input']>;
  listing_pricePerToken_lte?: InputMaybe<Scalars['BigInt']['input']>;
  listing_pricePerToken_not?: InputMaybe<Scalars['BigInt']['input']>;
  listing_pricePerToken_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  listing_quantity?: InputMaybe<Scalars['BigInt']['input']>;
  listing_quantity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  listing_quantity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  listing_quantity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  listing_quantity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  listing_quantity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  listing_quantity_not?: InputMaybe<Scalars['BigInt']['input']>;
  listing_quantity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  listing_reserved?: InputMaybe<Scalars['Boolean']['input']>;
  listing_reserved_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  listing_reserved_not?: InputMaybe<Scalars['Boolean']['input']>;
  listing_reserved_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  listing_startTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  listing_startTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  listing_startTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  listing_startTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  listing_startTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  listing_startTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  listing_startTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  listing_startTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  listing_status?: InputMaybe<Scalars['Int']['input']>;
  listing_status_gt?: InputMaybe<Scalars['Int']['input']>;
  listing_status_gte?: InputMaybe<Scalars['Int']['input']>;
  listing_status_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  listing_status_lt?: InputMaybe<Scalars['Int']['input']>;
  listing_status_lte?: InputMaybe<Scalars['Int']['input']>;
  listing_status_not?: InputMaybe<Scalars['Int']['input']>;
  listing_status_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  listing_taxBeneficiary?: InputMaybe<Scalars['Bytes']['input']>;
  listing_taxBeneficiary_contains?: InputMaybe<Scalars['Bytes']['input']>;
  listing_taxBeneficiary_gt?: InputMaybe<Scalars['Bytes']['input']>;
  listing_taxBeneficiary_gte?: InputMaybe<Scalars['Bytes']['input']>;
  listing_taxBeneficiary_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  listing_taxBeneficiary_lt?: InputMaybe<Scalars['Bytes']['input']>;
  listing_taxBeneficiary_lte?: InputMaybe<Scalars['Bytes']['input']>;
  listing_taxBeneficiary_not?: InputMaybe<Scalars['Bytes']['input']>;
  listing_taxBeneficiary_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  listing_taxBeneficiary_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  listing_taxRate?: InputMaybe<Scalars['BigInt']['input']>;
  listing_taxRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  listing_taxRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  listing_taxRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  listing_taxRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  listing_taxRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  listing_taxRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  listing_taxRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  listing_tokenId?: InputMaybe<Scalars['BigInt']['input']>;
  listing_tokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  listing_tokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  listing_tokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  listing_tokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  listing_tokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  listing_tokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  listing_tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  listing_tokenType?: InputMaybe<Scalars['Int']['input']>;
  listing_tokenType_gt?: InputMaybe<Scalars['Int']['input']>;
  listing_tokenType_gte?: InputMaybe<Scalars['Int']['input']>;
  listing_tokenType_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  listing_tokenType_lt?: InputMaybe<Scalars['Int']['input']>;
  listing_tokenType_lte?: InputMaybe<Scalars['Int']['input']>;
  listing_tokenType_not?: InputMaybe<Scalars['Int']['input']>;
  listing_tokenType_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  or?: InputMaybe<Array<InputMaybe<UpdatedListing_Filter_subgraph>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum UpdatedListing_OrderBy_subgraph {
  AssetContract_subgraph = 'assetContract',
  BlockNumber_subgraph = 'blockNumber',
  BlockTimestamp_subgraph = 'blockTimestamp',
  Id_subgraph = 'id',
  ListingCreator_subgraph = 'listingCreator',
  ListingId_subgraph = 'listingId',
  ListingAssetContract_subgraph = 'listing_assetContract',
  ListingCurrency_subgraph = 'listing_currency',
  ListingEndTimestamp_subgraph = 'listing_endTimestamp',
  ListingListingCreator_subgraph = 'listing_listingCreator',
  ListingListingId_subgraph = 'listing_listingId',
  ListingListingOwner_subgraph = 'listing_listingOwner',
  ListingPricePerToken_subgraph = 'listing_pricePerToken',
  ListingQuantity_subgraph = 'listing_quantity',
  ListingReserved_subgraph = 'listing_reserved',
  ListingStartTimestamp_subgraph = 'listing_startTimestamp',
  ListingStatus_subgraph = 'listing_status',
  ListingTaxBeneficiary_subgraph = 'listing_taxBeneficiary',
  ListingTaxRate_subgraph = 'listing_taxRate',
  ListingTokenId_subgraph = 'listing_tokenId',
  ListingTokenType_subgraph = 'listing_tokenType',
  TransactionHash_subgraph = 'transactionHash'
}

export type Upgraded_subgraph = {
  __typename?: 'Upgraded';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  implementation: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type Upgraded_Filter_subgraph = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter_subgraph>;
  and?: InputMaybe<Array<InputMaybe<Upgraded_Filter_subgraph>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  implementation?: InputMaybe<Scalars['Bytes']['input']>;
  implementation_contains?: InputMaybe<Scalars['Bytes']['input']>;
  implementation_gt?: InputMaybe<Scalars['Bytes']['input']>;
  implementation_gte?: InputMaybe<Scalars['Bytes']['input']>;
  implementation_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  implementation_lt?: InputMaybe<Scalars['Bytes']['input']>;
  implementation_lte?: InputMaybe<Scalars['Bytes']['input']>;
  implementation_not?: InputMaybe<Scalars['Bytes']['input']>;
  implementation_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  implementation_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Upgraded_Filter_subgraph>>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export enum Upgraded_OrderBy_subgraph {
  BlockNumber_subgraph = 'blockNumber',
  BlockTimestamp_subgraph = 'blockTimestamp',
  Id_subgraph = 'id',
  Implementation_subgraph = 'implementation',
  TransactionHash_subgraph = 'transactionHash'
}

export type _Block__subgraph = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Bytes']['output']>;
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta__subgraph = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block__subgraph;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export enum _SubgraphErrorPolicy__subgraph {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow_subgraph = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny_subgraph = 'deny'
}

export type AdGroupQueryVariables_subgraph = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height_subgraph>;
  adGroup_adSpaces_skip?: InputMaybe<Scalars['Int']['input']>;
  adGroup_adSpaces_first?: InputMaybe<Scalars['Int']['input']>;
  adGroup_adSpaces_orderBy?: InputMaybe<AdSpace_OrderBy_subgraph>;
  adGroup_adSpaces_orderDirection?: InputMaybe<OrderDirection_subgraph>;
  adGroup_adSpaces_where?: InputMaybe<AdSpace_Filter_subgraph>;
  adGroup_adSpaces_adSpaces_adPools_skip?: InputMaybe<Scalars['Int']['input']>;
  adGroup_adSpaces_adSpaces_adPools_first?: InputMaybe<Scalars['Int']['input']>;
  adGroup_adSpaces_adSpaces_adPools_orderBy?: InputMaybe<AdPool_OrderBy_subgraph>;
  adGroup_adSpaces_adSpaces_adPools_orderDirection?: InputMaybe<OrderDirection_subgraph>;
  adGroup_adSpaces_adSpaces_adPools_where?: InputMaybe<AdPool_Filter_subgraph>;
}>;


export type AdGroupQuery_subgraph = { __typename?: 'Query', adGroup?: { __typename?: 'AdGroup', id: string, beneficiary: any, blockTimestamp: any, transactionHash: any, adSpaces: Array<{ __typename?: 'AdSpace', id: string, uri?: string | null, blockTimestamp: any, transactionHash: any, adPools: Array<{ __typename?: 'AdPool', id: string, dPool: any, blockTimestamp: any, transactionHash: any, adToken: { __typename?: 'TokenX', id: any, underlyingToken: any, superToken: any, isNativeToken: boolean, blockNumber: any, blockTimestamp: any, transactionHash: any } }> }> } | null };

export type AdGroupsQueryVariables_subgraph = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdGroup_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  where?: InputMaybe<AdGroup_Filter_subgraph>;
  block?: InputMaybe<Block_Height_subgraph>;
  adGroups_adSpaces_skip?: InputMaybe<Scalars['Int']['input']>;
  adGroups_adSpaces_first?: InputMaybe<Scalars['Int']['input']>;
  adGroups_adSpaces_orderBy?: InputMaybe<AdSpace_OrderBy_subgraph>;
  adGroups_adSpaces_orderDirection?: InputMaybe<OrderDirection_subgraph>;
  adGroups_adSpaces_where?: InputMaybe<AdSpace_Filter_subgraph>;
  adGroups_adSpaces_adSpaces_adPools_skip?: InputMaybe<Scalars['Int']['input']>;
  adGroups_adSpaces_adSpaces_adPools_first?: InputMaybe<Scalars['Int']['input']>;
  adGroups_adSpaces_adSpaces_adPools_orderBy?: InputMaybe<AdPool_OrderBy_subgraph>;
  adGroups_adSpaces_adSpaces_adPools_orderDirection?: InputMaybe<OrderDirection_subgraph>;
  adGroups_adSpaces_adSpaces_adPools_where?: InputMaybe<AdPool_Filter_subgraph>;
}>;


export type AdGroupsQuery_subgraph = { __typename?: 'Query', adGroups: Array<{ __typename?: 'AdGroup', id: string, beneficiary: any, blockTimestamp: any, transactionHash: any, adSpaces: Array<{ __typename?: 'AdSpace', id: string, uri?: string | null, blockTimestamp: any, transactionHash: any, adPools: Array<{ __typename?: 'AdPool', id: string, dPool: any, blockTimestamp: any, transactionHash: any, adToken: { __typename?: 'TokenX', id: any, underlyingToken: any, superToken: any, isNativeToken: boolean, blockNumber: any, blockTimestamp: any, transactionHash: any } }> }> }> };

export type AdSpaceQueryVariables_subgraph = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height_subgraph>;
  adSpace_adPools_skip?: InputMaybe<Scalars['Int']['input']>;
  adSpace_adPools_first?: InputMaybe<Scalars['Int']['input']>;
  adSpace_adPools_orderBy?: InputMaybe<AdPool_OrderBy_subgraph>;
  adSpace_adPools_orderDirection?: InputMaybe<OrderDirection_subgraph>;
  adSpace_adPools_where?: InputMaybe<AdPool_Filter_subgraph>;
}>;


export type AdSpaceQuery_subgraph = { __typename?: 'Query', adSpace?: { __typename?: 'AdSpace', id: string, uri?: string | null, blockTimestamp: any, transactionHash: any, adGroup: { __typename?: 'AdGroup', id: string, beneficiary: any, blockTimestamp: any, transactionHash: any }, adPools: Array<{ __typename?: 'AdPool', id: string, dPool: any, blockTimestamp: any, transactionHash: any, adToken: { __typename?: 'TokenX', id: any, underlyingToken: any, superToken: any, isNativeToken: boolean, blockNumber: any, blockTimestamp: any, transactionHash: any } }> } | null };

export type AdSpacesQueryVariables_subgraph = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdSpace_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  where?: InputMaybe<AdSpace_Filter_subgraph>;
  block?: InputMaybe<Block_Height_subgraph>;
  adSpaces_adPools_skip?: InputMaybe<Scalars['Int']['input']>;
  adSpaces_adPools_first?: InputMaybe<Scalars['Int']['input']>;
  adSpaces_adPools_orderBy?: InputMaybe<AdPool_OrderBy_subgraph>;
  adSpaces_adPools_orderDirection?: InputMaybe<OrderDirection_subgraph>;
  adSpaces_adPools_where?: InputMaybe<AdPool_Filter_subgraph>;
}>;


export type AdSpacesQuery_subgraph = { __typename?: 'Query', adSpaces: Array<{ __typename?: 'AdSpace', id: string, uri?: string | null, blockTimestamp: any, transactionHash: any, adGroup: { __typename?: 'AdGroup', id: string, beneficiary: any, blockTimestamp: any, transactionHash: any }, adPools: Array<{ __typename?: 'AdPool', id: string, dPool: any, blockTimestamp: any, transactionHash: any, adToken: { __typename?: 'TokenX', id: any, underlyingToken: any, superToken: any, isNativeToken: boolean, blockNumber: any, blockTimestamp: any, transactionHash: any } }> }> };

export type AdPoolQueryVariables_subgraph = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height_subgraph>;
}>;


export type AdPoolQuery_subgraph = { __typename?: 'Query', adPool?: { __typename?: 'AdPool', id: string, dPool: any, blockTimestamp: any, transactionHash: any, adSpace: { __typename?: 'AdSpace', id: string, uri?: string | null, blockTimestamp: any, transactionHash: any, adGroup: { __typename?: 'AdGroup', id: string, beneficiary: any, blockTimestamp: any, transactionHash: any } }, adToken: { __typename?: 'TokenX', id: any, underlyingToken: any, superToken: any, isNativeToken: boolean, blockNumber: any, blockTimestamp: any, transactionHash: any } } | null };

export type AdPoolsQueryVariables_subgraph = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdPool_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  where?: InputMaybe<AdPool_Filter_subgraph>;
  block?: InputMaybe<Block_Height_subgraph>;
}>;


export type AdPoolsQuery_subgraph = { __typename?: 'Query', adPools: Array<{ __typename?: 'AdPool', id: string, dPool: any, blockTimestamp: any, transactionHash: any, adSpace: { __typename?: 'AdSpace', id: string, uri?: string | null, blockTimestamp: any, transactionHash: any, adGroup: { __typename?: 'AdGroup', id: string, beneficiary: any, blockTimestamp: any, transactionHash: any } }, adToken: { __typename?: 'TokenX', id: any, underlyingToken: any, superToken: any, isNativeToken: boolean, blockNumber: any, blockTimestamp: any, transactionHash: any } }> };

export type TokenXQueryVariables_subgraph = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height_subgraph>;
}>;


export type TokenXQuery_subgraph = { __typename?: 'Query', tokenX?: { __typename?: 'TokenX', id: any, underlyingToken: any, superToken: any, isNativeToken: boolean, blockNumber: any, blockTimestamp: any, transactionHash: any } | null };

export type TokenXsQueryVariables_subgraph = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenX_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  where?: InputMaybe<TokenX_Filter_subgraph>;
  block?: InputMaybe<Block_Height_subgraph>;
}>;


export type TokenXsQuery_subgraph = { __typename?: 'Query', tokenXs: Array<{ __typename?: 'TokenX', id: any, underlyingToken: any, superToken: any, isNativeToken: boolean, blockNumber: any, blockTimestamp: any, transactionHash: any }> };

export type BuyerApprovedForListingQueryVariables_subgraph = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height_subgraph>;
}>;


export type BuyerApprovedForListingQuery_subgraph = { __typename?: 'Query', buyerApprovedForListing?: { __typename?: 'BuyerApprovedForListing', id: any, listingId: any, buyer: any, approved: boolean, blockNumber: any, blockTimestamp: any, transactionHash: any } | null };

export type BuyerApprovedForListingsQueryVariables_subgraph = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BuyerApprovedForListing_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  where?: InputMaybe<BuyerApprovedForListing_Filter_subgraph>;
  block?: InputMaybe<Block_Height_subgraph>;
}>;


export type BuyerApprovedForListingsQuery_subgraph = { __typename?: 'Query', buyerApprovedForListings: Array<{ __typename?: 'BuyerApprovedForListing', id: any, listingId: any, buyer: any, approved: boolean, blockNumber: any, blockTimestamp: any, transactionHash: any }> };

export type CancelledListingQueryVariables_subgraph = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height_subgraph>;
}>;


export type CancelledListingQuery_subgraph = { __typename?: 'Query', cancelledListing?: { __typename?: 'CancelledListing', id: any, listingCreator: any, listingId: any, blockNumber: any, blockTimestamp: any, transactionHash: any } | null };

export type CancelledListingsQueryVariables_subgraph = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CancelledListing_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  where?: InputMaybe<CancelledListing_Filter_subgraph>;
  block?: InputMaybe<Block_Height_subgraph>;
}>;


export type CancelledListingsQuery_subgraph = { __typename?: 'Query', cancelledListings: Array<{ __typename?: 'CancelledListing', id: any, listingCreator: any, listingId: any, blockNumber: any, blockTimestamp: any, transactionHash: any }> };

export type CurrencyApprovedForListingQueryVariables_subgraph = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height_subgraph>;
}>;


export type CurrencyApprovedForListingQuery_subgraph = { __typename?: 'Query', currencyApprovedForListing?: { __typename?: 'CurrencyApprovedForListing', id: any, listingId: any, currency: any, pricePerToken: any, blockNumber: any, blockTimestamp: any, transactionHash: any } | null };

export type CurrencyApprovedForListingsQueryVariables_subgraph = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CurrencyApprovedForListing_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  where?: InputMaybe<CurrencyApprovedForListing_Filter_subgraph>;
  block?: InputMaybe<Block_Height_subgraph>;
}>;


export type CurrencyApprovedForListingsQuery_subgraph = { __typename?: 'Query', currencyApprovedForListings: Array<{ __typename?: 'CurrencyApprovedForListing', id: any, listingId: any, currency: any, pricePerToken: any, blockNumber: any, blockTimestamp: any, transactionHash: any }> };

export type NewListingQueryVariables_subgraph = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height_subgraph>;
}>;


export type NewListingQuery_subgraph = { __typename?: 'Query', newListing?: { __typename?: 'NewListing', id: any, listingCreator: any, listingId: any, assetContract: any, listing_listingId: any, listing_tokenId: any, listing_quantity: any, listing_pricePerToken: any, listing_startTimestamp: any, listing_endTimestamp: any, listing_listingCreator: any, listing_listingOwner: any, listing_assetContract: any, listing_currency: any, listing_taxRate: any, listing_taxBeneficiary: any, listing_tokenType: number, listing_status: number, listing_reserved: boolean, blockNumber: any, blockTimestamp: any, transactionHash: any } | null };

export type NewListingsQueryVariables_subgraph = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NewListing_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  where?: InputMaybe<NewListing_Filter_subgraph>;
  block?: InputMaybe<Block_Height_subgraph>;
}>;


export type NewListingsQuery_subgraph = { __typename?: 'Query', newListings: Array<{ __typename?: 'NewListing', id: any, listingCreator: any, listingId: any, assetContract: any, listing_listingId: any, listing_tokenId: any, listing_quantity: any, listing_pricePerToken: any, listing_startTimestamp: any, listing_endTimestamp: any, listing_listingCreator: any, listing_listingOwner: any, listing_assetContract: any, listing_currency: any, listing_taxRate: any, listing_taxBeneficiary: any, listing_tokenType: number, listing_status: number, listing_reserved: boolean, blockNumber: any, blockTimestamp: any, transactionHash: any }> };

export type NewSaleQueryVariables_subgraph = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height_subgraph>;
}>;


export type NewSaleQuery_subgraph = { __typename?: 'Query', newSale?: { __typename?: 'NewSale', id: any, listingCreator: any, listingId: any, assetContract: any, tokenId: any, buyer: any, quantityBought: any, totalPricePaid: any, blockNumber: any, blockTimestamp: any, transactionHash: any } | null };

export type NewSalesQueryVariables_subgraph = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NewSale_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  where?: InputMaybe<NewSale_Filter_subgraph>;
  block?: InputMaybe<Block_Height_subgraph>;
}>;


export type NewSalesQuery_subgraph = { __typename?: 'Query', newSales: Array<{ __typename?: 'NewSale', id: any, listingCreator: any, listingId: any, assetContract: any, tokenId: any, buyer: any, quantityBought: any, totalPricePaid: any, blockNumber: any, blockTimestamp: any, transactionHash: any }> };

export type UpdatedListingQueryVariables_subgraph = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height_subgraph>;
}>;


export type UpdatedListingQuery_subgraph = { __typename?: 'Query', updatedListing?: { __typename?: 'UpdatedListing', id: any, listingCreator: any, listingId: any, assetContract: any, listing_listingId: any, listing_tokenId: any, listing_quantity: any, listing_pricePerToken: any, listing_startTimestamp: any, listing_endTimestamp: any, listing_listingCreator: any, listing_listingOwner: any, listing_assetContract: any, listing_currency: any, listing_taxRate: any, listing_taxBeneficiary: any, listing_tokenType: number, listing_status: number, listing_reserved: boolean, blockNumber: any, blockTimestamp: any, transactionHash: any } | null };

export type UpdatedListingsQueryVariables_subgraph = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<UpdatedListing_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  where?: InputMaybe<UpdatedListing_Filter_subgraph>;
  block?: InputMaybe<Block_Height_subgraph>;
}>;


export type UpdatedListingsQuery_subgraph = { __typename?: 'Query', updatedListings: Array<{ __typename?: 'UpdatedListing', id: any, listingCreator: any, listingId: any, assetContract: any, listing_listingId: any, listing_tokenId: any, listing_quantity: any, listing_pricePerToken: any, listing_startTimestamp: any, listing_endTimestamp: any, listing_listingCreator: any, listing_listingOwner: any, listing_assetContract: any, listing_currency: any, listing_taxRate: any, listing_taxBeneficiary: any, listing_tokenType: number, listing_status: number, listing_reserved: boolean, blockNumber: any, blockTimestamp: any, transactionHash: any }> };

export type AdGroupCreatedQueryVariables_subgraph = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height_subgraph>;
}>;


export type AdGroupCreatedQuery_subgraph = { __typename?: 'Query', adGroupCreated?: { __typename?: 'AdGroupCreated', id: any, groupId: any, beneficiary: any, blockNumber: any, blockTimestamp: any, transactionHash: any } | null };

export type AdGroupCreatedsQueryVariables_subgraph = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdGroupCreated_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  where?: InputMaybe<AdGroupCreated_Filter_subgraph>;
  block?: InputMaybe<Block_Height_subgraph>;
}>;


export type AdGroupCreatedsQuery_subgraph = { __typename?: 'Query', adGroupCreateds: Array<{ __typename?: 'AdGroupCreated', id: any, groupId: any, beneficiary: any, blockNumber: any, blockTimestamp: any, transactionHash: any }> };

export type AdSpaceCreatedQueryVariables_subgraph = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height_subgraph>;
}>;


export type AdSpaceCreatedQuery_subgraph = { __typename?: 'Query', adSpaceCreated?: { __typename?: 'AdSpaceCreated', id: any, groupId: any, adId: any, blockNumber: any, blockTimestamp: any, transactionHash: any } | null };

export type AdSpaceCreatedsQueryVariables_subgraph = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdSpaceCreated_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  where?: InputMaybe<AdSpaceCreated_Filter_subgraph>;
  block?: InputMaybe<Block_Height_subgraph>;
}>;


export type AdSpaceCreatedsQuery_subgraph = { __typename?: 'Query', adSpaceCreateds: Array<{ __typename?: 'AdSpaceCreated', id: any, groupId: any, adId: any, blockNumber: any, blockTimestamp: any, transactionHash: any }> };

export type AdSpaceStrategyUpdatedQueryVariables_subgraph = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height_subgraph>;
}>;


export type AdSpaceStrategyUpdatedQuery_subgraph = { __typename?: 'Query', adSpaceStrategyUpdated?: { __typename?: 'AdSpaceStrategyUpdated', id: any, adId: any, strategy: any, blockNumber: any, blockTimestamp: any, transactionHash: any } | null };

export type AdSpaceStrategyUpdatedsQueryVariables_subgraph = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdSpaceStrategyUpdated_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  where?: InputMaybe<AdSpaceStrategyUpdated_Filter_subgraph>;
  block?: InputMaybe<Block_Height_subgraph>;
}>;


export type AdSpaceStrategyUpdatedsQuery_subgraph = { __typename?: 'Query', adSpaceStrategyUpdateds: Array<{ __typename?: 'AdSpaceStrategyUpdated', id: any, adId: any, strategy: any, blockNumber: any, blockTimestamp: any, transactionHash: any }> };

export type AdSpaceUriUpdatedQueryVariables_subgraph = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height_subgraph>;
}>;


export type AdSpaceUriUpdatedQuery_subgraph = { __typename?: 'Query', adSpaceURIUpdated?: { __typename?: 'AdSpaceURIUpdated', id: any, adId: any, uri: string, blockNumber: any, blockTimestamp: any, transactionHash: any } | null };

export type AdSpaceUriUpdatedsQueryVariables_subgraph = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdSpaceUriUpdated_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  where?: InputMaybe<AdSpaceUriUpdated_Filter_subgraph>;
  block?: InputMaybe<Block_Height_subgraph>;
}>;


export type AdSpaceUriUpdatedsQuery_subgraph = { __typename?: 'Query', adSpaceURIUpdateds: Array<{ __typename?: 'AdSpaceURIUpdated', id: any, adId: any, uri: string, blockNumber: any, blockTimestamp: any, transactionHash: any }> };

export type AdminChangedQueryVariables_subgraph = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height_subgraph>;
}>;


export type AdminChangedQuery_subgraph = { __typename?: 'Query', adminChanged?: { __typename?: 'AdminChanged', id: any, previousAdmin: any, newAdmin: any, blockNumber: any, blockTimestamp: any, transactionHash: any } | null };

export type AdminChangedsQueryVariables_subgraph = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdminChanged_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  where?: InputMaybe<AdminChanged_Filter_subgraph>;
  block?: InputMaybe<Block_Height_subgraph>;
}>;


export type AdminChangedsQuery_subgraph = { __typename?: 'Query', adminChangeds: Array<{ __typename?: 'AdminChanged', id: any, previousAdmin: any, newAdmin: any, blockNumber: any, blockTimestamp: any, transactionHash: any }> };

export type ApprovalQueryVariables_subgraph = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height_subgraph>;
}>;


export type ApprovalQuery_subgraph = { __typename?: 'Query', approval?: { __typename?: 'Approval', id: any, owner: any, approved: any, tokenId: any, blockNumber: any, blockTimestamp: any, transactionHash: any } | null };

export type ApprovalsQueryVariables_subgraph = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Approval_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  where?: InputMaybe<Approval_Filter_subgraph>;
  block?: InputMaybe<Block_Height_subgraph>;
}>;


export type ApprovalsQuery_subgraph = { __typename?: 'Query', approvals: Array<{ __typename?: 'Approval', id: any, owner: any, approved: any, tokenId: any, blockNumber: any, blockTimestamp: any, transactionHash: any }> };

export type ApprovalForAllQueryVariables_subgraph = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height_subgraph>;
}>;


export type ApprovalForAllQuery_subgraph = { __typename?: 'Query', approvalForAll?: { __typename?: 'ApprovalForAll', id: any, owner: any, operator: any, approved: boolean, blockNumber: any, blockTimestamp: any, transactionHash: any } | null };

export type ApprovalForAllsQueryVariables_subgraph = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ApprovalForAll_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  where?: InputMaybe<ApprovalForAll_Filter_subgraph>;
  block?: InputMaybe<Block_Height_subgraph>;
}>;


export type ApprovalForAllsQuery_subgraph = { __typename?: 'Query', approvalForAlls: Array<{ __typename?: 'ApprovalForAll', id: any, owner: any, operator: any, approved: boolean, blockNumber: any, blockTimestamp: any, transactionHash: any }> };

export type BeaconUpgradedQueryVariables_subgraph = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height_subgraph>;
}>;


export type BeaconUpgradedQuery_subgraph = { __typename?: 'Query', beaconUpgraded?: { __typename?: 'BeaconUpgraded', id: any, beacon: any, blockNumber: any, blockTimestamp: any, transactionHash: any } | null };

export type BeaconUpgradedsQueryVariables_subgraph = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BeaconUpgraded_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  where?: InputMaybe<BeaconUpgraded_Filter_subgraph>;
  block?: InputMaybe<Block_Height_subgraph>;
}>;


export type BeaconUpgradedsQuery_subgraph = { __typename?: 'Query', beaconUpgradeds: Array<{ __typename?: 'BeaconUpgraded', id: any, beacon: any, blockNumber: any, blockTimestamp: any, transactionHash: any }> };

export type InitializedQueryVariables_subgraph = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height_subgraph>;
}>;


export type InitializedQuery_subgraph = { __typename?: 'Query', initialized?: { __typename?: 'Initialized', id: any, version: number, blockNumber: any, blockTimestamp: any, transactionHash: any } | null };

export type InitializedsQueryVariables_subgraph = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Initialized_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  where?: InputMaybe<Initialized_Filter_subgraph>;
  block?: InputMaybe<Block_Height_subgraph>;
}>;


export type InitializedsQuery_subgraph = { __typename?: 'Query', initializeds: Array<{ __typename?: 'Initialized', id: any, version: number, blockNumber: any, blockTimestamp: any, transactionHash: any }> };

export type OwnershipTransferredQueryVariables_subgraph = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height_subgraph>;
}>;


export type OwnershipTransferredQuery_subgraph = { __typename?: 'Query', ownershipTransferred?: { __typename?: 'OwnershipTransferred', id: any, previousOwner: any, newOwner: any, blockNumber: any, blockTimestamp: any, transactionHash: any } | null };

export type OwnershipTransferredsQueryVariables_subgraph = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OwnershipTransferred_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  where?: InputMaybe<OwnershipTransferred_Filter_subgraph>;
  block?: InputMaybe<Block_Height_subgraph>;
}>;


export type OwnershipTransferredsQuery_subgraph = { __typename?: 'Query', ownershipTransferreds: Array<{ __typename?: 'OwnershipTransferred', id: any, previousOwner: any, newOwner: any, blockNumber: any, blockTimestamp: any, transactionHash: any }> };

export type TransferQueryVariables_subgraph = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height_subgraph>;
}>;


export type TransferQuery_subgraph = { __typename?: 'Query', transfer?: { __typename?: 'Transfer', id: any, from: any, to: any, tokenId: any, blockNumber: any, blockTimestamp: any, transactionHash: any } | null };

export type TransfersQueryVariables_subgraph = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Transfer_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  where?: InputMaybe<Transfer_Filter_subgraph>;
  block?: InputMaybe<Block_Height_subgraph>;
}>;


export type TransfersQuery_subgraph = { __typename?: 'Query', transfers: Array<{ __typename?: 'Transfer', id: any, from: any, to: any, tokenId: any, blockNumber: any, blockTimestamp: any, transactionHash: any }> };

export type UpgradedQueryVariables_subgraph = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height_subgraph>;
}>;


export type UpgradedQuery_subgraph = { __typename?: 'Query', upgraded?: { __typename?: 'Upgraded', id: any, implementation: any, blockNumber: any, blockTimestamp: any, transactionHash: any } | null };

export type UpgradedsQueryVariables_subgraph = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Upgraded_OrderBy_subgraph>;
  orderDirection?: InputMaybe<OrderDirection_subgraph>;
  where?: InputMaybe<Upgraded_Filter_subgraph>;
  block?: InputMaybe<Block_Height_subgraph>;
}>;


export type UpgradedsQuery_subgraph = { __typename?: 'Query', upgradeds: Array<{ __typename?: 'Upgraded', id: any, implementation: any, blockNumber: any, blockTimestamp: any, transactionHash: any }> };


export const AdGroupDocument_subgraph = gql`
    query adGroup($id: ID!, $block: Block_height, $adGroup_adSpaces_skip: Int, $adGroup_adSpaces_first: Int, $adGroup_adSpaces_orderBy: AdSpace_orderBy, $adGroup_adSpaces_orderDirection: OrderDirection, $adGroup_adSpaces_where: AdSpace_filter, $adGroup_adSpaces_adSpaces_adPools_skip: Int, $adGroup_adSpaces_adSpaces_adPools_first: Int, $adGroup_adSpaces_adSpaces_adPools_orderBy: AdPool_orderBy, $adGroup_adSpaces_adSpaces_adPools_orderDirection: OrderDirection, $adGroup_adSpaces_adSpaces_adPools_where: AdPool_filter) {
  adGroup(id: $id, block: $block) {
    id
    beneficiary
    adSpaces(
      skip: $adGroup_adSpaces_skip
      first: $adGroup_adSpaces_first
      orderBy: $adGroup_adSpaces_orderBy
      orderDirection: $adGroup_adSpaces_orderDirection
      where: $adGroup_adSpaces_where
    ) {
      id
      adPools(
        skip: $adGroup_adSpaces_adSpaces_adPools_skip
        first: $adGroup_adSpaces_adSpaces_adPools_first
        orderBy: $adGroup_adSpaces_adSpaces_adPools_orderBy
        orderDirection: $adGroup_adSpaces_adSpaces_adPools_orderDirection
        where: $adGroup_adSpaces_adSpaces_adPools_where
      ) {
        id
        dPool
        adToken {
          id
          underlyingToken
          superToken
          isNativeToken
          blockNumber
          blockTimestamp
          transactionHash
        }
        blockTimestamp
        transactionHash
      }
      uri
      blockTimestamp
      transactionHash
    }
    blockTimestamp
    transactionHash
  }
}
    `;
export const AdGroupsDocument_subgraph = gql`
    query adGroups($skip: Int, $first: Int, $orderBy: AdGroup_orderBy, $orderDirection: OrderDirection, $where: AdGroup_filter, $block: Block_height, $adGroups_adSpaces_skip: Int, $adGroups_adSpaces_first: Int, $adGroups_adSpaces_orderBy: AdSpace_orderBy, $adGroups_adSpaces_orderDirection: OrderDirection, $adGroups_adSpaces_where: AdSpace_filter, $adGroups_adSpaces_adSpaces_adPools_skip: Int, $adGroups_adSpaces_adSpaces_adPools_first: Int, $adGroups_adSpaces_adSpaces_adPools_orderBy: AdPool_orderBy, $adGroups_adSpaces_adSpaces_adPools_orderDirection: OrderDirection, $adGroups_adSpaces_adSpaces_adPools_where: AdPool_filter) {
  adGroups(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
  ) {
    id
    beneficiary
    adSpaces(
      skip: $adGroups_adSpaces_skip
      first: $adGroups_adSpaces_first
      orderBy: $adGroups_adSpaces_orderBy
      orderDirection: $adGroups_adSpaces_orderDirection
      where: $adGroups_adSpaces_where
    ) {
      id
      adPools(
        skip: $adGroups_adSpaces_adSpaces_adPools_skip
        first: $adGroups_adSpaces_adSpaces_adPools_first
        orderBy: $adGroups_adSpaces_adSpaces_adPools_orderBy
        orderDirection: $adGroups_adSpaces_adSpaces_adPools_orderDirection
        where: $adGroups_adSpaces_adSpaces_adPools_where
      ) {
        id
        dPool
        adToken {
          id
          underlyingToken
          superToken
          isNativeToken
          blockNumber
          blockTimestamp
          transactionHash
        }
        blockTimestamp
        transactionHash
      }
      uri
      blockTimestamp
      transactionHash
    }
    blockTimestamp
    transactionHash
  }
}
    `;
export const AdSpaceDocument_subgraph = gql`
    query adSpace($id: ID!, $block: Block_height, $adSpace_adPools_skip: Int, $adSpace_adPools_first: Int, $adSpace_adPools_orderBy: AdPool_orderBy, $adSpace_adPools_orderDirection: OrderDirection, $adSpace_adPools_where: AdPool_filter) {
  adSpace(id: $id, block: $block) {
    id
    adGroup {
      id
      beneficiary
      blockTimestamp
      transactionHash
    }
    adPools(
      skip: $adSpace_adPools_skip
      first: $adSpace_adPools_first
      orderBy: $adSpace_adPools_orderBy
      orderDirection: $adSpace_adPools_orderDirection
      where: $adSpace_adPools_where
    ) {
      id
      dPool
      adToken {
        id
        underlyingToken
        superToken
        isNativeToken
        blockNumber
        blockTimestamp
        transactionHash
      }
      blockTimestamp
      transactionHash
    }
    uri
    blockTimestamp
    transactionHash
  }
}
    `;
export const AdSpacesDocument_subgraph = gql`
    query adSpaces($skip: Int, $first: Int, $orderBy: AdSpace_orderBy, $orderDirection: OrderDirection, $where: AdSpace_filter, $block: Block_height, $adSpaces_adPools_skip: Int, $adSpaces_adPools_first: Int, $adSpaces_adPools_orderBy: AdPool_orderBy, $adSpaces_adPools_orderDirection: OrderDirection, $adSpaces_adPools_where: AdPool_filter) {
  adSpaces(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
  ) {
    id
    adGroup {
      id
      beneficiary
      blockTimestamp
      transactionHash
    }
    adPools(
      skip: $adSpaces_adPools_skip
      first: $adSpaces_adPools_first
      orderBy: $adSpaces_adPools_orderBy
      orderDirection: $adSpaces_adPools_orderDirection
      where: $adSpaces_adPools_where
    ) {
      id
      dPool
      adToken {
        id
        underlyingToken
        superToken
        isNativeToken
        blockNumber
        blockTimestamp
        transactionHash
      }
      blockTimestamp
      transactionHash
    }
    uri
    blockTimestamp
    transactionHash
  }
}
    `;
export const AdPoolDocument_subgraph = gql`
    query adPool($id: ID!, $block: Block_height) {
  adPool(id: $id, block: $block) {
    id
    dPool
    adSpace {
      id
      adGroup {
        id
        beneficiary
        blockTimestamp
        transactionHash
      }
      uri
      blockTimestamp
      transactionHash
    }
    adToken {
      id
      underlyingToken
      superToken
      isNativeToken
      blockNumber
      blockTimestamp
      transactionHash
    }
    blockTimestamp
    transactionHash
  }
}
    `;
export const AdPoolsDocument_subgraph = gql`
    query adPools($skip: Int, $first: Int, $orderBy: AdPool_orderBy, $orderDirection: OrderDirection, $where: AdPool_filter, $block: Block_height) {
  adPools(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
  ) {
    id
    dPool
    adSpace {
      id
      adGroup {
        id
        beneficiary
        blockTimestamp
        transactionHash
      }
      uri
      blockTimestamp
      transactionHash
    }
    adToken {
      id
      underlyingToken
      superToken
      isNativeToken
      blockNumber
      blockTimestamp
      transactionHash
    }
    blockTimestamp
    transactionHash
  }
}
    `;
export const TokenXDocument_subgraph = gql`
    query tokenX($id: ID!, $block: Block_height) {
  tokenX(id: $id, block: $block) {
    id
    underlyingToken
    superToken
    isNativeToken
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const TokenXsDocument_subgraph = gql`
    query tokenXs($skip: Int, $first: Int, $orderBy: TokenX_orderBy, $orderDirection: OrderDirection, $where: TokenX_filter, $block: Block_height) {
  tokenXs(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
  ) {
    id
    underlyingToken
    superToken
    isNativeToken
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const BuyerApprovedForListingDocument_subgraph = gql`
    query buyerApprovedForListing($id: ID!, $block: Block_height) {
  buyerApprovedForListing(id: $id, block: $block) {
    id
    listingId
    buyer
    approved
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const BuyerApprovedForListingsDocument_subgraph = gql`
    query buyerApprovedForListings($skip: Int, $first: Int, $orderBy: BuyerApprovedForListing_orderBy, $orderDirection: OrderDirection, $where: BuyerApprovedForListing_filter, $block: Block_height) {
  buyerApprovedForListings(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
  ) {
    id
    listingId
    buyer
    approved
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const CancelledListingDocument_subgraph = gql`
    query cancelledListing($id: ID!, $block: Block_height) {
  cancelledListing(id: $id, block: $block) {
    id
    listingCreator
    listingId
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const CancelledListingsDocument_subgraph = gql`
    query cancelledListings($skip: Int, $first: Int, $orderBy: CancelledListing_orderBy, $orderDirection: OrderDirection, $where: CancelledListing_filter, $block: Block_height) {
  cancelledListings(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
  ) {
    id
    listingCreator
    listingId
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const CurrencyApprovedForListingDocument_subgraph = gql`
    query currencyApprovedForListing($id: ID!, $block: Block_height) {
  currencyApprovedForListing(id: $id, block: $block) {
    id
    listingId
    currency
    pricePerToken
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const CurrencyApprovedForListingsDocument_subgraph = gql`
    query currencyApprovedForListings($skip: Int, $first: Int, $orderBy: CurrencyApprovedForListing_orderBy, $orderDirection: OrderDirection, $where: CurrencyApprovedForListing_filter, $block: Block_height) {
  currencyApprovedForListings(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
  ) {
    id
    listingId
    currency
    pricePerToken
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const NewListingDocument_subgraph = gql`
    query newListing($id: ID!, $block: Block_height) {
  newListing(id: $id, block: $block) {
    id
    listingCreator
    listingId
    assetContract
    listing_listingId
    listing_tokenId
    listing_quantity
    listing_pricePerToken
    listing_startTimestamp
    listing_endTimestamp
    listing_listingCreator
    listing_listingOwner
    listing_assetContract
    listing_currency
    listing_taxRate
    listing_taxBeneficiary
    listing_tokenType
    listing_status
    listing_reserved
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const NewListingsDocument_subgraph = gql`
    query newListings($skip: Int, $first: Int, $orderBy: NewListing_orderBy, $orderDirection: OrderDirection, $where: NewListing_filter, $block: Block_height) {
  newListings(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
  ) {
    id
    listingCreator
    listingId
    assetContract
    listing_listingId
    listing_tokenId
    listing_quantity
    listing_pricePerToken
    listing_startTimestamp
    listing_endTimestamp
    listing_listingCreator
    listing_listingOwner
    listing_assetContract
    listing_currency
    listing_taxRate
    listing_taxBeneficiary
    listing_tokenType
    listing_status
    listing_reserved
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const NewSaleDocument_subgraph = gql`
    query newSale($id: ID!, $block: Block_height) {
  newSale(id: $id, block: $block) {
    id
    listingCreator
    listingId
    assetContract
    tokenId
    buyer
    quantityBought
    totalPricePaid
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const NewSalesDocument_subgraph = gql`
    query newSales($skip: Int, $first: Int, $orderBy: NewSale_orderBy, $orderDirection: OrderDirection, $where: NewSale_filter, $block: Block_height) {
  newSales(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
  ) {
    id
    listingCreator
    listingId
    assetContract
    tokenId
    buyer
    quantityBought
    totalPricePaid
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const UpdatedListingDocument_subgraph = gql`
    query updatedListing($id: ID!, $block: Block_height) {
  updatedListing(id: $id, block: $block) {
    id
    listingCreator
    listingId
    assetContract
    listing_listingId
    listing_tokenId
    listing_quantity
    listing_pricePerToken
    listing_startTimestamp
    listing_endTimestamp
    listing_listingCreator
    listing_listingOwner
    listing_assetContract
    listing_currency
    listing_taxRate
    listing_taxBeneficiary
    listing_tokenType
    listing_status
    listing_reserved
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const UpdatedListingsDocument_subgraph = gql`
    query updatedListings($skip: Int, $first: Int, $orderBy: UpdatedListing_orderBy, $orderDirection: OrderDirection, $where: UpdatedListing_filter, $block: Block_height) {
  updatedListings(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
  ) {
    id
    listingCreator
    listingId
    assetContract
    listing_listingId
    listing_tokenId
    listing_quantity
    listing_pricePerToken
    listing_startTimestamp
    listing_endTimestamp
    listing_listingCreator
    listing_listingOwner
    listing_assetContract
    listing_currency
    listing_taxRate
    listing_taxBeneficiary
    listing_tokenType
    listing_status
    listing_reserved
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const AdGroupCreatedDocument_subgraph = gql`
    query adGroupCreated($id: ID!, $block: Block_height) {
  adGroupCreated(id: $id, block: $block) {
    id
    groupId
    beneficiary
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const AdGroupCreatedsDocument_subgraph = gql`
    query adGroupCreateds($skip: Int, $first: Int, $orderBy: AdGroupCreated_orderBy, $orderDirection: OrderDirection, $where: AdGroupCreated_filter, $block: Block_height) {
  adGroupCreateds(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
  ) {
    id
    groupId
    beneficiary
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const AdSpaceCreatedDocument_subgraph = gql`
    query adSpaceCreated($id: ID!, $block: Block_height) {
  adSpaceCreated(id: $id, block: $block) {
    id
    groupId
    adId
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const AdSpaceCreatedsDocument_subgraph = gql`
    query adSpaceCreateds($skip: Int, $first: Int, $orderBy: AdSpaceCreated_orderBy, $orderDirection: OrderDirection, $where: AdSpaceCreated_filter, $block: Block_height) {
  adSpaceCreateds(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
  ) {
    id
    groupId
    adId
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const AdSpaceStrategyUpdatedDocument_subgraph = gql`
    query adSpaceStrategyUpdated($id: ID!, $block: Block_height) {
  adSpaceStrategyUpdated(id: $id, block: $block) {
    id
    adId
    strategy
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const AdSpaceStrategyUpdatedsDocument_subgraph = gql`
    query adSpaceStrategyUpdateds($skip: Int, $first: Int, $orderBy: AdSpaceStrategyUpdated_orderBy, $orderDirection: OrderDirection, $where: AdSpaceStrategyUpdated_filter, $block: Block_height) {
  adSpaceStrategyUpdateds(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
  ) {
    id
    adId
    strategy
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const AdSpaceUriUpdatedDocument_subgraph = gql`
    query adSpaceURIUpdated($id: ID!, $block: Block_height) {
  adSpaceURIUpdated(id: $id, block: $block) {
    id
    adId
    uri
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const AdSpaceUriUpdatedsDocument_subgraph = gql`
    query adSpaceURIUpdateds($skip: Int, $first: Int, $orderBy: AdSpaceURIUpdated_orderBy, $orderDirection: OrderDirection, $where: AdSpaceURIUpdated_filter, $block: Block_height) {
  adSpaceURIUpdateds(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
  ) {
    id
    adId
    uri
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const AdminChangedDocument_subgraph = gql`
    query adminChanged($id: ID!, $block: Block_height) {
  adminChanged(id: $id, block: $block) {
    id
    previousAdmin
    newAdmin
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const AdminChangedsDocument_subgraph = gql`
    query adminChangeds($skip: Int, $first: Int, $orderBy: AdminChanged_orderBy, $orderDirection: OrderDirection, $where: AdminChanged_filter, $block: Block_height) {
  adminChangeds(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
  ) {
    id
    previousAdmin
    newAdmin
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const ApprovalDocument_subgraph = gql`
    query approval($id: ID!, $block: Block_height) {
  approval(id: $id, block: $block) {
    id
    owner
    approved
    tokenId
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const ApprovalsDocument_subgraph = gql`
    query approvals($skip: Int, $first: Int, $orderBy: Approval_orderBy, $orderDirection: OrderDirection, $where: Approval_filter, $block: Block_height) {
  approvals(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
  ) {
    id
    owner
    approved
    tokenId
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const ApprovalForAllDocument_subgraph = gql`
    query approvalForAll($id: ID!, $block: Block_height) {
  approvalForAll(id: $id, block: $block) {
    id
    owner
    operator
    approved
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const ApprovalForAllsDocument_subgraph = gql`
    query approvalForAlls($skip: Int, $first: Int, $orderBy: ApprovalForAll_orderBy, $orderDirection: OrderDirection, $where: ApprovalForAll_filter, $block: Block_height) {
  approvalForAlls(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
  ) {
    id
    owner
    operator
    approved
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const BeaconUpgradedDocument_subgraph = gql`
    query beaconUpgraded($id: ID!, $block: Block_height) {
  beaconUpgraded(id: $id, block: $block) {
    id
    beacon
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const BeaconUpgradedsDocument_subgraph = gql`
    query beaconUpgradeds($skip: Int, $first: Int, $orderBy: BeaconUpgraded_orderBy, $orderDirection: OrderDirection, $where: BeaconUpgraded_filter, $block: Block_height) {
  beaconUpgradeds(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
  ) {
    id
    beacon
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const InitializedDocument_subgraph = gql`
    query initialized($id: ID!, $block: Block_height) {
  initialized(id: $id, block: $block) {
    id
    version
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const InitializedsDocument_subgraph = gql`
    query initializeds($skip: Int, $first: Int, $orderBy: Initialized_orderBy, $orderDirection: OrderDirection, $where: Initialized_filter, $block: Block_height) {
  initializeds(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
  ) {
    id
    version
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const OwnershipTransferredDocument_subgraph = gql`
    query ownershipTransferred($id: ID!, $block: Block_height) {
  ownershipTransferred(id: $id, block: $block) {
    id
    previousOwner
    newOwner
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const OwnershipTransferredsDocument_subgraph = gql`
    query ownershipTransferreds($skip: Int, $first: Int, $orderBy: OwnershipTransferred_orderBy, $orderDirection: OrderDirection, $where: OwnershipTransferred_filter, $block: Block_height) {
  ownershipTransferreds(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
  ) {
    id
    previousOwner
    newOwner
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const TransferDocument_subgraph = gql`
    query transfer($id: ID!, $block: Block_height) {
  transfer(id: $id, block: $block) {
    id
    from
    to
    tokenId
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const TransfersDocument_subgraph = gql`
    query transfers($skip: Int, $first: Int, $orderBy: Transfer_orderBy, $orderDirection: OrderDirection, $where: Transfer_filter, $block: Block_height) {
  transfers(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
  ) {
    id
    from
    to
    tokenId
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const UpgradedDocument_subgraph = gql`
    query upgraded($id: ID!, $block: Block_height) {
  upgraded(id: $id, block: $block) {
    id
    implementation
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;
export const UpgradedsDocument_subgraph = gql`
    query upgradeds($skip: Int, $first: Int, $orderBy: Upgraded_orderBy, $orderDirection: OrderDirection, $where: Upgraded_filter, $block: Block_height) {
  upgradeds(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
  ) {
    id
    implementation
    blockNumber
    blockTimestamp
    transactionHash
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    adGroup(variables: AdGroupQueryVariables_subgraph, requestHeaders?: GraphQLClientRequestHeaders): Promise<AdGroupQuery_subgraph> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdGroupQuery_subgraph>(AdGroupDocument_subgraph, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'adGroup', 'query', variables);
    },
    adGroups(variables?: AdGroupsQueryVariables_subgraph, requestHeaders?: GraphQLClientRequestHeaders): Promise<AdGroupsQuery_subgraph> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdGroupsQuery_subgraph>(AdGroupsDocument_subgraph, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'adGroups', 'query', variables);
    },
    adSpace(variables: AdSpaceQueryVariables_subgraph, requestHeaders?: GraphQLClientRequestHeaders): Promise<AdSpaceQuery_subgraph> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdSpaceQuery_subgraph>(AdSpaceDocument_subgraph, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'adSpace', 'query', variables);
    },
    adSpaces(variables?: AdSpacesQueryVariables_subgraph, requestHeaders?: GraphQLClientRequestHeaders): Promise<AdSpacesQuery_subgraph> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdSpacesQuery_subgraph>(AdSpacesDocument_subgraph, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'adSpaces', 'query', variables);
    },
    adPool(variables: AdPoolQueryVariables_subgraph, requestHeaders?: GraphQLClientRequestHeaders): Promise<AdPoolQuery_subgraph> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdPoolQuery_subgraph>(AdPoolDocument_subgraph, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'adPool', 'query', variables);
    },
    adPools(variables?: AdPoolsQueryVariables_subgraph, requestHeaders?: GraphQLClientRequestHeaders): Promise<AdPoolsQuery_subgraph> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdPoolsQuery_subgraph>(AdPoolsDocument_subgraph, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'adPools', 'query', variables);
    },
    tokenX(variables: TokenXQueryVariables_subgraph, requestHeaders?: GraphQLClientRequestHeaders): Promise<TokenXQuery_subgraph> {
      return withWrapper((wrappedRequestHeaders) => client.request<TokenXQuery_subgraph>(TokenXDocument_subgraph, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'tokenX', 'query', variables);
    },
    tokenXs(variables?: TokenXsQueryVariables_subgraph, requestHeaders?: GraphQLClientRequestHeaders): Promise<TokenXsQuery_subgraph> {
      return withWrapper((wrappedRequestHeaders) => client.request<TokenXsQuery_subgraph>(TokenXsDocument_subgraph, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'tokenXs', 'query', variables);
    },
    buyerApprovedForListing(variables: BuyerApprovedForListingQueryVariables_subgraph, requestHeaders?: GraphQLClientRequestHeaders): Promise<BuyerApprovedForListingQuery_subgraph> {
      return withWrapper((wrappedRequestHeaders) => client.request<BuyerApprovedForListingQuery_subgraph>(BuyerApprovedForListingDocument_subgraph, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'buyerApprovedForListing', 'query', variables);
    },
    buyerApprovedForListings(variables?: BuyerApprovedForListingsQueryVariables_subgraph, requestHeaders?: GraphQLClientRequestHeaders): Promise<BuyerApprovedForListingsQuery_subgraph> {
      return withWrapper((wrappedRequestHeaders) => client.request<BuyerApprovedForListingsQuery_subgraph>(BuyerApprovedForListingsDocument_subgraph, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'buyerApprovedForListings', 'query', variables);
    },
    cancelledListing(variables: CancelledListingQueryVariables_subgraph, requestHeaders?: GraphQLClientRequestHeaders): Promise<CancelledListingQuery_subgraph> {
      return withWrapper((wrappedRequestHeaders) => client.request<CancelledListingQuery_subgraph>(CancelledListingDocument_subgraph, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'cancelledListing', 'query', variables);
    },
    cancelledListings(variables?: CancelledListingsQueryVariables_subgraph, requestHeaders?: GraphQLClientRequestHeaders): Promise<CancelledListingsQuery_subgraph> {
      return withWrapper((wrappedRequestHeaders) => client.request<CancelledListingsQuery_subgraph>(CancelledListingsDocument_subgraph, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'cancelledListings', 'query', variables);
    },
    currencyApprovedForListing(variables: CurrencyApprovedForListingQueryVariables_subgraph, requestHeaders?: GraphQLClientRequestHeaders): Promise<CurrencyApprovedForListingQuery_subgraph> {
      return withWrapper((wrappedRequestHeaders) => client.request<CurrencyApprovedForListingQuery_subgraph>(CurrencyApprovedForListingDocument_subgraph, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'currencyApprovedForListing', 'query', variables);
    },
    currencyApprovedForListings(variables?: CurrencyApprovedForListingsQueryVariables_subgraph, requestHeaders?: GraphQLClientRequestHeaders): Promise<CurrencyApprovedForListingsQuery_subgraph> {
      return withWrapper((wrappedRequestHeaders) => client.request<CurrencyApprovedForListingsQuery_subgraph>(CurrencyApprovedForListingsDocument_subgraph, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'currencyApprovedForListings', 'query', variables);
    },
    newListing(variables: NewListingQueryVariables_subgraph, requestHeaders?: GraphQLClientRequestHeaders): Promise<NewListingQuery_subgraph> {
      return withWrapper((wrappedRequestHeaders) => client.request<NewListingQuery_subgraph>(NewListingDocument_subgraph, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'newListing', 'query', variables);
    },
    newListings(variables?: NewListingsQueryVariables_subgraph, requestHeaders?: GraphQLClientRequestHeaders): Promise<NewListingsQuery_subgraph> {
      return withWrapper((wrappedRequestHeaders) => client.request<NewListingsQuery_subgraph>(NewListingsDocument_subgraph, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'newListings', 'query', variables);
    },
    newSale(variables: NewSaleQueryVariables_subgraph, requestHeaders?: GraphQLClientRequestHeaders): Promise<NewSaleQuery_subgraph> {
      return withWrapper((wrappedRequestHeaders) => client.request<NewSaleQuery_subgraph>(NewSaleDocument_subgraph, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'newSale', 'query', variables);
    },
    newSales(variables?: NewSalesQueryVariables_subgraph, requestHeaders?: GraphQLClientRequestHeaders): Promise<NewSalesQuery_subgraph> {
      return withWrapper((wrappedRequestHeaders) => client.request<NewSalesQuery_subgraph>(NewSalesDocument_subgraph, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'newSales', 'query', variables);
    },
    updatedListing(variables: UpdatedListingQueryVariables_subgraph, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdatedListingQuery_subgraph> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdatedListingQuery_subgraph>(UpdatedListingDocument_subgraph, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updatedListing', 'query', variables);
    },
    updatedListings(variables?: UpdatedListingsQueryVariables_subgraph, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdatedListingsQuery_subgraph> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdatedListingsQuery_subgraph>(UpdatedListingsDocument_subgraph, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updatedListings', 'query', variables);
    },
    adGroupCreated(variables: AdGroupCreatedQueryVariables_subgraph, requestHeaders?: GraphQLClientRequestHeaders): Promise<AdGroupCreatedQuery_subgraph> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdGroupCreatedQuery_subgraph>(AdGroupCreatedDocument_subgraph, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'adGroupCreated', 'query', variables);
    },
    adGroupCreateds(variables?: AdGroupCreatedsQueryVariables_subgraph, requestHeaders?: GraphQLClientRequestHeaders): Promise<AdGroupCreatedsQuery_subgraph> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdGroupCreatedsQuery_subgraph>(AdGroupCreatedsDocument_subgraph, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'adGroupCreateds', 'query', variables);
    },
    adSpaceCreated(variables: AdSpaceCreatedQueryVariables_subgraph, requestHeaders?: GraphQLClientRequestHeaders): Promise<AdSpaceCreatedQuery_subgraph> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdSpaceCreatedQuery_subgraph>(AdSpaceCreatedDocument_subgraph, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'adSpaceCreated', 'query', variables);
    },
    adSpaceCreateds(variables?: AdSpaceCreatedsQueryVariables_subgraph, requestHeaders?: GraphQLClientRequestHeaders): Promise<AdSpaceCreatedsQuery_subgraph> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdSpaceCreatedsQuery_subgraph>(AdSpaceCreatedsDocument_subgraph, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'adSpaceCreateds', 'query', variables);
    },
    adSpaceStrategyUpdated(variables: AdSpaceStrategyUpdatedQueryVariables_subgraph, requestHeaders?: GraphQLClientRequestHeaders): Promise<AdSpaceStrategyUpdatedQuery_subgraph> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdSpaceStrategyUpdatedQuery_subgraph>(AdSpaceStrategyUpdatedDocument_subgraph, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'adSpaceStrategyUpdated', 'query', variables);
    },
    adSpaceStrategyUpdateds(variables?: AdSpaceStrategyUpdatedsQueryVariables_subgraph, requestHeaders?: GraphQLClientRequestHeaders): Promise<AdSpaceStrategyUpdatedsQuery_subgraph> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdSpaceStrategyUpdatedsQuery_subgraph>(AdSpaceStrategyUpdatedsDocument_subgraph, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'adSpaceStrategyUpdateds', 'query', variables);
    },
    adSpaceURIUpdated(variables: AdSpaceUriUpdatedQueryVariables_subgraph, requestHeaders?: GraphQLClientRequestHeaders): Promise<AdSpaceUriUpdatedQuery_subgraph> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdSpaceUriUpdatedQuery_subgraph>(AdSpaceUriUpdatedDocument_subgraph, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'adSpaceURIUpdated', 'query', variables);
    },
    adSpaceURIUpdateds(variables?: AdSpaceUriUpdatedsQueryVariables_subgraph, requestHeaders?: GraphQLClientRequestHeaders): Promise<AdSpaceUriUpdatedsQuery_subgraph> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdSpaceUriUpdatedsQuery_subgraph>(AdSpaceUriUpdatedsDocument_subgraph, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'adSpaceURIUpdateds', 'query', variables);
    },
    adminChanged(variables: AdminChangedQueryVariables_subgraph, requestHeaders?: GraphQLClientRequestHeaders): Promise<AdminChangedQuery_subgraph> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminChangedQuery_subgraph>(AdminChangedDocument_subgraph, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'adminChanged', 'query', variables);
    },
    adminChangeds(variables?: AdminChangedsQueryVariables_subgraph, requestHeaders?: GraphQLClientRequestHeaders): Promise<AdminChangedsQuery_subgraph> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdminChangedsQuery_subgraph>(AdminChangedsDocument_subgraph, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'adminChangeds', 'query', variables);
    },
    approval(variables: ApprovalQueryVariables_subgraph, requestHeaders?: GraphQLClientRequestHeaders): Promise<ApprovalQuery_subgraph> {
      return withWrapper((wrappedRequestHeaders) => client.request<ApprovalQuery_subgraph>(ApprovalDocument_subgraph, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'approval', 'query', variables);
    },
    approvals(variables?: ApprovalsQueryVariables_subgraph, requestHeaders?: GraphQLClientRequestHeaders): Promise<ApprovalsQuery_subgraph> {
      return withWrapper((wrappedRequestHeaders) => client.request<ApprovalsQuery_subgraph>(ApprovalsDocument_subgraph, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'approvals', 'query', variables);
    },
    approvalForAll(variables: ApprovalForAllQueryVariables_subgraph, requestHeaders?: GraphQLClientRequestHeaders): Promise<ApprovalForAllQuery_subgraph> {
      return withWrapper((wrappedRequestHeaders) => client.request<ApprovalForAllQuery_subgraph>(ApprovalForAllDocument_subgraph, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'approvalForAll', 'query', variables);
    },
    approvalForAlls(variables?: ApprovalForAllsQueryVariables_subgraph, requestHeaders?: GraphQLClientRequestHeaders): Promise<ApprovalForAllsQuery_subgraph> {
      return withWrapper((wrappedRequestHeaders) => client.request<ApprovalForAllsQuery_subgraph>(ApprovalForAllsDocument_subgraph, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'approvalForAlls', 'query', variables);
    },
    beaconUpgraded(variables: BeaconUpgradedQueryVariables_subgraph, requestHeaders?: GraphQLClientRequestHeaders): Promise<BeaconUpgradedQuery_subgraph> {
      return withWrapper((wrappedRequestHeaders) => client.request<BeaconUpgradedQuery_subgraph>(BeaconUpgradedDocument_subgraph, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'beaconUpgraded', 'query', variables);
    },
    beaconUpgradeds(variables?: BeaconUpgradedsQueryVariables_subgraph, requestHeaders?: GraphQLClientRequestHeaders): Promise<BeaconUpgradedsQuery_subgraph> {
      return withWrapper((wrappedRequestHeaders) => client.request<BeaconUpgradedsQuery_subgraph>(BeaconUpgradedsDocument_subgraph, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'beaconUpgradeds', 'query', variables);
    },
    initialized(variables: InitializedQueryVariables_subgraph, requestHeaders?: GraphQLClientRequestHeaders): Promise<InitializedQuery_subgraph> {
      return withWrapper((wrappedRequestHeaders) => client.request<InitializedQuery_subgraph>(InitializedDocument_subgraph, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'initialized', 'query', variables);
    },
    initializeds(variables?: InitializedsQueryVariables_subgraph, requestHeaders?: GraphQLClientRequestHeaders): Promise<InitializedsQuery_subgraph> {
      return withWrapper((wrappedRequestHeaders) => client.request<InitializedsQuery_subgraph>(InitializedsDocument_subgraph, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'initializeds', 'query', variables);
    },
    ownershipTransferred(variables: OwnershipTransferredQueryVariables_subgraph, requestHeaders?: GraphQLClientRequestHeaders): Promise<OwnershipTransferredQuery_subgraph> {
      return withWrapper((wrappedRequestHeaders) => client.request<OwnershipTransferredQuery_subgraph>(OwnershipTransferredDocument_subgraph, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ownershipTransferred', 'query', variables);
    },
    ownershipTransferreds(variables?: OwnershipTransferredsQueryVariables_subgraph, requestHeaders?: GraphQLClientRequestHeaders): Promise<OwnershipTransferredsQuery_subgraph> {
      return withWrapper((wrappedRequestHeaders) => client.request<OwnershipTransferredsQuery_subgraph>(OwnershipTransferredsDocument_subgraph, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ownershipTransferreds', 'query', variables);
    },
    transfer(variables: TransferQueryVariables_subgraph, requestHeaders?: GraphQLClientRequestHeaders): Promise<TransferQuery_subgraph> {
      return withWrapper((wrappedRequestHeaders) => client.request<TransferQuery_subgraph>(TransferDocument_subgraph, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'transfer', 'query', variables);
    },
    transfers(variables?: TransfersQueryVariables_subgraph, requestHeaders?: GraphQLClientRequestHeaders): Promise<TransfersQuery_subgraph> {
      return withWrapper((wrappedRequestHeaders) => client.request<TransfersQuery_subgraph>(TransfersDocument_subgraph, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'transfers', 'query', variables);
    },
    upgraded(variables: UpgradedQueryVariables_subgraph, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpgradedQuery_subgraph> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpgradedQuery_subgraph>(UpgradedDocument_subgraph, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'upgraded', 'query', variables);
    },
    upgradeds(variables?: UpgradedsQueryVariables_subgraph, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpgradedsQuery_subgraph> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpgradedsQuery_subgraph>(UpgradedsDocument_subgraph, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'upgradeds', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
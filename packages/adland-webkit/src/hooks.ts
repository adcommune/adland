import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { fetcher } from './fetcher';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
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

export type AdGroup = {
  __typename?: 'AdGroup';
  adSpaces: Array<AdSpace>;
  beneficiary: Scalars['Bytes']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  transactionHash: Scalars['Bytes']['output'];
};


export type AdGroupAdSpacesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdSpace_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AdSpace_Filter>;
};

export type AdGroupCreated = {
  __typename?: 'AdGroupCreated';
  beneficiary: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  groupId: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type AdGroupCreated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AdGroupCreated_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<AdGroupCreated_Filter>>>;
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

export enum AdGroupCreated_OrderBy {
  Beneficiary = 'beneficiary',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  GroupId = 'groupId',
  Id = 'id',
  TransactionHash = 'transactionHash'
}

export type AdGroup_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  adSpaces_?: InputMaybe<AdSpace_Filter>;
  and?: InputMaybe<Array<InputMaybe<AdGroup_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<AdGroup_Filter>>>;
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

export enum AdGroup_OrderBy {
  AdSpaces = 'adSpaces',
  Beneficiary = 'beneficiary',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  TransactionHash = 'transactionHash'
}

export type AdPool = {
  __typename?: 'AdPool';
  adSpace: AdSpace;
  adToken: TokenX;
  blockTimestamp: Scalars['BigInt']['output'];
  dPool: Scalars['Bytes']['output'];
  id: Scalars['String']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type AdPool_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  adSpace?: InputMaybe<Scalars['String']['input']>;
  adSpace_?: InputMaybe<AdSpace_Filter>;
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
  adToken_?: InputMaybe<TokenX_Filter>;
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
  and?: InputMaybe<Array<InputMaybe<AdPool_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<AdPool_Filter>>>;
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

export enum AdPool_OrderBy {
  AdSpace = 'adSpace',
  AdSpaceBlockTimestamp = 'adSpace__blockTimestamp',
  AdSpaceId = 'adSpace__id',
  AdSpaceTransactionHash = 'adSpace__transactionHash',
  AdSpaceUri = 'adSpace__uri',
  AdToken = 'adToken',
  AdTokenBlockNumber = 'adToken__blockNumber',
  AdTokenBlockTimestamp = 'adToken__blockTimestamp',
  AdTokenId = 'adToken__id',
  AdTokenIsNativeToken = 'adToken__isNativeToken',
  AdTokenSuperToken = 'adToken__superToken',
  AdTokenTransactionHash = 'adToken__transactionHash',
  AdTokenUnderlyingToken = 'adToken__underlyingToken',
  BlockTimestamp = 'blockTimestamp',
  DPool = 'dPool',
  Id = 'id',
  TransactionHash = 'transactionHash'
}

export type AdSpace = {
  __typename?: 'AdSpace';
  adGroup: AdGroup;
  adPools: Array<AdPool>;
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  listing: Listing;
  tokenX?: Maybe<TokenX>;
  transactionHash: Scalars['Bytes']['output'];
  uri?: Maybe<Scalars['String']['output']>;
};


export type AdSpaceAdPoolsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdPool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AdPool_Filter>;
};

export type AdSpaceCreated = {
  __typename?: 'AdSpaceCreated';
  adId: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  groupId: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type AdSpaceCreated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  adId?: InputMaybe<Scalars['BigInt']['input']>;
  adId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  adId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  adId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  adId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  adId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  adId_not?: InputMaybe<Scalars['BigInt']['input']>;
  adId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<AdSpaceCreated_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<AdSpaceCreated_Filter>>>;
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

export enum AdSpaceCreated_OrderBy {
  AdId = 'adId',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  GroupId = 'groupId',
  Id = 'id',
  TransactionHash = 'transactionHash'
}

export type AdSpaceStrategyUpdated = {
  __typename?: 'AdSpaceStrategyUpdated';
  adId: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  strategy: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type AdSpaceStrategyUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  adId?: InputMaybe<Scalars['BigInt']['input']>;
  adId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  adId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  adId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  adId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  adId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  adId_not?: InputMaybe<Scalars['BigInt']['input']>;
  adId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<AdSpaceStrategyUpdated_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<AdSpaceStrategyUpdated_Filter>>>;
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

export enum AdSpaceStrategyUpdated_OrderBy {
  AdId = 'adId',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Strategy = 'strategy',
  TransactionHash = 'transactionHash'
}

export type AdSpaceUriUpdated = {
  __typename?: 'AdSpaceURIUpdated';
  adId: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
  uri: Scalars['String']['output'];
};

export type AdSpaceUriUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  adId?: InputMaybe<Scalars['BigInt']['input']>;
  adId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  adId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  adId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  adId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  adId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  adId_not?: InputMaybe<Scalars['BigInt']['input']>;
  adId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<AdSpaceUriUpdated_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<AdSpaceUriUpdated_Filter>>>;
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

export enum AdSpaceUriUpdated_OrderBy {
  AdId = 'adId',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  TransactionHash = 'transactionHash',
  Uri = 'uri'
}

export type AdSpace_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  adGroup?: InputMaybe<Scalars['String']['input']>;
  adGroup_?: InputMaybe<AdGroup_Filter>;
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
  adPools_?: InputMaybe<AdPool_Filter>;
  and?: InputMaybe<Array<InputMaybe<AdSpace_Filter>>>;
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
  listing?: InputMaybe<Scalars['String']['input']>;
  listing_?: InputMaybe<Listing_Filter>;
  listing_contains?: InputMaybe<Scalars['String']['input']>;
  listing_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  listing_ends_with?: InputMaybe<Scalars['String']['input']>;
  listing_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  listing_gt?: InputMaybe<Scalars['String']['input']>;
  listing_gte?: InputMaybe<Scalars['String']['input']>;
  listing_in?: InputMaybe<Array<Scalars['String']['input']>>;
  listing_lt?: InputMaybe<Scalars['String']['input']>;
  listing_lte?: InputMaybe<Scalars['String']['input']>;
  listing_not?: InputMaybe<Scalars['String']['input']>;
  listing_not_contains?: InputMaybe<Scalars['String']['input']>;
  listing_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  listing_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  listing_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  listing_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  listing_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  listing_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  listing_starts_with?: InputMaybe<Scalars['String']['input']>;
  listing_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<AdSpace_Filter>>>;
  tokenX?: InputMaybe<Scalars['String']['input']>;
  tokenX_?: InputMaybe<TokenX_Filter>;
  tokenX_contains?: InputMaybe<Scalars['String']['input']>;
  tokenX_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenX_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenX_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenX_gt?: InputMaybe<Scalars['String']['input']>;
  tokenX_gte?: InputMaybe<Scalars['String']['input']>;
  tokenX_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenX_lt?: InputMaybe<Scalars['String']['input']>;
  tokenX_lte?: InputMaybe<Scalars['String']['input']>;
  tokenX_not?: InputMaybe<Scalars['String']['input']>;
  tokenX_not_contains?: InputMaybe<Scalars['String']['input']>;
  tokenX_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenX_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenX_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenX_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenX_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenX_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenX_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenX_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
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

export enum AdSpace_OrderBy {
  AdGroup = 'adGroup',
  AdGroupBeneficiary = 'adGroup__beneficiary',
  AdGroupBlockTimestamp = 'adGroup__blockTimestamp',
  AdGroupId = 'adGroup__id',
  AdGroupTransactionHash = 'adGroup__transactionHash',
  AdPools = 'adPools',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Listing = 'listing',
  ListingAssetContract = 'listing__assetContract',
  ListingBlockNumber = 'listing__blockNumber',
  ListingBlockTimestamp = 'listing__blockTimestamp',
  ListingId = 'listing__id',
  ListingListingCreator = 'listing__listingCreator',
  ListingListingId = 'listing__listingId',
  ListingListingAssetContract = 'listing__listing_assetContract',
  ListingListingCurrency = 'listing__listing_currency',
  ListingListingEndTimestamp = 'listing__listing_endTimestamp',
  ListingListingListingCreator = 'listing__listing_listingCreator',
  ListingListingListingId = 'listing__listing_listingId',
  ListingListingListingOwner = 'listing__listing_listingOwner',
  ListingListingPricePerToken = 'listing__listing_pricePerToken',
  ListingListingQuantity = 'listing__listing_quantity',
  ListingListingReserved = 'listing__listing_reserved',
  ListingListingStartTimestamp = 'listing__listing_startTimestamp',
  ListingListingStatus = 'listing__listing_status',
  ListingListingTaxBeneficiary = 'listing__listing_taxBeneficiary',
  ListingListingTaxRate = 'listing__listing_taxRate',
  ListingListingTokenId = 'listing__listing_tokenId',
  ListingListingTokenType = 'listing__listing_tokenType',
  ListingTransactionHash = 'listing__transactionHash',
  TokenX = 'tokenX',
  TokenXBlockNumber = 'tokenX__blockNumber',
  TokenXBlockTimestamp = 'tokenX__blockTimestamp',
  TokenXId = 'tokenX__id',
  TokenXIsNativeToken = 'tokenX__isNativeToken',
  TokenXSuperToken = 'tokenX__superToken',
  TokenXTransactionHash = 'tokenX__transactionHash',
  TokenXUnderlyingToken = 'tokenX__underlyingToken',
  TransactionHash = 'transactionHash',
  Uri = 'uri'
}

export type AdminChanged = {
  __typename?: 'AdminChanged';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  newAdmin: Scalars['Bytes']['output'];
  previousAdmin: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type AdminChanged_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AdminChanged_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<AdminChanged_Filter>>>;
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

export enum AdminChanged_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  NewAdmin = 'newAdmin',
  PreviousAdmin = 'previousAdmin',
  TransactionHash = 'transactionHash'
}

export enum Aggregation_Interval {
  Day = 'day',
  Hour = 'hour'
}

export type Approval = {
  __typename?: 'Approval';
  approved: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  owner: Scalars['Bytes']['output'];
  tokenId: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type ApprovalForAll = {
  __typename?: 'ApprovalForAll';
  approved: Scalars['Boolean']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  operator: Scalars['Bytes']['output'];
  owner: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type ApprovalForAll_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ApprovalForAll_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<ApprovalForAll_Filter>>>;
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

export enum ApprovalForAll_OrderBy {
  Approved = 'approved',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Operator = 'operator',
  Owner = 'owner',
  TransactionHash = 'transactionHash'
}

export type Approval_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Approval_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<Approval_Filter>>>;
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

export enum Approval_OrderBy {
  Approved = 'approved',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Owner = 'owner',
  TokenId = 'tokenId',
  TransactionHash = 'transactionHash'
}

export type BeaconUpgraded = {
  __typename?: 'BeaconUpgraded';
  beacon: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type BeaconUpgraded_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BeaconUpgraded_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<BeaconUpgraded_Filter>>>;
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

export enum BeaconUpgraded_OrderBy {
  Beacon = 'beacon',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  TransactionHash = 'transactionHash'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type BuyerApprovedForListing = {
  __typename?: 'BuyerApprovedForListing';
  approved: Scalars['Boolean']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  buyer: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  listingId: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type BuyerApprovedForListing_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BuyerApprovedForListing_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<BuyerApprovedForListing_Filter>>>;
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

export enum BuyerApprovedForListing_OrderBy {
  Approved = 'approved',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Buyer = 'buyer',
  Id = 'id',
  ListingId = 'listingId',
  TransactionHash = 'transactionHash'
}

export type CancelledListing = {
  __typename?: 'CancelledListing';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  listingCreator: Scalars['Bytes']['output'];
  listingId: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type CancelledListing_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CancelledListing_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<CancelledListing_Filter>>>;
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

export enum CancelledListing_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  ListingCreator = 'listingCreator',
  ListingId = 'listingId',
  TransactionHash = 'transactionHash'
}

export type CurrencyApprovedForListing = {
  __typename?: 'CurrencyApprovedForListing';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  currency: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  listingId: Scalars['BigInt']['output'];
  pricePerToken: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type CurrencyApprovedForListing_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CurrencyApprovedForListing_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<CurrencyApprovedForListing_Filter>>>;
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

export enum CurrencyApprovedForListing_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Currency = 'currency',
  Id = 'id',
  ListingId = 'listingId',
  PricePerToken = 'pricePerToken',
  TransactionHash = 'transactionHash'
}

export type Initialized = {
  __typename?: 'Initialized';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
  version: Scalars['Int']['output'];
};

export type Initialized_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Initialized_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<Initialized_Filter>>>;
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

export enum Initialized_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  TransactionHash = 'transactionHash',
  Version = 'version'
}

export type Listing = {
  __typename?: 'Listing';
  assetContract: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
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

export type Listing_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Listing_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<Listing_Filter>>>;
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

export enum Listing_OrderBy {
  AssetContract = 'assetContract',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  ListingCreator = 'listingCreator',
  ListingId = 'listingId',
  ListingAssetContract = 'listing_assetContract',
  ListingCurrency = 'listing_currency',
  ListingEndTimestamp = 'listing_endTimestamp',
  ListingListingCreator = 'listing_listingCreator',
  ListingListingId = 'listing_listingId',
  ListingListingOwner = 'listing_listingOwner',
  ListingPricePerToken = 'listing_pricePerToken',
  ListingQuantity = 'listing_quantity',
  ListingReserved = 'listing_reserved',
  ListingStartTimestamp = 'listing_startTimestamp',
  ListingStatus = 'listing_status',
  ListingTaxBeneficiary = 'listing_taxBeneficiary',
  ListingTaxRate = 'listing_taxRate',
  ListingTokenId = 'listing_tokenId',
  ListingTokenType = 'listing_tokenType',
  TransactionHash = 'transactionHash'
}

export type NewSale = {
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

export type NewSale_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<NewSale_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<NewSale_Filter>>>;
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

export enum NewSale_OrderBy {
  AssetContract = 'assetContract',
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Buyer = 'buyer',
  Id = 'id',
  ListingCreator = 'listingCreator',
  ListingId = 'listingId',
  QuantityBought = 'quantityBought',
  TokenId = 'tokenId',
  TotalPricePaid = 'totalPricePaid',
  TransactionHash = 'transactionHash'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type OwnershipTransferred = {
  __typename?: 'OwnershipTransferred';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  newOwner: Scalars['Bytes']['output'];
  previousOwner: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type OwnershipTransferred_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OwnershipTransferred_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<OwnershipTransferred_Filter>>>;
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

export enum OwnershipTransferred_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  NewOwner = 'newOwner',
  PreviousOwner = 'previousOwner',
  TransactionHash = 'transactionHash'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  adGroup?: Maybe<AdGroup>;
  adGroupCreated?: Maybe<AdGroupCreated>;
  adGroupCreateds: Array<AdGroupCreated>;
  adGroups: Array<AdGroup>;
  adPool?: Maybe<AdPool>;
  adPools: Array<AdPool>;
  adSpace?: Maybe<AdSpace>;
  adSpaceCreated?: Maybe<AdSpaceCreated>;
  adSpaceCreateds: Array<AdSpaceCreated>;
  adSpaceStrategyUpdated?: Maybe<AdSpaceStrategyUpdated>;
  adSpaceStrategyUpdateds: Array<AdSpaceStrategyUpdated>;
  adSpaceURIUpdated?: Maybe<AdSpaceUriUpdated>;
  adSpaceURIUpdateds: Array<AdSpaceUriUpdated>;
  adSpaces: Array<AdSpace>;
  adminChanged?: Maybe<AdminChanged>;
  adminChangeds: Array<AdminChanged>;
  approval?: Maybe<Approval>;
  approvalForAll?: Maybe<ApprovalForAll>;
  approvalForAlls: Array<ApprovalForAll>;
  approvals: Array<Approval>;
  beaconUpgraded?: Maybe<BeaconUpgraded>;
  beaconUpgradeds: Array<BeaconUpgraded>;
  buyerApprovedForListing?: Maybe<BuyerApprovedForListing>;
  buyerApprovedForListings: Array<BuyerApprovedForListing>;
  cancelledListing?: Maybe<CancelledListing>;
  cancelledListings: Array<CancelledListing>;
  currencyApprovedForListing?: Maybe<CurrencyApprovedForListing>;
  currencyApprovedForListings: Array<CurrencyApprovedForListing>;
  initialized?: Maybe<Initialized>;
  initializeds: Array<Initialized>;
  listing?: Maybe<Listing>;
  listings: Array<Listing>;
  newSale?: Maybe<NewSale>;
  newSales: Array<NewSale>;
  ownershipTransferred?: Maybe<OwnershipTransferred>;
  ownershipTransferreds: Array<OwnershipTransferred>;
  tokenX?: Maybe<TokenX>;
  tokenXs: Array<TokenX>;
  transfer?: Maybe<Transfer>;
  transfers: Array<Transfer>;
  upgraded?: Maybe<Upgraded>;
  upgradeds: Array<Upgraded>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryAdGroupArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAdGroupCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAdGroupCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdGroupCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AdGroupCreated_Filter>;
};


export type QueryAdGroupsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdGroup_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AdGroup_Filter>;
};


export type QueryAdPoolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAdPoolsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdPool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AdPool_Filter>;
};


export type QueryAdSpaceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAdSpaceCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAdSpaceCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdSpaceCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AdSpaceCreated_Filter>;
};


export type QueryAdSpaceStrategyUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAdSpaceStrategyUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdSpaceStrategyUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AdSpaceStrategyUpdated_Filter>;
};


export type QueryAdSpaceUriUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAdSpaceUriUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdSpaceUriUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AdSpaceUriUpdated_Filter>;
};


export type QueryAdSpacesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdSpace_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AdSpace_Filter>;
};


export type QueryAdminChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAdminChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdminChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AdminChanged_Filter>;
};


export type QueryApprovalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryApprovalForAllArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryApprovalForAllsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ApprovalForAll_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ApprovalForAll_Filter>;
};


export type QueryApprovalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Approval_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Approval_Filter>;
};


export type QueryBeaconUpgradedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBeaconUpgradedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BeaconUpgraded_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BeaconUpgraded_Filter>;
};


export type QueryBuyerApprovedForListingArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBuyerApprovedForListingsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BuyerApprovedForListing_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BuyerApprovedForListing_Filter>;
};


export type QueryCancelledListingArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCancelledListingsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CancelledListing_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CancelledListing_Filter>;
};


export type QueryCurrencyApprovedForListingArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCurrencyApprovedForListingsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CurrencyApprovedForListing_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CurrencyApprovedForListing_Filter>;
};


export type QueryInitializedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryInitializedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Initialized_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Initialized_Filter>;
};


export type QueryListingArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryListingsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Listing_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Listing_Filter>;
};


export type QueryNewSaleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNewSalesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NewSale_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NewSale_Filter>;
};


export type QueryOwnershipTransferredArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOwnershipTransferredsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OwnershipTransferred_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OwnershipTransferred_Filter>;
};


export type QueryTokenXArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenXsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenX_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenX_Filter>;
};


export type QueryTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transfer_Filter>;
};


export type QueryUpgradedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUpgradedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Upgraded_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Upgraded_Filter>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  adGroup?: Maybe<AdGroup>;
  adGroupCreated?: Maybe<AdGroupCreated>;
  adGroupCreateds: Array<AdGroupCreated>;
  adGroups: Array<AdGroup>;
  adPool?: Maybe<AdPool>;
  adPools: Array<AdPool>;
  adSpace?: Maybe<AdSpace>;
  adSpaceCreated?: Maybe<AdSpaceCreated>;
  adSpaceCreateds: Array<AdSpaceCreated>;
  adSpaceStrategyUpdated?: Maybe<AdSpaceStrategyUpdated>;
  adSpaceStrategyUpdateds: Array<AdSpaceStrategyUpdated>;
  adSpaceURIUpdated?: Maybe<AdSpaceUriUpdated>;
  adSpaceURIUpdateds: Array<AdSpaceUriUpdated>;
  adSpaces: Array<AdSpace>;
  adminChanged?: Maybe<AdminChanged>;
  adminChangeds: Array<AdminChanged>;
  approval?: Maybe<Approval>;
  approvalForAll?: Maybe<ApprovalForAll>;
  approvalForAlls: Array<ApprovalForAll>;
  approvals: Array<Approval>;
  beaconUpgraded?: Maybe<BeaconUpgraded>;
  beaconUpgradeds: Array<BeaconUpgraded>;
  buyerApprovedForListing?: Maybe<BuyerApprovedForListing>;
  buyerApprovedForListings: Array<BuyerApprovedForListing>;
  cancelledListing?: Maybe<CancelledListing>;
  cancelledListings: Array<CancelledListing>;
  currencyApprovedForListing?: Maybe<CurrencyApprovedForListing>;
  currencyApprovedForListings: Array<CurrencyApprovedForListing>;
  initialized?: Maybe<Initialized>;
  initializeds: Array<Initialized>;
  listing?: Maybe<Listing>;
  listings: Array<Listing>;
  newSale?: Maybe<NewSale>;
  newSales: Array<NewSale>;
  ownershipTransferred?: Maybe<OwnershipTransferred>;
  ownershipTransferreds: Array<OwnershipTransferred>;
  tokenX?: Maybe<TokenX>;
  tokenXs: Array<TokenX>;
  transfer?: Maybe<Transfer>;
  transfers: Array<Transfer>;
  upgraded?: Maybe<Upgraded>;
  upgradeds: Array<Upgraded>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionAdGroupArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAdGroupCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAdGroupCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdGroupCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AdGroupCreated_Filter>;
};


export type SubscriptionAdGroupsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdGroup_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AdGroup_Filter>;
};


export type SubscriptionAdPoolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAdPoolsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdPool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AdPool_Filter>;
};


export type SubscriptionAdSpaceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAdSpaceCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAdSpaceCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdSpaceCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AdSpaceCreated_Filter>;
};


export type SubscriptionAdSpaceStrategyUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAdSpaceStrategyUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdSpaceStrategyUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AdSpaceStrategyUpdated_Filter>;
};


export type SubscriptionAdSpaceUriUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAdSpaceUriUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdSpaceUriUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AdSpaceUriUpdated_Filter>;
};


export type SubscriptionAdSpacesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdSpace_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AdSpace_Filter>;
};


export type SubscriptionAdminChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAdminChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdminChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AdminChanged_Filter>;
};


export type SubscriptionApprovalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionApprovalForAllArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionApprovalForAllsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ApprovalForAll_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ApprovalForAll_Filter>;
};


export type SubscriptionApprovalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Approval_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Approval_Filter>;
};


export type SubscriptionBeaconUpgradedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBeaconUpgradedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BeaconUpgraded_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BeaconUpgraded_Filter>;
};


export type SubscriptionBuyerApprovedForListingArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBuyerApprovedForListingsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BuyerApprovedForListing_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BuyerApprovedForListing_Filter>;
};


export type SubscriptionCancelledListingArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCancelledListingsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CancelledListing_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CancelledListing_Filter>;
};


export type SubscriptionCurrencyApprovedForListingArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCurrencyApprovedForListingsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CurrencyApprovedForListing_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CurrencyApprovedForListing_Filter>;
};


export type SubscriptionInitializedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionInitializedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Initialized_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Initialized_Filter>;
};


export type SubscriptionListingArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionListingsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Listing_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Listing_Filter>;
};


export type SubscriptionNewSaleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNewSalesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NewSale_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NewSale_Filter>;
};


export type SubscriptionOwnershipTransferredArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOwnershipTransferredsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OwnershipTransferred_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OwnershipTransferred_Filter>;
};


export type SubscriptionTokenXArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenXsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenX_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenX_Filter>;
};


export type SubscriptionTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transfer_Filter>;
};


export type SubscriptionUpgradedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUpgradedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Upgraded_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Upgraded_Filter>;
};

export type TokenX = {
  __typename?: 'TokenX';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  isNativeToken: Scalars['Boolean']['output'];
  superToken: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
  underlyingToken: Scalars['Bytes']['output'];
};

export type TokenX_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenX_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<TokenX_Filter>>>;
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

export enum TokenX_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  IsNativeToken = 'isNativeToken',
  SuperToken = 'superToken',
  TransactionHash = 'transactionHash',
  UnderlyingToken = 'underlyingToken'
}

export type Transfer = {
  __typename?: 'Transfer';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  from: Scalars['Bytes']['output'];
  id: Scalars['Bytes']['output'];
  to: Scalars['Bytes']['output'];
  tokenId: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type Transfer_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Transfer_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<Transfer_Filter>>>;
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

export enum Transfer_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  From = 'from',
  Id = 'id',
  To = 'to',
  TokenId = 'tokenId',
  TransactionHash = 'transactionHash'
}

export type Upgraded = {
  __typename?: 'Upgraded';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['Bytes']['output'];
  implementation: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type Upgraded_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Upgraded_Filter>>>;
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
  or?: InputMaybe<Array<InputMaybe<Upgraded_Filter>>>;
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

export enum Upgraded_OrderBy {
  BlockNumber = 'blockNumber',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Implementation = 'implementation',
  TransactionHash = 'transactionHash'
}

export type _Block_ = {
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
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type AdGroupQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height>;
  adGroup_adSpaces_skip?: InputMaybe<Scalars['Int']['input']>;
  adGroup_adSpaces_first?: InputMaybe<Scalars['Int']['input']>;
  adGroup_adSpaces_orderBy?: InputMaybe<AdSpace_OrderBy>;
  adGroup_adSpaces_orderDirection?: InputMaybe<OrderDirection>;
  adGroup_adSpaces_where?: InputMaybe<AdSpace_Filter>;
  adGroup_adSpaces_adSpaces_adPools_skip?: InputMaybe<Scalars['Int']['input']>;
  adGroup_adSpaces_adSpaces_adPools_first?: InputMaybe<Scalars['Int']['input']>;
  adGroup_adSpaces_adSpaces_adPools_orderBy?: InputMaybe<AdPool_OrderBy>;
  adGroup_adSpaces_adSpaces_adPools_orderDirection?: InputMaybe<OrderDirection>;
  adGroup_adSpaces_adSpaces_adPools_where?: InputMaybe<AdPool_Filter>;
}>;


export type AdGroupQuery = { __typename?: 'Query', adGroup?: { __typename?: 'AdGroup', id: string, beneficiary: any, blockTimestamp: any, transactionHash: any, adSpaces: Array<{ __typename?: 'AdSpace', id: string, uri?: string | null, blockTimestamp: any, transactionHash: any, adPools: Array<{ __typename?: 'AdPool', id: string, dPool: any, blockTimestamp: any, transactionHash: any, adToken: { __typename?: 'TokenX', id: any, underlyingToken: any, superToken: any, isNativeToken: boolean, blockNumber: any, blockTimestamp: any, transactionHash: any } }>, listing: { __typename?: 'Listing', id: string, listingCreator: any, listingId: any, assetContract: any, listing_listingId: any, listing_tokenId: any, listing_quantity: any, listing_pricePerToken: any, listing_startTimestamp: any, listing_endTimestamp: any, listing_listingCreator: any, listing_listingOwner: any, listing_assetContract: any, listing_currency: any, listing_taxRate: any, listing_taxBeneficiary: any, listing_tokenType: number, listing_status: number, listing_reserved: boolean, blockNumber: any, blockTimestamp: any, transactionHash: any }, tokenX?: { __typename?: 'TokenX', id: any, underlyingToken: any, superToken: any, isNativeToken: boolean, blockNumber: any, blockTimestamp: any, transactionHash: any } | null }> } | null };

export type AdGroupsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdGroup_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AdGroup_Filter>;
  block?: InputMaybe<Block_Height>;
  adGroups_adSpaces_skip?: InputMaybe<Scalars['Int']['input']>;
  adGroups_adSpaces_first?: InputMaybe<Scalars['Int']['input']>;
  adGroups_adSpaces_orderBy?: InputMaybe<AdSpace_OrderBy>;
  adGroups_adSpaces_orderDirection?: InputMaybe<OrderDirection>;
  adGroups_adSpaces_where?: InputMaybe<AdSpace_Filter>;
  adGroups_adSpaces_adSpaces_adPools_skip?: InputMaybe<Scalars['Int']['input']>;
  adGroups_adSpaces_adSpaces_adPools_first?: InputMaybe<Scalars['Int']['input']>;
  adGroups_adSpaces_adSpaces_adPools_orderBy?: InputMaybe<AdPool_OrderBy>;
  adGroups_adSpaces_adSpaces_adPools_orderDirection?: InputMaybe<OrderDirection>;
  adGroups_adSpaces_adSpaces_adPools_where?: InputMaybe<AdPool_Filter>;
}>;


export type AdGroupsQuery = { __typename?: 'Query', adGroups: Array<{ __typename?: 'AdGroup', id: string, beneficiary: any, blockTimestamp: any, transactionHash: any, adSpaces: Array<{ __typename?: 'AdSpace', id: string, uri?: string | null, blockTimestamp: any, transactionHash: any, adPools: Array<{ __typename?: 'AdPool', id: string, dPool: any, blockTimestamp: any, transactionHash: any, adToken: { __typename?: 'TokenX', id: any, underlyingToken: any, superToken: any, isNativeToken: boolean, blockNumber: any, blockTimestamp: any, transactionHash: any } }>, listing: { __typename?: 'Listing', id: string, listingCreator: any, listingId: any, assetContract: any, listing_listingId: any, listing_tokenId: any, listing_quantity: any, listing_pricePerToken: any, listing_startTimestamp: any, listing_endTimestamp: any, listing_listingCreator: any, listing_listingOwner: any, listing_assetContract: any, listing_currency: any, listing_taxRate: any, listing_taxBeneficiary: any, listing_tokenType: number, listing_status: number, listing_reserved: boolean, blockNumber: any, blockTimestamp: any, transactionHash: any }, tokenX?: { __typename?: 'TokenX', id: any, underlyingToken: any, superToken: any, isNativeToken: boolean, blockNumber: any, blockTimestamp: any, transactionHash: any } | null }> }> };

export type AdSpaceQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height>;
  adSpace_adPools_skip?: InputMaybe<Scalars['Int']['input']>;
  adSpace_adPools_first?: InputMaybe<Scalars['Int']['input']>;
  adSpace_adPools_orderBy?: InputMaybe<AdPool_OrderBy>;
  adSpace_adPools_orderDirection?: InputMaybe<OrderDirection>;
  adSpace_adPools_where?: InputMaybe<AdPool_Filter>;
}>;


export type AdSpaceQuery = { __typename?: 'Query', adSpace?: { __typename?: 'AdSpace', id: string, uri?: string | null, blockTimestamp: any, transactionHash: any, adGroup: { __typename?: 'AdGroup', id: string, beneficiary: any, blockTimestamp: any, transactionHash: any }, adPools: Array<{ __typename?: 'AdPool', id: string, dPool: any, blockTimestamp: any, transactionHash: any, adToken: { __typename?: 'TokenX', id: any, underlyingToken: any, superToken: any, isNativeToken: boolean, blockNumber: any, blockTimestamp: any, transactionHash: any } }>, listing: { __typename?: 'Listing', id: string, listingCreator: any, listingId: any, assetContract: any, listing_listingId: any, listing_tokenId: any, listing_quantity: any, listing_pricePerToken: any, listing_startTimestamp: any, listing_endTimestamp: any, listing_listingCreator: any, listing_listingOwner: any, listing_assetContract: any, listing_currency: any, listing_taxRate: any, listing_taxBeneficiary: any, listing_tokenType: number, listing_status: number, listing_reserved: boolean, blockNumber: any, blockTimestamp: any, transactionHash: any }, tokenX?: { __typename?: 'TokenX', id: any, underlyingToken: any, superToken: any, isNativeToken: boolean, blockNumber: any, blockTimestamp: any, transactionHash: any } | null } | null };

export type AdSpacesQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdSpace_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AdSpace_Filter>;
  block?: InputMaybe<Block_Height>;
  adSpaces_adPools_skip?: InputMaybe<Scalars['Int']['input']>;
  adSpaces_adPools_first?: InputMaybe<Scalars['Int']['input']>;
  adSpaces_adPools_orderBy?: InputMaybe<AdPool_OrderBy>;
  adSpaces_adPools_orderDirection?: InputMaybe<OrderDirection>;
  adSpaces_adPools_where?: InputMaybe<AdPool_Filter>;
}>;


export type AdSpacesQuery = { __typename?: 'Query', adSpaces: Array<{ __typename?: 'AdSpace', id: string, uri?: string | null, blockTimestamp: any, transactionHash: any, adGroup: { __typename?: 'AdGroup', id: string, beneficiary: any, blockTimestamp: any, transactionHash: any }, adPools: Array<{ __typename?: 'AdPool', id: string, dPool: any, blockTimestamp: any, transactionHash: any, adToken: { __typename?: 'TokenX', id: any, underlyingToken: any, superToken: any, isNativeToken: boolean, blockNumber: any, blockTimestamp: any, transactionHash: any } }>, listing: { __typename?: 'Listing', id: string, listingCreator: any, listingId: any, assetContract: any, listing_listingId: any, listing_tokenId: any, listing_quantity: any, listing_pricePerToken: any, listing_startTimestamp: any, listing_endTimestamp: any, listing_listingCreator: any, listing_listingOwner: any, listing_assetContract: any, listing_currency: any, listing_taxRate: any, listing_taxBeneficiary: any, listing_tokenType: number, listing_status: number, listing_reserved: boolean, blockNumber: any, blockTimestamp: any, transactionHash: any }, tokenX?: { __typename?: 'TokenX', id: any, underlyingToken: any, superToken: any, isNativeToken: boolean, blockNumber: any, blockTimestamp: any, transactionHash: any } | null }> };

export type AdPoolQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height>;
}>;


export type AdPoolQuery = { __typename?: 'Query', adPool?: { __typename?: 'AdPool', id: string, dPool: any, blockTimestamp: any, transactionHash: any, adSpace: { __typename?: 'AdSpace', id: string, uri?: string | null, blockTimestamp: any, transactionHash: any, adGroup: { __typename?: 'AdGroup', id: string, beneficiary: any, blockTimestamp: any, transactionHash: any }, listing: { __typename?: 'Listing', id: string, listingCreator: any, listingId: any, assetContract: any, listing_listingId: any, listing_tokenId: any, listing_quantity: any, listing_pricePerToken: any, listing_startTimestamp: any, listing_endTimestamp: any, listing_listingCreator: any, listing_listingOwner: any, listing_assetContract: any, listing_currency: any, listing_taxRate: any, listing_taxBeneficiary: any, listing_tokenType: number, listing_status: number, listing_reserved: boolean, blockNumber: any, blockTimestamp: any, transactionHash: any }, tokenX?: { __typename?: 'TokenX', id: any, underlyingToken: any, superToken: any, isNativeToken: boolean, blockNumber: any, blockTimestamp: any, transactionHash: any } | null }, adToken: { __typename?: 'TokenX', id: any, underlyingToken: any, superToken: any, isNativeToken: boolean, blockNumber: any, blockTimestamp: any, transactionHash: any } } | null };

export type AdPoolsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdPool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AdPool_Filter>;
  block?: InputMaybe<Block_Height>;
}>;


export type AdPoolsQuery = { __typename?: 'Query', adPools: Array<{ __typename?: 'AdPool', id: string, dPool: any, blockTimestamp: any, transactionHash: any, adSpace: { __typename?: 'AdSpace', id: string, uri?: string | null, blockTimestamp: any, transactionHash: any, adGroup: { __typename?: 'AdGroup', id: string, beneficiary: any, blockTimestamp: any, transactionHash: any }, listing: { __typename?: 'Listing', id: string, listingCreator: any, listingId: any, assetContract: any, listing_listingId: any, listing_tokenId: any, listing_quantity: any, listing_pricePerToken: any, listing_startTimestamp: any, listing_endTimestamp: any, listing_listingCreator: any, listing_listingOwner: any, listing_assetContract: any, listing_currency: any, listing_taxRate: any, listing_taxBeneficiary: any, listing_tokenType: number, listing_status: number, listing_reserved: boolean, blockNumber: any, blockTimestamp: any, transactionHash: any }, tokenX?: { __typename?: 'TokenX', id: any, underlyingToken: any, superToken: any, isNativeToken: boolean, blockNumber: any, blockTimestamp: any, transactionHash: any } | null }, adToken: { __typename?: 'TokenX', id: any, underlyingToken: any, superToken: any, isNativeToken: boolean, blockNumber: any, blockTimestamp: any, transactionHash: any } }> };

export type TokenXQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height>;
}>;


export type TokenXQuery = { __typename?: 'Query', tokenX?: { __typename?: 'TokenX', id: any, underlyingToken: any, superToken: any, isNativeToken: boolean, blockNumber: any, blockTimestamp: any, transactionHash: any } | null };

export type TokenXsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenX_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenX_Filter>;
  block?: InputMaybe<Block_Height>;
}>;


export type TokenXsQuery = { __typename?: 'Query', tokenXs: Array<{ __typename?: 'TokenX', id: any, underlyingToken: any, superToken: any, isNativeToken: boolean, blockNumber: any, blockTimestamp: any, transactionHash: any }> };

export type BuyerApprovedForListingQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height>;
}>;


export type BuyerApprovedForListingQuery = { __typename?: 'Query', buyerApprovedForListing?: { __typename?: 'BuyerApprovedForListing', id: any, listingId: any, buyer: any, approved: boolean, blockNumber: any, blockTimestamp: any, transactionHash: any } | null };

export type BuyerApprovedForListingsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BuyerApprovedForListing_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BuyerApprovedForListing_Filter>;
  block?: InputMaybe<Block_Height>;
}>;


export type BuyerApprovedForListingsQuery = { __typename?: 'Query', buyerApprovedForListings: Array<{ __typename?: 'BuyerApprovedForListing', id: any, listingId: any, buyer: any, approved: boolean, blockNumber: any, blockTimestamp: any, transactionHash: any }> };

export type CancelledListingQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height>;
}>;


export type CancelledListingQuery = { __typename?: 'Query', cancelledListing?: { __typename?: 'CancelledListing', id: any, listingCreator: any, listingId: any, blockNumber: any, blockTimestamp: any, transactionHash: any } | null };

export type CancelledListingsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CancelledListing_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CancelledListing_Filter>;
  block?: InputMaybe<Block_Height>;
}>;


export type CancelledListingsQuery = { __typename?: 'Query', cancelledListings: Array<{ __typename?: 'CancelledListing', id: any, listingCreator: any, listingId: any, blockNumber: any, blockTimestamp: any, transactionHash: any }> };

export type CurrencyApprovedForListingQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height>;
}>;


export type CurrencyApprovedForListingQuery = { __typename?: 'Query', currencyApprovedForListing?: { __typename?: 'CurrencyApprovedForListing', id: any, listingId: any, currency: any, pricePerToken: any, blockNumber: any, blockTimestamp: any, transactionHash: any } | null };

export type CurrencyApprovedForListingsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CurrencyApprovedForListing_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CurrencyApprovedForListing_Filter>;
  block?: InputMaybe<Block_Height>;
}>;


export type CurrencyApprovedForListingsQuery = { __typename?: 'Query', currencyApprovedForListings: Array<{ __typename?: 'CurrencyApprovedForListing', id: any, listingId: any, currency: any, pricePerToken: any, blockNumber: any, blockTimestamp: any, transactionHash: any }> };

export type ListingQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height>;
}>;


export type ListingQuery = { __typename?: 'Query', listing?: { __typename?: 'Listing', id: string, listingCreator: any, listingId: any, assetContract: any, listing_listingId: any, listing_tokenId: any, listing_quantity: any, listing_pricePerToken: any, listing_startTimestamp: any, listing_endTimestamp: any, listing_listingCreator: any, listing_listingOwner: any, listing_assetContract: any, listing_currency: any, listing_taxRate: any, listing_taxBeneficiary: any, listing_tokenType: number, listing_status: number, listing_reserved: boolean, blockNumber: any, blockTimestamp: any, transactionHash: any } | null };

export type ListingsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Listing_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Listing_Filter>;
  block?: InputMaybe<Block_Height>;
}>;


export type ListingsQuery = { __typename?: 'Query', listings: Array<{ __typename?: 'Listing', id: string, listingCreator: any, listingId: any, assetContract: any, listing_listingId: any, listing_tokenId: any, listing_quantity: any, listing_pricePerToken: any, listing_startTimestamp: any, listing_endTimestamp: any, listing_listingCreator: any, listing_listingOwner: any, listing_assetContract: any, listing_currency: any, listing_taxRate: any, listing_taxBeneficiary: any, listing_tokenType: number, listing_status: number, listing_reserved: boolean, blockNumber: any, blockTimestamp: any, transactionHash: any }> };

export type NewSaleQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height>;
}>;


export type NewSaleQuery = { __typename?: 'Query', newSale?: { __typename?: 'NewSale', id: any, listingCreator: any, listingId: any, assetContract: any, tokenId: any, buyer: any, quantityBought: any, totalPricePaid: any, blockNumber: any, blockTimestamp: any, transactionHash: any } | null };

export type NewSalesQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<NewSale_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NewSale_Filter>;
  block?: InputMaybe<Block_Height>;
}>;


export type NewSalesQuery = { __typename?: 'Query', newSales: Array<{ __typename?: 'NewSale', id: any, listingCreator: any, listingId: any, assetContract: any, tokenId: any, buyer: any, quantityBought: any, totalPricePaid: any, blockNumber: any, blockTimestamp: any, transactionHash: any }> };

export type AdGroupCreatedQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height>;
}>;


export type AdGroupCreatedQuery = { __typename?: 'Query', adGroupCreated?: { __typename?: 'AdGroupCreated', id: any, groupId: any, beneficiary: any, blockNumber: any, blockTimestamp: any, transactionHash: any } | null };

export type AdGroupCreatedsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdGroupCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AdGroupCreated_Filter>;
  block?: InputMaybe<Block_Height>;
}>;


export type AdGroupCreatedsQuery = { __typename?: 'Query', adGroupCreateds: Array<{ __typename?: 'AdGroupCreated', id: any, groupId: any, beneficiary: any, blockNumber: any, blockTimestamp: any, transactionHash: any }> };

export type AdSpaceCreatedQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height>;
}>;


export type AdSpaceCreatedQuery = { __typename?: 'Query', adSpaceCreated?: { __typename?: 'AdSpaceCreated', id: any, groupId: any, adId: any, blockNumber: any, blockTimestamp: any, transactionHash: any } | null };

export type AdSpaceCreatedsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdSpaceCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AdSpaceCreated_Filter>;
  block?: InputMaybe<Block_Height>;
}>;


export type AdSpaceCreatedsQuery = { __typename?: 'Query', adSpaceCreateds: Array<{ __typename?: 'AdSpaceCreated', id: any, groupId: any, adId: any, blockNumber: any, blockTimestamp: any, transactionHash: any }> };

export type AdSpaceStrategyUpdatedQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height>;
}>;


export type AdSpaceStrategyUpdatedQuery = { __typename?: 'Query', adSpaceStrategyUpdated?: { __typename?: 'AdSpaceStrategyUpdated', id: any, adId: any, strategy: any, blockNumber: any, blockTimestamp: any, transactionHash: any } | null };

export type AdSpaceStrategyUpdatedsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdSpaceStrategyUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AdSpaceStrategyUpdated_Filter>;
  block?: InputMaybe<Block_Height>;
}>;


export type AdSpaceStrategyUpdatedsQuery = { __typename?: 'Query', adSpaceStrategyUpdateds: Array<{ __typename?: 'AdSpaceStrategyUpdated', id: any, adId: any, strategy: any, blockNumber: any, blockTimestamp: any, transactionHash: any }> };

export type AdSpaceUriUpdatedQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height>;
}>;


export type AdSpaceUriUpdatedQuery = { __typename?: 'Query', adSpaceURIUpdated?: { __typename?: 'AdSpaceURIUpdated', id: any, adId: any, uri: string, blockNumber: any, blockTimestamp: any, transactionHash: any } | null };

export type AdSpaceUriUpdatedsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdSpaceUriUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AdSpaceUriUpdated_Filter>;
  block?: InputMaybe<Block_Height>;
}>;


export type AdSpaceUriUpdatedsQuery = { __typename?: 'Query', adSpaceURIUpdateds: Array<{ __typename?: 'AdSpaceURIUpdated', id: any, adId: any, uri: string, blockNumber: any, blockTimestamp: any, transactionHash: any }> };

export type AdminChangedQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height>;
}>;


export type AdminChangedQuery = { __typename?: 'Query', adminChanged?: { __typename?: 'AdminChanged', id: any, previousAdmin: any, newAdmin: any, blockNumber: any, blockTimestamp: any, transactionHash: any } | null };

export type AdminChangedsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AdminChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AdminChanged_Filter>;
  block?: InputMaybe<Block_Height>;
}>;


export type AdminChangedsQuery = { __typename?: 'Query', adminChangeds: Array<{ __typename?: 'AdminChanged', id: any, previousAdmin: any, newAdmin: any, blockNumber: any, blockTimestamp: any, transactionHash: any }> };

export type ApprovalQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height>;
}>;


export type ApprovalQuery = { __typename?: 'Query', approval?: { __typename?: 'Approval', id: any, owner: any, approved: any, tokenId: any, blockNumber: any, blockTimestamp: any, transactionHash: any } | null };

export type ApprovalsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Approval_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Approval_Filter>;
  block?: InputMaybe<Block_Height>;
}>;


export type ApprovalsQuery = { __typename?: 'Query', approvals: Array<{ __typename?: 'Approval', id: any, owner: any, approved: any, tokenId: any, blockNumber: any, blockTimestamp: any, transactionHash: any }> };

export type ApprovalForAllQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height>;
}>;


export type ApprovalForAllQuery = { __typename?: 'Query', approvalForAll?: { __typename?: 'ApprovalForAll', id: any, owner: any, operator: any, approved: boolean, blockNumber: any, blockTimestamp: any, transactionHash: any } | null };

export type ApprovalForAllsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ApprovalForAll_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ApprovalForAll_Filter>;
  block?: InputMaybe<Block_Height>;
}>;


export type ApprovalForAllsQuery = { __typename?: 'Query', approvalForAlls: Array<{ __typename?: 'ApprovalForAll', id: any, owner: any, operator: any, approved: boolean, blockNumber: any, blockTimestamp: any, transactionHash: any }> };

export type BeaconUpgradedQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height>;
}>;


export type BeaconUpgradedQuery = { __typename?: 'Query', beaconUpgraded?: { __typename?: 'BeaconUpgraded', id: any, beacon: any, blockNumber: any, blockTimestamp: any, transactionHash: any } | null };

export type BeaconUpgradedsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BeaconUpgraded_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BeaconUpgraded_Filter>;
  block?: InputMaybe<Block_Height>;
}>;


export type BeaconUpgradedsQuery = { __typename?: 'Query', beaconUpgradeds: Array<{ __typename?: 'BeaconUpgraded', id: any, beacon: any, blockNumber: any, blockTimestamp: any, transactionHash: any }> };

export type InitializedQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height>;
}>;


export type InitializedQuery = { __typename?: 'Query', initialized?: { __typename?: 'Initialized', id: any, version: number, blockNumber: any, blockTimestamp: any, transactionHash: any } | null };

export type InitializedsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Initialized_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Initialized_Filter>;
  block?: InputMaybe<Block_Height>;
}>;


export type InitializedsQuery = { __typename?: 'Query', initializeds: Array<{ __typename?: 'Initialized', id: any, version: number, blockNumber: any, blockTimestamp: any, transactionHash: any }> };

export type OwnershipTransferredQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height>;
}>;


export type OwnershipTransferredQuery = { __typename?: 'Query', ownershipTransferred?: { __typename?: 'OwnershipTransferred', id: any, previousOwner: any, newOwner: any, blockNumber: any, blockTimestamp: any, transactionHash: any } | null };

export type OwnershipTransferredsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OwnershipTransferred_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<OwnershipTransferred_Filter>;
  block?: InputMaybe<Block_Height>;
}>;


export type OwnershipTransferredsQuery = { __typename?: 'Query', ownershipTransferreds: Array<{ __typename?: 'OwnershipTransferred', id: any, previousOwner: any, newOwner: any, blockNumber: any, blockTimestamp: any, transactionHash: any }> };

export type TransferQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height>;
}>;


export type TransferQuery = { __typename?: 'Query', transfer?: { __typename?: 'Transfer', id: any, from: any, to: any, tokenId: any, blockNumber: any, blockTimestamp: any, transactionHash: any } | null };

export type TransfersQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transfer_Filter>;
  block?: InputMaybe<Block_Height>;
}>;


export type TransfersQuery = { __typename?: 'Query', transfers: Array<{ __typename?: 'Transfer', id: any, from: any, to: any, tokenId: any, blockNumber: any, blockTimestamp: any, transactionHash: any }> };

export type UpgradedQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_Height>;
}>;


export type UpgradedQuery = { __typename?: 'Query', upgraded?: { __typename?: 'Upgraded', id: any, implementation: any, blockNumber: any, blockTimestamp: any, transactionHash: any } | null };

export type UpgradedsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Upgraded_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Upgraded_Filter>;
  block?: InputMaybe<Block_Height>;
}>;


export type UpgradedsQuery = { __typename?: 'Query', upgradeds: Array<{ __typename?: 'Upgraded', id: any, implementation: any, blockNumber: any, blockTimestamp: any, transactionHash: any }> };



export const AdGroupDocument = `
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
      listing {
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
      tokenX {
        id
        underlyingToken
        superToken
        isNativeToken
        blockNumber
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

export const useAdGroupQuery = <
      TData = AdGroupQuery,
      TError = unknown
    >(
      variables: AdGroupQueryVariables,
      options?: Omit<UseQueryOptions<AdGroupQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<AdGroupQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<AdGroupQuery, TError, TData>(
      {
    queryKey: ['adGroup', variables],
    queryFn: fetcher<AdGroupQuery, AdGroupQueryVariables>(AdGroupDocument).bind(null, variables),
    ...options
  }
    )};

export const AdGroupsDocument = `
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
      listing {
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
      tokenX {
        id
        underlyingToken
        superToken
        isNativeToken
        blockNumber
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

export const useAdGroupsQuery = <
      TData = AdGroupsQuery,
      TError = unknown
    >(
      variables?: AdGroupsQueryVariables,
      options?: Omit<UseQueryOptions<AdGroupsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<AdGroupsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<AdGroupsQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['adGroups'] : ['adGroups', variables],
    queryFn: fetcher<AdGroupsQuery, AdGroupsQueryVariables>(AdGroupsDocument).bind(null, variables),
    ...options
  }
    )};

export const AdSpaceDocument = `
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
    listing {
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
    tokenX {
      id
      underlyingToken
      superToken
      isNativeToken
      blockNumber
      blockTimestamp
      transactionHash
    }
    uri
    blockTimestamp
    transactionHash
  }
}
    `;

export const useAdSpaceQuery = <
      TData = AdSpaceQuery,
      TError = unknown
    >(
      variables: AdSpaceQueryVariables,
      options?: Omit<UseQueryOptions<AdSpaceQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<AdSpaceQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<AdSpaceQuery, TError, TData>(
      {
    queryKey: ['adSpace', variables],
    queryFn: fetcher<AdSpaceQuery, AdSpaceQueryVariables>(AdSpaceDocument).bind(null, variables),
    ...options
  }
    )};

export const AdSpacesDocument = `
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
    listing {
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
    tokenX {
      id
      underlyingToken
      superToken
      isNativeToken
      blockNumber
      blockTimestamp
      transactionHash
    }
    uri
    blockTimestamp
    transactionHash
  }
}
    `;

export const useAdSpacesQuery = <
      TData = AdSpacesQuery,
      TError = unknown
    >(
      variables?: AdSpacesQueryVariables,
      options?: Omit<UseQueryOptions<AdSpacesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<AdSpacesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<AdSpacesQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['adSpaces'] : ['adSpaces', variables],
    queryFn: fetcher<AdSpacesQuery, AdSpacesQueryVariables>(AdSpacesDocument).bind(null, variables),
    ...options
  }
    )};

export const AdPoolDocument = `
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
      listing {
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
      tokenX {
        id
        underlyingToken
        superToken
        isNativeToken
        blockNumber
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

export const useAdPoolQuery = <
      TData = AdPoolQuery,
      TError = unknown
    >(
      variables: AdPoolQueryVariables,
      options?: Omit<UseQueryOptions<AdPoolQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<AdPoolQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<AdPoolQuery, TError, TData>(
      {
    queryKey: ['adPool', variables],
    queryFn: fetcher<AdPoolQuery, AdPoolQueryVariables>(AdPoolDocument).bind(null, variables),
    ...options
  }
    )};

export const AdPoolsDocument = `
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
      listing {
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
      tokenX {
        id
        underlyingToken
        superToken
        isNativeToken
        blockNumber
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

export const useAdPoolsQuery = <
      TData = AdPoolsQuery,
      TError = unknown
    >(
      variables?: AdPoolsQueryVariables,
      options?: Omit<UseQueryOptions<AdPoolsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<AdPoolsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<AdPoolsQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['adPools'] : ['adPools', variables],
    queryFn: fetcher<AdPoolsQuery, AdPoolsQueryVariables>(AdPoolsDocument).bind(null, variables),
    ...options
  }
    )};

export const TokenXDocument = `
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

export const useTokenXQuery = <
      TData = TokenXQuery,
      TError = unknown
    >(
      variables: TokenXQueryVariables,
      options?: Omit<UseQueryOptions<TokenXQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<TokenXQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<TokenXQuery, TError, TData>(
      {
    queryKey: ['tokenX', variables],
    queryFn: fetcher<TokenXQuery, TokenXQueryVariables>(TokenXDocument).bind(null, variables),
    ...options
  }
    )};

export const TokenXsDocument = `
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

export const useTokenXsQuery = <
      TData = TokenXsQuery,
      TError = unknown
    >(
      variables?: TokenXsQueryVariables,
      options?: Omit<UseQueryOptions<TokenXsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<TokenXsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<TokenXsQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['tokenXs'] : ['tokenXs', variables],
    queryFn: fetcher<TokenXsQuery, TokenXsQueryVariables>(TokenXsDocument).bind(null, variables),
    ...options
  }
    )};

export const BuyerApprovedForListingDocument = `
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

export const useBuyerApprovedForListingQuery = <
      TData = BuyerApprovedForListingQuery,
      TError = unknown
    >(
      variables: BuyerApprovedForListingQueryVariables,
      options?: Omit<UseQueryOptions<BuyerApprovedForListingQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<BuyerApprovedForListingQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<BuyerApprovedForListingQuery, TError, TData>(
      {
    queryKey: ['buyerApprovedForListing', variables],
    queryFn: fetcher<BuyerApprovedForListingQuery, BuyerApprovedForListingQueryVariables>(BuyerApprovedForListingDocument).bind(null, variables),
    ...options
  }
    )};

export const BuyerApprovedForListingsDocument = `
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

export const useBuyerApprovedForListingsQuery = <
      TData = BuyerApprovedForListingsQuery,
      TError = unknown
    >(
      variables?: BuyerApprovedForListingsQueryVariables,
      options?: Omit<UseQueryOptions<BuyerApprovedForListingsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<BuyerApprovedForListingsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<BuyerApprovedForListingsQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['buyerApprovedForListings'] : ['buyerApprovedForListings', variables],
    queryFn: fetcher<BuyerApprovedForListingsQuery, BuyerApprovedForListingsQueryVariables>(BuyerApprovedForListingsDocument).bind(null, variables),
    ...options
  }
    )};

export const CancelledListingDocument = `
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

export const useCancelledListingQuery = <
      TData = CancelledListingQuery,
      TError = unknown
    >(
      variables: CancelledListingQueryVariables,
      options?: Omit<UseQueryOptions<CancelledListingQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<CancelledListingQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<CancelledListingQuery, TError, TData>(
      {
    queryKey: ['cancelledListing', variables],
    queryFn: fetcher<CancelledListingQuery, CancelledListingQueryVariables>(CancelledListingDocument).bind(null, variables),
    ...options
  }
    )};

export const CancelledListingsDocument = `
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

export const useCancelledListingsQuery = <
      TData = CancelledListingsQuery,
      TError = unknown
    >(
      variables?: CancelledListingsQueryVariables,
      options?: Omit<UseQueryOptions<CancelledListingsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<CancelledListingsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<CancelledListingsQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['cancelledListings'] : ['cancelledListings', variables],
    queryFn: fetcher<CancelledListingsQuery, CancelledListingsQueryVariables>(CancelledListingsDocument).bind(null, variables),
    ...options
  }
    )};

export const CurrencyApprovedForListingDocument = `
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

export const useCurrencyApprovedForListingQuery = <
      TData = CurrencyApprovedForListingQuery,
      TError = unknown
    >(
      variables: CurrencyApprovedForListingQueryVariables,
      options?: Omit<UseQueryOptions<CurrencyApprovedForListingQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<CurrencyApprovedForListingQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<CurrencyApprovedForListingQuery, TError, TData>(
      {
    queryKey: ['currencyApprovedForListing', variables],
    queryFn: fetcher<CurrencyApprovedForListingQuery, CurrencyApprovedForListingQueryVariables>(CurrencyApprovedForListingDocument).bind(null, variables),
    ...options
  }
    )};

export const CurrencyApprovedForListingsDocument = `
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

export const useCurrencyApprovedForListingsQuery = <
      TData = CurrencyApprovedForListingsQuery,
      TError = unknown
    >(
      variables?: CurrencyApprovedForListingsQueryVariables,
      options?: Omit<UseQueryOptions<CurrencyApprovedForListingsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<CurrencyApprovedForListingsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<CurrencyApprovedForListingsQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['currencyApprovedForListings'] : ['currencyApprovedForListings', variables],
    queryFn: fetcher<CurrencyApprovedForListingsQuery, CurrencyApprovedForListingsQueryVariables>(CurrencyApprovedForListingsDocument).bind(null, variables),
    ...options
  }
    )};

export const ListingDocument = `
    query listing($id: ID!, $block: Block_height) {
  listing(id: $id, block: $block) {
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

export const useListingQuery = <
      TData = ListingQuery,
      TError = unknown
    >(
      variables: ListingQueryVariables,
      options?: Omit<UseQueryOptions<ListingQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<ListingQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<ListingQuery, TError, TData>(
      {
    queryKey: ['listing', variables],
    queryFn: fetcher<ListingQuery, ListingQueryVariables>(ListingDocument).bind(null, variables),
    ...options
  }
    )};

export const ListingsDocument = `
    query listings($skip: Int, $first: Int, $orderBy: Listing_orderBy, $orderDirection: OrderDirection, $where: Listing_filter, $block: Block_height) {
  listings(
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

export const useListingsQuery = <
      TData = ListingsQuery,
      TError = unknown
    >(
      variables?: ListingsQueryVariables,
      options?: Omit<UseQueryOptions<ListingsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<ListingsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<ListingsQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['listings'] : ['listings', variables],
    queryFn: fetcher<ListingsQuery, ListingsQueryVariables>(ListingsDocument).bind(null, variables),
    ...options
  }
    )};

export const NewSaleDocument = `
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

export const useNewSaleQuery = <
      TData = NewSaleQuery,
      TError = unknown
    >(
      variables: NewSaleQueryVariables,
      options?: Omit<UseQueryOptions<NewSaleQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<NewSaleQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<NewSaleQuery, TError, TData>(
      {
    queryKey: ['newSale', variables],
    queryFn: fetcher<NewSaleQuery, NewSaleQueryVariables>(NewSaleDocument).bind(null, variables),
    ...options
  }
    )};

export const NewSalesDocument = `
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

export const useNewSalesQuery = <
      TData = NewSalesQuery,
      TError = unknown
    >(
      variables?: NewSalesQueryVariables,
      options?: Omit<UseQueryOptions<NewSalesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<NewSalesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<NewSalesQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['newSales'] : ['newSales', variables],
    queryFn: fetcher<NewSalesQuery, NewSalesQueryVariables>(NewSalesDocument).bind(null, variables),
    ...options
  }
    )};

export const AdGroupCreatedDocument = `
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

export const useAdGroupCreatedQuery = <
      TData = AdGroupCreatedQuery,
      TError = unknown
    >(
      variables: AdGroupCreatedQueryVariables,
      options?: Omit<UseQueryOptions<AdGroupCreatedQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<AdGroupCreatedQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<AdGroupCreatedQuery, TError, TData>(
      {
    queryKey: ['adGroupCreated', variables],
    queryFn: fetcher<AdGroupCreatedQuery, AdGroupCreatedQueryVariables>(AdGroupCreatedDocument).bind(null, variables),
    ...options
  }
    )};

export const AdGroupCreatedsDocument = `
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

export const useAdGroupCreatedsQuery = <
      TData = AdGroupCreatedsQuery,
      TError = unknown
    >(
      variables?: AdGroupCreatedsQueryVariables,
      options?: Omit<UseQueryOptions<AdGroupCreatedsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<AdGroupCreatedsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<AdGroupCreatedsQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['adGroupCreateds'] : ['adGroupCreateds', variables],
    queryFn: fetcher<AdGroupCreatedsQuery, AdGroupCreatedsQueryVariables>(AdGroupCreatedsDocument).bind(null, variables),
    ...options
  }
    )};

export const AdSpaceCreatedDocument = `
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

export const useAdSpaceCreatedQuery = <
      TData = AdSpaceCreatedQuery,
      TError = unknown
    >(
      variables: AdSpaceCreatedQueryVariables,
      options?: Omit<UseQueryOptions<AdSpaceCreatedQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<AdSpaceCreatedQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<AdSpaceCreatedQuery, TError, TData>(
      {
    queryKey: ['adSpaceCreated', variables],
    queryFn: fetcher<AdSpaceCreatedQuery, AdSpaceCreatedQueryVariables>(AdSpaceCreatedDocument).bind(null, variables),
    ...options
  }
    )};

export const AdSpaceCreatedsDocument = `
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

export const useAdSpaceCreatedsQuery = <
      TData = AdSpaceCreatedsQuery,
      TError = unknown
    >(
      variables?: AdSpaceCreatedsQueryVariables,
      options?: Omit<UseQueryOptions<AdSpaceCreatedsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<AdSpaceCreatedsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<AdSpaceCreatedsQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['adSpaceCreateds'] : ['adSpaceCreateds', variables],
    queryFn: fetcher<AdSpaceCreatedsQuery, AdSpaceCreatedsQueryVariables>(AdSpaceCreatedsDocument).bind(null, variables),
    ...options
  }
    )};

export const AdSpaceStrategyUpdatedDocument = `
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

export const useAdSpaceStrategyUpdatedQuery = <
      TData = AdSpaceStrategyUpdatedQuery,
      TError = unknown
    >(
      variables: AdSpaceStrategyUpdatedQueryVariables,
      options?: Omit<UseQueryOptions<AdSpaceStrategyUpdatedQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<AdSpaceStrategyUpdatedQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<AdSpaceStrategyUpdatedQuery, TError, TData>(
      {
    queryKey: ['adSpaceStrategyUpdated', variables],
    queryFn: fetcher<AdSpaceStrategyUpdatedQuery, AdSpaceStrategyUpdatedQueryVariables>(AdSpaceStrategyUpdatedDocument).bind(null, variables),
    ...options
  }
    )};

export const AdSpaceStrategyUpdatedsDocument = `
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

export const useAdSpaceStrategyUpdatedsQuery = <
      TData = AdSpaceStrategyUpdatedsQuery,
      TError = unknown
    >(
      variables?: AdSpaceStrategyUpdatedsQueryVariables,
      options?: Omit<UseQueryOptions<AdSpaceStrategyUpdatedsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<AdSpaceStrategyUpdatedsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<AdSpaceStrategyUpdatedsQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['adSpaceStrategyUpdateds'] : ['adSpaceStrategyUpdateds', variables],
    queryFn: fetcher<AdSpaceStrategyUpdatedsQuery, AdSpaceStrategyUpdatedsQueryVariables>(AdSpaceStrategyUpdatedsDocument).bind(null, variables),
    ...options
  }
    )};

export const AdSpaceUriUpdatedDocument = `
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

export const useAdSpaceUriUpdatedQuery = <
      TData = AdSpaceUriUpdatedQuery,
      TError = unknown
    >(
      variables: AdSpaceUriUpdatedQueryVariables,
      options?: Omit<UseQueryOptions<AdSpaceUriUpdatedQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<AdSpaceUriUpdatedQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<AdSpaceUriUpdatedQuery, TError, TData>(
      {
    queryKey: ['adSpaceURIUpdated', variables],
    queryFn: fetcher<AdSpaceUriUpdatedQuery, AdSpaceUriUpdatedQueryVariables>(AdSpaceUriUpdatedDocument).bind(null, variables),
    ...options
  }
    )};

export const AdSpaceUriUpdatedsDocument = `
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

export const useAdSpaceUriUpdatedsQuery = <
      TData = AdSpaceUriUpdatedsQuery,
      TError = unknown
    >(
      variables?: AdSpaceUriUpdatedsQueryVariables,
      options?: Omit<UseQueryOptions<AdSpaceUriUpdatedsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<AdSpaceUriUpdatedsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<AdSpaceUriUpdatedsQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['adSpaceURIUpdateds'] : ['adSpaceURIUpdateds', variables],
    queryFn: fetcher<AdSpaceUriUpdatedsQuery, AdSpaceUriUpdatedsQueryVariables>(AdSpaceUriUpdatedsDocument).bind(null, variables),
    ...options
  }
    )};

export const AdminChangedDocument = `
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

export const useAdminChangedQuery = <
      TData = AdminChangedQuery,
      TError = unknown
    >(
      variables: AdminChangedQueryVariables,
      options?: Omit<UseQueryOptions<AdminChangedQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<AdminChangedQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<AdminChangedQuery, TError, TData>(
      {
    queryKey: ['adminChanged', variables],
    queryFn: fetcher<AdminChangedQuery, AdminChangedQueryVariables>(AdminChangedDocument).bind(null, variables),
    ...options
  }
    )};

export const AdminChangedsDocument = `
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

export const useAdminChangedsQuery = <
      TData = AdminChangedsQuery,
      TError = unknown
    >(
      variables?: AdminChangedsQueryVariables,
      options?: Omit<UseQueryOptions<AdminChangedsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<AdminChangedsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<AdminChangedsQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['adminChangeds'] : ['adminChangeds', variables],
    queryFn: fetcher<AdminChangedsQuery, AdminChangedsQueryVariables>(AdminChangedsDocument).bind(null, variables),
    ...options
  }
    )};

export const ApprovalDocument = `
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

export const useApprovalQuery = <
      TData = ApprovalQuery,
      TError = unknown
    >(
      variables: ApprovalQueryVariables,
      options?: Omit<UseQueryOptions<ApprovalQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<ApprovalQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<ApprovalQuery, TError, TData>(
      {
    queryKey: ['approval', variables],
    queryFn: fetcher<ApprovalQuery, ApprovalQueryVariables>(ApprovalDocument).bind(null, variables),
    ...options
  }
    )};

export const ApprovalsDocument = `
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

export const useApprovalsQuery = <
      TData = ApprovalsQuery,
      TError = unknown
    >(
      variables?: ApprovalsQueryVariables,
      options?: Omit<UseQueryOptions<ApprovalsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<ApprovalsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<ApprovalsQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['approvals'] : ['approvals', variables],
    queryFn: fetcher<ApprovalsQuery, ApprovalsQueryVariables>(ApprovalsDocument).bind(null, variables),
    ...options
  }
    )};

export const ApprovalForAllDocument = `
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

export const useApprovalForAllQuery = <
      TData = ApprovalForAllQuery,
      TError = unknown
    >(
      variables: ApprovalForAllQueryVariables,
      options?: Omit<UseQueryOptions<ApprovalForAllQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<ApprovalForAllQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<ApprovalForAllQuery, TError, TData>(
      {
    queryKey: ['approvalForAll', variables],
    queryFn: fetcher<ApprovalForAllQuery, ApprovalForAllQueryVariables>(ApprovalForAllDocument).bind(null, variables),
    ...options
  }
    )};

export const ApprovalForAllsDocument = `
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

export const useApprovalForAllsQuery = <
      TData = ApprovalForAllsQuery,
      TError = unknown
    >(
      variables?: ApprovalForAllsQueryVariables,
      options?: Omit<UseQueryOptions<ApprovalForAllsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<ApprovalForAllsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<ApprovalForAllsQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['approvalForAlls'] : ['approvalForAlls', variables],
    queryFn: fetcher<ApprovalForAllsQuery, ApprovalForAllsQueryVariables>(ApprovalForAllsDocument).bind(null, variables),
    ...options
  }
    )};

export const BeaconUpgradedDocument = `
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

export const useBeaconUpgradedQuery = <
      TData = BeaconUpgradedQuery,
      TError = unknown
    >(
      variables: BeaconUpgradedQueryVariables,
      options?: Omit<UseQueryOptions<BeaconUpgradedQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<BeaconUpgradedQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<BeaconUpgradedQuery, TError, TData>(
      {
    queryKey: ['beaconUpgraded', variables],
    queryFn: fetcher<BeaconUpgradedQuery, BeaconUpgradedQueryVariables>(BeaconUpgradedDocument).bind(null, variables),
    ...options
  }
    )};

export const BeaconUpgradedsDocument = `
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

export const useBeaconUpgradedsQuery = <
      TData = BeaconUpgradedsQuery,
      TError = unknown
    >(
      variables?: BeaconUpgradedsQueryVariables,
      options?: Omit<UseQueryOptions<BeaconUpgradedsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<BeaconUpgradedsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<BeaconUpgradedsQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['beaconUpgradeds'] : ['beaconUpgradeds', variables],
    queryFn: fetcher<BeaconUpgradedsQuery, BeaconUpgradedsQueryVariables>(BeaconUpgradedsDocument).bind(null, variables),
    ...options
  }
    )};

export const InitializedDocument = `
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

export const useInitializedQuery = <
      TData = InitializedQuery,
      TError = unknown
    >(
      variables: InitializedQueryVariables,
      options?: Omit<UseQueryOptions<InitializedQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<InitializedQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<InitializedQuery, TError, TData>(
      {
    queryKey: ['initialized', variables],
    queryFn: fetcher<InitializedQuery, InitializedQueryVariables>(InitializedDocument).bind(null, variables),
    ...options
  }
    )};

export const InitializedsDocument = `
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

export const useInitializedsQuery = <
      TData = InitializedsQuery,
      TError = unknown
    >(
      variables?: InitializedsQueryVariables,
      options?: Omit<UseQueryOptions<InitializedsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<InitializedsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<InitializedsQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['initializeds'] : ['initializeds', variables],
    queryFn: fetcher<InitializedsQuery, InitializedsQueryVariables>(InitializedsDocument).bind(null, variables),
    ...options
  }
    )};

export const OwnershipTransferredDocument = `
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

export const useOwnershipTransferredQuery = <
      TData = OwnershipTransferredQuery,
      TError = unknown
    >(
      variables: OwnershipTransferredQueryVariables,
      options?: Omit<UseQueryOptions<OwnershipTransferredQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<OwnershipTransferredQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<OwnershipTransferredQuery, TError, TData>(
      {
    queryKey: ['ownershipTransferred', variables],
    queryFn: fetcher<OwnershipTransferredQuery, OwnershipTransferredQueryVariables>(OwnershipTransferredDocument).bind(null, variables),
    ...options
  }
    )};

export const OwnershipTransferredsDocument = `
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

export const useOwnershipTransferredsQuery = <
      TData = OwnershipTransferredsQuery,
      TError = unknown
    >(
      variables?: OwnershipTransferredsQueryVariables,
      options?: Omit<UseQueryOptions<OwnershipTransferredsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<OwnershipTransferredsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<OwnershipTransferredsQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['ownershipTransferreds'] : ['ownershipTransferreds', variables],
    queryFn: fetcher<OwnershipTransferredsQuery, OwnershipTransferredsQueryVariables>(OwnershipTransferredsDocument).bind(null, variables),
    ...options
  }
    )};

export const TransferDocument = `
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

export const useTransferQuery = <
      TData = TransferQuery,
      TError = unknown
    >(
      variables: TransferQueryVariables,
      options?: Omit<UseQueryOptions<TransferQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<TransferQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<TransferQuery, TError, TData>(
      {
    queryKey: ['transfer', variables],
    queryFn: fetcher<TransferQuery, TransferQueryVariables>(TransferDocument).bind(null, variables),
    ...options
  }
    )};

export const TransfersDocument = `
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

export const useTransfersQuery = <
      TData = TransfersQuery,
      TError = unknown
    >(
      variables?: TransfersQueryVariables,
      options?: Omit<UseQueryOptions<TransfersQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<TransfersQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<TransfersQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['transfers'] : ['transfers', variables],
    queryFn: fetcher<TransfersQuery, TransfersQueryVariables>(TransfersDocument).bind(null, variables),
    ...options
  }
    )};

export const UpgradedDocument = `
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

export const useUpgradedQuery = <
      TData = UpgradedQuery,
      TError = unknown
    >(
      variables: UpgradedQueryVariables,
      options?: Omit<UseQueryOptions<UpgradedQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<UpgradedQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<UpgradedQuery, TError, TData>(
      {
    queryKey: ['upgraded', variables],
    queryFn: fetcher<UpgradedQuery, UpgradedQueryVariables>(UpgradedDocument).bind(null, variables),
    ...options
  }
    )};

export const UpgradedsDocument = `
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

export const useUpgradedsQuery = <
      TData = UpgradedsQuery,
      TError = unknown
    >(
      variables?: UpgradedsQueryVariables,
      options?: Omit<UseQueryOptions<UpgradedsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<UpgradedsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<UpgradedsQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['upgradeds'] : ['upgradeds', variables],
    queryFn: fetcher<UpgradedsQuery, UpgradedsQueryVariables>(UpgradedsDocument).bind(null, variables),
    ...options
  }
    )};

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
  BigInt: { input: any; output: any; }
};

export type AdGroup = {
  __typename?: 'AdGroup';
  adSpaces?: Maybe<AdSpacePage>;
  beneficiary: Scalars['String']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  metadata?: Maybe<AdGroupMetadata>;
  metadataId?: Maybe<Scalars['String']['output']>;
};


export type AdGroupAdSpacesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<AdSpaceFilter>;
};

export type AdGroupFilter = {
  AND?: InputMaybe<Array<InputMaybe<AdGroupFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AdGroupFilter>>>;
  beneficiary?: InputMaybe<Scalars['String']['input']>;
  beneficiary_contains?: InputMaybe<Scalars['String']['input']>;
  beneficiary_ends_with?: InputMaybe<Scalars['String']['input']>;
  beneficiary_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  beneficiary_not?: InputMaybe<Scalars['String']['input']>;
  beneficiary_not_contains?: InputMaybe<Scalars['String']['input']>;
  beneficiary_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  beneficiary_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  beneficiary_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  beneficiary_starts_with?: InputMaybe<Scalars['String']['input']>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  metadataId?: InputMaybe<Scalars['String']['input']>;
  metadataId_contains?: InputMaybe<Scalars['String']['input']>;
  metadataId_ends_with?: InputMaybe<Scalars['String']['input']>;
  metadataId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metadataId_not?: InputMaybe<Scalars['String']['input']>;
  metadataId_not_contains?: InputMaybe<Scalars['String']['input']>;
  metadataId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  metadataId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metadataId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  metadataId_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type AdGroupMetadata = {
  __typename?: 'AdGroupMetadata';
  banner?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type AdGroupMetadataFilter = {
  AND?: InputMaybe<Array<InputMaybe<AdGroupMetadataFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AdGroupMetadataFilter>>>;
  banner?: InputMaybe<Scalars['String']['input']>;
  banner_contains?: InputMaybe<Scalars['String']['input']>;
  banner_ends_with?: InputMaybe<Scalars['String']['input']>;
  banner_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  banner_not?: InputMaybe<Scalars['String']['input']>;
  banner_not_contains?: InputMaybe<Scalars['String']['input']>;
  banner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  banner_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  banner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  banner_starts_with?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  image_contains?: InputMaybe<Scalars['String']['input']>;
  image_ends_with?: InputMaybe<Scalars['String']['input']>;
  image_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_not?: InputMaybe<Scalars['String']['input']>;
  image_not_contains?: InputMaybe<Scalars['String']['input']>;
  image_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  image_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  image_starts_with?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type AdGroupMetadataPage = {
  __typename?: 'AdGroupMetadataPage';
  items: Array<AdGroupMetadata>;
  pageInfo: PageInfo;
};

export type AdGroupPage = {
  __typename?: 'AdGroupPage';
  items: Array<AdGroup>;
  pageInfo: PageInfo;
};

export type AdSpace = {
  __typename?: 'AdSpace';
  adGroup: AdGroup;
  adGroupId: Scalars['String']['output'];
  currentMetadata?: Maybe<AdSpaceMetadata>;
  currentMetadataId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  listing: Listing;
  listingId: Scalars['String']['output'];
  metadatas?: Maybe<AdSpaceMetadataPage>;
  owner: Scalars['String']['output'];
  tokenX: TokenX;
  tokenXId: Scalars['String']['output'];
  transactionHash: Scalars['String']['output'];
};


export type AdSpaceMetadatasArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<AdSpaceMetadataFilter>;
};

export type AdSpaceFilter = {
  AND?: InputMaybe<Array<InputMaybe<AdSpaceFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AdSpaceFilter>>>;
  adGroupId?: InputMaybe<Scalars['String']['input']>;
  adGroupId_contains?: InputMaybe<Scalars['String']['input']>;
  adGroupId_ends_with?: InputMaybe<Scalars['String']['input']>;
  adGroupId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  adGroupId_not?: InputMaybe<Scalars['String']['input']>;
  adGroupId_not_contains?: InputMaybe<Scalars['String']['input']>;
  adGroupId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  adGroupId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  adGroupId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  adGroupId_starts_with?: InputMaybe<Scalars['String']['input']>;
  currentMetadataId?: InputMaybe<Scalars['String']['input']>;
  currentMetadataId_contains?: InputMaybe<Scalars['String']['input']>;
  currentMetadataId_ends_with?: InputMaybe<Scalars['String']['input']>;
  currentMetadataId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  currentMetadataId_not?: InputMaybe<Scalars['String']['input']>;
  currentMetadataId_not_contains?: InputMaybe<Scalars['String']['input']>;
  currentMetadataId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  currentMetadataId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  currentMetadataId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  currentMetadataId_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  listingId?: InputMaybe<Scalars['String']['input']>;
  listingId_contains?: InputMaybe<Scalars['String']['input']>;
  listingId_ends_with?: InputMaybe<Scalars['String']['input']>;
  listingId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  listingId_not?: InputMaybe<Scalars['String']['input']>;
  listingId_not_contains?: InputMaybe<Scalars['String']['input']>;
  listingId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  listingId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  listingId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  listingId_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  owner_contains?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  owner_not?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenXId?: InputMaybe<Scalars['String']['input']>;
  tokenXId_contains?: InputMaybe<Scalars['String']['input']>;
  tokenXId_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenXId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tokenXId_not?: InputMaybe<Scalars['String']['input']>;
  tokenXId_not_contains?: InputMaybe<Scalars['String']['input']>;
  tokenXId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenXId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tokenXId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenXId_starts_with?: InputMaybe<Scalars['String']['input']>;
  transactionHash?: InputMaybe<Scalars['String']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['String']['input']>;
  transactionHash_ends_with?: InputMaybe<Scalars['String']['input']>;
  transactionHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  transactionHash_not?: InputMaybe<Scalars['String']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  transactionHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transactionHash_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  transactionHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transactionHash_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type AdSpaceMetadata = {
  __typename?: 'AdSpaceMetadata';
  adSpace: AdSpace;
  adSpaceId: Scalars['String']['output'];
  animationUrl?: Maybe<Scalars['String']['output']>;
  aspectRatio: Scalars['String']['output'];
  attestation?: Maybe<Attestation>;
  attestationId?: Maybe<Scalars['String']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  description: Scalars['String']['output'];
  externalUrl?: Maybe<Scalars['String']['output']>;
  frameRedirectUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  image: Scalars['String']['output'];
  imageGatewayUri: Scalars['String']['output'];
  name: Scalars['String']['output'];
  noBillboard?: Maybe<Scalars['Boolean']['output']>;
  transactionHash: Scalars['String']['output'];
};

export type AdSpaceMetadataFilter = {
  AND?: InputMaybe<Array<InputMaybe<AdSpaceMetadataFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AdSpaceMetadataFilter>>>;
  adSpaceId?: InputMaybe<Scalars['String']['input']>;
  adSpaceId_contains?: InputMaybe<Scalars['String']['input']>;
  adSpaceId_ends_with?: InputMaybe<Scalars['String']['input']>;
  adSpaceId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  adSpaceId_not?: InputMaybe<Scalars['String']['input']>;
  adSpaceId_not_contains?: InputMaybe<Scalars['String']['input']>;
  adSpaceId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  adSpaceId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  adSpaceId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  adSpaceId_starts_with?: InputMaybe<Scalars['String']['input']>;
  animationUrl?: InputMaybe<Scalars['String']['input']>;
  animationUrl_contains?: InputMaybe<Scalars['String']['input']>;
  animationUrl_ends_with?: InputMaybe<Scalars['String']['input']>;
  animationUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  animationUrl_not?: InputMaybe<Scalars['String']['input']>;
  animationUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  animationUrl_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  animationUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  animationUrl_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  animationUrl_starts_with?: InputMaybe<Scalars['String']['input']>;
  aspectRatio?: InputMaybe<Scalars['String']['input']>;
  aspectRatio_contains?: InputMaybe<Scalars['String']['input']>;
  aspectRatio_ends_with?: InputMaybe<Scalars['String']['input']>;
  aspectRatio_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  aspectRatio_not?: InputMaybe<Scalars['String']['input']>;
  aspectRatio_not_contains?: InputMaybe<Scalars['String']['input']>;
  aspectRatio_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  aspectRatio_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  aspectRatio_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  aspectRatio_starts_with?: InputMaybe<Scalars['String']['input']>;
  attestationId?: InputMaybe<Scalars['String']['input']>;
  attestationId_contains?: InputMaybe<Scalars['String']['input']>;
  attestationId_ends_with?: InputMaybe<Scalars['String']['input']>;
  attestationId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  attestationId_not?: InputMaybe<Scalars['String']['input']>;
  attestationId_not_contains?: InputMaybe<Scalars['String']['input']>;
  attestationId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  attestationId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  attestationId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  attestationId_starts_with?: InputMaybe<Scalars['String']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  externalUrl?: InputMaybe<Scalars['String']['input']>;
  externalUrl_contains?: InputMaybe<Scalars['String']['input']>;
  externalUrl_ends_with?: InputMaybe<Scalars['String']['input']>;
  externalUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalUrl_not?: InputMaybe<Scalars['String']['input']>;
  externalUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  externalUrl_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  externalUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalUrl_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  externalUrl_starts_with?: InputMaybe<Scalars['String']['input']>;
  frameRedirectUrl?: InputMaybe<Scalars['String']['input']>;
  frameRedirectUrl_contains?: InputMaybe<Scalars['String']['input']>;
  frameRedirectUrl_ends_with?: InputMaybe<Scalars['String']['input']>;
  frameRedirectUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  frameRedirectUrl_not?: InputMaybe<Scalars['String']['input']>;
  frameRedirectUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  frameRedirectUrl_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  frameRedirectUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  frameRedirectUrl_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  frameRedirectUrl_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  imageGatewayUri?: InputMaybe<Scalars['String']['input']>;
  imageGatewayUri_contains?: InputMaybe<Scalars['String']['input']>;
  imageGatewayUri_ends_with?: InputMaybe<Scalars['String']['input']>;
  imageGatewayUri_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  imageGatewayUri_not?: InputMaybe<Scalars['String']['input']>;
  imageGatewayUri_not_contains?: InputMaybe<Scalars['String']['input']>;
  imageGatewayUri_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  imageGatewayUri_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  imageGatewayUri_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  imageGatewayUri_starts_with?: InputMaybe<Scalars['String']['input']>;
  image_contains?: InputMaybe<Scalars['String']['input']>;
  image_ends_with?: InputMaybe<Scalars['String']['input']>;
  image_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_not?: InputMaybe<Scalars['String']['input']>;
  image_not_contains?: InputMaybe<Scalars['String']['input']>;
  image_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  image_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  image_starts_with?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  noBillboard?: InputMaybe<Scalars['Boolean']['input']>;
  noBillboard_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  noBillboard_not?: InputMaybe<Scalars['Boolean']['input']>;
  noBillboard_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  transactionHash?: InputMaybe<Scalars['String']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['String']['input']>;
  transactionHash_ends_with?: InputMaybe<Scalars['String']['input']>;
  transactionHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  transactionHash_not?: InputMaybe<Scalars['String']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  transactionHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transactionHash_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  transactionHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transactionHash_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type AdSpaceMetadataPage = {
  __typename?: 'AdSpaceMetadataPage';
  items: Array<AdSpaceMetadata>;
  pageInfo: PageInfo;
};

export type AdSpacePage = {
  __typename?: 'AdSpacePage';
  items: Array<AdSpace>;
  pageInfo: PageInfo;
};

export type Attestation = {
  __typename?: 'Attestation';
  id: Scalars['String']['output'];
  revoked?: Maybe<Scalars['Boolean']['output']>;
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['String']['output'];
};

export type AttestationFilter = {
  AND?: InputMaybe<Array<InputMaybe<AttestationFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AttestationFilter>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  revoked?: InputMaybe<Scalars['Boolean']['input']>;
  revoked_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  revoked_not?: InputMaybe<Scalars['Boolean']['input']>;
  revoked_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  transactionHash?: InputMaybe<Scalars['String']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['String']['input']>;
  transactionHash_ends_with?: InputMaybe<Scalars['String']['input']>;
  transactionHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  transactionHash_not?: InputMaybe<Scalars['String']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  transactionHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transactionHash_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  transactionHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transactionHash_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type AttestationPage = {
  __typename?: 'AttestationPage';
  items: Array<Attestation>;
  pageInfo: PageInfo;
};

export type Listing = {
  __typename?: 'Listing';
  assetContract: Scalars['String']['output'];
  currency: Scalars['String']['output'];
  endTimestamp: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  listingCreator: Scalars['String']['output'];
  listingId: Scalars['BigInt']['output'];
  listingOwner: Scalars['String']['output'];
  pricePerToken: Scalars['BigInt']['output'];
  quantity: Scalars['BigInt']['output'];
  reserved: Scalars['Boolean']['output'];
  startTimestamp: Scalars['BigInt']['output'];
  status: Scalars['Int']['output'];
  taxBeneficiary: Scalars['String']['output'];
  taxRate: Scalars['BigInt']['output'];
  tokenId: Scalars['BigInt']['output'];
  tokenType: Scalars['Int']['output'];
};

export type ListingFilter = {
  AND?: InputMaybe<Array<InputMaybe<ListingFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ListingFilter>>>;
  assetContract?: InputMaybe<Scalars['String']['input']>;
  assetContract_contains?: InputMaybe<Scalars['String']['input']>;
  assetContract_ends_with?: InputMaybe<Scalars['String']['input']>;
  assetContract_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  assetContract_not?: InputMaybe<Scalars['String']['input']>;
  assetContract_not_contains?: InputMaybe<Scalars['String']['input']>;
  assetContract_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  assetContract_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  assetContract_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  assetContract_starts_with?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  currency_contains?: InputMaybe<Scalars['String']['input']>;
  currency_ends_with?: InputMaybe<Scalars['String']['input']>;
  currency_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  currency_not?: InputMaybe<Scalars['String']['input']>;
  currency_not_contains?: InputMaybe<Scalars['String']['input']>;
  currency_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  currency_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  currency_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  currency_starts_with?: InputMaybe<Scalars['String']['input']>;
  endTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  endTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  endTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  endTimestamp_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  endTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  endTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  endTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  endTimestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  listingCreator?: InputMaybe<Scalars['String']['input']>;
  listingCreator_contains?: InputMaybe<Scalars['String']['input']>;
  listingCreator_ends_with?: InputMaybe<Scalars['String']['input']>;
  listingCreator_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  listingCreator_not?: InputMaybe<Scalars['String']['input']>;
  listingCreator_not_contains?: InputMaybe<Scalars['String']['input']>;
  listingCreator_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  listingCreator_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  listingCreator_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  listingCreator_starts_with?: InputMaybe<Scalars['String']['input']>;
  listingId?: InputMaybe<Scalars['BigInt']['input']>;
  listingId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  listingId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  listingId_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  listingId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  listingId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  listingId_not?: InputMaybe<Scalars['BigInt']['input']>;
  listingId_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  listingOwner?: InputMaybe<Scalars['String']['input']>;
  listingOwner_contains?: InputMaybe<Scalars['String']['input']>;
  listingOwner_ends_with?: InputMaybe<Scalars['String']['input']>;
  listingOwner_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  listingOwner_not?: InputMaybe<Scalars['String']['input']>;
  listingOwner_not_contains?: InputMaybe<Scalars['String']['input']>;
  listingOwner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  listingOwner_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  listingOwner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  listingOwner_starts_with?: InputMaybe<Scalars['String']['input']>;
  pricePerToken?: InputMaybe<Scalars['BigInt']['input']>;
  pricePerToken_gt?: InputMaybe<Scalars['BigInt']['input']>;
  pricePerToken_gte?: InputMaybe<Scalars['BigInt']['input']>;
  pricePerToken_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  pricePerToken_lt?: InputMaybe<Scalars['BigInt']['input']>;
  pricePerToken_lte?: InputMaybe<Scalars['BigInt']['input']>;
  pricePerToken_not?: InputMaybe<Scalars['BigInt']['input']>;
  pricePerToken_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  quantity?: InputMaybe<Scalars['BigInt']['input']>;
  quantity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  quantity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  quantity_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  quantity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  quantity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  quantity_not?: InputMaybe<Scalars['BigInt']['input']>;
  quantity_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  reserved?: InputMaybe<Scalars['Boolean']['input']>;
  reserved_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  reserved_not?: InputMaybe<Scalars['Boolean']['input']>;
  reserved_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  startTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  startTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  startTimestamp_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  startTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  startTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  startTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  startTimestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  status?: InputMaybe<Scalars['Int']['input']>;
  status_gt?: InputMaybe<Scalars['Int']['input']>;
  status_gte?: InputMaybe<Scalars['Int']['input']>;
  status_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  status_lt?: InputMaybe<Scalars['Int']['input']>;
  status_lte?: InputMaybe<Scalars['Int']['input']>;
  status_not?: InputMaybe<Scalars['Int']['input']>;
  status_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  taxBeneficiary?: InputMaybe<Scalars['String']['input']>;
  taxBeneficiary_contains?: InputMaybe<Scalars['String']['input']>;
  taxBeneficiary_ends_with?: InputMaybe<Scalars['String']['input']>;
  taxBeneficiary_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  taxBeneficiary_not?: InputMaybe<Scalars['String']['input']>;
  taxBeneficiary_not_contains?: InputMaybe<Scalars['String']['input']>;
  taxBeneficiary_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  taxBeneficiary_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  taxBeneficiary_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  taxBeneficiary_starts_with?: InputMaybe<Scalars['String']['input']>;
  taxRate?: InputMaybe<Scalars['BigInt']['input']>;
  taxRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  taxRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  taxRate_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  taxRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  taxRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  taxRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  taxRate_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  tokenId?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  tokenType?: InputMaybe<Scalars['Int']['input']>;
  tokenType_gt?: InputMaybe<Scalars['Int']['input']>;
  tokenType_gte?: InputMaybe<Scalars['Int']['input']>;
  tokenType_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  tokenType_lt?: InputMaybe<Scalars['Int']['input']>;
  tokenType_lte?: InputMaybe<Scalars['Int']['input']>;
  tokenType_not?: InputMaybe<Scalars['Int']['input']>;
  tokenType_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type ListingPage = {
  __typename?: 'ListingPage';
  items: Array<Listing>;
  pageInfo: PageInfo;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  adGroup?: Maybe<AdGroup>;
  adGroupMetadata?: Maybe<AdGroupMetadata>;
  adGroupMetadatas: AdGroupMetadataPage;
  adGroups: AdGroupPage;
  adSpace?: Maybe<AdSpace>;
  adSpaceMetadata?: Maybe<AdSpaceMetadata>;
  adSpaceMetadatas: AdSpaceMetadataPage;
  adSpaces: AdSpacePage;
  attestation?: Maybe<Attestation>;
  attestations: AttestationPage;
  listing?: Maybe<Listing>;
  listings: ListingPage;
  tokenX?: Maybe<TokenX>;
  tokenXs: TokenXPage;
};


export type QueryAdGroupArgs = {
  id: Scalars['String']['input'];
};


export type QueryAdGroupMetadataArgs = {
  id: Scalars['String']['input'];
};


export type QueryAdGroupMetadatasArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<AdGroupMetadataFilter>;
};


export type QueryAdGroupsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<AdGroupFilter>;
};


export type QueryAdSpaceArgs = {
  id: Scalars['String']['input'];
};


export type QueryAdSpaceMetadataArgs = {
  id: Scalars['String']['input'];
};


export type QueryAdSpaceMetadatasArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<AdSpaceMetadataFilter>;
};


export type QueryAdSpacesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<AdSpaceFilter>;
};


export type QueryAttestationArgs = {
  id: Scalars['String']['input'];
};


export type QueryAttestationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<AttestationFilter>;
};


export type QueryListingArgs = {
  id: Scalars['String']['input'];
};


export type QueryListingsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<ListingFilter>;
};


export type QueryTokenXArgs = {
  id: Scalars['String']['input'];
};


export type QueryTokenXsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<TokenXFilter>;
};

export type TokenX = {
  __typename?: 'TokenX';
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  isNativeToken: Scalars['Boolean']['output'];
  superToken: Scalars['String']['output'];
  transactionHash: Scalars['String']['output'];
  underlyingToken: Scalars['String']['output'];
};

export type TokenXFilter = {
  AND?: InputMaybe<Array<InputMaybe<TokenXFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TokenXFilter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  isNativeToken?: InputMaybe<Scalars['Boolean']['input']>;
  isNativeToken_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  isNativeToken_not?: InputMaybe<Scalars['Boolean']['input']>;
  isNativeToken_not_in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  superToken?: InputMaybe<Scalars['String']['input']>;
  superToken_contains?: InputMaybe<Scalars['String']['input']>;
  superToken_ends_with?: InputMaybe<Scalars['String']['input']>;
  superToken_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  superToken_not?: InputMaybe<Scalars['String']['input']>;
  superToken_not_contains?: InputMaybe<Scalars['String']['input']>;
  superToken_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  superToken_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  superToken_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  superToken_starts_with?: InputMaybe<Scalars['String']['input']>;
  transactionHash?: InputMaybe<Scalars['String']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['String']['input']>;
  transactionHash_ends_with?: InputMaybe<Scalars['String']['input']>;
  transactionHash_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  transactionHash_not?: InputMaybe<Scalars['String']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  transactionHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transactionHash_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  transactionHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transactionHash_starts_with?: InputMaybe<Scalars['String']['input']>;
  underlyingToken?: InputMaybe<Scalars['String']['input']>;
  underlyingToken_contains?: InputMaybe<Scalars['String']['input']>;
  underlyingToken_ends_with?: InputMaybe<Scalars['String']['input']>;
  underlyingToken_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  underlyingToken_not?: InputMaybe<Scalars['String']['input']>;
  underlyingToken_not_contains?: InputMaybe<Scalars['String']['input']>;
  underlyingToken_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  underlyingToken_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  underlyingToken_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  underlyingToken_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type TokenXPage = {
  __typename?: 'TokenXPage';
  items: Array<TokenX>;
  pageInfo: PageInfo;
};

export type AdGroupQueryVariables = Exact<{
  id: Scalars['String']['input'];
  adGroup_adSpaces_where?: InputMaybe<AdSpaceFilter>;
  adGroup_adSpaces_orderBy?: InputMaybe<Scalars['String']['input']>;
  adGroup_adSpaces_orderDirection?: InputMaybe<Scalars['String']['input']>;
  adGroup_adSpaces_before?: InputMaybe<Scalars['String']['input']>;
  adGroup_adSpaces_after?: InputMaybe<Scalars['String']['input']>;
  adGroup_adSpaces_limit?: InputMaybe<Scalars['Int']['input']>;
  adGroup_adSpaces_adSpaces_items_items_metadatas_where?: InputMaybe<AdSpaceMetadataFilter>;
  adGroup_adSpaces_adSpaces_items_items_metadatas_orderBy?: InputMaybe<Scalars['String']['input']>;
  adGroup_adSpaces_adSpaces_items_items_metadatas_orderDirection?: InputMaybe<Scalars['String']['input']>;
  adGroup_adSpaces_adSpaces_items_items_metadatas_before?: InputMaybe<Scalars['String']['input']>;
  adGroup_adSpaces_adSpaces_items_items_metadatas_after?: InputMaybe<Scalars['String']['input']>;
  adGroup_adSpaces_adSpaces_items_items_metadatas_limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type AdGroupQuery = { __typename?: 'Query', adGroup?: { __typename?: 'AdGroup', id: string, beneficiary: string, metadataId?: string | null, blockTimestamp: any, adSpaces?: { __typename?: 'AdSpacePage', items: Array<{ __typename?: 'AdSpace', id: string, owner: string, listingId: string, adGroupId: string, currentMetadataId?: string | null, tokenXId: string, transactionHash: string, listing: { __typename?: 'Listing', id: string, listingId: any, tokenId: any, quantity: any, pricePerToken: any, startTimestamp: any, endTimestamp: any, listingCreator: string, listingOwner: string, assetContract: string, currency: string, taxRate: any, taxBeneficiary: string, tokenType: number, status: number, reserved: boolean }, currentMetadata?: { __typename?: 'AdSpaceMetadata', id: string, adSpaceId: string, attestationId?: string | null, name: string, description: string, image: string, imageGatewayUri: string, animationUrl?: string | null, externalUrl?: string | null, aspectRatio: string, frameRedirectUrl?: string | null, noBillboard?: boolean | null, blockNumber: any, transactionHash: string, attestation?: { __typename?: 'Attestation', id: string, revoked?: boolean | null, timestamp: any, transactionHash: string } | null } | null, metadatas?: { __typename?: 'AdSpaceMetadataPage', items: Array<{ __typename?: 'AdSpaceMetadata', id: string, adSpaceId: string, attestationId?: string | null, name: string, description: string, image: string, imageGatewayUri: string, animationUrl?: string | null, externalUrl?: string | null, aspectRatio: string, frameRedirectUrl?: string | null, noBillboard?: boolean | null, blockNumber: any, transactionHash: string }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } | null, tokenX: { __typename?: 'TokenX', id: string, underlyingToken: string, superToken: string, isNativeToken: boolean, blockNumber: any, blockTimestamp: any, transactionHash: string } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } | null, metadata?: { __typename?: 'AdGroupMetadata', id: string, name?: string | null, description?: string | null, image?: string | null, banner?: string | null } | null } | null };

export type AdGroupsQueryVariables = Exact<{
  where?: InputMaybe<AdGroupFilter>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  adGroups_items_items_adSpaces_where?: InputMaybe<AdSpaceFilter>;
  adGroups_items_items_adSpaces_orderBy?: InputMaybe<Scalars['String']['input']>;
  adGroups_items_items_adSpaces_orderDirection?: InputMaybe<Scalars['String']['input']>;
  adGroups_items_items_adSpaces_before?: InputMaybe<Scalars['String']['input']>;
  adGroups_items_items_adSpaces_after?: InputMaybe<Scalars['String']['input']>;
  adGroups_items_items_adSpaces_limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type AdGroupsQuery = { __typename?: 'Query', adGroups: { __typename?: 'AdGroupPage', items: Array<{ __typename?: 'AdGroup', id: string, beneficiary: string, metadataId?: string | null, blockTimestamp: any, adSpaces?: { __typename?: 'AdSpacePage', items: Array<{ __typename?: 'AdSpace', id: string, owner: string, listingId: string, adGroupId: string, currentMetadataId?: string | null, tokenXId: string, transactionHash: string, listing: { __typename?: 'Listing', id: string, listingId: any, tokenId: any, quantity: any, pricePerToken: any, startTimestamp: any, endTimestamp: any, listingCreator: string, listingOwner: string, assetContract: string, currency: string, taxRate: any, taxBeneficiary: string, tokenType: number, status: number, reserved: boolean }, currentMetadata?: { __typename?: 'AdSpaceMetadata', id: string, adSpaceId: string, attestationId?: string | null, name: string, description: string, image: string, imageGatewayUri: string, animationUrl?: string | null, externalUrl?: string | null, aspectRatio: string, frameRedirectUrl?: string | null, noBillboard?: boolean | null, blockNumber: any, transactionHash: string } | null, tokenX: { __typename?: 'TokenX', id: string, underlyingToken: string, superToken: string, isNativeToken: boolean, blockNumber: any, blockTimestamp: any, transactionHash: string } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } | null, metadata?: { __typename?: 'AdGroupMetadata', id: string, name?: string | null, description?: string | null, image?: string | null, banner?: string | null } | null }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type AdGroupMetadataQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type AdGroupMetadataQuery = { __typename?: 'Query', adGroupMetadata?: { __typename?: 'AdGroupMetadata', id: string, name?: string | null, description?: string | null, image?: string | null, banner?: string | null } | null };

export type AdGroupMetadatasQueryVariables = Exact<{
  where?: InputMaybe<AdGroupMetadataFilter>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type AdGroupMetadatasQuery = { __typename?: 'Query', adGroupMetadatas: { __typename?: 'AdGroupMetadataPage', items: Array<{ __typename?: 'AdGroupMetadata', id: string, name?: string | null, description?: string | null, image?: string | null, banner?: string | null }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type AdSpaceQueryVariables = Exact<{
  id: Scalars['String']['input'];
  adSpace_adGroup_adGroup_adSpaces_where?: InputMaybe<AdSpaceFilter>;
  adSpace_adGroup_adGroup_adSpaces_orderBy?: InputMaybe<Scalars['String']['input']>;
  adSpace_adGroup_adGroup_adSpaces_orderDirection?: InputMaybe<Scalars['String']['input']>;
  adSpace_adGroup_adGroup_adSpaces_before?: InputMaybe<Scalars['String']['input']>;
  adSpace_adGroup_adGroup_adSpaces_after?: InputMaybe<Scalars['String']['input']>;
  adSpace_adGroup_adGroup_adSpaces_limit?: InputMaybe<Scalars['Int']['input']>;
  adSpace_metadatas_where?: InputMaybe<AdSpaceMetadataFilter>;
  adSpace_metadatas_orderBy?: InputMaybe<Scalars['String']['input']>;
  adSpace_metadatas_orderDirection?: InputMaybe<Scalars['String']['input']>;
  adSpace_metadatas_before?: InputMaybe<Scalars['String']['input']>;
  adSpace_metadatas_after?: InputMaybe<Scalars['String']['input']>;
  adSpace_metadatas_limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type AdSpaceQuery = { __typename?: 'Query', adSpace?: { __typename?: 'AdSpace', id: string, owner: string, listingId: string, adGroupId: string, currentMetadataId?: string | null, tokenXId: string, transactionHash: string, listing: { __typename?: 'Listing', id: string, listingId: any, tokenId: any, quantity: any, pricePerToken: any, startTimestamp: any, endTimestamp: any, listingCreator: string, listingOwner: string, assetContract: string, currency: string, taxRate: any, taxBeneficiary: string, tokenType: number, status: number, reserved: boolean }, adGroup: { __typename?: 'AdGroup', id: string, beneficiary: string, metadataId?: string | null, blockTimestamp: any, adSpaces?: { __typename?: 'AdSpacePage', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } | null, metadata?: { __typename?: 'AdGroupMetadata', id: string, name?: string | null, description?: string | null, image?: string | null, banner?: string | null } | null }, currentMetadata?: { __typename?: 'AdSpaceMetadata', id: string, adSpaceId: string, attestationId?: string | null, name: string, description: string, image: string, imageGatewayUri: string, animationUrl?: string | null, externalUrl?: string | null, aspectRatio: string, frameRedirectUrl?: string | null, noBillboard?: boolean | null, blockNumber: any, transactionHash: string, attestation?: { __typename?: 'Attestation', id: string, revoked?: boolean | null, timestamp: any, transactionHash: string } | null } | null, metadatas?: { __typename?: 'AdSpaceMetadataPage', items: Array<{ __typename?: 'AdSpaceMetadata', id: string, adSpaceId: string, attestationId?: string | null, name: string, description: string, image: string, imageGatewayUri: string, animationUrl?: string | null, externalUrl?: string | null, aspectRatio: string, frameRedirectUrl?: string | null, noBillboard?: boolean | null, blockNumber: any, transactionHash: string, attestation?: { __typename?: 'Attestation', id: string, revoked?: boolean | null, timestamp: any, transactionHash: string } | null }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } | null, tokenX: { __typename?: 'TokenX', id: string, underlyingToken: string, superToken: string, isNativeToken: boolean, blockNumber: any, blockTimestamp: any, transactionHash: string } } | null };

export type AdSpacesQueryVariables = Exact<{
  where?: InputMaybe<AdSpaceFilter>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  adSpaces_items_items_metadatas_where?: InputMaybe<AdSpaceMetadataFilter>;
  adSpaces_items_items_metadatas_orderBy?: InputMaybe<Scalars['String']['input']>;
  adSpaces_items_items_metadatas_orderDirection?: InputMaybe<Scalars['String']['input']>;
  adSpaces_items_items_metadatas_before?: InputMaybe<Scalars['String']['input']>;
  adSpaces_items_items_metadatas_after?: InputMaybe<Scalars['String']['input']>;
  adSpaces_items_items_metadatas_limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type AdSpacesQuery = { __typename?: 'Query', adSpaces: { __typename?: 'AdSpacePage', items: Array<{ __typename?: 'AdSpace', id: string, owner: string, listingId: string, adGroupId: string, currentMetadataId?: string | null, tokenXId: string, transactionHash: string, listing: { __typename?: 'Listing', id: string, listingId: any, tokenId: any, quantity: any, pricePerToken: any, startTimestamp: any, endTimestamp: any, listingCreator: string, listingOwner: string, assetContract: string, currency: string, taxRate: any, taxBeneficiary: string, tokenType: number, status: number, reserved: boolean }, adGroup: { __typename?: 'AdGroup', id: string, beneficiary: string, metadataId?: string | null, blockTimestamp: any, metadata?: { __typename?: 'AdGroupMetadata', id: string, name?: string | null, description?: string | null, image?: string | null, banner?: string | null } | null }, currentMetadata?: { __typename?: 'AdSpaceMetadata', id: string, adSpaceId: string, attestationId?: string | null, name: string, description: string, image: string, imageGatewayUri: string, animationUrl?: string | null, externalUrl?: string | null, aspectRatio: string, frameRedirectUrl?: string | null, noBillboard?: boolean | null, blockNumber: any, transactionHash: string, attestation?: { __typename?: 'Attestation', id: string, revoked?: boolean | null, timestamp: any, transactionHash: string } | null } | null, metadatas?: { __typename?: 'AdSpaceMetadataPage', items: Array<{ __typename?: 'AdSpaceMetadata', id: string, adSpaceId: string, attestationId?: string | null, name: string, description: string, image: string, imageGatewayUri: string, animationUrl?: string | null, externalUrl?: string | null, aspectRatio: string, frameRedirectUrl?: string | null, noBillboard?: boolean | null, blockNumber: any, transactionHash: string, attestation?: { __typename?: 'Attestation', id: string, revoked?: boolean | null, timestamp: any, transactionHash: string } | null }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } | null, tokenX: { __typename?: 'TokenX', id: string, underlyingToken: string, superToken: string, isNativeToken: boolean, blockNumber: any, blockTimestamp: any, transactionHash: string } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type AdSpaceMetadataQueryVariables = Exact<{
  id: Scalars['String']['input'];
  adSpaceMetadata_adSpace_adSpace_adGroup_adGroup_adSpaces_where?: InputMaybe<AdSpaceFilter>;
  adSpaceMetadata_adSpace_adSpace_adGroup_adGroup_adSpaces_orderBy?: InputMaybe<Scalars['String']['input']>;
  adSpaceMetadata_adSpace_adSpace_adGroup_adGroup_adSpaces_orderDirection?: InputMaybe<Scalars['String']['input']>;
  adSpaceMetadata_adSpace_adSpace_adGroup_adGroup_adSpaces_before?: InputMaybe<Scalars['String']['input']>;
  adSpaceMetadata_adSpace_adSpace_adGroup_adGroup_adSpaces_after?: InputMaybe<Scalars['String']['input']>;
  adSpaceMetadata_adSpace_adSpace_adGroup_adGroup_adSpaces_limit?: InputMaybe<Scalars['Int']['input']>;
  adSpaceMetadata_adSpace_adSpace_metadatas_where?: InputMaybe<AdSpaceMetadataFilter>;
  adSpaceMetadata_adSpace_adSpace_metadatas_orderBy?: InputMaybe<Scalars['String']['input']>;
  adSpaceMetadata_adSpace_adSpace_metadatas_orderDirection?: InputMaybe<Scalars['String']['input']>;
  adSpaceMetadata_adSpace_adSpace_metadatas_before?: InputMaybe<Scalars['String']['input']>;
  adSpaceMetadata_adSpace_adSpace_metadatas_after?: InputMaybe<Scalars['String']['input']>;
  adSpaceMetadata_adSpace_adSpace_metadatas_limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type AdSpaceMetadataQuery = { __typename?: 'Query', adSpaceMetadata?: { __typename?: 'AdSpaceMetadata', id: string, adSpaceId: string, attestationId?: string | null, name: string, description: string, image: string, imageGatewayUri: string, animationUrl?: string | null, externalUrl?: string | null, aspectRatio: string, frameRedirectUrl?: string | null, noBillboard?: boolean | null, blockNumber: any, transactionHash: string, adSpace: { __typename?: 'AdSpace', id: string, owner: string, listingId: string, adGroupId: string, currentMetadataId?: string | null, tokenXId: string, transactionHash: string, listing: { __typename?: 'Listing', id: string, listingId: any, tokenId: any, quantity: any, pricePerToken: any, startTimestamp: any, endTimestamp: any, listingCreator: string, listingOwner: string, assetContract: string, currency: string, taxRate: any, taxBeneficiary: string, tokenType: number, status: number, reserved: boolean }, adGroup: { __typename?: 'AdGroup', id: string, beneficiary: string, metadataId?: string | null, blockTimestamp: any, adSpaces?: { __typename?: 'AdSpacePage', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } | null, metadata?: { __typename?: 'AdGroupMetadata', id: string, name?: string | null, description?: string | null, image?: string | null, banner?: string | null } | null }, metadatas?: { __typename?: 'AdSpaceMetadataPage', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } | null, tokenX: { __typename?: 'TokenX', id: string, underlyingToken: string, superToken: string, isNativeToken: boolean, blockNumber: any, blockTimestamp: any, transactionHash: string } }, attestation?: { __typename?: 'Attestation', id: string, revoked?: boolean | null, timestamp: any, transactionHash: string } | null } | null };

export type AdSpaceMetadatasQueryVariables = Exact<{
  where?: InputMaybe<AdSpaceMetadataFilter>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type AdSpaceMetadatasQuery = { __typename?: 'Query', adSpaceMetadatas: { __typename?: 'AdSpaceMetadataPage', items: Array<{ __typename?: 'AdSpaceMetadata', id: string, adSpaceId: string, attestationId?: string | null, name: string, description: string, image: string, imageGatewayUri: string, animationUrl?: string | null, externalUrl?: string | null, aspectRatio: string, frameRedirectUrl?: string | null, noBillboard?: boolean | null, blockNumber: any, transactionHash: string, adSpace: { __typename?: 'AdSpace', id: string, owner: string, listingId: string, adGroupId: string, currentMetadataId?: string | null, tokenXId: string, transactionHash: string, listing: { __typename?: 'Listing', id: string, listingId: any, tokenId: any, quantity: any, pricePerToken: any, startTimestamp: any, endTimestamp: any, listingCreator: string, listingOwner: string, assetContract: string, currency: string, taxRate: any, taxBeneficiary: string, tokenType: number, status: number, reserved: boolean }, adGroup: { __typename?: 'AdGroup', id: string, beneficiary: string, metadataId?: string | null, blockTimestamp: any, metadata?: { __typename?: 'AdGroupMetadata', id: string, name?: string | null, description?: string | null, image?: string | null, banner?: string | null } | null }, tokenX: { __typename?: 'TokenX', id: string, underlyingToken: string, superToken: string, isNativeToken: boolean, blockNumber: any, blockTimestamp: any, transactionHash: string } }, attestation?: { __typename?: 'Attestation', id: string, revoked?: boolean | null, timestamp: any, transactionHash: string } | null }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type AttestationQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type AttestationQuery = { __typename?: 'Query', attestation?: { __typename?: 'Attestation', id: string, revoked?: boolean | null, timestamp: any, transactionHash: string } | null };

export type AttestationsQueryVariables = Exact<{
  where?: InputMaybe<AttestationFilter>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type AttestationsQuery = { __typename?: 'Query', attestations: { __typename?: 'AttestationPage', items: Array<{ __typename?: 'Attestation', id: string, revoked?: boolean | null, timestamp: any, transactionHash: string }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type TokenXQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type TokenXQuery = { __typename?: 'Query', tokenX?: { __typename?: 'TokenX', id: string, underlyingToken: string, superToken: string, isNativeToken: boolean, blockNumber: any, blockTimestamp: any, transactionHash: string } | null };

export type TokenXsQueryVariables = Exact<{
  where?: InputMaybe<TokenXFilter>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type TokenXsQuery = { __typename?: 'Query', tokenXs: { __typename?: 'TokenXPage', items: Array<{ __typename?: 'TokenX', id: string, underlyingToken: string, superToken: string, isNativeToken: boolean, blockNumber: any, blockTimestamp: any, transactionHash: string }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type ListingQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type ListingQuery = { __typename?: 'Query', listing?: { __typename?: 'Listing', id: string, listingId: any, tokenId: any, quantity: any, pricePerToken: any, startTimestamp: any, endTimestamp: any, listingCreator: string, listingOwner: string, assetContract: string, currency: string, taxRate: any, taxBeneficiary: string, tokenType: number, status: number, reserved: boolean } | null };

export type ListingsQueryVariables = Exact<{
  where?: InputMaybe<ListingFilter>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ListingsQuery = { __typename?: 'Query', listings: { __typename?: 'ListingPage', items: Array<{ __typename?: 'Listing', id: string, listingId: any, tokenId: any, quantity: any, pricePerToken: any, startTimestamp: any, endTimestamp: any, listingCreator: string, listingOwner: string, assetContract: string, currency: string, taxRate: any, taxBeneficiary: string, tokenType: number, status: number, reserved: boolean }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };


export const AdGroupDocument = gql`
    query adGroup($id: String!, $adGroup_adSpaces_where: AdSpaceFilter, $adGroup_adSpaces_orderBy: String, $adGroup_adSpaces_orderDirection: String, $adGroup_adSpaces_before: String, $adGroup_adSpaces_after: String, $adGroup_adSpaces_limit: Int, $adGroup_adSpaces_adSpaces_items_items_metadatas_where: AdSpaceMetadataFilter, $adGroup_adSpaces_adSpaces_items_items_metadatas_orderBy: String, $adGroup_adSpaces_adSpaces_items_items_metadatas_orderDirection: String, $adGroup_adSpaces_adSpaces_items_items_metadatas_before: String, $adGroup_adSpaces_adSpaces_items_items_metadatas_after: String, $adGroup_adSpaces_adSpaces_items_items_metadatas_limit: Int) {
  adGroup(id: $id) {
    id
    beneficiary
    adSpaces(
      where: $adGroup_adSpaces_where
      orderBy: $adGroup_adSpaces_orderBy
      orderDirection: $adGroup_adSpaces_orderDirection
      before: $adGroup_adSpaces_before
      after: $adGroup_adSpaces_after
      limit: $adGroup_adSpaces_limit
    ) {
      items {
        id
        owner
        listingId
        listing {
          id
          listingId
          tokenId
          quantity
          pricePerToken
          startTimestamp
          endTimestamp
          listingCreator
          listingOwner
          assetContract
          currency
          taxRate
          taxBeneficiary
          tokenType
          status
          reserved
        }
        adGroupId
        currentMetadataId
        currentMetadata {
          id
          adSpaceId
          attestationId
          attestation {
            id
            revoked
            timestamp
            transactionHash
          }
          name
          description
          image
          imageGatewayUri
          animationUrl
          externalUrl
          aspectRatio
          frameRedirectUrl
          noBillboard
          blockNumber
          transactionHash
        }
        metadatas(
          where: $adGroup_adSpaces_adSpaces_items_items_metadatas_where
          orderBy: $adGroup_adSpaces_adSpaces_items_items_metadatas_orderBy
          orderDirection: $adGroup_adSpaces_adSpaces_items_items_metadatas_orderDirection
          before: $adGroup_adSpaces_adSpaces_items_items_metadatas_before
          after: $adGroup_adSpaces_adSpaces_items_items_metadatas_after
          limit: $adGroup_adSpaces_adSpaces_items_items_metadatas_limit
        ) {
          items {
            id
            adSpaceId
            attestationId
            name
            description
            image
            imageGatewayUri
            animationUrl
            externalUrl
            aspectRatio
            frameRedirectUrl
            noBillboard
            blockNumber
            transactionHash
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
        }
        tokenXId
        tokenX {
          id
          underlyingToken
          superToken
          isNativeToken
          blockNumber
          blockTimestamp
          transactionHash
        }
        transactionHash
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
    metadataId
    metadata {
      id
      name
      description
      image
      banner
    }
    blockTimestamp
  }
}
    `;
export const AdGroupsDocument = gql`
    query adGroups($where: AdGroupFilter, $orderBy: String, $orderDirection: String, $before: String, $after: String, $limit: Int, $adGroups_items_items_adSpaces_where: AdSpaceFilter, $adGroups_items_items_adSpaces_orderBy: String, $adGroups_items_items_adSpaces_orderDirection: String, $adGroups_items_items_adSpaces_before: String, $adGroups_items_items_adSpaces_after: String, $adGroups_items_items_adSpaces_limit: Int) {
  adGroups(
    where: $where
    orderBy: $orderBy
    orderDirection: $orderDirection
    before: $before
    after: $after
    limit: $limit
  ) {
    items {
      id
      beneficiary
      adSpaces(
        where: $adGroups_items_items_adSpaces_where
        orderBy: $adGroups_items_items_adSpaces_orderBy
        orderDirection: $adGroups_items_items_adSpaces_orderDirection
        before: $adGroups_items_items_adSpaces_before
        after: $adGroups_items_items_adSpaces_after
        limit: $adGroups_items_items_adSpaces_limit
      ) {
        items {
          id
          owner
          listingId
          listing {
            id
            listingId
            tokenId
            quantity
            pricePerToken
            startTimestamp
            endTimestamp
            listingCreator
            listingOwner
            assetContract
            currency
            taxRate
            taxBeneficiary
            tokenType
            status
            reserved
          }
          adGroupId
          currentMetadataId
          currentMetadata {
            id
            adSpaceId
            attestationId
            name
            description
            image
            imageGatewayUri
            animationUrl
            externalUrl
            aspectRatio
            frameRedirectUrl
            noBillboard
            blockNumber
            transactionHash
          }
          tokenXId
          tokenX {
            id
            underlyingToken
            superToken
            isNativeToken
            blockNumber
            blockTimestamp
            transactionHash
          }
          transactionHash
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
      }
      metadataId
      metadata {
        id
        name
        description
        image
        banner
      }
      blockTimestamp
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
}
    `;
export const AdGroupMetadataDocument = gql`
    query adGroupMetadata($id: String!) {
  adGroupMetadata(id: $id) {
    id
    name
    description
    image
    banner
  }
}
    `;
export const AdGroupMetadatasDocument = gql`
    query adGroupMetadatas($where: AdGroupMetadataFilter, $orderBy: String, $orderDirection: String, $before: String, $after: String, $limit: Int) {
  adGroupMetadatas(
    where: $where
    orderBy: $orderBy
    orderDirection: $orderDirection
    before: $before
    after: $after
    limit: $limit
  ) {
    items {
      id
      name
      description
      image
      banner
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
}
    `;
export const AdSpaceDocument = gql`
    query adSpace($id: String!, $adSpace_adGroup_adGroup_adSpaces_where: AdSpaceFilter, $adSpace_adGroup_adGroup_adSpaces_orderBy: String, $adSpace_adGroup_adGroup_adSpaces_orderDirection: String, $adSpace_adGroup_adGroup_adSpaces_before: String, $adSpace_adGroup_adGroup_adSpaces_after: String, $adSpace_adGroup_adGroup_adSpaces_limit: Int, $adSpace_metadatas_where: AdSpaceMetadataFilter, $adSpace_metadatas_orderBy: String, $adSpace_metadatas_orderDirection: String, $adSpace_metadatas_before: String, $adSpace_metadatas_after: String, $adSpace_metadatas_limit: Int) {
  adSpace(id: $id) {
    id
    owner
    listingId
    listing {
      id
      listingId
      tokenId
      quantity
      pricePerToken
      startTimestamp
      endTimestamp
      listingCreator
      listingOwner
      assetContract
      currency
      taxRate
      taxBeneficiary
      tokenType
      status
      reserved
    }
    adGroupId
    adGroup {
      id
      beneficiary
      adSpaces(
        where: $adSpace_adGroup_adGroup_adSpaces_where
        orderBy: $adSpace_adGroup_adGroup_adSpaces_orderBy
        orderDirection: $adSpace_adGroup_adGroup_adSpaces_orderDirection
        before: $adSpace_adGroup_adGroup_adSpaces_before
        after: $adSpace_adGroup_adGroup_adSpaces_after
        limit: $adSpace_adGroup_adGroup_adSpaces_limit
      ) {
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
      }
      metadataId
      metadata {
        id
        name
        description
        image
        banner
      }
      blockTimestamp
    }
    currentMetadataId
    currentMetadata {
      id
      adSpaceId
      attestationId
      attestation {
        id
        revoked
        timestamp
        transactionHash
      }
      name
      description
      image
      imageGatewayUri
      animationUrl
      externalUrl
      aspectRatio
      frameRedirectUrl
      noBillboard
      blockNumber
      transactionHash
    }
    metadatas(
      where: $adSpace_metadatas_where
      orderBy: $adSpace_metadatas_orderBy
      orderDirection: $adSpace_metadatas_orderDirection
      before: $adSpace_metadatas_before
      after: $adSpace_metadatas_after
      limit: $adSpace_metadatas_limit
    ) {
      items {
        id
        adSpaceId
        attestationId
        attestation {
          id
          revoked
          timestamp
          transactionHash
        }
        name
        description
        image
        imageGatewayUri
        animationUrl
        externalUrl
        aspectRatio
        frameRedirectUrl
        noBillboard
        blockNumber
        transactionHash
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
    tokenXId
    tokenX {
      id
      underlyingToken
      superToken
      isNativeToken
      blockNumber
      blockTimestamp
      transactionHash
    }
    transactionHash
  }
}
    `;
export const AdSpacesDocument = gql`
    query adSpaces($where: AdSpaceFilter, $orderBy: String, $orderDirection: String, $before: String, $after: String, $limit: Int, $adSpaces_items_items_metadatas_where: AdSpaceMetadataFilter, $adSpaces_items_items_metadatas_orderBy: String, $adSpaces_items_items_metadatas_orderDirection: String, $adSpaces_items_items_metadatas_before: String, $adSpaces_items_items_metadatas_after: String, $adSpaces_items_items_metadatas_limit: Int) {
  adSpaces(
    where: $where
    orderBy: $orderBy
    orderDirection: $orderDirection
    before: $before
    after: $after
    limit: $limit
  ) {
    items {
      id
      owner
      listingId
      listing {
        id
        listingId
        tokenId
        quantity
        pricePerToken
        startTimestamp
        endTimestamp
        listingCreator
        listingOwner
        assetContract
        currency
        taxRate
        taxBeneficiary
        tokenType
        status
        reserved
      }
      adGroupId
      adGroup {
        id
        beneficiary
        metadataId
        metadata {
          id
          name
          description
          image
          banner
        }
        blockTimestamp
      }
      currentMetadataId
      currentMetadata {
        id
        adSpaceId
        attestationId
        attestation {
          id
          revoked
          timestamp
          transactionHash
        }
        name
        description
        image
        imageGatewayUri
        animationUrl
        externalUrl
        aspectRatio
        frameRedirectUrl
        noBillboard
        blockNumber
        transactionHash
      }
      metadatas(
        where: $adSpaces_items_items_metadatas_where
        orderBy: $adSpaces_items_items_metadatas_orderBy
        orderDirection: $adSpaces_items_items_metadatas_orderDirection
        before: $adSpaces_items_items_metadatas_before
        after: $adSpaces_items_items_metadatas_after
        limit: $adSpaces_items_items_metadatas_limit
      ) {
        items {
          id
          adSpaceId
          attestationId
          attestation {
            id
            revoked
            timestamp
            transactionHash
          }
          name
          description
          image
          imageGatewayUri
          animationUrl
          externalUrl
          aspectRatio
          frameRedirectUrl
          noBillboard
          blockNumber
          transactionHash
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
      }
      tokenXId
      tokenX {
        id
        underlyingToken
        superToken
        isNativeToken
        blockNumber
        blockTimestamp
        transactionHash
      }
      transactionHash
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
}
    `;
export const AdSpaceMetadataDocument = gql`
    query adSpaceMetadata($id: String!, $adSpaceMetadata_adSpace_adSpace_adGroup_adGroup_adSpaces_where: AdSpaceFilter, $adSpaceMetadata_adSpace_adSpace_adGroup_adGroup_adSpaces_orderBy: String, $adSpaceMetadata_adSpace_adSpace_adGroup_adGroup_adSpaces_orderDirection: String, $adSpaceMetadata_adSpace_adSpace_adGroup_adGroup_adSpaces_before: String, $adSpaceMetadata_adSpace_adSpace_adGroup_adGroup_adSpaces_after: String, $adSpaceMetadata_adSpace_adSpace_adGroup_adGroup_adSpaces_limit: Int, $adSpaceMetadata_adSpace_adSpace_metadatas_where: AdSpaceMetadataFilter, $adSpaceMetadata_adSpace_adSpace_metadatas_orderBy: String, $adSpaceMetadata_adSpace_adSpace_metadatas_orderDirection: String, $adSpaceMetadata_adSpace_adSpace_metadatas_before: String, $adSpaceMetadata_adSpace_adSpace_metadatas_after: String, $adSpaceMetadata_adSpace_adSpace_metadatas_limit: Int) {
  adSpaceMetadata(id: $id) {
    id
    adSpaceId
    adSpace {
      id
      owner
      listingId
      listing {
        id
        listingId
        tokenId
        quantity
        pricePerToken
        startTimestamp
        endTimestamp
        listingCreator
        listingOwner
        assetContract
        currency
        taxRate
        taxBeneficiary
        tokenType
        status
        reserved
      }
      adGroupId
      adGroup {
        id
        beneficiary
        adSpaces(
          where: $adSpaceMetadata_adSpace_adSpace_adGroup_adGroup_adSpaces_where
          orderBy: $adSpaceMetadata_adSpace_adSpace_adGroup_adGroup_adSpaces_orderBy
          orderDirection: $adSpaceMetadata_adSpace_adSpace_adGroup_adGroup_adSpaces_orderDirection
          before: $adSpaceMetadata_adSpace_adSpace_adGroup_adGroup_adSpaces_before
          after: $adSpaceMetadata_adSpace_adSpace_adGroup_adGroup_adSpaces_after
          limit: $adSpaceMetadata_adSpace_adSpace_adGroup_adGroup_adSpaces_limit
        ) {
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
        }
        metadataId
        metadata {
          id
          name
          description
          image
          banner
        }
        blockTimestamp
      }
      currentMetadataId
      metadatas(
        where: $adSpaceMetadata_adSpace_adSpace_metadatas_where
        orderBy: $adSpaceMetadata_adSpace_adSpace_metadatas_orderBy
        orderDirection: $adSpaceMetadata_adSpace_adSpace_metadatas_orderDirection
        before: $adSpaceMetadata_adSpace_adSpace_metadatas_before
        after: $adSpaceMetadata_adSpace_adSpace_metadatas_after
        limit: $adSpaceMetadata_adSpace_adSpace_metadatas_limit
      ) {
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
      }
      tokenXId
      tokenX {
        id
        underlyingToken
        superToken
        isNativeToken
        blockNumber
        blockTimestamp
        transactionHash
      }
      transactionHash
    }
    attestationId
    attestation {
      id
      revoked
      timestamp
      transactionHash
    }
    name
    description
    image
    imageGatewayUri
    animationUrl
    externalUrl
    aspectRatio
    frameRedirectUrl
    noBillboard
    blockNumber
    transactionHash
  }
}
    `;
export const AdSpaceMetadatasDocument = gql`
    query adSpaceMetadatas($where: AdSpaceMetadataFilter, $orderBy: String, $orderDirection: String, $before: String, $after: String, $limit: Int) {
  adSpaceMetadatas(
    where: $where
    orderBy: $orderBy
    orderDirection: $orderDirection
    before: $before
    after: $after
    limit: $limit
  ) {
    items {
      id
      adSpaceId
      adSpace {
        id
        owner
        listingId
        listing {
          id
          listingId
          tokenId
          quantity
          pricePerToken
          startTimestamp
          endTimestamp
          listingCreator
          listingOwner
          assetContract
          currency
          taxRate
          taxBeneficiary
          tokenType
          status
          reserved
        }
        adGroupId
        adGroup {
          id
          beneficiary
          metadataId
          metadata {
            id
            name
            description
            image
            banner
          }
          blockTimestamp
        }
        currentMetadataId
        tokenXId
        tokenX {
          id
          underlyingToken
          superToken
          isNativeToken
          blockNumber
          blockTimestamp
          transactionHash
        }
        transactionHash
      }
      attestationId
      attestation {
        id
        revoked
        timestamp
        transactionHash
      }
      name
      description
      image
      imageGatewayUri
      animationUrl
      externalUrl
      aspectRatio
      frameRedirectUrl
      noBillboard
      blockNumber
      transactionHash
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
}
    `;
export const AttestationDocument = gql`
    query attestation($id: String!) {
  attestation(id: $id) {
    id
    revoked
    timestamp
    transactionHash
  }
}
    `;
export const AttestationsDocument = gql`
    query attestations($where: AttestationFilter, $orderBy: String, $orderDirection: String, $before: String, $after: String, $limit: Int) {
  attestations(
    where: $where
    orderBy: $orderBy
    orderDirection: $orderDirection
    before: $before
    after: $after
    limit: $limit
  ) {
    items {
      id
      revoked
      timestamp
      transactionHash
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
}
    `;
export const TokenXDocument = gql`
    query tokenX($id: String!) {
  tokenX(id: $id) {
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
export const TokenXsDocument = gql`
    query tokenXs($where: TokenXFilter, $orderBy: String, $orderDirection: String, $before: String, $after: String, $limit: Int) {
  tokenXs(
    where: $where
    orderBy: $orderBy
    orderDirection: $orderDirection
    before: $before
    after: $after
    limit: $limit
  ) {
    items {
      id
      underlyingToken
      superToken
      isNativeToken
      blockNumber
      blockTimestamp
      transactionHash
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
}
    `;
export const ListingDocument = gql`
    query listing($id: String!) {
  listing(id: $id) {
    id
    listingId
    tokenId
    quantity
    pricePerToken
    startTimestamp
    endTimestamp
    listingCreator
    listingOwner
    assetContract
    currency
    taxRate
    taxBeneficiary
    tokenType
    status
    reserved
  }
}
    `;
export const ListingsDocument = gql`
    query listings($where: ListingFilter, $orderBy: String, $orderDirection: String, $before: String, $after: String, $limit: Int) {
  listings(
    where: $where
    orderBy: $orderBy
    orderDirection: $orderDirection
    before: $before
    after: $after
    limit: $limit
  ) {
    items {
      id
      listingId
      tokenId
      quantity
      pricePerToken
      startTimestamp
      endTimestamp
      listingCreator
      listingOwner
      assetContract
      currency
      taxRate
      taxBeneficiary
      tokenType
      status
      reserved
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    adGroup(variables: AdGroupQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AdGroupQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdGroupQuery>(AdGroupDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'adGroup', 'query', variables);
    },
    adGroups(variables?: AdGroupsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AdGroupsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdGroupsQuery>(AdGroupsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'adGroups', 'query', variables);
    },
    adGroupMetadata(variables: AdGroupMetadataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AdGroupMetadataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdGroupMetadataQuery>(AdGroupMetadataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'adGroupMetadata', 'query', variables);
    },
    adGroupMetadatas(variables?: AdGroupMetadatasQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AdGroupMetadatasQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdGroupMetadatasQuery>(AdGroupMetadatasDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'adGroupMetadatas', 'query', variables);
    },
    adSpace(variables: AdSpaceQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AdSpaceQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdSpaceQuery>(AdSpaceDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'adSpace', 'query', variables);
    },
    adSpaces(variables?: AdSpacesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AdSpacesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdSpacesQuery>(AdSpacesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'adSpaces', 'query', variables);
    },
    adSpaceMetadata(variables: AdSpaceMetadataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AdSpaceMetadataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdSpaceMetadataQuery>(AdSpaceMetadataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'adSpaceMetadata', 'query', variables);
    },
    adSpaceMetadatas(variables?: AdSpaceMetadatasQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AdSpaceMetadatasQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AdSpaceMetadatasQuery>(AdSpaceMetadatasDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'adSpaceMetadatas', 'query', variables);
    },
    attestation(variables: AttestationQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AttestationQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AttestationQuery>(AttestationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'attestation', 'query', variables);
    },
    attestations(variables?: AttestationsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AttestationsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AttestationsQuery>(AttestationsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'attestations', 'query', variables);
    },
    tokenX(variables: TokenXQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<TokenXQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TokenXQuery>(TokenXDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'tokenX', 'query', variables);
    },
    tokenXs(variables?: TokenXsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<TokenXsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TokenXsQuery>(TokenXsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'tokenXs', 'query', variables);
    },
    listing(variables: ListingQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ListingQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ListingQuery>(ListingDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'listing', 'query', variables);
    },
    listings(variables?: ListingsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ListingsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ListingsQuery>(ListingsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'listings', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
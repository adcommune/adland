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
  BigInt: { input: any; output: any; }
};

export type AdGroup = {
  __typename?: 'AdGroup';
  adSpaces?: Maybe<AdSpacePage>;
  beneficiary: Scalars['String']['output'];
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
  id: Scalars['String']['output'];
  metadatas?: Maybe<AdSpaceMetadataPage>;
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
};

export type AdSpaceMetadata = {
  __typename?: 'AdSpaceMetadata';
  adSpace: AdSpace;
  adSpaceId: Scalars['String']['output'];
  aspectRatio: Scalars['String']['output'];
  blockNumber: Scalars['BigInt']['output'];
  description: Scalars['String']['output'];
  externalUrl?: Maybe<Scalars['String']['output']>;
  frameRedirectUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  image: Scalars['String']['output'];
  imageGatewayUri: Scalars['String']['output'];
  name: Scalars['String']['output'];
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


export type AdGroupQuery = { __typename?: 'Query', adGroup?: { __typename?: 'AdGroup', id: string, beneficiary: string, metadataId?: string | null, adSpaces?: { __typename?: 'AdSpacePage', items: Array<{ __typename?: 'AdSpace', id: string, adGroupId: string, metadatas?: { __typename?: 'AdSpaceMetadataPage', items: Array<{ __typename?: 'AdSpaceMetadata', id: string, adSpaceId: string, name: string, description: string, image: string, imageGatewayUri: string, externalUrl?: string | null, aspectRatio: string, frameRedirectUrl?: string | null, blockNumber: any, transactionHash: string }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } | null }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } | null, metadata?: { __typename?: 'AdGroupMetadata', id: string, name?: string | null, description?: string | null, image?: string | null, banner?: string | null } | null } | null };

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
  adGroups_items_items_adSpaces_adSpaces_items_items_metadatas_where?: InputMaybe<AdSpaceMetadataFilter>;
  adGroups_items_items_adSpaces_adSpaces_items_items_metadatas_orderBy?: InputMaybe<Scalars['String']['input']>;
  adGroups_items_items_adSpaces_adSpaces_items_items_metadatas_orderDirection?: InputMaybe<Scalars['String']['input']>;
  adGroups_items_items_adSpaces_adSpaces_items_items_metadatas_before?: InputMaybe<Scalars['String']['input']>;
  adGroups_items_items_adSpaces_adSpaces_items_items_metadatas_after?: InputMaybe<Scalars['String']['input']>;
  adGroups_items_items_adSpaces_adSpaces_items_items_metadatas_limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type AdGroupsQuery = { __typename?: 'Query', adGroups: { __typename?: 'AdGroupPage', items: Array<{ __typename?: 'AdGroup', id: string, beneficiary: string, metadataId?: string | null, adSpaces?: { __typename?: 'AdSpacePage', items: Array<{ __typename?: 'AdSpace', id: string, adGroupId: string }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } | null, metadata?: { __typename?: 'AdGroupMetadata', id: string, name?: string | null, description?: string | null, image?: string | null, banner?: string | null } | null }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

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


export type AdSpaceQuery = { __typename?: 'Query', adSpace?: { __typename?: 'AdSpace', id: string, adGroupId: string, adGroup: { __typename?: 'AdGroup', id: string, beneficiary: string, metadataId?: string | null, adSpaces?: { __typename?: 'AdSpacePage', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } | null, metadata?: { __typename?: 'AdGroupMetadata', id: string, name?: string | null, description?: string | null, image?: string | null, banner?: string | null } | null }, metadatas?: { __typename?: 'AdSpaceMetadataPage', items: Array<{ __typename?: 'AdSpaceMetadata', id: string, adSpaceId: string, name: string, description: string, image: string, imageGatewayUri: string, externalUrl?: string | null, aspectRatio: string, frameRedirectUrl?: string | null, blockNumber: any, transactionHash: string }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } | null } | null };

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


export type AdSpacesQuery = { __typename?: 'Query', adSpaces: { __typename?: 'AdSpacePage', items: Array<{ __typename?: 'AdSpace', id: string, adGroupId: string, adGroup: { __typename?: 'AdGroup', id: string, beneficiary: string, metadataId?: string | null, metadata?: { __typename?: 'AdGroupMetadata', id: string, name?: string | null, description?: string | null, image?: string | null, banner?: string | null } | null }, metadatas?: { __typename?: 'AdSpaceMetadataPage', items: Array<{ __typename?: 'AdSpaceMetadata', id: string, adSpaceId: string, name: string, description: string, image: string, imageGatewayUri: string, externalUrl?: string | null, aspectRatio: string, frameRedirectUrl?: string | null, blockNumber: any, transactionHash: string }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } | null }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

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


export type AdSpaceMetadataQuery = { __typename?: 'Query', adSpaceMetadata?: { __typename?: 'AdSpaceMetadata', id: string, adSpaceId: string, name: string, description: string, image: string, imageGatewayUri: string, externalUrl?: string | null, aspectRatio: string, frameRedirectUrl?: string | null, blockNumber: any, transactionHash: string, adSpace: { __typename?: 'AdSpace', id: string, adGroupId: string, adGroup: { __typename?: 'AdGroup', id: string, beneficiary: string, metadataId?: string | null, adSpaces?: { __typename?: 'AdSpacePage', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } | null, metadata?: { __typename?: 'AdGroupMetadata', id: string, name?: string | null, description?: string | null, image?: string | null, banner?: string | null } | null }, metadatas?: { __typename?: 'AdSpaceMetadataPage', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } | null } } | null };

export type AdSpaceMetadatasQueryVariables = Exact<{
  where?: InputMaybe<AdSpaceMetadataFilter>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  adSpaceMetadatas_items_items_adSpace_adSpace_adGroup_adGroup_adSpaces_where?: InputMaybe<AdSpaceFilter>;
  adSpaceMetadatas_items_items_adSpace_adSpace_adGroup_adGroup_adSpaces_orderBy?: InputMaybe<Scalars['String']['input']>;
  adSpaceMetadatas_items_items_adSpace_adSpace_adGroup_adGroup_adSpaces_orderDirection?: InputMaybe<Scalars['String']['input']>;
  adSpaceMetadatas_items_items_adSpace_adSpace_adGroup_adGroup_adSpaces_before?: InputMaybe<Scalars['String']['input']>;
  adSpaceMetadatas_items_items_adSpace_adSpace_adGroup_adGroup_adSpaces_after?: InputMaybe<Scalars['String']['input']>;
  adSpaceMetadatas_items_items_adSpace_adSpace_adGroup_adGroup_adSpaces_limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type AdSpaceMetadatasQuery = { __typename?: 'Query', adSpaceMetadatas: { __typename?: 'AdSpaceMetadataPage', items: Array<{ __typename?: 'AdSpaceMetadata', id: string, adSpaceId: string, name: string, description: string, image: string, imageGatewayUri: string, externalUrl?: string | null, aspectRatio: string, frameRedirectUrl?: string | null, blockNumber: any, transactionHash: string, adSpace: { __typename?: 'AdSpace', id: string, adGroupId: string, adGroup: { __typename?: 'AdGroup', id: string, beneficiary: string, metadataId?: string | null, metadata?: { __typename?: 'AdGroupMetadata', id: string, name?: string | null, description?: string | null, image?: string | null, banner?: string | null } | null } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

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



export const AdGroupDocument = `
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
        adGroupId
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
            name
            description
            image
            imageGatewayUri
            externalUrl
            aspectRatio
            frameRedirectUrl
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
    query adGroups($where: AdGroupFilter, $orderBy: String, $orderDirection: String, $before: String, $after: String, $limit: Int, $adGroups_items_items_adSpaces_where: AdSpaceFilter, $adGroups_items_items_adSpaces_orderBy: String, $adGroups_items_items_adSpaces_orderDirection: String, $adGroups_items_items_adSpaces_before: String, $adGroups_items_items_adSpaces_after: String, $adGroups_items_items_adSpaces_limit: Int, $adGroups_items_items_adSpaces_adSpaces_items_items_metadatas_where: AdSpaceMetadataFilter, $adGroups_items_items_adSpaces_adSpaces_items_items_metadatas_orderBy: String, $adGroups_items_items_adSpaces_adSpaces_items_items_metadatas_orderDirection: String, $adGroups_items_items_adSpaces_adSpaces_items_items_metadatas_before: String, $adGroups_items_items_adSpaces_adSpaces_items_items_metadatas_after: String, $adGroups_items_items_adSpaces_adSpaces_items_items_metadatas_limit: Int) {
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
          adGroupId
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

export const AdGroupMetadataDocument = `
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

export const useAdGroupMetadataQuery = <
      TData = AdGroupMetadataQuery,
      TError = unknown
    >(
      variables: AdGroupMetadataQueryVariables,
      options?: Omit<UseQueryOptions<AdGroupMetadataQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<AdGroupMetadataQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<AdGroupMetadataQuery, TError, TData>(
      {
    queryKey: ['adGroupMetadata', variables],
    queryFn: fetcher<AdGroupMetadataQuery, AdGroupMetadataQueryVariables>(AdGroupMetadataDocument).bind(null, variables),
    ...options
  }
    )};

export const AdGroupMetadatasDocument = `
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

export const useAdGroupMetadatasQuery = <
      TData = AdGroupMetadatasQuery,
      TError = unknown
    >(
      variables?: AdGroupMetadatasQueryVariables,
      options?: Omit<UseQueryOptions<AdGroupMetadatasQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<AdGroupMetadatasQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<AdGroupMetadatasQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['adGroupMetadatas'] : ['adGroupMetadatas', variables],
    queryFn: fetcher<AdGroupMetadatasQuery, AdGroupMetadatasQueryVariables>(AdGroupMetadatasDocument).bind(null, variables),
    ...options
  }
    )};

export const AdSpaceDocument = `
    query adSpace($id: String!, $adSpace_adGroup_adGroup_adSpaces_where: AdSpaceFilter, $adSpace_adGroup_adGroup_adSpaces_orderBy: String, $adSpace_adGroup_adGroup_adSpaces_orderDirection: String, $adSpace_adGroup_adGroup_adSpaces_before: String, $adSpace_adGroup_adGroup_adSpaces_after: String, $adSpace_adGroup_adGroup_adSpaces_limit: Int, $adSpace_metadatas_where: AdSpaceMetadataFilter, $adSpace_metadatas_orderBy: String, $adSpace_metadatas_orderDirection: String, $adSpace_metadatas_before: String, $adSpace_metadatas_after: String, $adSpace_metadatas_limit: Int) {
  adSpace(id: $id) {
    id
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
        name
        description
        image
        imageGatewayUri
        externalUrl
        aspectRatio
        frameRedirectUrl
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
          name
          description
          image
          imageGatewayUri
          externalUrl
          aspectRatio
          frameRedirectUrl
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
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
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

export const AdSpaceMetadataDocument = `
    query adSpaceMetadata($id: String!, $adSpaceMetadata_adSpace_adSpace_adGroup_adGroup_adSpaces_where: AdSpaceFilter, $adSpaceMetadata_adSpace_adSpace_adGroup_adGroup_adSpaces_orderBy: String, $adSpaceMetadata_adSpace_adSpace_adGroup_adGroup_adSpaces_orderDirection: String, $adSpaceMetadata_adSpace_adSpace_adGroup_adGroup_adSpaces_before: String, $adSpaceMetadata_adSpace_adSpace_adGroup_adGroup_adSpaces_after: String, $adSpaceMetadata_adSpace_adSpace_adGroup_adGroup_adSpaces_limit: Int, $adSpaceMetadata_adSpace_adSpace_metadatas_where: AdSpaceMetadataFilter, $adSpaceMetadata_adSpace_adSpace_metadatas_orderBy: String, $adSpaceMetadata_adSpace_adSpace_metadatas_orderDirection: String, $adSpaceMetadata_adSpace_adSpace_metadatas_before: String, $adSpaceMetadata_adSpace_adSpace_metadatas_after: String, $adSpaceMetadata_adSpace_adSpace_metadatas_limit: Int) {
  adSpaceMetadata(id: $id) {
    id
    adSpaceId
    adSpace {
      id
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
      }
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
    }
    name
    description
    image
    imageGatewayUri
    externalUrl
    aspectRatio
    frameRedirectUrl
    blockNumber
    transactionHash
  }
}
    `;

export const useAdSpaceMetadataQuery = <
      TData = AdSpaceMetadataQuery,
      TError = unknown
    >(
      variables: AdSpaceMetadataQueryVariables,
      options?: Omit<UseQueryOptions<AdSpaceMetadataQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<AdSpaceMetadataQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<AdSpaceMetadataQuery, TError, TData>(
      {
    queryKey: ['adSpaceMetadata', variables],
    queryFn: fetcher<AdSpaceMetadataQuery, AdSpaceMetadataQueryVariables>(AdSpaceMetadataDocument).bind(null, variables),
    ...options
  }
    )};

export const AdSpaceMetadatasDocument = `
    query adSpaceMetadatas($where: AdSpaceMetadataFilter, $orderBy: String, $orderDirection: String, $before: String, $after: String, $limit: Int, $adSpaceMetadatas_items_items_adSpace_adSpace_adGroup_adGroup_adSpaces_where: AdSpaceFilter, $adSpaceMetadatas_items_items_adSpace_adSpace_adGroup_adGroup_adSpaces_orderBy: String, $adSpaceMetadatas_items_items_adSpace_adSpace_adGroup_adGroup_adSpaces_orderDirection: String, $adSpaceMetadatas_items_items_adSpace_adSpace_adGroup_adGroup_adSpaces_before: String, $adSpaceMetadatas_items_items_adSpace_adSpace_adGroup_adGroup_adSpaces_after: String, $adSpaceMetadatas_items_items_adSpace_adSpace_adGroup_adGroup_adSpaces_limit: Int) {
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
        }
      }
      name
      description
      image
      imageGatewayUri
      externalUrl
      aspectRatio
      frameRedirectUrl
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

export const useAdSpaceMetadatasQuery = <
      TData = AdSpaceMetadatasQuery,
      TError = unknown
    >(
      variables?: AdSpaceMetadatasQueryVariables,
      options?: Omit<UseQueryOptions<AdSpaceMetadatasQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<AdSpaceMetadatasQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<AdSpaceMetadatasQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['adSpaceMetadatas'] : ['adSpaceMetadatas', variables],
    queryFn: fetcher<AdSpaceMetadatasQuery, AdSpaceMetadatasQueryVariables>(AdSpaceMetadatasDocument).bind(null, variables),
    ...options
  }
    )};

export const TokenXDocument = `
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

export const ListingDocument = `
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

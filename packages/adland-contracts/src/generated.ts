import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CFAv1Forwarder
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const cfAv1ForwarderAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'flowrate', internalType: 'int96', type: 'int96' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'createFlow',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'deleteFlow',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'getAccountFlowInfo',
    outputs: [
      { name: 'lastUpdated', internalType: 'uint256', type: 'uint256' },
      { name: 'flowrate', internalType: 'int96', type: 'int96' },
      { name: 'deposit', internalType: 'uint256', type: 'uint256' },
      { name: 'owedDeposit', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'getAccountFlowrate',
    outputs: [{ name: 'flowrate', internalType: 'int96', type: 'int96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'flowrate', internalType: 'int96', type: 'int96' },
    ],
    name: 'getBufferAmountByFlowrate',
    outputs: [
      { name: 'bufferAmount', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
    ],
    name: 'getFlowInfo',
    outputs: [
      { name: 'lastUpdated', internalType: 'uint256', type: 'uint256' },
      { name: 'flowrate', internalType: 'int96', type: 'int96' },
      { name: 'deposit', internalType: 'uint256', type: 'uint256' },
      { name: 'owedDeposit', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'flowOperator', internalType: 'address', type: 'address' },
    ],
    name: 'getFlowOperatorPermissions',
    outputs: [
      { name: 'permissions', internalType: 'uint8', type: 'uint8' },
      { name: 'flowrateAllowance', internalType: 'int96', type: 'int96' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
    ],
    name: 'getFlowrate',
    outputs: [{ name: 'flowrate', internalType: 'int96', type: 'int96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'flowOperator', internalType: 'address', type: 'address' },
    ],
    name: 'grantPermissions',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'flowOperator', internalType: 'address', type: 'address' },
    ],
    name: 'revokePermissions',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'flowrate', internalType: 'int96', type: 'int96' },
    ],
    name: 'setFlowrate',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'flowrate', internalType: 'int96', type: 'int96' },
    ],
    name: 'setFlowrateFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'flowrate', internalType: 'int96', type: 'int96' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'updateFlow',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'flowOperator', internalType: 'address', type: 'address' },
      { name: 'permissions', internalType: 'uint8', type: 'uint8' },
      { name: 'flowrateAllowance', internalType: 'int96', type: 'int96' },
    ],
    name: 'updateFlowOperatorPermissions',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'CFA_FWD_INVALID_FLOW_RATE' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CommonAdPool
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const commonAdPoolAbi = [
  {
    type: 'constructor',
    inputs: [
      {
        name: '_superToken',
        internalType: 'contract ISuperToken',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MEMBER_UNITS_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pool',
    outputs: [
      { name: '', internalType: 'contract ISuperfluidPool', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'superToken',
    outputs: [
      { name: '', internalType: 'contract ISuperToken', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'member', internalType: 'address', type: 'address' },
      { name: 'units', internalType: 'uint128', type: 'uint128' },
    ],
    name: 'updateMemberUnits',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CommonAdSpaceAsset
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const commonAdSpaceAssetAbi = [
  {
    type: 'function',
    inputs: [{ name: 'underlying', internalType: 'address', type: 'address' }],
    name: 'getTokenX',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CommonAdSpaces
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const commonAdSpacesAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [],
    name: 'adGroupIds',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'adGroups',
    outputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'metadataURI', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'ads',
    outputs: [
      { name: 'adGroupId', internalType: 'uint256', type: 'uint256' },
      { name: 'uri', internalType: 'string', type: 'string' },
      {
        name: 'strategy',
        internalType: 'contract IAdStrategy',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      {
        name: 'initialAdSpaceConfig',
        internalType: 'struct AdSpaceConfig',
        type: 'tuple',
        components: [
          { name: 'currency', internalType: 'address', type: 'address' },
          { name: 'initialPrice', internalType: 'uint256', type: 'uint256' },
          { name: 'taxRate', internalType: 'uint256', type: 'uint256' },
        ],
      },
      { name: 'size', internalType: 'uint256', type: 'uint256' },
      { name: 'metadataURI', internalType: 'string', type: 'string' },
    ],
    name: 'createAdGroup',
    outputs: [{ name: 'adGroupId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'adId', internalType: 'uint256', type: 'uint256' },
      { name: 'superToken', internalType: 'address', type: 'address' },
    ],
    name: 'createAdPool',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'adId', internalType: 'uint256', type: 'uint256' },
      { name: 'superToken', internalType: 'address', type: 'address' },
    ],
    name: 'getAdPool',
    outputs: [
      { name: '', internalType: 'contract CommonAdPool', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'adId', internalType: 'uint256', type: 'uint256' }],
    name: 'getAdUri',
    outputs: [{ name: 'uri', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'adGroupId', internalType: 'uint256', type: 'uint256' }],
    name: 'getGroup',
    outputs: [
      {
        name: '',
        internalType: 'struct AdGroup',
        type: 'tuple',
        components: [
          { name: 'owner', internalType: 'address', type: 'address' },
          { name: 'metadataURI', internalType: 'string', type: 'string' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'underlying', internalType: 'address', type: 'address' }],
    name: 'getTokenX',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_marketplace', internalType: 'address', type: 'address' },
      { name: '_placeholderURI', internalType: 'string', type: 'string' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'adGroupId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'initialAdSpaceConfig',
        internalType: 'struct AdSpaceConfig',
        type: 'tuple',
        components: [
          { name: 'currency', internalType: 'address', type: 'address' },
          { name: 'initialPrice', internalType: 'uint256', type: 'uint256' },
          { name: 'taxRate', internalType: 'uint256', type: 'uint256' },
        ],
      },
      { name: 'numberOfAdSpaces', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'openAdSpaces',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'placeholderURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'salePrice', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'royaltyInfo',
    outputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'uri', internalType: 'string', type: 'string' }],
    name: 'setTokenURI',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'underlyingToken', internalType: 'address', type: 'address' },
      { name: 'superToken', internalType: 'address', type: 'address' },
    ],
    name: 'setTokenX',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'tokenXs',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'adGroupId', internalType: 'uint256', type: 'uint256' },
      { name: 'metadataURI', internalType: 'string', type: 'string' },
    ],
    name: 'updateAdGroupMetadata',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'adId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'strategy',
        internalType: 'contract IAdStrategy',
        type: 'address',
      },
    ],
    name: 'updateAdStrategy',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'adId', internalType: 'uint256', type: 'uint256' },
      { name: 'adURI', internalType: 'string', type: 'string' },
    ],
    name: 'updateAdURI',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
    ],
    name: 'upgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'groupId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'metadataURI',
        internalType: 'string',
        type: 'string',
        indexed: true,
      },
    ],
    name: 'AdGroupCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'groupId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'metadataURI',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'AdGroupMetadataUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'adId', internalType: 'uint256', type: 'uint256', indexed: true },
      {
        name: 'superToken',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'pool', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'underlyingToken',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AdPoolCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'groupId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      { name: 'adId', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'AdSpaceCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'adId', internalType: 'uint256', type: 'uint256', indexed: true },
      {
        name: 'strategy',
        internalType: 'contract IAdStrategy',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'AdSpaceStrategyUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'adId', internalType: 'uint256', type: 'uint256', indexed: true },
      { name: 'uri', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'AdSpaceURIUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'beacon',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'BeaconUpgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'version', internalType: 'uint8', type: 'uint8', indexed: false },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'underlyingToken',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'superToken',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'TokenXSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
] as const

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const commonAdSpacesAddress = {
  8453: '0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57',
  11155420: '0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1',
} as const

/**
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const commonAdSpacesConfig = {
  address: commonAdSpacesAddress,
  abi: commonAdSpacesAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CommonAdValidator
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4B346185c3c26d8F99336155035226655D2ADBe1)
 */
export const commonAdValidatorAbi = [
  {
    type: 'constructor',
    inputs: [{ name: '_eas', internalType: 'contract IEAS', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  { type: 'receive', stateMutability: 'payable' },
  {
    type: 'function',
    inputs: [
      {
        name: 'attestation',
        internalType: 'struct Attestation',
        type: 'tuple',
        components: [
          { name: 'uid', internalType: 'bytes32', type: 'bytes32' },
          { name: 'schema', internalType: 'bytes32', type: 'bytes32' },
          { name: 'time', internalType: 'uint64', type: 'uint64' },
          { name: 'expirationTime', internalType: 'uint64', type: 'uint64' },
          { name: 'revocationTime', internalType: 'uint64', type: 'uint64' },
          { name: 'refUID', internalType: 'bytes32', type: 'bytes32' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'attester', internalType: 'address', type: 'address' },
          { name: 'revocable', internalType: 'bool', type: 'bool' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'attest',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'commonAdSpaces',
    outputs: [
      { name: '', internalType: 'contract CommonAdSpaces', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'isPayable',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'attestations',
        internalType: 'struct Attestation[]',
        type: 'tuple[]',
        components: [
          { name: 'uid', internalType: 'bytes32', type: 'bytes32' },
          { name: 'schema', internalType: 'bytes32', type: 'bytes32' },
          { name: 'time', internalType: 'uint64', type: 'uint64' },
          { name: 'expirationTime', internalType: 'uint64', type: 'uint64' },
          { name: 'revocationTime', internalType: 'uint64', type: 'uint64' },
          { name: 'refUID', internalType: 'bytes32', type: 'bytes32' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'attester', internalType: 'address', type: 'address' },
          { name: 'revocable', internalType: 'bool', type: 'bool' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
      },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'multiAttest',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'attestations',
        internalType: 'struct Attestation[]',
        type: 'tuple[]',
        components: [
          { name: 'uid', internalType: 'bytes32', type: 'bytes32' },
          { name: 'schema', internalType: 'bytes32', type: 'bytes32' },
          { name: 'time', internalType: 'uint64', type: 'uint64' },
          { name: 'expirationTime', internalType: 'uint64', type: 'uint64' },
          { name: 'revocationTime', internalType: 'uint64', type: 'uint64' },
          { name: 'refUID', internalType: 'bytes32', type: 'bytes32' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'attester', internalType: 'address', type: 'address' },
          { name: 'revocable', internalType: 'bool', type: 'bool' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
      },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'multiRevoke',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'attestation',
        internalType: 'struct Attestation',
        type: 'tuple',
        components: [
          { name: 'uid', internalType: 'bytes32', type: 'bytes32' },
          { name: 'schema', internalType: 'bytes32', type: 'bytes32' },
          { name: 'time', internalType: 'uint64', type: 'uint64' },
          { name: 'expirationTime', internalType: 'uint64', type: 'uint64' },
          { name: 'revocationTime', internalType: 'uint64', type: 'uint64' },
          { name: 'refUID', internalType: 'bytes32', type: 'bytes32' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'attester', internalType: 'address', type: 'address' },
          { name: 'revocable', internalType: 'bool', type: 'bool' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'revoke',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_commonAdSpaces',
        internalType: 'contract CommonAdSpaces',
        type: 'address',
      },
    ],
    name: 'setCommonAdSpaces',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'version',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'uid', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'adSpaceId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      { name: 'cid', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'AttestAd',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'uid', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'adSpaceId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      { name: 'cid', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'RevokeAd',
  },
  { type: 'error', inputs: [], name: 'AccessDenied' },
  { type: 'error', inputs: [], name: 'InsufficientValue' },
  { type: 'error', inputs: [], name: 'InvalidEAS' },
  { type: 'error', inputs: [], name: 'InvalidLength' },
  { type: 'error', inputs: [], name: 'NotPayable' },
] as const

/**
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4B346185c3c26d8F99336155035226655D2ADBe1)
 */
export const commonAdValidatorAddress = {
  11155420: '0x4B346185c3c26d8F99336155035226655D2ADBe1',
} as const

/**
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4B346185c3c26d8F99336155035226655D2ADBe1)
 */
export const commonAdValidatorConfig = {
  address: commonAdValidatorAddress,
  abi: commonAdValidatorAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ConstantFlowAgreementV1
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const constantFlowAgreementV1Abi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'CFA_HOOK_GAS_LIMIT',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_MINIMUM_DEPOSIT',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MAXIMUM_DEPOSIT',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MAXIMUM_FLOW_RATE',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'existingPermissions', internalType: 'uint8', type: 'uint8' },
      { name: 'permissionDelta', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'addPermissions',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'agreementType',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'flowOperator', internalType: 'address', type: 'address' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'authorizeFlowOperatorWithFullControl',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'castrate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'flowRate', internalType: 'int96', type: 'int96' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'createFlow',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'flowRate', internalType: 'int96', type: 'int96' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'createFlowByOperator',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'flowOperator', internalType: 'address', type: 'address' },
      {
        name: 'subtractedFlowRateAllowance',
        internalType: 'int96',
        type: 'int96',
      },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'decreaseFlowRateAllowance',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'flowOperator', internalType: 'address', type: 'address' },
      { name: 'permissionsToRemove', internalType: 'uint8', type: 'uint8' },
      {
        name: 'subtractedFlowRateAllowance',
        internalType: 'int96',
        type: 'int96',
      },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'decreaseFlowRateAllowanceWithPermissions',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'deleteFlow',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'deleteFlowByOperator',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'getAccountFlowInfo',
    outputs: [
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
      { name: 'flowRate', internalType: 'int96', type: 'int96' },
      { name: 'deposit', internalType: 'uint256', type: 'uint256' },
      { name: 'owedDeposit', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCodeAddress',
    outputs: [
      { name: 'codeAddress', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'flowRate', internalType: 'int96', type: 'int96' },
    ],
    name: 'getDepositRequiredForFlowRate',
    outputs: [{ name: 'deposit', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
    ],
    name: 'getFlow',
    outputs: [
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
      { name: 'flowRate', internalType: 'int96', type: 'int96' },
      { name: 'deposit', internalType: 'uint256', type: 'uint256' },
      { name: 'owedDeposit', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'flowId', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getFlowByID',
    outputs: [
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
      { name: 'flowRate', internalType: 'int96', type: 'int96' },
      { name: 'deposit', internalType: 'uint256', type: 'uint256' },
      { name: 'owedDeposit', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'flowOperator', internalType: 'address', type: 'address' },
    ],
    name: 'getFlowOperatorData',
    outputs: [
      { name: 'flowOperatorId', internalType: 'bytes32', type: 'bytes32' },
      { name: 'permissions', internalType: 'uint8', type: 'uint8' },
      { name: 'flowRateAllowance', internalType: 'int96', type: 'int96' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'flowOperatorId', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getFlowOperatorDataByID',
    outputs: [
      { name: 'permissions', internalType: 'uint8', type: 'uint8' },
      { name: 'flowRateAllowance', internalType: 'int96', type: 'int96' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'deposit', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getMaximumFlowRateFromDeposit',
    outputs: [{ name: 'flowRate', internalType: 'int96', type: 'int96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'getNetFlow',
    outputs: [{ name: 'flowRate', internalType: 'int96', type: 'int96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'flowOperator', internalType: 'address', type: 'address' },
      { name: 'addedFlowRateAllowance', internalType: 'int96', type: 'int96' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'increaseFlowRateAllowance',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'flowOperator', internalType: 'address', type: 'address' },
      { name: 'permissionsToAdd', internalType: 'uint8', type: 'uint8' },
      { name: 'addedFlowRateAllowance', internalType: 'int96', type: 'int96' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'increaseFlowRateAllowanceWithPermissions',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'isPatricianPeriod',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'isPatricianPeriodNow',
    outputs: [
      {
        name: 'isCurrentlyPatricianPeriod',
        internalType: 'bool',
        type: 'bool',
      },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'time', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'realtimeBalanceOf',
    outputs: [
      { name: 'dynamicBalance', internalType: 'int256', type: 'int256' },
      { name: 'deposit', internalType: 'uint256', type: 'uint256' },
      { name: 'owedDeposit', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'existingPermissions', internalType: 'uint8', type: 'uint8' },
      { name: 'permissionDelta', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'removePermissions',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'flowOperator', internalType: 'address', type: 'address' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'revokeFlowOperatorWithFullControl',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newAddress', internalType: 'address', type: 'address' }],
    name: 'updateCode',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'flowRate', internalType: 'int96', type: 'int96' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'updateFlow',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'flowRate', internalType: 'int96', type: 'int96' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'updateFlowByOperator',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'flowOperator', internalType: 'address', type: 'address' },
      { name: 'permissions', internalType: 'uint8', type: 'uint8' },
      { name: 'flowRateAllowance', internalType: 'int96', type: 'int96' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'updateFlowOperatorPermissions',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'uuid',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'codeAddress',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'CodeUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'flowOperator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'permissions',
        internalType: 'uint8',
        type: 'uint8',
        indexed: false,
      },
      {
        name: 'flowRateAllowance',
        internalType: 'int96',
        type: 'int96',
        indexed: false,
      },
    ],
    name: 'FlowOperatorUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'receiver',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'flowRate',
        internalType: 'int96',
        type: 'int96',
        indexed: false,
      },
      {
        name: 'totalSenderFlowRate',
        internalType: 'int256',
        type: 'int256',
        indexed: false,
      },
      {
        name: 'totalReceiverFlowRate',
        internalType: 'int256',
        type: 'int256',
        indexed: false,
      },
      {
        name: 'userData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'FlowUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'flowOperator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'deposit',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'FlowUpdatedExtension',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'version', internalType: 'uint8', type: 'uint8', indexed: false },
    ],
    name: 'Initialized',
  },
  { type: 'error', inputs: [], name: 'AGREEMENT_BASE_ONLY_HOST' },
  {
    type: 'error',
    inputs: [{ name: '_code', internalType: 'uint256', type: 'uint256' }],
    name: 'APP_RULE',
  },
  { type: 'error', inputs: [], name: 'CFA_ACL_FLOW_RATE_ALLOWANCE_EXCEEDED' },
  { type: 'error', inputs: [], name: 'CFA_ACL_NO_NEGATIVE_ALLOWANCE' },
  { type: 'error', inputs: [], name: 'CFA_ACL_NO_SENDER_CREATE' },
  { type: 'error', inputs: [], name: 'CFA_ACL_NO_SENDER_FLOW_OPERATOR' },
  { type: 'error', inputs: [], name: 'CFA_ACL_NO_SENDER_UPDATE' },
  { type: 'error', inputs: [], name: 'CFA_ACL_OPERATOR_NO_CREATE_PERMISSIONS' },
  { type: 'error', inputs: [], name: 'CFA_ACL_OPERATOR_NO_DELETE_PERMISSIONS' },
  { type: 'error', inputs: [], name: 'CFA_ACL_OPERATOR_NO_UPDATE_PERMISSIONS' },
  { type: 'error', inputs: [], name: 'CFA_ACL_UNCLEAN_PERMISSIONS' },
  { type: 'error', inputs: [], name: 'CFA_DEPOSIT_TOO_BIG' },
  { type: 'error', inputs: [], name: 'CFA_FLOW_ALREADY_EXISTS' },
  { type: 'error', inputs: [], name: 'CFA_FLOW_DOES_NOT_EXIST' },
  { type: 'error', inputs: [], name: 'CFA_FLOW_RATE_TOO_BIG' },
  { type: 'error', inputs: [], name: 'CFA_HOOK_OUT_OF_GAS' },
  { type: 'error', inputs: [], name: 'CFA_INSUFFICIENT_BALANCE' },
  { type: 'error', inputs: [], name: 'CFA_INVALID_FLOW_RATE' },
  { type: 'error', inputs: [], name: 'CFA_NON_CRITICAL_SENDER' },
  { type: 'error', inputs: [], name: 'CFA_NO_SELF_FLOW' },
  { type: 'error', inputs: [], name: 'CFA_ZERO_ADDRESS_RECEIVER' },
  { type: 'error', inputs: [], name: 'CFA_ZERO_ADDRESS_SENDER' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DirectListingsLogic
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * -
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9825f700754534108BFE2239C9e66a12FDEBB33e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x44f808B028cD582b21C04f6de3580029d3E31Cb6)
 */
export const directListingsLogicAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_nativeTokenWrapper', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: '_msgData',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: '_msgSender',
    outputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_listingId', internalType: 'uint256', type: 'uint256' },
      { name: '_buyer', internalType: 'address', type: 'address' },
      { name: '_toApprove', internalType: 'bool', type: 'bool' },
    ],
    name: 'approveBuyerForListing',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_listingId', internalType: 'uint256', type: 'uint256' },
      { name: '_currency', internalType: 'address', type: 'address' },
      {
        name: '_pricePerTokenInCurrency',
        internalType: 'uint256',
        type: 'uint256',
      },
    ],
    name: 'approveCurrencyForListing',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_listingId', internalType: 'uint256', type: 'uint256' },
      { name: '_buyFor', internalType: 'address', type: 'address' },
      { name: '_quantity', internalType: 'uint256', type: 'uint256' },
      { name: '_currency', internalType: 'address', type: 'address' },
      { name: '_expectedTotalPrice', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'buyFromListing',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: '_listingId', internalType: 'uint256', type: 'uint256' }],
    name: 'cancelListing',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_params',
        internalType: 'struct IDirectListings.ListingParameters',
        type: 'tuple',
        components: [
          { name: 'assetContract', internalType: 'address', type: 'address' },
          { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
          { name: 'quantity', internalType: 'uint256', type: 'uint256' },
          { name: 'currency', internalType: 'address', type: 'address' },
          { name: 'taxRate', internalType: 'uint256', type: 'uint256' },
          { name: 'taxBeneficiary', internalType: 'address', type: 'address' },
          { name: 'pricePerToken', internalType: 'uint256', type: 'uint256' },
          { name: 'startTimestamp', internalType: 'uint128', type: 'uint128' },
          { name: 'endTimestamp', internalType: 'uint128', type: 'uint128' },
          { name: 'reserved', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    name: 'createListing',
    outputs: [{ name: 'listingId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_listingId', internalType: 'uint256', type: 'uint256' },
      { name: '_currency', internalType: 'address', type: 'address' },
    ],
    name: 'currencyPriceForListing',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_listingId', internalType: 'uint256', type: 'uint256' }],
    name: 'forecloseListing',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_startId', internalType: 'uint256', type: 'uint256' },
      { name: '_endId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getAllListings',
    outputs: [
      {
        name: '_allListings',
        internalType: 'struct IDirectListings.Listing[]',
        type: 'tuple[]',
        components: [
          { name: 'listingId', internalType: 'uint256', type: 'uint256' },
          { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
          { name: 'quantity', internalType: 'uint256', type: 'uint256' },
          { name: 'pricePerToken', internalType: 'uint256', type: 'uint256' },
          { name: 'startTimestamp', internalType: 'uint128', type: 'uint128' },
          { name: 'endTimestamp', internalType: 'uint128', type: 'uint128' },
          { name: 'listingCreator', internalType: 'address', type: 'address' },
          { name: 'listingOwner', internalType: 'address', type: 'address' },
          { name: 'assetContract', internalType: 'address', type: 'address' },
          { name: 'currency', internalType: 'address', type: 'address' },
          { name: 'taxRate', internalType: 'uint256', type: 'uint256' },
          { name: 'taxBeneficiary', internalType: 'address', type: 'address' },
          {
            name: 'tokenType',
            internalType: 'enum IDirectListings.TokenType',
            type: 'uint8',
          },
          {
            name: 'status',
            internalType: 'enum IDirectListings.Status',
            type: 'uint8',
          },
          { name: 'reserved', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_startId', internalType: 'uint256', type: 'uint256' },
      { name: '_endId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getAllValidListings',
    outputs: [
      {
        name: '_validListings',
        internalType: 'struct IDirectListings.Listing[]',
        type: 'tuple[]',
        components: [
          { name: 'listingId', internalType: 'uint256', type: 'uint256' },
          { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
          { name: 'quantity', internalType: 'uint256', type: 'uint256' },
          { name: 'pricePerToken', internalType: 'uint256', type: 'uint256' },
          { name: 'startTimestamp', internalType: 'uint128', type: 'uint128' },
          { name: 'endTimestamp', internalType: 'uint128', type: 'uint128' },
          { name: 'listingCreator', internalType: 'address', type: 'address' },
          { name: 'listingOwner', internalType: 'address', type: 'address' },
          { name: 'assetContract', internalType: 'address', type: 'address' },
          { name: 'currency', internalType: 'address', type: 'address' },
          { name: 'taxRate', internalType: 'uint256', type: 'uint256' },
          { name: 'taxBeneficiary', internalType: 'address', type: 'address' },
          {
            name: 'tokenType',
            internalType: 'enum IDirectListings.TokenType',
            type: 'uint8',
          },
          {
            name: 'status',
            internalType: 'enum IDirectListings.Status',
            type: 'uint8',
          },
          { name: 'reserved', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_listingId', internalType: 'uint256', type: 'uint256' }],
    name: 'getListing',
    outputs: [
      {
        name: 'listing',
        internalType: 'struct IDirectListings.Listing',
        type: 'tuple',
        components: [
          { name: 'listingId', internalType: 'uint256', type: 'uint256' },
          { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
          { name: 'quantity', internalType: 'uint256', type: 'uint256' },
          { name: 'pricePerToken', internalType: 'uint256', type: 'uint256' },
          { name: 'startTimestamp', internalType: 'uint128', type: 'uint128' },
          { name: 'endTimestamp', internalType: 'uint128', type: 'uint128' },
          { name: 'listingCreator', internalType: 'address', type: 'address' },
          { name: 'listingOwner', internalType: 'address', type: 'address' },
          { name: 'assetContract', internalType: 'address', type: 'address' },
          { name: 'currency', internalType: 'address', type: 'address' },
          { name: 'taxRate', internalType: 'uint256', type: 'uint256' },
          { name: 'taxBeneficiary', internalType: 'address', type: 'address' },
          {
            name: 'tokenType',
            internalType: 'enum IDirectListings.TokenType',
            type: 'uint8',
          },
          {
            name: 'status',
            internalType: 'enum IDirectListings.Status',
            type: 'uint8',
          },
          { name: 'reserved', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_listingId', internalType: 'uint256', type: 'uint256' },
      { name: '_buyer', internalType: 'address', type: 'address' },
    ],
    name: 'isBuyerApprovedForListing',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_listingId', internalType: 'uint256', type: 'uint256' },
      { name: '_currency', internalType: 'address', type: 'address' },
    ],
    name: 'isCurrencyApprovedForListing',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalListings',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_listingId', internalType: 'uint256', type: 'uint256' },
      {
        name: '_params',
        internalType: 'struct IDirectListings.ListingParameters',
        type: 'tuple',
        components: [
          { name: 'assetContract', internalType: 'address', type: 'address' },
          { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
          { name: 'quantity', internalType: 'uint256', type: 'uint256' },
          { name: 'currency', internalType: 'address', type: 'address' },
          { name: 'taxRate', internalType: 'uint256', type: 'uint256' },
          { name: 'taxBeneficiary', internalType: 'address', type: 'address' },
          { name: 'pricePerToken', internalType: 'uint256', type: 'uint256' },
          { name: 'startTimestamp', internalType: 'uint128', type: 'uint128' },
          { name: 'endTimestamp', internalType: 'uint128', type: 'uint128' },
          { name: 'reserved', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    name: 'updateListing',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'listingId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'buyer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'BuyerApprovedForListing',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'listingCreator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'listingId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'CancelledListing',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'listingId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'currency',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'pricePerToken',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'CurrencyApprovedForListing',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'listingCreator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'listingId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'assetContract',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'listing',
        internalType: 'struct IDirectListings.Listing',
        type: 'tuple',
        components: [
          { name: 'listingId', internalType: 'uint256', type: 'uint256' },
          { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
          { name: 'quantity', internalType: 'uint256', type: 'uint256' },
          { name: 'pricePerToken', internalType: 'uint256', type: 'uint256' },
          { name: 'startTimestamp', internalType: 'uint128', type: 'uint128' },
          { name: 'endTimestamp', internalType: 'uint128', type: 'uint128' },
          { name: 'listingCreator', internalType: 'address', type: 'address' },
          { name: 'listingOwner', internalType: 'address', type: 'address' },
          { name: 'assetContract', internalType: 'address', type: 'address' },
          { name: 'currency', internalType: 'address', type: 'address' },
          { name: 'taxRate', internalType: 'uint256', type: 'uint256' },
          { name: 'taxBeneficiary', internalType: 'address', type: 'address' },
          {
            name: 'tokenType',
            internalType: 'enum IDirectListings.TokenType',
            type: 'uint8',
          },
          {
            name: 'status',
            internalType: 'enum IDirectListings.Status',
            type: 'uint8',
          },
          { name: 'reserved', internalType: 'bool', type: 'bool' },
        ],
        indexed: false,
      },
    ],
    name: 'NewListing',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'listingCreator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'listingId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'assetContract',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'buyer',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'quantityBought',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'totalPricePaid',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'NewSale',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'listingId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'receiver',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'flowRate',
        internalType: 'int96',
        type: 'int96',
        indexed: false,
      },
    ],
    name: 'UpdateAdFLowRate',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'listingCreator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'listingId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'assetContract',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'listing',
        internalType: 'struct IDirectListings.Listing',
        type: 'tuple',
        components: [
          { name: 'listingId', internalType: 'uint256', type: 'uint256' },
          { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
          { name: 'quantity', internalType: 'uint256', type: 'uint256' },
          { name: 'pricePerToken', internalType: 'uint256', type: 'uint256' },
          { name: 'startTimestamp', internalType: 'uint128', type: 'uint128' },
          { name: 'endTimestamp', internalType: 'uint128', type: 'uint128' },
          { name: 'listingCreator', internalType: 'address', type: 'address' },
          { name: 'listingOwner', internalType: 'address', type: 'address' },
          { name: 'assetContract', internalType: 'address', type: 'address' },
          { name: 'currency', internalType: 'address', type: 'address' },
          { name: 'taxRate', internalType: 'uint256', type: 'uint256' },
          { name: 'taxBeneficiary', internalType: 'address', type: 'address' },
          {
            name: 'tokenType',
            internalType: 'enum IDirectListings.TokenType',
            type: 'uint8',
          },
          {
            name: 'status',
            internalType: 'enum IDirectListings.Status',
            type: 'uint8',
          },
          { name: 'reserved', internalType: 'bool', type: 'bool' },
        ],
        indexed: false,
      },
    ],
    name: 'UpdatedListing',
  },
  {
    type: 'error',
    inputs: [
      { name: 'expected', internalType: 'uint256', type: 'uint256' },
      { name: 'actual', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'CurrencyTransferLibMismatchedValue',
  },
] as const

/**
 * -
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9825f700754534108BFE2239C9e66a12FDEBB33e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x44f808B028cD582b21C04f6de3580029d3E31Cb6)
 */
export const directListingsLogicAddress = {
  1337: '0x998abeb3E57409262aE5b751f60747921B33613E',
  8453: '0x9825f700754534108BFE2239C9e66a12FDEBB33e',
  11155111: '0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94',
  11155420: '0x44f808B028cD582b21C04f6de3580029d3E31Cb6',
} as const

/**
 * -
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9825f700754534108BFE2239C9e66a12FDEBB33e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x44f808B028cD582b21C04f6de3580029d3E31Cb6)
 */
export const directListingsLogicConfig = {
  address: directListingsLogicAddress,
  abi: directListingsLogicAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20Abi = [
  {
    type: 'event',
    inputs: [
      { name: 'owner', type: 'address', indexed: true },
      { name: 'spender', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    inputs: [
      { name: 'from', type: 'address', indexed: true },
      { name: 'to', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender', type: 'address' },
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc721Abi = [
  {
    type: 'event',
    inputs: [
      { name: 'owner', type: 'address', indexed: true },
      { name: 'spender', type: 'address', indexed: true },
      { name: 'tokenId', type: 'uint256', indexed: true },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    inputs: [
      { name: 'owner', type: 'address', indexed: true },
      { name: 'operator', type: 'address', indexed: true },
      { name: 'approved', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    inputs: [
      { name: 'from', type: 'address', indexed: true },
      { name: 'to', type: 'address', indexed: true },
      { name: 'tokenId', type: 'uint256', indexed: true },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'tokenId', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'operator', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', type: 'address' },
      { name: 'to', type: 'address' },
      { name: 'tokenId', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', type: 'address' },
      { name: 'to', type: 'address' },
      { name: 'id', type: 'uint256' },
      { name: 'data', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', type: 'address' },
      { name: 'approved', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'index', type: 'uint256' },
    ],
    name: 'tokenByIndex',
    outputs: [{ name: 'tokenId', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender', type: 'address' },
      { name: 'recipient', type: 'address' },
      { name: 'tokeId', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'payable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// GDAv1Forwarder
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const gdAv1ForwarderAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
      { name: 'memberAddress', internalType: 'address', type: 'address' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'claimAll',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'connectPool',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'admin', internalType: 'address', type: 'address' },
      {
        name: 'config',
        internalType: 'struct PoolConfig',
        type: 'tuple',
        components: [
          {
            name: 'transferabilityForUnitsOwner',
            internalType: 'bool',
            type: 'bool',
          },
          {
            name: 'distributionFromAnyAddress',
            internalType: 'bool',
            type: 'bool',
          },
        ],
      },
    ],
    name: 'createPool',
    outputs: [
      { name: 'success', internalType: 'bool', type: 'bool' },
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'disconnectPool',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'from', internalType: 'address', type: 'address' },
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
      { name: 'requestedAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'distribute',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'from', internalType: 'address', type: 'address' },
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
      { name: 'requestedFlowRate', internalType: 'int96', type: 'int96' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'distributeFlow',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'contract ISuperfluidPool', type: 'address' },
      { name: 'requestedAmount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'estimateDistributionActualAmount',
    outputs: [
      { name: 'actualAmount', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'contract ISuperfluidPool', type: 'address' },
      { name: 'requestedFlowRate', internalType: 'int96', type: 'int96' },
    ],
    name: 'estimateFlowDistributionActualFlowRate',
    outputs: [
      { name: 'actualFlowRate', internalType: 'int96', type: 'int96' },
      {
        name: 'totalDistributionFlowRate',
        internalType: 'int96',
        type: 'int96',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'contract ISuperfluidPool', type: 'address' },
    ],
    name: 'getFlowDistributionFlowRate',
    outputs: [{ name: '', internalType: 'int96', type: 'int96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'getNetFlow',
    outputs: [{ name: '', internalType: 'int96', type: 'int96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
    ],
    name: 'getPoolAdjustmentFlowInfo',
    outputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'bytes32', type: 'bytes32' },
      { name: '', internalType: 'int96', type: 'int96' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'pool', internalType: 'address', type: 'address' }],
    name: 'getPoolAdjustmentFlowRate',
    outputs: [{ name: '', internalType: 'int96', type: 'int96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
      { name: 'member', internalType: 'address', type: 'address' },
    ],
    name: 'isMemberConnected',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'isPool',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
      { name: 'memberAddress', internalType: 'address', type: 'address' },
      { name: 'newUnits', internalType: 'uint128', type: 'uint128' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'updateMemberUnits',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// GeneralDistributionAgreementV1
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const generalDistributionAgreementV1Abi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
      {
        name: 'superfluidPoolBeacon_',
        internalType: 'contract SuperfluidUpgradeableBeacon',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'SLOTS_BITMAP_LIBRARY_ADDRESS',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'SUPERFLUID_POOL_DEPLOYER_ADDRESS',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'agreementType',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      {
        name: 'p',
        internalType: 'struct BasicParticle',
        type: 'tuple',
        components: [
          { name: '_settled_at', internalType: 'Time', type: 'uint32' },
          { name: '_flow_rate', internalType: 'FlowRate', type: 'int128' },
          { name: '_settled_value', internalType: 'Value', type: 'int256' },
        ],
      },
      { name: 't', internalType: 'Time', type: 'uint32' },
    ],
    name: 'appendIndexUpdateByPool',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'castrate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
      { name: 'memberAddress', internalType: 'address', type: 'address' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'claimAll',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
      { name: 'doConnect', internalType: 'bool', type: 'bool' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'connectPool',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'connectPool',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'admin', internalType: 'address', type: 'address' },
      {
        name: 'config',
        internalType: 'struct PoolConfig',
        type: 'tuple',
        components: [
          {
            name: 'transferabilityForUnitsOwner',
            internalType: 'bool',
            type: 'bool',
          },
          {
            name: 'distributionFromAnyAddress',
            internalType: 'bool',
            type: 'bool',
          },
        ],
      },
    ],
    name: 'createPool',
    outputs: [
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'disconnectPool',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'from', internalType: 'address', type: 'address' },
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
      { name: 'requestedAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'distribute',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'from', internalType: 'address', type: 'address' },
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
      { name: 'requestedFlowRate', internalType: 'int96', type: 'int96' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'distributeFlow',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'contract ISuperfluidPool', type: 'address' },
      { name: 'requestedAmount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'estimateDistributionActualAmount',
    outputs: [
      { name: 'actualAmount', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'contract ISuperfluidPool', type: 'address' },
      { name: 'requestedFlowRate', internalType: 'int96', type: 'int96' },
    ],
    name: 'estimateFlowDistributionActualFlowRate',
    outputs: [
      { name: 'actualFlowRate', internalType: 'int96', type: 'int96' },
      {
        name: 'totalDistributionFlowRate',
        internalType: 'int96',
        type: 'int96',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'getAccountFlowInfo',
    outputs: [
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
      { name: 'flowRate', internalType: 'int96', type: 'int96' },
      { name: 'deposit', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCodeAddress',
    outputs: [
      { name: 'codeAddress', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'contract ISuperfluidPool', type: 'address' },
    ],
    name: 'getFlow',
    outputs: [
      { name: 'lastUpdated', internalType: 'uint256', type: 'uint256' },
      { name: 'flowRate', internalType: 'int96', type: 'int96' },
      { name: 'deposit', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'contract ISuperfluidPool', type: 'address' },
    ],
    name: 'getFlowRate',
    outputs: [{ name: '', internalType: 'int96', type: 'int96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'getNetFlow',
    outputs: [{ name: 'netFlowRate', internalType: 'int96', type: 'int96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
    ],
    name: 'getPoolAdjustmentFlowInfo',
    outputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'flowHash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'flowRate', internalType: 'int96', type: 'int96' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'pool', internalType: 'address', type: 'address' }],
    name: 'getPoolAdjustmentFlowRate',
    outputs: [{ name: '', internalType: 'int96', type: 'int96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
      { name: 'member', internalType: 'address', type: 'address' },
    ],
    name: 'isMemberConnected',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'isPatricianPeriod',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'isPatricianPeriodNow',
    outputs: [
      {
        name: 'isCurrentlyPatricianPeriod',
        internalType: 'bool',
        type: 'bool',
      },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'isPool',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'superToken',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'claimRecipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'int256', type: 'int256' },
    ],
    name: 'poolSettleClaim',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'time', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'realtimeBalanceOf',
    outputs: [
      { name: 'rtb', internalType: 'int256', type: 'int256' },
      { name: 'buf', internalType: 'uint256', type: 'uint256' },
      { name: 'owedBuffer', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
      },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'realtimeBalanceOfNow',
    outputs: [
      { name: 'availableBalance', internalType: 'int256', type: 'int256' },
      { name: 'buffer', internalType: 'uint256', type: 'uint256' },
      { name: 'owedBuffer', internalType: 'uint256', type: 'uint256' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'superfluidPoolBeacon',
    outputs: [
      {
        name: '',
        internalType: 'contract SuperfluidUpgradeableBeacon',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'newAddress', internalType: 'address', type: 'address' }],
    name: 'updateCode',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
      },
      { name: 'memberAddress', internalType: 'address', type: 'address' },
      { name: 'newUnits', internalType: 'uint128', type: 'uint128' },
      { name: 'ctx', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'updateMemberUnits',
    outputs: [{ name: 'newCtx', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
        indexed: true,
      },
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'bufferDelta',
        internalType: 'int256',
        type: 'int256',
        indexed: false,
      },
      {
        name: 'newBufferAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'totalBufferAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'BufferAdjusted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'uuid',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'codeAddress',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'CodeUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
        indexed: true,
      },
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
        indexed: true,
      },
      {
        name: 'distributor',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'oldFlowRate',
        internalType: 'int96',
        type: 'int96',
        indexed: false,
      },
      {
        name: 'newDistributorToPoolFlowRate',
        internalType: 'int96',
        type: 'int96',
        indexed: false,
      },
      {
        name: 'newTotalDistributionFlowRate',
        internalType: 'int96',
        type: 'int96',
        indexed: false,
      },
      {
        name: 'adjustmentFlowRecipient',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'adjustmentFlowRate',
        internalType: 'int96',
        type: 'int96',
        indexed: false,
      },
      {
        name: 'userData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'FlowDistributionUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'version', internalType: 'uint8', type: 'uint8', indexed: false },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
        indexed: true,
      },
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
        indexed: true,
      },
      {
        name: 'distributor',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'requestedAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'actualAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'userData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'InstantDistributionUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
        indexed: true,
      },
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
        indexed: true,
      },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'connected', internalType: 'bool', type: 'bool', indexed: false },
      {
        name: 'userData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'PoolConnectionUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'contract ISuperfluidToken',
        type: 'address',
        indexed: true,
      },
      {
        name: 'admin',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'pool',
        internalType: 'contract ISuperfluidPool',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'PoolCreated',
  },
  { type: 'error', inputs: [], name: 'AGREEMENT_BASE_ONLY_HOST' },
  { type: 'error', inputs: [], name: 'GDA_ADMIN_CANNOT_BE_POOL' },
  { type: 'error', inputs: [], name: 'GDA_DISTRIBUTE_FOR_OTHERS_NOT_ALLOWED' },
  {
    type: 'error',
    inputs: [],
    name: 'GDA_DISTRIBUTE_FROM_ANY_ADDRESS_NOT_ALLOWED',
  },
  { type: 'error', inputs: [], name: 'GDA_FLOW_DOES_NOT_EXIST' },
  { type: 'error', inputs: [], name: 'GDA_INSUFFICIENT_BALANCE' },
  { type: 'error', inputs: [], name: 'GDA_NON_CRITICAL_SENDER' },
  { type: 'error', inputs: [], name: 'GDA_NOT_POOL_ADMIN' },
  { type: 'error', inputs: [], name: 'GDA_NO_NEGATIVE_FLOW_RATE' },
  { type: 'error', inputs: [], name: 'GDA_NO_ZERO_ADDRESS_ADMIN' },
  { type: 'error', inputs: [], name: 'GDA_ONLY_SUPER_TOKEN_POOL' },
  { type: 'error', inputs: [], name: 'OUT_OF_GAS' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IEAS
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ieasAbi = [
  {
    type: 'function',
    inputs: [
      {
        name: 'request',
        internalType: 'struct AttestationRequest',
        type: 'tuple',
        components: [
          { name: 'schema', internalType: 'bytes32', type: 'bytes32' },
          {
            name: 'data',
            internalType: 'struct AttestationRequestData',
            type: 'tuple',
            components: [
              { name: 'recipient', internalType: 'address', type: 'address' },
              {
                name: 'expirationTime',
                internalType: 'uint64',
                type: 'uint64',
              },
              { name: 'revocable', internalType: 'bool', type: 'bool' },
              { name: 'refUID', internalType: 'bytes32', type: 'bytes32' },
              { name: 'data', internalType: 'bytes', type: 'bytes' },
              { name: 'value', internalType: 'uint256', type: 'uint256' },
            ],
          },
        ],
      },
    ],
    name: 'attest',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'delegatedRequest',
        internalType: 'struct DelegatedAttestationRequest',
        type: 'tuple',
        components: [
          { name: 'schema', internalType: 'bytes32', type: 'bytes32' },
          {
            name: 'data',
            internalType: 'struct AttestationRequestData',
            type: 'tuple',
            components: [
              { name: 'recipient', internalType: 'address', type: 'address' },
              {
                name: 'expirationTime',
                internalType: 'uint64',
                type: 'uint64',
              },
              { name: 'revocable', internalType: 'bool', type: 'bool' },
              { name: 'refUID', internalType: 'bytes32', type: 'bytes32' },
              { name: 'data', internalType: 'bytes', type: 'bytes' },
              { name: 'value', internalType: 'uint256', type: 'uint256' },
            ],
          },
          {
            name: 'signature',
            internalType: 'struct Signature',
            type: 'tuple',
            components: [
              { name: 'v', internalType: 'uint8', type: 'uint8' },
              { name: 'r', internalType: 'bytes32', type: 'bytes32' },
              { name: 's', internalType: 'bytes32', type: 'bytes32' },
            ],
          },
          { name: 'attester', internalType: 'address', type: 'address' },
          { name: 'deadline', internalType: 'uint64', type: 'uint64' },
        ],
      },
    ],
    name: 'attestByDelegation',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'uid', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getAttestation',
    outputs: [
      {
        name: '',
        internalType: 'struct Attestation',
        type: 'tuple',
        components: [
          { name: 'uid', internalType: 'bytes32', type: 'bytes32' },
          { name: 'schema', internalType: 'bytes32', type: 'bytes32' },
          { name: 'time', internalType: 'uint64', type: 'uint64' },
          { name: 'expirationTime', internalType: 'uint64', type: 'uint64' },
          { name: 'revocationTime', internalType: 'uint64', type: 'uint64' },
          { name: 'refUID', internalType: 'bytes32', type: 'bytes32' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'attester', internalType: 'address', type: 'address' },
          { name: 'revocable', internalType: 'bool', type: 'bool' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'revoker', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getRevokeOffchain',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getSchemaRegistry',
    outputs: [
      { name: '', internalType: 'contract ISchemaRegistry', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getTimestamp',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'uid', internalType: 'bytes32', type: 'bytes32' }],
    name: 'isAttestationValid',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'multiRequests',
        internalType: 'struct MultiAttestationRequest[]',
        type: 'tuple[]',
        components: [
          { name: 'schema', internalType: 'bytes32', type: 'bytes32' },
          {
            name: 'data',
            internalType: 'struct AttestationRequestData[]',
            type: 'tuple[]',
            components: [
              { name: 'recipient', internalType: 'address', type: 'address' },
              {
                name: 'expirationTime',
                internalType: 'uint64',
                type: 'uint64',
              },
              { name: 'revocable', internalType: 'bool', type: 'bool' },
              { name: 'refUID', internalType: 'bytes32', type: 'bytes32' },
              { name: 'data', internalType: 'bytes', type: 'bytes' },
              { name: 'value', internalType: 'uint256', type: 'uint256' },
            ],
          },
        ],
      },
    ],
    name: 'multiAttest',
    outputs: [{ name: '', internalType: 'bytes32[]', type: 'bytes32[]' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'multiDelegatedRequests',
        internalType: 'struct MultiDelegatedAttestationRequest[]',
        type: 'tuple[]',
        components: [
          { name: 'schema', internalType: 'bytes32', type: 'bytes32' },
          {
            name: 'data',
            internalType: 'struct AttestationRequestData[]',
            type: 'tuple[]',
            components: [
              { name: 'recipient', internalType: 'address', type: 'address' },
              {
                name: 'expirationTime',
                internalType: 'uint64',
                type: 'uint64',
              },
              { name: 'revocable', internalType: 'bool', type: 'bool' },
              { name: 'refUID', internalType: 'bytes32', type: 'bytes32' },
              { name: 'data', internalType: 'bytes', type: 'bytes' },
              { name: 'value', internalType: 'uint256', type: 'uint256' },
            ],
          },
          {
            name: 'signatures',
            internalType: 'struct Signature[]',
            type: 'tuple[]',
            components: [
              { name: 'v', internalType: 'uint8', type: 'uint8' },
              { name: 'r', internalType: 'bytes32', type: 'bytes32' },
              { name: 's', internalType: 'bytes32', type: 'bytes32' },
            ],
          },
          { name: 'attester', internalType: 'address', type: 'address' },
          { name: 'deadline', internalType: 'uint64', type: 'uint64' },
        ],
      },
    ],
    name: 'multiAttestByDelegation',
    outputs: [{ name: '', internalType: 'bytes32[]', type: 'bytes32[]' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'multiRequests',
        internalType: 'struct MultiRevocationRequest[]',
        type: 'tuple[]',
        components: [
          { name: 'schema', internalType: 'bytes32', type: 'bytes32' },
          {
            name: 'data',
            internalType: 'struct RevocationRequestData[]',
            type: 'tuple[]',
            components: [
              { name: 'uid', internalType: 'bytes32', type: 'bytes32' },
              { name: 'value', internalType: 'uint256', type: 'uint256' },
            ],
          },
        ],
      },
    ],
    name: 'multiRevoke',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'multiDelegatedRequests',
        internalType: 'struct MultiDelegatedRevocationRequest[]',
        type: 'tuple[]',
        components: [
          { name: 'schema', internalType: 'bytes32', type: 'bytes32' },
          {
            name: 'data',
            internalType: 'struct RevocationRequestData[]',
            type: 'tuple[]',
            components: [
              { name: 'uid', internalType: 'bytes32', type: 'bytes32' },
              { name: 'value', internalType: 'uint256', type: 'uint256' },
            ],
          },
          {
            name: 'signatures',
            internalType: 'struct Signature[]',
            type: 'tuple[]',
            components: [
              { name: 'v', internalType: 'uint8', type: 'uint8' },
              { name: 'r', internalType: 'bytes32', type: 'bytes32' },
              { name: 's', internalType: 'bytes32', type: 'bytes32' },
            ],
          },
          { name: 'revoker', internalType: 'address', type: 'address' },
          { name: 'deadline', internalType: 'uint64', type: 'uint64' },
        ],
      },
    ],
    name: 'multiRevokeByDelegation',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes32[]', type: 'bytes32[]' }],
    name: 'multiRevokeOffchain',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes32[]', type: 'bytes32[]' }],
    name: 'multiTimestamp',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'request',
        internalType: 'struct RevocationRequest',
        type: 'tuple',
        components: [
          { name: 'schema', internalType: 'bytes32', type: 'bytes32' },
          {
            name: 'data',
            internalType: 'struct RevocationRequestData',
            type: 'tuple',
            components: [
              { name: 'uid', internalType: 'bytes32', type: 'bytes32' },
              { name: 'value', internalType: 'uint256', type: 'uint256' },
            ],
          },
        ],
      },
    ],
    name: 'revoke',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'delegatedRequest',
        internalType: 'struct DelegatedRevocationRequest',
        type: 'tuple',
        components: [
          { name: 'schema', internalType: 'bytes32', type: 'bytes32' },
          {
            name: 'data',
            internalType: 'struct RevocationRequestData',
            type: 'tuple',
            components: [
              { name: 'uid', internalType: 'bytes32', type: 'bytes32' },
              { name: 'value', internalType: 'uint256', type: 'uint256' },
            ],
          },
          {
            name: 'signature',
            internalType: 'struct Signature',
            type: 'tuple',
            components: [
              { name: 'v', internalType: 'uint8', type: 'uint8' },
              { name: 'r', internalType: 'bytes32', type: 'bytes32' },
              { name: 's', internalType: 'bytes32', type: 'bytes32' },
            ],
          },
          { name: 'revoker', internalType: 'address', type: 'address' },
          { name: 'deadline', internalType: 'uint64', type: 'uint64' },
        ],
      },
    ],
    name: 'revokeByDelegation',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes32', type: 'bytes32' }],
    name: 'revokeOffchain',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes32', type: 'bytes32' }],
    name: 'timestamp',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'version',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'attester',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'uid', internalType: 'bytes32', type: 'bytes32', indexed: false },
      {
        name: 'schemaUID',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'Attested',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'attester',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'uid', internalType: 'bytes32', type: 'bytes32', indexed: false },
      {
        name: 'schemaUID',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'Revoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'revoker',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'data', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'timestamp',
        internalType: 'uint64',
        type: 'uint64',
        indexed: true,
      },
    ],
    name: 'RevokedOffchain',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'data', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'timestamp',
        internalType: 'uint64',
        type: 'uint64',
        indexed: true,
      },
    ],
    name: 'Timestamped',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ISETH
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const isethAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'CONSTANT_INFLOW_NFT',
    outputs: [
      {
        name: '',
        internalType: 'contract IConstantInflowNFT',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'CONSTANT_OUTFLOW_NFT',
    outputs: [
      {
        name: '',
        internalType: 'contract IConstantOutflowNFT',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'POOL_ADMIN_NFT',
    outputs: [
      { name: '', internalType: 'contract IPoolAdminNFT', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'POOL_MEMBER_NFT',
    outputs: [
      { name: '', internalType: 'contract IPoolMemberNFT', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'authorizeOperator',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newAdmin', internalType: 'address', type: 'address' }],
    name: 'changeAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'bytes32', type: 'bytes32' },
      { name: 'data', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'createAgreement',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'subtractedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'defaultOperators',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'downgrade',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'downgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'wad', internalType: 'uint256', type: 'uint256' }],
    name: 'downgradeToETH',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getAccountActiveAgreements',
    outputs: [
      {
        name: 'activeAgreements',
        internalType: 'contract ISuperAgreement[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getAdmin',
    outputs: [{ name: 'admin', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'agreementClass', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'bytes32', type: 'bytes32' },
      { name: 'dataLength', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getAgreementData',
    outputs: [{ name: 'data', internalType: 'bytes32[]', type: 'bytes32[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'agreementClass', internalType: 'address', type: 'address' },
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'slotId', internalType: 'uint256', type: 'uint256' },
      { name: 'dataLength', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getAgreementStateSlot',
    outputs: [
      { name: 'slotData', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getHost',
    outputs: [{ name: 'host', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getUnderlyingDecimals',
    outputs: [
      { name: 'underlyingDecimals', internalType: 'uint8', type: 'uint8' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getUnderlyingToken',
    outputs: [{ name: 'tokenAddr', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'granularity',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'addedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'underlyingToken',
        internalType: 'contract IERC20',
        type: 'address',
      },
      { name: 'underlyingDecimals', internalType: 'uint8', type: 'uint8' },
      { name: 'n', internalType: 'string', type: 'string' },
      { name: 's', internalType: 'string', type: 'string' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'underlyingToken',
        internalType: 'contract IERC20',
        type: 'address',
      },
      { name: 'underlyingDecimals', internalType: 'uint8', type: 'uint8' },
      { name: 'n', internalType: 'string', type: 'string' },
      { name: 's', internalType: 'string', type: 'string' },
      { name: 'admin', internalType: 'address', type: 'address' },
    ],
    name: 'initializeWithAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'isAccountCritical',
    outputs: [{ name: 'isCritical', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'isAccountCriticalNow',
    outputs: [{ name: 'isCritical', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'isAccountSolvent',
    outputs: [{ name: 'isSolvent', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'isAccountSolventNow',
    outputs: [{ name: 'isSolvent', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenHolder', internalType: 'address', type: 'address' },
    ],
    name: 'isOperatorFor',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'bytes32', type: 'bytes32' },
      { name: 'liquidationTypeData', internalType: 'bytes', type: 'bytes' },
      { name: 'liquidatorAccount', internalType: 'address', type: 'address' },
      { name: 'useDefaultRewardAccount', internalType: 'bool', type: 'bool' },
      { name: 'targetAccount', internalType: 'address', type: 'address' },
      { name: 'rewardAmount', internalType: 'uint256', type: 'uint256' },
      {
        name: 'targetAccountBalanceDelta',
        internalType: 'int256',
        type: 'int256',
      },
    ],
    name: 'makeLiquidationPayoutsV2',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'operationApprove',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'subtractedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'operationDecreaseAllowance',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'operationDowngrade',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'addedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'operationIncreaseAllowance',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'operationSend',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'operationTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'operationUpgrade',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
      { name: 'operatorData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'operatorBurn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
      { name: 'operatorData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'operatorSend',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'realtimeBalanceOf',
    outputs: [
      { name: 'availableBalance', internalType: 'int256', type: 'int256' },
      { name: 'deposit', internalType: 'uint256', type: 'uint256' },
      { name: 'owedDeposit', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'realtimeBalanceOfNow',
    outputs: [
      { name: 'availableBalance', internalType: 'int256', type: 'int256' },
      { name: 'deposit', internalType: 'uint256', type: 'uint256' },
      { name: 'owedDeposit', internalType: 'uint256', type: 'uint256' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'revokeOperator',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'selfApproveFor',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'selfBurn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'selfMint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'selfTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'send',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'delta', internalType: 'int256', type: 'int256' },
    ],
    name: 'settleBalance',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'bytes32', type: 'bytes32' },
      { name: 'dataLength', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'terminateAgreement',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'toUnderlyingAmount',
    outputs: [
      { name: 'underlyingAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'adjustedAmount', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'recipient', internalType: 'address', type: 'address' }],
    name: 'transferAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'bytes32', type: 'bytes32' },
      { name: 'data', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'updateAgreementData',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'slotId', internalType: 'uint256', type: 'uint256' },
      { name: 'slotData', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'updateAgreementStateSlot',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'upgrade',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'upgradeByETH',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'upgradeByETHTo',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'upgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldAdmin',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'AdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'agreementClass',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: false },
      {
        name: 'data',
        internalType: 'bytes32[]',
        type: 'bytes32[]',
        indexed: false,
      },
    ],
    name: 'AgreementCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'agreementClass',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: false },
      {
        name: 'penaltyAccount',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'rewardAccount',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'rewardAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'AgreementLiquidated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'liquidatorAccount',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'agreementClass',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: false },
      {
        name: 'penaltyAccount',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'bondAccount',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'rewardAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'bailoutAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'AgreementLiquidatedBy',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'agreementClass',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: false },
      {
        name: 'liquidatorAccount',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'targetAccount',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'rewardAmountReceiver',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'rewardAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'targetAccountBalanceDelta',
        internalType: 'int256',
        type: 'int256',
        indexed: false,
      },
      {
        name: 'liquidationTypeData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'AgreementLiquidatedV2',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'agreementClass',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'slotId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'AgreementStateUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'agreementClass',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'AgreementTerminated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'agreementClass',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: false },
      {
        name: 'data',
        internalType: 'bytes32[]',
        type: 'bytes32[]',
        indexed: false,
      },
    ],
    name: 'AgreementUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenHolder',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'AuthorizedOperator',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'bailoutAccount',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'bailoutAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Bailout',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'data', internalType: 'bytes', type: 'bytes', indexed: false },
      {
        name: 'operatorData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'Burned',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'constantInflowNFT',
        internalType: 'contract IConstantInflowNFT',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'ConstantInflowNFTCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'constantOutflowNFT',
        internalType: 'contract IConstantOutflowNFT',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'ConstantOutflowNFTCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'data', internalType: 'bytes', type: 'bytes', indexed: false },
      {
        name: 'operatorData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'Minted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'poolAdminNFT',
        internalType: 'contract IPoolAdminNFT',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'PoolAdminNFTCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'poolMemberNFT',
        internalType: 'contract IPoolMemberNFT',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'PoolMemberNFTCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenHolder',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RevokedOperator',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'data', internalType: 'bytes', type: 'bytes', indexed: false },
      {
        name: 'operatorData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'Sent',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'TokenDowngraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'TokenUpgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  { type: 'error', inputs: [], name: 'SF_TOKEN_AGREEMENT_ALREADY_EXISTS' },
  { type: 'error', inputs: [], name: 'SF_TOKEN_AGREEMENT_DOES_NOT_EXIST' },
  { type: 'error', inputs: [], name: 'SF_TOKEN_BURN_INSUFFICIENT_BALANCE' },
  { type: 'error', inputs: [], name: 'SF_TOKEN_MOVE_INSUFFICIENT_BALANCE' },
  { type: 'error', inputs: [], name: 'SF_TOKEN_ONLY_HOST' },
  { type: 'error', inputs: [], name: 'SF_TOKEN_ONLY_LISTED_AGREEMENT' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_APPROVE_FROM_ZERO_ADDRESS' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_APPROVE_TO_ZERO_ADDRESS' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_BURN_FROM_ZERO_ADDRESS' },
  {
    type: 'error',
    inputs: [],
    name: 'SUPER_TOKEN_CALLER_IS_NOT_OPERATOR_FOR_HOLDER',
  },
  {
    type: 'error',
    inputs: [],
    name: 'SUPER_TOKEN_INFLATIONARY_DEFLATIONARY_NOT_SUPPORTED',
  },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_MINT_TO_ZERO_ADDRESS' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_NFT_PROXY_ADDRESS_CHANGED' },
  {
    type: 'error',
    inputs: [],
    name: 'SUPER_TOKEN_NOT_ERC777_TOKENS_RECIPIENT',
  },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_NO_UNDERLYING_TOKEN' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_ONLY_ADMIN' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_ONLY_GOV_OWNER' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_ONLY_SELF' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_TRANSFER_FROM_ZERO_ADDRESS' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_TRANSFER_TO_ZERO_ADDRESS' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ISETHCustom
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const isethCustomAbi = [
  {
    type: 'function',
    inputs: [{ name: 'wad', internalType: 'uint256', type: 'uint256' }],
    name: 'downgradeToETH',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'upgradeByETH',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'upgradeByETHTo',
    outputs: [],
    stateMutability: 'payable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SuperToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const superTokenAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
      {
        name: 'constantOutflowNFT',
        internalType: 'contract IConstantOutflowNFT',
        type: 'address',
      },
      {
        name: 'constantInflowNFT',
        internalType: 'contract IConstantInflowNFT',
        type: 'address',
      },
      {
        name: 'poolAdminNFT',
        internalType: 'contract IPoolAdminNFT',
        type: 'address',
      },
      {
        name: 'poolMemberNFT',
        internalType: 'contract IPoolMemberNFT',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'CONSTANT_INFLOW_NFT',
    outputs: [
      {
        name: '',
        internalType: 'contract IConstantInflowNFT',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'CONSTANT_OUTFLOW_NFT',
    outputs: [
      {
        name: '',
        internalType: 'contract IConstantOutflowNFT',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'POOL_ADMIN_NFT',
    outputs: [
      { name: '', internalType: 'contract IPoolAdminNFT', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'POOL_MEMBER_NFT',
    outputs: [
      { name: '', internalType: 'contract IPoolMemberNFT', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'authorizeOperator',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'castrate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newAdmin', internalType: 'address', type: 'address' }],
    name: 'changeAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'bytes32', type: 'bytes32' },
      { name: 'data', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'createAgreement',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'subtractedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'defaultOperators',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'downgrade',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'downgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getAccountActiveAgreements',
    outputs: [
      {
        name: '',
        internalType: 'contract ISuperAgreement[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getAdmin',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'agreementClass', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'bytes32', type: 'bytes32' },
      { name: 'dataLength', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getAgreementData',
    outputs: [{ name: 'data', internalType: 'bytes32[]', type: 'bytes32[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'agreementClass', internalType: 'address', type: 'address' },
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'slotId', internalType: 'uint256', type: 'uint256' },
      { name: 'dataLength', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getAgreementStateSlot',
    outputs: [
      { name: 'slotData', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCodeAddress',
    outputs: [
      { name: 'codeAddress', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getHost',
    outputs: [{ name: 'host', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getUnderlyingDecimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getUnderlyingToken',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'granularity',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'addedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'underlyingToken',
        internalType: 'contract IERC20',
        type: 'address',
      },
      { name: 'underlyingDecimals', internalType: 'uint8', type: 'uint8' },
      { name: 'n', internalType: 'string', type: 'string' },
      { name: 's', internalType: 'string', type: 'string' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'underlyingToken',
        internalType: 'contract IERC20',
        type: 'address',
      },
      { name: 'underlyingDecimals', internalType: 'uint8', type: 'uint8' },
      { name: 'n', internalType: 'string', type: 'string' },
      { name: 's', internalType: 'string', type: 'string' },
      { name: 'admin', internalType: 'address', type: 'address' },
    ],
    name: 'initializeWithAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'isAccountCritical',
    outputs: [{ name: 'isCritical', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'isAccountCriticalNow',
    outputs: [{ name: 'isCritical', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'isAccountSolvent',
    outputs: [{ name: 'isSolvent', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'isAccountSolventNow',
    outputs: [{ name: 'isSolvent', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenHolder', internalType: 'address', type: 'address' },
    ],
    name: 'isOperatorFor',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'bytes32', type: 'bytes32' },
      { name: 'liquidationTypeData', internalType: 'bytes', type: 'bytes' },
      { name: 'liquidatorAccount', internalType: 'address', type: 'address' },
      { name: 'useDefaultRewardAccount', internalType: 'bool', type: 'bool' },
      { name: 'targetAccount', internalType: 'address', type: 'address' },
      { name: 'rewardAmount', internalType: 'uint256', type: 'uint256' },
      {
        name: 'targetAccountBalanceDelta',
        internalType: 'int256',
        type: 'int256',
      },
    ],
    name: 'makeLiquidationPayoutsV2',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'operationApprove',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'subtractedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'operationDecreaseAllowance',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'operationDowngrade',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'addedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'operationIncreaseAllowance',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'operationSend',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'operationTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'operationUpgrade',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
      { name: 'operatorData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'operatorBurn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
      { name: 'operatorData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'operatorSend',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'realtimeBalanceOf',
    outputs: [
      { name: 'availableBalance', internalType: 'int256', type: 'int256' },
      { name: 'deposit', internalType: 'uint256', type: 'uint256' },
      { name: 'owedDeposit', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'realtimeBalanceOfNow',
    outputs: [
      { name: 'availableBalance', internalType: 'int256', type: 'int256' },
      { name: 'deposit', internalType: 'uint256', type: 'uint256' },
      { name: 'owedDeposit', internalType: 'uint256', type: 'uint256' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'revokeOperator',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'selfApproveFor',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'selfBurn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'selfMint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'holder', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'selfTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'send',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'delta', internalType: 'int256', type: 'int256' },
    ],
    name: 'settleBalance',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'bytes32', type: 'bytes32' },
      { name: 'dataLength', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'terminateAgreement',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'toUnderlyingAmount',
    outputs: [
      { name: 'underlyingAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'adjustedAmount', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'recipient', internalType: 'address', type: 'address' }],
    name: 'transferAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'holder', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'bytes32', type: 'bytes32' },
      { name: 'data', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'updateAgreementData',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'slotId', internalType: 'uint256', type: 'uint256' },
      { name: 'slotData', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'updateAgreementStateSlot',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newAddress', internalType: 'address', type: 'address' }],
    name: 'updateCode',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'upgrade',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'upgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldAdmin',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'AdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'agreementClass',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: false },
      {
        name: 'data',
        internalType: 'bytes32[]',
        type: 'bytes32[]',
        indexed: false,
      },
    ],
    name: 'AgreementCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'agreementClass',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: false },
      {
        name: 'penaltyAccount',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'rewardAccount',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'rewardAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'AgreementLiquidated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'liquidatorAccount',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'agreementClass',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: false },
      {
        name: 'penaltyAccount',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'bondAccount',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'rewardAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'bailoutAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'AgreementLiquidatedBy',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'agreementClass',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: false },
      {
        name: 'liquidatorAccount',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'targetAccount',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'rewardAmountReceiver',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'rewardAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'targetAccountBalanceDelta',
        internalType: 'int256',
        type: 'int256',
        indexed: false,
      },
      {
        name: 'liquidationTypeData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'AgreementLiquidatedV2',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'agreementClass',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'slotId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'AgreementStateUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'agreementClass',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'AgreementTerminated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'agreementClass',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: false },
      {
        name: 'data',
        internalType: 'bytes32[]',
        type: 'bytes32[]',
        indexed: false,
      },
    ],
    name: 'AgreementUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenHolder',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'AuthorizedOperator',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'bailoutAccount',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'bailoutAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Bailout',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'data', internalType: 'bytes', type: 'bytes', indexed: false },
      {
        name: 'operatorData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'Burned',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'uuid',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'codeAddress',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'CodeUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'constantInflowNFT',
        internalType: 'contract IConstantInflowNFT',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'ConstantInflowNFTCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'constantOutflowNFT',
        internalType: 'contract IConstantOutflowNFT',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'ConstantOutflowNFTCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'version', internalType: 'uint8', type: 'uint8', indexed: false },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'data', internalType: 'bytes', type: 'bytes', indexed: false },
      {
        name: 'operatorData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'Minted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'poolAdminNFT',
        internalType: 'contract IPoolAdminNFT',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'PoolAdminNFTCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'poolMemberNFT',
        internalType: 'contract IPoolMemberNFT',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'PoolMemberNFTCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenHolder',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RevokedOperator',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'data', internalType: 'bytes', type: 'bytes', indexed: false },
      {
        name: 'operatorData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'Sent',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'TokenDowngraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'TokenUpgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  { type: 'error', inputs: [], name: 'SF_TOKEN_AGREEMENT_ALREADY_EXISTS' },
  { type: 'error', inputs: [], name: 'SF_TOKEN_AGREEMENT_DOES_NOT_EXIST' },
  { type: 'error', inputs: [], name: 'SF_TOKEN_BURN_INSUFFICIENT_BALANCE' },
  { type: 'error', inputs: [], name: 'SF_TOKEN_MOVE_INSUFFICIENT_BALANCE' },
  { type: 'error', inputs: [], name: 'SF_TOKEN_ONLY_HOST' },
  { type: 'error', inputs: [], name: 'SF_TOKEN_ONLY_LISTED_AGREEMENT' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_APPROVE_FROM_ZERO_ADDRESS' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_APPROVE_TO_ZERO_ADDRESS' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_BURN_FROM_ZERO_ADDRESS' },
  {
    type: 'error',
    inputs: [],
    name: 'SUPER_TOKEN_CALLER_IS_NOT_OPERATOR_FOR_HOLDER',
  },
  {
    type: 'error',
    inputs: [],
    name: 'SUPER_TOKEN_INFLATIONARY_DEFLATIONARY_NOT_SUPPORTED',
  },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_MINT_TO_ZERO_ADDRESS' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_NFT_PROXY_ADDRESS_CHANGED' },
  {
    type: 'error',
    inputs: [],
    name: 'SUPER_TOKEN_NOT_ERC777_TOKENS_RECIPIENT',
  },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_NO_UNDERLYING_TOKEN' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_ONLY_ADMIN' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_ONLY_GOV_OWNER' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_ONLY_SELF' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_TRANSFER_FROM_ZERO_ADDRESS' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_TRANSFER_TO_ZERO_ADDRESS' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link cfAv1ForwarderAbi}__
 */
export const useReadCfAv1Forwarder = /*#__PURE__*/ createUseReadContract({
  abi: cfAv1ForwarderAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link cfAv1ForwarderAbi}__ and `functionName` set to `"getAccountFlowInfo"`
 */
export const useReadCfAv1ForwarderGetAccountFlowInfo =
  /*#__PURE__*/ createUseReadContract({
    abi: cfAv1ForwarderAbi,
    functionName: 'getAccountFlowInfo',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link cfAv1ForwarderAbi}__ and `functionName` set to `"getAccountFlowrate"`
 */
export const useReadCfAv1ForwarderGetAccountFlowrate =
  /*#__PURE__*/ createUseReadContract({
    abi: cfAv1ForwarderAbi,
    functionName: 'getAccountFlowrate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link cfAv1ForwarderAbi}__ and `functionName` set to `"getBufferAmountByFlowrate"`
 */
export const useReadCfAv1ForwarderGetBufferAmountByFlowrate =
  /*#__PURE__*/ createUseReadContract({
    abi: cfAv1ForwarderAbi,
    functionName: 'getBufferAmountByFlowrate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link cfAv1ForwarderAbi}__ and `functionName` set to `"getFlowInfo"`
 */
export const useReadCfAv1ForwarderGetFlowInfo =
  /*#__PURE__*/ createUseReadContract({
    abi: cfAv1ForwarderAbi,
    functionName: 'getFlowInfo',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link cfAv1ForwarderAbi}__ and `functionName` set to `"getFlowOperatorPermissions"`
 */
export const useReadCfAv1ForwarderGetFlowOperatorPermissions =
  /*#__PURE__*/ createUseReadContract({
    abi: cfAv1ForwarderAbi,
    functionName: 'getFlowOperatorPermissions',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link cfAv1ForwarderAbi}__ and `functionName` set to `"getFlowrate"`
 */
export const useReadCfAv1ForwarderGetFlowrate =
  /*#__PURE__*/ createUseReadContract({
    abi: cfAv1ForwarderAbi,
    functionName: 'getFlowrate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link cfAv1ForwarderAbi}__
 */
export const useWriteCfAv1Forwarder = /*#__PURE__*/ createUseWriteContract({
  abi: cfAv1ForwarderAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link cfAv1ForwarderAbi}__ and `functionName` set to `"createFlow"`
 */
export const useWriteCfAv1ForwarderCreateFlow =
  /*#__PURE__*/ createUseWriteContract({
    abi: cfAv1ForwarderAbi,
    functionName: 'createFlow',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link cfAv1ForwarderAbi}__ and `functionName` set to `"deleteFlow"`
 */
export const useWriteCfAv1ForwarderDeleteFlow =
  /*#__PURE__*/ createUseWriteContract({
    abi: cfAv1ForwarderAbi,
    functionName: 'deleteFlow',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link cfAv1ForwarderAbi}__ and `functionName` set to `"grantPermissions"`
 */
export const useWriteCfAv1ForwarderGrantPermissions =
  /*#__PURE__*/ createUseWriteContract({
    abi: cfAv1ForwarderAbi,
    functionName: 'grantPermissions',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link cfAv1ForwarderAbi}__ and `functionName` set to `"revokePermissions"`
 */
export const useWriteCfAv1ForwarderRevokePermissions =
  /*#__PURE__*/ createUseWriteContract({
    abi: cfAv1ForwarderAbi,
    functionName: 'revokePermissions',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link cfAv1ForwarderAbi}__ and `functionName` set to `"setFlowrate"`
 */
export const useWriteCfAv1ForwarderSetFlowrate =
  /*#__PURE__*/ createUseWriteContract({
    abi: cfAv1ForwarderAbi,
    functionName: 'setFlowrate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link cfAv1ForwarderAbi}__ and `functionName` set to `"setFlowrateFrom"`
 */
export const useWriteCfAv1ForwarderSetFlowrateFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: cfAv1ForwarderAbi,
    functionName: 'setFlowrateFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link cfAv1ForwarderAbi}__ and `functionName` set to `"updateFlow"`
 */
export const useWriteCfAv1ForwarderUpdateFlow =
  /*#__PURE__*/ createUseWriteContract({
    abi: cfAv1ForwarderAbi,
    functionName: 'updateFlow',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link cfAv1ForwarderAbi}__ and `functionName` set to `"updateFlowOperatorPermissions"`
 */
export const useWriteCfAv1ForwarderUpdateFlowOperatorPermissions =
  /*#__PURE__*/ createUseWriteContract({
    abi: cfAv1ForwarderAbi,
    functionName: 'updateFlowOperatorPermissions',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link cfAv1ForwarderAbi}__
 */
export const useSimulateCfAv1Forwarder =
  /*#__PURE__*/ createUseSimulateContract({ abi: cfAv1ForwarderAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link cfAv1ForwarderAbi}__ and `functionName` set to `"createFlow"`
 */
export const useSimulateCfAv1ForwarderCreateFlow =
  /*#__PURE__*/ createUseSimulateContract({
    abi: cfAv1ForwarderAbi,
    functionName: 'createFlow',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link cfAv1ForwarderAbi}__ and `functionName` set to `"deleteFlow"`
 */
export const useSimulateCfAv1ForwarderDeleteFlow =
  /*#__PURE__*/ createUseSimulateContract({
    abi: cfAv1ForwarderAbi,
    functionName: 'deleteFlow',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link cfAv1ForwarderAbi}__ and `functionName` set to `"grantPermissions"`
 */
export const useSimulateCfAv1ForwarderGrantPermissions =
  /*#__PURE__*/ createUseSimulateContract({
    abi: cfAv1ForwarderAbi,
    functionName: 'grantPermissions',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link cfAv1ForwarderAbi}__ and `functionName` set to `"revokePermissions"`
 */
export const useSimulateCfAv1ForwarderRevokePermissions =
  /*#__PURE__*/ createUseSimulateContract({
    abi: cfAv1ForwarderAbi,
    functionName: 'revokePermissions',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link cfAv1ForwarderAbi}__ and `functionName` set to `"setFlowrate"`
 */
export const useSimulateCfAv1ForwarderSetFlowrate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: cfAv1ForwarderAbi,
    functionName: 'setFlowrate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link cfAv1ForwarderAbi}__ and `functionName` set to `"setFlowrateFrom"`
 */
export const useSimulateCfAv1ForwarderSetFlowrateFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: cfAv1ForwarderAbi,
    functionName: 'setFlowrateFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link cfAv1ForwarderAbi}__ and `functionName` set to `"updateFlow"`
 */
export const useSimulateCfAv1ForwarderUpdateFlow =
  /*#__PURE__*/ createUseSimulateContract({
    abi: cfAv1ForwarderAbi,
    functionName: 'updateFlow',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link cfAv1ForwarderAbi}__ and `functionName` set to `"updateFlowOperatorPermissions"`
 */
export const useSimulateCfAv1ForwarderUpdateFlowOperatorPermissions =
  /*#__PURE__*/ createUseSimulateContract({
    abi: cfAv1ForwarderAbi,
    functionName: 'updateFlowOperatorPermissions',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link commonAdPoolAbi}__
 */
export const useReadCommonAdPool = /*#__PURE__*/ createUseReadContract({
  abi: commonAdPoolAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link commonAdPoolAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 */
export const useReadCommonAdPoolDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: commonAdPoolAbi,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link commonAdPoolAbi}__ and `functionName` set to `"MEMBER_UNITS_ADMIN_ROLE"`
 */
export const useReadCommonAdPoolMemberUnitsAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: commonAdPoolAbi,
    functionName: 'MEMBER_UNITS_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link commonAdPoolAbi}__ and `functionName` set to `"getRoleAdmin"`
 */
export const useReadCommonAdPoolGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: commonAdPoolAbi,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link commonAdPoolAbi}__ and `functionName` set to `"hasRole"`
 */
export const useReadCommonAdPoolHasRole = /*#__PURE__*/ createUseReadContract({
  abi: commonAdPoolAbi,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link commonAdPoolAbi}__ and `functionName` set to `"pool"`
 */
export const useReadCommonAdPoolPool = /*#__PURE__*/ createUseReadContract({
  abi: commonAdPoolAbi,
  functionName: 'pool',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link commonAdPoolAbi}__ and `functionName` set to `"superToken"`
 */
export const useReadCommonAdPoolSuperToken =
  /*#__PURE__*/ createUseReadContract({
    abi: commonAdPoolAbi,
    functionName: 'superToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link commonAdPoolAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadCommonAdPoolSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: commonAdPoolAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link commonAdPoolAbi}__
 */
export const useWriteCommonAdPool = /*#__PURE__*/ createUseWriteContract({
  abi: commonAdPoolAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link commonAdPoolAbi}__ and `functionName` set to `"grantRole"`
 */
export const useWriteCommonAdPoolGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: commonAdPoolAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link commonAdPoolAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useWriteCommonAdPoolRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: commonAdPoolAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link commonAdPoolAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useWriteCommonAdPoolRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: commonAdPoolAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link commonAdPoolAbi}__ and `functionName` set to `"updateMemberUnits"`
 */
export const useWriteCommonAdPoolUpdateMemberUnits =
  /*#__PURE__*/ createUseWriteContract({
    abi: commonAdPoolAbi,
    functionName: 'updateMemberUnits',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link commonAdPoolAbi}__
 */
export const useSimulateCommonAdPool = /*#__PURE__*/ createUseSimulateContract({
  abi: commonAdPoolAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link commonAdPoolAbi}__ and `functionName` set to `"grantRole"`
 */
export const useSimulateCommonAdPoolGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: commonAdPoolAbi,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link commonAdPoolAbi}__ and `functionName` set to `"renounceRole"`
 */
export const useSimulateCommonAdPoolRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: commonAdPoolAbi,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link commonAdPoolAbi}__ and `functionName` set to `"revokeRole"`
 */
export const useSimulateCommonAdPoolRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: commonAdPoolAbi,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link commonAdPoolAbi}__ and `functionName` set to `"updateMemberUnits"`
 */
export const useSimulateCommonAdPoolUpdateMemberUnits =
  /*#__PURE__*/ createUseSimulateContract({
    abi: commonAdPoolAbi,
    functionName: 'updateMemberUnits',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link commonAdPoolAbi}__
 */
export const useWatchCommonAdPoolEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: commonAdPoolAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link commonAdPoolAbi}__ and `eventName` set to `"RoleAdminChanged"`
 */
export const useWatchCommonAdPoolRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: commonAdPoolAbi,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link commonAdPoolAbi}__ and `eventName` set to `"RoleGranted"`
 */
export const useWatchCommonAdPoolRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: commonAdPoolAbi,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link commonAdPoolAbi}__ and `eventName` set to `"RoleRevoked"`
 */
export const useWatchCommonAdPoolRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: commonAdPoolAbi,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link commonAdSpaceAssetAbi}__
 */
export const useReadCommonAdSpaceAsset = /*#__PURE__*/ createUseReadContract({
  abi: commonAdSpaceAssetAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link commonAdSpaceAssetAbi}__ and `functionName` set to `"getTokenX"`
 */
export const useReadCommonAdSpaceAssetGetTokenX =
  /*#__PURE__*/ createUseReadContract({
    abi: commonAdSpaceAssetAbi,
    functionName: 'getTokenX',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link commonAdSpacesAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useReadCommonAdSpaces = /*#__PURE__*/ createUseReadContract({
  abi: commonAdSpacesAbi,
  address: commonAdSpacesAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"adGroupIds"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useReadCommonAdSpacesAdGroupIds =
  /*#__PURE__*/ createUseReadContract({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    functionName: 'adGroupIds',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"adGroups"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useReadCommonAdSpacesAdGroups =
  /*#__PURE__*/ createUseReadContract({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    functionName: 'adGroups',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"ads"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useReadCommonAdSpacesAds = /*#__PURE__*/ createUseReadContract({
  abi: commonAdSpacesAbi,
  address: commonAdSpacesAddress,
  functionName: 'ads',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"balanceOf"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useReadCommonAdSpacesBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"getAdPool"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useReadCommonAdSpacesGetAdPool =
  /*#__PURE__*/ createUseReadContract({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    functionName: 'getAdPool',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"getAdUri"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useReadCommonAdSpacesGetAdUri =
  /*#__PURE__*/ createUseReadContract({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    functionName: 'getAdUri',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"getApproved"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useReadCommonAdSpacesGetApproved =
  /*#__PURE__*/ createUseReadContract({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    functionName: 'getApproved',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"getGroup"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useReadCommonAdSpacesGetGroup =
  /*#__PURE__*/ createUseReadContract({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    functionName: 'getGroup',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"getTokenX"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useReadCommonAdSpacesGetTokenX =
  /*#__PURE__*/ createUseReadContract({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    functionName: 'getTokenX',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"isApprovedForAll"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useReadCommonAdSpacesIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"name"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useReadCommonAdSpacesName = /*#__PURE__*/ createUseReadContract({
  abi: commonAdSpacesAbi,
  address: commonAdSpacesAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"owner"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useReadCommonAdSpacesOwner = /*#__PURE__*/ createUseReadContract({
  abi: commonAdSpacesAbi,
  address: commonAdSpacesAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"ownerOf"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useReadCommonAdSpacesOwnerOf = /*#__PURE__*/ createUseReadContract(
  {
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    functionName: 'ownerOf',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"placeholderURI"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useReadCommonAdSpacesPlaceholderUri =
  /*#__PURE__*/ createUseReadContract({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    functionName: 'placeholderURI',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"proxiableUUID"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useReadCommonAdSpacesProxiableUuid =
  /*#__PURE__*/ createUseReadContract({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    functionName: 'proxiableUUID',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"royaltyInfo"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useReadCommonAdSpacesRoyaltyInfo =
  /*#__PURE__*/ createUseReadContract({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    functionName: 'royaltyInfo',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"supportsInterface"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useReadCommonAdSpacesSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"symbol"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useReadCommonAdSpacesSymbol = /*#__PURE__*/ createUseReadContract({
  abi: commonAdSpacesAbi,
  address: commonAdSpacesAddress,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"tokenURI"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useReadCommonAdSpacesTokenUri =
  /*#__PURE__*/ createUseReadContract({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    functionName: 'tokenURI',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"tokenXs"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useReadCommonAdSpacesTokenXs = /*#__PURE__*/ createUseReadContract(
  {
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    functionName: 'tokenXs',
  },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link commonAdSpacesAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useWriteCommonAdSpaces = /*#__PURE__*/ createUseWriteContract({
  abi: commonAdSpacesAbi,
  address: commonAdSpacesAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useWriteCommonAdSpacesApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"createAdGroup"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useWriteCommonAdSpacesCreateAdGroup =
  /*#__PURE__*/ createUseWriteContract({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    functionName: 'createAdGroup',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"createAdPool"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useWriteCommonAdSpacesCreateAdPool =
  /*#__PURE__*/ createUseWriteContract({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    functionName: 'createAdPool',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"initialize"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useWriteCommonAdSpacesInitialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"openAdSpaces"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useWriteCommonAdSpacesOpenAdSpaces =
  /*#__PURE__*/ createUseWriteContract({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    functionName: 'openAdSpaces',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useWriteCommonAdSpacesRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"safeTransferFrom"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useWriteCommonAdSpacesSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"setApprovalForAll"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useWriteCommonAdSpacesSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"setTokenURI"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useWriteCommonAdSpacesSetTokenUri =
  /*#__PURE__*/ createUseWriteContract({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    functionName: 'setTokenURI',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"setTokenX"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useWriteCommonAdSpacesSetTokenX =
  /*#__PURE__*/ createUseWriteContract({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    functionName: 'setTokenX',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useWriteCommonAdSpacesTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useWriteCommonAdSpacesTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"updateAdGroupMetadata"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useWriteCommonAdSpacesUpdateAdGroupMetadata =
  /*#__PURE__*/ createUseWriteContract({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    functionName: 'updateAdGroupMetadata',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"updateAdStrategy"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useWriteCommonAdSpacesUpdateAdStrategy =
  /*#__PURE__*/ createUseWriteContract({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    functionName: 'updateAdStrategy',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"updateAdURI"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useWriteCommonAdSpacesUpdateAdUri =
  /*#__PURE__*/ createUseWriteContract({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    functionName: 'updateAdURI',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useWriteCommonAdSpacesUpgradeTo =
  /*#__PURE__*/ createUseWriteContract({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"upgradeToAndCall"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useWriteCommonAdSpacesUpgradeToAndCall =
  /*#__PURE__*/ createUseWriteContract({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link commonAdSpacesAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useSimulateCommonAdSpaces =
  /*#__PURE__*/ createUseSimulateContract({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useSimulateCommonAdSpacesApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"createAdGroup"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useSimulateCommonAdSpacesCreateAdGroup =
  /*#__PURE__*/ createUseSimulateContract({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    functionName: 'createAdGroup',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"createAdPool"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useSimulateCommonAdSpacesCreateAdPool =
  /*#__PURE__*/ createUseSimulateContract({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    functionName: 'createAdPool',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"initialize"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useSimulateCommonAdSpacesInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"openAdSpaces"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useSimulateCommonAdSpacesOpenAdSpaces =
  /*#__PURE__*/ createUseSimulateContract({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    functionName: 'openAdSpaces',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useSimulateCommonAdSpacesRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"safeTransferFrom"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useSimulateCommonAdSpacesSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"setApprovalForAll"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useSimulateCommonAdSpacesSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"setTokenURI"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useSimulateCommonAdSpacesSetTokenUri =
  /*#__PURE__*/ createUseSimulateContract({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    functionName: 'setTokenURI',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"setTokenX"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useSimulateCommonAdSpacesSetTokenX =
  /*#__PURE__*/ createUseSimulateContract({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    functionName: 'setTokenX',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useSimulateCommonAdSpacesTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useSimulateCommonAdSpacesTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"updateAdGroupMetadata"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useSimulateCommonAdSpacesUpdateAdGroupMetadata =
  /*#__PURE__*/ createUseSimulateContract({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    functionName: 'updateAdGroupMetadata',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"updateAdStrategy"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useSimulateCommonAdSpacesUpdateAdStrategy =
  /*#__PURE__*/ createUseSimulateContract({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    functionName: 'updateAdStrategy',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"updateAdURI"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useSimulateCommonAdSpacesUpdateAdUri =
  /*#__PURE__*/ createUseSimulateContract({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    functionName: 'updateAdURI',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useSimulateCommonAdSpacesUpgradeTo =
  /*#__PURE__*/ createUseSimulateContract({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `functionName` set to `"upgradeToAndCall"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useSimulateCommonAdSpacesUpgradeToAndCall =
  /*#__PURE__*/ createUseSimulateContract({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link commonAdSpacesAbi}__
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useWatchCommonAdSpacesEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `eventName` set to `"AdGroupCreated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useWatchCommonAdSpacesAdGroupCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    eventName: 'AdGroupCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `eventName` set to `"AdGroupMetadataUpdated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useWatchCommonAdSpacesAdGroupMetadataUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    eventName: 'AdGroupMetadataUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `eventName` set to `"AdPoolCreated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useWatchCommonAdSpacesAdPoolCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    eventName: 'AdPoolCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `eventName` set to `"AdSpaceCreated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useWatchCommonAdSpacesAdSpaceCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    eventName: 'AdSpaceCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `eventName` set to `"AdSpaceStrategyUpdated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useWatchCommonAdSpacesAdSpaceStrategyUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    eventName: 'AdSpaceStrategyUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `eventName` set to `"AdSpaceURIUpdated"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useWatchCommonAdSpacesAdSpaceUriUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    eventName: 'AdSpaceURIUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `eventName` set to `"AdminChanged"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useWatchCommonAdSpacesAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    eventName: 'AdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `eventName` set to `"Approval"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useWatchCommonAdSpacesApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `eventName` set to `"ApprovalForAll"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useWatchCommonAdSpacesApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `eventName` set to `"BeaconUpgraded"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useWatchCommonAdSpacesBeaconUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    eventName: 'BeaconUpgraded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `eventName` set to `"Initialized"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useWatchCommonAdSpacesInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useWatchCommonAdSpacesOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `eventName` set to `"TokenXSet"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useWatchCommonAdSpacesTokenXSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    eventName: 'TokenXSet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `eventName` set to `"Transfer"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useWatchCommonAdSpacesTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link commonAdSpacesAbi}__ and `eventName` set to `"Upgraded"`
 *
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x56324569b301CdA15AFb3F9E9A853b6a5cD1ca57)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xB30D0dcF2A4A702dB746375FCac01C4F0e5d0Bd1)
 */
export const useWatchCommonAdSpacesUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: commonAdSpacesAbi,
    address: commonAdSpacesAddress,
    eventName: 'Upgraded',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link commonAdValidatorAbi}__
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4B346185c3c26d8F99336155035226655D2ADBe1)
 */
export const useReadCommonAdValidator = /*#__PURE__*/ createUseReadContract({
  abi: commonAdValidatorAbi,
  address: commonAdValidatorAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link commonAdValidatorAbi}__ and `functionName` set to `"commonAdSpaces"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4B346185c3c26d8F99336155035226655D2ADBe1)
 */
export const useReadCommonAdValidatorCommonAdSpaces =
  /*#__PURE__*/ createUseReadContract({
    abi: commonAdValidatorAbi,
    address: commonAdValidatorAddress,
    functionName: 'commonAdSpaces',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link commonAdValidatorAbi}__ and `functionName` set to `"isPayable"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4B346185c3c26d8F99336155035226655D2ADBe1)
 */
export const useReadCommonAdValidatorIsPayable =
  /*#__PURE__*/ createUseReadContract({
    abi: commonAdValidatorAbi,
    address: commonAdValidatorAddress,
    functionName: 'isPayable',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link commonAdValidatorAbi}__ and `functionName` set to `"owner"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4B346185c3c26d8F99336155035226655D2ADBe1)
 */
export const useReadCommonAdValidatorOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: commonAdValidatorAbi,
    address: commonAdValidatorAddress,
    functionName: 'owner',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link commonAdValidatorAbi}__ and `functionName` set to `"version"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4B346185c3c26d8F99336155035226655D2ADBe1)
 */
export const useReadCommonAdValidatorVersion =
  /*#__PURE__*/ createUseReadContract({
    abi: commonAdValidatorAbi,
    address: commonAdValidatorAddress,
    functionName: 'version',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link commonAdValidatorAbi}__
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4B346185c3c26d8F99336155035226655D2ADBe1)
 */
export const useWriteCommonAdValidator = /*#__PURE__*/ createUseWriteContract({
  abi: commonAdValidatorAbi,
  address: commonAdValidatorAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link commonAdValidatorAbi}__ and `functionName` set to `"attest"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4B346185c3c26d8F99336155035226655D2ADBe1)
 */
export const useWriteCommonAdValidatorAttest =
  /*#__PURE__*/ createUseWriteContract({
    abi: commonAdValidatorAbi,
    address: commonAdValidatorAddress,
    functionName: 'attest',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link commonAdValidatorAbi}__ and `functionName` set to `"multiAttest"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4B346185c3c26d8F99336155035226655D2ADBe1)
 */
export const useWriteCommonAdValidatorMultiAttest =
  /*#__PURE__*/ createUseWriteContract({
    abi: commonAdValidatorAbi,
    address: commonAdValidatorAddress,
    functionName: 'multiAttest',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link commonAdValidatorAbi}__ and `functionName` set to `"multiRevoke"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4B346185c3c26d8F99336155035226655D2ADBe1)
 */
export const useWriteCommonAdValidatorMultiRevoke =
  /*#__PURE__*/ createUseWriteContract({
    abi: commonAdValidatorAbi,
    address: commonAdValidatorAddress,
    functionName: 'multiRevoke',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link commonAdValidatorAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4B346185c3c26d8F99336155035226655D2ADBe1)
 */
export const useWriteCommonAdValidatorRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: commonAdValidatorAbi,
    address: commonAdValidatorAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link commonAdValidatorAbi}__ and `functionName` set to `"revoke"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4B346185c3c26d8F99336155035226655D2ADBe1)
 */
export const useWriteCommonAdValidatorRevoke =
  /*#__PURE__*/ createUseWriteContract({
    abi: commonAdValidatorAbi,
    address: commonAdValidatorAddress,
    functionName: 'revoke',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link commonAdValidatorAbi}__ and `functionName` set to `"setCommonAdSpaces"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4B346185c3c26d8F99336155035226655D2ADBe1)
 */
export const useWriteCommonAdValidatorSetCommonAdSpaces =
  /*#__PURE__*/ createUseWriteContract({
    abi: commonAdValidatorAbi,
    address: commonAdValidatorAddress,
    functionName: 'setCommonAdSpaces',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link commonAdValidatorAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4B346185c3c26d8F99336155035226655D2ADBe1)
 */
export const useWriteCommonAdValidatorTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: commonAdValidatorAbi,
    address: commonAdValidatorAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link commonAdValidatorAbi}__
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4B346185c3c26d8F99336155035226655D2ADBe1)
 */
export const useSimulateCommonAdValidator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: commonAdValidatorAbi,
    address: commonAdValidatorAddress,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link commonAdValidatorAbi}__ and `functionName` set to `"attest"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4B346185c3c26d8F99336155035226655D2ADBe1)
 */
export const useSimulateCommonAdValidatorAttest =
  /*#__PURE__*/ createUseSimulateContract({
    abi: commonAdValidatorAbi,
    address: commonAdValidatorAddress,
    functionName: 'attest',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link commonAdValidatorAbi}__ and `functionName` set to `"multiAttest"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4B346185c3c26d8F99336155035226655D2ADBe1)
 */
export const useSimulateCommonAdValidatorMultiAttest =
  /*#__PURE__*/ createUseSimulateContract({
    abi: commonAdValidatorAbi,
    address: commonAdValidatorAddress,
    functionName: 'multiAttest',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link commonAdValidatorAbi}__ and `functionName` set to `"multiRevoke"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4B346185c3c26d8F99336155035226655D2ADBe1)
 */
export const useSimulateCommonAdValidatorMultiRevoke =
  /*#__PURE__*/ createUseSimulateContract({
    abi: commonAdValidatorAbi,
    address: commonAdValidatorAddress,
    functionName: 'multiRevoke',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link commonAdValidatorAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4B346185c3c26d8F99336155035226655D2ADBe1)
 */
export const useSimulateCommonAdValidatorRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: commonAdValidatorAbi,
    address: commonAdValidatorAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link commonAdValidatorAbi}__ and `functionName` set to `"revoke"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4B346185c3c26d8F99336155035226655D2ADBe1)
 */
export const useSimulateCommonAdValidatorRevoke =
  /*#__PURE__*/ createUseSimulateContract({
    abi: commonAdValidatorAbi,
    address: commonAdValidatorAddress,
    functionName: 'revoke',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link commonAdValidatorAbi}__ and `functionName` set to `"setCommonAdSpaces"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4B346185c3c26d8F99336155035226655D2ADBe1)
 */
export const useSimulateCommonAdValidatorSetCommonAdSpaces =
  /*#__PURE__*/ createUseSimulateContract({
    abi: commonAdValidatorAbi,
    address: commonAdValidatorAddress,
    functionName: 'setCommonAdSpaces',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link commonAdValidatorAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4B346185c3c26d8F99336155035226655D2ADBe1)
 */
export const useSimulateCommonAdValidatorTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: commonAdValidatorAbi,
    address: commonAdValidatorAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link commonAdValidatorAbi}__
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4B346185c3c26d8F99336155035226655D2ADBe1)
 */
export const useWatchCommonAdValidatorEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: commonAdValidatorAbi,
    address: commonAdValidatorAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link commonAdValidatorAbi}__ and `eventName` set to `"AttestAd"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4B346185c3c26d8F99336155035226655D2ADBe1)
 */
export const useWatchCommonAdValidatorAttestAdEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: commonAdValidatorAbi,
    address: commonAdValidatorAddress,
    eventName: 'AttestAd',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link commonAdValidatorAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4B346185c3c26d8F99336155035226655D2ADBe1)
 */
export const useWatchCommonAdValidatorOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: commonAdValidatorAbi,
    address: commonAdValidatorAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link commonAdValidatorAbi}__ and `eventName` set to `"RevokeAd"`
 *
 * [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x4B346185c3c26d8F99336155035226655D2ADBe1)
 */
export const useWatchCommonAdValidatorRevokeAdEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: commonAdValidatorAbi,
    address: commonAdValidatorAddress,
    eventName: 'RevokeAd',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__
 */
export const useReadConstantFlowAgreementV1 =
  /*#__PURE__*/ createUseReadContract({ abi: constantFlowAgreementV1Abi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `functionName` set to `"CFA_HOOK_GAS_LIMIT"`
 */
export const useReadConstantFlowAgreementV1CfaHookGasLimit =
  /*#__PURE__*/ createUseReadContract({
    abi: constantFlowAgreementV1Abi,
    functionName: 'CFA_HOOK_GAS_LIMIT',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `functionName` set to `"DEFAULT_MINIMUM_DEPOSIT"`
 */
export const useReadConstantFlowAgreementV1DefaultMinimumDeposit =
  /*#__PURE__*/ createUseReadContract({
    abi: constantFlowAgreementV1Abi,
    functionName: 'DEFAULT_MINIMUM_DEPOSIT',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `functionName` set to `"MAXIMUM_DEPOSIT"`
 */
export const useReadConstantFlowAgreementV1MaximumDeposit =
  /*#__PURE__*/ createUseReadContract({
    abi: constantFlowAgreementV1Abi,
    functionName: 'MAXIMUM_DEPOSIT',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `functionName` set to `"MAXIMUM_FLOW_RATE"`
 */
export const useReadConstantFlowAgreementV1MaximumFlowRate =
  /*#__PURE__*/ createUseReadContract({
    abi: constantFlowAgreementV1Abi,
    functionName: 'MAXIMUM_FLOW_RATE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `functionName` set to `"addPermissions"`
 */
export const useReadConstantFlowAgreementV1AddPermissions =
  /*#__PURE__*/ createUseReadContract({
    abi: constantFlowAgreementV1Abi,
    functionName: 'addPermissions',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `functionName` set to `"agreementType"`
 */
export const useReadConstantFlowAgreementV1AgreementType =
  /*#__PURE__*/ createUseReadContract({
    abi: constantFlowAgreementV1Abi,
    functionName: 'agreementType',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `functionName` set to `"getAccountFlowInfo"`
 */
export const useReadConstantFlowAgreementV1GetAccountFlowInfo =
  /*#__PURE__*/ createUseReadContract({
    abi: constantFlowAgreementV1Abi,
    functionName: 'getAccountFlowInfo',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `functionName` set to `"getCodeAddress"`
 */
export const useReadConstantFlowAgreementV1GetCodeAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: constantFlowAgreementV1Abi,
    functionName: 'getCodeAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `functionName` set to `"getDepositRequiredForFlowRate"`
 */
export const useReadConstantFlowAgreementV1GetDepositRequiredForFlowRate =
  /*#__PURE__*/ createUseReadContract({
    abi: constantFlowAgreementV1Abi,
    functionName: 'getDepositRequiredForFlowRate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `functionName` set to `"getFlow"`
 */
export const useReadConstantFlowAgreementV1GetFlow =
  /*#__PURE__*/ createUseReadContract({
    abi: constantFlowAgreementV1Abi,
    functionName: 'getFlow',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `functionName` set to `"getFlowByID"`
 */
export const useReadConstantFlowAgreementV1GetFlowById =
  /*#__PURE__*/ createUseReadContract({
    abi: constantFlowAgreementV1Abi,
    functionName: 'getFlowByID',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `functionName` set to `"getFlowOperatorData"`
 */
export const useReadConstantFlowAgreementV1GetFlowOperatorData =
  /*#__PURE__*/ createUseReadContract({
    abi: constantFlowAgreementV1Abi,
    functionName: 'getFlowOperatorData',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `functionName` set to `"getFlowOperatorDataByID"`
 */
export const useReadConstantFlowAgreementV1GetFlowOperatorDataById =
  /*#__PURE__*/ createUseReadContract({
    abi: constantFlowAgreementV1Abi,
    functionName: 'getFlowOperatorDataByID',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `functionName` set to `"getMaximumFlowRateFromDeposit"`
 */
export const useReadConstantFlowAgreementV1GetMaximumFlowRateFromDeposit =
  /*#__PURE__*/ createUseReadContract({
    abi: constantFlowAgreementV1Abi,
    functionName: 'getMaximumFlowRateFromDeposit',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `functionName` set to `"getNetFlow"`
 */
export const useReadConstantFlowAgreementV1GetNetFlow =
  /*#__PURE__*/ createUseReadContract({
    abi: constantFlowAgreementV1Abi,
    functionName: 'getNetFlow',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `functionName` set to `"isPatricianPeriod"`
 */
export const useReadConstantFlowAgreementV1IsPatricianPeriod =
  /*#__PURE__*/ createUseReadContract({
    abi: constantFlowAgreementV1Abi,
    functionName: 'isPatricianPeriod',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `functionName` set to `"isPatricianPeriodNow"`
 */
export const useReadConstantFlowAgreementV1IsPatricianPeriodNow =
  /*#__PURE__*/ createUseReadContract({
    abi: constantFlowAgreementV1Abi,
    functionName: 'isPatricianPeriodNow',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `functionName` set to `"proxiableUUID"`
 */
export const useReadConstantFlowAgreementV1ProxiableUuid =
  /*#__PURE__*/ createUseReadContract({
    abi: constantFlowAgreementV1Abi,
    functionName: 'proxiableUUID',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `functionName` set to `"realtimeBalanceOf"`
 */
export const useReadConstantFlowAgreementV1RealtimeBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: constantFlowAgreementV1Abi,
    functionName: 'realtimeBalanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `functionName` set to `"removePermissions"`
 */
export const useReadConstantFlowAgreementV1RemovePermissions =
  /*#__PURE__*/ createUseReadContract({
    abi: constantFlowAgreementV1Abi,
    functionName: 'removePermissions',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__
 */
export const useWriteConstantFlowAgreementV1 =
  /*#__PURE__*/ createUseWriteContract({ abi: constantFlowAgreementV1Abi })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `functionName` set to `"authorizeFlowOperatorWithFullControl"`
 */
export const useWriteConstantFlowAgreementV1AuthorizeFlowOperatorWithFullControl =
  /*#__PURE__*/ createUseWriteContract({
    abi: constantFlowAgreementV1Abi,
    functionName: 'authorizeFlowOperatorWithFullControl',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `functionName` set to `"castrate"`
 */
export const useWriteConstantFlowAgreementV1Castrate =
  /*#__PURE__*/ createUseWriteContract({
    abi: constantFlowAgreementV1Abi,
    functionName: 'castrate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `functionName` set to `"createFlow"`
 */
export const useWriteConstantFlowAgreementV1CreateFlow =
  /*#__PURE__*/ createUseWriteContract({
    abi: constantFlowAgreementV1Abi,
    functionName: 'createFlow',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `functionName` set to `"createFlowByOperator"`
 */
export const useWriteConstantFlowAgreementV1CreateFlowByOperator =
  /*#__PURE__*/ createUseWriteContract({
    abi: constantFlowAgreementV1Abi,
    functionName: 'createFlowByOperator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `functionName` set to `"decreaseFlowRateAllowance"`
 */
export const useWriteConstantFlowAgreementV1DecreaseFlowRateAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: constantFlowAgreementV1Abi,
    functionName: 'decreaseFlowRateAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `functionName` set to `"decreaseFlowRateAllowanceWithPermissions"`
 */
export const useWriteConstantFlowAgreementV1DecreaseFlowRateAllowanceWithPermissions =
  /*#__PURE__*/ createUseWriteContract({
    abi: constantFlowAgreementV1Abi,
    functionName: 'decreaseFlowRateAllowanceWithPermissions',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `functionName` set to `"deleteFlow"`
 */
export const useWriteConstantFlowAgreementV1DeleteFlow =
  /*#__PURE__*/ createUseWriteContract({
    abi: constantFlowAgreementV1Abi,
    functionName: 'deleteFlow',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `functionName` set to `"deleteFlowByOperator"`
 */
export const useWriteConstantFlowAgreementV1DeleteFlowByOperator =
  /*#__PURE__*/ createUseWriteContract({
    abi: constantFlowAgreementV1Abi,
    functionName: 'deleteFlowByOperator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `functionName` set to `"increaseFlowRateAllowance"`
 */
export const useWriteConstantFlowAgreementV1IncreaseFlowRateAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: constantFlowAgreementV1Abi,
    functionName: 'increaseFlowRateAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `functionName` set to `"increaseFlowRateAllowanceWithPermissions"`
 */
export const useWriteConstantFlowAgreementV1IncreaseFlowRateAllowanceWithPermissions =
  /*#__PURE__*/ createUseWriteContract({
    abi: constantFlowAgreementV1Abi,
    functionName: 'increaseFlowRateAllowanceWithPermissions',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `functionName` set to `"revokeFlowOperatorWithFullControl"`
 */
export const useWriteConstantFlowAgreementV1RevokeFlowOperatorWithFullControl =
  /*#__PURE__*/ createUseWriteContract({
    abi: constantFlowAgreementV1Abi,
    functionName: 'revokeFlowOperatorWithFullControl',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `functionName` set to `"updateCode"`
 */
export const useWriteConstantFlowAgreementV1UpdateCode =
  /*#__PURE__*/ createUseWriteContract({
    abi: constantFlowAgreementV1Abi,
    functionName: 'updateCode',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `functionName` set to `"updateFlow"`
 */
export const useWriteConstantFlowAgreementV1UpdateFlow =
  /*#__PURE__*/ createUseWriteContract({
    abi: constantFlowAgreementV1Abi,
    functionName: 'updateFlow',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `functionName` set to `"updateFlowByOperator"`
 */
export const useWriteConstantFlowAgreementV1UpdateFlowByOperator =
  /*#__PURE__*/ createUseWriteContract({
    abi: constantFlowAgreementV1Abi,
    functionName: 'updateFlowByOperator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `functionName` set to `"updateFlowOperatorPermissions"`
 */
export const useWriteConstantFlowAgreementV1UpdateFlowOperatorPermissions =
  /*#__PURE__*/ createUseWriteContract({
    abi: constantFlowAgreementV1Abi,
    functionName: 'updateFlowOperatorPermissions',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__
 */
export const useSimulateConstantFlowAgreementV1 =
  /*#__PURE__*/ createUseSimulateContract({ abi: constantFlowAgreementV1Abi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `functionName` set to `"authorizeFlowOperatorWithFullControl"`
 */
export const useSimulateConstantFlowAgreementV1AuthorizeFlowOperatorWithFullControl =
  /*#__PURE__*/ createUseSimulateContract({
    abi: constantFlowAgreementV1Abi,
    functionName: 'authorizeFlowOperatorWithFullControl',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `functionName` set to `"castrate"`
 */
export const useSimulateConstantFlowAgreementV1Castrate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: constantFlowAgreementV1Abi,
    functionName: 'castrate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `functionName` set to `"createFlow"`
 */
export const useSimulateConstantFlowAgreementV1CreateFlow =
  /*#__PURE__*/ createUseSimulateContract({
    abi: constantFlowAgreementV1Abi,
    functionName: 'createFlow',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `functionName` set to `"createFlowByOperator"`
 */
export const useSimulateConstantFlowAgreementV1CreateFlowByOperator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: constantFlowAgreementV1Abi,
    functionName: 'createFlowByOperator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `functionName` set to `"decreaseFlowRateAllowance"`
 */
export const useSimulateConstantFlowAgreementV1DecreaseFlowRateAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: constantFlowAgreementV1Abi,
    functionName: 'decreaseFlowRateAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `functionName` set to `"decreaseFlowRateAllowanceWithPermissions"`
 */
export const useSimulateConstantFlowAgreementV1DecreaseFlowRateAllowanceWithPermissions =
  /*#__PURE__*/ createUseSimulateContract({
    abi: constantFlowAgreementV1Abi,
    functionName: 'decreaseFlowRateAllowanceWithPermissions',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `functionName` set to `"deleteFlow"`
 */
export const useSimulateConstantFlowAgreementV1DeleteFlow =
  /*#__PURE__*/ createUseSimulateContract({
    abi: constantFlowAgreementV1Abi,
    functionName: 'deleteFlow',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `functionName` set to `"deleteFlowByOperator"`
 */
export const useSimulateConstantFlowAgreementV1DeleteFlowByOperator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: constantFlowAgreementV1Abi,
    functionName: 'deleteFlowByOperator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `functionName` set to `"increaseFlowRateAllowance"`
 */
export const useSimulateConstantFlowAgreementV1IncreaseFlowRateAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: constantFlowAgreementV1Abi,
    functionName: 'increaseFlowRateAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `functionName` set to `"increaseFlowRateAllowanceWithPermissions"`
 */
export const useSimulateConstantFlowAgreementV1IncreaseFlowRateAllowanceWithPermissions =
  /*#__PURE__*/ createUseSimulateContract({
    abi: constantFlowAgreementV1Abi,
    functionName: 'increaseFlowRateAllowanceWithPermissions',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `functionName` set to `"revokeFlowOperatorWithFullControl"`
 */
export const useSimulateConstantFlowAgreementV1RevokeFlowOperatorWithFullControl =
  /*#__PURE__*/ createUseSimulateContract({
    abi: constantFlowAgreementV1Abi,
    functionName: 'revokeFlowOperatorWithFullControl',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `functionName` set to `"updateCode"`
 */
export const useSimulateConstantFlowAgreementV1UpdateCode =
  /*#__PURE__*/ createUseSimulateContract({
    abi: constantFlowAgreementV1Abi,
    functionName: 'updateCode',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `functionName` set to `"updateFlow"`
 */
export const useSimulateConstantFlowAgreementV1UpdateFlow =
  /*#__PURE__*/ createUseSimulateContract({
    abi: constantFlowAgreementV1Abi,
    functionName: 'updateFlow',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `functionName` set to `"updateFlowByOperator"`
 */
export const useSimulateConstantFlowAgreementV1UpdateFlowByOperator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: constantFlowAgreementV1Abi,
    functionName: 'updateFlowByOperator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `functionName` set to `"updateFlowOperatorPermissions"`
 */
export const useSimulateConstantFlowAgreementV1UpdateFlowOperatorPermissions =
  /*#__PURE__*/ createUseSimulateContract({
    abi: constantFlowAgreementV1Abi,
    functionName: 'updateFlowOperatorPermissions',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__
 */
export const useWatchConstantFlowAgreementV1Event =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: constantFlowAgreementV1Abi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `eventName` set to `"CodeUpdated"`
 */
export const useWatchConstantFlowAgreementV1CodeUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: constantFlowAgreementV1Abi,
    eventName: 'CodeUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `eventName` set to `"FlowOperatorUpdated"`
 */
export const useWatchConstantFlowAgreementV1FlowOperatorUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: constantFlowAgreementV1Abi,
    eventName: 'FlowOperatorUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `eventName` set to `"FlowUpdated"`
 */
export const useWatchConstantFlowAgreementV1FlowUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: constantFlowAgreementV1Abi,
    eventName: 'FlowUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `eventName` set to `"FlowUpdatedExtension"`
 */
export const useWatchConstantFlowAgreementV1FlowUpdatedExtensionEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: constantFlowAgreementV1Abi,
    eventName: 'FlowUpdatedExtension',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link constantFlowAgreementV1Abi}__ and `eventName` set to `"Initialized"`
 */
export const useWatchConstantFlowAgreementV1InitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: constantFlowAgreementV1Abi,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link directListingsLogicAbi}__
 *
 * -
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9825f700754534108BFE2239C9e66a12FDEBB33e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x44f808B028cD582b21C04f6de3580029d3E31Cb6)
 */
export const useReadDirectListingsLogic = /*#__PURE__*/ createUseReadContract({
  abi: directListingsLogicAbi,
  address: directListingsLogicAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"_msgData"`
 *
 * -
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9825f700754534108BFE2239C9e66a12FDEBB33e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x44f808B028cD582b21C04f6de3580029d3E31Cb6)
 */
export const useReadDirectListingsLogicMsgData =
  /*#__PURE__*/ createUseReadContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: '_msgData',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"_msgSender"`
 *
 * -
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9825f700754534108BFE2239C9e66a12FDEBB33e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x44f808B028cD582b21C04f6de3580029d3E31Cb6)
 */
export const useReadDirectListingsLogicMsgSender =
  /*#__PURE__*/ createUseReadContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: '_msgSender',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"currencyPriceForListing"`
 *
 * -
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9825f700754534108BFE2239C9e66a12FDEBB33e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x44f808B028cD582b21C04f6de3580029d3E31Cb6)
 */
export const useReadDirectListingsLogicCurrencyPriceForListing =
  /*#__PURE__*/ createUseReadContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: 'currencyPriceForListing',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"getAllListings"`
 *
 * -
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9825f700754534108BFE2239C9e66a12FDEBB33e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x44f808B028cD582b21C04f6de3580029d3E31Cb6)
 */
export const useReadDirectListingsLogicGetAllListings =
  /*#__PURE__*/ createUseReadContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: 'getAllListings',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"getAllValidListings"`
 *
 * -
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9825f700754534108BFE2239C9e66a12FDEBB33e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x44f808B028cD582b21C04f6de3580029d3E31Cb6)
 */
export const useReadDirectListingsLogicGetAllValidListings =
  /*#__PURE__*/ createUseReadContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: 'getAllValidListings',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"getListing"`
 *
 * -
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9825f700754534108BFE2239C9e66a12FDEBB33e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x44f808B028cD582b21C04f6de3580029d3E31Cb6)
 */
export const useReadDirectListingsLogicGetListing =
  /*#__PURE__*/ createUseReadContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: 'getListing',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"isBuyerApprovedForListing"`
 *
 * -
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9825f700754534108BFE2239C9e66a12FDEBB33e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x44f808B028cD582b21C04f6de3580029d3E31Cb6)
 */
export const useReadDirectListingsLogicIsBuyerApprovedForListing =
  /*#__PURE__*/ createUseReadContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: 'isBuyerApprovedForListing',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"isCurrencyApprovedForListing"`
 *
 * -
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9825f700754534108BFE2239C9e66a12FDEBB33e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x44f808B028cD582b21C04f6de3580029d3E31Cb6)
 */
export const useReadDirectListingsLogicIsCurrencyApprovedForListing =
  /*#__PURE__*/ createUseReadContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: 'isCurrencyApprovedForListing',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"totalListings"`
 *
 * -
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9825f700754534108BFE2239C9e66a12FDEBB33e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x44f808B028cD582b21C04f6de3580029d3E31Cb6)
 */
export const useReadDirectListingsLogicTotalListings =
  /*#__PURE__*/ createUseReadContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: 'totalListings',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link directListingsLogicAbi}__
 *
 * -
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9825f700754534108BFE2239C9e66a12FDEBB33e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x44f808B028cD582b21C04f6de3580029d3E31Cb6)
 */
export const useWriteDirectListingsLogic = /*#__PURE__*/ createUseWriteContract(
  { abi: directListingsLogicAbi, address: directListingsLogicAddress },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"approveBuyerForListing"`
 *
 * -
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9825f700754534108BFE2239C9e66a12FDEBB33e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x44f808B028cD582b21C04f6de3580029d3E31Cb6)
 */
export const useWriteDirectListingsLogicApproveBuyerForListing =
  /*#__PURE__*/ createUseWriteContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: 'approveBuyerForListing',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"approveCurrencyForListing"`
 *
 * -
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9825f700754534108BFE2239C9e66a12FDEBB33e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x44f808B028cD582b21C04f6de3580029d3E31Cb6)
 */
export const useWriteDirectListingsLogicApproveCurrencyForListing =
  /*#__PURE__*/ createUseWriteContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: 'approveCurrencyForListing',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"buyFromListing"`
 *
 * -
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9825f700754534108BFE2239C9e66a12FDEBB33e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x44f808B028cD582b21C04f6de3580029d3E31Cb6)
 */
export const useWriteDirectListingsLogicBuyFromListing =
  /*#__PURE__*/ createUseWriteContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: 'buyFromListing',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"cancelListing"`
 *
 * -
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9825f700754534108BFE2239C9e66a12FDEBB33e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x44f808B028cD582b21C04f6de3580029d3E31Cb6)
 */
export const useWriteDirectListingsLogicCancelListing =
  /*#__PURE__*/ createUseWriteContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: 'cancelListing',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"createListing"`
 *
 * -
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9825f700754534108BFE2239C9e66a12FDEBB33e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x44f808B028cD582b21C04f6de3580029d3E31Cb6)
 */
export const useWriteDirectListingsLogicCreateListing =
  /*#__PURE__*/ createUseWriteContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: 'createListing',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"forecloseListing"`
 *
 * -
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9825f700754534108BFE2239C9e66a12FDEBB33e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x44f808B028cD582b21C04f6de3580029d3E31Cb6)
 */
export const useWriteDirectListingsLogicForecloseListing =
  /*#__PURE__*/ createUseWriteContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: 'forecloseListing',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"updateListing"`
 *
 * -
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9825f700754534108BFE2239C9e66a12FDEBB33e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x44f808B028cD582b21C04f6de3580029d3E31Cb6)
 */
export const useWriteDirectListingsLogicUpdateListing =
  /*#__PURE__*/ createUseWriteContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: 'updateListing',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link directListingsLogicAbi}__
 *
 * -
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9825f700754534108BFE2239C9e66a12FDEBB33e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x44f808B028cD582b21C04f6de3580029d3E31Cb6)
 */
export const useSimulateDirectListingsLogic =
  /*#__PURE__*/ createUseSimulateContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"approveBuyerForListing"`
 *
 * -
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9825f700754534108BFE2239C9e66a12FDEBB33e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x44f808B028cD582b21C04f6de3580029d3E31Cb6)
 */
export const useSimulateDirectListingsLogicApproveBuyerForListing =
  /*#__PURE__*/ createUseSimulateContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: 'approveBuyerForListing',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"approveCurrencyForListing"`
 *
 * -
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9825f700754534108BFE2239C9e66a12FDEBB33e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x44f808B028cD582b21C04f6de3580029d3E31Cb6)
 */
export const useSimulateDirectListingsLogicApproveCurrencyForListing =
  /*#__PURE__*/ createUseSimulateContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: 'approveCurrencyForListing',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"buyFromListing"`
 *
 * -
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9825f700754534108BFE2239C9e66a12FDEBB33e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x44f808B028cD582b21C04f6de3580029d3E31Cb6)
 */
export const useSimulateDirectListingsLogicBuyFromListing =
  /*#__PURE__*/ createUseSimulateContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: 'buyFromListing',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"cancelListing"`
 *
 * -
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9825f700754534108BFE2239C9e66a12FDEBB33e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x44f808B028cD582b21C04f6de3580029d3E31Cb6)
 */
export const useSimulateDirectListingsLogicCancelListing =
  /*#__PURE__*/ createUseSimulateContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: 'cancelListing',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"createListing"`
 *
 * -
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9825f700754534108BFE2239C9e66a12FDEBB33e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x44f808B028cD582b21C04f6de3580029d3E31Cb6)
 */
export const useSimulateDirectListingsLogicCreateListing =
  /*#__PURE__*/ createUseSimulateContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: 'createListing',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"forecloseListing"`
 *
 * -
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9825f700754534108BFE2239C9e66a12FDEBB33e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x44f808B028cD582b21C04f6de3580029d3E31Cb6)
 */
export const useSimulateDirectListingsLogicForecloseListing =
  /*#__PURE__*/ createUseSimulateContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: 'forecloseListing',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"updateListing"`
 *
 * -
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9825f700754534108BFE2239C9e66a12FDEBB33e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x44f808B028cD582b21C04f6de3580029d3E31Cb6)
 */
export const useSimulateDirectListingsLogicUpdateListing =
  /*#__PURE__*/ createUseSimulateContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: 'updateListing',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link directListingsLogicAbi}__
 *
 * -
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9825f700754534108BFE2239C9e66a12FDEBB33e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x44f808B028cD582b21C04f6de3580029d3E31Cb6)
 */
export const useWatchDirectListingsLogicEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link directListingsLogicAbi}__ and `eventName` set to `"BuyerApprovedForListing"`
 *
 * -
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9825f700754534108BFE2239C9e66a12FDEBB33e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x44f808B028cD582b21C04f6de3580029d3E31Cb6)
 */
export const useWatchDirectListingsLogicBuyerApprovedForListingEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    eventName: 'BuyerApprovedForListing',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link directListingsLogicAbi}__ and `eventName` set to `"CancelledListing"`
 *
 * -
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9825f700754534108BFE2239C9e66a12FDEBB33e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x44f808B028cD582b21C04f6de3580029d3E31Cb6)
 */
export const useWatchDirectListingsLogicCancelledListingEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    eventName: 'CancelledListing',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link directListingsLogicAbi}__ and `eventName` set to `"CurrencyApprovedForListing"`
 *
 * -
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9825f700754534108BFE2239C9e66a12FDEBB33e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x44f808B028cD582b21C04f6de3580029d3E31Cb6)
 */
export const useWatchDirectListingsLogicCurrencyApprovedForListingEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    eventName: 'CurrencyApprovedForListing',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link directListingsLogicAbi}__ and `eventName` set to `"NewListing"`
 *
 * -
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9825f700754534108BFE2239C9e66a12FDEBB33e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x44f808B028cD582b21C04f6de3580029d3E31Cb6)
 */
export const useWatchDirectListingsLogicNewListingEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    eventName: 'NewListing',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link directListingsLogicAbi}__ and `eventName` set to `"NewSale"`
 *
 * -
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9825f700754534108BFE2239C9e66a12FDEBB33e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x44f808B028cD582b21C04f6de3580029d3E31Cb6)
 */
export const useWatchDirectListingsLogicNewSaleEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    eventName: 'NewSale',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link directListingsLogicAbi}__ and `eventName` set to `"UpdateAdFLowRate"`
 *
 * -
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9825f700754534108BFE2239C9e66a12FDEBB33e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x44f808B028cD582b21C04f6de3580029d3E31Cb6)
 */
export const useWatchDirectListingsLogicUpdateAdFLowRateEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    eventName: 'UpdateAdFLowRate',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link directListingsLogicAbi}__ and `eventName` set to `"UpdatedListing"`
 *
 * -
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x9825f700754534108BFE2239C9e66a12FDEBB33e)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0x44f808B028cD582b21C04f6de3580029d3E31Cb6)
 */
export const useWatchDirectListingsLogicUpdatedListingEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    eventName: 'UpdatedListing',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useReadErc20 = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"allowance"`
 */
export const useReadErc20Allowance = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc20BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"decimals"`
 */
export const useReadErc20Decimals = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"name"`
 */
export const useReadErc20Name = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc20Symbol = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadErc20TotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWriteErc20 = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc20Approve = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useWriteErc20Transfer = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc20TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useSimulateErc20 = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc20Approve = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateErc20Transfer = /*#__PURE__*/ createUseSimulateContract(
  { abi: erc20Abi, functionName: 'transfer' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc20TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWatchErc20Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc20ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc20TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__
 */
export const useReadErc721 = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc721BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"getApproved"`
 */
export const useReadErc721GetApproved = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadErc721IsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721Abi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"name"`
 */
export const useReadErc721Name = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadErc721OwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc721Symbol = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"tokenByIndex"`
 */
export const useReadErc721TokenByIndex = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'tokenByIndex',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadErc721TokenUri = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadErc721TotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__
 */
export const useWriteErc721 = /*#__PURE__*/ createUseWriteContract({
  abi: erc721Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc721Approve = /*#__PURE__*/ createUseWriteContract({
  abi: erc721Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteErc721SafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteErc721SetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc721TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: erc721Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__
 */
export const useSimulateErc721 = /*#__PURE__*/ createUseSimulateContract({
  abi: erc721Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc721Approve = /*#__PURE__*/ createUseSimulateContract(
  { abi: erc721Abi, functionName: 'approve' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateErc721SafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateErc721SetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc721TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721Abi}__
 */
export const useWatchErc721Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: erc721Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc721ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721Abi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchErc721ApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721Abi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc721TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gdAv1ForwarderAbi}__
 */
export const useReadGdAv1Forwarder = /*#__PURE__*/ createUseReadContract({
  abi: gdAv1ForwarderAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gdAv1ForwarderAbi}__ and `functionName` set to `"estimateDistributionActualAmount"`
 */
export const useReadGdAv1ForwarderEstimateDistributionActualAmount =
  /*#__PURE__*/ createUseReadContract({
    abi: gdAv1ForwarderAbi,
    functionName: 'estimateDistributionActualAmount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gdAv1ForwarderAbi}__ and `functionName` set to `"estimateFlowDistributionActualFlowRate"`
 */
export const useReadGdAv1ForwarderEstimateFlowDistributionActualFlowRate =
  /*#__PURE__*/ createUseReadContract({
    abi: gdAv1ForwarderAbi,
    functionName: 'estimateFlowDistributionActualFlowRate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gdAv1ForwarderAbi}__ and `functionName` set to `"getFlowDistributionFlowRate"`
 */
export const useReadGdAv1ForwarderGetFlowDistributionFlowRate =
  /*#__PURE__*/ createUseReadContract({
    abi: gdAv1ForwarderAbi,
    functionName: 'getFlowDistributionFlowRate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gdAv1ForwarderAbi}__ and `functionName` set to `"getNetFlow"`
 */
export const useReadGdAv1ForwarderGetNetFlow =
  /*#__PURE__*/ createUseReadContract({
    abi: gdAv1ForwarderAbi,
    functionName: 'getNetFlow',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gdAv1ForwarderAbi}__ and `functionName` set to `"getPoolAdjustmentFlowInfo"`
 */
export const useReadGdAv1ForwarderGetPoolAdjustmentFlowInfo =
  /*#__PURE__*/ createUseReadContract({
    abi: gdAv1ForwarderAbi,
    functionName: 'getPoolAdjustmentFlowInfo',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gdAv1ForwarderAbi}__ and `functionName` set to `"getPoolAdjustmentFlowRate"`
 */
export const useReadGdAv1ForwarderGetPoolAdjustmentFlowRate =
  /*#__PURE__*/ createUseReadContract({
    abi: gdAv1ForwarderAbi,
    functionName: 'getPoolAdjustmentFlowRate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gdAv1ForwarderAbi}__ and `functionName` set to `"isMemberConnected"`
 */
export const useReadGdAv1ForwarderIsMemberConnected =
  /*#__PURE__*/ createUseReadContract({
    abi: gdAv1ForwarderAbi,
    functionName: 'isMemberConnected',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link gdAv1ForwarderAbi}__ and `functionName` set to `"isPool"`
 */
export const useReadGdAv1ForwarderIsPool = /*#__PURE__*/ createUseReadContract({
  abi: gdAv1ForwarderAbi,
  functionName: 'isPool',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link gdAv1ForwarderAbi}__
 */
export const useWriteGdAv1Forwarder = /*#__PURE__*/ createUseWriteContract({
  abi: gdAv1ForwarderAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link gdAv1ForwarderAbi}__ and `functionName` set to `"claimAll"`
 */
export const useWriteGdAv1ForwarderClaimAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: gdAv1ForwarderAbi,
    functionName: 'claimAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link gdAv1ForwarderAbi}__ and `functionName` set to `"connectPool"`
 */
export const useWriteGdAv1ForwarderConnectPool =
  /*#__PURE__*/ createUseWriteContract({
    abi: gdAv1ForwarderAbi,
    functionName: 'connectPool',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link gdAv1ForwarderAbi}__ and `functionName` set to `"createPool"`
 */
export const useWriteGdAv1ForwarderCreatePool =
  /*#__PURE__*/ createUseWriteContract({
    abi: gdAv1ForwarderAbi,
    functionName: 'createPool',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link gdAv1ForwarderAbi}__ and `functionName` set to `"disconnectPool"`
 */
export const useWriteGdAv1ForwarderDisconnectPool =
  /*#__PURE__*/ createUseWriteContract({
    abi: gdAv1ForwarderAbi,
    functionName: 'disconnectPool',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link gdAv1ForwarderAbi}__ and `functionName` set to `"distribute"`
 */
export const useWriteGdAv1ForwarderDistribute =
  /*#__PURE__*/ createUseWriteContract({
    abi: gdAv1ForwarderAbi,
    functionName: 'distribute',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link gdAv1ForwarderAbi}__ and `functionName` set to `"distributeFlow"`
 */
export const useWriteGdAv1ForwarderDistributeFlow =
  /*#__PURE__*/ createUseWriteContract({
    abi: gdAv1ForwarderAbi,
    functionName: 'distributeFlow',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link gdAv1ForwarderAbi}__ and `functionName` set to `"updateMemberUnits"`
 */
export const useWriteGdAv1ForwarderUpdateMemberUnits =
  /*#__PURE__*/ createUseWriteContract({
    abi: gdAv1ForwarderAbi,
    functionName: 'updateMemberUnits',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link gdAv1ForwarderAbi}__
 */
export const useSimulateGdAv1Forwarder =
  /*#__PURE__*/ createUseSimulateContract({ abi: gdAv1ForwarderAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link gdAv1ForwarderAbi}__ and `functionName` set to `"claimAll"`
 */
export const useSimulateGdAv1ForwarderClaimAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: gdAv1ForwarderAbi,
    functionName: 'claimAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link gdAv1ForwarderAbi}__ and `functionName` set to `"connectPool"`
 */
export const useSimulateGdAv1ForwarderConnectPool =
  /*#__PURE__*/ createUseSimulateContract({
    abi: gdAv1ForwarderAbi,
    functionName: 'connectPool',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link gdAv1ForwarderAbi}__ and `functionName` set to `"createPool"`
 */
export const useSimulateGdAv1ForwarderCreatePool =
  /*#__PURE__*/ createUseSimulateContract({
    abi: gdAv1ForwarderAbi,
    functionName: 'createPool',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link gdAv1ForwarderAbi}__ and `functionName` set to `"disconnectPool"`
 */
export const useSimulateGdAv1ForwarderDisconnectPool =
  /*#__PURE__*/ createUseSimulateContract({
    abi: gdAv1ForwarderAbi,
    functionName: 'disconnectPool',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link gdAv1ForwarderAbi}__ and `functionName` set to `"distribute"`
 */
export const useSimulateGdAv1ForwarderDistribute =
  /*#__PURE__*/ createUseSimulateContract({
    abi: gdAv1ForwarderAbi,
    functionName: 'distribute',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link gdAv1ForwarderAbi}__ and `functionName` set to `"distributeFlow"`
 */
export const useSimulateGdAv1ForwarderDistributeFlow =
  /*#__PURE__*/ createUseSimulateContract({
    abi: gdAv1ForwarderAbi,
    functionName: 'distributeFlow',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link gdAv1ForwarderAbi}__ and `functionName` set to `"updateMemberUnits"`
 */
export const useSimulateGdAv1ForwarderUpdateMemberUnits =
  /*#__PURE__*/ createUseSimulateContract({
    abi: gdAv1ForwarderAbi,
    functionName: 'updateMemberUnits',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__
 */
export const useReadGeneralDistributionAgreementV1 =
  /*#__PURE__*/ createUseReadContract({
    abi: generalDistributionAgreementV1Abi,
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__ and `functionName` set to `"SLOTS_BITMAP_LIBRARY_ADDRESS"`
 */
export const useReadGeneralDistributionAgreementV1SlotsBitmapLibraryAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: generalDistributionAgreementV1Abi,
    functionName: 'SLOTS_BITMAP_LIBRARY_ADDRESS',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__ and `functionName` set to `"SUPERFLUID_POOL_DEPLOYER_ADDRESS"`
 */
export const useReadGeneralDistributionAgreementV1SuperfluidPoolDeployerAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: generalDistributionAgreementV1Abi,
    functionName: 'SUPERFLUID_POOL_DEPLOYER_ADDRESS',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__ and `functionName` set to `"agreementType"`
 */
export const useReadGeneralDistributionAgreementV1AgreementType =
  /*#__PURE__*/ createUseReadContract({
    abi: generalDistributionAgreementV1Abi,
    functionName: 'agreementType',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__ and `functionName` set to `"estimateDistributionActualAmount"`
 */
export const useReadGeneralDistributionAgreementV1EstimateDistributionActualAmount =
  /*#__PURE__*/ createUseReadContract({
    abi: generalDistributionAgreementV1Abi,
    functionName: 'estimateDistributionActualAmount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__ and `functionName` set to `"estimateFlowDistributionActualFlowRate"`
 */
export const useReadGeneralDistributionAgreementV1EstimateFlowDistributionActualFlowRate =
  /*#__PURE__*/ createUseReadContract({
    abi: generalDistributionAgreementV1Abi,
    functionName: 'estimateFlowDistributionActualFlowRate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__ and `functionName` set to `"getAccountFlowInfo"`
 */
export const useReadGeneralDistributionAgreementV1GetAccountFlowInfo =
  /*#__PURE__*/ createUseReadContract({
    abi: generalDistributionAgreementV1Abi,
    functionName: 'getAccountFlowInfo',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__ and `functionName` set to `"getCodeAddress"`
 */
export const useReadGeneralDistributionAgreementV1GetCodeAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: generalDistributionAgreementV1Abi,
    functionName: 'getCodeAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__ and `functionName` set to `"getFlow"`
 */
export const useReadGeneralDistributionAgreementV1GetFlow =
  /*#__PURE__*/ createUseReadContract({
    abi: generalDistributionAgreementV1Abi,
    functionName: 'getFlow',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__ and `functionName` set to `"getFlowRate"`
 */
export const useReadGeneralDistributionAgreementV1GetFlowRate =
  /*#__PURE__*/ createUseReadContract({
    abi: generalDistributionAgreementV1Abi,
    functionName: 'getFlowRate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__ and `functionName` set to `"getNetFlow"`
 */
export const useReadGeneralDistributionAgreementV1GetNetFlow =
  /*#__PURE__*/ createUseReadContract({
    abi: generalDistributionAgreementV1Abi,
    functionName: 'getNetFlow',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__ and `functionName` set to `"getPoolAdjustmentFlowInfo"`
 */
export const useReadGeneralDistributionAgreementV1GetPoolAdjustmentFlowInfo =
  /*#__PURE__*/ createUseReadContract({
    abi: generalDistributionAgreementV1Abi,
    functionName: 'getPoolAdjustmentFlowInfo',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__ and `functionName` set to `"getPoolAdjustmentFlowRate"`
 */
export const useReadGeneralDistributionAgreementV1GetPoolAdjustmentFlowRate =
  /*#__PURE__*/ createUseReadContract({
    abi: generalDistributionAgreementV1Abi,
    functionName: 'getPoolAdjustmentFlowRate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__ and `functionName` set to `"isMemberConnected"`
 */
export const useReadGeneralDistributionAgreementV1IsMemberConnected =
  /*#__PURE__*/ createUseReadContract({
    abi: generalDistributionAgreementV1Abi,
    functionName: 'isMemberConnected',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__ and `functionName` set to `"isPatricianPeriod"`
 */
export const useReadGeneralDistributionAgreementV1IsPatricianPeriod =
  /*#__PURE__*/ createUseReadContract({
    abi: generalDistributionAgreementV1Abi,
    functionName: 'isPatricianPeriod',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__ and `functionName` set to `"isPatricianPeriodNow"`
 */
export const useReadGeneralDistributionAgreementV1IsPatricianPeriodNow =
  /*#__PURE__*/ createUseReadContract({
    abi: generalDistributionAgreementV1Abi,
    functionName: 'isPatricianPeriodNow',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__ and `functionName` set to `"isPool"`
 */
export const useReadGeneralDistributionAgreementV1IsPool =
  /*#__PURE__*/ createUseReadContract({
    abi: generalDistributionAgreementV1Abi,
    functionName: 'isPool',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__ and `functionName` set to `"proxiableUUID"`
 */
export const useReadGeneralDistributionAgreementV1ProxiableUuid =
  /*#__PURE__*/ createUseReadContract({
    abi: generalDistributionAgreementV1Abi,
    functionName: 'proxiableUUID',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__ and `functionName` set to `"realtimeBalanceOf"`
 */
export const useReadGeneralDistributionAgreementV1RealtimeBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: generalDistributionAgreementV1Abi,
    functionName: 'realtimeBalanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__ and `functionName` set to `"realtimeBalanceOfNow"`
 */
export const useReadGeneralDistributionAgreementV1RealtimeBalanceOfNow =
  /*#__PURE__*/ createUseReadContract({
    abi: generalDistributionAgreementV1Abi,
    functionName: 'realtimeBalanceOfNow',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__ and `functionName` set to `"superfluidPoolBeacon"`
 */
export const useReadGeneralDistributionAgreementV1SuperfluidPoolBeacon =
  /*#__PURE__*/ createUseReadContract({
    abi: generalDistributionAgreementV1Abi,
    functionName: 'superfluidPoolBeacon',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__
 */
export const useWriteGeneralDistributionAgreementV1 =
  /*#__PURE__*/ createUseWriteContract({
    abi: generalDistributionAgreementV1Abi,
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__ and `functionName` set to `"appendIndexUpdateByPool"`
 */
export const useWriteGeneralDistributionAgreementV1AppendIndexUpdateByPool =
  /*#__PURE__*/ createUseWriteContract({
    abi: generalDistributionAgreementV1Abi,
    functionName: 'appendIndexUpdateByPool',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__ and `functionName` set to `"castrate"`
 */
export const useWriteGeneralDistributionAgreementV1Castrate =
  /*#__PURE__*/ createUseWriteContract({
    abi: generalDistributionAgreementV1Abi,
    functionName: 'castrate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__ and `functionName` set to `"claimAll"`
 */
export const useWriteGeneralDistributionAgreementV1ClaimAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: generalDistributionAgreementV1Abi,
    functionName: 'claimAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__ and `functionName` set to `"connectPool"`
 */
export const useWriteGeneralDistributionAgreementV1ConnectPool =
  /*#__PURE__*/ createUseWriteContract({
    abi: generalDistributionAgreementV1Abi,
    functionName: 'connectPool',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__ and `functionName` set to `"createPool"`
 */
export const useWriteGeneralDistributionAgreementV1CreatePool =
  /*#__PURE__*/ createUseWriteContract({
    abi: generalDistributionAgreementV1Abi,
    functionName: 'createPool',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__ and `functionName` set to `"disconnectPool"`
 */
export const useWriteGeneralDistributionAgreementV1DisconnectPool =
  /*#__PURE__*/ createUseWriteContract({
    abi: generalDistributionAgreementV1Abi,
    functionName: 'disconnectPool',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__ and `functionName` set to `"distribute"`
 */
export const useWriteGeneralDistributionAgreementV1Distribute =
  /*#__PURE__*/ createUseWriteContract({
    abi: generalDistributionAgreementV1Abi,
    functionName: 'distribute',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__ and `functionName` set to `"distributeFlow"`
 */
export const useWriteGeneralDistributionAgreementV1DistributeFlow =
  /*#__PURE__*/ createUseWriteContract({
    abi: generalDistributionAgreementV1Abi,
    functionName: 'distributeFlow',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__ and `functionName` set to `"poolSettleClaim"`
 */
export const useWriteGeneralDistributionAgreementV1PoolSettleClaim =
  /*#__PURE__*/ createUseWriteContract({
    abi: generalDistributionAgreementV1Abi,
    functionName: 'poolSettleClaim',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__ and `functionName` set to `"updateCode"`
 */
export const useWriteGeneralDistributionAgreementV1UpdateCode =
  /*#__PURE__*/ createUseWriteContract({
    abi: generalDistributionAgreementV1Abi,
    functionName: 'updateCode',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__ and `functionName` set to `"updateMemberUnits"`
 */
export const useWriteGeneralDistributionAgreementV1UpdateMemberUnits =
  /*#__PURE__*/ createUseWriteContract({
    abi: generalDistributionAgreementV1Abi,
    functionName: 'updateMemberUnits',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__
 */
export const useSimulateGeneralDistributionAgreementV1 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: generalDistributionAgreementV1Abi,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__ and `functionName` set to `"appendIndexUpdateByPool"`
 */
export const useSimulateGeneralDistributionAgreementV1AppendIndexUpdateByPool =
  /*#__PURE__*/ createUseSimulateContract({
    abi: generalDistributionAgreementV1Abi,
    functionName: 'appendIndexUpdateByPool',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__ and `functionName` set to `"castrate"`
 */
export const useSimulateGeneralDistributionAgreementV1Castrate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: generalDistributionAgreementV1Abi,
    functionName: 'castrate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__ and `functionName` set to `"claimAll"`
 */
export const useSimulateGeneralDistributionAgreementV1ClaimAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: generalDistributionAgreementV1Abi,
    functionName: 'claimAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__ and `functionName` set to `"connectPool"`
 */
export const useSimulateGeneralDistributionAgreementV1ConnectPool =
  /*#__PURE__*/ createUseSimulateContract({
    abi: generalDistributionAgreementV1Abi,
    functionName: 'connectPool',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__ and `functionName` set to `"createPool"`
 */
export const useSimulateGeneralDistributionAgreementV1CreatePool =
  /*#__PURE__*/ createUseSimulateContract({
    abi: generalDistributionAgreementV1Abi,
    functionName: 'createPool',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__ and `functionName` set to `"disconnectPool"`
 */
export const useSimulateGeneralDistributionAgreementV1DisconnectPool =
  /*#__PURE__*/ createUseSimulateContract({
    abi: generalDistributionAgreementV1Abi,
    functionName: 'disconnectPool',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__ and `functionName` set to `"distribute"`
 */
export const useSimulateGeneralDistributionAgreementV1Distribute =
  /*#__PURE__*/ createUseSimulateContract({
    abi: generalDistributionAgreementV1Abi,
    functionName: 'distribute',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__ and `functionName` set to `"distributeFlow"`
 */
export const useSimulateGeneralDistributionAgreementV1DistributeFlow =
  /*#__PURE__*/ createUseSimulateContract({
    abi: generalDistributionAgreementV1Abi,
    functionName: 'distributeFlow',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__ and `functionName` set to `"poolSettleClaim"`
 */
export const useSimulateGeneralDistributionAgreementV1PoolSettleClaim =
  /*#__PURE__*/ createUseSimulateContract({
    abi: generalDistributionAgreementV1Abi,
    functionName: 'poolSettleClaim',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__ and `functionName` set to `"updateCode"`
 */
export const useSimulateGeneralDistributionAgreementV1UpdateCode =
  /*#__PURE__*/ createUseSimulateContract({
    abi: generalDistributionAgreementV1Abi,
    functionName: 'updateCode',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__ and `functionName` set to `"updateMemberUnits"`
 */
export const useSimulateGeneralDistributionAgreementV1UpdateMemberUnits =
  /*#__PURE__*/ createUseSimulateContract({
    abi: generalDistributionAgreementV1Abi,
    functionName: 'updateMemberUnits',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__
 */
export const useWatchGeneralDistributionAgreementV1Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: generalDistributionAgreementV1Abi,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__ and `eventName` set to `"BufferAdjusted"`
 */
export const useWatchGeneralDistributionAgreementV1BufferAdjustedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: generalDistributionAgreementV1Abi,
    eventName: 'BufferAdjusted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__ and `eventName` set to `"CodeUpdated"`
 */
export const useWatchGeneralDistributionAgreementV1CodeUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: generalDistributionAgreementV1Abi,
    eventName: 'CodeUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__ and `eventName` set to `"FlowDistributionUpdated"`
 */
export const useWatchGeneralDistributionAgreementV1FlowDistributionUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: generalDistributionAgreementV1Abi,
    eventName: 'FlowDistributionUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__ and `eventName` set to `"Initialized"`
 */
export const useWatchGeneralDistributionAgreementV1InitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: generalDistributionAgreementV1Abi,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__ and `eventName` set to `"InstantDistributionUpdated"`
 */
export const useWatchGeneralDistributionAgreementV1InstantDistributionUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: generalDistributionAgreementV1Abi,
    eventName: 'InstantDistributionUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__ and `eventName` set to `"PoolConnectionUpdated"`
 */
export const useWatchGeneralDistributionAgreementV1PoolConnectionUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: generalDistributionAgreementV1Abi,
    eventName: 'PoolConnectionUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link generalDistributionAgreementV1Abi}__ and `eventName` set to `"PoolCreated"`
 */
export const useWatchGeneralDistributionAgreementV1PoolCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: generalDistributionAgreementV1Abi,
    eventName: 'PoolCreated',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ieasAbi}__
 */
export const useReadIeas = /*#__PURE__*/ createUseReadContract({ abi: ieasAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ieasAbi}__ and `functionName` set to `"getAttestation"`
 */
export const useReadIeasGetAttestation = /*#__PURE__*/ createUseReadContract({
  abi: ieasAbi,
  functionName: 'getAttestation',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ieasAbi}__ and `functionName` set to `"getRevokeOffchain"`
 */
export const useReadIeasGetRevokeOffchain = /*#__PURE__*/ createUseReadContract(
  { abi: ieasAbi, functionName: 'getRevokeOffchain' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ieasAbi}__ and `functionName` set to `"getSchemaRegistry"`
 */
export const useReadIeasGetSchemaRegistry = /*#__PURE__*/ createUseReadContract(
  { abi: ieasAbi, functionName: 'getSchemaRegistry' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ieasAbi}__ and `functionName` set to `"getTimestamp"`
 */
export const useReadIeasGetTimestamp = /*#__PURE__*/ createUseReadContract({
  abi: ieasAbi,
  functionName: 'getTimestamp',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ieasAbi}__ and `functionName` set to `"isAttestationValid"`
 */
export const useReadIeasIsAttestationValid =
  /*#__PURE__*/ createUseReadContract({
    abi: ieasAbi,
    functionName: 'isAttestationValid',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ieasAbi}__ and `functionName` set to `"version"`
 */
export const useReadIeasVersion = /*#__PURE__*/ createUseReadContract({
  abi: ieasAbi,
  functionName: 'version',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ieasAbi}__
 */
export const useWriteIeas = /*#__PURE__*/ createUseWriteContract({
  abi: ieasAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ieasAbi}__ and `functionName` set to `"attest"`
 */
export const useWriteIeasAttest = /*#__PURE__*/ createUseWriteContract({
  abi: ieasAbi,
  functionName: 'attest',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ieasAbi}__ and `functionName` set to `"attestByDelegation"`
 */
export const useWriteIeasAttestByDelegation =
  /*#__PURE__*/ createUseWriteContract({
    abi: ieasAbi,
    functionName: 'attestByDelegation',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ieasAbi}__ and `functionName` set to `"multiAttest"`
 */
export const useWriteIeasMultiAttest = /*#__PURE__*/ createUseWriteContract({
  abi: ieasAbi,
  functionName: 'multiAttest',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ieasAbi}__ and `functionName` set to `"multiAttestByDelegation"`
 */
export const useWriteIeasMultiAttestByDelegation =
  /*#__PURE__*/ createUseWriteContract({
    abi: ieasAbi,
    functionName: 'multiAttestByDelegation',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ieasAbi}__ and `functionName` set to `"multiRevoke"`
 */
export const useWriteIeasMultiRevoke = /*#__PURE__*/ createUseWriteContract({
  abi: ieasAbi,
  functionName: 'multiRevoke',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ieasAbi}__ and `functionName` set to `"multiRevokeByDelegation"`
 */
export const useWriteIeasMultiRevokeByDelegation =
  /*#__PURE__*/ createUseWriteContract({
    abi: ieasAbi,
    functionName: 'multiRevokeByDelegation',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ieasAbi}__ and `functionName` set to `"multiRevokeOffchain"`
 */
export const useWriteIeasMultiRevokeOffchain =
  /*#__PURE__*/ createUseWriteContract({
    abi: ieasAbi,
    functionName: 'multiRevokeOffchain',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ieasAbi}__ and `functionName` set to `"multiTimestamp"`
 */
export const useWriteIeasMultiTimestamp = /*#__PURE__*/ createUseWriteContract({
  abi: ieasAbi,
  functionName: 'multiTimestamp',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ieasAbi}__ and `functionName` set to `"revoke"`
 */
export const useWriteIeasRevoke = /*#__PURE__*/ createUseWriteContract({
  abi: ieasAbi,
  functionName: 'revoke',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ieasAbi}__ and `functionName` set to `"revokeByDelegation"`
 */
export const useWriteIeasRevokeByDelegation =
  /*#__PURE__*/ createUseWriteContract({
    abi: ieasAbi,
    functionName: 'revokeByDelegation',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ieasAbi}__ and `functionName` set to `"revokeOffchain"`
 */
export const useWriteIeasRevokeOffchain = /*#__PURE__*/ createUseWriteContract({
  abi: ieasAbi,
  functionName: 'revokeOffchain',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ieasAbi}__ and `functionName` set to `"timestamp"`
 */
export const useWriteIeasTimestamp = /*#__PURE__*/ createUseWriteContract({
  abi: ieasAbi,
  functionName: 'timestamp',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ieasAbi}__
 */
export const useSimulateIeas = /*#__PURE__*/ createUseSimulateContract({
  abi: ieasAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ieasAbi}__ and `functionName` set to `"attest"`
 */
export const useSimulateIeasAttest = /*#__PURE__*/ createUseSimulateContract({
  abi: ieasAbi,
  functionName: 'attest',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ieasAbi}__ and `functionName` set to `"attestByDelegation"`
 */
export const useSimulateIeasAttestByDelegation =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ieasAbi,
    functionName: 'attestByDelegation',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ieasAbi}__ and `functionName` set to `"multiAttest"`
 */
export const useSimulateIeasMultiAttest =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ieasAbi,
    functionName: 'multiAttest',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ieasAbi}__ and `functionName` set to `"multiAttestByDelegation"`
 */
export const useSimulateIeasMultiAttestByDelegation =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ieasAbi,
    functionName: 'multiAttestByDelegation',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ieasAbi}__ and `functionName` set to `"multiRevoke"`
 */
export const useSimulateIeasMultiRevoke =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ieasAbi,
    functionName: 'multiRevoke',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ieasAbi}__ and `functionName` set to `"multiRevokeByDelegation"`
 */
export const useSimulateIeasMultiRevokeByDelegation =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ieasAbi,
    functionName: 'multiRevokeByDelegation',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ieasAbi}__ and `functionName` set to `"multiRevokeOffchain"`
 */
export const useSimulateIeasMultiRevokeOffchain =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ieasAbi,
    functionName: 'multiRevokeOffchain',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ieasAbi}__ and `functionName` set to `"multiTimestamp"`
 */
export const useSimulateIeasMultiTimestamp =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ieasAbi,
    functionName: 'multiTimestamp',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ieasAbi}__ and `functionName` set to `"revoke"`
 */
export const useSimulateIeasRevoke = /*#__PURE__*/ createUseSimulateContract({
  abi: ieasAbi,
  functionName: 'revoke',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ieasAbi}__ and `functionName` set to `"revokeByDelegation"`
 */
export const useSimulateIeasRevokeByDelegation =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ieasAbi,
    functionName: 'revokeByDelegation',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ieasAbi}__ and `functionName` set to `"revokeOffchain"`
 */
export const useSimulateIeasRevokeOffchain =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ieasAbi,
    functionName: 'revokeOffchain',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ieasAbi}__ and `functionName` set to `"timestamp"`
 */
export const useSimulateIeasTimestamp = /*#__PURE__*/ createUseSimulateContract(
  { abi: ieasAbi, functionName: 'timestamp' },
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ieasAbi}__
 */
export const useWatchIeasEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: ieasAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ieasAbi}__ and `eventName` set to `"Attested"`
 */
export const useWatchIeasAttestedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ieasAbi,
    eventName: 'Attested',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ieasAbi}__ and `eventName` set to `"Revoked"`
 */
export const useWatchIeasRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ieasAbi,
    eventName: 'Revoked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ieasAbi}__ and `eventName` set to `"RevokedOffchain"`
 */
export const useWatchIeasRevokedOffchainEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ieasAbi,
    eventName: 'RevokedOffchain',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ieasAbi}__ and `eventName` set to `"Timestamped"`
 */
export const useWatchIeasTimestampedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ieasAbi,
    eventName: 'Timestamped',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__
 */
export const useReadIseth = /*#__PURE__*/ createUseReadContract({
  abi: isethAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"CONSTANT_INFLOW_NFT"`
 */
export const useReadIsethConstantInflowNft =
  /*#__PURE__*/ createUseReadContract({
    abi: isethAbi,
    functionName: 'CONSTANT_INFLOW_NFT',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"CONSTANT_OUTFLOW_NFT"`
 */
export const useReadIsethConstantOutflowNft =
  /*#__PURE__*/ createUseReadContract({
    abi: isethAbi,
    functionName: 'CONSTANT_OUTFLOW_NFT',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"POOL_ADMIN_NFT"`
 */
export const useReadIsethPoolAdminNft = /*#__PURE__*/ createUseReadContract({
  abi: isethAbi,
  functionName: 'POOL_ADMIN_NFT',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"POOL_MEMBER_NFT"`
 */
export const useReadIsethPoolMemberNft = /*#__PURE__*/ createUseReadContract({
  abi: isethAbi,
  functionName: 'POOL_MEMBER_NFT',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadIsethAllowance = /*#__PURE__*/ createUseReadContract({
  abi: isethAbi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIsethBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: isethAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadIsethDecimals = /*#__PURE__*/ createUseReadContract({
  abi: isethAbi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"defaultOperators"`
 */
export const useReadIsethDefaultOperators = /*#__PURE__*/ createUseReadContract(
  { abi: isethAbi, functionName: 'defaultOperators' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"getAccountActiveAgreements"`
 */
export const useReadIsethGetAccountActiveAgreements =
  /*#__PURE__*/ createUseReadContract({
    abi: isethAbi,
    functionName: 'getAccountActiveAgreements',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"getAdmin"`
 */
export const useReadIsethGetAdmin = /*#__PURE__*/ createUseReadContract({
  abi: isethAbi,
  functionName: 'getAdmin',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"getAgreementData"`
 */
export const useReadIsethGetAgreementData = /*#__PURE__*/ createUseReadContract(
  { abi: isethAbi, functionName: 'getAgreementData' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"getAgreementStateSlot"`
 */
export const useReadIsethGetAgreementStateSlot =
  /*#__PURE__*/ createUseReadContract({
    abi: isethAbi,
    functionName: 'getAgreementStateSlot',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"getHost"`
 */
export const useReadIsethGetHost = /*#__PURE__*/ createUseReadContract({
  abi: isethAbi,
  functionName: 'getHost',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"getUnderlyingDecimals"`
 */
export const useReadIsethGetUnderlyingDecimals =
  /*#__PURE__*/ createUseReadContract({
    abi: isethAbi,
    functionName: 'getUnderlyingDecimals',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"getUnderlyingToken"`
 */
export const useReadIsethGetUnderlyingToken =
  /*#__PURE__*/ createUseReadContract({
    abi: isethAbi,
    functionName: 'getUnderlyingToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"granularity"`
 */
export const useReadIsethGranularity = /*#__PURE__*/ createUseReadContract({
  abi: isethAbi,
  functionName: 'granularity',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"isAccountCritical"`
 */
export const useReadIsethIsAccountCritical =
  /*#__PURE__*/ createUseReadContract({
    abi: isethAbi,
    functionName: 'isAccountCritical',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"isAccountCriticalNow"`
 */
export const useReadIsethIsAccountCriticalNow =
  /*#__PURE__*/ createUseReadContract({
    abi: isethAbi,
    functionName: 'isAccountCriticalNow',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"isAccountSolvent"`
 */
export const useReadIsethIsAccountSolvent = /*#__PURE__*/ createUseReadContract(
  { abi: isethAbi, functionName: 'isAccountSolvent' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"isAccountSolventNow"`
 */
export const useReadIsethIsAccountSolventNow =
  /*#__PURE__*/ createUseReadContract({
    abi: isethAbi,
    functionName: 'isAccountSolventNow',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"isOperatorFor"`
 */
export const useReadIsethIsOperatorFor = /*#__PURE__*/ createUseReadContract({
  abi: isethAbi,
  functionName: 'isOperatorFor',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"name"`
 */
export const useReadIsethName = /*#__PURE__*/ createUseReadContract({
  abi: isethAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"realtimeBalanceOf"`
 */
export const useReadIsethRealtimeBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: isethAbi,
    functionName: 'realtimeBalanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"realtimeBalanceOfNow"`
 */
export const useReadIsethRealtimeBalanceOfNow =
  /*#__PURE__*/ createUseReadContract({
    abi: isethAbi,
    functionName: 'realtimeBalanceOfNow',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadIsethSymbol = /*#__PURE__*/ createUseReadContract({
  abi: isethAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"toUnderlyingAmount"`
 */
export const useReadIsethToUnderlyingAmount =
  /*#__PURE__*/ createUseReadContract({
    abi: isethAbi,
    functionName: 'toUnderlyingAmount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadIsethTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: isethAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__
 */
export const useWriteIseth = /*#__PURE__*/ createUseWriteContract({
  abi: isethAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteIsethApprove = /*#__PURE__*/ createUseWriteContract({
  abi: isethAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"authorizeOperator"`
 */
export const useWriteIsethAuthorizeOperator =
  /*#__PURE__*/ createUseWriteContract({
    abi: isethAbi,
    functionName: 'authorizeOperator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"burn"`
 */
export const useWriteIsethBurn = /*#__PURE__*/ createUseWriteContract({
  abi: isethAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"changeAdmin"`
 */
export const useWriteIsethChangeAdmin = /*#__PURE__*/ createUseWriteContract({
  abi: isethAbi,
  functionName: 'changeAdmin',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"createAgreement"`
 */
export const useWriteIsethCreateAgreement =
  /*#__PURE__*/ createUseWriteContract({
    abi: isethAbi,
    functionName: 'createAgreement',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"decreaseAllowance"`
 */
export const useWriteIsethDecreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: isethAbi,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"downgrade"`
 */
export const useWriteIsethDowngrade = /*#__PURE__*/ createUseWriteContract({
  abi: isethAbi,
  functionName: 'downgrade',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"downgradeTo"`
 */
export const useWriteIsethDowngradeTo = /*#__PURE__*/ createUseWriteContract({
  abi: isethAbi,
  functionName: 'downgradeTo',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"downgradeToETH"`
 */
export const useWriteIsethDowngradeToEth = /*#__PURE__*/ createUseWriteContract(
  { abi: isethAbi, functionName: 'downgradeToETH' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"increaseAllowance"`
 */
export const useWriteIsethIncreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: isethAbi,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"initialize"`
 */
export const useWriteIsethInitialize = /*#__PURE__*/ createUseWriteContract({
  abi: isethAbi,
  functionName: 'initialize',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"initializeWithAdmin"`
 */
export const useWriteIsethInitializeWithAdmin =
  /*#__PURE__*/ createUseWriteContract({
    abi: isethAbi,
    functionName: 'initializeWithAdmin',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"makeLiquidationPayoutsV2"`
 */
export const useWriteIsethMakeLiquidationPayoutsV2 =
  /*#__PURE__*/ createUseWriteContract({
    abi: isethAbi,
    functionName: 'makeLiquidationPayoutsV2',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"operationApprove"`
 */
export const useWriteIsethOperationApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: isethAbi,
    functionName: 'operationApprove',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"operationDecreaseAllowance"`
 */
export const useWriteIsethOperationDecreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: isethAbi,
    functionName: 'operationDecreaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"operationDowngrade"`
 */
export const useWriteIsethOperationDowngrade =
  /*#__PURE__*/ createUseWriteContract({
    abi: isethAbi,
    functionName: 'operationDowngrade',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"operationIncreaseAllowance"`
 */
export const useWriteIsethOperationIncreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: isethAbi,
    functionName: 'operationIncreaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"operationSend"`
 */
export const useWriteIsethOperationSend = /*#__PURE__*/ createUseWriteContract({
  abi: isethAbi,
  functionName: 'operationSend',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"operationTransferFrom"`
 */
export const useWriteIsethOperationTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: isethAbi,
    functionName: 'operationTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"operationUpgrade"`
 */
export const useWriteIsethOperationUpgrade =
  /*#__PURE__*/ createUseWriteContract({
    abi: isethAbi,
    functionName: 'operationUpgrade',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"operatorBurn"`
 */
export const useWriteIsethOperatorBurn = /*#__PURE__*/ createUseWriteContract({
  abi: isethAbi,
  functionName: 'operatorBurn',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"operatorSend"`
 */
export const useWriteIsethOperatorSend = /*#__PURE__*/ createUseWriteContract({
  abi: isethAbi,
  functionName: 'operatorSend',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"revokeOperator"`
 */
export const useWriteIsethRevokeOperator = /*#__PURE__*/ createUseWriteContract(
  { abi: isethAbi, functionName: 'revokeOperator' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"selfApproveFor"`
 */
export const useWriteIsethSelfApproveFor = /*#__PURE__*/ createUseWriteContract(
  { abi: isethAbi, functionName: 'selfApproveFor' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"selfBurn"`
 */
export const useWriteIsethSelfBurn = /*#__PURE__*/ createUseWriteContract({
  abi: isethAbi,
  functionName: 'selfBurn',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"selfMint"`
 */
export const useWriteIsethSelfMint = /*#__PURE__*/ createUseWriteContract({
  abi: isethAbi,
  functionName: 'selfMint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"selfTransferFrom"`
 */
export const useWriteIsethSelfTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: isethAbi,
    functionName: 'selfTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"send"`
 */
export const useWriteIsethSend = /*#__PURE__*/ createUseWriteContract({
  abi: isethAbi,
  functionName: 'send',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"settleBalance"`
 */
export const useWriteIsethSettleBalance = /*#__PURE__*/ createUseWriteContract({
  abi: isethAbi,
  functionName: 'settleBalance',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"terminateAgreement"`
 */
export const useWriteIsethTerminateAgreement =
  /*#__PURE__*/ createUseWriteContract({
    abi: isethAbi,
    functionName: 'terminateAgreement',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteIsethTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: isethAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"transferAll"`
 */
export const useWriteIsethTransferAll = /*#__PURE__*/ createUseWriteContract({
  abi: isethAbi,
  functionName: 'transferAll',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIsethTransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: isethAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"updateAgreementData"`
 */
export const useWriteIsethUpdateAgreementData =
  /*#__PURE__*/ createUseWriteContract({
    abi: isethAbi,
    functionName: 'updateAgreementData',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"updateAgreementStateSlot"`
 */
export const useWriteIsethUpdateAgreementStateSlot =
  /*#__PURE__*/ createUseWriteContract({
    abi: isethAbi,
    functionName: 'updateAgreementStateSlot',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"upgrade"`
 */
export const useWriteIsethUpgrade = /*#__PURE__*/ createUseWriteContract({
  abi: isethAbi,
  functionName: 'upgrade',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"upgradeByETH"`
 */
export const useWriteIsethUpgradeByEth = /*#__PURE__*/ createUseWriteContract({
  abi: isethAbi,
  functionName: 'upgradeByETH',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"upgradeByETHTo"`
 */
export const useWriteIsethUpgradeByEthTo = /*#__PURE__*/ createUseWriteContract(
  { abi: isethAbi, functionName: 'upgradeByETHTo' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"upgradeTo"`
 */
export const useWriteIsethUpgradeTo = /*#__PURE__*/ createUseWriteContract({
  abi: isethAbi,
  functionName: 'upgradeTo',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__
 */
export const useSimulateIseth = /*#__PURE__*/ createUseSimulateContract({
  abi: isethAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIsethApprove = /*#__PURE__*/ createUseSimulateContract({
  abi: isethAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"authorizeOperator"`
 */
export const useSimulateIsethAuthorizeOperator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'authorizeOperator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"burn"`
 */
export const useSimulateIsethBurn = /*#__PURE__*/ createUseSimulateContract({
  abi: isethAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"changeAdmin"`
 */
export const useSimulateIsethChangeAdmin =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'changeAdmin',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"createAgreement"`
 */
export const useSimulateIsethCreateAgreement =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'createAgreement',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"decreaseAllowance"`
 */
export const useSimulateIsethDecreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"downgrade"`
 */
export const useSimulateIsethDowngrade =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'downgrade',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"downgradeTo"`
 */
export const useSimulateIsethDowngradeTo =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'downgradeTo',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"downgradeToETH"`
 */
export const useSimulateIsethDowngradeToEth =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'downgradeToETH',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"increaseAllowance"`
 */
export const useSimulateIsethIncreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"initialize"`
 */
export const useSimulateIsethInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"initializeWithAdmin"`
 */
export const useSimulateIsethInitializeWithAdmin =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'initializeWithAdmin',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"makeLiquidationPayoutsV2"`
 */
export const useSimulateIsethMakeLiquidationPayoutsV2 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'makeLiquidationPayoutsV2',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"operationApprove"`
 */
export const useSimulateIsethOperationApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'operationApprove',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"operationDecreaseAllowance"`
 */
export const useSimulateIsethOperationDecreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'operationDecreaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"operationDowngrade"`
 */
export const useSimulateIsethOperationDowngrade =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'operationDowngrade',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"operationIncreaseAllowance"`
 */
export const useSimulateIsethOperationIncreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'operationIncreaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"operationSend"`
 */
export const useSimulateIsethOperationSend =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'operationSend',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"operationTransferFrom"`
 */
export const useSimulateIsethOperationTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'operationTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"operationUpgrade"`
 */
export const useSimulateIsethOperationUpgrade =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'operationUpgrade',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"operatorBurn"`
 */
export const useSimulateIsethOperatorBurn =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'operatorBurn',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"operatorSend"`
 */
export const useSimulateIsethOperatorSend =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'operatorSend',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"revokeOperator"`
 */
export const useSimulateIsethRevokeOperator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'revokeOperator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"selfApproveFor"`
 */
export const useSimulateIsethSelfApproveFor =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'selfApproveFor',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"selfBurn"`
 */
export const useSimulateIsethSelfBurn = /*#__PURE__*/ createUseSimulateContract(
  { abi: isethAbi, functionName: 'selfBurn' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"selfMint"`
 */
export const useSimulateIsethSelfMint = /*#__PURE__*/ createUseSimulateContract(
  { abi: isethAbi, functionName: 'selfMint' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"selfTransferFrom"`
 */
export const useSimulateIsethSelfTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'selfTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"send"`
 */
export const useSimulateIsethSend = /*#__PURE__*/ createUseSimulateContract({
  abi: isethAbi,
  functionName: 'send',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"settleBalance"`
 */
export const useSimulateIsethSettleBalance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'settleBalance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"terminateAgreement"`
 */
export const useSimulateIsethTerminateAgreement =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'terminateAgreement',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateIsethTransfer = /*#__PURE__*/ createUseSimulateContract(
  { abi: isethAbi, functionName: 'transfer' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"transferAll"`
 */
export const useSimulateIsethTransferAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'transferAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIsethTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"updateAgreementData"`
 */
export const useSimulateIsethUpdateAgreementData =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'updateAgreementData',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"updateAgreementStateSlot"`
 */
export const useSimulateIsethUpdateAgreementStateSlot =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'updateAgreementStateSlot',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"upgrade"`
 */
export const useSimulateIsethUpgrade = /*#__PURE__*/ createUseSimulateContract({
  abi: isethAbi,
  functionName: 'upgrade',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"upgradeByETH"`
 */
export const useSimulateIsethUpgradeByEth =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'upgradeByETH',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"upgradeByETHTo"`
 */
export const useSimulateIsethUpgradeByEthTo =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'upgradeByETHTo',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"upgradeTo"`
 */
export const useSimulateIsethUpgradeTo =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link isethAbi}__
 */
export const useWatchIsethEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: isethAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link isethAbi}__ and `eventName` set to `"AdminChanged"`
 */
export const useWatchIsethAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: isethAbi,
    eventName: 'AdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link isethAbi}__ and `eventName` set to `"AgreementCreated"`
 */
export const useWatchIsethAgreementCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: isethAbi,
    eventName: 'AgreementCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link isethAbi}__ and `eventName` set to `"AgreementLiquidated"`
 */
export const useWatchIsethAgreementLiquidatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: isethAbi,
    eventName: 'AgreementLiquidated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link isethAbi}__ and `eventName` set to `"AgreementLiquidatedBy"`
 */
export const useWatchIsethAgreementLiquidatedByEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: isethAbi,
    eventName: 'AgreementLiquidatedBy',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link isethAbi}__ and `eventName` set to `"AgreementLiquidatedV2"`
 */
export const useWatchIsethAgreementLiquidatedV2Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: isethAbi,
    eventName: 'AgreementLiquidatedV2',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link isethAbi}__ and `eventName` set to `"AgreementStateUpdated"`
 */
export const useWatchIsethAgreementStateUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: isethAbi,
    eventName: 'AgreementStateUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link isethAbi}__ and `eventName` set to `"AgreementTerminated"`
 */
export const useWatchIsethAgreementTerminatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: isethAbi,
    eventName: 'AgreementTerminated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link isethAbi}__ and `eventName` set to `"AgreementUpdated"`
 */
export const useWatchIsethAgreementUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: isethAbi,
    eventName: 'AgreementUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link isethAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIsethApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: isethAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link isethAbi}__ and `eventName` set to `"AuthorizedOperator"`
 */
export const useWatchIsethAuthorizedOperatorEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: isethAbi,
    eventName: 'AuthorizedOperator',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link isethAbi}__ and `eventName` set to `"Bailout"`
 */
export const useWatchIsethBailoutEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: isethAbi,
    eventName: 'Bailout',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link isethAbi}__ and `eventName` set to `"Burned"`
 */
export const useWatchIsethBurnedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: isethAbi,
    eventName: 'Burned',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link isethAbi}__ and `eventName` set to `"ConstantInflowNFTCreated"`
 */
export const useWatchIsethConstantInflowNftCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: isethAbi,
    eventName: 'ConstantInflowNFTCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link isethAbi}__ and `eventName` set to `"ConstantOutflowNFTCreated"`
 */
export const useWatchIsethConstantOutflowNftCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: isethAbi,
    eventName: 'ConstantOutflowNFTCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link isethAbi}__ and `eventName` set to `"Minted"`
 */
export const useWatchIsethMintedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: isethAbi,
    eventName: 'Minted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link isethAbi}__ and `eventName` set to `"PoolAdminNFTCreated"`
 */
export const useWatchIsethPoolAdminNftCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: isethAbi,
    eventName: 'PoolAdminNFTCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link isethAbi}__ and `eventName` set to `"PoolMemberNFTCreated"`
 */
export const useWatchIsethPoolMemberNftCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: isethAbi,
    eventName: 'PoolMemberNFTCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link isethAbi}__ and `eventName` set to `"RevokedOperator"`
 */
export const useWatchIsethRevokedOperatorEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: isethAbi,
    eventName: 'RevokedOperator',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link isethAbi}__ and `eventName` set to `"Sent"`
 */
export const useWatchIsethSentEvent = /*#__PURE__*/ createUseWatchContractEvent(
  { abi: isethAbi, eventName: 'Sent' },
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link isethAbi}__ and `eventName` set to `"TokenDowngraded"`
 */
export const useWatchIsethTokenDowngradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: isethAbi,
    eventName: 'TokenDowngraded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link isethAbi}__ and `eventName` set to `"TokenUpgraded"`
 */
export const useWatchIsethTokenUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: isethAbi,
    eventName: 'TokenUpgraded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link isethAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIsethTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: isethAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethCustomAbi}__
 */
export const useWriteIsethCustom = /*#__PURE__*/ createUseWriteContract({
  abi: isethCustomAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethCustomAbi}__ and `functionName` set to `"downgradeToETH"`
 */
export const useWriteIsethCustomDowngradeToEth =
  /*#__PURE__*/ createUseWriteContract({
    abi: isethCustomAbi,
    functionName: 'downgradeToETH',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethCustomAbi}__ and `functionName` set to `"upgradeByETH"`
 */
export const useWriteIsethCustomUpgradeByEth =
  /*#__PURE__*/ createUseWriteContract({
    abi: isethCustomAbi,
    functionName: 'upgradeByETH',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethCustomAbi}__ and `functionName` set to `"upgradeByETHTo"`
 */
export const useWriteIsethCustomUpgradeByEthTo =
  /*#__PURE__*/ createUseWriteContract({
    abi: isethCustomAbi,
    functionName: 'upgradeByETHTo',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethCustomAbi}__
 */
export const useSimulateIsethCustom = /*#__PURE__*/ createUseSimulateContract({
  abi: isethCustomAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethCustomAbi}__ and `functionName` set to `"downgradeToETH"`
 */
export const useSimulateIsethCustomDowngradeToEth =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethCustomAbi,
    functionName: 'downgradeToETH',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethCustomAbi}__ and `functionName` set to `"upgradeByETH"`
 */
export const useSimulateIsethCustomUpgradeByEth =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethCustomAbi,
    functionName: 'upgradeByETH',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethCustomAbi}__ and `functionName` set to `"upgradeByETHTo"`
 */
export const useSimulateIsethCustomUpgradeByEthTo =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethCustomAbi,
    functionName: 'upgradeByETHTo',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__
 */
export const useReadSuperToken = /*#__PURE__*/ createUseReadContract({
  abi: superTokenAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"CONSTANT_INFLOW_NFT"`
 */
export const useReadSuperTokenConstantInflowNft =
  /*#__PURE__*/ createUseReadContract({
    abi: superTokenAbi,
    functionName: 'CONSTANT_INFLOW_NFT',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"CONSTANT_OUTFLOW_NFT"`
 */
export const useReadSuperTokenConstantOutflowNft =
  /*#__PURE__*/ createUseReadContract({
    abi: superTokenAbi,
    functionName: 'CONSTANT_OUTFLOW_NFT',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"POOL_ADMIN_NFT"`
 */
export const useReadSuperTokenPoolAdminNft =
  /*#__PURE__*/ createUseReadContract({
    abi: superTokenAbi,
    functionName: 'POOL_ADMIN_NFT',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"POOL_MEMBER_NFT"`
 */
export const useReadSuperTokenPoolMemberNft =
  /*#__PURE__*/ createUseReadContract({
    abi: superTokenAbi,
    functionName: 'POOL_MEMBER_NFT',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadSuperTokenAllowance = /*#__PURE__*/ createUseReadContract({
  abi: superTokenAbi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadSuperTokenBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: superTokenAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadSuperTokenDecimals = /*#__PURE__*/ createUseReadContract({
  abi: superTokenAbi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"defaultOperators"`
 */
export const useReadSuperTokenDefaultOperators =
  /*#__PURE__*/ createUseReadContract({
    abi: superTokenAbi,
    functionName: 'defaultOperators',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"getAccountActiveAgreements"`
 */
export const useReadSuperTokenGetAccountActiveAgreements =
  /*#__PURE__*/ createUseReadContract({
    abi: superTokenAbi,
    functionName: 'getAccountActiveAgreements',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"getAdmin"`
 */
export const useReadSuperTokenGetAdmin = /*#__PURE__*/ createUseReadContract({
  abi: superTokenAbi,
  functionName: 'getAdmin',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"getAgreementData"`
 */
export const useReadSuperTokenGetAgreementData =
  /*#__PURE__*/ createUseReadContract({
    abi: superTokenAbi,
    functionName: 'getAgreementData',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"getAgreementStateSlot"`
 */
export const useReadSuperTokenGetAgreementStateSlot =
  /*#__PURE__*/ createUseReadContract({
    abi: superTokenAbi,
    functionName: 'getAgreementStateSlot',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"getCodeAddress"`
 */
export const useReadSuperTokenGetCodeAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: superTokenAbi,
    functionName: 'getCodeAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"getHost"`
 */
export const useReadSuperTokenGetHost = /*#__PURE__*/ createUseReadContract({
  abi: superTokenAbi,
  functionName: 'getHost',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"getUnderlyingDecimals"`
 */
export const useReadSuperTokenGetUnderlyingDecimals =
  /*#__PURE__*/ createUseReadContract({
    abi: superTokenAbi,
    functionName: 'getUnderlyingDecimals',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"getUnderlyingToken"`
 */
export const useReadSuperTokenGetUnderlyingToken =
  /*#__PURE__*/ createUseReadContract({
    abi: superTokenAbi,
    functionName: 'getUnderlyingToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"granularity"`
 */
export const useReadSuperTokenGranularity = /*#__PURE__*/ createUseReadContract(
  { abi: superTokenAbi, functionName: 'granularity' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"isAccountCritical"`
 */
export const useReadSuperTokenIsAccountCritical =
  /*#__PURE__*/ createUseReadContract({
    abi: superTokenAbi,
    functionName: 'isAccountCritical',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"isAccountCriticalNow"`
 */
export const useReadSuperTokenIsAccountCriticalNow =
  /*#__PURE__*/ createUseReadContract({
    abi: superTokenAbi,
    functionName: 'isAccountCriticalNow',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"isAccountSolvent"`
 */
export const useReadSuperTokenIsAccountSolvent =
  /*#__PURE__*/ createUseReadContract({
    abi: superTokenAbi,
    functionName: 'isAccountSolvent',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"isAccountSolventNow"`
 */
export const useReadSuperTokenIsAccountSolventNow =
  /*#__PURE__*/ createUseReadContract({
    abi: superTokenAbi,
    functionName: 'isAccountSolventNow',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"isOperatorFor"`
 */
export const useReadSuperTokenIsOperatorFor =
  /*#__PURE__*/ createUseReadContract({
    abi: superTokenAbi,
    functionName: 'isOperatorFor',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"name"`
 */
export const useReadSuperTokenName = /*#__PURE__*/ createUseReadContract({
  abi: superTokenAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"proxiableUUID"`
 */
export const useReadSuperTokenProxiableUuid =
  /*#__PURE__*/ createUseReadContract({
    abi: superTokenAbi,
    functionName: 'proxiableUUID',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"realtimeBalanceOf"`
 */
export const useReadSuperTokenRealtimeBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: superTokenAbi,
    functionName: 'realtimeBalanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"realtimeBalanceOfNow"`
 */
export const useReadSuperTokenRealtimeBalanceOfNow =
  /*#__PURE__*/ createUseReadContract({
    abi: superTokenAbi,
    functionName: 'realtimeBalanceOfNow',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadSuperTokenSymbol = /*#__PURE__*/ createUseReadContract({
  abi: superTokenAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"toUnderlyingAmount"`
 */
export const useReadSuperTokenToUnderlyingAmount =
  /*#__PURE__*/ createUseReadContract({
    abi: superTokenAbi,
    functionName: 'toUnderlyingAmount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadSuperTokenTotalSupply = /*#__PURE__*/ createUseReadContract(
  { abi: superTokenAbi, functionName: 'totalSupply' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__
 */
export const useWriteSuperToken = /*#__PURE__*/ createUseWriteContract({
  abi: superTokenAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteSuperTokenApprove = /*#__PURE__*/ createUseWriteContract({
  abi: superTokenAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"authorizeOperator"`
 */
export const useWriteSuperTokenAuthorizeOperator =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'authorizeOperator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"burn"`
 */
export const useWriteSuperTokenBurn = /*#__PURE__*/ createUseWriteContract({
  abi: superTokenAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"castrate"`
 */
export const useWriteSuperTokenCastrate = /*#__PURE__*/ createUseWriteContract({
  abi: superTokenAbi,
  functionName: 'castrate',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"changeAdmin"`
 */
export const useWriteSuperTokenChangeAdmin =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'changeAdmin',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"createAgreement"`
 */
export const useWriteSuperTokenCreateAgreement =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'createAgreement',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"decreaseAllowance"`
 */
export const useWriteSuperTokenDecreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"downgrade"`
 */
export const useWriteSuperTokenDowngrade = /*#__PURE__*/ createUseWriteContract(
  { abi: superTokenAbi, functionName: 'downgrade' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"downgradeTo"`
 */
export const useWriteSuperTokenDowngradeTo =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'downgradeTo',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"increaseAllowance"`
 */
export const useWriteSuperTokenIncreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"initialize"`
 */
export const useWriteSuperTokenInitialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"initializeWithAdmin"`
 */
export const useWriteSuperTokenInitializeWithAdmin =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'initializeWithAdmin',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"makeLiquidationPayoutsV2"`
 */
export const useWriteSuperTokenMakeLiquidationPayoutsV2 =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'makeLiquidationPayoutsV2',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operationApprove"`
 */
export const useWriteSuperTokenOperationApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'operationApprove',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operationDecreaseAllowance"`
 */
export const useWriteSuperTokenOperationDecreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'operationDecreaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operationDowngrade"`
 */
export const useWriteSuperTokenOperationDowngrade =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'operationDowngrade',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operationIncreaseAllowance"`
 */
export const useWriteSuperTokenOperationIncreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'operationIncreaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operationSend"`
 */
export const useWriteSuperTokenOperationSend =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'operationSend',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operationTransferFrom"`
 */
export const useWriteSuperTokenOperationTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'operationTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operationUpgrade"`
 */
export const useWriteSuperTokenOperationUpgrade =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'operationUpgrade',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operatorBurn"`
 */
export const useWriteSuperTokenOperatorBurn =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'operatorBurn',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operatorSend"`
 */
export const useWriteSuperTokenOperatorSend =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'operatorSend',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"revokeOperator"`
 */
export const useWriteSuperTokenRevokeOperator =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'revokeOperator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"selfApproveFor"`
 */
export const useWriteSuperTokenSelfApproveFor =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'selfApproveFor',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"selfBurn"`
 */
export const useWriteSuperTokenSelfBurn = /*#__PURE__*/ createUseWriteContract({
  abi: superTokenAbi,
  functionName: 'selfBurn',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"selfMint"`
 */
export const useWriteSuperTokenSelfMint = /*#__PURE__*/ createUseWriteContract({
  abi: superTokenAbi,
  functionName: 'selfMint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"selfTransferFrom"`
 */
export const useWriteSuperTokenSelfTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'selfTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"send"`
 */
export const useWriteSuperTokenSend = /*#__PURE__*/ createUseWriteContract({
  abi: superTokenAbi,
  functionName: 'send',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"settleBalance"`
 */
export const useWriteSuperTokenSettleBalance =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'settleBalance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"terminateAgreement"`
 */
export const useWriteSuperTokenTerminateAgreement =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'terminateAgreement',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteSuperTokenTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: superTokenAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"transferAll"`
 */
export const useWriteSuperTokenTransferAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'transferAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteSuperTokenTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"updateAgreementData"`
 */
export const useWriteSuperTokenUpdateAgreementData =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'updateAgreementData',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"updateAgreementStateSlot"`
 */
export const useWriteSuperTokenUpdateAgreementStateSlot =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'updateAgreementStateSlot',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"updateCode"`
 */
export const useWriteSuperTokenUpdateCode =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'updateCode',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"upgrade"`
 */
export const useWriteSuperTokenUpgrade = /*#__PURE__*/ createUseWriteContract({
  abi: superTokenAbi,
  functionName: 'upgrade',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"upgradeTo"`
 */
export const useWriteSuperTokenUpgradeTo = /*#__PURE__*/ createUseWriteContract(
  { abi: superTokenAbi, functionName: 'upgradeTo' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__
 */
export const useSimulateSuperToken = /*#__PURE__*/ createUseSimulateContract({
  abi: superTokenAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateSuperTokenApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"authorizeOperator"`
 */
export const useSimulateSuperTokenAuthorizeOperator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'authorizeOperator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"burn"`
 */
export const useSimulateSuperTokenBurn =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'burn',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"castrate"`
 */
export const useSimulateSuperTokenCastrate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'castrate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"changeAdmin"`
 */
export const useSimulateSuperTokenChangeAdmin =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'changeAdmin',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"createAgreement"`
 */
export const useSimulateSuperTokenCreateAgreement =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'createAgreement',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"decreaseAllowance"`
 */
export const useSimulateSuperTokenDecreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"downgrade"`
 */
export const useSimulateSuperTokenDowngrade =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'downgrade',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"downgradeTo"`
 */
export const useSimulateSuperTokenDowngradeTo =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'downgradeTo',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"increaseAllowance"`
 */
export const useSimulateSuperTokenIncreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"initialize"`
 */
export const useSimulateSuperTokenInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"initializeWithAdmin"`
 */
export const useSimulateSuperTokenInitializeWithAdmin =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'initializeWithAdmin',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"makeLiquidationPayoutsV2"`
 */
export const useSimulateSuperTokenMakeLiquidationPayoutsV2 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'makeLiquidationPayoutsV2',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operationApprove"`
 */
export const useSimulateSuperTokenOperationApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'operationApprove',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operationDecreaseAllowance"`
 */
export const useSimulateSuperTokenOperationDecreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'operationDecreaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operationDowngrade"`
 */
export const useSimulateSuperTokenOperationDowngrade =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'operationDowngrade',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operationIncreaseAllowance"`
 */
export const useSimulateSuperTokenOperationIncreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'operationIncreaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operationSend"`
 */
export const useSimulateSuperTokenOperationSend =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'operationSend',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operationTransferFrom"`
 */
export const useSimulateSuperTokenOperationTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'operationTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operationUpgrade"`
 */
export const useSimulateSuperTokenOperationUpgrade =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'operationUpgrade',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operatorBurn"`
 */
export const useSimulateSuperTokenOperatorBurn =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'operatorBurn',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operatorSend"`
 */
export const useSimulateSuperTokenOperatorSend =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'operatorSend',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"revokeOperator"`
 */
export const useSimulateSuperTokenRevokeOperator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'revokeOperator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"selfApproveFor"`
 */
export const useSimulateSuperTokenSelfApproveFor =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'selfApproveFor',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"selfBurn"`
 */
export const useSimulateSuperTokenSelfBurn =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'selfBurn',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"selfMint"`
 */
export const useSimulateSuperTokenSelfMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'selfMint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"selfTransferFrom"`
 */
export const useSimulateSuperTokenSelfTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'selfTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"send"`
 */
export const useSimulateSuperTokenSend =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'send',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"settleBalance"`
 */
export const useSimulateSuperTokenSettleBalance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'settleBalance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"terminateAgreement"`
 */
export const useSimulateSuperTokenTerminateAgreement =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'terminateAgreement',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateSuperTokenTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"transferAll"`
 */
export const useSimulateSuperTokenTransferAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'transferAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateSuperTokenTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"updateAgreementData"`
 */
export const useSimulateSuperTokenUpdateAgreementData =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'updateAgreementData',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"updateAgreementStateSlot"`
 */
export const useSimulateSuperTokenUpdateAgreementStateSlot =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'updateAgreementStateSlot',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"updateCode"`
 */
export const useSimulateSuperTokenUpdateCode =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'updateCode',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"upgrade"`
 */
export const useSimulateSuperTokenUpgrade =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'upgrade',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"upgradeTo"`
 */
export const useSimulateSuperTokenUpgradeTo =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link superTokenAbi}__
 */
export const useWatchSuperTokenEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: superTokenAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"AdminChanged"`
 */
export const useWatchSuperTokenAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'AdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"AgreementCreated"`
 */
export const useWatchSuperTokenAgreementCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'AgreementCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"AgreementLiquidated"`
 */
export const useWatchSuperTokenAgreementLiquidatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'AgreementLiquidated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"AgreementLiquidatedBy"`
 */
export const useWatchSuperTokenAgreementLiquidatedByEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'AgreementLiquidatedBy',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"AgreementLiquidatedV2"`
 */
export const useWatchSuperTokenAgreementLiquidatedV2Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'AgreementLiquidatedV2',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"AgreementStateUpdated"`
 */
export const useWatchSuperTokenAgreementStateUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'AgreementStateUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"AgreementTerminated"`
 */
export const useWatchSuperTokenAgreementTerminatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'AgreementTerminated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"AgreementUpdated"`
 */
export const useWatchSuperTokenAgreementUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'AgreementUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchSuperTokenApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"AuthorizedOperator"`
 */
export const useWatchSuperTokenAuthorizedOperatorEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'AuthorizedOperator',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"Bailout"`
 */
export const useWatchSuperTokenBailoutEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'Bailout',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"Burned"`
 */
export const useWatchSuperTokenBurnedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'Burned',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"CodeUpdated"`
 */
export const useWatchSuperTokenCodeUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'CodeUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"ConstantInflowNFTCreated"`
 */
export const useWatchSuperTokenConstantInflowNftCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'ConstantInflowNFTCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"ConstantOutflowNFTCreated"`
 */
export const useWatchSuperTokenConstantOutflowNftCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'ConstantOutflowNFTCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"Initialized"`
 */
export const useWatchSuperTokenInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"Minted"`
 */
export const useWatchSuperTokenMintedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'Minted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"PoolAdminNFTCreated"`
 */
export const useWatchSuperTokenPoolAdminNftCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'PoolAdminNFTCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"PoolMemberNFTCreated"`
 */
export const useWatchSuperTokenPoolMemberNftCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'PoolMemberNFTCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"RevokedOperator"`
 */
export const useWatchSuperTokenRevokedOperatorEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'RevokedOperator',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"Sent"`
 */
export const useWatchSuperTokenSentEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'Sent',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"TokenDowngraded"`
 */
export const useWatchSuperTokenTokenDowngradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'TokenDowngraded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"TokenUpgraded"`
 */
export const useWatchSuperTokenTokenUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'TokenUpgraded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchSuperTokenTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'Transfer',
  })

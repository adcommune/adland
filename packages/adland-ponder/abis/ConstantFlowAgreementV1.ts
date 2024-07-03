export const constantFlowAgreementV1Abi = [
  {
    type: "constructor",
    inputs: [
      { name: "host", internalType: "contract ISuperfluid", type: "address" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "CFA_HOOK_GAS_LIMIT",
    outputs: [{ name: "", internalType: "uint64", type: "uint64" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "DEFAULT_MINIMUM_DEPOSIT",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "MAXIMUM_DEPOSIT",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "MAXIMUM_FLOW_RATE",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "existingPermissions", internalType: "uint8", type: "uint8" },
      { name: "permissionDelta", internalType: "uint8", type: "uint8" },
    ],
    name: "addPermissions",
    outputs: [{ name: "", internalType: "uint8", type: "uint8" }],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [],
    name: "agreementType",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [
      {
        name: "token",
        internalType: "contract ISuperfluidToken",
        type: "address",
      },
      { name: "flowOperator", internalType: "address", type: "address" },
      { name: "ctx", internalType: "bytes", type: "bytes" },
    ],
    name: "authorizeFlowOperatorWithFullControl",
    outputs: [{ name: "newCtx", internalType: "bytes", type: "bytes" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "castrate",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "token",
        internalType: "contract ISuperfluidToken",
        type: "address",
      },
      { name: "receiver", internalType: "address", type: "address" },
      { name: "flowRate", internalType: "int96", type: "int96" },
      { name: "ctx", internalType: "bytes", type: "bytes" },
    ],
    name: "createFlow",
    outputs: [{ name: "newCtx", internalType: "bytes", type: "bytes" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "token",
        internalType: "contract ISuperfluidToken",
        type: "address",
      },
      { name: "sender", internalType: "address", type: "address" },
      { name: "receiver", internalType: "address", type: "address" },
      { name: "flowRate", internalType: "int96", type: "int96" },
      { name: "ctx", internalType: "bytes", type: "bytes" },
    ],
    name: "createFlowByOperator",
    outputs: [{ name: "newCtx", internalType: "bytes", type: "bytes" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "token",
        internalType: "contract ISuperfluidToken",
        type: "address",
      },
      { name: "flowOperator", internalType: "address", type: "address" },
      {
        name: "subtractedFlowRateAllowance",
        internalType: "int96",
        type: "int96",
      },
      { name: "ctx", internalType: "bytes", type: "bytes" },
    ],
    name: "decreaseFlowRateAllowance",
    outputs: [{ name: "newCtx", internalType: "bytes", type: "bytes" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "token",
        internalType: "contract ISuperfluidToken",
        type: "address",
      },
      { name: "flowOperator", internalType: "address", type: "address" },
      { name: "permissionsToRemove", internalType: "uint8", type: "uint8" },
      {
        name: "subtractedFlowRateAllowance",
        internalType: "int96",
        type: "int96",
      },
      { name: "ctx", internalType: "bytes", type: "bytes" },
    ],
    name: "decreaseFlowRateAllowanceWithPermissions",
    outputs: [{ name: "newCtx", internalType: "bytes", type: "bytes" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "token",
        internalType: "contract ISuperfluidToken",
        type: "address",
      },
      { name: "sender", internalType: "address", type: "address" },
      { name: "receiver", internalType: "address", type: "address" },
      { name: "ctx", internalType: "bytes", type: "bytes" },
    ],
    name: "deleteFlow",
    outputs: [{ name: "newCtx", internalType: "bytes", type: "bytes" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "token",
        internalType: "contract ISuperfluidToken",
        type: "address",
      },
      { name: "sender", internalType: "address", type: "address" },
      { name: "receiver", internalType: "address", type: "address" },
      { name: "ctx", internalType: "bytes", type: "bytes" },
    ],
    name: "deleteFlowByOperator",
    outputs: [{ name: "newCtx", internalType: "bytes", type: "bytes" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "token",
        internalType: "contract ISuperfluidToken",
        type: "address",
      },
      { name: "account", internalType: "address", type: "address" },
    ],
    name: "getAccountFlowInfo",
    outputs: [
      { name: "timestamp", internalType: "uint256", type: "uint256" },
      { name: "flowRate", internalType: "int96", type: "int96" },
      { name: "deposit", internalType: "uint256", type: "uint256" },
      { name: "owedDeposit", internalType: "uint256", type: "uint256" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getCodeAddress",
    outputs: [
      { name: "codeAddress", internalType: "address", type: "address" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      {
        name: "token",
        internalType: "contract ISuperfluidToken",
        type: "address",
      },
      { name: "flowRate", internalType: "int96", type: "int96" },
    ],
    name: "getDepositRequiredForFlowRate",
    outputs: [{ name: "deposit", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      {
        name: "token",
        internalType: "contract ISuperfluidToken",
        type: "address",
      },
      { name: "sender", internalType: "address", type: "address" },
      { name: "receiver", internalType: "address", type: "address" },
    ],
    name: "getFlow",
    outputs: [
      { name: "timestamp", internalType: "uint256", type: "uint256" },
      { name: "flowRate", internalType: "int96", type: "int96" },
      { name: "deposit", internalType: "uint256", type: "uint256" },
      { name: "owedDeposit", internalType: "uint256", type: "uint256" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      {
        name: "token",
        internalType: "contract ISuperfluidToken",
        type: "address",
      },
      { name: "flowId", internalType: "bytes32", type: "bytes32" },
    ],
    name: "getFlowByID",
    outputs: [
      { name: "timestamp", internalType: "uint256", type: "uint256" },
      { name: "flowRate", internalType: "int96", type: "int96" },
      { name: "deposit", internalType: "uint256", type: "uint256" },
      { name: "owedDeposit", internalType: "uint256", type: "uint256" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      {
        name: "token",
        internalType: "contract ISuperfluidToken",
        type: "address",
      },
      { name: "sender", internalType: "address", type: "address" },
      { name: "flowOperator", internalType: "address", type: "address" },
    ],
    name: "getFlowOperatorData",
    outputs: [
      { name: "flowOperatorId", internalType: "bytes32", type: "bytes32" },
      { name: "permissions", internalType: "uint8", type: "uint8" },
      { name: "flowRateAllowance", internalType: "int96", type: "int96" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      {
        name: "token",
        internalType: "contract ISuperfluidToken",
        type: "address",
      },
      { name: "flowOperatorId", internalType: "bytes32", type: "bytes32" },
    ],
    name: "getFlowOperatorDataByID",
    outputs: [
      { name: "permissions", internalType: "uint8", type: "uint8" },
      { name: "flowRateAllowance", internalType: "int96", type: "int96" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      {
        name: "token",
        internalType: "contract ISuperfluidToken",
        type: "address",
      },
      { name: "deposit", internalType: "uint256", type: "uint256" },
    ],
    name: "getMaximumFlowRateFromDeposit",
    outputs: [{ name: "flowRate", internalType: "int96", type: "int96" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      {
        name: "token",
        internalType: "contract ISuperfluidToken",
        type: "address",
      },
      { name: "account", internalType: "address", type: "address" },
    ],
    name: "getNetFlow",
    outputs: [{ name: "flowRate", internalType: "int96", type: "int96" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      {
        name: "token",
        internalType: "contract ISuperfluidToken",
        type: "address",
      },
      { name: "flowOperator", internalType: "address", type: "address" },
      { name: "addedFlowRateAllowance", internalType: "int96", type: "int96" },
      { name: "ctx", internalType: "bytes", type: "bytes" },
    ],
    name: "increaseFlowRateAllowance",
    outputs: [{ name: "newCtx", internalType: "bytes", type: "bytes" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "token",
        internalType: "contract ISuperfluidToken",
        type: "address",
      },
      { name: "flowOperator", internalType: "address", type: "address" },
      { name: "permissionsToAdd", internalType: "uint8", type: "uint8" },
      { name: "addedFlowRateAllowance", internalType: "int96", type: "int96" },
      { name: "ctx", internalType: "bytes", type: "bytes" },
    ],
    name: "increaseFlowRateAllowanceWithPermissions",
    outputs: [{ name: "newCtx", internalType: "bytes", type: "bytes" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "token",
        internalType: "contract ISuperfluidToken",
        type: "address",
      },
      { name: "account", internalType: "address", type: "address" },
      { name: "timestamp", internalType: "uint256", type: "uint256" },
    ],
    name: "isPatricianPeriod",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      {
        name: "token",
        internalType: "contract ISuperfluidToken",
        type: "address",
      },
      { name: "account", internalType: "address", type: "address" },
    ],
    name: "isPatricianPeriodNow",
    outputs: [
      {
        name: "isCurrentlyPatricianPeriod",
        internalType: "bool",
        type: "bool",
      },
      { name: "timestamp", internalType: "uint256", type: "uint256" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "proxiableUUID",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      {
        name: "token",
        internalType: "contract ISuperfluidToken",
        type: "address",
      },
      { name: "account", internalType: "address", type: "address" },
      { name: "time", internalType: "uint256", type: "uint256" },
    ],
    name: "realtimeBalanceOf",
    outputs: [
      { name: "dynamicBalance", internalType: "int256", type: "int256" },
      { name: "deposit", internalType: "uint256", type: "uint256" },
      { name: "owedDeposit", internalType: "uint256", type: "uint256" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "existingPermissions", internalType: "uint8", type: "uint8" },
      { name: "permissionDelta", internalType: "uint8", type: "uint8" },
    ],
    name: "removePermissions",
    outputs: [{ name: "", internalType: "uint8", type: "uint8" }],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [
      {
        name: "token",
        internalType: "contract ISuperfluidToken",
        type: "address",
      },
      { name: "flowOperator", internalType: "address", type: "address" },
      { name: "ctx", internalType: "bytes", type: "bytes" },
    ],
    name: "revokeFlowOperatorWithFullControl",
    outputs: [{ name: "newCtx", internalType: "bytes", type: "bytes" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "newAddress", internalType: "address", type: "address" }],
    name: "updateCode",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "token",
        internalType: "contract ISuperfluidToken",
        type: "address",
      },
      { name: "receiver", internalType: "address", type: "address" },
      { name: "flowRate", internalType: "int96", type: "int96" },
      { name: "ctx", internalType: "bytes", type: "bytes" },
    ],
    name: "updateFlow",
    outputs: [{ name: "newCtx", internalType: "bytes", type: "bytes" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "token",
        internalType: "contract ISuperfluidToken",
        type: "address",
      },
      { name: "sender", internalType: "address", type: "address" },
      { name: "receiver", internalType: "address", type: "address" },
      { name: "flowRate", internalType: "int96", type: "int96" },
      { name: "ctx", internalType: "bytes", type: "bytes" },
    ],
    name: "updateFlowByOperator",
    outputs: [{ name: "newCtx", internalType: "bytes", type: "bytes" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "token",
        internalType: "contract ISuperfluidToken",
        type: "address",
      },
      { name: "flowOperator", internalType: "address", type: "address" },
      { name: "permissions", internalType: "uint8", type: "uint8" },
      { name: "flowRateAllowance", internalType: "int96", type: "int96" },
      { name: "ctx", internalType: "bytes", type: "bytes" },
    ],
    name: "updateFlowOperatorPermissions",
    outputs: [{ name: "newCtx", internalType: "bytes", type: "bytes" }],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "uuid",
        internalType: "bytes32",
        type: "bytes32",
        indexed: false,
      },
      {
        name: "codeAddress",
        internalType: "address",
        type: "address",
        indexed: false,
      },
    ],
    name: "CodeUpdated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "token",
        internalType: "contract ISuperfluidToken",
        type: "address",
        indexed: true,
      },
      {
        name: "sender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "flowOperator",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "permissions",
        internalType: "uint8",
        type: "uint8",
        indexed: false,
      },
      {
        name: "flowRateAllowance",
        internalType: "int96",
        type: "int96",
        indexed: false,
      },
    ],
    name: "FlowOperatorUpdated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "token",
        internalType: "contract ISuperfluidToken",
        type: "address",
        indexed: true,
      },
      {
        name: "sender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "receiver",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "flowRate",
        internalType: "int96",
        type: "int96",
        indexed: false,
      },
      {
        name: "totalSenderFlowRate",
        internalType: "int256",
        type: "int256",
        indexed: false,
      },
      {
        name: "totalReceiverFlowRate",
        internalType: "int256",
        type: "int256",
        indexed: false,
      },
      {
        name: "userData",
        internalType: "bytes",
        type: "bytes",
        indexed: false,
      },
    ],
    name: "FlowUpdated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "flowOperator",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "deposit",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "FlowUpdatedExtension",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "version", internalType: "uint8", type: "uint8", indexed: false },
    ],
    name: "Initialized",
  },
  { type: "error", inputs: [], name: "AGREEMENT_BASE_ONLY_HOST" },
  {
    type: "error",
    inputs: [{ name: "_code", internalType: "uint256", type: "uint256" }],
    name: "APP_RULE",
  },
  { type: "error", inputs: [], name: "CFA_ACL_FLOW_RATE_ALLOWANCE_EXCEEDED" },
  { type: "error", inputs: [], name: "CFA_ACL_NO_NEGATIVE_ALLOWANCE" },
  { type: "error", inputs: [], name: "CFA_ACL_NO_SENDER_CREATE" },
  { type: "error", inputs: [], name: "CFA_ACL_NO_SENDER_FLOW_OPERATOR" },
  { type: "error", inputs: [], name: "CFA_ACL_NO_SENDER_UPDATE" },
  { type: "error", inputs: [], name: "CFA_ACL_OPERATOR_NO_CREATE_PERMISSIONS" },
  { type: "error", inputs: [], name: "CFA_ACL_OPERATOR_NO_DELETE_PERMISSIONS" },
  { type: "error", inputs: [], name: "CFA_ACL_OPERATOR_NO_UPDATE_PERMISSIONS" },
  { type: "error", inputs: [], name: "CFA_ACL_UNCLEAN_PERMISSIONS" },
  { type: "error", inputs: [], name: "CFA_DEPOSIT_TOO_BIG" },
  { type: "error", inputs: [], name: "CFA_FLOW_ALREADY_EXISTS" },
  { type: "error", inputs: [], name: "CFA_FLOW_DOES_NOT_EXIST" },
  { type: "error", inputs: [], name: "CFA_FLOW_RATE_TOO_BIG" },
  { type: "error", inputs: [], name: "CFA_HOOK_OUT_OF_GAS" },
  { type: "error", inputs: [], name: "CFA_INSUFFICIENT_BALANCE" },
  { type: "error", inputs: [], name: "CFA_INVALID_FLOW_RATE" },
  { type: "error", inputs: [], name: "CFA_NON_CRITICAL_SENDER" },
  { type: "error", inputs: [], name: "CFA_NO_SELF_FLOW" },
  { type: "error", inputs: [], name: "CFA_ZERO_ADDRESS_RECEIVER" },
  { type: "error", inputs: [], name: "CFA_ZERO_ADDRESS_SENDER" },
] as const;
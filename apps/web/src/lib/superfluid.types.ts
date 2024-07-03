import { Address } from 'viem'

export type Account = {
  id: Address
  inflows: {
    id: Address
    currentFlowRate: string
    token: {
      id: Address
      symbol: string
      decimals: number
      underlyingAddress: Address
    }
    userData: string
    sender: {
      id: Address
    }
  }[]
}

export type FlowUpdateEvent = {
  flowRate: string
  oldFlowRate: string
  timestamp: string
}

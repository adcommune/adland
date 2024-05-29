import { superfluidAddresses } from '@/config/constants'
import { constants } from '@adland/common'
import {
  directListingsLogicAddress,
  commonAdSpacesAddress,
} from '@adland/contracts'

export type AppChainIds = keyof typeof commonAdSpacesAddress

const appChain = constants.chain

export const appContracts = {
  cfaV1: superfluidAddresses[appChain.id as AppChainIds].cfaV1,
  gdaV1Forwarder:
    superfluidAddresses[appChain.id as AppChainIds].gdaV1Forwarder,
  marketplace: directListingsLogicAddress[appChain.id as AppChainIds],
  adCommonOwnership: commonAdSpacesAddress[appChain.id as AppChainIds],
}

const useAppContracts = () => {
  return appContracts
}

export default useAppContracts

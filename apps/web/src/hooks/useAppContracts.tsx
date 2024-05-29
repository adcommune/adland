import { superfluidAddresses } from '@/config/constants'
import { constants } from '@adland/common'
import {
  directListingsLogicAddress,
  commonAdSpacesAddress,
} from '@adland/contracts'

export type AppChainIds = keyof typeof commonAdSpacesAddress

const useAppContracts = () => {
  const appChain = constants.chain

  return {
    cfaV1: superfluidAddresses[appChain.id as AppChainIds].cfaV1,
    gdaV1Forwarder:
      superfluidAddresses[appChain.id as AppChainIds].gdaV1Forwarder,
    marketplace: directListingsLogicAddress[appChain.id as AppChainIds],
    adCommonOwnership: commonAdSpacesAddress[appChain.id as AppChainIds],
  }
}

export default useAppContracts

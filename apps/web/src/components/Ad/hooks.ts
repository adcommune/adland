import { useBiconomyAccount } from '@/context/SmartAccountContext'
import { AdSpaceQuery } from '@adland/webkit/src/ponder'

export const useAdLogic = (ad: AdSpaceQuery['adSpace']) => {
  const { bicoAccountAddress: address } = useBiconomyAccount()

  return {
    isBeneficiary:
      ad?.listing?.taxBeneficiary?.toLowerCase() === address?.toLowerCase(),
  }
}

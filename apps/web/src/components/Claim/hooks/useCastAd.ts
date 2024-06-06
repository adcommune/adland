import { baseURL } from '@/config/constants'
import { hub } from '@/lib/hub'
import { LocalStorage } from '@/lib/localStorage'
import { useExperimentalFarcasterSigner, usePrivy } from '@privy-io/react-auth'
import { ExternalEd25519Signer } from '@standard-crypto/farcaster-js'
import { useMutation } from '@tanstack/react-query'

const useCastAd = (spaceId: string) => {
  const { user } = usePrivy()

  const { signFarcasterMessage, getFarcasterSignerPublicKey } =
    useExperimentalFarcasterSigner()

  const farcasterAccount = user?.farcaster

  const saveCast = (hash: string, fid: number) => {
    LocalStorage.setJSON('castsByFid', {
      [fid]: {
        [spaceId]: { hash, date: new Date().toISOString() },
      },
    })
  }

  const {
    data,
    isPending: loading,
    mutate: cast,
  } = useMutation({
    mutationKey: ['castAd-' + spaceId, farcasterAccount?.fid],
    mutationFn: async () => {
      if (!farcasterAccount?.fid) return

      const privySigner = new ExternalEd25519Signer(
        signFarcasterMessage,
        getFarcasterSignerPublicKey,
      )

      if (!farcasterAccount?.fid) {
        return console.error('Farcaster account not linked')
      }

      const submitCastResponse = await hub.submitCast(
        { text: baseURL + '/ad/' + spaceId },
        farcasterAccount?.fid,
        privySigner,
      )

      saveCast(submitCastResponse.hash, farcasterAccount.fid)

      return submitCastResponse
    },
  })

  return { cast, loading, data }
}

export default useCastAd

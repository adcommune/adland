import { LocalStorage } from '@/lib/localStorage'
import { Cast } from '@neynar/nodejs-sdk/build/neynar-api/v2'
import { usePrivy } from '@privy-io/react-auth'
import { useQuery } from '@tanstack/react-query'

const useCurrentCast = (spaceId: string) => {
  const { user, authenticated } = usePrivy()

  const farcasterAccount = user?.farcaster

  const getSavedCast = (fid: number): { hash: string; date: string } => {
    return LocalStorage.getJSON('castsByFid')[fid][spaceId]
  }

  const {
    data: currentCast,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: farcasterAccount?.fid
      ? ['currentCast-' + farcasterAccount?.fid + spaceId]
      : [],
    queryFn: async () => {
      if (!farcasterAccount?.fid) return

      const { hash } = getSavedCast(farcasterAccount?.fid)

      const cast = (await fetch(`/api/neynar/cast/${hash}`, {
        method: 'GET',
      }).then((res) => res.json())) as Cast

      return cast
    },
  })

  return { currentCast, isLoading: !authenticated || isLoading, refetch }
}

export default useCurrentCast

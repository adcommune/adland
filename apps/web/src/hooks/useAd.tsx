import { AdLand } from '@/lib/adland'
import { useQuery } from '@tanstack/react-query'

const useAd = (spaceId: string) => {
  const { data: adSpace } = useQuery({
    queryFn: () => new AdLand().getAdSpace(spaceId),
    queryKey: ['adSpace-', spaceId],
  })

  const { data: adCampaign } = useQuery({
    queryKey: ['adCampaign-', spaceId],
    queryFn: async () =>
      new AdLand().getAdCampaign(spaceId, adSpace?.tokenX?.superToken),
    enabled: Boolean(adSpace?.tokenX?.superToken),
  })

  return { adSpace, adCampaign }
}

export default useAd

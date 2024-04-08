import { ipfsGateway } from '@/config/constants'
import { Ad } from '@/lib/types'

export const getGatwayUri = (uri: string) => {
  const hash = uri.split('//')[1]

  return hash ? ipfsGateway + '/' + hash : null
}

export const formatAd = ({ uri }: Ad) => {
  return {
    uri,
    gatewayUri: getGatwayUri(uri),
  }
}

export const formatAds = (ads: Ad[]) => {
  return ads.map(formatAd)
}

export const fetchJSON = async (url: string) => {
  return fetch(url).then((res) => {
    return res.json()
  })
}

'use server'

import { AdGroupMetadata } from '@adland/db'
import prisma from '@/lib/prisma'
import { constants } from '@adland/common'

const putAdGroupMetadataAction = async (id: string, data: AdGroupMetadata) => {
  const adGroupMetadataId = `${constants.chain.id}-${id}`

  return prisma?.adGroupMetadata.upsert({
    where: {
      id: adGroupMetadataId,
    },
    update: data,
    create: {
      ...data,
      id,
    },
  })
}

const getAdGroupMetadataAction = async (id: string) => {
  return prisma.adGroupMetadata
    .findUnique({
      where: {
        id: `${constants.chain.id}-${id}`,
      },
    })
    .then((res) => {
      console.log({ res })
      return res || undefined
    })
    .catch((error) => {
      return undefined
    })
}

export { putAdGroupMetadataAction, getAdGroupMetadataAction }

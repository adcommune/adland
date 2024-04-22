import { constants } from '@adland/common'
import { PinataFDK } from 'pinata-fdk'

export const fdk = new PinataFDK({
  pinata_jwt: process.env.PINATA_JWT as string,
  pinata_gateway: constants.pinataPublicGateway,
})

import { CommonPoolAdmin } from '@/lib/adPool'
import { NextResponse } from 'next/server'

export const GET = async () => {
  return NextResponse.json({
    admin: await (
      await new CommonPoolAdmin().getSmartAccount()
    ).getAccountAddress(),
  })
}

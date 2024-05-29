import { CommonAdPool } from '@/lib/adPool'
import { NextRequest, NextResponse } from 'next/server'
import { Address } from 'viem'
import { waitForTransactionReceipt } from 'viem/actions'

export const POST = async (
  _req: NextRequest,
  { params: { poolAddress } }: { params: { poolAddress: Address } },
) => {
  const pool = new CommonAdPool(poolAddress)

  const hash = await pool.addMemeberToGroup(
    '0x26bBec292e5080ecFD36F38FF1619FF35826b113',
    1000,
  )

  const rcpt = await waitForTransactionReceipt(pool.wallet, {
    hash,
  })

  return NextResponse.json(rcpt)
}

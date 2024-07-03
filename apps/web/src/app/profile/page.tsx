'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { superfluidAccountLink } from '@/config/constants'
import { SmartAccountContext } from '@/context/SmartAccountContext'
import { usePrivy } from '@privy-io/react-auth'
import Link from 'next/link'
import Image from 'next/image'
import { useContext } from 'react'
import CopiableInput from '@/components/CopiableInput'
import SuperTokenTable from '@/components/AdGroup/AdGroupTokenTable'
import { Separator } from '@/components/ui/separator'
import { useProfile } from './context'
import WidthdrawForm from './components/Widthdraw'

const ProfilePage = () => {
  const { tokenxWithdraw } = useProfile()
  const { bicoAccountAddress } = useContext(SmartAccountContext)
  const { user } = usePrivy()

  if (tokenxWithdraw.tokenX) {
    return (
      <div className="p-2">
        <WidthdrawForm tokenX={tokenxWithdraw.tokenX} />
      </div>
    )
  }

  return (
    <>
      <div className="my-10 flex flex-col gap-4">
        {bicoAccountAddress && (
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col">
              <p className="font-body text-xl font-bold">Account</p>
              <p className="w-2/3 text-sm text-gray-500">
                Your account address. Deposit tokens to this address to see them
                show up in you token balances below and start using AdLand
              </p>
            </div>
            <div>
              <CopiableInput text={bicoAccountAddress} truncate />
            </div>
          </div>
        )}
        {bicoAccountAddress && (
          <div className="flex flex-col justify-between">
            <div className="flex flex-col">
              <p className="font-body text-xl font-bold">Token Balances</p>
              <p className="text-sm text-gray-500">View your token balances</p>
            </div>
            <Card className="mt-2">
              <SuperTokenTable />
            </Card>
          </div>
        )}
        <Separator className="my-4" />
        {user && bicoAccountAddress && (
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col">
              <p className="font-body text-xl font-bold">
                Superfluid dashbaord
              </p>
              <p className="text-sm text-gray-500">
                View your superfluid account on the dashboard
              </p>
            </div>
            <Link
              href={superfluidAccountLink(bicoAccountAddress)}
              target="_blank"
            >
              <Button variant="outline" className="gap-2">
                <Image
                  src="/superfluid.png"
                  className="h-5 w-5"
                  width={40}
                  height={40}
                  alt=""
                />
                Superfluid Dashboard
              </Button>
            </Link>
          </div>
        )}
      </div>
    </>
  )
}

export default ProfilePage

'use client'

import SuperTokenTable from '@/components/AdGroup/AdGroupTokenTable'
import Copiable from '@/components/Copiable'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { superfluidAccountLink } from '@/config/constants'
import { SmartAccountContext } from '@/context/SmartAccountContext'
import { truncateAddress } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'
import { useContext } from 'react'

const SettingsPage = () => {
  const { bicoAccountAddress } = useContext(SmartAccountContext)

  return (
    <div className="flex flex-col gap-2">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="">Group Account</CardTitle>
          {bicoAccountAddress && (
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
          )}
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <div className="flex w-full flex-row items-center justify-center gap-2">
            <Input
              className="h-full flex-grow cursor-default text-opacity-100 disabled:opacity-100"
              disabled
              placeholder={truncateAddress(bicoAccountAddress, 10)}
            />
            <Copiable visible text={bicoAccountAddress?.toString() ?? ''} />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="">Token Balances</CardTitle>
        </CardHeader>
        <CardContent>
          <SuperTokenTable />
        </CardContent>
      </Card>
    </div>
  )
}

export default SettingsPage

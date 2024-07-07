'use client'

import Link from 'next/link'
import { ConnectButton } from './ConnectButton'
import Navbar from './Navbar'
import { Button } from './ui/button'
import { PlusIcon } from 'lucide-react'
import { useBiconomyAccount } from '@/context/SmartAccountContext'

const AppNavbar = () => {
  const { bicoAccountAddress } = useBiconomyAccount()
  return (
    <Navbar>
      <div className="flex flex-row gap-2">
        {/* <Link className="hidden sm:flex" href={'/leaderboard'}>
          <Button className="flex h-full w-full flex-row font-body ">
            <span className="mr-2">👑</span> Leaderboard
          </Button>
        </Link> */}
        <Link
          className="hidden sm:flex"
          href={bicoAccountAddress ? '/group/create' : ''}
        >
          <Button
            className="h-full w-full gap-2 font-body"
            disabled={!Boolean(bicoAccountAddress)}
          >
            <PlusIcon size={16} />
            New Group
          </Button>
        </Link>
        <ConnectButton />
      </div>
    </Navbar>
  )
}

export default AppNavbar

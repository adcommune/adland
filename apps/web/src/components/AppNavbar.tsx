'use client'

import Link from 'next/link'
import { ConnectButton } from './ConnectButton'
import Navbar from './Navbar'
import { Button } from './ui/button'
import { PlusIcon } from 'lucide-react'
import { useContext } from 'react'
import { SmartAccountContext } from '@/context/SmartAccountContext'

const AppNavbar = () => {
  const { bicoAccountAddress } = useContext(SmartAccountContext)
  return (
    <Navbar>
      <div className="flex flex-row gap-2">
        <Link className="hidden sm:flex" href={'/leaderboard'}>
          <Button className="flex h-full w-full flex-row font-body ">
            <span className="mr-2">👑</span> Leaderboard
          </Button>
        </Link>
        {bicoAccountAddress && (
          <Link className="hidden sm:flex" href={'/group/create'}>
            <Button className="h-full w-full gap-2 font-body">
              <PlusIcon size={16} />
              New Group
            </Button>
          </Link>
        )}
        <ConnectButton />
      </div>
    </Navbar>
  )
}

export default AppNavbar

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
        {bicoAccountAddress && (
          <Link className="hidden sm:flex" href={'/group/create'}>
            <Button className="h-full w-full gap-2">
              <PlusIcon size={16} />
              Create
            </Button>
          </Link>
        )}
        <ConnectButton />
      </div>
    </Navbar>
  )
}

export default AppNavbar

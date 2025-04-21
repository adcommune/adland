'use client'

import Link from 'next/link'
import Navbar from './Navbar'
import { Button } from './ui/button'
import { PlusIcon } from 'lucide-react'
import { useBiconomyAccount } from '@/context/SmartAccountContext'

const AppNavbar = () => {
  const { bicoAccountAddress } = useBiconomyAccount()
  return (
    <Navbar>
      <div className="flex flex-row gap-2">
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
      </div>
    </Navbar>
  )
}

export default AppNavbar

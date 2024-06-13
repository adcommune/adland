import { Button } from './ui/button'
import { usePrivy } from '@privy-io/react-auth'
import { truncateAddress } from '@/lib/utils'
import { zeroAddress } from 'viem'
import Link from 'next/link'
import { UserIcon } from 'lucide-react'
import FarcasterBadge from './FarcasterBadge'
import { useContext } from 'react'
import { SmartAccountContext } from '@/context/SmartAccountContext'

export const ConnectButton = () => {
  const { ready, authenticated, user, login } = usePrivy()

  const { balance } = useContext(SmartAccountContext)

  if (!ready)
    return (
      <Button disabled variant="outline">
        <p>{truncateAddress(zeroAddress)}</p>
      </Button>
    )

  if (!authenticated) {
    return (
      <Button onClick={login} type="button" className="font-body">
        Sign in
      </Button>
    )
  }

  return (
    <Link href="/profile">
      {user?.farcaster ? (
        <div className="flex h-10 flex-row gap-2 font-body">
          <FarcasterBadge className="h-11" />
        </div>
      ) : (
        <div className="flex h-10 flex-row gap-2">
          <Button type="button" variant="outline" className="h-full font-body">
            <UserIcon className="h-4 w-4" />
          </Button>
        </div>
      )}
    </Link>
  )
}

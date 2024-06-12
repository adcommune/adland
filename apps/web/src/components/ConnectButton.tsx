import { Button } from './ui/button'
import { usePrivy } from '@privy-io/react-auth'
import { truncateAddress } from '@/lib/utils'
import { formatEther, zeroAddress } from 'viem'
import Link from 'next/link'
import { UserIcon } from 'lucide-react'
import { UserType } from '@/context/UserContext'
import FarcasterBadge from './FarcasterBadge'
import { useContext } from 'react'
import { SmartAccountContext } from '@/context/SmartAccountContext'

export const useAccountType = (): UserType | undefined => {
  const { user, ready, authenticated } = usePrivy()

  if (!ready || !authenticated || !user) return undefined

  return user?.farcaster ? 'distributor' : 'advertiser-or-creator'
}

export const ConnectButton = () => {
  const { ready, authenticated, user } = usePrivy()

  const { balance } = useContext(SmartAccountContext)

  const disableLogin = !ready || (ready && authenticated)

  if (!ready)
    return (
      <Button disabled variant="outline">
        <p>{truncateAddress(zeroAddress)}</p>
      </Button>
    )

  if (!authenticated) {
    return (
      <Link href="/sign-in">
        <Button disabled={disableLogin} type="button" className="font-body">
          Sign in
        </Button>
      </Link>
    )
  }

  return (
    <Link href="/profile">
      {user?.farcaster ? (
        <FarcasterBadge className="h-11" />
      ) : (
        <div className="flex h-10 flex-row gap-2">
          <Button variant="outline" className="h-full">
            {formatEther(balance)} ETH
          </Button>
          <Button type="button" variant="outline" className="h-full font-body">
            <UserIcon className="h-4 w-4" />
          </Button>
        </div>
      )}
    </Link>
  )
}

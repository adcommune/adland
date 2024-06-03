import { Button } from './ui/button'
import { usePrivy, useWallets } from '@privy-io/react-auth'
import { truncateAddress } from '@/lib/utils'
import { zeroAddress } from 'viem'
import { constants } from '@adland/common'
import Link from 'next/link'
import { UserIcon } from 'lucide-react'
import { UserType } from '@/context/UserContext'
import FarcasterBadge from './FarcasterBadge'

export const useAccountType = (): UserType | undefined => {
  const { user, ready, authenticated } = usePrivy()

  if (!ready || !authenticated || !user) return undefined

  return user?.farcaster ? 'distributor' : 'advertiser-or-creator'
}

export const ConnectButton = () => {
  const { ready, authenticated, connectWallet, user } = usePrivy()
  const { wallets } = useWallets()

  const wallet = wallets.find((w) => w.connectorType === 'embedded')
  const cryptoWallet = wallets.find((w) => w.connectorType !== 'embedded')

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

  const wrongNetwork = cryptoWallet?.chainId !== `eip155:${constants.chain.id}`

  if (wrongNetwork) {
    return (
      <Button
        onClick={() => {
          if (!wallet) {
            connectWallet()
          } else {
            cryptoWallet?.switchChain(constants.chain.id)
          }
        }}
        className="font-body"
        type="button"
      >
        Wrong Network
      </Button>
    )
  }

  return (
    <Link href="/profile">
      {user?.farcaster ? (
        <FarcasterBadge className="h-11" />
      ) : (
        <Button type="button" variant="outline" className="h-full font-body">
          <UserIcon className="h-4 w-4" />
        </Button>
      )}
    </Link>
  )
}

import { Button } from './ui/button'
import { usePrivy, useWallets } from '@privy-io/react-auth'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { truncateAddress } from '@/lib/utils'
import { zeroAddress } from 'viem'
import { constants } from '@adland/common'
import Link from 'next/link'
import { UserIcon } from 'lucide-react'

export const ConnectButton = () => {
  const { ready, authenticated, logout, connectWallet, user } = usePrivy()
  const { wallets } = useWallets()

  const wallet = wallets.find((w) => w.connectorType === 'embedded')
  const cryptoWallet = wallets.find((w) => w.connectorType !== 'embedded')

  const address = wallet?.address ?? zeroAddress

  const disableLogin = !ready || (ready && authenticated)

  const isDistributor = Boolean(user?.farcaster)

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
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button type="button" variant="outline" className="h-full font-body">
            {/* {truncateAddress(address)} */}
            <UserIcon className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>
            {isDistributor ? 'Distributor' : 'Creator'}:{' '}
            {truncateAddress(address)}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={logout}>
              Logout
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

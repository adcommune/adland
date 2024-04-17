import { Button } from './ui/button'
import { useAccount } from 'wagmi'
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
import { defaultChain } from '@/config/constants'
import { zeroAddress } from 'viem'

export const ConnectButton = () => {
  const { ready, authenticated, login, logout, user, connectWallet } =
    usePrivy()
  const { wallets } = useWallets()
  const { address } = useAccount()

  const wallet = wallets[0]

  const disableLogin = !ready || (ready && authenticated)

  if (!ready)
    return (
      <Button disabled variant="outline">
        <p>{truncateAddress(zeroAddress)}</p>
      </Button>
    )

  if (!authenticated) {
    return (
      <Button
        disabled={disableLogin}
        onClick={login}
        type="button"
        className="font-body"
      >
        Connect Wallet
      </Button>
    )
  }

  const wrongNetwork = wallet?.chainId !== `eip155:${defaultChain.id}`

  if (wrongNetwork) {
    return (
      <Button
        onClick={() => {
          if (!wallet) {
            connectWallet()
          } else {
            wallet.switchChain(defaultChain.id)
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
            {truncateAddress(address ?? user?.wallet?.address)}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>
            My Account: {truncateAddress(address)}
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

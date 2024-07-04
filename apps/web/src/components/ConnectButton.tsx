import { Button } from './ui/button'
import { usePrivy } from '@privy-io/react-auth'
import { truncateAddress } from '@/lib/utils'
import { zeroAddress } from 'viem'
import Link from 'next/link'
import { UserIcon } from 'lucide-react'
import FarcasterBadge from './FarcasterBadge'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export const ConnectButton = () => {
  const { ready, authenticated, user, login } = usePrivy()

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

  const menuButtonContent = user?.farcaster ? (
    <div className="flex flex-row gap-2 font-body">
      <FarcasterBadge className="h-11" />
    </div>
  ) : (
    <div className="flex flex-row gap-2">
      <Button type="button" variant="outline" className="h-full font-body">
        <UserIcon className="h-4 w-4" />
      </Button>
    </div>
  )

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div>
          <div className="hidden cursor-pointer md:flex">
            <Link href="/profile">{menuButtonContent}</Link>
          </div>
          <div className="flex cursor-pointer md:hidden">
            {menuButtonContent}
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex w-56 flex-col gap-2 font-body md:hidden">
        {[
          {
            name: 'Create Group',
            path: '/group/create',
          },
          {
            name: '👑 Leaderboard',
            path: '/leaderboard',
          },
        ].map(({ name, path }) => (
          <Link href={path} key={name}>
            <Button className="w-full" size={'sm'} variant="outline">
              {name}
            </Button>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

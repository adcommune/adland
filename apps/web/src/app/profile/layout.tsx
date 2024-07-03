'use client'

import { Container } from '@/components/Container'
import { Card } from '@/components/ui/card'
import { ProfileProvider } from './context'
import { useBiconomyAccount } from '@/context/SmartAccountContext'
import { getExplorerLink, truncateAddress } from '@/lib/utils'
import { CircleUser, UserX } from 'lucide-react'
import { usePrivy } from '@privy-io/react-auth'
import { Alert } from '@/components/Alert'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const ProfilePageLayout = ({ children }: { children: React.ReactNode }) => {
  const { user, logout, authenticated } = usePrivy()
  const { bicoAccountAddress } = useBiconomyAccount()

  return (
    <ProfileProvider>
      <Container className="p-4">
        <Card className="overflow-hidden">
          <div>
            <img className="w-full" src={'/banner.jpg'} alt="" />
          </div>
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
              <div className="flex h-28 w-28 flex-col items-center justify-center overflow-hidden rounded-full bg-white p-1 text-black">
                {!user?.farcaster?.pfp ? (
                  authenticated ? (
                    <CircleUser className="h-full w-full bg-white stroke-2" />
                  ) : (
                    <UserX className="h-16 w-16" />
                  )
                ) : (
                  <img
                    className="h-24 w-24 rounded-full object-cover ring-4 ring-white sm:h-32 sm:w-32"
                    src={user?.farcaster?.pfp}
                    alt=""
                  />
                )}
              </div>
              <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                <div className="mt-6 min-w-0 flex-1 sm:hidden md:block">
                  {bicoAccountAddress && (
                    <Link
                      href={getExplorerLink(bicoAccountAddress, 'address')}
                      target="_blank"
                    >
                      <h1 className="truncate text-2xl font-bold text-gray-900 hover:text-blue-700 hover:underline">
                        {user?.farcaster
                          ? user?.farcaster?.displayName
                          : authenticated
                            ? truncateAddress(bicoAccountAddress)
                            : '---'}
                      </h1>
                    </Link>
                  )}
                </div>
                <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
                  {authenticated && (
                    <Alert
                      title="Logout"
                      description="Are you sure you want to logout?"
                      onConfirm={() => {
                        logout()
                      }}
                    >
                      <Button
                        variant={'destructive'}
                        type="button"
                        className="gap-2"
                      >
                        <span>Logout</span>
                      </Button>
                    </Alert>
                  )}
                </div>
              </div>
            </div>
            {children}
          </div>
        </Card>
      </Container>
    </ProfileProvider>
  )
}

export default ProfilePageLayout

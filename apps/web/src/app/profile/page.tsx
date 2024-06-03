'use client'

import { Alert } from '@/components/Alert'
import { useAccountType } from '@/components/ConnectButton'
import { Container } from '@/components/Container'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { truncateAddress } from '@/lib/utils'
import { useExperimentalFarcasterSigner, usePrivy } from '@privy-io/react-auth'
import { CircleUser, UserX } from 'lucide-react'

const ProfilePage = () => {
  const accountType = useAccountType()
  const { user, logout, authenticated } = usePrivy()
  const { requestFarcasterSignerFromWarpcast } =
    useExperimentalFarcasterSigner()

  const hasSigner = Boolean(user?.farcaster?.signerPublicKey)

  return (
    <Container className="p-4">
      <Card className="overflow-hidden">
        <div>
          <img className="w-full" src={'/banner.jpg'} alt="" />
        </div>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
            <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full bg-gray-100 p-1 text-gray-400">
              {accountType === 'advertiser-or-creator' ||
              !user?.farcaster?.pfp ? (
                authenticated ? (
                  <CircleUser className="h-full w-full stroke-2" />
                ) : (
                  <UserX className="h-16 w-16" />
                )
              ) : (
                <img
                  className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                  src={user?.farcaster?.pfp}
                  alt=""
                />
              )}
            </div>
            <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
              <div className="mt-6 min-w-0 flex-1 sm:hidden md:block">
                <h1 className="truncate text-2xl font-bold text-gray-900">
                  {accountType === 'distributor'
                    ? user?.farcaster?.displayName
                    : authenticated
                      ? truncateAddress(user?.wallet?.address)
                      : '---'}
                </h1>
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
          <div className="mt-6 hidden min-w-0 flex-1  sm:block md:hidden">
            <h1 className="truncate text-2xl font-bold text-gray-900">
              {user?.farcaster?.displayName}
            </h1>
          </div>
          <div className="my-10">
            {accountType === 'distributor' && (
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col">
                  <p className="font-body text-xl font-bold">
                    Farcaster signer
                  </p>
                  <p className="font-sm text-gray-500">
                    Request a farcaster signer from Warpcast to cast message on
                    the protocol from this app
                  </p>
                </div>
                <Button
                  onClick={() => {
                    requestFarcasterSignerFromWarpcast()
                  }}
                  disabled={hasSigner}
                >
                  {hasSigner ? 'Signer requested' : 'Request signer'}
                </Button>
              </div>
            )}
          </div>
        </div>
      </Card>
    </Container>
  )
}

export default ProfilePage

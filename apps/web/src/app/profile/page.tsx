'use client'

import { Alert } from '@/components/Alert'
import { Container } from '@/components/Container'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { superfluidAccountLink } from '@/config/constants'
import { SmartAccountContext } from '@/context/SmartAccountContext'
import { getExplorerLink, truncateAddress } from '@/lib/utils'
import { useExperimentalFarcasterSigner, usePrivy } from '@privy-io/react-auth'
import { CircleUser, UserX } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useContext } from 'react'
import CopiableInput from '@/components/CopiableInput'
import SuperTokenTable from '@/components/AdGroup/AdGroupTokenTable'
import { Separator } from '@/components/ui/separator'

const ProfilePage = () => {
  const { bicoAccountAddress } = useContext(SmartAccountContext)
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
              {!user?.farcaster?.pfp ? (
                authenticated ? (
                  <CircleUser className="h-full w-full stroke-2" />
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
          <div className="mt-6 hidden min-w-0 flex-1  sm:block md:hidden">
            <h1 className="truncate text-2xl font-bold text-gray-900">
              {user?.farcaster?.displayName}
            </h1>
          </div>

          <div className="my-10 flex flex-col gap-4">
            {bicoAccountAddress && (
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col">
                  <p className="font-body text-xl font-bold">Account</p>
                  <p className="font-sm text-gray-500">Your account address</p>
                </div>
                <div>
                  <CopiableInput text={bicoAccountAddress} truncate />
                </div>
              </div>
            )}
            {bicoAccountAddress && (
              <div className="flex flex-col justify-between">
                <div className="flex flex-col">
                  <p className="font-body text-xl font-bold">Token Balances</p>
                  <p className="font-sm text-gray-500">
                    View your token balances
                  </p>
                </div>
                <Card className="mt-2">
                  <SuperTokenTable />
                </Card>
              </div>
            )}
            <Separator className="my-4" />
            {user?.farcaster && (
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

            {user && bicoAccountAddress && (
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col">
                  <p className="font-body text-xl font-bold">
                    Superfluid dashbaord
                  </p>
                  <p className="font-sm text-gray-500">
                    View your superfluid account on the dashboard
                  </p>
                </div>
                <Link
                  href={superfluidAccountLink(bicoAccountAddress)}
                  target="_blank"
                >
                  <Button variant="outline" className="gap-2">
                    <Image
                      src="/superfluid.png"
                      className="h-5 w-5"
                      width={40}
                      height={40}
                      alt=""
                    />
                    Superfluid Dashboard
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </Card>
    </Container>
  )
}

export default ProfilePage

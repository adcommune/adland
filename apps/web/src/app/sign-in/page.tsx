'use client'

import { Container } from '@/components/Container'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useUserType } from '@/context/UserContext'
import { usePrivy } from '@privy-io/react-auth'
import classNames from 'classnames'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const SignInPage = () => {
  const { login, authenticated, ready, user } = usePrivy()
  const { push } = useRouter()

  const { userType, setUserType } = useUserType()

  const selected = {
    distributor: userType === 'distributor',
    advertiserOfCreator: userType === 'advertiser-or-creator',
  }

  const userIs = {
    distributor: authenticated && Boolean(user?.farcaster),
    advertiserOfCreator: authenticated && !Boolean(user?.farcaster),
  }

  console.log({ userIs, selected })

  return (
    <Container className="flex flex-col gap-4 p-4">
      <div>
        <h1 className="text-center font-body text-3xl font-bold text-white">
          Pick your role to get started
        </h1>
      </div>
      <div className="flex flex-col justify-center gap-2 md:flex-row">
        <Card
          className={classNames({
            'bg-slate-200': !authenticated && selected.advertiserOfCreator,
            'hover:bg-slate-100':
              !authenticated && !selected.advertiserOfCreator,

            'opacity-50': authenticated && userIs.distributor,
            'cursor-pointer': !authenticated,
          })}
          onClick={() => {
            if (authenticated) return
            setUserType('advertiser-or-creator')
          }}
        >
          <CardHeader className="text-center">
            <CardTitle>Advertiser or Owner</CardTitle>
            <CardDescription>
              Create new advertising spaces, advertise
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <Image
              src="/advertisor-or-creator.jpg"
              className="hidden aspect-square w-full rounded-md md:flex"
              height={400}
              width={400}
              alt="Distributor"
            />
            <Button
              onClick={authenticated ? () => push('/') : login}
              className="w-full"
              variant={
                userIs.advertiserOfCreator || selected.advertiserOfCreator
                  ? 'default'
                  : 'outline'
              }
              disabled={!ready || userIs.distributor || selected.distributor}
            >
              {ready ? (
                <>
                  {authenticated ? 'Home' : 'Sign In'}
                  {authenticated && <ArrowRight className="ml-2 h-4 w-4" />}
                </>
              ) : (
                '...'
              )}
            </Button>
          </CardContent>
        </Card>
        <Card
          className={classNames(
            {
              'bg-slate-200': !authenticated && selected.distributor,
              'hover:bg-slate-100': !authenticated && !selected.distributor,
              'cursor-pointer': !authenticated,
              'opacity-50': authenticated && userIs.advertiserOfCreator,
            },
            'opacity-30',
          )}
          onClick={() => {
            return
            // if (authenticated) return
            // setUserType('distributor')
          }}
        >
          <CardHeader className="text-center">
            <CardTitle>Distributor</CardTitle>
            <CardDescription>
              Distributors can earn by distributing onchain advertising space
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col justify-center gap-2">
            <Image
              src="/distrib-1.jpeg"
              className="hidden aspect-square w-full rounded-md md:flex"
              height={400}
              width={400}
              alt="Distributor"
            />
            <Button
              onClick={userIs.distributor ? () => push('/campaigns') : login}
              className="w-full"
              variant={
                userIs.distributor || selected.distributor
                  ? 'default'
                  : 'outline'
              }
              disabled={
                !ready ||
                userIs.advertiserOfCreator ||
                selected.advertiserOfCreator
              }
            >
              {ready ? (
                <>
                  {authenticated && userIs.distributor ? 'Home' : 'Sign In'}
                  {authenticated && userIs.distributor && (
                    <ArrowRight className="ml-2 h-4 w-4" />
                  )}
                </>
              ) : (
                '...'
              )}
            </Button>
          </CardContent>
        </Card>
      </div>
    </Container>
  )
}

export default SignInPage

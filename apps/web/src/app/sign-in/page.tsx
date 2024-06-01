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
import Image from 'next/image'

const SignInPage = () => {
  const { login } = usePrivy()
  const { userType, setUserType } = useUserType()

  const isAdvertiserOrCreator = userType === 'advertiser-or-creator'
  const isDistributor = userType === 'distributor'

  return (
    <Container className="flex flex-col gap-4 p-4">
      <div>
        <h1 className="text-center font-body text-3xl font-bold text-white">
          Pick your role to get started
        </h1>
      </div>
      <div className="flex flex-col justify-center gap-2 md:flex-row">
        <Card
          className={classNames('cursor-pointer', {
            'bg-slate-200': isAdvertiserOrCreator,
            'hover:bg-slate-100': !isAdvertiserOrCreator,
          })}
          onClick={() => {
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
              onClick={login}
              className="w-full"
              variant={isAdvertiserOrCreator ? 'default' : 'outline'}
              disabled={!isAdvertiserOrCreator}
            >
              Sign In
            </Button>
          </CardContent>
        </Card>
        <Card
          className={classNames('cursor-pointer ', {
            'bg-slate-200': isDistributor,
            'hover:bg-slate-100': !isDistributor,
          })}
          onClick={() => {
            setUserType('distributor')
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
              onClick={login}
              className="w-full"
              variant={isDistributor ? 'default' : 'outline'}
              disabled={!isDistributor}
            >
              Sign In
            </Button>
          </CardContent>
        </Card>
      </div>
    </Container>
  )
}

export default SignInPage

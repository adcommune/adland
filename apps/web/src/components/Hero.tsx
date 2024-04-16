'use client'

import { Container } from '@/components/Container'
import Image from 'next/image'
import { useQuery } from '@tanstack/react-query'
import { AdLand } from '@/lib/adland'
import { constants } from '@adland/common'
import Link from 'next/link'
import classNames from 'classnames'
import { Button } from './ui/button'
import { ShoppingCartIcon } from 'lucide-react'

export function Hero() {
  const { data, isLoading } = useQuery({
    queryFn: () => {
      return new AdLand()
        .getGroup(constants.landingPageAdGroup)
        .then(({ adSpaces }) => adSpaces)
    },
    queryKey: ['landing-ads'],
  })

  return (
    <Container className="flex min-h-[76vh] flex-col justify-center gap-8 py-8 text-center">
      <h1 className="mx-auto font-display text-3xl text-white 2xl:text-5xl">
        Revenue for your community
      </h1>
      <p className="mx-auto max-w-2xl font-body text-lg text-gray-200">
        Radical, decentralized, transparent revenue generation through
        collective advertising ownership.
      </p>
      <div className="grid w-full grid-cols-2 gap-2 sm:grid-cols-5">
        {!isLoading
          ? data?.map(({ metadata, adSpace_subgraph }) => {
              const clickable = Boolean(metadata?.external_url)
              const link = metadata?.external_url ?? ''

              return (
                <div
                  key={adSpace_subgraph.id}
                  className="flex aspect-square flex-col justify-center bg-white bg-opacity-10"
                >
                  {metadata?.imageGatewayURI ? (
                    <Link
                      href={link}
                      target="_blank"
                      className={classNames({
                        'cursor-pointer': clickable,
                        'cursor-not-allowed': !clickable,
                      })}
                    >
                      <Image
                        src={metadata?.imageGatewayURI}
                        alt="hello"
                        className="w-full object-contain"
                        width={800}
                        height={800}
                      />
                    </Link>
                  ) : (
                    <div className="flex h-full flex-col justify-center">
                      <p className="font-display text-white">NO AD</p>
                    </div>
                  )}
                </div>
              )
            })
          : Array(5)
              .fill(null)
              .map((_, i) => (
                <div
                  key={i}
                  className="flex aspect-square h-full flex-col justify-center bg-white bg-opacity-10"
                ></div>
              ))}
      </div>
      <div className="flex w-full flex-row justify-end">
        <Link
          href={'/app/group/' + constants.landingPageAdGroup}
          className="w-full sm:w-auto"
        >
          <Button
            size="sm"
            className="p x-8 bg-transparentfont-body w-full text-white sm:w-auto"
            variant="outline"
          >
            YOUR AD HERE
            <ShoppingCartIcon className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </Container>
  )
}

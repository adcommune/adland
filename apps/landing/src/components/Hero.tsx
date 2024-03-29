'use client'

import { Container } from '@/components/Container'
import AdSpaces from './AdSpaces/LandingAdSpaces'

export function Hero() {
  return (
    <Container className="flex min-h-[89vh] flex-col items-center justify-center gap-8 pb-16 pt-12 text-center">
      <h1 className="mx-auto font-display text-5xl text-white">
        Revenue for your community
      </h1>
      <p className="font-body mx-auto max-w-2xl text-lg text-gray-200">
        Radical, decentralized, transparent revenue generation through
        collective advertising ownership.
      </p>
      <div className="flex w-full flex-col">
        <AdSpaces />
      </div>
      <div className="flex flex-row items-center gap-8">
        <p className="font-body text-base text-white">
          The following ads already stream revenue to this project
        </p>
        <span className="inline-flex items-center gap-x-1.5 rounded-md bg-opacity-40 px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset  ring-primary  hover:cursor-pointer">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-primary"></span>
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-5 w-5 stroke-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </span>
      </div>
    </Container>
  )
}

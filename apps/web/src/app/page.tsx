'use client'

import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import Navbar from '@/components/Navbar'
import MobileNavigation from '@/components/Navigation/MovileNavigation'
import { links } from '@/config/links'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Navbar>
        <div className="flex items-center gap-x-5 md:gap-x-8">
          <div className="-mr-1 md:hidden">
            <MobileNavigation />
          </div>
        </div>
        <div className="hidden gap-x-6 sm:flex">
          <Link
            href={links.docs}
            target="_blank"
            className="font-body text-white"
            aria-label="AdLand on X"
          >
            Docs
          </Link>
          <Link
            href={links.telegram}
            target="_blank"
            className="group"
            aria-label="AdLand on Telegram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              className="h-6 w-6 fill-white"
              viewBox="0 0 50 50"
            >
              <title>Telegram</title>
              <path d="M25 2c12.703 0 23 10.297 23 23S37.703 48 25 48 2 37.703 2 25 12.297 2 25 2zm7.934 32.375c.423-1.298 2.405-14.234 2.65-16.783.074-.772-.17-1.285-.648-1.514-.578-.278-1.434-.139-2.427.219-1.362.491-18.774 7.884-19.78 8.312-.954.405-1.856.847-1.856 1.487 0 .45.267.703 1.003.966.766.273 2.695.858 3.834 1.172 1.097.303 2.346.04 3.046-.395.742-.461 9.305-6.191 9.92-6.693.614-.502 1.104.141.602.644-.502.502-6.38 6.207-7.155 6.997-.941.959-.273 1.953.358 2.351.721.454 5.906 3.932 6.687 4.49.781.558 1.573.811 2.298.811.725 0 1.107-.955 1.468-2.064z"></path>
            </svg>
          </Link>
          <Link
            href={links.github}
            target="_blank"
            className="group"
            aria-label="AdLand on GitHub"
          >
            <svg
              className="h-6 w-6 fill-white"
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
            </svg>
          </Link>
        </div>
      </Navbar>
      <Hero />
      <Footer />
    </>
  )
}

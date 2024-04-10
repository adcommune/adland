'use client'

import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import Navbar from '@/components/Navbar'
import MobileNavigation from '@/components/Navigation/MovileNavigation'
import { nav_links } from '@/config/links'
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
        <div className="hidden gap-x-4 sm:flex">
          {nav_links.map((link) => {
            return (
              <Link
                key={link.name}
                href={link.href}
                target={link.target}
                className="fill-white font-body text-white"
                aria-label={'AdLand social links: ' + link.name}
              >
                {link.icon ? link.icon : link.name}
              </Link>
            )
          })}
        </div>
      </Navbar>
      <Hero />
      <Footer />
    </>
  )
}

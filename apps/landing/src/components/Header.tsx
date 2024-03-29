'use client'

import Link from 'next/link'
import { Container } from '@/components/Container'
import { links } from '@/config/links'
import MobileNavigation from './Navigation/MovileNavigation'

export function Header() {
  return (
    <header className="h-full border-b border-b-base border-opacity-20 py-5">
      <Container className="">
        <nav className="relative flex items-center justify-between">
          <Link href="/" aria-label="Home">
            <p className="font-display text-2xl">
              <span className="text-primary">Ad</span>
              <span className="text-secondary">Land</span>
            </p>
          </Link>
          {/* <div className="hidden md:flex md:gap-x-6">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#testimonials">Testimonials</NavLink>
              <NavLink href="#pricing">Pricing</NavLink>
            </div> */}
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
          <div className="flex gap-x-6">
            <Link
              href={links.docs}
              target="_blank"
              className="font-body text-white"
              aria-label="AdLand on X"
            >
              Docs
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
        </nav>
      </Container>
    </header>
  )
}

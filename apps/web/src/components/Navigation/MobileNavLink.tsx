import { Popover } from '@headlessui/react'
import Link from 'next/link'

function MobileNavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Popover.Button
      as={Link}
      target="_blank"
      href={href}
      className="block w-full p-2"
    >
      {children}
    </Popover.Button>
  )
}

export default MobileNavLink

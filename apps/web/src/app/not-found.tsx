import { Container } from '@/components/Container'
import Link from 'next/link'

export default function NotFound() {
  return (
    <Container className="min-h-[90vh] text-white">
      <p className="mt-20 font-display text-lg  font-medium">404</p>
      <h1 className="mt-3 font-display text-lg font-semibold">
        Page not found
      </h1>
      <p className="font-body mt-3 text-sm text-gray-300">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <button className="mt-10">
        <Link href="/">Go back home</Link>
      </button>
    </Container>
  )
}

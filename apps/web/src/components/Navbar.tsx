import Link from 'next/link'
import AdLandBrand from './Icons'
import { Container } from './Container'

const Navbar = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className="h-full border-b border-b-base border-opacity-20 py-5">
      <Container className="">
        <nav className="relative flex items-center justify-between">
          <Link href="/" aria-label="Home">
            <AdLandBrand />
          </Link>
          <>{children}</>
        </nav>
      </Container>
    </header>
  )
}

export default Navbar

import Link from 'next/link'
import AdLandBrand from './Icons'
import { Container } from './Container'

const Navbar = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className="border-b-base h-full border-b border-opacity-0 py-5">
      <Container className="">
        <nav className="relative flex items-center justify-between">
          <div className="h-[20px] md:h-[38px]">
            <Link href="/">
              <AdLandBrand />
            </Link>
          </div>
          <>{children}</>
        </nav>
      </Container>
    </header>
  )
}

export default Navbar

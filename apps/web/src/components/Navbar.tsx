import Link from 'next/link'
import AdLandBrand from './Icons'
import { Container } from './Container'
import { Badge } from './ui/badge'
import { constants } from '@adland/common'

const Navbar = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className="border-b-base h-full border-b border-opacity-0 py-5">
      <Container className="">
        <nav className="relative flex items-center justify-between">
          <div className="flex flex-row items-end gap-2">
            <div className="h-[20px] md:h-[38px]">
              <Link href="/">
                <AdLandBrand />
              </Link>
            </div>
            {constants.chain.testnet && (
              <Badge variant="secondary">Testnet</Badge>
            )}
          </div>
          <>{children}</>
        </nav>
      </Container>
    </header>
  )
}

export default Navbar

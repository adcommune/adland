'use client'

import { ConnectButton } from './ConnectButton'
import Navbar from './Navbar'

const AppNavbar = () => {
  return (
    <Navbar>
      <div className="flex flex-row gap-2">
        <ConnectButton />
      </div>
    </Navbar>
  )
}

export default AppNavbar

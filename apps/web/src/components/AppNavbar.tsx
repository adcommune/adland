'use client'

import { ConnectButton } from './ConnectButton'
import Navbar from './Navbar'
import StreamPermissionButton from './StreamPermissionButton'

const AppNavbar = () => {
  return (
    <Navbar>
      <div className="flex flex-row gap-2">
        <StreamPermissionButton />
        <ConnectButton />
      </div>
    </Navbar>
  )
}

export default AppNavbar

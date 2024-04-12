'use client'

import { createContext, useState } from 'react'

type ModalProps = {
  show: boolean
  set: (show: boolean) => void
  data?: any
}

const ModalContext = createContext<{ acquireLeaseModal: ModalProps }>({
  acquireLeaseModal: { show: false, set: () => {} },
})

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [acquireLeaseModal, setAcquireLeaseModal] = useState(false)

  return (
    <ModalContext.Provider
      value={{
        acquireLeaseModal: {
          show: acquireLeaseModal,
          set: setAcquireLeaseModal,
        },
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export { ModalContext, ModalProvider }

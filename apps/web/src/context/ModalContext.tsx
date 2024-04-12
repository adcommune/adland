'use client'

import { createContext, useState } from 'react'

type ModalProps = {
  show: boolean
  set: (show: boolean) => void
  data?: any
}

type ModalContextType = {
  acquireLeaseModal: ModalProps
  updateAdDataModal: ModalProps
}

const ModalContext = createContext<ModalContextType>({
  acquireLeaseModal: { show: false, set: () => {} },
  updateAdDataModal: { show: false, set: () => {} },
})

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [acquireLeaseModal, setAcquireLeaseModal] = useState(false)
  const [updateAdDataModal, setUpdateAdDataModal] = useState(false)

  return (
    <ModalContext.Provider
      value={{
        acquireLeaseModal: {
          show: acquireLeaseModal,
          set: setAcquireLeaseModal,
        },
        updateAdDataModal: {
          show: updateAdDataModal,
          set: setUpdateAdDataModal,
        },
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export { ModalContext, ModalProvider }

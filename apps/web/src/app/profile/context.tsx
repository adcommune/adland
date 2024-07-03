import { TokenX } from '@adland/webkit/src/ponder'
import React from 'react'
import { createContext, useState } from 'react'

type ProfileContextStateType = {
  tokenxWithdraw: {
    set: (tokenX: TokenX | undefined) => void
    tokenX: TokenX | undefined
  }
}

const ProfileContext = createContext<ProfileContextStateType>({
  tokenxWithdraw: {
    set: () => {},
    tokenX: undefined,
  },
})

type ProfileContextType = {
  children: React.ReactNode
}

export const ProfileProvider = ({ children }: ProfileContextType) => {
  const [withdrawTokenX, setWithdrawTokenX] = useState<TokenX | undefined>(
    undefined,
  )

  return (
    <ProfileContext.Provider
      value={{
        tokenxWithdraw: {
          set: setWithdrawTokenX,
          tokenX: withdrawTokenX,
        },
      }}
    >
      {children}
    </ProfileContext.Provider>
  )
}

export const useProfile = () => {
  const context = React.useContext(ProfileContext)

  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider')
  }

  return context
}

export default ProfileContext

'use client'

import { createContext, useContext, useState } from 'react'

type UserType = 'advertiser-or-creator' | 'distributor'

type UserContextType = {
  userType: UserType
  setUserType: (userType: UserType) => void
}

const UserTypeContext = createContext<UserContextType>({
  userType: 'advertiser-or-creator',
  setUserType: (userType: UserType) => {},
})

const UserTypeProvider = ({ children }: { children: React.ReactNode }) => {
  const [userType, setUserType] = useState<UserType>('advertiser-or-creator')

  return (
    <UserTypeContext.Provider
      value={{
        userType,
        setUserType,
      }}
    >
      {children}
    </UserTypeContext.Provider>
  )
}

const useUserType = () => {
  const context = useContext(UserTypeContext)
  if (context === undefined) {
    throw new Error('useUserType must be used within a UserTypeProvider')
  }
  return context
}

export { UserTypeProvider, useUserType }

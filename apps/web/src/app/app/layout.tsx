import Navbar from '@/components/Navbar'
import AppProviders from './providers'

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppProviders>
      <div className="h-full antialiased">
        <Navbar>
          <></>
        </Navbar>
        <main className="relative z-0">{children}</main>
      </div>
    </AppProviders>
  )
}

export default AppLayout

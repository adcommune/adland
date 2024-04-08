import AppProviders from './providers'
import AppNavbar from '@/components/AppNavbar'

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AppProviders>
        <div className="h-full antialiased">
          <AppNavbar />
          <main className="relative z-0">{children}</main>
        </div>
      </AppProviders>
    </>
  )
}

export default AppLayout

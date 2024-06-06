import '@/styles/tailwind.css'
import { type Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import localFont from 'next/font/local'
import clsx from 'clsx'
import { Analytics } from '@vercel/analytics/react'
import { Toaster } from 'sonner'
import AppProviders from '@/components/AppProviders'
import { UserTypeProvider } from '@/context/UserContext'

export const metadata: Metadata = {
  title: {
    template: '%s - AdLand',
    default: 'AdLand - Revenue for your community',
  },
  openGraph: {
    title: 'AdLand - Revenue for your community',
  },
  description:
    'AdLand is a protocol to generate revenue for your community through collective advertising ownershup.',
}

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

const antiqueOlive = localFont({
  src: '../fonts/AntiqueOliveNord.woff',
  variable: '--font-antique-olive',
})

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full antialiased',
        montserrat.variable,
        antiqueOlive.variable,
      )}
    >
      <body className="relative z-[2]">
        <div className="">
          <UserTypeProvider>
            <AppProviders>{children}</AppProviders>
          </UserTypeProvider>
          <Analytics />
          <Toaster
            toastOptions={{
              className: 'font-body',
            }}
          />
        </div>
      </body>
    </html>
  )
}

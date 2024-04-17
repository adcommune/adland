import '@/styles/tailwind.css'
import { type Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import localFont from 'next/font/local'
import clsx from 'clsx'
import { Analytics } from '@vercel/analytics/react'
import { Toaster } from 'sonner'

export const metadata: Metadata = {
  title: {
    template: '%s - AdLand',
    default: 'AdLand - Revenue for your community',
  },
  openGraph: {
    title: 'AdLand - Revenue for your community',
    images: ['https://i.imgur.com/6oeTt1J.jpg'],
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
          {children}
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

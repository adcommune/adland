import '@/styles/tailwind.css'
import { type Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import localFont from 'next/font/local'
import clsx from 'clsx'
import { Header } from '@/components/Header'
import GradientBackground from '@/components/GradientBackground'

export const metadata: Metadata = {
  title: {
    template: '%s - AdLand',
    default: 'AdLand - Revenue for your community',
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
        'h-full bg-neutral antialiased',
        montserrat.variable,
        antiqueOlive.variable,
      )}
    >
      <body className="relative">
        <div className="overflow-hidden">
          <GradientBackground />
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}

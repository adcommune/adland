import { useState } from 'react'
import AdSpaceWindow from './AdSpaceWindow'

function LandingAdSpaces() {
  const logos = [
    {
      name: 'Transistor',
      imageSrc:
        'https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg',
      imageAlt: 'Transistor',
    },
    {
      name: 'Reform',
      imageSrc: 'https://tailwindui.com/img/logos/158x48/reform-logo-white.svg',
      imageAlt: 'Reform',
    },
    {
      name: 'Tuple',
      imageSrc: 'https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg',
      imageAlt: 'Tuple',
    },
    {
      name: 'Laravel',
      imageSrc:
        'https://tailwindui.com/img/logos/158x48/laravel-logo-white.svg',
      imageAlt: 'Laravel',
    },
    {
      name: 'Statamic',
      imageSrc:
        'https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg',
      imageAlt: 'Statamic',
    },
    {
      name: 'SaviCal',
      imageSrc:
        'https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg',
      imageAlt: 'SaviCal',
    },
  ]
  const [open, setOpen] = useState<string | null>(null)

  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="w-full">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
          <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
            {logos.map((logo) => {
              return (
                <AdSpaceWindow
                  key={logo.name}
                  name={logo.name}
                  imageSrc={logo.imageSrc}
                  imageAlt={logo.imageAlt}
                  open={open === logo.name}
                  onClick={() => {
                    if (open === logo.name) {
                      setOpen(null)
                    } else {
                      setOpen(logo.name)
                    }
                  }}
                />
              )
            })}
          </div>
        </div>
      </div>
      <div className="absolute left-4 top-4"></div>
    </div>
  )
}

export default LandingAdSpaces

import { CheckIcon } from 'lucide-react'
import { useState } from 'react'

export type StepsUtils = { next: () => void; prev: () => void }

export type Step = {
  id: string
  name: string
  renderStep: ({}: StepsUtils) => () => JSX.Element
}

type HorizontalStepsProps = {
  steps: Step[]
  renderSuccess?: () => JSX.Element
}

function HorizontalSteps({ steps, renderSuccess }: HorizontalStepsProps) {
  const [current, setCurrent] = useState<number>(0)

  const next = () => {
    setCurrent((prev) => {
      if (prev === steps.length) return prev
      return prev + 1
    })
  }

  const prev = () => {
    setCurrent((prev) => {
      if (prev === 0) return prev
      return prev - 1
    })
  }

  return (
    <div className="flex flex-col gap-2">
      <nav aria-label="Progress">
        <ol
          role="list"
          className="divide-y divide-gray-300 rounded-md border border-gray-300 md:flex md:divide-y-0"
        >
          {steps.map((step, stepIdx) => (
            <li key={step.name} className="relative md:flex md:flex-1">
              {stepIdx < current ? (
                <div className="group flex w-full items-center">
                  <span className="flex items-center px-6 py-4 text-sm font-medium">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-black">
                      <CheckIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="ml-4 text-sm font-medium text-gray-900">
                      {step.name}
                    </span>
                  </span>
                </div>
              ) : current === stepIdx ? (
                <div
                  className="flex items-center px-6 py-4 text-sm font-medium"
                  aria-current="step"
                >
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-black">
                    <span className="">{step.id}</span>
                  </span>
                  <span className="ml-4 text-sm font-medium ">{step.name}</span>
                </div>
              ) : (
                <div className="group flex items-center">
                  <span className="flex items-center px-6 py-4 text-sm font-medium">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-gray-400">
                      <span className="text-gray-500 group-hover:text-gray-900">
                        {step.id}
                      </span>
                    </span>
                    <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">
                      {step.name}
                    </span>
                  </span>
                </div>
              )}

              {stepIdx !== steps.length - 1 ? (
                <>
                  <div
                    className="absolute right-0 top-0 hidden h-full w-5 md:block"
                    aria-hidden="true"
                  >
                    <svg
                      className="h-full w-full text-gray-300"
                      viewBox="0 0 22 80"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 -2L20 40L0 82"
                        vectorEffect="non-scaling-stroke"
                        stroke="currentcolor"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </>
              ) : null}
            </li>
          ))}
        </ol>
      </nav>
      <div className="">
        {steps[current] &&
          steps[current].renderStep({
            next,
            prev,
          })()}
        {current === steps.length && renderSuccess && renderSuccess()}
      </div>
      {/* {process.env.NODE_ENV === 'development' && (
        <div className="flex flex-row justify-between">
          <Button onClick={prev}>Prev</Button>
          <Button onClick={next}>Next</Button>
        </div>
      )} */}
    </div>
  )
}

export default HorizontalSteps

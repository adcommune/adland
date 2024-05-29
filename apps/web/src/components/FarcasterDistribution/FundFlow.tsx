import { useRef } from 'react'
import { AnimatedBeam, BeamCircle } from '../ui/animated-beam'
import { UserIcon, UsersIcon } from 'lucide-react'
import Link from 'next/link'

type FundFlowProps = {
  enabled: boolean
  poolExplorerLink: string
}

const FundFlow = ({ enabled, poolExplorerLink }: FundFlowProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const div1Ref = useRef<HTMLDivElement>(null)
  const div2Ref = useRef<HTMLDivElement>(null)

  return (
    <div className="relative flex w-full" ref={containerRef}>
      <div className="flex h-full w-full flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row justify-between">
          <BeamCircle
            ref={div1Ref}
            className="hover:cursor-pointer hover:border-2 hover:border-purple-500"
          >
            {/* <Link
          href={getExplorerLink(bicoAccountAddress, 'address')}
          target="_blank"
        > */}
            <UserIcon className="h-6 w-6" />
            {/* </Link> */}
          </BeamCircle>
          <BeamCircle
            ref={div2Ref}
            className="bg-white hover:cursor-pointer hover:border-2 hover:border-purple-500"
          >
            <Link href={poolExplorerLink} target="_blank">
              <UsersIcon className="h-6 w-6" />
            </Link>
          </BeamCircle>
          <AnimatedBeam
            duration={enabled ? 3 : 0}
            containerRef={containerRef}
            fromRef={div1Ref}
            toRef={div2Ref}
          />
        </div>
      </div>
    </div>
  )
}

export default FundFlow

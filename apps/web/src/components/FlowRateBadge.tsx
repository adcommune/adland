import { formatAmount } from '@/lib/helpers'
import { Badge } from './ui/badge'
import TokenImage from './TokenImage'
import { formatEther } from 'viem'

type FlowRateBadgeProps = {
  flowRate: bigint
  currency: string
}

const FlowRateBadge = ({ flowRate, currency }: FlowRateBadgeProps) => {
  return (
    <Badge className="flex flex-row gap-2 border">
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
      </span>
      <>
        <div className="flex flex-row gap-1">
          {formatAmount(formatEther(flowRate))}
          <TokenImage address={currency} className="h-4 w-4" />
        </div>
        /week
      </>
    </Badge>
  )
}

export default FlowRateBadge

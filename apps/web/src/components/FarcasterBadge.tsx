import { usePrivy } from '@privy-io/react-auth'
import { Card } from './ui/card'
import classNames from 'classnames'

const FarcasterBadge = ({
  className,
}: React.HTMLAttributes<HTMLDivElement>) => {
  const { user } = usePrivy()

  const farcaster = user?.farcaster

  if (!farcaster) return null

  const { pfp } = farcaster

  return (
    <Card
      className={classNames('inline-flex flex-row items-center p-1', className)}
    >
      {pfp && (
        <img
          src={pfp}
          className="aspect-square h-full rounded-md object-cover"
        />
      )}
      <p className="mx-4 font-body text-sm font-bold">
        {farcaster.displayName}
      </p>
    </Card>
  )
}

export default FarcasterBadge

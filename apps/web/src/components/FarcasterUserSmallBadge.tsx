import { truncateAddress } from '@/lib/utils'
import { User } from '@adland/webkit/src/ponder'

const FarcasterUserSmallBadge = ({ user }: { user?: User | null }) => {
  if (!user) return null

  return (
    <div className="flex flex-row items-center gap-2 text-xs">
      <div className="flex h-5 w-5 overflow-hidden rounded-full bg-gray-300">
        {user.pfp && (
          <img src={user.pfp} className="h-full w-full object-cover" />
        )}
      </div>
      <p className="font-semibold">
        {user.fid ? user?.username : truncateAddress(user.id)}
      </p>
    </div>
  )
}

export default FarcasterUserSmallBadge

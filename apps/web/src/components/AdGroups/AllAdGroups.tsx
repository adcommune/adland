import { AdLand } from '@/lib/adland'
import Link from 'next/link'
import { format } from 'date-fns'

const AllAdGroups = async () => {
  const groups = await new AdLand().listGroups()

  return (
    <div className="flex flex-col gap-2">
      {groups.map((group) => (
        <Link
          href={'/group/' + group.adGroup_subgraph.id}
          key={group.adGroup_subgraph.id}
        >
          <div className="flex flex-row justify-between rounded-md bg-white p-3 hover:bg-gray-100">
            <h1>Ad Group - #{group.adGroup_subgraph.id}</h1>
            <div className="flex flex-wrap">
              {group.adSpaces.length} Ad Spaces
            </div>
            <div className="flex flex-wrap">
              Created on:{' '}
              {format(
                parseInt(group.adGroup_subgraph.blockTimestamp) * 1000,
                'MM/dd',
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default AllAdGroups

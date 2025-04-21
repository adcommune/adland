import useTransaction from '@/hooks/useTransaction'
import { useSimulateDirectListingsLogicForecloseListing } from '@adland/contracts'
import { DropdownMenuItem } from '../ui/dropdown-menu'

const ForecloseDropdownItem = ({ listingId }: { listingId: bigint }) => {
  const { data } = useSimulateDirectListingsLogicForecloseListing({
    args: [listingId],
  })

  const { writeContract, loading } = useTransaction(() => {})

  return (
    <DropdownMenuItem
      disabled={!Boolean(data?.request)}
      onClick={() => {
        if (data?.request) {
          // @ts-ignore
          writeContract(data.request)
        }
      }}
      className="bg-red-500 text-white"
    >
      Foreclos{loading ? 'ing...' : 'e'}
    </DropdownMenuItem>
  )
}

export default ForecloseDropdownItem

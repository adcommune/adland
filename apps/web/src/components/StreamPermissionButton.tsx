import useAppContracts from '@/hooks/useAppContracts'
import { useAccount } from 'wagmi'
import { Button } from './ui/button'
import {
  useReadCfAv1ForwarderGetFlowOperatorPermissions,
  useWriteCfAv1ForwarderGrantPermissions,
} from '@adland/contracts'
import { handleWriteErrors } from '@/lib/viem'

const StreamPermissionButton = () => {
  const { address } = useAccount()
  const { cfaV1, ethx, marketplace } = useAppContracts()

  const { data: permissionGrantedToMarketplace, isFetched } =
    useReadCfAv1ForwarderGetFlowOperatorPermissions({
      address: cfaV1,
      args: address && [ethx, address, marketplace],
      query: {
        enabled: Boolean(address),
        select: (data: any) => {
          console.log(data)
          return data[0] === 7
        },
      },
    })

  const { writeContract: callGrantPermission, isPending } =
    useWriteCfAv1ForwarderGrantPermissions()

  const grantPermission = () => {
    callGrantPermission(
      {
        address: cfaV1,
        args: [ethx, marketplace],
      },
      {
        onError: (error) => handleWriteErrors(error),
      },
    )
  }

  return (
    <>
      {' '}
      {!permissionGrantedToMarketplace && isFetched && (
        <Button
          className="font-body"
          disabled={isPending}
          loading={isPending}
          onClick={() => {
            grantPermission()
          }}
        >
          Grant Permission
        </Button>
      )}
    </>
  )
}

export default StreamPermissionButton

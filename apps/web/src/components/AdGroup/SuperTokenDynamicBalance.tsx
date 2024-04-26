import useAppContracts from '@/hooks/useAppContracts'
import FlowingBalance from '@/lib/superfluid'
import { AdGroup } from '@/lib/types'
import {
  useReadCfAv1ForwarderGetAccountFlowrate,
  useReadSuperTokenBalanceOf,
} from '@adland/contracts'
import { TokenX } from '@adland/webkit/src/hooks'
import { TableCell, TableRow } from '../ui/table'
import { getTokenSymbol } from '@/config/constants'
import { Button } from '../ui/button'

type SuperTokenDynamicBalance = {
  tokenX: TokenX
  adGroup: AdGroup
}

const SuperTokenBalance = ({ tokenX, adGroup }: SuperTokenDynamicBalance) => {
  const { adGroup_subgraph } = adGroup
  const { beneficiary } = adGroup_subgraph
  const { superToken } = tokenX
  const { cfaV1 } = useAppContracts()

  const { data: benefBalance } = useReadSuperTokenBalanceOf({
    address: superToken,
    args: beneficiary && [beneficiary],
    query: {
      enabled: Boolean(beneficiary),
    },
  })

  const { data: benefFlowRate } = useReadCfAv1ForwarderGetAccountFlowrate({
    address: cfaV1,
    args: beneficiary && [superToken, beneficiary],
    query: {
      enabled: Boolean(beneficiary),
    },
  })

  if (benefBalance !== undefined && benefFlowRate !== undefined) {
    return (
      <TableRow key={tokenX.id}>
        <TableCell>{getTokenSymbol(tokenX.underlyingToken)}x</TableCell>
        <TableCell>H</TableCell>
        <TableCell>
          <FlowingBalance
            startingBalance={benefBalance}
            startingBalanceDate={new Date()}
            flowRate={benefFlowRate}
          />
        </TableCell>
        <TableCell>
          <Button
            disabled
            onClick={() => {
              //
            }}
          >
            Withdraw
          </Button>
        </TableCell>
      </TableRow>
    )
  } else {
    return null
  }
}

export default SuperTokenBalance

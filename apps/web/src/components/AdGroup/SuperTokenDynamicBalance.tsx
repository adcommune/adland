import useAppContracts from '@/hooks/useAppContracts'
import FlowingBalance from '@/lib/superfluid'
import {
  useReadCfAv1ForwarderGetAccountFlowrate,
  useReadSuperTokenBalanceOf,
} from '@adland/contracts'
import { TokenX } from '@adland/webkit/src/ponder'
import { TableCell, TableRow } from '../ui/table'
import { Button } from '../ui/button'
import { useContext } from 'react'
import { SmartAccountContext } from '@/context/SmartAccountContext'
import { Address, erc20Abi, formatEther, formatUnits } from 'viem'
import { useBalance, useReadContracts } from 'wagmi'
import TokenImage from '../TokenImage'
import { formatAmount } from '@/lib/helpers'
import { useProfile } from '@/app/profile/context'

type SuperTokenDynamicBalance = {
  tokenX: TokenX
}

const SuperTokenBalance = ({ tokenX }: SuperTokenDynamicBalance) => {
  const { tokenxWithdraw } = useProfile()
  const { bicoAccountAddress } = useContext(SmartAccountContext)
  const { superToken, underlyingToken, isNativeToken } = tokenX as TokenX & {
    underlyingToken: Address
    superToken: Address
  }
  const { cfaV1 } = useAppContracts()

  const { data: nativeBalance } = useBalance({
    address: bicoAccountAddress,
    query: {
      select: (balance) => formatEther(balance.value),
    },
  })

  const { data: balanceOfUnderlying } = useReadContracts({
    contracts: [
      {
        abi: erc20Abi,
        functionName: 'decimals',
        address: underlyingToken,
      },
      {
        abi: erc20Abi,
        functionName: 'balanceOf',
        address: underlyingToken,
        args: bicoAccountAddress && [bicoAccountAddress],
      },
    ],
    query: {
      select: (data) => {
        const [{ result: decimals }, { result: balanceOf }] = data
        return formatAmount(formatUnits(balanceOf ?? BigInt(0), decimals ?? 18))
      },
    },
  })

  const { data: benefBalance } = useReadSuperTokenBalanceOf({
    address: superToken,
    args: bicoAccountAddress && [bicoAccountAddress],
    query: {
      enabled: Boolean(bicoAccountAddress),
      select: (balance) => {
        return {
          bigint: balance,
          readable: formatEther(balance),
        }
      },
    },
  })

  const { data: benefFlowRate } = useReadCfAv1ForwarderGetAccountFlowrate({
    address: cfaV1,
    args: bicoAccountAddress && [superToken, bicoAccountAddress],
    query: {
      enabled: Boolean(bicoAccountAddress),
    },
  })

  if (benefBalance !== undefined && benefFlowRate !== undefined) {
    return (
      <TableRow key={tokenX.id}>
        <TableCell>
          <TokenImage address={tokenX.underlyingToken} />
        </TableCell>
        <TableCell>{tokenX.superSymbol}</TableCell>
        <TableCell>
          {isNativeToken ? nativeBalance : balanceOfUnderlying}
        </TableCell>
        <TableCell>
          <FlowingBalance
            startingBalance={benefBalance.bigint}
            startingBalanceDate={new Date()}
            flowRate={benefFlowRate}
          />
        </TableCell>
        <TableCell className="text-right">
          <Button
            onClick={() => {
              tokenxWithdraw.set(tokenX)
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

import { appContracts } from '@/config/constants'
import { formatAmount } from '@/lib/helpers'
import {
  useReadCfAv1ForwarderGetAccountFlowrate,
  useReadSuperTokenBalanceOf,
} from '@adland/contracts'
import { TokenX } from '@adland/webkit/src/ponder'
import { Address, erc20Abi, formatEther, formatUnits } from 'viem'
import { useBalance, useReadContracts } from 'wagmi'

const useAccountBalances = (
  { underlyingToken, superToken, isNativeToken }: TokenX,
  account: Address | undefined,
) => {
  const { data: nativeBalance } = useBalance({
    address: account,
    query: {
      select: (balance) => {
        return {
          bigint: balance.value,
          readable: formatEther(balance.value),
        }
      },
    },
  })

  const { data: balanceOfUnderlying } = useReadContracts({
    contracts: [
      {
        abi: erc20Abi,
        functionName: 'decimals',
        address: underlyingToken as Address,
      },
      {
        abi: erc20Abi,
        functionName: 'balanceOf',
        address: underlyingToken as Address,
        args: account && [account],
      },
    ],
    query: {
      select: (data) => {
        const [{ result: decimals }, { result: balanceOf }] = data
        return {
          bigint: balanceOf ?? BigInt(0),
          readable: formatAmount(
            formatUnits(balanceOf ?? BigInt(0), decimals ?? 18),
          ),
        }
      },
    },
  })

  const { data: balanceOfSuperToken } = useReadSuperTokenBalanceOf({
    address: superToken as Address,
    args: account && [account],
    query: {
      enabled: Boolean(account),
      select: (balance) => {
        return {
          bigint: balance,
          readable: formatEther(balance),
        }
      },
    },
  })

  const { data: superTokenFlowRate } = useReadCfAv1ForwarderGetAccountFlowrate({
    address: appContracts.cfaV1,
    args: account && [superToken as Address, account],
    query: {
      enabled: Boolean(account),
    },
  })

  const underlyingAmount =
    (isNativeToken ? nativeBalance?.bigint : balanceOfUnderlying?.bigint) ??
    BigInt(0)
  const totalAmount =
    underlyingAmount + (balanceOfSuperToken?.bigint ?? BigInt(0)) || BigInt(1)

  const ratioUnderlyingSuperToken = Number(
    parseFloat(formatEther(underlyingAmount)) /
      parseFloat(formatEther(totalAmount)),
  )

  return {
    balanceOfUnderlyingBigInt: underlyingAmount,
    balanceOfUnderlyingReadable: formatAmount(formatEther(underlyingAmount)),
    balanceOfSuperTokenBigInt: balanceOfSuperToken?.bigint,
    balanceOfSuperTokenReadable: formatAmount(
      balanceOfSuperToken?.readable ?? '0',
    ),
    superTokenFlowRate,
    ratioUnderlyingSuperToken,
    totalAmountBigInt: totalAmount,
    totalAmountReadable: formatAmount(formatEther(totalAmount)),
  }
}

export default useAccountBalances

import { getTokenSymbol } from '@/config/constants'
import { Address } from 'viem'
import Image from 'next/image'
import { forwardRef } from 'react'

const tokenSources: Record<string, string> = {
  DAI: '/tokens/dai.webp',
  DEGEN: '/tokens/degen.webp',
  BLEU: '/tokens/bleu.webp',
  USDC: '/tokens/usdc.webp',
  ETH: '/tokens/eth.png',
  TREE: '/tokens/tree.png',
  HIGHER: '/tokens/higher.png',
}

type TokenImageProps = {
  address: Address | string
  symbol?: string
} & React.HTMLAttributes<HTMLImageElement>

const TokenImage = forwardRef(
  (
    { address, className, symbol }: TokenImageProps,
    ref: React.ForwardedRef<any>,
  ) => {
    const smb = symbol ?? getTokenSymbol(address) ?? 'ETH'
    return (
      <Image
        ref={ref}
        src={tokenSources[smb]}
        width={32}
        height={32}
        className={className}
        alt={smb}
      />
    )
  },
)

TokenImage.displayName = 'TokenImage'

export default TokenImage

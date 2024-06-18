import { getTokenSymbol } from '@/config/constants'
import { Address } from 'viem'
import Image from 'next/image'

const tokenSources: Record<string, string> = {
  DAI: '/tokens/dai.webp',
  DEGEN: '/tokens/degen.webp',
  BLEU: '/tokens/bleu.webp',
  USDC: '/tokens/usdc.webp',
  ETH: '/tokens/eth.png',
}

const TokenImage = ({
  address,
  className,
}: { address: Address | string } & React.HTMLAttributes<HTMLImageElement>) => {
  const symbol = getTokenSymbol(address) ?? 'ETH'
  return (
    <Image
      src={tokenSources[symbol]}
      width={32}
      height={32}
      className={className}
      alt={symbol}
    />
  )
}

export default TokenImage

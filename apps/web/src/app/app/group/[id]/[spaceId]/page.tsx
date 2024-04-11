import { Copy, ShoppingCart } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Container } from '@/components/Container'
import { AdLand } from '@/lib/adland'
import Image from 'next/image'
import { format } from 'date-fns'
import { formatEther } from 'viem'
import { truncateAddress } from '@/lib/utils'

type AdSpacePageProps = {
  params: { spaceId: string; id: string }
}

const AdSpacePage = async ({ params: { spaceId } }: AdSpacePageProps) => {
  const adSpace = await new AdLand().getAdSpace(spaceId)

  const { listing } = adSpace

  return (
    <Container className="relative flex min-h-[80vh] flex-row gap-4 py-4">
      <Card className="overflow-hidden font-body">
        <CardHeader className="flex flex-row items-start gap-8 bg-muted/50">
          <div className="grid gap-0.5">
            <CardTitle className="group flex items-center gap-2 text-lg">
              AdSpace {Number(listing?.listingId)}
              <Button
                size="icon"
                variant="outline"
                className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
              >
                <Copy className="h-3 w-3" />
                <span className="sr-only">Copy Order ID</span>
              </Button>
            </CardTitle>
            <CardDescription>
              Opened on{' '}
              {format(Number(listing?.startTimestamp) * 1000, 'MMMM do')}
            </CardDescription>
          </div>
          <div className="ml-auto flex items-center gap-1">
            <Button size="sm" variant="default" className="h-8 gap-1">
              <ShoppingCart className="h-3.5 w-3.5" />
              <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                Acquire space
              </span>
            </Button>
            {/* <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="icon" variant="outline" className="h-8 w-8">
                  <MoreVertical className="h-3.5 w-3.5" />
                  <span className="sr-only">More</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Export</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Trash</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> */}
          </div>
        </CardHeader>
        <CardContent className="p-6 text-sm">
          <div className="grid gap-3">
            <div className="font-semibold">Ad Details</div>
            <ul className="grid gap-3">
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Price</span>
                <span>{formatEther(listing?.pricePerToken)}</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Tax Rate</span>
                <span>{Number(listing?.taxRate) / 100} %</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Currencry</span>
                <span>{truncateAddress(listing?.currency)}</span>
              </li>
            </ul>
          </div>
          {/* <div className="grid gap-3">
            <div className="font-semibold">Payment Information</div>
            <dl className="grid gap-3">
              <div className="flex items-center justify-between">
                <dt className="flex items-center gap-1 text-muted-foreground">
                  <CreditCard className="h-4 w-4" />
                  Visa
                </dt>
                <dd>**** **** **** 4532</dd>
              </div>
            </dl>
          </div> */}
        </CardContent>
        <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
          <div className="text-xs text-muted-foreground">
            Owned by <span>{truncateAddress(listing?.listingOwner)}</span>
          </div>
        </CardFooter>
      </Card>{' '}
      <div className="flex-grow">
        {adSpace.metadata?.imageGatewayURI && (
          <Image
            src={adSpace.metadata?.imageGatewayURI}
            alt="AdSpace Image"
            className="w-full"
            width={500}
            height={500}
          />
        )}
      </div>
    </Container>
  )
}

export default AdSpacePage

'use client'

import CopiableInput from '@/components/CopiableInput'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { baseURL } from '@/config/constants'

type AdSpacePageProps = {
  params: { spaceId: string; id: string }
}

const FarcasterDistributionPage = ({
  params: { spaceId },
}: AdSpacePageProps) => {
  const imageLink = `${baseURL}/api/ad/${spaceId}/image`
  const externalUrlLink = `${baseURL}/api/ad/${spaceId}/link`

  return (
    <div className="flex w-full flex-col gap-2">
      <Card>
        <CardHeader className="">
          <CardTitle className="font-body">Distribution on the web</CardTitle>
          <CardDescription className="font-body">
            This is your Ad Image permalink. Copy and share this ad anywhere.
          </CardDescription>
          <CopiableInput text={imageLink} />
          <CardDescription className="font-body">
            This is your Ad external url perma link
          </CardDescription>
          <CopiableInput text={externalUrlLink} />
        </CardHeader>
      </Card>
    </div>
  )
}

export default FarcasterDistributionPage

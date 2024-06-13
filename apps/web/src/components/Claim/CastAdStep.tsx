import classNames from 'classnames'
import { StepsUtils } from '../HorizontalSteps'
import useCastAd from './hooks/useCastAd'
import useCurrentCast from './hooks/useCurrentCast'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { Button } from '../ui/button'

const CastAdStep = ({ spaceId, next }: { spaceId: string } & StepsUtils) => {
  const { cast, loading: casting } = useCastAd(spaceId)
  const { currentCast, refetch, isLoading } = useCurrentCast(spaceId)

  return (
    <div>
      <div className="grid grid-cols-4">
        <div className="col-span-2 col-start-2">
          <Card>
            <CardHeader>
              <CardTitle>Cast Ad</CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className={classNames(
                  'flex flex-row items-center gap-2 rounded-md border p-2 font-body',
                  {
                    'border-[#8A63D1]': currentCast,
                    'opacity-75': !currentCast,
                  },
                )}
              >
                <svg
                  width="1000"
                  height="1000"
                  viewBox="0 0 1000 1000"
                  className="aspect-square h-8 w-8 fill-[#8A63D1]"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M257.778 155.556H742.222V844.445H671.111V528.889H670.414C662.554 441.677 589.258 373.333 500 373.333C410.742 373.333 337.446 441.677 329.586 528.889H328.889V844.445H257.778V155.556Z" />
                  <path d="M128.889 253.333L157.778 351.111H182.222V746.667C169.949 746.667 160 756.616 160 768.889V795.556H155.556C143.283 795.556 133.333 805.505 133.333 817.778V844.445H382.222V817.778C382.222 805.505 372.273 795.556 360 795.556H355.556V768.889C355.556 756.616 345.606 746.667 333.333 746.667H306.667V253.333H128.889Z" />
                  <path d="M675.556 746.667C663.283 746.667 653.333 756.616 653.333 768.889V795.556H648.889C636.616 795.556 626.667 805.505 626.667 817.778V844.445H875.556V817.778C875.556 805.505 865.606 795.556 853.333 795.556H848.889V768.889C848.889 756.616 838.94 746.667 826.667 746.667V351.111H851.111L880 253.333H702.222V746.667H675.556Z" />
                </svg>
                {currentCast ? (
                  <p className="text-sm">
                    https://warpcast.com/{currentCast.author.display_name}/
                    {currentCast.hash?.substring(0, 10)}
                  </p>
                ) : isLoading ? (
                  <p>...</p>
                ) : (
                  <p>Nothing casted yet</p>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button
                disabled={Boolean(currentCast) || casting || isLoading}
                onClick={() => {
                  cast(undefined, {
                    onSuccess: () => {
                      refetch()
                    },
                  })
                }}
                loading={casting}
                className="flex w-full flex-row justify-center gap-2 bg-[#8A63D1] font-body hover:bg-[#8A63D1] hover:brightness-90"
              >
                Cast Ad now
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="flex flex-row justify-end">
        <Button disabled={!currentCast} onClick={next}>
          Next
        </Button>
      </div>
    </div>
  )
}

export default CastAdStep

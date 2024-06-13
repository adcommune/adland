import CastAdStep from './CastAdStep'
import CastVerificationStep from './CastVerificationStep'
import HorizontalSteps, { Step } from '../HorizontalSteps'
import { Card, CardContent, CardHeader } from '../ui/card'

const ClaimCampaignSteps = ({ spaceId }: { spaceId: string }) => {
  const steps: Step[] = [
    {
      id: '01',
      name: 'Cast',
      renderStep: (utils) => () => <CastAdStep spaceId={spaceId} {...utils} />,
    },
    {
      id: '02',
      name: 'Claim',
      renderStep: (utils) => () => (
        <CastVerificationStep spaceId={spaceId} {...utils} />
      ),
    },
  ]

  return (
    <Card className="mt-4">
      <CardHeader></CardHeader>
      <CardContent>
        <HorizontalSteps
          steps={steps}
          renderSuccess={() => {
            return (
              <div>
                <p>Congratulations !</p>
              </div>
            )
          }}
        />
      </CardContent>
    </Card>
  )
}

export default ClaimCampaignSteps

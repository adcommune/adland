import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card'

const HoverCardInfo = ({
  text,
  children,
}: {
  text: string
  children: React.ReactNode
}) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent>
        <p className="text-xs text-gray-600">{text}</p>
      </HoverCardContent>
    </HoverCard>
  )
}

export default HoverCardInfo

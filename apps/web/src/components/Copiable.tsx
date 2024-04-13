import { CheckIcon, Copy } from 'lucide-react'
import { Button } from './ui/button'
import { useCopyToClipboard } from '@/hooks/useClipboard'

const Copiable = ({ text }: { text: string }) => {
  const [copiedText, copy] = useCopyToClipboard()

  return (
    <Button
      onClick={() => copy(text)}
      size="icon"
      variant="outline"
      className="h-full opacity-0 transition-opacity group-hover:opacity-100"
    >
      {copiedText === text ? (
        <CheckIcon className="h-3 w-3 fill-green-700" />
      ) : (
        <Copy className="h-3 w-3" />
      )}
    </Button>
  )
}

export default Copiable

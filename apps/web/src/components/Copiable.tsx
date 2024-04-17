import { CheckIcon, Copy } from 'lucide-react'
import { Button } from './ui/button'
import { useCopyToClipboard } from '@/hooks/useClipboard'
import classNames from 'classnames'

const Copiable = ({
  text,
  visible = false,
}: {
  text: string
  visible?: boolean
}) => {
  const [copiedText, copy] = useCopyToClipboard()

  return (
    <Button
      onClick={() => copy(text)}
      size="icon"
      variant="outline"
      className={classNames('aspect-square h-full', {
        'opacity-0 transition-opacity group-hover:opacity-100': !visible,
      })}
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

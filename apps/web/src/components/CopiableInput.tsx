import Copiable from './Copiable'
import { Input } from './ui/input'

type CopiableInputProps = {
  text: string
  label?: string
}

const CopiableInput = ({ text, label }: CopiableInputProps) => {
  return (
    <div className="flex w-full flex-row items-center justify-center gap-2">
      {label && <p className="text-nowrap font-body">{label}</p>}
      <Input
        className="h-full flex-grow cursor-default text-opacity-100 disabled:opacity-100"
        disabled
        placeholder={text}
      />
      <Copiable visible text={text} />
    </div>
  )
}

export default CopiableInput

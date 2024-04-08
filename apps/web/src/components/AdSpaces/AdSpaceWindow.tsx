import { Transition } from '@headlessui/react'
import classNames from 'classnames'

const AdSpaceWindow = ({ imageSrc, imageAlt, name, open, onClick }: any) => {
  return (
    <div
      onClick={onClick}
      className={classNames(
        'relative min-h-[200px] select-none bg-white/5 p-4 transition-all hover:cursor-pointer hover:bg-white hover:bg-opacity-10 hover:transition-all sm:p-5',
        {},
      )}
    >
      <div className="flex h-full flex-col justify-center">
        <Transition
          show={open}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="absolute left-0 flex h-full w-full flex-col items-center justify-center"
        >
          <div className="h-full w-full text-lg font-bold text-white">
            {name}
          </div>
        </Transition>
        <Transition
          show={!open}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <img
            className="h-full w-full object-contain transition duration-300 ease-in"
            src={imageSrc}
            alt={imageAlt}
            width={158}
            height={48}
          />
        </Transition>
      </div>
    </div>
  )
}

export default AdSpaceWindow

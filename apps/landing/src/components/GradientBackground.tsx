import classNames from 'classnames'

const GradientBackground = () => {
  const blur = false
  return (
    <div
      className={classNames(
        'absolute top-0 -z-10 h-full w-full overflow-hidden bg-gradient-to-br from-accent via-secondary to-primary',
        {
          'blur-[300px]': blur,
        },
      )}
    >
      {/* <div className={'h-[1000px] rotate-[20deg] rounded-full bg-neutral '} /> */}
      {/* <div className="absolute right-0 h-1/2 w-1/2 rounded-full bg-neutral" /> */}
      <div className="absolute -right-1/3 top-1/4 h-full w-1/2 rounded-full bg-primary blur-3xl" />
      <div className="absolute -bottom-44 right-1/3 h-1/2 w-[60%] rotate-12 rounded-full bg-accent blur-3xl" />
    </div>
  )
}

export default GradientBackground

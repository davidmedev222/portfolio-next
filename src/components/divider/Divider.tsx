import clsx from 'clsx'

interface Props {
  direction: 'horizontal' | 'vertical'
  className?: string
}

function Divider({ direction, className }: Props) {
  const classes = {
    horizontal: clsx('h-[2px] w-full rounded-2xl bg-violet-300', className),
    vertical: clsx('h-7 w-0.5 rounded-2xl bg-violet-300', className)
  }

  if (direction === 'vertical') return <hr className={classes.vertical} />

  return <hr className={classes.horizontal} />
}

export default Divider

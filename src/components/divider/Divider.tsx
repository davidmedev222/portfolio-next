import clsx from 'clsx'

interface Props {
  direction: 'horizontal' | 'vertical'
  color: 'box' | 'violet'
  className?: string
}

function Divider({ direction, color, className }: Props) {
  const classes = {
    horizontal: clsx(
      'h-[1px] w-full rounded-2xl md:h-[3px]',
      color === 'box' && 'bg-box',
      color === 'violet' && 'bg-violet-300',
      className
    ),
    vertical: clsx('h-7 w-0.5 rounded-2xl bg-violet-300', className)
  }

  if (direction === 'vertical') return <hr className={classes.vertical} />

  return <hr className={classes.horizontal} />
}

export default Divider

import clsx from 'clsx'

interface Props {
  direction: 'horizontal' | 'vertical'
  color: 'box' | 'violet' | 'dark'
  className?: string
}

function Divider({ direction, color, className }: Props) {
  const classes = {
    horizontal: clsx(
      'h-[1px] w-full rounded-2xl md:h-[3px]',
      color === 'box' && 'bg-box dark:bg-violet-950',
      color === 'violet' && 'bg-violet-300 dark:bg-violet-950',
      color === 'dark' && 'bg-violet-950/30 dark:bg-violet-300/30',
      className
    ),
    vertical: clsx('h-7 w-0.5 rounded-2xl bg-violet-300 dark:bg-violet-950', className)
  }

  if (direction === 'vertical') return <div className={classes.vertical} />

  return <div className={classes.horizontal} />
}

export default Divider

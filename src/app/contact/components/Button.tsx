import clsx from 'clsx'

interface Props {
  children: React.ReactNode
  className: string
}

function Button({ children, className }: Props) {
  const classes = clsx(
    'rounded-3xl bg-black py-[18px] text-center text-sm text-white shadow-md shadow-black/25 transition-colors duration-300 hover:bg-violet-950 hover:text-violet-200 dark:bg-violet-950 dark:hover:bg-violet-500 dark:hover:text-white md:rounded-full md:py-5 md:text-lg',
    className
  )

  return <button className={classes}>{children}</button>
}

export default Button

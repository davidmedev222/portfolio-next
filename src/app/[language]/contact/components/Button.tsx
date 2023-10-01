import clsx from 'clsx'

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: React.ReactNode
  className: string
}

function Button({ children, className, ...rest }: Props) {
  const classes = clsx(
    'rounded-3xl bg-black py-[18px] text-center text-sm text-white shadow-md shadow-black/25 transition-colors duration-300 hover:bg-violet-950 hover:text-violet-200 disabled:!bg-violet-200/25 disabled:!text-gray-700 dark:bg-violet-950 dark:hover:bg-violet-500 dark:hover:text-white md:rounded-full md:py-5 md:text-lg',
    className
  )

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  )
}

export default Button

import clsx from 'clsx'

interface Props {
  children: React.ReactNode
  className?: string
}

function Paragraph({ children, className }: Props) {
  const classes = clsx('text-sm md:text-lg', className)

  return <p className={classes}>{children}</p>
}

export default Paragraph

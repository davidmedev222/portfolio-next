import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { HTMLAttributeAnchorTarget } from 'react'

interface Props extends LinkProps {
  children: React.ReactNode
  target: HTMLAttributeAnchorTarget
  className: string
}

function SocialMediaLink({ children, target, className, ...rest }: Props) {
  const classes = clsx(
    'block rounded-xl bg-box py-[18px] text-sm shadow-md shadow-black/25 transition-colors duration-300 hover:bg-violet-300 dark:bg-violet-950 dark:hover:bg-violet-500 lg:py-8 lg:text-xl',
    className
  )

  return (
    <Link className={classes} target={target} {...rest}>
      {children}
    </Link>
  )
}

export default SocialMediaLink

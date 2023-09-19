import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

interface Props extends LinkProps {
  children: React.ReactNode
}

function MenuLink({ children, ...rest }: Props) {
  const pathname = usePathname()

  const classes = clsx(
    'rounded-full bg-box px-8 py-2 text-lg uppercase transition-colors duration-300 hover:bg-violet-300',
    pathname === rest.href && 'bg-violet-300'
  )

  return (
    <Link {...rest} className={classes}>
      {children}
    </Link>
  )
}

export default MenuLink

import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

interface Props extends LinkProps {
  children: React.ReactNode
}

function MenuLink({ children, ...rest }: Props) {
  const pathname = usePathname().split('/')[2]
  // eslint-disable-next-line @typescript-eslint/no-base-to-string
  const href = rest.href.toString().split('/')[1]
  const isHomePathname = pathname === undefined && href === ''
  const isActivePathname = isHomePathname || pathname === href

  const classes = clsx(
    'rounded-full px-8 py-2 text-lg uppercase text-gray-700 transition-colors duration-300 hover:bg-violet-300 hover:text-black dark:hover:bg-violet-950 dark:hover:text-white',
    isActivePathname && 'bg-violet-300 !text-black dark:bg-violet-950 dark:!text-white'
  )

  return (
    <Link {...rest} className={classes}>
      {children}
    </Link>
  )
}

export default MenuLink

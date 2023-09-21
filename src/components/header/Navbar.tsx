'use client'
import { languageEN } from '@/utils/const'
import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

function Navbar() {
  const classes = {
    nav: clsx('hidden lg:block'),
    items: clsx('flex gap-x-1.5 text-sm uppercase')
  }

  return (
    <nav className={classes.nav}>
      <ul className={classes.items}>
        {languageEN.header.links.map((link) => (
          <li key={link.id}>
            <NavLink href={link.href}>{link.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

interface Props extends LinkProps {
  children: React.ReactNode
}

function NavLink({ children, ...rest }: Props) {
  const pathname = usePathname()
  const classes = clsx(
    'rounded-full px-4 py-1 transition-colors duration-300 hover:bg-box',
    pathname === rest.href && 'bg-box shadow-md shadow-black/25'
  )

  return (
    <Link className={classes} {...rest}>
      {children}
    </Link>
  )
}

export default Navbar

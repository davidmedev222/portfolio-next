'use client'
import { Header } from '@/models'
import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

interface NavbarProps {
  links: Header['links']
}

function Navbar({ links }: NavbarProps) {
  const classes = {
    nav: clsx('hidden lg:block'),
    items: clsx('flex gap-x-1.5 text-sm uppercase')
  }

  return (
    <nav className={classes.nav}>
      <ul className={classes.items}>
        {links.map((link) => (
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
    'rounded-full px-4 py-1 text-gray-700 transition-colors duration-300 hover:bg-violet-300 hover:text-black dark:hover:bg-violet-950 dark:hover:text-white',
    pathname === rest.href && 'bg-violet-300 !text-black shadow-md shadow-black/25 dark:bg-violet-950 dark:!text-white'
  )

  return (
    <Link className={classes} {...rest}>
      {children}
    </Link>
  )
}

export default Navbar

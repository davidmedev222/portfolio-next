'use client'
import { CloseIcon, Divider, MenuIcon } from '@/components'
import { useToggle } from '@/hooks'
import { Header } from '@/models'
import clsx from 'clsx'
import { Fragment } from 'react'
import MenuLink from './MenuLink'

interface Props {
  links: Header['links']
}

function HamburgerMenu({ links }: Props) {
  const { state: isOpen, toggleState: toggleHamburgerMenu } = useToggle()

  const classes = {
    backdrop: clsx(
      'pointer-events-none fixed left-0 top-0 h-full w-full bg-black/0 transition-colors duration-300 lg:hidden',
      isOpen && 'pointer-events-auto bg-black/50 dark:bg-black/80'
    ),
    menu: clsx('translate-x-full transition-transform duration-300', isOpen && '!translate-x-0'),
    links: clsx('flex flex-col items-center justify-center gap-y-6 bg-box p-6 dark:bg-black'),
    close: clsx('mx-auto mt-8 h-12 w-12 cursor-pointer fill-white')
  }

  return (
    <>
      <button className='lg:hidden' onClick={toggleHamburgerMenu}>
        <MenuIcon className='h-[18px] w-[26px] fill-black dark:fill-white' />
      </button>
      <div className={classes.backdrop}>
        <div className={classes.menu}>
          <div className={classes.links}>
            {links.map((link, index) => (
              <Fragment key={link.id}>
                <MenuLink key={link.id} onClick={toggleHamburgerMenu} href={link.href}>
                  {link.title}
                </MenuLink>
                {index !== links.length - 1 && <Divider className='md:h-[1px]' color='violet' direction='horizontal' />}
              </Fragment>
            ))}
          </div>
          <CloseIcon onClick={toggleHamburgerMenu} className={classes.close} />
        </div>
      </div>
    </>
  )
}

export default HamburgerMenu

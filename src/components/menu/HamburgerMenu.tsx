'use client'
import { CloseIcon, Divider, MenuIcon } from '@/components'
import { useToggle } from '@/hooks'
import { Routes } from '@/utils/const'
import clsx from 'clsx'
import MenuLink from './MenuLink'

function HamburgerMenu() {
  const { state: isOpen, toggleState: toggleHamburgerMenu } = useToggle()

  const classes = {
    backdrop: clsx(
      'pointer-events-none fixed left-0 top-0 h-full w-full bg-black/0 transition-colors duration-300 lg:hidden',
      isOpen && 'pointer-events-auto bg-black/50'
    ),
    menu: clsx('translate-x-full transition-transform duration-300', isOpen && '!translate-x-0'),
    links: clsx('flex flex-col items-center justify-center gap-y-6 bg-box p-6'),
    close: clsx('mx-auto mt-8 h-12 w-12 cursor-pointer fill-white')
  }

  return (
    <>
      <button className='lg:hidden' onClick={toggleHamburgerMenu}>
        <MenuIcon className='h-5 w-7' />
      </button>
      <div className={classes.backdrop}>
        <div className={classes.menu}>
          <div className={classes.links}>
            <MenuLink onClick={toggleHamburgerMenu} href={Routes.home}>
              Home
            </MenuLink>
            <Divider direction='horizontal' />
            <MenuLink onClick={toggleHamburgerMenu} href={Routes.projects}>
              Proyects
            </MenuLink>
            <Divider direction='horizontal' />
            <MenuLink onClick={toggleHamburgerMenu} href={Routes.about}>
              About Me
            </MenuLink>
            <Divider direction='horizontal' />
            <MenuLink onClick={toggleHamburgerMenu} href={Routes.contact}>
              Contact
            </MenuLink>
          </div>
          <CloseIcon onClick={toggleHamburgerMenu} className={classes.close} />
        </div>
      </div>
    </>
  )
}

export default HamburgerMenu

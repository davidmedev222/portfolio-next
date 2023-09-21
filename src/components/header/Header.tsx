'use client'
import { Divider, DropdownLanguages, DropdownTheme, HamburgerMenu, LogoIcon, Navbar } from '@/components'
import clsx from 'clsx'
import { useEffect, useState } from 'react'

const minScroll = 25

function Header() {
  const [scrolling, setScrolling] = useState(false)

  const classes = {
    header: clsx(
      'fixed inset-0 z-10 flex h-fit w-full max-w-screen-xl items-center justify-between gap-3 px-4 py-3 transition-colors duration-150 lg:px-16 lg:py-5 xl:mx-auto',
      scrolling && 'bg-white'
    ),
    logo: clsx('mr-auto h-8 w-24 lg:h-[52px] lg:w-[164px]')
  }

  const handleScroll = () => {
    if (window.scrollY > minScroll) {
      setScrolling(true)
    } else {
      setScrolling(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={classes.header}>
      <LogoIcon className={classes.logo} />
      <Navbar />
      <Divider direction='vertical' className='hidden lg:block' />
      <DropdownLanguages />
      <DropdownTheme />
      <HamburgerMenu />
    </header>
  )
}

export default Header

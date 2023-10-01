'use client'
import { Divider, DropdownLanguages, DropdownTheme, HamburgerMenu, LogoIcon, Navbar } from '@/components'
import { Header as HeaderType } from '@/models'
import { Routes } from '@/utils/const'
import clsx from 'clsx'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface Props {
  links: HeaderType['links']
  themes: HeaderType['themes']
}

const minScroll = 25

function Header({ links, themes }: Props) {
  const [scrolling, setScrolling] = useState(false)

  const classes = {
    header: clsx(
      'fixed inset-0 z-10 h-fit w-full transition-colors duration-150',
      scrolling && 'bg-white dark:bg-black'
    ),
    content: clsx('container-base flex items-center justify-between gap-3 py-3 lg:py-5'),
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
      <div className={classes.content}>
        <Link href={Routes.home} className={classes.logo}>
          <LogoIcon className='fill-black dark:fill-white' />
        </Link>
        <Navbar links={links} />
        <Divider color='violet' direction='vertical' className='hidden lg:block' />
        <DropdownLanguages />
        <DropdownTheme themes={themes} />
        <HamburgerMenu links={links} />
      </div>
    </header>
  )
}

export default Header

'use client'
import { DarkIcon, Divider, LightIcon, SystemIcon } from '@/components'
import { useToggle } from '@/hooks'
import { Header } from '@/models'
import clsx from 'clsx'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface Props {
  themes: Header['themes']
}

function DropdownTheme({ themes }: Props) {
  const [isMounted, setIsMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const { state: isOpen, toggleState } = useToggle()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div className='h-6 w-8 rounded-lg bg-box shadow-md shadow-black/25 dark:bg-violet-950' />
  }

  const handleToggleTheme = (theme: string) => () => {
    setTheme(theme)
    toggleState()
  }

  const classes = {
    dropdown: clsx('relative flex select-none items-center justify-center'),
    optionMobile: clsx(
      'h-6 w-8 cursor-pointer rounded-lg bg-box shadow-md shadow-black/25 transition-colors duration-300 hover:bg-violet-300 data-[active=true]:bg-violet-300 dark:bg-violet-950 dark:hover:bg-violet-500 dark:data-[active=true]:bg-violet-500'
    ),
    optionsMobile: clsx('absolute top-[calc(100%+6px)] grid place-items-center gap-y-1.5 lg:hidden'),
    optionsDesktop: clsx(
      'absolute right-0 top-[calc(100%+16px)] hidden w-44 rounded-3xl bg-box p-[18px] shadow-md shadow-black/25 dark:bg-violet-950 lg:grid lg:gap-y-2.5'
    ),
    optionDesktop: clsx(
      'ml-[18px] mr-auto flex h-8 cursor-pointer items-center gap-x-[18px] rounded-full px-4 text-xs transition-colors duration-300 hover:bg-violet-300 data-[active=true]:bg-violet-300 data-[theme=true]:bg-violet-300 dark:hover:bg-violet-500 dark:data-[theme=true]:bg-violet-500'
    )
  }

  return (
    <>
      <div className={classes.dropdown}>
        <button data-active={isOpen} className={classes.optionMobile} onClick={toggleState}>
          {theme === 'light' && <LightIcon className='h-full w-full fill-black px-1.5 py-0.5 dark:fill-white' />}
          {theme === 'dark' && (
            <DarkIcon className='h-full w-full -rotate-[25deg] fill-black px-2.5 py-0.5 dark:fill-white' />
          )}
          {theme === 'system' && <SystemIcon className='h-full w-full fill-black px-1.5 py-1 dark:fill-white' />}
        </button>
        {isOpen && (
          <div className={classes.optionsMobile}>
            {theme !== 'light' && (
              <button className={classes.optionMobile} onClick={handleToggleTheme('light')}>
                <LightIcon className='h-full w-full fill-black px-1.5 py-0.5 dark:fill-white' />
              </button>
            )}
            {theme !== 'dark' && (
              <button className={classes.optionMobile} onClick={handleToggleTheme('dark')}>
                <DarkIcon className='h-full w-full -rotate-[25deg] fill-black px-2.5 py-0.5 dark:fill-white' />
              </button>
            )}
            {theme !== 'system' && (
              <button className={classes.optionMobile} onClick={handleToggleTheme('system')}>
                <SystemIcon className='h-full w-full fill-black px-1.5 py-1 dark:fill-white' />
              </button>
            )}
          </div>
        )}
        {isOpen && (
          <div className={classes.optionsDesktop}>
            <button
              data-theme={theme === 'light'}
              className={classes.optionDesktop}
              onClick={handleToggleTheme('light')}
            >
              <LightIcon className='h-full w-full fill-black py-1 dark:fill-white' /> {themes.light}
            </button>
            <Divider className='dark:!bg-violet-300 lg:h-[1px]' color='violet' direction='horizontal' />
            <button data-theme={theme === 'dark'} className={classes.optionDesktop} onClick={handleToggleTheme('dark')}>
              <DarkIcon className='h-full w-full -rotate-[25deg] fill-black py-1.5 dark:fill-white' /> {themes.dark}
            </button>
            <Divider className='dark:!bg-violet-300 lg:h-[1px]' color='violet' direction='horizontal' />
            <button
              data-theme={theme === 'system'}
              className={classes.optionDesktop}
              onClick={handleToggleTheme('system')}
            >
              <SystemIcon className='h-full w-full fill-black py-2 dark:fill-white' /> {themes.system}
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default DropdownTheme

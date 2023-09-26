'use client'
import { DarkIcon, Divider, LightIcon, SystemIcon } from '@/components'
import { useToggle } from '@/hooks'
import clsx from 'clsx'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

function DropdownTheme() {
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
      'h-6 w-8 cursor-pointer rounded-lg bg-box shadow-md shadow-black/25 transition-colors duration-300 hover:bg-violet-300 dark:bg-violet-950 dark:hover:bg-violet-500'
    ),
    optionActive: clsx(isOpen && 'bg-violet-300 dark:bg-violet-500'),
    optionsMobile: clsx('absolute top-[calc(100%+6px)] grid place-items-center gap-y-1.5 lg:hidden'),
    optionsDesktop: clsx(
      'absolute right-0 top-[calc(100%+16px)] hidden w-44 rounded-3xl bg-box p-[18px] shadow-md shadow-black/25 dark:bg-violet-950 lg:grid lg:gap-y-2.5'
    ),
    optionDesktop: {
      default: clsx(
        'ml-[18px] mr-auto flex h-8 cursor-pointer items-center gap-x-[18px] rounded-full px-4 text-xs transition-colors duration-300 hover:bg-violet-300 dark:hover:bg-violet-500'
      ),
      system: clsx(theme === 'system' && 'bg-violet-300 dark:bg-violet-500'),
      dark: clsx(theme === 'dark' && 'bg-violet-300 dark:bg-violet-500'),
      light: clsx(theme === 'light' && 'bg-violet-300 dark:bg-violet-500')
    }
  }

  return (
    <>
      <div className={classes.dropdown}>
        <button className={`${classes.optionMobile} ${classes.optionActive}`} onClick={toggleState}>
          {theme === 'system' && <SystemIcon className='h-full w-full fill-black px-1.5 py-1 dark:fill-white' />}
          {theme === 'dark' && <DarkIcon className='h-full w-full fill-black px-2.5 py-0.5 dark:fill-white' />}
          {theme === 'light' && <LightIcon className='h-full w-full fill-black px-1.5 py-0.5 dark:fill-white' />}
        </button>
        {isOpen && (
          <div className={classes.optionsMobile}>
            {theme !== 'system' && (
              <button className={classes.optionMobile} onClick={handleToggleTheme('system')}>
                <SystemIcon className='h-full w-full fill-black px-1.5 py-1 dark:fill-white' />
              </button>
            )}
            {theme !== 'dark' && (
              <button className={classes.optionMobile} onClick={handleToggleTheme('dark')}>
                <DarkIcon className='h-full w-full fill-black px-2.5 py-0.5 dark:fill-white' />
              </button>
            )}
            {theme !== 'light' && (
              <button className={classes.optionMobile} onClick={handleToggleTheme('light')}>
                <LightIcon className='h-full w-full fill-black px-1.5 py-0.5 dark:fill-white' />
              </button>
            )}
          </div>
        )}
        {isOpen && (
          <div className={classes.optionsDesktop}>
            <button
              className={`${classes.optionDesktop.default} ${classes.optionDesktop.system}`}
              onClick={handleToggleTheme('system')}
            >
              <SystemIcon className='h-full w-full fill-black py-2 dark:fill-white' /> System
            </button>
            <Divider className='dark:!bg-violet-300 lg:h-[1px]' color='violet' direction='horizontal' />
            <button
              className={`${classes.optionDesktop.default} ${classes.optionDesktop.dark}`}
              onClick={handleToggleTheme('dark')}
            >
              <DarkIcon className='h-full w-full fill-black py-1.5 dark:fill-white' /> Dark
            </button>
            <Divider className='dark:!bg-violet-300 lg:h-[1px]' color='violet' direction='horizontal' />
            <button
              className={`${classes.optionDesktop.default} ${classes.optionDesktop.light}`}
              onClick={handleToggleTheme('light')}
            >
              <LightIcon className='h-full w-full fill-black py-1 dark:fill-white' /> Light
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default DropdownTheme

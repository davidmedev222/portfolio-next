'use client'
import { DarkIcon, Divider, LightIcon, SystemIcon } from '@/components'
import { useToggle } from '@/hooks'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import clsx from 'clsx'

function DropdownTheme() {
  const [ref] = useAutoAnimate()
  const { state: isOpen, toggleState: toggleTheme } = useToggle()

  const classes = {
    dropdown: clsx('relative select-none'),
    optionMobile: clsx(
      'flex cursor-pointer items-center justify-center gap-x-0.5 rounded-full bg-box px-1 py-0.5 shadow-md shadow-black/25 transition-colors duration-300 hover:bg-violet-300'
    ),
    optionsMobile: clsx('absolute top-[calc(100%+6px)] grid gap-y-1.5 lg:hidden'),
    optionsDesktop: clsx(
      'absolute right-0 top-[calc(100%+16px)] grid hidden w-44 place-items-center gap-y-1 rounded-3xl bg-box p-4 lg:grid'
    ),
    optionDesktop: clsx(
      'flex w-28 cursor-pointer items-center gap-x-4 rounded-full bg-violet-300 px-3 py-1 text-sm shadow-md shadow-black/25 transition-colors duration-300 hover:bg-violet-300'
    )
  }

  return (
    <>
      <div ref={ref} className={classes.dropdown}>
        <div className={classes.optionMobile} onClick={toggleTheme}>
          <LightIcon className='h-6 w-6' />
        </div>
        {isOpen && (
          <div className={classes.optionsMobile}>
            <div className={classes.optionMobile} onClick={toggleTheme}>
              <DarkIcon className='h-6 w-6' />
            </div>
            <div className={classes.optionMobile} onClick={toggleTheme}>
              <SystemIcon className='h-6 w-6' />
            </div>
          </div>
        )}
        {isOpen && (
          <div className={classes.optionsDesktop}>
            <div className={classes.optionDesktop} onClick={toggleTheme}>
              <LightIcon className='h-6 w-6' /> Light
            </div>
            <Divider direction='horizontal' />
            <div className={classes.optionDesktop} onClick={toggleTheme}>
              <DarkIcon className='h-6 w-6' /> Dark
            </div>
            <Divider direction='horizontal' />
            <div className={classes.optionDesktop} onClick={toggleTheme}>
              <SystemIcon className='h-6 w-6' /> System
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default DropdownTheme

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
      'flex cursor-pointer items-center justify-center gap-x-0.5 rounded-[7px] bg-box px-2 py-1 shadow-md shadow-black/25 transition-colors duration-300 hover:bg-violet-300'
    ),
    optionsMobile: clsx('absolute top-[calc(100%+6px)] grid gap-y-1.5 lg:hidden'),
    optionsDesktop: clsx(
      'absolute right-0 top-[calc(100%+16px)] grid hidden w-44 place-items-center gap-y-2.5 rounded-3xl bg-box p-4 lg:grid'
    ),
    optionDesktop: clsx(
      'flex w-28 cursor-pointer items-center gap-x-4 rounded-full bg-violet-300 px-4 py-1.5 text-sm shadow-md shadow-black/25 transition-colors duration-300 hover:bg-violet-300'
    )
  }

  return (
    <>
      <div ref={ref} className={classes.dropdown}>
        <div className={classes.optionMobile} onClick={toggleTheme}>
          <LightIcon className='h-[22px] w-[22px]' />
        </div>
        {isOpen && (
          <div className={classes.optionsMobile}>
            <div className={classes.optionMobile} onClick={toggleTheme}>
              <DarkIcon className='h-5 w-[13px]' />
            </div>
            <div className={classes.optionMobile} onClick={toggleTheme}>
              <SystemIcon className='h-4 w-6' />
            </div>
          </div>
        )}
        {isOpen && (
          <div className={classes.optionsDesktop}>
            <div className={classes.optionDesktop} onClick={toggleTheme}>
              <LightIcon className='h-[22px] w-[22px]' /> Light
            </div>
            <Divider color='violet' direction='horizontal' />
            <div className={classes.optionDesktop} onClick={toggleTheme}>
              <DarkIcon className='h-5 w-[13px]' /> Dark
            </div>
            <Divider color='violet' direction='horizontal' />
            <div className={classes.optionDesktop} onClick={toggleTheme}>
              <SystemIcon className='h-4 w-6' /> System
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default DropdownTheme

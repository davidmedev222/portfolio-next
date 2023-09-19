'use client'
import { useToggle } from '@/hooks'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import clsx from 'clsx'
import Image from 'next/image'

function DropdownLanguages() {
  const [ref] = useAutoAnimate()
  const { state: isOpen, toggleState: toggleLanguages } = useToggle()

  const classes = {
    dropdown: clsx('relative select-none'),
    option: clsx(
      'flex cursor-pointer items-center justify-center gap-x-0.5 rounded-full bg-box px-1 py-0.5 text-base shadow-md shadow-black/25 transition-colors duration-300 hover:bg-violet-300'
    ),
    options: clsx('absolute top-[calc(100%+6px)] grid gap-y-1.5')
  }

  return (
    <div ref={ref} className={classes.dropdown}>
      <div className={classes.option} onClick={toggleLanguages}>
        <Image width={22} height={22} src='/assets/logo-ar.png' alt='Icono del pais Argentina' /> AR
      </div>
      {isOpen && (
        <div className={classes.options}>
          <div className={classes.option} onClick={toggleLanguages}>
            <Image width={22} height={22} src='/assets/logo-br.png' alt='Icono del pais Brasil' /> BR
          </div>
          <div className={classes.option} onClick={toggleLanguages}>
            <Image width={22} height={22} src='/assets/logo-en.png' alt='Icono del pais Estados Unidos' /> EN
          </div>
        </div>
      )}
    </div>
  )
}

export default DropdownLanguages

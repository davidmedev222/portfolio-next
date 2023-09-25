'use client'
import { useToggle } from '@/hooks'
import clsx from 'clsx'
import Image from 'next/image'

function DropdownLanguages() {
  const { state: isOpen, toggleState: toggleLanguages } = useToggle()

  const classes = {
    dropdown: clsx('relative select-none'),
    option: clsx(
      'flex h-6 cursor-pointer items-center rounded-lg bg-box text-xs shadow-md shadow-black/25 transition-colors duration-300 hover:bg-violet-300 dark:bg-violet-950 dark:hover:bg-violet-500'
    ),
    optionActive: clsx(isOpen && 'bg-violet-300 dark:bg-violet-500'),
    options: clsx('absolute top-[calc(100%+6px)] grid gap-y-1.5')
  }

  return (
    <div className={classes.dropdown}>
      <div className={`${classes.option} ${classes.optionActive}`} onClick={toggleLanguages}>
        <Image width={22} height={22} src='/assets/logo-en.png' alt='Icono del pais Estados Unidos' /> EN
      </div>
      {isOpen && (
        <div className={classes.options}>
          <div className={classes.option} onClick={toggleLanguages}>
            <Image width={22} height={22} src='/assets/logo-br.png' alt='Icono del pais Brasil' /> BR
          </div>
          <div className={classes.option} onClick={toggleLanguages}>
            <Image width={22} height={22} src='/assets/logo-ar.png' alt='Icono del pais Argentina' /> AR
          </div>
        </div>
      )}
    </div>
  )
}

export default DropdownLanguages

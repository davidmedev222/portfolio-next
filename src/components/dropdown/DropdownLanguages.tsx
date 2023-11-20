'use client'
import { useToggle } from '@/hooks'
import { Locale } from '@/models'
import clsx from 'clsx'
import { setCookie } from 'cookies-next'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'

function DropdownLanguages() {
  const { state: isOpen, toggleState: toggleLanguages } = useToggle()
  const pathname = usePathname()
  const router = useRouter()
  const currentLanguage = pathname.split('/')[1]

  const changeLanguage = (locale: Locale) => () => {
    if (!pathname) return '/'
    const segments = pathname.split('/')
    segments[1] = locale
    const newPathname = segments.join('/')
    setCookie('language', locale)
    router.replace(newPathname)
    router.refresh()
  }

  const classes = {
    dropdown: clsx('relative select-none'),
    option: clsx(
      'flex h-6 items-center gap-x-0.5 rounded-full bg-box pl-1 pr-1.5 text-xs uppercase shadow-md shadow-black/25 transition-colors duration-300 hover:bg-violet-300 data-[active=true]:bg-violet-300 dark:bg-violet-950 dark:hover:bg-violet-500 dark:data-[active=true]:bg-violet-500'
    ),
    optionActive: clsx(isOpen && 'bg-violet-300 dark:bg-violet-500'),
    options: clsx('absolute top-[calc(100%+6px)] grid gap-y-1.5')
  }

  return (
    <div className={classes.dropdown}>
      <button data-active={isOpen} className={classes.option} onClick={toggleLanguages}>
        {currentLanguage === 'en' && (
          <Image width={21} height={21} src='/assets/logo-en.png' alt='Icono del pais Estados Unidos' />
        )}
        {currentLanguage === 'es' && (
          <Image width={21} height={21} src='/assets/logo-es.png' alt='Icono del pais Argentina' />
        )}
        {currentLanguage === 'pt' && (
          <Image width={21} height={21} src='/assets/logo-pt.png' alt='Icono del pais Brasil' />
        )}
        {currentLanguage}
      </button>
      {isOpen && (
        <div className={classes.options}>
          {currentLanguage !== 'en' && (
            <button onClick={changeLanguage('en')} className={classes.option}>
              <Image width={21} height={21} src='/assets/logo-en.png' alt='Icono del pais Estados Unidos' /> en
            </button>
          )}
          {currentLanguage !== 'es' && (
            <button onClick={changeLanguage('es')} className={classes.option}>
              <Image width={21} height={21} src='/assets/logo-es.png' alt='Icono del pais Argentina' /> es
            </button>
          )}
          {currentLanguage !== 'pt' && (
            <button onClick={changeLanguage('pt')} className={classes.option}>
              <Image width={21} height={21} src='/assets/logo-pt.png' alt='Icono del pais Brasil' /> pt
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default DropdownLanguages

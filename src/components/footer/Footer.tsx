import { Routes, languageEN } from '@/utils/const'
import Link from 'next/link'
import Divider from '../divider/Divider'
import LogoIcon from '../icons/LogoIcon'

function Footer() {
  return (
    <footer className='bg-gradient-to-t from-violet-400 dark:from-violet-950'>
      <div className='container-base grid gap-y-3.5 py-6 lg:grid-cols-4 lg:gap-y-10 lg:py-10'>
        <Link href={Routes.home} className='mx-auto h-8 w-24 lg:mx-0 lg:h-14 lg:w-44'>
          <LogoIcon className='fill-black dark:fill-white' />
        </Link>
        <ul className='grid justify-start gap-y-2 rounded-3xl border border-violet-950/30 px-8 py-3.5 font-tahoma text-sm dark:border-violet-300/30 lg:gap-y-6 lg:border-none lg:text-lg'>
          <li className='text-gray-700'>{languageEN.footer.categories.info.title}</li>
          {languageEN.footer.categories.info.links.map((link) => (
            <li key={link.id} className='transition-colors duration-200 hover:text-gray-700'>
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <ul className='grid justify-start gap-y-2 rounded-3xl border border-violet-950/30 px-8 py-3.5 font-tahoma text-sm dark:border-violet-300/30 lg:gap-y-6 lg:border-none lg:text-lg'>
          <li className='text-gray-700'>{languageEN.footer.categories.contact.title}</li>
          {languageEN.footer.categories.contact.media.map((link) => (
            <li key={link.id} className='transition-colors duration-200 hover:text-gray-700'>
              <Link href={link.href} target='_blank' rel='noreferrer'>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <Divider color='dark' direction='horizontal' className='col-start-1 col-end-5 row-start-2 hidden lg:block' />
        <p className='mt-6 text-center text-xs text-black/50 dark:text-gray-700 lg:col-start-1 lg:col-end-5 lg:row-start-3 lg:text-lg'>
          {languageEN.footer.copyright}
        </p>
      </div>
    </footer>
  )
}

export default Footer

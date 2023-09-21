import { languageEN } from '@/utils/const'
import Link from 'next/link'
import LogoIcon from '../icons/LogoIcon'

function Footer() {
  return (
    <footer className='bg-gradient-to-t from-violet-400'>
      <div className='mx-auto grid max-w-screen-xl gap-y-3.5 px-4 py-6 lg:grid-cols-4 lg:gap-y-10 lg:px-16 lg:py-10'>
        <LogoIcon className='mx-auto h-8 w-24 fill-black lg:mx-0 lg:h-14 lg:w-44' />
        <ul className='grid gap-y-2 rounded-3xl border border-violet-950/30 px-8 py-3.5 font-tahoma text-sm lg:gap-y-6 lg:border-none lg:text-lg'>
          <li className='text-gray-700'>{languageEN.footer.categories.info.title}</li>
          {languageEN.footer.categories.info.links.map((link) => (
            <li key={link.id} className='transition-colors duration-200 hover:text-gray-700'>
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <ul className='grid gap-y-2 rounded-3xl border border-violet-950/30 px-8 py-3.5 font-tahoma text-sm lg:gap-y-6 lg:border-none lg:text-lg'>
          <li className='text-gray-700'>{languageEN.footer.categories.contact.title}</li>
          {languageEN.footer.categories.contact.media.map((link) => (
            <li key={link.id} className='transition-colors duration-200 hover:text-gray-700'>
              <Link href={link.href} target='_blank' rel='noreferrer'>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <hr className='col-start-1 col-end-5 row-start-2 hidden h-[3px] w-full rounded-2xl bg-violet-950/30 lg:block' />
        <p className='mt-6 text-center text-xs text-black/50 lg:col-start-1 lg:col-end-5 lg:row-start-3 lg:text-lg'>
          {languageEN.footer.copyright}
        </p>
      </div>
    </footer>
  )
}

export default Footer

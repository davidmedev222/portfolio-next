import { Routes } from '@/utils/const'
import Link from 'next/link'
import LogoIcon from '../icons/LogoIcon'

function Footer() {
  return (
    <footer className='bg-gradient-to-t from-violet-400'>
      <div className='mx-auto grid max-w-screen-xl gap-y-3.5 px-4 py-6 lg:grid-cols-4 lg:gap-y-10 lg:px-16 lg:py-10'>
        <LogoIcon className='mx-auto h-8 w-24 fill-black lg:mx-0 lg:h-14 lg:w-44' />
        <ul className='grid gap-y-2 rounded-3xl border border-violet-950/30 px-8 py-3.5 font-tahoma text-sm lg:gap-y-6 lg:border-none lg:text-lg'>
          <li className='text-gray-700'>Info</li>
          <li className='transition-colors duration-200 hover:text-gray-700'>
            <Link href={Routes.home}>Home</Link>
          </li>
          <li className='transition-colors duration-200 hover:text-gray-700'>
            <Link href={Routes.projects}>Projects</Link>
          </li>
          <li className='transition-colors duration-200 hover:text-gray-700'>
            <Link href={Routes.about}>About me</Link>
          </li>
          <li className='transition-colors duration-200 hover:text-gray-700'>
            <Link href={Routes.contact}>Contact</Link>
          </li>
        </ul>
        <ul className='grid gap-y-2 rounded-3xl border border-violet-950/30 px-8 py-3.5 font-tahoma text-sm lg:border-none lg:text-lg'>
          <li className='text-gray-700'>Contact</li>
          <li className='transition-colors duration-200 hover:text-gray-700'>
            <Link target='_blank' href='https://www.linkedin.com/in/davidmedev/' rel='noreferrer'>
              Linkedin
            </Link>
          </li>
          <li className='transition-colors duration-200 hover:text-gray-700'>
            <Link target='_blank' href='https://github.com/davidmedev222' rel='noreferrer'>
              Github
            </Link>
          </li>
          <li className='transition-colors duration-200 hover:text-gray-700'>
            <Link target='_blank' href='https://www.instagram.com/davidmedev/' rel='noreferrer'>
              Instagram
            </Link>
          </li>
        </ul>
        <hr className='col-start-1 col-end-5 row-start-2 hidden h-0.5 w-full rounded-2xl bg-violet-950/30 lg:block' />
        <p className='mt-6 text-center text-xs text-black/50 lg:col-start-1 lg:col-end-5 lg:row-start-3 lg:text-lg'>
          © davidmedev. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer

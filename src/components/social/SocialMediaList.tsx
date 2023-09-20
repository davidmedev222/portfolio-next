import Image from 'next/image'
import ArrowLink from '../icons/ArrowLink'
import SocialMediaLink from './SocialMediaLink'

function SocialMediaList() {
  return (
    <ul className='mx-auto grid max-w-xs gap-8 py-10 md:max-w-none md:grid-cols-3 lg:gap-x-[72px]'>
      <li>
        <SocialMediaLink
          className='flex items-center gap-x-[18px] pl-[92px] pr-4 md:p-6'
          target='_blank'
          href='https://www.linkedin.com/in/davidmedev/'
        >
          <Image
            className='lg:h-10 lg:w-10'
            src='/assets/logo-linkedin.png'
            width={30}
            height={30}
            alt='Icono de red social github'
          />
          Linkedin
          <ArrowLink className='ml-auto h-2.5 w-1.5 lg:h-[18px] lg:w-3' />
        </SocialMediaLink>
      </li>
      <li>
        <SocialMediaLink
          className='flex items-center gap-x-[18px] pl-[92px] pr-4 md:p-6'
          target='_blank'
          href='https://github.com/davidmedev222'
        >
          <Image
            className='lg:h-10 lg:w-10'
            src='/assets/logo-github.png'
            width={30}
            height={30}
            alt='Icono de red social github'
          />
          Github
          <ArrowLink className='ml-auto h-2.5 w-1.5 lg:h-[18px] lg:w-3' />
        </SocialMediaLink>
      </li>
      <li>
        <SocialMediaLink
          className='flex items-center gap-x-[18px] pl-[92px] pr-4 md:p-6'
          target='_blank'
          href='https://www.instagram.com/davidmedev/'
        >
          <Image
            className='lg:h-10 lg:w-10'
            src='/assets/logo-instagram.png'
            width={30}
            height={30}
            alt='Icono de red social github'
          />
          Instagram
          <ArrowLink className='ml-auto h-2.5 w-1.5 lg:h-[18px] lg:w-3' />
        </SocialMediaLink>
      </li>
    </ul>
  )
}

export default SocialMediaList

import { languageEN } from '@/utils/const'
import Image from 'next/image'
import ArrowLink from '../icons/ArrowLink'
import SocialMediaLink from './SocialMediaLink'

function SocialMediaList() {
  return (
    <ul className='mx-auto grid max-w-xs gap-8 py-10 md:max-w-none md:grid-cols-3 md:py-24 lg:gap-x-[72px]'>
      {languageEN.contact.social.media.map((social) => (
        <li key={social.id}>
          <SocialMediaLink
            className='flex items-center gap-x-[18px] pl-[92px] pr-4 md:p-6'
            target='_blank'
            href={social.href}
          >
            <Image src={social.image} width={30} height={30} alt={social.alt} />
            {social.title}
            <ArrowLink className='ml-auto h-2.5 w-1.5 fill-black dark:fill-white lg:h-[18px] lg:w-3' />
          </SocialMediaLink>
        </li>
      ))}
    </ul>
  )
}

export default SocialMediaList

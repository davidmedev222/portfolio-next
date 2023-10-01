import { ArrowLink } from '@/components'
import { Contact } from '@/models'
import GithubIcon from './GithubIcon'
import InstagramIcon from './InstagramIcon'
import LinkedinIcon from './LinkedinIcon'
import SocialMediaLink from './SocialMediaLink'

interface Props {
  social: Contact['social']
}

function SocialMediaList({ social }: Props) {
  return (
    <ul className='mx-auto grid max-w-xs gap-8 py-10 md:max-w-none md:grid-cols-3 md:py-24 lg:gap-x-[72px]'>
      {social.media.map((social) => (
        <li key={social.id}>
          <SocialMediaLink
            className='flex items-center gap-x-[18px] pl-[92px] pr-4 md:p-6'
            target='_blank'
            href={social.href}
          >
            {social.name === 'linkedin' && <LinkedinIcon className='h-8 w-8 fill-black dark:fill-white' />}
            {social.name === 'github' && <GithubIcon className='h-8 w-8 fill-black dark:fill-white' />}
            {social.name === 'instagram' && <InstagramIcon className='h-8 w-8 fill-black dark:fill-white' />}
            {social.title}
            <ArrowLink className='ml-auto h-2.5 w-1.5 fill-black dark:fill-white lg:h-[18px] lg:w-3' />
          </SocialMediaLink>
        </li>
      ))}
    </ul>
  )
}

export default SocialMediaList

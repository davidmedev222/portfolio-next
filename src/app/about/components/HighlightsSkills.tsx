import { ISkill } from '@/models'
import Image from 'next/image'

interface Props {
  skill: ISkill
}

function HighlightsSkills({ skill }: Props) {
  return (
    <section className='mx-auto grid max-w-screen-md gap-y-7 px-4 py-6 md:gap-y-11 md:px-16 md:py-16'>
      <h5 className='text-xs text-gray-700 md:text-lg'>{skill.title}</h5>
      <ul className='flex flex-wrap items-center gap-4 md:gap-8'>
        {skill.logos.map((logo) => (
          <li key={logo.id}>
            <Image
              className='h-9 w-9 object-contain md:h-16 md:w-16'
              src={logo.image}
              width={36}
              height={36}
              alt={logo.alt}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default HighlightsSkills

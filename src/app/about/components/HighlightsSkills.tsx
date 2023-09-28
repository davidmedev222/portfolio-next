import { ThemeImage } from '@/components'
import { ISkill } from '@/models'
import Image from 'next/image'

interface Props {
  skill: ISkill
}

function HighlightsSkills({ skill }: Props) {
  return (
    <section className='container-md grid gap-y-7 py-6 md:gap-y-11 md:py-16'>
      <h5 className='text-sm text-gray-700 md:text-lg'>{skill.title}</h5>
      <ul className='flex flex-wrap items-center gap-4 md:gap-8'>
        {skill.logos.map((logo) => {
          const themeSkills = ['expo', 'cssmodules', 'commitlint', 'swr', 'styledcomponents']
          const themeSkill = logo.title && themeSkills.includes(logo.title)

          return (
            <li key={logo.id}>
              {themeSkill && logo.imageDark && (
                <ThemeImage
                  className='h-9 w-9 object-contain md:h-16 md:w-16'
                  width={64}
                  height={64}
                  srcDark={logo.imageDark}
                  srcLight={logo.image}
                  alt={logo.alt}
                />
              )}
              {!themeSkill && (
                <Image
                  className='h-9 w-9 object-contain md:h-16 md:w-16'
                  src={logo.image}
                  width={64}
                  height={64}
                  alt={logo.alt}
                />
              )}
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default HighlightsSkills

import { Paragraph } from '@/components'
import { languageEN } from '@/utils/const'

function Hero() {
  return (
    <section className='container-base grid text-[min(6vw,54px)] uppercase'>
      <h2 className='py-10 text-center font-benzin'>
        {languageEN.about.name} <span className='font-ego'>{languageEN.about.lastname}</span>
      </h2>
      <Paragraph className='whitespace-pre-line normal-case'>{languageEN.about.paragraph}</Paragraph>
    </section>
  )
}

export default Hero

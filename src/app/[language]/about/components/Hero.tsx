import { Paragraph } from '@/components'

interface Props {
  name: string
  lastname: string
  paragraph: string
}

function Hero({ name, lastname, paragraph }: Props) {
  return (
    <section className='container-md grid text-[min(6vw,54px)] uppercase'>
      <h2 className='py-10 text-center font-benzin'>
        {name} <span className='font-ego'>{lastname}</span>
      </h2>
      <Paragraph className='whitespace-pre-line normal-case'>{paragraph}</Paragraph>
    </section>
  )
}

export default Hero

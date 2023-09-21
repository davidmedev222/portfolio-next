import { ArrowIcon } from '@/components'
import { languageEN } from '@/utils/const'

function Hero() {
  return (
    <section className='relative grid content-center gap-y-8 py-28 text-[min(6vw,64px)] uppercase lg:min-h-screen 2xl:min-h-[65vh]'>
      <h1 className='font-benzin'>{languageEN.home.name}</h1>
      <h2 className='font-ego'>{languageEN.home.role}</h2>
      <ArrowIcon className='absolute inset-x-0 bottom-8 mx-auto hidden h-8 w-[52px] -rotate-90 fill-transparent stroke-black stroke-[0.4px] lg:block' />
    </section>
  )
}

export default Hero

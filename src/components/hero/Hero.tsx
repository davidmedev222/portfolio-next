import { ArrowIcon } from '@/components'

function Hero() {
  return (
    <section className='relative mx-auto grid max-w-screen-xl content-center gap-y-8 px-4 py-28 text-[min(7vw,64px)] uppercase lg:min-h-screen lg:px-16 2xl:min-h-[65vh]'>
      <h1 className='font-benzin'>David Mamani</h1>
      <h2 className='font-ego'>Frontend Developer</h2>
      <ArrowIcon className='absolute inset-x-0 bottom-8 mx-auto hidden h-8 w-[52px] -rotate-90 fill-transparent stroke-black stroke-[0.4px] lg:block' />
    </section>
  )
}

export default Hero

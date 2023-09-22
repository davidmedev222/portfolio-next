import { ArrowIcon } from '@/components'
import Image from 'next/image'
import ArrowBack from './ArrowBack'

function Hero() {
  return (
    <section className='relative min-h-screen'>
      <Image className='object-cover' src='/assets/projects/apollonft/mobile.png' fill alt='asd' />
      <ArrowBack />
      <div className='absolute inset-x-0 bottom-12 mx-auto text-center text-2xl uppercase leading-none xs:left-16 xs:right-auto xs:text-[64px] xs:drop-shadow-heading 2xl:text-[96px]'>
        <h1 className='font-benzin text-white'>Apollo</h1>
        <h2 className='font-ego xs:text-white'>Nft</h2>
      </div>
      <ArrowIcon className='absolute inset-x-0 bottom-4 mx-auto h-5 w-3 -rotate-90 fill-transparent stroke-black stroke-[0.4px] xs:stroke-white md:h-14 md:w-7' />
    </section>
  )
}

export default Hero

import { ArrowIcon } from '@/components'
import Image from 'next/image'
import ArrowBack from './components/ArrowBack'

function ProjectPage() {
  return (
    <main>
      <section className='relative min-h-screen'>
        <Image className='object-cover' src='/assets/projects/apollonft/mobile.png' fill alt='asd' />
        <ArrowBack />
        <div className='xs:text-[64px] xs:right-auto xs:left-16 xs:drop-shadow-heading absolute inset-x-0 bottom-12 mx-auto text-center text-2xl uppercase leading-none'>
          <h1 className='font-benzin text-white'>Apollo</h1>
          <h2 className='xs:text-white font-ego'>Nft</h2>
        </div>
        <ArrowIcon className='xs:stroke-white absolute inset-x-0 bottom-4 mx-auto h-5 w-3 -rotate-90 fill-transparent stroke-black stroke-[0.4px] md:h-14 md:w-7' />
      </section>
    </main>
  )
}

export default ProjectPage

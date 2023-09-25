import { ArrowIcon } from '@/components'
import { IProject } from '@/models'
import Image from 'next/image'
import ArrowBack from './ArrowBack'

interface Props {
  project: IProject
}

function Hero({ project }: Props) {
  return (
    <section className='relative min-h-screen'>
      <Image className='object-cover' src={project.image} sizes='100vw' priority fill alt={project.alt} />
      <ArrowBack />
      <div className='absolute inset-x-0 bottom-12 mx-auto text-center text-2xl uppercase leading-none xs:left-16 xs:right-auto xs:text-[64px] xs:drop-shadow-heading 2xl:text-[96px]'>
        <h1 className='font-benzin text-white'>{project.name}</h1>
        <h2 className='font-ego xs:text-white'>{project.subname}</h2>
      </div>
      <ArrowIcon className='absolute inset-x-0 bottom-4 mx-auto h-5 w-3 -rotate-90 fill-transparent stroke-white stroke-[0.4px] md:h-14 md:w-7' />
    </section>
  )
}

export default Hero

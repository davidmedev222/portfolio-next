import { ArrowIcon, ThemeImage } from '@/components'
import { IProject } from '@/models'
import ArrowBack from './ArrowBack'

interface Props {
  project: IProject
}

function Hero({ project }: Props) {
  const { mobile, desktop } = project.images

  return (
    <section className='relative min-h-screen'>
      <div className='absolute h-full w-full xs:hidden'>
        <ThemeImage
          className='h-full w-full object-cover'
          srcDark={mobile.imageDark}
          srcLight={mobile.image}
          fetchPriority='high'
          quality={100}
          width={540}
          height={810}
          alt={project.alt}
        />
      </div>
      <div className='absolute hidden h-full w-full xs:block'>
        <ThemeImage
          className='h-full w-full object-cover'
          srcDark={desktop.imageDark}
          srcLight={desktop.image}
          fetchPriority='high'
          width={960}
          quality={100}
          height={720}
          alt={project.alt}
        />
      </div>
      <ArrowBack />
      <div className='absolute inset-x-0 bottom-12 mx-auto text-center text-2xl uppercase leading-none sm:left-16 sm:right-auto sm:text-[64px] sm:drop-shadow-heading 2xl:text-[96px]'>
        <h1 className='font-benzin text-white'>{project.name}</h1>
        <h2 className='font-ego sm:text-white'>{project.subname}</h2>
      </div>
      <ArrowIcon className='absolute inset-x-0 bottom-4 mx-auto h-5 w-3 -rotate-90 fill-transparent stroke-white stroke-[0.4px] sm:h-14 sm:w-7' />
    </section>
  )
}

export default Hero

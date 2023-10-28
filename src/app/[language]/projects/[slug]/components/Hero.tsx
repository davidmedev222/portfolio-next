'use client'
import { ArrowIcon, ThemeImage } from '@/components'
import { useIntersectionObserver } from '@/hooks'
import { IProject } from '@/models'
import clsx from 'clsx'
import ArrowBack from './ArrowBack'

interface Props {
  project: IProject
}

function Hero({ project }: Props) {
  const [isIntersecting, ref] = useIntersectionObserver({ options: { threshold: 0.25 }, unobserve: true })
  const { mobile, desktop } = project.images

  const classes = {
    imageAnimation: clsx('clip-shutter-none h-full w-full object-cover', isIntersecting && 'clip-shutter'),
    textAnimation: clsx(
      'translate-y-full transition-transform delay-700 duration-700',
      isIntersecting && '!translate-y-0'
    )
  }

  return (
    <section ref={ref} className='relative min-h-screen overflow-hidden'>
      <div className='absolute h-full w-full xs:hidden'>
        <ThemeImage
          className={classes.imageAnimation}
          srcDark={mobile.imageDark}
          srcLight={mobile.image}
          fetchPriority='high'
          unoptimized
          quality={100}
          width={810}
          height={1080}
          alt={project.alt}
        />
      </div>
      <div className='absolute hidden h-full w-full xs:block'>
        <ThemeImage
          className={classes.imageAnimation}
          srcDark={desktop.imageDark}
          srcLight={desktop.image}
          fetchPriority='high'
          unoptimized
          quality={100}
          width={1440}
          height={1080}
          alt={project.alt}
        />
      </div>
      <ArrowBack />
      <div className='absolute inset-x-0 bottom-12 mx-auto text-center text-2xl uppercase leading-none text-white drop-shadow-heading xs:left-16 xs:right-auto xs:text-[64px] 2xl:text-[96px]'>
        <h1 className='overflow-hidden font-benzin'>
          <div className={classes.textAnimation}>{project.name}</div>
        </h1>
        <h2 className='overflow-hidden font-ego'>
          <div className={classes.textAnimation}>{project.subname}</div>
        </h2>
      </div>
      <ArrowIcon className='absolute inset-x-0 bottom-4 mx-auto h-5 w-3 -rotate-90 fill-transparent stroke-white stroke-[0.4px] xs:h-14 xs:w-7' />
    </section>
  )
}

export default Hero

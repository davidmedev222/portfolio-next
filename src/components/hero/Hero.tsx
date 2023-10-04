'use client'
import { ArrowIcon } from '@/components'
import { useIntersectionObserver } from '@/hooks'
import clsx from 'clsx'

interface Props {
  name: string
  role: string
}

function Hero({ name, role }: Props) {
  const [isIntersecting, ref] = useIntersectionObserver({ options: { threshold: 0.25 }, unobserve: true })

  const classes = {
    hero: clsx(
      'relative grid content-center gap-y-8 py-28 text-[min(6vw,64px)] uppercase lg:min-h-screen 2xl:min-h-[65vh]'
    ),
    headingAnimation: clsx('translate-y-full transition-transform duration-700', isIntersecting && '!translate-y-0')
  }

  return (
    <section ref={ref} className={classes.hero}>
      <h1 className='overflow-hidden font-benzin'>
        <div className={classes.headingAnimation}>{name}</div>
      </h1>
      <h2 className='overflow-hidden font-ego'>
        <div className={classes.headingAnimation}>{role}</div>
      </h2>
      <ArrowIcon className='absolute inset-x-0 bottom-8 mx-auto hidden h-8 w-[52px] -rotate-90 fill-transparent stroke-black stroke-[0.4px] lg:block' />
    </section>
  )
}

export default Hero

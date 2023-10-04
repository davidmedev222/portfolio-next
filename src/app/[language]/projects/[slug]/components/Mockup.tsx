'use client'
import { ThemeImage } from '@/components'
import { useIntersectionObserver } from '@/hooks'
import { IMockup } from '@/models'
import clsx from 'clsx'

interface Props {
  className: string
  mockup: IMockup
}

function Mockup({ className, mockup }: Props) {
  const [isIntersecting, ref] = useIntersectionObserver({ options: { threshold: 0.25 }, unobserve: true })

  const classes = {
    image: clsx(
      'clip-x-0 transition-clip-path h-full w-full rounded-3xl object-cover duration-700',
      isIntersecting && 'clip-x-auto'
    )
  }

  return (
    <div ref={ref} className={className}>
      <ThemeImage
        className={classes.image}
        srcDark={mockup.imageDark}
        srcLight={mockup.image}
        width={960}
        height={548}
        alt={mockup.alt}
      />
    </div>
  )
}

export default Mockup

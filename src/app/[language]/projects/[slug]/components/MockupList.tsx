import { ThemeImage } from '@/components'
import { IMockup } from '@/models'
interface Props {
  mockups: IMockup[]
}

function MockupList({ mockups }: Props) {
  return (
    <div className='container-base grid gap-6 py-6 md:grid-cols-2 md:gap-x-6 md:gap-y-8 md:py-20'>
      {mockups.map((mockup, index) => {
        const isLastMockup = index === mockups.length - 1
        const classes = isLastMockup ? 'relative h-60 md:col-span-2 md:h-[548px]' : 'relative h-60 xs:h-80 md:h-96'
        const sizes = isLastMockup ? '100vw' : '(max-width: 768px) 100vw, 50vw'

        return (
          <div key={mockup.id} className={classes}>
            <ThemeImage
              className='rounded-3xl object-cover'
              srcDark={mockup.imageDark}
              srcLight={mockup.image}
              sizes={sizes}
              fill
              alt={mockup.alt}
            />
          </div>
        )
      })}
    </div>
  )
}

export default MockupList

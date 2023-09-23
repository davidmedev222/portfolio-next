import { IMockup } from '@/models'
import Image from 'next/image'
interface Props {
  mockups: IMockup[]
}

function MockupList({ mockups }: Props) {
  return (
    <div className='container-base grid gap-6 py-6 md:grid-cols-2 md:gap-x-6 md:gap-y-8 md:py-20'>
      {mockups.map((mockup, index) => {
        const isLastMockup = index === mockups.length - 1
        const classes = isLastMockup ? 'relative h-44 md:col-span-2 md:h-[548px]' : 'relative h-44 md:h-96'
        const sizes = isLastMockup ? '100vw' : '(max-width: 768px) 100vw, 50vw'

        return (
          <div key={mockup.id} className={classes}>
            <Image className='rounded-3xl object-cover' src={mockup.image} sizes={sizes} fill alt={mockup.alt} />
          </div>
        )
      })}
    </div>
  )
}

export default MockupList

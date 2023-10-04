import { IMockup } from '@/models'
import Mockup from './Mockup'
interface Props {
  mockups: IMockup[]
}

function MockupList({ mockups }: Props) {
  return (
    <div className='container-base grid gap-6 py-6 md:grid-cols-2 md:gap-x-6 md:gap-y-8 md:py-20'>
      {mockups.map((mockup, index) => {
        const isLastMockup = index === mockups.length - 1
        const classes = isLastMockup ? 'h-60 md:col-span-2 md:h-[548px]' : 'h-60 xs:h-80 md:h-96'

        return <Mockup key={mockup.id} className={classes} mockup={mockup} />
      })}
    </div>
  )
}

export default MockupList

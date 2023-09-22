import { Divider } from '@/components'
import CustomLink from './CustomLink'

function RedirectList() {
  return (
    <ul className='mx-auto grid max-w-screen-xl grid-cols-[1fr_auto_1fr] px-4 pb-9 md:pb-20 lg:px-16'>
      <li>
        <CustomLink icon iconPosition='left' href='#'>
          Back
        </CustomLink>
      </li>
      <Divider className='my-2.5 h-auto md:my-11' color='violet' direction='vertical' />
      <li>
        <CustomLink icon iconPosition='right' href='#'>
          Next
        </CustomLink>
      </li>
    </ul>
  )
}

export default RedirectList

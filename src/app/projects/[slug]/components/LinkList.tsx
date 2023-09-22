import { Divider } from '@/components'
import CustomLink from './CustomLink'

function LinkList() {
  return (
    <ul className='container-base grid grid-cols-[1fr_auto_1fr] pt-2.5'>
      <li>
        <CustomLink decoration='underline' href='#'>
          Code
        </CustomLink>
      </li>
      <Divider className='my-2.5 h-auto md:my-11' color='violet' direction='vertical' />
      <li>
        <CustomLink decoration='underline' href='#'>
          Demo
        </CustomLink>
      </li>
    </ul>
  )
}

export default LinkList

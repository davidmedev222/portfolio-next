import { Divider } from '@/components'
import { IProject } from '@/models'
import CustomLink from './CustomLink'

interface Props {
  project: IProject
}

function LinkList({ project }: Props) {
  return (
    <ul className='container-base grid grid-cols-[1fr_auto_1fr] pt-2.5'>
      <li>
        <CustomLink target='_blank' decoration='underline' href={project.code}>
          {project.info.code}
        </CustomLink>
      </li>
      <Divider className='my-2.5 h-auto md:my-11' color='violet' direction='vertical' />
      <li>
        <CustomLink target='_blank' decoration='underline' href={project.demo}>
          {project.info.demo}
        </CustomLink>
      </li>
    </ul>
  )
}

export default LinkList

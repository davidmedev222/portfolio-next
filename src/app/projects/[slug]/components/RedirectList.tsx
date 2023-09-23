import { Divider } from '@/components'
import { IProject } from '@/models'
import { Routes } from '@/utils/const'
import CustomLink from './CustomLink'

interface Props {
  project: IProject
}

function RedirectList({ project }: Props) {
  const prevProject = `${Routes.projects}/${project.prevProject}`
  const nextProject = `${Routes.projects}/${project.nextProject}`

  return (
    <ul className='container-base grid grid-cols-[1fr_auto_1fr] pb-9 md:pb-20'>
      <li>
        <CustomLink icon iconPosition='left' href={prevProject}>
          {project.info.back}
        </CustomLink>
      </li>
      <Divider className='my-2.5 h-auto md:my-11' color='violet' direction='vertical' />
      <li>
        <CustomLink icon iconPosition='right' href={nextProject}>
          {project.info.next}
        </CustomLink>
      </li>
    </ul>
  )
}

export default RedirectList

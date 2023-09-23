import { PageHeading, ProjectCardList } from '@/components'
import { languageEN } from '@/utils/const'

function ProjectsPage() {
  return (
    <main className='container-base'>
      <PageHeading variant='heading'>{languageEN.projects.title}</PageHeading>
      <ProjectCardList variant='all' />
    </main>
  )
}

export default ProjectsPage

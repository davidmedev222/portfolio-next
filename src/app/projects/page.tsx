import { PageHeading, ProjectCardList } from '@/components'
import { languageEN } from '@/utils/const'

function ProjectsPage() {
  return (
    <main className='mx-auto max-w-screen-xl px-4 lg:px-16'>
      <PageHeading variant='heading'>{languageEN.projects.title}</PageHeading>
      <ProjectCardList variant='all' />
    </main>
  )
}

export default ProjectsPage

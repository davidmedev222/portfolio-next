import { PageHeading, ProjectCardList } from '@/components'

function ProjectsPage() {
  return (
    <main className='mx-auto max-w-screen-xl px-4 lg:px-16'>
      <PageHeading>Projects</PageHeading>
      <ProjectCardList />
    </main>
  )
}

export default ProjectsPage

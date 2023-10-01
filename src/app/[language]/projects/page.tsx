import { Footer, Header, PageHeading, ProjectCardList } from '@/components'
import { Locale } from '@/models'
import { getDictionary } from '@/utils/dictionary'

interface Props {
  params: { language: Locale }
}

async function ProjectsPage({ params }: Props) {
  const { header, projects, footer } = await getDictionary(params.language)

  return (
    <>
      <Header links={header.links} themes={header.themes} />
      <main className='container-base'>
        <PageHeading variant='heading'>{projects.title}</PageHeading>
        <ProjectCardList allProjects={projects.projects} variant='all' />
      </main>
      <Footer categories={footer.categories} copyright={footer.copyright} />
    </>
  )
}

export default ProjectsPage

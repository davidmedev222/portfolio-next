import { Divider, Footer, Header, Paragraph } from '@/components'
import { Locale } from '@/models'
import { getDictionary } from '@/utils/dictionary'
import { notFound } from 'next/navigation'
import Hero from './components/Hero'
import InfoList from './components/InfoList'
import LinkList from './components/LinkList'
import MockupList from './components/MockupList'
import RedirectList from './components/RedirectList'

interface Props {
  params: {
    slug: string
    language: Locale
  }
}

async function ProjectPage({ params }: Props) {
  const { header, projects, footer } = await getDictionary(params.language)
  const slug = params.slug
  const project = projects.projects.find((project) => project.slug === slug)

  if (!project) notFound()

  return (
    <>
      <Header links={header.links} themes={header.themes} />
      <main>
        <Hero project={project} />
        <LinkList project={project} />
        <Paragraph className='container-base py-5 md:py-20'>{project.description}</Paragraph>
        <div className='container-base'>
          <Divider direction='horizontal' color='box' />
        </div>
        <InfoList project={project} />
        <div className='container-base'>
          <Divider direction='horizontal' color='box' />
        </div>
        <MockupList mockups={project.mockups} />
        <RedirectList project={project} />
      </main>
      <Footer categories={footer.categories} copyright={footer.copyright} />
    </>
  )
}

export default ProjectPage

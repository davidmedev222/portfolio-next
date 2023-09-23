import { Divider, Paragraph } from '@/components'
import { languageEN } from '@/utils/const'
import { notFound } from 'next/navigation'
import Hero from './components/Hero'
import InfoList from './components/InfoList'
import LinkList from './components/LinkList'
import MockupList from './components/MockupList'
import RedirectList from './components/RedirectList'

interface Props {
  params: { slug: string }
}

function ProjectPage({ params }: Props) {
  const slug = params.slug
  const project = languageEN.projects.projects.find((project) => project.slug === slug)

  if (!project) notFound()

  return (
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
  )
}

export default ProjectPage

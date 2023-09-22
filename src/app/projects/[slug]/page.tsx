import { Divider, Paragraph } from '@/components'
import Hero from './components/Hero'
import InfoList from './components/InfoList'
import LinkList from './components/LinkList'
import MockupList from './components/MockupList'
import RedirectList from './components/RedirectList'

function ProjectPage() {
  return (
    <main>
      <Hero />
      <LinkList />
      <Paragraph className='container-base py-5 md:py-20'>
        Online sneaker store for people with a Jordan brand preference, where they will be able to purchase and manage
        their own account on the website.
      </Paragraph>
      <div className='container-base'>
        <Divider direction='horizontal' color='box' />
      </div>
      <InfoList />
      <div className='container-base'>
        <Divider direction='horizontal' color='box' />
      </div>
      <MockupList />
      <RedirectList />
    </main>
  )
}

export default ProjectPage

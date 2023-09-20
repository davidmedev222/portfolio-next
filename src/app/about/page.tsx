import { Divider, PageHeading } from '@/components'
import Hero from './components/Hero'
import HighlightsExperience from './components/HighlightsExperience'
import HighlightsSkills from './components/HighlightsSkills'

function AboutMePage() {
  return (
    <main>
      <PageHeading className='mx-auto max-w-screen-xl px-4 lg:px-16'>About Me</PageHeading>
      <Hero />
      <PageHeading className='mx-auto max-w-screen-xl px-4 lg:px-16' as='h3' variant='sub-heading'>
        Projects
      </PageHeading>
      <HighlightsExperience />
      <PageHeading className='mx-auto max-w-screen-xl px-4 lg:px-16' as='h4' variant='sub-heading'>
        Skills
      </PageHeading>
      <HighlightsSkills />
      <div className='mx-auto max-w-screen-xl px-4 lg:px-16'>
        <Divider direction='horizontal' />
      </div>
      <HighlightsSkills />
      <div className='mx-auto max-w-screen-xl px-4 lg:px-16'>
        <Divider direction='horizontal' />
      </div>
      <HighlightsSkills />
      <div className='mx-auto max-w-screen-xl px-4 lg:px-16'>
        <Divider direction='horizontal' />
      </div>
      <HighlightsSkills />
      <div className='mx-auto max-w-screen-xl px-4 lg:px-16'>
        <Divider direction='horizontal' />
      </div>
      <HighlightsSkills />
      <div className='mx-auto max-w-screen-xl px-4 lg:px-16'>
        <Divider direction='horizontal' />
      </div>
      <HighlightsSkills />
      <div className='mx-auto max-w-screen-xl px-4 lg:px-16'>
        <Divider direction='horizontal' />
      </div>
      <HighlightsSkills />
      <div className='mx-auto max-w-screen-xl px-4 lg:px-16'>
        <Divider direction='horizontal' />
      </div>
    </main>
  )
}

export default AboutMePage

/* eslint-disable react/jsx-key */
import { Divider, PageHeading } from '@/components'
import { languageEN } from '@/utils/const'
import Hero from './components/Hero'
import HighlightsExperience from './components/HighlightsExperience'
import HighlightsSkills from './components/HighlightsSkills'

function AboutMePage() {
  return (
    <main>
      <PageHeading variant='heading' className='mx-auto max-w-screen-xl px-4 lg:px-16'>
        {languageEN.about.title}
      </PageHeading>
      <Hero />
      <PageHeading className='mx-auto max-w-screen-xl px-4 lg:px-16' as='h3' variant='sub-heading'>
        {languageEN.about.experience.title}
      </PageHeading>
      <HighlightsExperience />
      <PageHeading className='mx-auto max-w-screen-xl px-4 lg:px-16' as='h4' variant='sub-heading'>
        {languageEN.about.skills.title}
      </PageHeading>
      {languageEN.about.skills.categories.map((skill) => (
        <>
          <HighlightsSkills skill={skill} />
          <div className='mx-auto max-w-screen-xl px-4 lg:px-16'>
            <Divider direction='horizontal' />
          </div>
        </>
      ))}
    </main>
  )
}

export default AboutMePage

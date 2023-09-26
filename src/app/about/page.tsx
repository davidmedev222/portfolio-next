import { Divider, PageHeading } from '@/components'
import { languageEN } from '@/utils/const'
import { Fragment } from 'react'
import Hero from './components/Hero'
import HighlightsExperience from './components/HighlightsExperience'
import HighlightsSkills from './components/HighlightsSkills'

function AboutMePage() {
  return (
    <main>
      <PageHeading variant='heading' className='container-base'>
        {languageEN.about.title}
      </PageHeading>
      <Hero />
      <PageHeading className='container-base' as='h3' variant='sub-heading'>
        {languageEN.about.experience.title}
      </PageHeading>
      <HighlightsExperience />
      <PageHeading className='container-base' as='h4' variant='sub-heading'>
        {languageEN.about.skills.title}
      </PageHeading>
      {languageEN.about.skills.categories.map((skill, index) => {
        const isLastProject = index === languageEN.about.skills.categories.length - 1

        return (
          <Fragment key={skill.id}>
            <HighlightsSkills skill={skill} />
            {!isLastProject && (
              <div className='container-base'>
                <Divider color='box' direction='horizontal' />
              </div>
            )}
          </Fragment>
        )
      })}
    </main>
  )
}

export default AboutMePage

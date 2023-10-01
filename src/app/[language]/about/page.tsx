import { Divider, Footer, Header, PageHeading } from '@/components'
import { Locale } from '@/models'
import { getDictionary } from '@/utils/dictionary'
import { Fragment } from 'react'
import Hero from './components/Hero'
import HighlightsExperience from './components/HighlightsExperience'
import HighlightsSkills from './components/HighlightsSkills'

interface Props {
  params: { language: Locale }
}

async function AboutMePage({ params }: Props) {
  const { header, about, footer } = await getDictionary(params.language)

  return (
    <>
      <Header links={header.links} themes={header.themes} />
      <main>
        <PageHeading variant='heading' className='container-base'>
          {about.title}
        </PageHeading>
        <Hero name={about.name} lastname={about.lastname} paragraph={about.paragraph} />
        <PageHeading className='container-base' as='h3' variant='sub-heading'>
          {about.experience.title}
        </PageHeading>
        <HighlightsExperience experience={about.experience} />
        <PageHeading className='container-base' as='h4' variant='sub-heading'>
          {about.skills.title}
        </PageHeading>
        {about.skills.categories.map((skill, index) => {
          const isLastProject = index === about.skills.categories.length - 1

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
      <Footer categories={footer.categories} copyright={footer.copyright} />
    </>
  )
}

export default AboutMePage

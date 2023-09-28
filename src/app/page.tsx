import { CustomLink, Divider, Hero, ProjectCardList, ProjectCarousel } from '@/components'
import { languageEN } from '@/utils/const'

function HomePage() {
  return (
    <main className='container-base'>
      <Hero />
      <Divider color='violet' direction='horizontal' />
      <ProjectCarousel />
      <ProjectCardList variant='highlights' />
      <CustomLink href={languageEN.home.link.href} className='my-8 ml-auto max-w-[112px] md:my-32 md:max-w-[496px]'>
        {languageEN.home.link.title}
      </CustomLink>
    </main>
  )
}

export default HomePage

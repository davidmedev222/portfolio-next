import { CustomLink, Divider, Hero, ProjectCardList, ProjectCarousel } from '@/components'
import { languageEN } from '@/utils/const'

function HomePage() {
  return (
    <main className='container-base'>
      <Hero />
      <Divider color='violet' direction='horizontal' />
      <ProjectCarousel />
      <ProjectCardList variant='highlights' />
      <CustomLink href={languageEN.home.link.href}>{languageEN.home.link.title}</CustomLink>
    </main>
  )
}

export default HomePage

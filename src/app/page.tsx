import { CustomLink, Divider, Hero, ProjectCardList, ProjectCarousel } from '@/components'
import { Routes } from '@/utils/const'

function HomePage() {
  return (
    <main className='mx-auto max-w-screen-xl px-4 lg:px-16'>
      <Hero />
      <Divider direction='horizontal' className='h-[1px] md:h-0.5' />
      <ProjectCarousel />
      <ProjectCardList variant='highlights' />
      <CustomLink href={Routes.projects}>Ver todos</CustomLink>
    </main>
  )
}

export default HomePage

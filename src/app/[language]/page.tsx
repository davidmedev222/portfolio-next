import { CustomLink, Divider, Footer, Header, Hero, ProjectCardList, ProjectCarousel } from '@/components'
import { Locale } from '@/models'
import { getDictionary } from '@/utils/dictionary'

interface Props {
  params: { language: Locale }
}

async function HomePage({ params }: Props) {
  const { header, home, footer } = await getDictionary(params.language)

  return (
    <>
      <Header links={header.links} themes={header.themes} />
      <main className='container-base'>
        <Hero name={home.name} role={home.role} />
        <Divider color='violet' direction='horizontal' />
        <ProjectCarousel projects={home.projects} />
        <ProjectCardList highlightsProjects={home.projects} variant='highlights' />
        <CustomLink href={home.link.href} className='my-8 ml-auto max-w-[112px] md:my-32 md:max-w-[496px]'>
          {home.link.title}
        </CustomLink>
      </main>
      <Footer categories={footer.categories} copyright={footer.copyright} />
    </>
  )
}

export default HomePage

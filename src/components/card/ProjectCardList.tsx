import Divider from '../divider/Divider'
import ProjectCard from './ProjectCard'

function ProjectCardList() {
  return (
    <section className='hidden md:block'>
      <ProjectCard />
      <Divider direction='horizontal' className='h-[1px] md:h-0.5' />
      <ProjectCard />
      <Divider direction='horizontal' className='h-[1px] md:h-0.5' />
      <ProjectCard />
      <Divider direction='horizontal' className='h-[1px] md:h-0.5' />
      <ProjectCard />
      <Divider direction='horizontal' className='h-[1px] md:h-0.5' />
      <ProjectCard />
      <Divider direction='horizontal' className='h-[1px] md:h-0.5' />
    </section>
  )
}

export default ProjectCardList

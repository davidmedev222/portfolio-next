import clsx from 'clsx'
import Divider from '../divider/Divider'
import ProjectCard from './ProjectCard'

interface Props {
  variant?: 'highlights'
}

function ProjectCardList({ variant }: Props) {
  const classes = clsx(variant === 'highlights' && 'hidden md:block')

  return (
    <section className={classes}>
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

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
      <Divider direction='horizontal' />
      <ProjectCard />
      <Divider direction='horizontal' />
      <ProjectCard />
      <Divider direction='horizontal' />
      <ProjectCard />
      <Divider direction='horizontal' />
      <ProjectCard />
      <Divider direction='horizontal' />
    </section>
  )
}

export default ProjectCardList

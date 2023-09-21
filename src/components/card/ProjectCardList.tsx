/* eslint-disable react/jsx-key */
import { languageEN } from '@/utils/const'
import clsx from 'clsx'
import Divider from '../divider/Divider'
import ProjectCard from './ProjectCard'

interface Props {
  variant?: 'highlights' | 'all'
}

function ProjectCardList({ variant }: Props) {
  const classes = clsx(variant === 'highlights' && 'hidden md:block')

  return (
    <section className={classes}>
      {variant === 'highlights' &&
        languageEN.home.projects.map((project) => (
          <>
            <ProjectCard project={project} />
            <Divider direction='horizontal' />
          </>
        ))}
      {variant === 'all' &&
        languageEN.projects.projects.map((project) => (
          <>
            <ProjectCard project={project} />
            <Divider direction='horizontal' />
          </>
        ))}
    </section>
  )
}

export default ProjectCardList

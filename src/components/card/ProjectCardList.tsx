import { languageEN } from '@/utils/const'
import clsx from 'clsx'
import { Fragment } from 'react'
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
          <Fragment key={project.id}>
            <ProjectCard project={project} />
            <Divider color='box' direction='horizontal' />
          </Fragment>
        ))}
      {variant === 'all' &&
        languageEN.projects.projects.map((project, index) => {
          const isLastProject = index === languageEN.projects.projects.length - 1

          return (
            <Fragment key={project.id}>
              <ProjectCard project={project} />
              {!isLastProject && <Divider color='box' direction='horizontal' />}
            </Fragment>
          )
        })}
    </section>
  )
}

export default ProjectCardList

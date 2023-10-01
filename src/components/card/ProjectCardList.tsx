import { IProject } from '@/models'
import { languageEN } from '@/utils/const'
import clsx from 'clsx'
import { Fragment } from 'react'
import Divider from '../divider/Divider'
import ProjectCard from './ProjectCard'

interface Props {
  variant: 'highlights' | 'all'
  highlightsProjects?: IProject[]
  allProjects?: IProject[]
}

function ProjectCardList({ variant, allProjects, highlightsProjects }: Props) {
  const classes = clsx(variant === 'highlights' && 'hidden md:block')

  return (
    <section className={classes}>
      {variant === 'highlights' &&
        highlightsProjects &&
        highlightsProjects.map((project) => (
          <Fragment key={project.id}>
            <ProjectCard project={project} />
            <Divider color='box' direction='horizontal' />
          </Fragment>
        ))}
      {variant === 'all' &&
        allProjects &&
        allProjects.map((project, index) => {
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

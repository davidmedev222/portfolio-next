'use client'
import { useIntersectionObserver } from '@/hooks'
import { IProject } from '@/models'
import { Routes } from '@/utils/const'
import clsx from 'clsx'
import Link from 'next/link'
import ArrowIcon from '../icons/ArrowIcon'
import ThemeImage from '../image/ThemeImage'
import Paragraph from '../text/Paragraph'
import SkillText from '../text/SkillText'

interface Props {
  project: IProject
}

function ProjectCard({ project }: Props) {
  const [isIntersecting, ref] = useIntersectionObserver({ options: { threshold: 0.25 }, unobserve: true })
  const href = `${Routes.projects}/${project.slug}`

  const classes = {
    card: clsx('md:grid-area-project grid gap-2.5 py-10 md:grid-cols-project'),
    date: clsx(
      'md:area-project-date font-benzin text-[min(6vw,48px)] uppercase md:flex md:flex-col md:pt-24 md:text-center'
    ),
    link: clsx(
      'clip-x-0 md:area-project-image group relative h-60 transition-clip-path duration-700 md:h-96',
      isIntersecting && 'clip-x-auto'
    ),
    project: clsx('lg:area-project-title font-benzin text-[min(6vw,48px)] uppercase'),
    paragraph: clsx('md:area-project-description line-clamp-3 self-start'),
    skills: clsx(
      'md:area-project-skills mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-2.5 md:mt-0 md:gap-x-3 md:gap-y-5'
    )
  }

  return (
    <article ref={ref} className={classes.card}>
      <h3 className={classes.date}>
        {project.month} <span className='font-ego'>{project.year}</span>
      </h3>
      <Link href={href} className={classes.link}>
        <ThemeImage
          className='h-full rounded-3xl object-cover'
          width={1440}
          height={1080}
          fetchPriority='high'
          unoptimized
          srcLight={project.thumbnail}
          srcDark={project.thumbnailDark}
          alt={project.alt}
        />
        <div className='absolute left-0 top-0 grid h-full w-full place-items-center rounded-3xl bg-black/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100'>
          <ArrowIcon className='h-[52px] w-8 rotate-180 fill-transparent stroke-white stroke-[0.4px] md:h-36 md:w-20' />
        </div>
      </Link>
      <h4 className={classes.project}>
        {project.name} <span className='font-ego'>{project.subname}</span>
      </h4>
      <Paragraph className={classes.paragraph}>{project.description}</Paragraph>
      <ul className={classes.skills}>
        {project.skills.map((skill) => (
          <SkillText key={skill}>{skill}</SkillText>
        ))}
      </ul>
    </article>
  )
}

export default ProjectCard

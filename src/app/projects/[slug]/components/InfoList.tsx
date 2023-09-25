import { SkillText } from '@/components'
import { IProject } from '@/models'

interface Props {
  project: IProject
}

function InfoList({ project }: Props) {
  return (
    <ul className='container-base grid gap-y-2.5 py-4 text-sm uppercase text-gray-700 md:grid-cols-6 md:gap-x-6 md:gap-y-20 md:py-20 md:text-lg'>
      <li className='col-span-2 grid gap-y-1.5'>
        {project.info.project}
        <span className='capitalize text-black dark:text-white'>{project.project}</span>
      </li>
      <li className='col-span-2 grid gap-y-1.5'>
        {project.info.date}
        <span className='capitalize text-black dark:text-white'>{project.date}</span>
      </li>
      <li className='col-span-2 grid gap-y-1.5'>
        {project.info.role}
        <span className='capitalize text-black dark:text-white'>{project.role}</span>
      </li>
      <li className='col-span-3 grid gap-y-1.5 self-start'>
        {project.info.technologies}
        <ul className='flex flex-wrap items-center gap-x-1.5 gap-y-[14px] md:gap-y-3'>
          {project.technologies.map((technology) => (
            <SkillText key={technology}>{technology}</SkillText>
          ))}
        </ul>
      </li>
      <li className='col-span-3 grid gap-y-1.5 self-start'>
        {project.info.tools}
        <ul className='flex flex-wrap items-center gap-x-1.5 gap-y-[14px] md:gap-y-3'>
          {project.tools.map((tool) => (
            <SkillText key={tool}>{tool}</SkillText>
          ))}
        </ul>
      </li>
    </ul>
  )
}

export default InfoList

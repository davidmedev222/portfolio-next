import { SkillText } from '@/components'

function InfoList() {
  return (
    <ul className='container-base grid gap-y-2.5 py-4 text-sm uppercase text-gray-700 md:grid-cols-6 md:gap-x-6 md:gap-y-20 md:py-20 md:text-lg'>
      <li className='col-span-2 grid gap-y-1.5'>
        Proyecto
        <span className='capitalize text-black'>Jordan Store</span>
      </li>
      <li className='col-span-2 grid gap-y-1.5'>
        Fecha
        <span className='capitalize text-black'>Octubre 2023</span>
      </li>
      <li className='col-span-2 grid gap-y-1.5'>
        Rol
        <span className='capitalize text-black'>Frontend Developer</span>
      </li>
      <li className='col-span-3 grid gap-y-1.5 self-start'>
        Tecnologias
        <ul className='flex flex-wrap items-center gap-x-1.5 gap-y-[14px] md:gap-y-3'>
          <SkillText>Javascript</SkillText>
          <SkillText>React</SkillText>
          <SkillText>Styled Components</SkillText>
          <SkillText>ViteJs</SkillText>
          <SkillText>React Router Dom</SkillText>
          <SkillText>Firebase</SkillText>
          <SkillText>Formkit Auto Animate</SkillText>
          <SkillText>React Toastify</SkillText>
          <SkillText>Pnpm</SkillText>
        </ul>
      </li>
      <li className='col-span-3 grid gap-y-1.5 self-start'>
        Herramientas
        <ul className='flex flex-wrap items-center gap-x-1.5 gap-y-[14px] md:gap-y-3'>
          <SkillText>ESLint</SkillText>
          <SkillText>Trello</SkillText>
          <SkillText>Visual Studio Code</SkillText>
          <SkillText>Git</SkillText>
          <SkillText>Github</SkillText>
        </ul>
      </li>
    </ul>
  )
}

export default InfoList

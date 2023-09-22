interface Props {
  children: React.ReactNode
}

function SkillText({ children }: Props) {
  return (
    <li className='rounded-3xl bg-box px-2 py-0.5 text-sm capitalize text-violet-950 shadow-md shadow-black/25 md:px-4 md:text-lg'>
      {children}
    </li>
  )
}

export default SkillText

import Link, { LinkProps } from 'next/link'
import Divider from '../divider/Divider'

interface Props extends LinkProps {
  children: React.ReactNode
}

function CustomLink({ children, ...rest }: Props) {
  return (
    <Link
      {...rest}
      className='group my-8 ml-auto block w-28 text-center font-benzin text-xs uppercase transition-colors duration-300 hover:text-violet-500 md:my-32 md:w-[496px] md:text-3xl'
    >
      <Divider
        direction='horizontal'
        className='h-[1px] transition-colors duration-300 group-hover:bg-violet-500 md:h-0.5'
      />
      <div className='py-3 md:py-16'>{children}</div>
      <Divider
        direction='horizontal'
        className='h-[1px] transition-colors duration-300 group-hover:bg-violet-500 md:h-0.5'
      />
    </Link>
  )
}

export default CustomLink

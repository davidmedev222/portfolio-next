import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { Divider } from '../index'

interface Props extends LinkProps {
  children: React.ReactNode
  className?: string
}

function CustomLink({ children, className, ...rest }: Props) {
  const classes = clsx(
    'group block text-center font-benzin text-xs uppercase transition-colors duration-300 hover:text-violet-500 md:text-3xl',
    className
  )

  return (
    <Link {...rest} className={classes}>
      <Divider
        color='violet'
        direction='horizontal'
        className='transition-colors duration-300 group-hover:bg-violet-500'
      />
      <div className='py-3 md:py-16'>{children}</div>
      <Divider
        color='violet'
        direction='horizontal'
        className='transition-colors duration-300 group-hover:bg-violet-500'
      />
    </Link>
  )
}

export default CustomLink

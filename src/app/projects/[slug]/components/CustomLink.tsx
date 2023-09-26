import { ArrowIcon, Divider } from '@/components'
import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { HTMLAttributeAnchorTarget } from 'react'

interface Props extends LinkProps {
  children: React.ReactNode
  target?: HTMLAttributeAnchorTarget
  decoration?: 'underline'
  icon?: boolean
  iconPosition?: 'left' | 'right'
}

function CustomLink({ children, target, decoration, icon, iconPosition, ...rest }: Props) {
  const classes = {
    link: clsx(
      'group block text-center font-benzin text-base uppercase transition-colors duration-300 hover:text-violet-500 md:text-[64px]',
      decoration === 'underline' && 'underline'
    ),
    icon: clsx(
      'absolute inset-y-0 my-auto h-5 w-3 fill-transparent stroke-black stroke-[0.4px] transition-colors duration-300 group-hover:stroke-violet-500 dark:fill-white dark:stroke-white dark:group-hover:fill-violet-500 md:h-[52px] md:w-7',
      iconPosition === 'left' && 'left-0 md:left-7',
      iconPosition === 'right' && 'right-0 rotate-180 md:right-7'
    )
  }

  return (
    <Link target={target} className={classes.link} {...rest}>
      <Divider
        color='violet'
        direction='horizontal'
        className='transition-colors duration-300 group-hover:bg-violet-500'
      />
      <div className='relative py-5 md:py-[72px]'>
        {icon && <ArrowIcon className={classes.icon} />}
        {children}
      </div>
      <Divider
        color='violet'
        direction='horizontal'
        className='transition-colors duration-300 group-hover:bg-violet-500'
      />
    </Link>
  )
}

export default CustomLink

'use client'
import { useIntersectionObserver } from '@/hooks'
import clsx from 'clsx'
import { Divider } from '../index'

interface Props {
  children: React.ReactNode
  variant?: 'heading' | 'sub-heading'
  as?: 'h2' | 'h3' | 'h4'
  className?: string
}

function PageHeading({ children, variant, as, className }: Props) {
  const [isIntersecting, ref] = useIntersectionObserver({ options: { threshold: 0.25 }, unobserve: true })

  const classes = {
    section: clsx(
      'md:space-y-4',
      variant === 'heading' && 'pt-[84px] md:pt-[152px]',
      variant === 'sub-heading' && 'pt-11 md:pt-20',
      className
    ),
    heading: clsx('overflow-hidden text-center font-benzin text-[min(6vw,36px)] uppercase'),
    headingAnimation: clsx('translate-y-full transition-transform duration-700', isIntersecting && '!translate-y-0'),
    dividerAnimation: clsx('!w-0 transition-width duration-1000', isIntersecting && '!w-full')
  }

  return (
    <section ref={ref} className={classes.section}>
      {as === undefined && (
        <h1 className={classes.heading}>
          <div className={classes.headingAnimation}>{children}</div>
        </h1>
      )}
      {as === 'h2' && (
        <h2 className={classes.heading}>
          <div className={classes.headingAnimation}>{children}</div>
        </h2>
      )}
      {as === 'h3' && (
        <h3 className={classes.heading}>
          <div className={classes.headingAnimation}>{children}</div>
        </h3>
      )}
      {as === 'h4' && (
        <h4 className={classes.heading}>
          <div className={classes.headingAnimation}>{children}</div>
        </h4>
      )}
      <Divider className={classes.dividerAnimation} color='violet' direction='horizontal' />
    </section>
  )
}

export default PageHeading

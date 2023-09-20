import clsx from 'clsx'
import Divider from '../divider/Divider'

interface Props {
  children: React.ReactNode
  variant?: 'sub-heading'
  as?: 'h2' | 'h3' | 'h4'
  className?: string
}

function PageHeading({ children, variant, as, className }: Props) {
  const classes = {
    section: clsx('pt-[84px] md:space-y-4 md:pt-[152px]', variant === 'sub-heading' && 'pt-11 md:pt-20', className),
    heading: clsx('text-center font-benzin text-[min(6vw,36px)] uppercase')
  }

  if (as) {
    return (
      <section className={classes.section}>
        {as === 'h2' && <h2 className={classes.heading}>{children}</h2>}
        {as === 'h3' && <h3 className={classes.heading}>{children}</h3>}
        {as === 'h4' && <h4 className={classes.heading}>{children}</h4>}
        <Divider direction='horizontal' />
      </section>
    )
  }

  return (
    <section className={classes.section}>
      <h1 className={classes.heading}>{children}</h1>
      <Divider direction='horizontal' />
    </section>
  )
}

export default PageHeading

/* eslint-disable jsx-a11y/alt-text */
import clsx from 'clsx'
import Image, { ImageProps } from 'next/image'

interface Props extends Omit<ImageProps, 'src' | 'priority' | 'loading' | 'className'> {
  srcLight: string
  srcDark: string
  className?: string
  priority?: 'high' | 'low' | 'auto'
}

function ThemeImage({ srcDark, srcLight, className, priority, ...rest }: Props) {
  const classes = {
    imageDark: clsx('hidden dark:block', className),
    imageLight: clsx('dark:hidden', className)
  }

  return (
    <>
      <Image {...rest} src={srcLight} fetchPriority={priority} className={classes.imageLight} />
      <Image {...rest} src={srcDark} fetchPriority={priority} className={classes.imageDark} />
    </>
  )
}

export default ThemeImage

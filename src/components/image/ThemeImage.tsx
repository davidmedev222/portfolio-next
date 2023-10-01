/* eslint-disable jsx-a11y/alt-text */
import clsx from 'clsx'
import Image, { ImageProps } from 'next/image'

interface Props extends Omit<ImageProps, 'src' | 'priority' | 'loading' | 'className'> {
  srcLight: string
  srcDark: string
  className?: string
}

function ThemeImage({ srcDark, srcLight, className, ...rest }: Props) {
  const classes = {
    imageDark: clsx('hidden dark:block', className),
    imageLight: clsx('dark:hidden', className)
  }

  return (
    <>
      <Image {...rest} src={srcLight} className={classes.imageLight} />
      <Image {...rest} src={srcDark} className={classes.imageDark} />
    </>
  )
}

export default ThemeImage

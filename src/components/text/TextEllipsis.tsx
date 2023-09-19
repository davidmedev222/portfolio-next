'use client'
import LinesEllipsis, { ReactLinesEllipsisProps } from 'react-lines-ellipsis'

interface Props extends Omit<ReactLinesEllipsisProps, 'text'> {
  children: string
  numberOfLines: string | number
}

function TextEllipsis({ children, numberOfLines, ...rest }: Props) {
  return <LinesEllipsis text={children} maxLine={numberOfLines} {...rest} />
}

export default TextEllipsis

interface Props {
  className: string
}

function ArrowIcon({ className }: Props) {
  return (
    <svg className={className} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 13 20'>
      <path d='M12.0834 2.3505L4.57528 9.85858L4.43386 10L4.57528 10.1414L12.0834 17.6495L10.0005 19.7177L0.282874 10L10.0005 0.282344L12.0834 2.3505Z' />
    </svg>
  )
}

export default ArrowIcon

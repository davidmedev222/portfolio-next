interface Props {
  className: string
}

function ArrowLink({ className }: Props) {
  return (
    <svg className={className} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 7 11'>
      <path d='M0 9.54089L4.13018 5.41071L0 1.27152L1.27152 0L6.68223 5.41071L1.27152 10.8214L0 9.54089Z' />
    </svg>
  )
}

export default ArrowLink

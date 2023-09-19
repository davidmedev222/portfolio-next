interface Props {
  className: string
}

function MenuIcon({ className }: Props) {
  return (
    <svg className={className} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26 18'>
      <path d='M0 0H25.9331V2.94716H0V0ZM0 7.36789H25.9331V10.315H0V7.36789ZM0 14.7358H25.9331V17.6829H0V14.7358Z' />
    </svg>
  )
}

export default MenuIcon

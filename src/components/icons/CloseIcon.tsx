interface Props {
  className: string
  onClick: () => void
}

function CloseIcon({ className, onClick }: Props) {
  return (
    <svg onClick={onClick} className={className} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 47 47'>
      <path d='M23.5 0C36.4955 0 47 10.5045 47 23.5C47 36.4955 36.4955 47 23.5 47C10.5045 47 0 36.4955 0 23.5C0 10.5045 10.5045 0 23.5 0ZM31.9365 11.75L23.5 20.1865L15.0635 11.75L11.75 15.0635L20.1865 23.5L11.75 31.9365L15.0635 35.25L23.5 26.8135L31.9365 35.25L35.25 31.9365L26.8135 23.5L35.25 15.0635L31.9365 11.75Z' />
    </svg>
  )
}

export default CloseIcon

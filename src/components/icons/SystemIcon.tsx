interface Props {
  className: string
}

function SystemIcon({ className }: Props) {
  return (
    <svg className={className} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 16'>
      <path d='M4 2H20V12H4M20 14C20.5304 14 21.0391 13.7893 21.4142 13.4142C21.7893 13.0391 22 12.5304 22 12V2C22 0.89 21.1 0 20 0H4C2.89 0 2 0.89 2 2V12C2 12.5304 2.21071 13.0391 2.58579 13.4142C2.96086 13.7893 3.46957 14 4 14H0V16H24V14H20Z' />
    </svg>
  )
}

export default SystemIcon

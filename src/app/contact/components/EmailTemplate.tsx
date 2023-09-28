interface Props {
  name: string
  email: string
  message: string
}

function EmailTemplate({ name, email, message }: Props) {
  return (
    <div>
      <h2>
        <strong>{name}</strong>
      </h2>
      <h3>{email}</h3>
      <h4>{message}</h4>
    </div>
  )
}

export default EmailTemplate

const options = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' }
}

interface ISendEmail {
  name: string
  email: string
  message: string
}

async function sendEmail(body: ISendEmail) {
  const request = await fetch('/api/send', { ...options, body: JSON.stringify(body) })
  const response = await request.json()

  if (response.statusCode === 422) {
    throw new Error('Missing from field')
  }
  if (response.statusCode === 500) {
    throw new Error('An unexpected error occurred')
  }

  return 'Email sent successfully'
}

export { sendEmail }

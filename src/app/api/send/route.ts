import EmailTemplate from '@/app/contact/components/EmailTemplate'
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface IEmailSend {
  name: string
  email: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const body: IEmailSend = await request.json()
    const response = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['davidmedev@gmail.com'],
      subject: 'David Mamani - Portfolio',
      react: EmailTemplate(body)
    })

    return NextResponse.json(response)
  } catch (error) {
    return NextResponse.json({
      statusCode: 500,
      name: 'internal_server_error',
      message: 'An unexpected error occurred'
    })
  }
}

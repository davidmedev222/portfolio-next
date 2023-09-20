import { Divider, PageHeading, Paragraph, SocialMediaList } from '@/components'
import ContactForm from './components/ContactForm'

function ContactPage() {
  return (
    <main className='mx-auto max-w-screen-xl px-4 lg:px-16'>
      <PageHeading>Contact</PageHeading>
      <Paragraph className='pt-10 md:pt-16'>I invite you to connect through my social networks.</Paragraph>
      <SocialMediaList />
      <Divider direction='horizontal' />
      <Paragraph className='pt-10 md:pt-16'>Or contact me by Gmail.</Paragraph>
      <ContactForm />
    </main>
  )
}

export default ContactPage

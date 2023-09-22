import { Divider, PageHeading, Paragraph, SocialMediaList } from '@/components'
import { languageEN } from '@/utils/const'
import ContactForm from './components/ContactForm'

function ContactPage() {
  return (
    <main className='mx-auto max-w-screen-xl px-4 lg:px-16'>
      <PageHeading variant='heading'>{languageEN.contact.title}</PageHeading>
      <Paragraph className='pt-10 md:pt-16'>{languageEN.contact.social.paragraph}</Paragraph>
      <SocialMediaList />
      <Divider color='box' direction='horizontal' />
      <Paragraph className='pt-10 md:pt-16'>{languageEN.contact.contact.paragraph}</Paragraph>
      <ContactForm />
    </main>
  )
}

export default ContactPage

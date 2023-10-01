import { Divider, Footer, Header, PageHeading, Paragraph } from '@/components'
import { Locale } from '@/models'
import { getDictionary } from '@/utils/dictionary'
import ContactForm from './components/ContactForm'
import SocialMediaList from './components/SocialMediaList'

interface Props {
  params: { language: Locale }
}

async function ContactPage({ params }: Props) {
  const { header, contact, footer } = await getDictionary(params.language)

  return (
    <>
      <Header links={header.links} themes={header.themes} />
      <main className='container-base'>
        <PageHeading variant='heading'>{contact.title}</PageHeading>
        <Paragraph className='pt-10 md:pt-16'>{contact.social.paragraph}</Paragraph>
        <SocialMediaList social={contact.social} />
        <Divider color='box' direction='horizontal' />
        <Paragraph className='pt-10 md:pt-16'>{contact.contact.paragraph}</Paragraph>
        <ContactForm form={contact.contact} />
      </main>
      <Footer categories={footer.categories} copyright={footer.copyright} />
    </>
  )
}

export default ContactPage

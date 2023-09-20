import { Divider, PageHeading, Paragraph, SocialMediaList } from '@/components'

function ContactPage() {
  return (
    <main className='mx-auto max-w-screen-xl px-4 lg:px-16'>
      <PageHeading>Contact</PageHeading>
      <Paragraph className='pt-10'>I invite you to connect through my social networks</Paragraph>
      <SocialMediaList />
      <Divider direction='horizontal' />
    </main>
  )
}

export default ContactPage

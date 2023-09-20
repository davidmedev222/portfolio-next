import Divider from '../divider/Divider'

interface Props {
  children: React.ReactNode
}

function PageHeading({ children }: Props) {
  return (
    <section className='pt-[84px] md:space-y-4 md:pt-[152px]'>
      <h1 className='text-center font-benzin text-[min(6vw,36px)] uppercase'>{children}</h1>
      <Divider direction='horizontal' />
    </section>
  )
}

export default PageHeading

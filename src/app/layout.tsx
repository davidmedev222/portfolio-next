import { Footer, Header } from '@/components'
import { benzin, ego, tahoma } from '../styles/fonts'
import '../styles/globals.css'

export const metadata = {
  title: 'David Mamani - Portfolio',
  description: 'Generated by create next app'
}

interface Props {
  children: React.ReactNode
}

function RootLayout({ children }: Props) {
  return (
    <html lang='en' className={`${benzin.variable} ${ego.variable} ${tahoma.variable}`}>
      <body className='min-h-screen bg-white font-tahoma text-black'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout

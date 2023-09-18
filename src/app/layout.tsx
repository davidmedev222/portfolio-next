import './globals.css'

export const metadata = {
  title: 'David Mamani - Portfolio',
  description: 'Generated by create next app'
}

interface Props {
  children: React.ReactNode
}

function RootLayout({ children }: Props) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout

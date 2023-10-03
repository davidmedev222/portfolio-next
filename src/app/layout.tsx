import { benzin, ego, tahoma } from '../styles/fonts'
import '../styles/globals.css'
import Providers from './providers'

export const metadata = {
  title: 'David Mamani - Portfolio',
  description:
    'Web developer and mentor with 2 years of experience, specialized in Frontend with a solid focus on creating modern and functional user interfaces using best practices and industry standards.',
  generator: 'Next.js',
  applicationName: 'David Mamani - Portfolio',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'html5',
    'css3',
    'javascript',
    'typescript',
    'sass',
    'post css',
    'markdown',
    'babeljs',
    'vitejs',
    'nextjs',
    'tailwindcss',
    'nodejs',
    'expressjs',
    'expo',
    'firebase',
    'react',
    'materialui',
    'bootstrap',
    'css modules',
    'redux toolkit',
    'axios',
    'mongoose',
    'stripe',
    'react hook form',
    'react router dom',
    'swr',
    'zustand',
    'styled components',
    'pnpm',
    'npm',
    'mongodb',
    'trello',
    'figma',
    'miro',
    'git',
    'github',
    'visual studio code',
    'wordpress',
    'web',
    'dark web',
    'web developer',
    'web development',
    'portfolio',
    'software engineer',
    'software'
  ],
  authors: [{ name: 'David Mamani', url: 'https://www.linkedin.com/in/davidmedev/' }],
  creator: 'David Mamani',
  publisher: 'David Mamani',
  category: 'technology',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  openGraph: {
    title: 'David Mamani - Portfolio',
    description:
      'Web developer and mentor with 2 years of experience, specialized in Frontend with a solid focus on creating modern and functional user interfaces using best practices and industry standards.',
    url: 'https://www.davidmedev.tech/',
    siteName: 'David Mamani - Portfolio',
    locale: 'en',
    type: 'website'
  }
}

interface Props {
  children: React.ReactNode
}

function RootLayout({ children }: Props) {
  return (
    <html lang='en' suppressHydrationWarning className={`${benzin.variable} ${ego.variable} ${tahoma.variable}`}>
      <body className='min-h-screen bg-white font-tahoma text-black dark:bg-black dark:text-white'>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

export default RootLayout

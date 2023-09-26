'use client'
import { ThemeProvider } from 'next-themes'

interface Props {
  children: React.ReactNode
}

function Providers({ children }: Props) {
  return (
    <ThemeProvider
      storageKey='theme'
      defaultTheme='system'
      enableSystem
      enableColorScheme={false}
      themes={['system', 'dark', 'light']}
      attribute='class'
    >
      {children}
    </ThemeProvider>
  )
}

export default Providers

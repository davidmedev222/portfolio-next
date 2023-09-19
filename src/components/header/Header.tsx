import { Divider, DropdownLanguages, DropdownTheme, HamburgerMenu, LogoIcon, Navbar } from '@/components'

function Header() {
  return (
    <header className='relative flex max-w-screen-xl items-center justify-between gap-3 px-4 py-3 lg:px-16 lg:py-5 xl:mx-auto'>
      <LogoIcon className='mr-auto h-8 w-24 lg:h-[52px] lg:w-[164px]' />
      <Navbar />
      <Divider direction='vertical' className='hidden lg:block' />
      <DropdownLanguages />
      <DropdownTheme />
      <HamburgerMenu />
    </header>
  )
}

export default Header

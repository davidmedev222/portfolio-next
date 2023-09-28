import { CustomLink, OnlyLogo, SpiralIcon } from '@/components'
import { Routes } from '@/utils/const'

function NotFoundPage() {
  return (
    <div className='container-base flex min-h-screen flex-col items-center justify-center gap-y-[70px] overflow-hidden pb-32 pt-44 text-center font-benzin'>
      <div className='relative flex items-center gap-x-3 text-[50px] text-violet-500 md:text-[82px]'>
        4
        <OnlyLogo className='h-[60px] w-9 fill-black dark:fill-white md:h-24 md:w-14' />4
        <SpiralIcon className='absolute -top-[130%] left-[13.5%] -z-10 h-[232px] w-[232px] rotate-[27deg] md:h-[358px] md:w-[358px]' />
      </div>
      <div className='grid place-items-center gap-y-4'>
        <div className='text-lg md:text-[28px]'>Page Not Found</div>
        <p className='font-tahoma text-sm text-gray-700 md:text-lg'>
          Sorry, we couldn´t find the page you´re looking for.
        </p>
        <CustomLink className='mt-3 md:w-[566px]' href={Routes.home}>
          Back to home
        </CustomLink>
      </div>
    </div>
  )
}
export default NotFoundPage

'use client'
import { useRouter } from 'next/navigation'

function ArrowBack() {
  const { back } = useRouter()

  return (
    <svg
      onClick={back}
      className='absolute left-4 top-16 h-8 w-8 cursor-pointer fill-transparent stroke-black stroke-[0.4px] transition-colors duration-300 hover:stroke-violet-500 dark:stroke-white dark:hover:stroke-violet-500 xs:left-16 xs:top-24 xs:h-12 xs:w-12 2xl:h-16 2xl:w-16'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 30 30'
    >
      <path d='M20.7167 7.53361L13.2086 15.0417L13.0672 15.1831L13.2086 15.3245L20.7167 22.8326L18.6338 24.9008L8.91617 15.1831L18.6338 5.46545L20.7167 7.53361Z' />
      <circle cx='15' cy='15' r='14.75' />
    </svg>
  )
}

export default ArrowBack

import { Routes } from '@/utils/const'
import Link from 'next/link'

function NotFoundPage() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center gap-y-5 '>
      <h2 className='font-benzin text-4xl uppercase'>Not Found</h2>
      <Link className='text-xl uppercase underline' href={Routes.home}>
        Back to home
      </Link>
    </div>
  )
}
export default NotFoundPage

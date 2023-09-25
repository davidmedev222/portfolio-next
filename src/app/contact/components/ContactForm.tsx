import { languageEN } from '@/utils/const'
import Button from './Button'

function ContactForm() {
  return (
    <form className='mx-auto grid max-w-3xl gap-y-4 py-10 md:gap-y-5'>
      <input
        className='rounded-3xl border-none bg-box px-8 py-[18px] text-sm text-gray-700 shadow-md shadow-black/25 placeholder:text-gray-700 focus:ring-violet-500 dark:bg-violet-950 dark:text-violet-300 dark:placeholder:text-violet-300 md:text-lg'
        type='text'
        placeholder='Name'
      />
      <input
        className='rounded-3xl border-none bg-box px-8 py-[18px] text-sm text-gray-700 shadow-md shadow-black/25 placeholder:text-gray-700 focus:ring-violet-500 dark:bg-violet-950 dark:text-violet-300 dark:placeholder:text-violet-300 md:text-lg'
        type='email'
        placeholder='Email'
      />
      <textarea
        className='resize-none rounded-3xl border-none bg-box px-8 py-[18px] text-sm text-gray-700 shadow-md shadow-black/25 placeholder:text-gray-700 focus:ring-violet-500 dark:bg-violet-950 dark:text-violet-300 dark:placeholder:text-violet-300 md:text-lg'
        rows={6}
        placeholder='Mensaje'
      />
      <Button className='mt-14'>{languageEN.contact.contact.button}</Button>
    </form>
  )
}

export default ContactForm

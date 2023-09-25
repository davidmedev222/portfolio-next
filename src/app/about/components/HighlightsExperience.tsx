import { languageEN } from '@/utils/const'

function HighlightsExperience() {
  return (
    <div className='mt-11 bg-violet-300 dark:bg-violet-950 md:mt-20'>
      <ul className='mx-auto flex max-w-screen-md flex-wrap items-center justify-between px-10 py-4 text-center font-benzin text-xl text-violet-950 dark:text-violet-300 md:px-16 md:py-8 md:text-4xl'>
        {languageEN.about.experience.categories.map((category) => (
          <li key={category.id} className='grid md:gap-y-2'>
            {category.quantity} <span className='font-tahoma text-xs uppercase md:text-lg'>{category.title}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HighlightsExperience

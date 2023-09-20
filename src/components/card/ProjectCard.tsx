import Image from 'next/image'
import Link from 'next/link'
import ArrowIcon from '../icons/ArrowIcon'
import TextEllipsis from '../text/TextEllipsis'

function ProjectCard() {
  return (
    <article className='md:grid-area-project grid gap-2.5 py-10 md:grid-cols-project'>
      <h3 className='md:area-project-date font-benzin text-[min(6vw,48px)] uppercase md:pt-24 md:text-center'>
        Agosto <span className='font-ego'>2023</span>
      </h3>
      <Link href='/projects/design' className='md:area-project-image group relative h-60 md:h-96'>
        <Image
          className='rounded-3xl object-cover'
          src='/assets/projects/design.png'
          alt='Miniatura del proyecto'
          sizes='(max-width: 768px) 100vw, 70vw'
          fill
        />
        <div className='absolute left-0 top-0 grid h-full w-full place-items-center rounded-3xl bg-black/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100'>
          <ArrowIcon className='h-[52px] w-8 rotate-180 fill-transparent stroke-white stroke-[0.4px] md:h-36 md:w-20' />
        </div>
      </Link>
      <h4 className='lg:area-project-title font-benzin text-[min(6vw,48px)] uppercase'>
        Design <span className='font-ego'>Website</span>
      </h4>
      <TextEllipsis className='md:area-project-description text-sm md:text-lg' numberOfLines={3}>
        Website that allows designers to show their work and projects in an attractive and professional way. Where they
        can create their personalized portfolio, upload their designs, and share it with the world. This website allows
        them to highlight their talent and connect with potential clients or collaborators.
      </TextEllipsis>
      <ul className='md:area-project-skills mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-2.5 text-sm text-violet-950 md:mt-0 md:gap-x-3 md:gap-y-5 md:text-lg'>
        <li className='rounded-3xl bg-box px-2 py-0.5 shadow-md shadow-black/25 md:px-4'>Typescript</li>
        <li className='rounded-3xl bg-box px-2 py-0.5 shadow-md shadow-black/25 md:px-4'>Next</li>
        <li className='rounded-3xl bg-box px-2 py-0.5 shadow-md shadow-black/25 md:px-4'>Tailwind CSS</li>
        <li className='rounded-3xl bg-box px-2 py-0.5 shadow-md shadow-black/25 md:px-4'>Clsx</li>
        <li className='rounded-3xl bg-box px-2 py-0.5 shadow-md shadow-black/25 md:px-4'>React Hook Form</li>
        <li className='rounded-3xl bg-box px-2 py-0.5 shadow-md shadow-black/25 md:px-4'>Pnpm</li>
      </ul>
    </article>
  )
}

export default ProjectCard

import Image from 'next/image'

function HighlightsSkills() {
  return (
    <section className='mx-auto grid max-w-screen-md gap-y-7 px-4 py-6 md:gap-y-11 md:px-16 md:py-16'>
      <h5 className='text-xs text-gray-700 md:text-lg'>Lenguajes & Preprocesadores</h5>
      <ul className='flex flex-wrap items-center gap-4 md:gap-8'>
        <li>
          <Image
            className='h-9 w-9 object-cover md:h-16 md:w-16'
            src='/assets/skills/logohtml.webp'
            width={36}
            height={36}
            alt='Icono de tecnologia'
          />
        </li>
        <li>
          <Image
            className='h-9 w-9 object-cover md:h-16 md:w-16'
            src='/assets/skills/logocss.webp'
            width={36}
            height={36}
            alt='Icono de tecnologia'
          />
        </li>
        <li>
          <Image
            className='h-9 w-9 object-cover md:h-16 md:w-16'
            src='/assets/skills/logojavascript.webp'
            width={36}
            height={36}
            alt='Icono de tecnologia'
          />
        </li>
        <li>
          <Image
            className='h-9 w-9 object-cover md:h-16 md:w-16'
            src='/assets/skills/logotypescript.webp'
            width={36}
            height={36}
            alt='Icono de tecnologia'
          />
        </li>
        <li>
          <Image
            className='h-9 w-9 object-cover md:h-16 md:w-16'
            src='/assets/skills/logosass.webp'
            width={36}
            height={36}
            alt='Icono de tecnologia'
          />
        </li>
        <li>
          <Image
            className='h-9 w-9 object-cover md:h-16 md:w-16'
            src='/assets/skills/logopostcss.webp'
            width={36}
            height={36}
            alt='Icono de tecnologia'
          />
        </li>
        <li>
          <Image
            className='h-9 w-9 object-cover md:h-16 md:w-16'
            src='/assets/skills/logomarkdown.webp'
            width={36}
            height={36}
            alt='Icono6de tecnologia'
          />
        </li>
      </ul>
    </section>
  )
}

export default HighlightsSkills

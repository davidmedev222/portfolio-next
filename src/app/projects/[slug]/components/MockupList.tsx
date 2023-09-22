import Image from 'next/image'

function MockupList() {
  return (
    <div className='container-base grid gap-6 py-6 md:grid-cols-2 md:gap-x-6 md:gap-y-8 md:py-20'>
      <div className='relative h-44 md:h-96'>
        <Image
          className='rounded-3xl object-cover'
          src='/assets/projects/apollonft/mobile.png'
          sizes='(max-width: 768px) 100vw, 50vw'
          fill
          alt='asd'
        />
      </div>
      <div className='relative h-44 md:h-96'>
        <Image
          className='rounded-3xl object-cover'
          src='/assets/projects/apollonft/mobile.png'
          sizes='(max-width: 768px) 100vw, 50vw'
          fill
          alt='asd'
        />
      </div>
      <div className='relative h-44 md:col-span-2 md:h-[548px]'>
        <Image
          className='rounded-3xl object-cover'
          src='/assets/projects/apollonft/mobile.png'
          sizes='100vw'
          fill
          alt='asd'
        />
      </div>
    </div>
  )
}

export default MockupList

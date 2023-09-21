'use client'
import { languageEN } from '@/utils/const'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import ProjectCard from '../card/ProjectCard'

function ProjectCarousel() {
  return (
    <Swiper
      modules={[Pagination, EffectCoverflow]}
      effect='coverflow'
      grabCursor
      slidesPerView={1}
      pagination={{
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 3
      }}
      coverflowEffect={{
        slideShadows: false,
        modifier: 2,
        depth: 200
      }}
      className='md:!hidden'
    >
      {languageEN.home.projects.map((project) => (
        <SwiperSlide key={project.id}>
          <ProjectCard project={project} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ProjectCarousel

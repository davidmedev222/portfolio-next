interface ILogo {
  id: string
  image: string
  alt: string
}

export interface ISkill {
  id: string
  title: string
  logos: ILogo[]
}

interface IThemeImage {
  image: string
  imageDark: string
}

interface IImages {
  mobile: IThemeImage
  desktop: IThemeImage
}

interface IInfo {
  code: string
  demo: string
  project: string
  date: string
  role: string
  technologies: string
  tools: string
  back: string
  next: string
}
export interface IMockup {
  id: string
  image: string
  imageDark: string
  alt: string
}

export interface IProject {
  id: string
  month: string
  year: string
  name: string
  subname: string
  skills: string[]
  slug: string
  thumbnail: string
  thumbnailDark: string
  images: IImages
  alt: string
  code: string
  demo: string
  description: string
  project: string
  date: string
  role: string
  technologies: string[]
  tools: string[]
  video: string
  info: IInfo
  mockups: IMockup[]
  prevProject: string
  nextProject: string
}

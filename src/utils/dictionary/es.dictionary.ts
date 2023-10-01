import { Routes } from '../const/routes.const'

const dictionary = {
  header: {
    links: [
      { id: crypto.randomUUID(), href: Routes.home, title: 'Inicio' },
      { id: crypto.randomUUID(), href: Routes.projects, title: 'Proyectos' },
      { id: crypto.randomUUID(), href: Routes.about, title: 'Sobre Mí' },
      { id: crypto.randomUUID(), href: Routes.contact, title: 'Contacto' }
    ],
    languages: {
      en: 'en',
      es: 'es',
      pt: 'pt'
    },
    themes: {
      system: 'Sistema',
      light: 'Claro',
      dark: 'Oscuro'
    }
  },
  home: {
    name: 'David Mamani',
    role: 'Desarrollador Frontend',
    projects: [
      {
        id: crypto.randomUUID(),
        month: 'Agosto',
        year: '2023',
        name: 'Design',
        subname: 'Website',
        skills: ['Typescript', 'Next', 'Tailwind CSS', 'Clsx', 'React Hook Form', 'Pnpm'],
        slug: 'design-website',
        thumbnail: '/assets/projects/designwebsite/designwebsite.webp',
        thumbnailDark: '/assets/projects/designwebsite/designwebsited.webp',
        images: {
          mobile: {
            image: '/assets/projects/designwebsite/designwebsitemp.webp',
            imageDark: '/assets/projects/designwebsite/designwebsitempd.webp'
          },
          desktop: {
            image: '/assets/projects/designwebsite/designwebsitedp.webp',
            imageDark: '/assets/projects/designwebsite/designwebsitedpd.webp'
          }
        },
        alt: 'Miniatura del proyecto de diseño web',
        code: 'https://github.com/davidmedev222/design',
        demo: 'https://designwebsite.vercel.app/',
        description:
          'Sitio web que permite a los diseñadores mostrar sus trabajos y proyectos de forma atractiva y profesional. Donde pueden crear su portfolio personalizado, subir sus diseños y compartirlo con el mundo. Esta web les permite destacar su talento y conectar con potenciales clientes o colaboradores.',
        project: 'Design Website',
        date: 'Agosto 2023',
        role: 'Desarrollador Frontend',
        technologies: [
          'Typescript',
          'Next',
          'Tailwind CSS',
          'Clsx',
          'React Hook Form',
          'Next Themes',
          'React Hot Toast',
          'TailwindCSS Animate',
          'CommitLint',
          'Husky',
          'PostCSS',
          'React Fast Marquee',
          'Pnpm'
        ],
        tools: ['ESLint', 'Prettier', 'Figma', 'Notion', 'Visual Studio Code', 'Git', 'Github'],
        video: '',
        info: {
          code: 'Código',
          demo: 'Demo',
          project: 'Proyecto',
          date: 'Fecha',
          role: 'Rol',
          technologies: 'Tecnologías',
          tools: 'Herramientas',
          back: 'Back',
          next: 'Next'
        },
        mockups: [
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/designwebsite/designwebsite/designwebsite.webp',
            imageDark: '/assets/projects/designwebsite/designwebsite/designwebsited.webp',
            alt: 'Diseño de la presentación del proyecto del sitio web de diseño'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/designwebsite/designwebsite/designwebsite2.webp',
            imageDark: '/assets/projects/designwebsite/designwebsite/designwebsite2d.webp',
            alt: 'Diseño de la presentación del proyecto del sitio web de diseño'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/designwebsite/designwebsite/designwebsite3.webp',
            imageDark: '/assets/projects/designwebsite/designwebsite/designwebsite3d.webp',
            alt: 'Diseño de la presentación del proyecto del sitio web de diseño'
          }
        ],
        prevProject: 'solidarity-union',
        nextProject: 'mova-app'
      },
      {
        id: crypto.randomUUID(),
        month: 'Julio',
        year: '2023',
        name: 'Mova',
        subname: 'App',
        skills: ['Typescript', 'Expo', 'React Native', 'Clsx', 'Firebase', 'Pnpm'],
        slug: 'mova-app',
        image: '/assets/projects/movaapp/movaapp.webp',
        thumbnail: '/assets/projects/movaapp/movaapp.webp',
        thumbnailDark: '/assets/projects/movaapp/movaappd.webp',
        images: {
          mobile: {
            image: '/assets/projects/movaapp/movaappmp.webp',
            imageDark: '/assets/projects/movaapp/movaappmpd.webp'
          },
          desktop: {
            image: '/assets/projects/movaapp/movaappdp.webp',
            imageDark: '/assets/projects/movaapp/movaappdpd.webp'
          }
        },
        alt: 'Miniatura del proyecto de la aplicación Mova',
        code: 'https://github.com/davidmedev222/mova',
        demo: 'https://github.com/davidmedev222/mova#usage',
        description:
          'Aplicación móvil donde puedes ver los catálogos de películas populares, películas mejor valoradas, películas entrantes, series y mucho más.',
        project: 'Mova App',
        date: 'Julio 2023',
        role: 'Desarrollador Frontend',
        technologies: [
          'Typescript',
          'React Native',
          'Expo',
          'Expo Router',
          'NativeWind',
          'Clsx',
          'Firebase',
          'Gorhom Bottom Sheet',
          'Material Top Tabs',
          'Date Fns',
          'BabelJs',
          'CommitLint',
          'Husky',
          'Pnpm'
        ],
        tools: [
          'ESLint',
          'Prettier',
          'Figma',
          'Notion',
          'RapidAPI Client',
          'Discord',
          'Visual Studio Code',
          'Git',
          'Github'
        ],
        video: '',
        info: {
          code: 'Código',
          demo: 'Demo',
          project: 'Proyecto',
          date: 'Fecha',
          role: 'Rol',
          technologies: 'Tecnologías',
          tools: 'Herramientas',
          back: 'Back',
          next: 'Next'
        },
        mockups: [
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/movaapp/movaapp.webp',
            imageDark: '/assets/projects/movaapp/movaappd.webp',
            alt: 'Diseño de la presentación del proyecto mova app'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/movaapp/movaapp2.webp',
            imageDark: '/assets/projects/movaapp/movaapp2.webp',
            alt: 'Diseño de la presentación del proyecto mova app'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/movaapp/movaapp3.webp',
            imageDark: '/assets/projects/movaapp/movaapp3.webp',
            alt: 'Diseño de la presentación del proyecto mova app'
          }
        ],
        prevProject: 'design-website',
        nextProject: 'lot-todo'
      },
      {
        id: crypto.randomUUID(),
        month: 'Mayo',
        year: '2023',
        name: 'My',
        subname: 'Photos',
        skills: ['Typescript', 'Next', 'Tailwind CSS', 'Clsx', 'Firebase', 'Pnpm'],
        slug: 'my-photos',
        thumbnail: '/assets/projects/myphotos/myphotos.webp',
        thumbnailDark: '/assets/projects/myphotos/myphotosd.webp',
        images: {
          mobile: {
            image: '/assets/projects/myphotos/myphotosmp.webp',
            imageDark: '/assets/projects/myphotos/myphotosmpd.webp'
          },
          desktop: {
            image: '/assets/projects/myphotos/myphotosdp.webp',
            imageDark: '/assets/projects/myphotos/myphotosdpd.webp'
          }
        },
        alt: 'Miniatura del proyecto Mis fotos',
        code: 'https://github.com/davidmedev222/my-photos',
        demo: 'https://myphotosdev.vercel.app/',
        description:
          'Sitio web diseñado exclusivamente para mostrar fotografías, centrado en ofrecer a los visitantes una experiencia visual cautivadora presentando imágenes impactantes en un sencillo diseño de una página.',
        project: 'My Photos',
        date: 'Mayo 2023',
        role: 'Desarrollador Frontend',
        technologies: [
          'Typescript',
          'Next',
          'Tailwind CSS',
          'Post CSS',
          'Clsx',
          'Firebase',
          'CommitLint',
          'Husky',
          'Pnpm'
        ],
        tools: ['ESLint', 'Prettier', 'Figma', 'Trello', 'Visual Studio Code', 'Git', 'Github'],
        video: '',
        info: {
          code: 'Código',
          demo: 'Demo',
          project: 'Proyecto',
          date: 'Fecha',
          role: 'Rol',
          technologies: 'Tecnologías',
          tools: 'Herramientas',
          back: 'Back',
          next: 'Next'
        },
        mockups: [
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/myphotos/myphotos.webp',
            imageDark: '/assets/projects/myphotos/myphotosd.webp',
            alt: 'Diseño de la presentación del proyecto my photos'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/myphotos/myphotos2.webp',
            imageDark: '/assets/projects/myphotos/myphotos2d.webp',
            alt: 'Diseño de la presentación del proyecto my photos'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/myphotos/myphotos3.webp',
            imageDark: '/assets/projects/myphotos/myphotos3d.webp',
            alt: 'Diseño de la presentación del proyecto my photos'
          }
        ],
        prevProject: 'lawyer-website',
        nextProject: 'chat-box'
      },
      {
        id: crypto.randomUUID(),
        month: 'Enero',
        year: '2023',
        name: 'Apollo',
        subname: 'NFT',
        skills: ['Javascript', 'React', 'Sass', 'ViteJs', 'React Router Dom', 'Pnpm'],
        slug: 'apollo-nft',
        thumbnail: '/assets/projects/apollonft/apollonft.webp',
        thumbnailDark: '/assets/projects/apollonft/apollonftd.webp',
        images: {
          mobile: {
            image: '/assets/projects/apollonft/apollonftmp.webp',
            imageDark: '/assets/projects/apollonft/apollonftmpd.webp'
          },
          desktop: {
            image: '/assets/projects/apollonft/apollonftdp.webp',
            imageDark: '/assets/projects/apollonft/apollonftdpd.webp'
          }
        },
        alt: 'Miniatura del proyecto Apollo NFT',
        code: 'https://github.com/davidmedev222/landing-apollonft-react',
        demo: 'https://apollonft.vercel.app/',
        description:
          'Apollo NFT, Página web donde puedes encontrar información sobre el mercado de nft e información sobre cómo crear tu propio nft desde la página.',
        project: 'Apollo NFT',
        date: 'Enero 2023',
        role: 'Desarrollador Frontend',
        technologies: ['Javascript', 'React', 'Sass', 'ViteJs', 'React Router Dom', 'CommitLint', 'Husky', 'Pnpm'],
        tools: ['ESLint', 'Figma', 'Trello', 'Visual Studio Code', 'Git', 'Github'],
        video: '',
        info: {
          code: 'Código',
          demo: 'Demo',
          project: 'Proyecto',
          date: 'Fecha',
          role: 'Rol',
          technologies: 'Tecnologías',
          tools: 'Herramientas',
          back: 'Back',
          next: 'Next'
        },
        mockups: [
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/apollonft/apollonft.webp',
            imageDark: '/assets/projects/apollonft/apollonftd.webp',
            alt: 'Diseño de la presentación del proyecto Apollo NFT'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/apollonft/apollonft2.webp',
            imageDark: '/assets/projects/apollonft/apollonft2d.webp',
            alt: 'Diseño de la presentación del proyecto Apollo NFT'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/apollonft/apollonft3.webp',
            imageDark: '/assets/projects/apollonft/apollonft3d.webp',
            alt: 'Diseño de la presentación del proyecto Apollo NFT'
          }
        ],
        prevProject: 'custom-sports',
        nextProject: 'blizt-website'
      },
      {
        id: crypto.randomUUID(),
        month: 'Octubre',
        year: '2022',
        name: 'Jordan',
        subname: 'Store',
        skills: ['Javascript', 'React', 'Styled Components', 'ViteJs', 'React Router Dom', 'Firebase'],
        slug: 'jordan-store',
        thumbnail: '/assets/projects/jordanstore/jordanstore.webp',
        thumbnailDark: '/assets/projects/jordanstore/jordanstored.webp',
        images: {
          mobile: {
            image: '/assets/projects/jordanstore/jordanstoremp.webp',
            imageDark: '/assets/projects/jordanstore/jordanstorempd.webp'
          },
          desktop: {
            image: '/assets/projects/jordanstore/jordanstoredp.webp',
            imageDark: '/assets/projects/jordanstore/jordanstoredpd.webp'
          }
        },
        alt: 'Miniatura del proyecto Jordan Store',
        code: 'https://github.com/davidmedev222/ecommerce-jordan-react',
        demo: 'https://jordanstore.vercel.app/',
        description:
          'Tienda de zapatillas en línea para personas con preferencia por la marca Jordan, donde podrán comprar y gestionar su propia cuenta en el sitio web.',
        project: 'Jordan Store',
        date: 'Octubre 2022',
        role: 'Desarrollador Frontend',
        technologies: [
          'Javascript',
          'React',
          'Styled Components',
          'ViteJs',
          'React Router Dom',
          'Firebase',
          'Formkit Auto Animate',
          'React Toastify',
          'Pnpm'
        ],
        tools: ['ESLint', 'Trello', 'Visual Studio Code', 'Git', 'Github'],
        video: '',
        info: {
          code: 'Código',
          demo: 'Demo',
          project: 'Proyecto',
          date: 'Fecha',
          role: 'Rol',
          technologies: 'Tecnologías',
          tools: 'Herramientas',
          back: 'Back',
          next: 'Next'
        },
        mockups: [
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/jordanstore/jordanstore.webp',
            imageDark: '/assets/projects/jordanstore/jordanstored.webp',
            alt: 'Diseño de la presentación del proyecto de tienda jordan'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/jordanstore/jordanstore2.webp',
            imageDark: '/assets/projects/jordanstore/jordanstore2d.webp',
            alt: 'Diseño de la presentación del proyecto de tienda jordan'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/jordanstore/jordanstore3.webp',
            imageDark: '/assets/projects/jordanstore/jordanstore3d.webp',
            alt: 'Diseño de la presentación del proyecto de tienda jordan'
          }
        ],
        prevProject: 'stadium-sports',
        nextProject: 'solidarity-union'
      }
    ],
    link: { id: crypto.randomUUID(), href: Routes.projects, title: 'Ver Todos' }
  },
  projects: {
    title: 'Proyectos',
    projects: [
      {
        id: crypto.randomUUID(),
        month: 'Agosto',
        year: '2023',
        name: 'Solidarity',
        subname: 'Union',
        skills: ['Typescript', 'Next', 'Tailwind CSS', 'Redux Toolkit', 'Axios', 'Npm'],
        slug: 'solidarity-union',
        thumbnail: '/assets/projects/unionsolidaria/unionsolidaria.webp',
        thumbnailDark: '/assets/projects/unionsolidaria/unionsolidariad.webp',
        images: {
          mobile: {
            image: '/assets/projects/unionsolidaria/unionsolidariamp.webp',
            imageDark: '/assets/projects/unionsolidaria/unionsolidariampd.webp'
          },
          desktop: {
            image: '/assets/projects/unionsolidaria/unionsolidariadp.webp',
            imageDark: '/assets/projects/unionsolidaria/unionsolidariadpd.webp'
          }
        },
        alt: 'Miniatura del proyecto de sindicato solidario',
        code: 'https://github.com/No-Country/s10-13-m-express-next',
        demo: 'https://union-solidaria-app.vercel.app/',
        description:
          'Una webapp que conecta voluntarios con iniciativas sociales de diferentes categorías y temáticas, que también permite a las organizaciones crear sus propias iniciativas para reclutar voluntarios. Un portal orientado a voluntarios que quieren ayudar más allá de sus recursos o posibilidades.',
        project: 'Solidarity Union',
        date: 'Agosto 2023',
        role: 'Desarrollador Frontend',
        technologies: [
          'Typescript',
          'Next',
          'Tailwind CSS',
          'Redux Toolkit',
          'Axios',
          'React Hook Form',
          'Clsx',
          'MUI',
          'Emotion',
          'Framer Motion',
          'PostCSS',
          'Sass',
          'Formkit Auto Animate',
          'CommitLint',
          'Husky',
          'Npm'
        ],
        tools: [
          'ESLint',
          'Prettier',
          'Figma',
          'Notion',
          'RapidAPI Client',
          'Slack',
          'Discord',
          'Visual Studio Code',
          'Git',
          'Github'
        ],
        video: '',
        info: {
          code: 'Código',
          demo: 'Demo',
          project: 'Proyecto',
          date: 'Fecha',
          role: 'Rol',
          technologies: 'Tecnologías',
          tools: 'Herramientas',
          back: 'Back',
          next: 'Next'
        },
        mockups: [
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/unionsolidaria/unionsolidaria.webp',
            imageDark: '/assets/projects/unionsolidaria/unionsolidariad.webp',
            alt: 'Diseño de la presentación del proyecto de unión solidaria'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/unionsolidaria/unionsolidaria2.webp',
            imageDark: '/assets/projects/unionsolidaria/unionsolidaria2d.webp',
            alt: 'Diseño de la presentación del proyecto de unión solidaria'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/unionsolidaria/unionsolidaria3.webp',
            imageDark: '/assets/projects/unionsolidaria/unionsolidaria3d.webp',
            alt: 'Diseño de la presentación del proyecto de unión solidaria'
          }
        ],
        prevProject: 'jordan-store',
        nextProject: 'design-website'
      },
      {
        id: crypto.randomUUID(),
        month: 'Agosto',
        year: '2023',
        name: 'Design',
        subname: 'Website',
        skills: ['Typescript', 'Next', 'Tailwind CSS', 'Clsx', 'React Hook Form', 'Pnpm'],
        slug: 'design-website',
        thumbnail: '/assets/projects/designwebsite/designwebsite.webp',
        thumbnailDark: '/assets/projects/designwebsite/designwebsited.webp',
        images: {
          mobile: {
            image: '/assets/projects/designwebsite/designwebsitemp.webp',
            imageDark: '/assets/projects/designwebsite/designwebsitempd.webp'
          },
          desktop: {
            image: '/assets/projects/designwebsite/designwebsitedp.webp',
            imageDark: '/assets/projects/designwebsite/designwebsitedpd.webp'
          }
        },
        alt: 'Miniatura de proyecto de sitio web de diseño',
        code: 'https://github.com/davidmedev222/design',
        demo: 'https://designwebsite.vercel.app/',
        description:
          'Sitio web que permite a los diseñadores mostrar sus trabajos y proyectos de forma atractiva y profesional. Donde pueden crear su portfolio personalizado, subir sus diseños y compartirlo con el mundo. Esta web les permite destacar su talento y conectar con potenciales clientes o colaboradores.',
        project: 'Design Website',
        date: 'Agosto 2023',
        role: 'Desarrollador Frontend',
        technologies: [
          'Typescript',
          'Next',
          'Tailwind CSS',
          'Clsx',
          'React Hook Form',
          'Next Themes',
          'React Hot Toast',
          'TailwindCSS Animate',
          'CommitLint',
          'Husky',
          'PostCSS',
          'React Fast Marquee',
          'Pnpm'
        ],
        tools: ['ESLint', 'Prettier', 'Figma', 'Notion', 'Visual Studio Code', 'Git', 'Github'],
        video: '',
        info: {
          code: 'Código',
          demo: 'Demo',
          project: 'Proyecto',
          date: 'Fecha',
          role: 'Rol',
          technologies: 'Tecnologías',
          tools: 'Herramientas',
          back: 'Back',
          next: 'Next'
        },
        mockups: [
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/designwebsite/designwebsite.webp',
            imageDark: '/assets/projects/designwebsite/designwebsited.webp',
            alt: 'Diseño de la presentación del proyecto del sitio web de diseño'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/designwebsite/designwebsite2.webp',
            imageDark: '/assets/projects/designwebsite/designwebsite2d.webp',
            alt: 'Diseño de la presentación del proyecto del sitio web de diseño'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/designwebsite/designwebsite3.webp',
            imageDark: '/assets/projects/designwebsite/designwebsite3d.webp',
            alt: 'Diseño de la presentación del proyecto del sitio web de diseño'
          }
        ],
        prevProject: 'solidarity-union',
        nextProject: 'mova-app'
      },
      {
        id: crypto.randomUUID(),
        month: 'Julio',
        year: '2023',
        name: 'Mova',
        subname: 'App',
        skills: ['Typescript', 'Expo', 'React Native', 'Clsx', 'Firebase', 'Pnpm'],
        slug: 'mova-app',
        image: '/assets/projects/movaapp/movaapp.webp',
        thumbnail: '/assets/projects/movaapp/movaapp.webp',
        thumbnailDark: '/assets/projects/movaapp/movaappd.webp',
        images: {
          mobile: {
            image: '/assets/projects/movaapp/movaappmp.webp',
            imageDark: '/assets/projects/movaapp/movaappmpd.webp'
          },
          desktop: {
            image: '/assets/projects/movaapp/movaappdp.webp',
            imageDark: '/assets/projects/movaapp/movaappdpd.webp'
          }
        },
        alt: 'Miniatura del proyecto de la aplicación Mova',
        code: 'https://github.com/davidmedev222/mova',
        demo: 'https://github.com/davidmedev222/mova#usage',
        description:
          'Aplicación móvil donde puedes ver los catálogos de películas populares, películas mejor valoradas, películas entrantes, series y mucho más.',
        project: 'Mova App',
        date: 'Julio 2023',
        role: 'Desarrollador Frontend',
        technologies: [
          'Typescript',
          'React Native',
          'Expo',
          'Expo Router',
          'NativeWind',
          'Clsx',
          'Firebase',
          'Gorhom Bottom Sheet',
          'Material Top Tabs',
          'Date Fns',
          'BabelJs',
          'CommitLint',
          'Husky',
          'Pnpm'
        ],
        tools: [
          'ESLint',
          'Prettier',
          'Figma',
          'Notion',
          'RapidAPI Client',
          'Discord',
          'Visual Studio Code',
          'Git',
          'Github'
        ],
        video: '',
        info: {
          code: 'Código',
          demo: 'Demo',
          project: 'Proyecto',
          date: 'Fecha',
          role: 'Rol',
          technologies: 'Tecnologías',
          tools: 'Herramientas',
          back: 'Back',
          next: 'Next'
        },
        mockups: [
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/movaapp/movaapp.webp',
            imageDark: '/assets/projects/movaapp/movaappd.webp',
            alt: 'Diseño de la presentación del proyecto mova app'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/movaapp/movaapp2.webp',
            imageDark: '/assets/projects/movaapp/movaapp2.webp',
            alt: 'Diseño de la presentación del proyecto mova app'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/movaapp/movaapp3.webp',
            imageDark: '/assets/projects/movaapp/movaapp3.webp',
            alt: 'Diseño de la presentación del proyecto mova app'
          }
        ],
        prevProject: 'design-website',
        nextProject: 'lot-todo'
      },
      {
        id: crypto.randomUUID(),
        month: 'Julio',
        year: '2023',
        name: 'Lot',
        subname: 'Todo',
        skills: ['Javascript', 'Expo', 'React', 'Style Sheet', 'Firebase', 'Npm'],
        slug: 'lot-todo',
        thumbnail: '/assets/projects/lottodo/lottodo.webp',
        thumbnailDark: '/assets/projects/lottodo/lottodod.webp',
        images: {
          mobile: {
            image: '/assets/projects/lottodo/lottodomp.webp',
            imageDark: '/assets/projects/lottodo/lottodompd.webp'
          },
          desktop: {
            image: '/assets/projects/lottodo/lottododp.webp',
            imageDark: '/assets/projects/lottodo/lottododpd.webp'
          }
        },
        alt: 'Miniatura del proyecto Lot Todo',
        code: 'https://github.com/No-Country/C12-38-M-REACTNATIVE',
        demo: 'https://expo.dev/@florencia09/lot-todo?serviceType=classic&distribution=expo-go',
        description:
          'La aplicación busca ofrecer una herramienta a los potenciales usuarios para organizar sus actividades diarias a través de listas de tareas divididas por categorías y con la posibilidad de visualizarlas de forma diaria, semanal y mensual; así como una pantalla de inicio donde se puede ver de un vistazo el número total de tareas creadas. También existe la posibilidad de borrar estas tareas o marcarlas como completadas. Por último, puedes registrarte como usuario, cambiar los datos de tu cuenta y tu foto de perfil.',
        project: 'Lot Todo',
        date: 'Julio 2023',
        role: 'Desarrollador Frontend',
        technologies: [
          'Javascript',
          ' React Native',
          'Expo',
          'Expo Router',
          'Style Sheet',
          'Firebase',
          'BabelJs',
          'Gorhom Bottom Sheet',
          'React Navigation',
          'CommitLint',
          'Husky',
          'Npm'
        ],
        tools: ['ESLint', 'Prettier', 'Figma', 'Trello', 'Slack', 'Discord', 'Visual Studio Code', 'Git', 'Github'],
        video: '',
        info: {
          code: 'Código',
          demo: 'Demo',
          project: 'Proyecto',
          date: 'Fecha',
          role: 'Rol',
          technologies: 'Tecnologías',
          tools: 'Herramientas',
          back: 'Back',
          next: 'Next'
        },
        mockups: [
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/lottodo/lottodo.webp',
            imageDark: '/assets/projects/lottodo/lottodod.webp',
            alt: 'Diseño de presentación del lote todo proyecto'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/lottodo/lottodo2.webp',
            imageDark: '/assets/projects/lottodo/lottodo2d.webp',
            alt: 'Diseño de presentación del lote todo proyecto'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/lottodo/lottodo3.webp',
            imageDark: '/assets/projects/lottodo/lottodo3d.webp',
            alt: 'Diseño de presentación del lote todo proyecto'
          }
        ],
        prevProject: 'mova-app',
        nextProject: 'lawyer-website'
      },
      {
        id: crypto.randomUUID(),
        month: 'Julio',
        year: '2023',
        name: 'Lawyer',
        subname: 'Website',
        skills: ['Typescript', 'Next', 'Tailwind CSS', 'Clsx', 'React Hook Form', 'Pnpm'],
        slug: 'lawyer-website',
        thumbnail: '/assets/projects/lawyerwebsite/lawyerwebsite.webp',
        thumbnailDark: '/assets/projects/lawyerwebsite/lawyerwebsited.webp',
        images: {
          mobile: {
            image: '/assets/projects/lawyerwebsite/lawyerwebsitemp.webp',
            imageDark: '/assets/projects/lawyerwebsite/lawyerwebsitempd.webp'
          },
          desktop: {
            image: '/assets/projects/lawyerwebsite/lawyerwebsitedp.webp',
            imageDark: '/assets/projects/lawyerwebsite/lawyerwebsitedpd.webp'
          }
        },
        alt: 'Proyecto de página web para abogados',
        code: 'https://github.com/demattei-teo/Lawyer',
        demo: 'https://lawyerdev.vercel.app/',
        description:
          'Página web de un despacho de abogados que ofrece servicios jurídicos a sus clientes. Donde podrá consultar información sobre su asesoramiento y representación legal de calidad a sus clientes respetando los principios éticos y deontológicos de la profesión.',
        project: 'Lawyer Website',
        date: 'Julio 2023',
        role: 'Desarrollador Frontend',
        technologies: [
          'Typescript',
          'Next',
          'Tailwind CSS',
          'Clsx',
          'React Hook Form',
          'Post CSS',
          'TailwindCSS Animated',
          'CommitLint',
          'Husky',
          'Pnpm'
        ],
        tools: ['ESLint', 'Prettier', 'Figma', 'Notion', 'Discord', 'Visual Studio Code', 'Git', 'Github'],
        video: '',
        info: {
          code: 'Código',
          demo: 'Demo',
          project: 'Proyecto',
          date: 'Fecha',
          role: 'Rol',
          technologies: 'Tecnologías',
          tools: 'Herramientas',
          back: 'Back',
          next: 'Next'
        },
        mockups: [
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/lawyerwebsite/lawyerwebsite.webp',
            imageDark: '/assets/projects/lawyerwebsite/lawyerwebsited.webp',
            alt: 'Diseño de la presentación del proyecto de sitio web de abogados'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/lawyerwebsite/lawyerwebsite2.webp',
            imageDark: '/assets/projects/lawyerwebsite/lawyerwebsite2d.webp',
            alt: 'Diseño de la presentación del proyecto de sitio web de abogados'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/lawyerwebsite/lawyerwebsite3.webp',
            imageDark: '/assets/projects/lawyerwebsite/lawyerwebsite3d.webp',
            alt: 'Diseño de la presentación del proyecto de sitio web de abogados'
          }
        ],
        prevProject: 'lot-todo',
        nextProject: 'my-photos'
      },
      {
        id: crypto.randomUUID(),
        month: 'Mayo',
        year: '2023',
        name: 'My',
        subname: 'Photos',
        skills: ['Typescript', 'Next', 'Tailwind CSS', 'Clsx', 'Firebase', 'Pnpm'],
        slug: 'my-photos',
        thumbnail: '/assets/projects/myphotos/myphotos.webp',
        thumbnailDark: '/assets/projects/myphotos/myphotosd.webp',
        images: {
          mobile: {
            image: '/assets/projects/myphotos/myphotosmp.webp',
            imageDark: '/assets/projects/myphotos/myphotosmpd.webp'
          },
          desktop: {
            image: '/assets/projects/myphotos/myphotosdp.webp',
            imageDark: '/assets/projects/myphotos/myphotosdpd.webp'
          }
        },
        alt: 'Miniatura del proyecto Mis fotos',
        code: 'https://github.com/davidmedev222/my-photos',
        demo: 'https://myphotosdev.vercel.app/',
        description:
          'Sitio web diseñado exclusivamente para mostrar fotografías, centrado en ofrecer a los visitantes una experiencia visual cautivadora presentando imágenes impactantes en un sencillo diseño de una página.',
        project: 'My Photos',
        date: 'Mayo 2023',
        role: 'Desarrollador Frontend',
        technologies: [
          'Typescript',
          'Next',
          'Tailwind CSS',
          'Post CSS',
          'Clsx',
          'Firebase',
          'CommitLint',
          'Husky',
          'Pnpm'
        ],
        tools: ['ESLint', 'Prettier', 'Figma', 'Trello', 'Visual Studio Code', 'Git', 'Github'],
        video: '',
        info: {
          code: 'Código',
          demo: 'Demo',
          project: 'Proyecto',
          date: 'Fecha',
          role: 'Rol',
          technologies: 'Tecnologías',
          tools: 'Herramientas',
          back: 'Back',
          next: 'Next'
        },
        mockups: [
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/myphotos/myphotos.webp',
            imageDark: '/assets/projects/myphotos/myphotosd.webp',
            alt: 'Diseño de la presentación del proyecto my photos'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/myphotos/myphotos2.webp',
            imageDark: '/assets/projects/myphotos/myphotos2d.webp',
            alt: 'Diseño de la presentación del proyecto my photos'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/myphotos/myphotos3.webp',
            imageDark: '/assets/projects/myphotos/myphotos3d.webp',
            alt: 'Diseño de la presentación del proyecto my photos'
          }
        ],
        prevProject: 'lawyer-website',
        nextProject: 'chat-box'
      },
      {
        id: crypto.randomUUID(),
        month: 'Marzo',
        year: '2023',
        name: 'Chat',
        subname: 'Box',
        skills: ['Typescript', 'React', 'Styled Components', 'ViteJs', 'React Router Dom', 'Npm'],
        slug: 'chat-box',
        thumbnail: '/assets/projects/chatbox/chatbox.webp',
        thumbnailDark: '/assets/projects/chatbox/chatboxd.webp',
        images: {
          mobile: {
            image: '/assets/projects/chatbox/chatboxmp.webp',
            imageDark: '/assets/projects/chatbox/chatboxmpd.webp'
          },
          desktop: {
            image: '/assets/projects/chatbox/chatboxdp.webp',
            imageDark: '/assets/projects/chatbox/chatboxdpd.webp'
          }
        },
        alt: 'Miniatura del proyecto Chat Box',
        code: 'https://github.com/No-Country/S7-20-T-NODEREACT',
        demo: 'https://github.com/No-Country/S7-20-T-NODEREACT',
        description:
          'Una aplicación de chat que permite a los usuarios comunicarse con otros usuarios a través de mensajes de texto, donde los usuarios pueden crear una cuenta, cambiar su configuración y preferencias.',
        project: 'Chat Box',
        date: 'Marzo 2023',
        role: 'Desarrollador Frontend',
        technologies: [
          'Typescript',
          'React',
          'Styled Components',
          'ViteJs',
          'React Router Dom',
          'Axios',
          'ExpressJs',
          'MongoDB',
          'Mongoose',
          'CommitLint',
          'Husky',
          'Npm'
        ],
        tools: [
          'ESLint',
          'Figma',
          'Trello',
          'RapidAPI Client',
          'Slack',
          'Discord',
          'Visual Studio Code',
          'Git',
          'Github'
        ],
        video: '',
        info: {
          code: 'Código',
          demo: 'Demo',
          project: 'Proyecto',
          date: 'Fecha',
          role: 'Rol',
          technologies: 'Tecnologías',
          tools: 'Herramientas',
          back: 'Back',
          next: 'Next'
        },
        mockups: [
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/chatbox/chatbox.webp',
            imageDark: '/assets/projects/chatbox/chatboxd.webp',
            alt: 'Diseño de la presentación del proyecto de chat box'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/chatbox/chatbox2.webp',
            imageDark: '/assets/projects/chatbox/chatbox2d.webp',
            alt: 'Diseño de la presentación del proyecto de chat box'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/chatbox/chatbox3.webp',
            imageDark: '/assets/projects/chatbox/chatbox3d.webp',
            alt: 'Diseño de la presentación del proyecto de chat box'
          }
        ],
        prevProject: 'my-photos',
        nextProject: 'agency-website'
      },
      {
        id: crypto.randomUUID(),
        month: 'Marzo',
        year: '2023',
        name: 'Agency',
        subname: 'Website',
        skills: ['Typescript', 'React', 'Styled Components', 'ViteJs', 'React Router Dom', 'Pnpm'],
        slug: 'agency-website',
        thumbnail: '/assets/projects/agencywebsite/agencywebsite.webp',
        thumbnailDark: '/assets/projects/agencywebsite/agencywebsited.webp',
        images: {
          mobile: {
            image: '/assets/projects/agencywebsite/agencywebsitemp.webp',
            imageDark: '/assets/projects/agencywebsite/agencywebsitempd.webp'
          },
          desktop: {
            image: '/assets/projects/agencywebsite/agencywebsitedp.webp',
            imageDark: '/assets/projects/agencywebsite/agencywebsitedpd.webp'
          }
        },
        alt: 'Miniatura del proyecto del sitio web de la Agencia',
        code: 'https://github.com/davidmedev222/agency',
        demo: 'https://devagency.vercel.app/',
        description:
          'Agencia, página web moderna donde se pueden ver los proyectos, clientes, servicios, trabajos e información sobre la agencia.',
        project: 'Agency Website',
        date: 'Marzo 2023',
        role: 'Desarrollador Frontend',
        technologies: ['Typescript', 'React', 'Styled Components', 'ViteJs', 'React Router Dom', 'Pnpm'],
        tools: ['ESLint', 'Figma', 'Trello', 'Visual Studio Code', 'Git', 'Github'],
        video: '',
        info: {
          code: 'Código',
          demo: 'Demo',
          project: 'Proyecto',
          date: 'Fecha',
          role: 'Rol',
          technologies: 'Tecnologías',
          tools: 'Herramientas',
          back: 'Back',
          next: 'Next'
        },
        mockups: [
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/agencywebsite/agencywebsite.webp',
            imageDark: '/assets/projects/agencywebsite/agencywebsited.webp',
            alt: 'Diseño de la presentación del proyecto de página web de la agencia'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/agencywebsite/agencywebsite2.webp',
            imageDark: '/assets/projects/agencywebsite/agencywebsite2d.webp',
            alt: 'Diseño de la presentación del proyecto de página web de la agencia'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/agencywebsite/agencywebsite3.webp',
            imageDark: '/assets/projects/agencywebsite/agencywebsite3d.webp',
            alt: 'Diseño de la presentación del proyecto de página web de la agencia'
          }
        ],
        prevProject: 'chat-box',
        nextProject: 'custom-sports'
      },
      {
        id: crypto.randomUUID(),
        month: 'Enero',
        year: '2023',
        name: 'Custom',
        subname: 'Sports',
        skills: ['Javascript', 'React', 'Styled Components', 'ViteJs', 'React Router Dom', 'Npm'],
        slug: 'custom-sports',
        thumbnail: '/assets/projects/customsports/customsports.webp',
        thumbnailDark: '/assets/projects/customsports/customsportsd.webp',
        images: {
          mobile: {
            image: '/assets/projects/customsports/customsportsmp.webp',
            imageDark: '/assets/projects/customsports/customsportsmpd.webp'
          },
          desktop: {
            image: '/assets/projects/customsports/customsportsdp.webp',
            imageDark: '/assets/projects/customsports/customsportsdpd.webp'
          }
        },
        alt: 'Miniatura del proyecto Custom Sports',
        code: 'https://github.com/No-Country/S6-14-T-MERN',
        demo: 'http://ec2-18-118-29-121.us-east-2.compute.amazonaws.com/',
        description:
          'Custom Sports, tienda online de ropa deportiva, donde se puede diseñar y comprar el modelo deportivo, con la posibilidad de crear y gestionar una cuenta personal de usuario.',
        project: 'Custom Sports',
        date: 'Enero 2023',
        role: 'Desarrollador Frontend',
        technologies: [
          'Javascript',
          'React',
          'Styled Components',
          'ViteJs',
          'React Router Dom',
          'React Hook Form',
          'Axios',
          'ExpressJs',
          'MongoDB',
          'Mongoose',
          'Firebase',
          'CommitLint',
          'Husky',
          'Js Cookie',
          'React Paypal',
          'React Icons',
          'React Spinners',
          'React Toastify',
          'Npm'
        ],
        tools: [
          'ESLint',
          'Figma',
          'Trello',
          'RapidAPI Client',
          'Slack',
          'Discord',
          'Miro',
          'Visual Studio Code',
          'Git',
          'Github'
        ],
        video: '',
        info: {
          code: 'Código',
          demo: 'Demo',
          project: 'Proyecto',
          date: 'Fecha',
          role: 'Rol',
          technologies: 'Tecnologías',
          tools: 'Herramientas',
          back: 'Back',
          next: 'Next'
        },
        mockups: [
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/customsports/customsports.webp',
            imageDark: '/assets/projects/customsports/customsportsd.webp',
            alt: 'Diseño de la presentación del proyecto deportivo personalizado'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/customsports/customsports2.webp',
            imageDark: '/assets/projects/customsports/customsports2d.webp',
            alt: 'Diseño de la presentación del proyecto deportivo personalizado'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/customsports/customsports3.webp',
            imageDark: '/assets/projects/customsports/customsports3d.webp',
            alt: 'Diseño de la presentación del proyecto deportivo personalizado'
          }
        ],
        prevProject: 'agency-website',
        nextProject: 'apollo-nft'
      },
      {
        id: crypto.randomUUID(),
        month: 'Enero',
        year: '2023',
        name: 'Apollo',
        subname: 'NFT',
        skills: ['Javascript', 'React', 'Sass', 'ViteJs', 'React Router Dom', 'Pnpm'],
        slug: 'apollo-nft',
        thumbnail: '/assets/projects/apollonft/apollonft.webp',
        thumbnailDark: '/assets/projects/apollonft/apollonftd.webp',
        images: {
          mobile: {
            image: '/assets/projects/apollonft/apollonftmp.webp',
            imageDark: '/assets/projects/apollonft/apollonftmpd.webp'
          },
          desktop: {
            image: '/assets/projects/apollonft/apollonftdp.webp',
            imageDark: '/assets/projects/apollonft/apollonftdpd.webp'
          }
        },
        alt: 'Miniatura del proyecto Apollo NFT',
        code: 'https://github.com/davidmedev222/landing-apollonft-react',
        demo: 'https://apollonft.vercel.app/',
        description:
          'Apollo NFT, Página web donde puedes encontrar información sobre el mercado de nft e información sobre cómo crear tu propio nft desde la página.',
        project: 'Apollo NFT',
        date: 'Enero 2023',
        role: 'Desarrollador Frontend',
        technologies: ['Javascript', 'React', 'Sass', 'ViteJs', 'React Router Dom', 'CommitLint', 'Husky', 'Pnpm'],
        tools: ['ESLint', 'Figma', 'Trello', 'Visual Studio Code', 'Git', 'Github'],
        video: '',
        info: {
          code: 'Código',
          demo: 'Demo',
          project: 'Proyecto',
          date: 'Fecha',
          role: 'Rol',
          technologies: 'Tecnologías',
          tools: 'Herramientas',
          back: 'Back',
          next: 'Next'
        },
        mockups: [
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/apollonft/apollonft.webp',
            imageDark: '/assets/projects/apollonft/apollonftd.webp',
            alt: 'Diseño de la presentación del proyecto Apollo NFT'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/apollonft/apollonft2.webp',
            imageDark: '/assets/projects/apollonft/apollonft2d.webp',
            alt: 'Diseño de la presentación del proyecto Apollo NFT'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/apollonft/apollonft3.webp',
            imageDark: '/assets/projects/apollonft/apollonft3d.webp',
            alt: 'Diseño de la presentación del proyecto Apollo NFT'
          }
        ],
        prevProject: 'custom-sports',
        nextProject: 'blizt-website'
      },
      {
        id: crypto.randomUUID(),
        month: 'Diciembre',
        year: '2022',
        name: 'Blizt',
        subname: 'Website',
        skills: ['Javascript', 'React', 'Sass', 'ViteJs', 'React Router Dom', 'Pnpm'],
        slug: 'blizt-website',
        thumbnail: '/assets/projects/bliztwebsite/bliztwebsite.webp',
        thumbnailDark: '/assets/projects/bliztwebsite/bliztwebsited.webp',
        images: {
          mobile: {
            image: '/assets/projects/bliztwebsite/bliztwebsitemp.webp',
            imageDark: '/assets/projects/bliztwebsite/bliztwebsitempd.webp'
          },
          desktop: {
            image: '/assets/projects/bliztwebsite/bliztwebsitedp.webp',
            imageDark: '/assets/projects/bliztwebsite/bliztwebsitedpd.webp'
          }
        },
        alt: 'Miniatura del proyecto Blizt Website',
        code: 'https://github.com/davidmedev222/landing-blizt-react',
        demo: 'https://blizt.vercel.app/',
        description:
          'Página web de Blizt, donde podrá ver información sobre la empresa, servicios, proyectos y cómo ponerse en contacto con la marca.',
        project: 'Blizt Website',
        date: 'Diciembre 2022',
        role: 'Desarrollador Frontend',
        technologies: [
          'Javascript',
          'React',
          'Sass',
          'ViteJs',
          'React Router Dom',
          'Husky',
          'React Loader Spinner',
          'Pnpm'
        ],
        tools: ['ESLint', 'Figma', 'Trello', 'Visual Studio Code', 'Git', 'Github'],
        video: '',
        info: {
          code: 'Código',
          demo: 'Demo',
          project: 'Proyecto',
          date: 'Fecha',
          role: 'Rol',
          technologies: 'Tecnologías',
          tools: 'Herramientas',
          back: 'Back',
          next: 'Next'
        },
        mockups: [
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/bliztwebsite/bliztwebsite.webp',
            imageDark: '/assets/projects/bliztwebsite/bliztwebsited.webp',
            alt: 'Diseño de la presentación del proyecto del sitio web de blizt'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/bliztwebsite/bliztwebsite2.webp',
            imageDark: '/assets/projects/bliztwebsite/bliztwebsite2d.webp',
            alt: 'Diseño de la presentación del proyecto del sitio web de blizt'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/bliztwebsite/bliztwebsite.webp',
            imageDark: '/assets/projects/bliztwebsite/bliztwebsited.webp',
            alt: 'Diseño de la presentación del proyecto del sitio web de blizt'
          }
        ],
        prevProject: 'apollo-nft',
        nextProject: 'stadium-sports'
      },
      {
        id: crypto.randomUUID(),
        month: 'Noviembre',
        year: '2022',
        name: 'Stadium',
        subname: 'Sports',
        skills: ['Javascript', 'React', 'Sass', 'ViteJs', 'React Router Dom', 'Npm'],
        slug: 'stadium-sports',
        thumbnail: '/assets/projects/stadiumsports/stadiumsports.webp',
        thumbnailDark: '/assets/projects/stadiumsports/stadiumsportsd.webp',
        images: {
          mobile: {
            image: '/assets/projects/stadiumsports/stadiumsportsmp.webp',
            imageDark: '/assets/projects/stadiumsports/stadiumsportsmpd.webp'
          },
          desktop: {
            image: '/assets/projects/stadiumsports/stadiumsportsdp.webp',
            imageDark: '/assets/projects/stadiumsports/stadiumsportsdpd.webp'
          }
        },
        alt: 'Miniatura del proyecto Stadium Sports',
        code: 'https://github.com/No-Country/C8-73-T-RN',
        demo: 'https://e-stadium.vercel.app/',
        description:
          'Plataforma en línea de juegos y deportes electrónicos para jugadores y organizadores de torneos en la que los jugadores pueden descubrir torneos y participar, y los organizadores de torneos pueden crear y gestionar sus torneos y crear sus propias comunidades.',
        project: 'Stadium Sports',
        date: 'Noviembre 2022',
        role: 'Desarrollador Frontend',
        technologies: ['Javascript', 'React', 'Sass', 'ViteJs', 'React Router Dom', 'Firebase', 'Glider Js', 'Npm'],
        tools: ['Figma', 'Trello', 'Slack', 'Discord', 'Visual Studio Code', 'Git', 'Github'],
        video: '',
        info: {
          code: 'Código',
          demo: 'Demo',
          project: 'Proyecto',
          date: 'Fecha',
          role: 'Rol',
          technologies: 'Tecnologías',
          tools: 'Herramientas',
          back: 'Back',
          next: 'Next'
        },
        mockups: [
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/stadiumsports/stadiumsports.webp',
            imageDark: '/assets/projects/stadiumsports/stadiumsportsd.webp',
            alt: 'Diseño de la presentación del proyecto deportivo del estadio'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/stadiumsports/stadiumsports2.webp',
            imageDark: '/assets/projects/stadiumsports/stadiumsports2d.webp',
            alt: 'Diseño de la presentación del proyecto deportivo del estadio'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/stadiumsports/stadiumsports3.webp',
            imageDark: '/assets/projects/stadiumsports/stadiumsports3d.webp',
            alt: 'Diseño de la presentación del proyecto deportivo del estadio'
          }
        ],
        prevProject: 'blizt-website',
        nextProject: 'jordan-store'
      },
      {
        id: crypto.randomUUID(),
        month: 'Octubre',
        year: '2022',
        name: 'Jordan',
        subname: 'Store',
        skills: ['Javascript', 'React', 'Styled Components', 'ViteJs', 'React Router Dom', 'Firebase'],
        slug: 'jordan-store',
        thumbnail: '/assets/projects/jordanstore/jordanstore.webp',
        thumbnailDark: '/assets/projects/jordanstore/jordanstored.webp',
        images: {
          mobile: {
            image: '/assets/projects/jordanstore/jordanstoremp.webp',
            imageDark: '/assets/projects/jordanstore/jordanstorempd.webp'
          },
          desktop: {
            image: '/assets/projects/jordanstore/jordanstoredp.webp',
            imageDark: '/assets/projects/jordanstore/jordanstoredpd.webp'
          }
        },
        alt: 'Miniatura del proyecto Jordan Store',
        code: 'https://github.com/davidmedev222/ecommerce-jordan-react',
        demo: 'https://jordanstore.vercel.app/',
        description:
          'Tienda de zapatillas en línea para personas con preferencia por la marca Jordan, donde podrán comprar y gestionar su propia cuenta en el sitio web.',
        project: 'Jordan Store',
        date: 'Octubre 2022',
        role: 'Desarrollador Frontend',
        technologies: [
          'Javascript',
          'React',
          'Styled Components',
          'ViteJs',
          'React Router Dom',
          'Firebase',
          'Formkit Auto Animate',
          'React Toastify',
          'Pnpm'
        ],
        tools: ['ESLint', 'Trello', 'Visual Studio Code', 'Git', 'Github'],
        video: '',
        info: {
          code: 'Código',
          demo: 'Demo',
          project: 'Proyecto',
          date: 'Fecha',
          role: 'Rol',
          technologies: 'Tecnologías',
          tools: 'Herramientas',
          back: 'Back',
          next: 'Next'
        },
        mockups: [
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/jordanstore/jordanstore.webp',
            imageDark: '/assets/projects/jordanstore/jordanstored.webp',
            alt: 'Diseño de la presentación del proyecto de tienda jordan'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/jordanstore/jordanstore2.webp',
            imageDark: '/assets/projects/jordanstore/jordanstore2d.webp',
            alt: 'Diseño de la presentación del proyecto de tienda jordan'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/jordanstore/jordanstore3.webp',
            imageDark: '/assets/projects/jordanstore/jordanstore3d.webp',
            alt: 'Diseño de la presentación del proyecto de tienda jordan'
          }
        ],
        prevProject: 'stadium-sports',
        nextProject: 'solidarity-union'
      }
    ]
  },
  about: {
    title: 'Sobre Mí',
    name: 'David',
    lastname: 'Mamani',
    paragraph: `Desarrollador web y mentor con 2 años de experiencia, especializado en Frontend con un sólido enfoque en la creación de interfaces de usuario modernas y funcionales utilizando las mejores prácticas y estándares de la industria.

    Participé en múltiples equipos colaborativos formados por Startup No Country Argentina. Estas experiencias me permitieron desarrollar habilidades efectivas de comunicación y colaboración, así como adaptabilidad para trabajar en entornos dinámicos.
    
    Como profesional, actualizo constantemente mis conocimientos para estar al tanto de las últimas tendencias y tecnologías.
    
    Actualmente me encuentro en la búsqueda de empleo como Desarrollador Frontend o posiciones similares.`,
    experience: {
      title: 'Proyectos',
      categories: [
        { id: crypto.randomUUID(), title: 'Personales', quantity: 6 },
        { id: crypto.randomUUID(), title: 'Colaborativos', quantity: 7 },
        { id: crypto.randomUUID(), title: 'Lider de Equipo', quantity: 2 }
      ]
    },
    skills: {
      title: 'Habilidades',
      categories: [
        {
          id: crypto.randomUUID(),
          title: 'Lenguajes & Preprocesadores',
          logos: [
            { id: crypto.randomUUID(), image: '/assets/skills/logohtml.webp', alt: 'Logotipo de la tecnología html' },
            { id: crypto.randomUUID(), image: '/assets/skills/logocss.webp', alt: 'Logotipo de la tecnología css' },
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logojavascript.webp',
              alt: 'Logotipo de la tecnología javascript'
            },
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logotypescript.webp',
              alt: 'Logotipo de la tecnología typescript'
            },
            { id: crypto.randomUUID(), image: '/assets/skills/logosass.webp', alt: 'Logotipo de la tecnología sass' },
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logopostcss.webp',
              alt: 'Logotipo de la tecnología postcss'
            },
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logomarkdown.webp',
              alt: 'Logotipo de la tecnología markdown'
            }
          ]
        },
        {
          id: crypto.randomUUID(),
          title: 'Build Tools & Bundlers',
          logos: [
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logobabel.webp',
              alt: 'Logotipo de la tecnología babeljs'
            },
            { id: crypto.randomUUID(), image: '/assets/skills/logovite.webp', alt: 'Logotipo de la tecnología vitejs' }
          ]
        },
        {
          id: crypto.randomUUID(),
          title: 'Frameworks',
          logos: [
            { id: crypto.randomUUID(), image: '/assets/skills/logonext.webp', alt: 'Logotipo de la tecnología nextjs' },
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logotailwindcss.webp',
              alt: 'Logotipo de la tecnología tailwind css'
            },
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logonode.webp',
              alt: 'Logotipo de la tecnología node js'
            },
            {
              id: crypto.randomUUID(),
              title: 'expo',
              image: '/assets/skills/logoexpo.webp',
              imageDark: '/assets/skills/logoexpod.webp',
              alt: 'Logotipo de la tecnología expo'
            },
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logofirebase.webp',
              alt: 'Logotipo de la tecnología firebase'
            }
          ]
        },
        {
          id: crypto.randomUUID(),
          title: 'Bibliotecas',
          logos: [
            { id: crypto.randomUUID(), image: '/assets/skills/logoreact.webp', alt: 'Logotipo de la tecnología react' },
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logomui.webp',
              alt: 'Logotipo de la tecnología material ui'
            },
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logobootstrap.webp',
              alt: 'Logotipo de la tecnología bootstrap'
            },
            {
              id: crypto.randomUUID(),
              title: 'cssmodules',
              image: '/assets/skills/logocssmodules.webp',
              imageDark: '/assets/skills/logocssmodulesd.webp',
              alt: 'Logotipo de la tecnología css modules'
            },
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logoredux.webp',
              alt: 'Logotipo de la tecnología redux toolkit'
            },
            { id: crypto.randomUUID(), image: '/assets/skills/logoaxios.webp', alt: 'Logotipo de la tecnología axios' },
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logomongoose.webp',
              alt: 'Logotipo de la tecnología mongoose'
            },
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logostripe.webp',
              alt: 'Logotipo de la tecnología stripe'
            },
            {
              id: crypto.randomUUID(),
              title: 'commitlint',
              image: '/assets/skills/logocommitlint.webp',
              imageDark: '/assets/skills/logocommitlintd.webp',
              alt: 'Logotipo de la tecnología commitlint'
            },
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logoreactrouterdom.webp',
              alt: 'Logotipo de la tecnología react router dom'
            },
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logoreacthookform.webp',
              alt: 'Logotipo de la tecnología react hook form'
            },
            { id: crypto.randomUUID(), image: '/assets/skills/logohusky.webp', alt: 'Logotipo de la tecnología husky' },
            {
              id: crypto.randomUUID(),
              title: 'swr',
              image: '/assets/skills/logoswr.webp',
              imageDark: '/assets/skills/logoswrd.webp',
              alt: 'Logotipo de la tecnología swr'
            },
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logozustand.webp',
              alt: 'Logotipo de la tecnología zustand'
            },
            {
              id: crypto.randomUUID(),
              title: 'styledcomponents',
              image: '/assets/skills/logostyledcomponents.webp',
              imageDark: '/assets/skills/logostyledcomponentsd.webp',
              alt: 'Logotipo de la tecnología styled components'
            }
          ]
        },
        {
          id: crypto.randomUUID(),
          title: 'Gestores De Paquetes',
          logos: [
            { id: crypto.randomUUID(), image: '/assets/skills/logopnpm.webp', alt: 'Logotipo de la tecnología pnpm' },
            { id: crypto.randomUUID(), image: '/assets/skills/logonpm.webp', alt: 'Logotipo de la tecnología npm' }
          ]
        },
        {
          id: crypto.randomUUID(),
          title: 'Bases De Datos',
          logos: [
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logomongodb.webp',
              alt: 'Logotipo de la tecnología mongo db'
            },
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logofirebase.webp',
              alt: 'Logotipo de la tecnología firebase'
            }
          ]
        },
        {
          id: crypto.randomUUID(),
          title: 'Herramientas',
          logos: [
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logotrello.webp',
              alt: 'Logotipo de la tecnología trello'
            },
            { id: crypto.randomUUID(), image: '/assets/skills/logofigma.webp', alt: 'Logotipo de la tecnología figma' },
            { id: crypto.randomUUID(), image: '/assets/skills/logomiro.webp', alt: 'Logotipo de la tecnología miro' },
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logorapidapi.webp',
              alt: 'Logotipo de la tecnología rapid api'
            },
            { id: crypto.randomUUID(), image: '/assets/skills/logogit.webp', alt: 'Logotipo de la tecnología git' },
            {
              id: crypto.randomUUID(),
              title: 'github',
              image: '/assets/skills/logogithub.webp',
              imageDark: '/assets/skills/logogithubd.webp',
              alt: 'Logotipo de la tecnología github'
            },
            { id: crypto.randomUUID(), image: '/assets/skills/logocanva.webp', alt: 'Logotipo de la tecnología canva' },
            { id: crypto.randomUUID(), image: '/assets/skills/logoslack.webp', alt: 'Logotipo de la tecnología slack' },
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logonotion.webp',
              alt: 'Logotipo de la tecnología notion'
            },
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logodiscord.webp',
              alt: 'Logotipo de la tecnología discord'
            },
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logovisualstudiocode.webp',
              alt: 'Logotipo de la tecnología visual studio code'
            },
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logowordpress.webp',
              alt: 'Logotipo de la tecnología wordpress'
            },
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logoeslint.webp',
              alt: 'Logotipo de la tecnología eslint'
            },
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logoprettier.webp',
              alt: 'Logotipo de la tecnología prettier'
            }
          ]
        }
      ]
    }
  },
  contact: {
    title: 'Contacto',
    social: {
      paragraph: 'Te invito a conectar a través de mis redes sociales.',
      media: [
        {
          id: crypto.randomUUID(),
          href: 'https://www.linkedin.com/in/davidmedev/',
          name: 'linkedin',
          title: 'Linkedin'
        },
        {
          id: crypto.randomUUID(),
          href: 'https://github.com/davidmedev222',
          name: 'github',
          title: 'Github'
        },
        {
          id: crypto.randomUUID(),
          href: 'https://www.instagram.com/davidmedev/',
          name: 'instagram',
          title: 'Instagram'
        }
      ]
    },
    contact: {
      paragraph: 'O ponte en contacto conmigo por Gmail.',
      name: 'Nombre',
      email: 'Correo',
      message: 'Mensage',
      errors: {
        name: {
          required: 'Introduzca su nombre.',
          min: 'El nombre es demasiado corto. Mínimo 3 caracteres.'
        },
        email: {
          format: 'Introduzca una dirección de correo electrónico válida.',
          required: 'Introduzca su dirección de correo electrónico.',
          min: 'El correo electrónico es demasiado corto. Mínimo 5 caracteres.'
        },
        message: {
          required: 'Introduzca su mensaje.',
          min: 'El mensaje es demasiado corto. Mínimo 20 caracteres.'
        }
      },
      check: 'Se ha enviado correctamente, ¡Gracias!',
      alert: 'Se ha producido un error.',
      button: 'Enviar'
    }
  },
  footer: {
    categories: {
      info: {
        title: 'Info',
        links: [
          { id: crypto.randomUUID(), href: Routes.home, title: 'Inicio' },
          { id: crypto.randomUUID(), href: Routes.projects, title: 'Proyectos' },
          { id: crypto.randomUUID(), href: Routes.about, title: 'Sobre Mí' },
          { id: crypto.randomUUID(), href: Routes.contact, title: 'Contacto' }
        ]
      },
      contact: {
        title: 'Contacto',
        media: [
          {
            id: crypto.randomUUID(),
            href: 'https://www.linkedin.com/in/davidmedev/',
            title: 'Linkedin'
          },
          {
            id: crypto.randomUUID(),
            href: 'https://github.com/davidmedev222',
            title: 'Github'
          },
          {
            id: crypto.randomUUID(),
            href: 'https://www.instagram.com/davidmedev/',
            title: 'Instagram'
          }
        ]
      }
    },
    copyright: '© Davidmedev. Todos los derechos reservados.'
  }
}

export default dictionary

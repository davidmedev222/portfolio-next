import { Routes } from '@/utils/const'

const dictionary = {
  header: {
    links: [
      { id: crypto.randomUUID(), href: Routes.home, title: 'Início' },
      { id: crypto.randomUUID(), href: Routes.projects, title: 'Projetos' },
      { id: crypto.randomUUID(), href: Routes.about, title: 'Sobre Mim' },
      { id: crypto.randomUUID(), href: Routes.contact, title: 'Contato' }
    ],
    languages: {
      en: 'en',
      es: 'es',
      pt: 'pt'
    },
    themes: {
      system: 'Sistema',
      light: 'Luz',
      dark: 'Escuro'
    }
  },
  home: {
    name: 'David Mamani',
    role: 'Desenvolvedor Frontend',
    projects: [
      {
        id: crypto.randomUUID(),
        month: 'Outubro',
        year: '2023',
        name: 'Chat',
        subname: 'Box',
        skills: ['Typescript', 'React', 'Next', 'Tailwind CSS', 'Next Auth', 'Npm'],
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
        alt: 'Miniatura do projeto do eleva marketing',
        code: 'https://github.com/davidmedev222/chat-box',
        demo: 'https://chatboxwebsite.vercel.app/',
        description:
          'Aplicativo de bate-papo para mensagens que oferece uma interface moderna, intuitiva e personalizável. Com opções para enviar texto, voz, imagens, vídeos e arquivos para qualquer pessoa, a qualquer hora e em qualquer lugar. Além disso, você pode criar grupos, fazer chamadas de vídeo, compartilhar sua localização e muito mais.',
        project: 'Chat Box',
        date: 'Outubro 2023',
        role: 'Desenvolvedor Frontend',
        technologies: [
          'Typescript',
          'React',
          'Next',
          'Tailwind CSS',
          'Next Auth',
          'Firebase',
          'Next Themes',
          'Clsx',
          'PostCSS',
          'CommitLint',
          'Husky',
          'Npm'
        ],
        tools: ['ESLint', 'Prettier', 'Figma', 'Notion', 'Visual Studio Code', 'Git', 'Github'],
        video: '',
        info: {
          code: 'Código',
          demo: 'Demo',
          project: 'Projeto',
          date: 'Data',
          role: 'Função',
          technologies: 'Tecnologias',
          tools: 'Ferramentas',
          back: 'Back',
          next: 'Next'
        },
        mockups: [
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/chatbox/chatbox2.webp',
            imageDark: '/assets/projects/chatbox/chatbox2d.webp',
            alt: 'Design da apresentação do projeto de Chat Box'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/chatbox/chatbox3.webp',
            imageDark: '/assets/projects/chatbox/chatbox3d.webp',
            alt: 'Design da apresentação do projeto de Chat Box'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/chatbox/chatbox4.webp',
            imageDark: '/assets/projects/chatbox/chatbox4d.webp',
            alt: 'Design da apresentação do projeto de Chat Box'
          }
        ],
        prevProject: 'jordan-store',
        nextProject: 'eleva-mkt'
      },
      {
        id: crypto.randomUUID(),
        month: 'Outubro',
        year: '2023',
        name: 'Eleva',
        subname: 'MKT',
        skills: ['Typescript', 'React', 'Next', 'Tailwind CSS', 'React Fast Marquee', 'Npm'],
        slug: 'eleva-mkt',
        thumbnail: '/assets/projects/elevamkt/elevamkt.webp',
        thumbnailDark: '/assets/projects/elevamkt/elevamktd.webp',
        images: {
          mobile: {
            image: '/assets/projects/elevamkt/elevamktmp.webp',
            imageDark: '/assets/projects/elevamkt/elevamktmpd.webp'
          },
          desktop: {
            image: '/assets/projects/elevamkt/elevamktdp.webp',
            imageDark: '/assets/projects/elevamkt/elevamktdpd.webp'
          }
        },
        alt: 'Miniatura do projeto do eleva marketing',
        code: 'https://github.com/davidmedev222/eleva-mkt',
        demo: 'https://elevamkt.vercel.app/',
        description:
          'Eleva MKT, explore nosso site de serviços de marketing. Com um foco especializado em estratégias digitais, SEO, conteúdo envolvente e campanhas de mídia social, ajudamos a impulsionar sua presença on-line para o sucesso.',
        project: 'Eleva MKT',
        date: 'Outubro 2023',
        role: 'Desenvolvedor Frontend',
        technologies: [
          'Typescript',
          'React',
          'Next',
          'Tailwind CSS',
          'React Fast Marquee',
          'Next Themes',
          'Clsx',
          'PostCSS',
          'CommitLint',
          'Husky',
          'Npm'
        ],
        tools: ['ESLint', 'Prettier', 'Figma', 'Notion', 'Visual Studio Code', 'Git', 'Github'],
        video: '',
        info: {
          code: 'Código',
          demo: 'Demo',
          project: 'Projeto',
          date: 'Data',
          role: 'Função',
          technologies: 'Tecnologias',
          tools: 'Ferramentas',
          back: 'Back',
          next: 'Next'
        },
        mockups: [
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/elevamkt/elevamkt.webp',
            imageDark: '/assets/projects/elevamkt/elevamktd.webp',
            alt: 'Design da apresentação do projeto de eleva marketing'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/elevamkt/elevamkt2.webp',
            imageDark: '/assets/projects/elevamkt/elevamkt2d.webp',
            alt: 'Design da apresentação do projeto de eleva marketing'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/elevamkt/elevamkt3.webp',
            imageDark: '/assets/projects/elevamkt/elevamkt3d.webp',
            alt: 'Design da apresentação do projeto de eleva marketing'
          }
        ],
        prevProject: 'chat-box',
        nextProject: 'solidarity-union'
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
        alt: 'Miniatura do projeto do site de design',
        code: 'https://github.com/davidmedev222/design',
        demo: 'https://designwebsite.vercel.app/',
        description:
          'Site que permite que os designers mostrem seus trabalhos e projetos de forma atraente e profissional. Onde eles podem criar seu portfólio personalizado, carregar seus designs e compartilhá-los com o mundo. Esse site permite que eles destaquem seu talento e se conectem com clientes ou colaboradores em potencial.',
        project: 'Design Website',
        date: 'Agosto 2023',
        role: 'Desenvolvedor Frontend',
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
          project: 'Projeto',
          date: 'Data',
          role: 'Função',
          technologies: 'Tecnologias',
          tools: 'Ferramentas',
          back: 'Back',
          next: 'Next'
        },
        mockups: [
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/designwebsite/designwebsite/designwebsite.webp',
            imageDark: '/assets/projects/designwebsite/designwebsite/designwebsited.webp',
            alt: 'Design da apresentação do projeto do site de design'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/designwebsite/designwebsite/designwebsite2.webp',
            imageDark: '/assets/projects/designwebsite/designwebsite/designwebsite2d.webp',
            alt: 'Design da apresentação do projeto do site de design'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/designwebsite/designwebsite/designwebsite3.webp',
            imageDark: '/assets/projects/designwebsite/designwebsite/designwebsite3d.webp',
            alt: 'Design da apresentação do projeto do site de design'
          }
        ],
        prevProject: 'solidarity-union',
        nextProject: 'mova-app'
      },
      {
        id: crypto.randomUUID(),
        month: 'Julho',
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
        alt: 'Miniatura do projeto do aplicativo Mova',
        code: 'https://github.com/davidmedev222/mova',
        demo: 'https://github.com/davidmedev222/mova#usage',
        description:
          'Aplicativo móvel no qual você pode visualizar os catálogos de filmes populares, filmes com melhor classificação, filmes recebidos, séries e muito mais.',
        project: 'Mova App',
        date: 'Julho 2023',
        role: 'Desenvolvedor Frontend',
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
          project: 'Projeto',
          date: 'Data',
          role: 'Função',
          technologies: 'Tecnologias',
          tools: 'Ferramentas',
          back: 'Back',
          next: 'Next'
        },
        mockups: [
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/movaapp/movaapp.webp',
            imageDark: '/assets/projects/movaapp/movaappd.webp',
            alt: 'Design da apresentação do projeto do aplicativo mova'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/movaapp/movaapp2.webp',
            imageDark: '/assets/projects/movaapp/movaapp2d.webp',
            alt: 'Design da apresentação do projeto do aplicativo mova'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/movaapp/movaapp3.webp',
            imageDark: '/assets/projects/movaapp/movaapp3d.webp',
            alt: 'Design da apresentação do projeto do aplicativo mova'
          }
        ],
        prevProject: 'design-website',
        nextProject: 'lot-todo'
      },
      {
        id: crypto.randomUUID(),
        month: 'Maio',
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
        alt: 'Miniatura do projeto My photos',
        code: 'https://github.com/davidmedev222/my-photos',
        demo: 'https://myphotosdev.vercel.app/',
        description:
          'Site projetado exclusivamente para exibir fotografias, com foco em proporcionar aos visitantes uma experiência visual cativante, apresentando imagens impressionantes em um layout simples de uma página.',
        project: 'My Photos',
        date: 'May 2023',
        role: 'Desenvolvedor Frontend',
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
          project: 'Projeto',
          date: 'Data',
          role: 'Função',
          technologies: 'Tecnologias',
          tools: 'Ferramentas',
          back: 'Back',
          next: 'Next'
        },
        mockups: [
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/myphotos/myphotos.webp',
            imageDark: '/assets/projects/myphotos/myphotosd.webp',
            alt: 'Design da apresentação do projeto my photos'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/myphotos/myphotos2.webp',
            imageDark: '/assets/projects/myphotos/myphotos2d.webp',
            alt: 'Design da apresentação do projeto my photos'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/myphotos/myphotos.webp',
            imageDark: '/assets/projects/myphotos/myphotosd.webp',
            alt: 'Design da apresentação do projeto my photos'
          }
        ],
        prevProject: 'lawyer-website',
        nextProject: 'agency-website'
      },
      {
        id: crypto.randomUUID(),
        month: 'Janeiro',
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
        alt: 'Miniatura do projeto Apollo NFT',
        code: 'https://github.com/davidmedev222/landing-apollonft-react',
        demo: 'https://apollonft.vercel.app/',
        description:
          'Apollo NFT, site onde você pode encontrar informações sobre o mercado de nft e informações sobre como criar seu próprio nft a partir da página.',
        project: 'Apollo NFT',
        date: 'Janeiro 2023',
        role: 'Desenvolvedor Frontend',
        technologies: ['Javascript', 'React', 'Sass', 'ViteJs', 'React Router Dom', 'CommitLint', 'Husky', 'Pnpm'],
        tools: ['ESLint', 'Figma', 'Trello', 'Visual Studio Code', 'Git', 'Github'],
        video: '',
        info: {
          code: 'Código',
          demo: 'Demo',
          project: 'Projeto',
          date: 'Data',
          role: 'Função',
          technologies: 'Tecnologias',
          tools: 'Ferramentas',
          back: 'Back',
          next: 'Next'
        },
        mockups: [
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/apollonft/apollonft.webp',
            imageDark: '/assets/projects/apollonft/apollonftd.webp',
            alt: 'Design de apresentação do projeto union solidaria'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/apollonft/apollonft2.webp',
            imageDark: '/assets/projects/apollonft/apollonft2d.webp',
            alt: 'Design de apresentação do projeto union solidaria'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/apollonft/apollonft3.webp',
            imageDark: '/assets/projects/apollonft/apollonft3d.webp',
            alt: 'Design de apresentação do projeto union solidaria'
          }
        ],
        prevProject: 'agency-website',
        nextProject: 'blizt-website'
      }
    ],
    link: { id: crypto.randomUUID(), href: Routes.projects, title: 'View All' }
  },
  projects: {
    title: 'Projetos',
    projects: [
      {
        id: crypto.randomUUID(),
        month: 'Outubro',
        year: '2023',
        name: 'Chat',
        subname: 'Box',
        skills: ['Typescript', 'React', 'Next', 'Tailwind CSS', 'Next Auth', 'Npm'],
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
        alt: 'Miniatura do projeto do eleva marketing',
        code: 'https://github.com/davidmedev222/chat-box',
        demo: 'https://chatboxwebsite.vercel.app/',
        description:
          'Aplicativo de bate-papo para mensagens que oferece uma interface moderna, intuitiva e personalizável. Com opções para enviar texto, voz, imagens, vídeos e arquivos para qualquer pessoa, a qualquer hora e em qualquer lugar. Além disso, você pode criar grupos, fazer chamadas de vídeo, compartilhar sua localização e muito mais.',
        project: 'Chat Box',
        date: 'Outubro 2023',
        role: 'Desenvolvedor Frontend',
        technologies: [
          'Typescript',
          'React',
          'Next',
          'Tailwind CSS',
          'Next Auth',
          'Firebase',
          'Next Themes',
          'Clsx',
          'PostCSS',
          'CommitLint',
          'Husky',
          'Npm'
        ],
        tools: ['ESLint', 'Prettier', 'Figma', 'Notion', 'Visual Studio Code', 'Git', 'Github'],
        video: '',
        info: {
          code: 'Código',
          demo: 'Demo',
          project: 'Projeto',
          date: 'Data',
          role: 'Função',
          technologies: 'Tecnologias',
          tools: 'Ferramentas',
          back: 'Back',
          next: 'Next'
        },
        mockups: [
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/chatbox/chatbox2.webp',
            imageDark: '/assets/projects/chatbox/chatbox2d.webp',
            alt: 'Design da apresentação do projeto de Chat Box'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/chatbox/chatbox3.webp',
            imageDark: '/assets/projects/chatbox/chatbox3d.webp',
            alt: 'Design da apresentação do projeto de Chat Box'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/chatbox/chatbox4.webp',
            imageDark: '/assets/projects/chatbox/chatbox4d.webp',
            alt: 'Design da apresentação do projeto de Chat Box'
          }
        ],
        prevProject: 'jordan-store',
        nextProject: 'eleva-mkt'
      },
      {
        id: crypto.randomUUID(),
        month: 'Outubro',
        year: '2023',
        name: 'Eleva',
        subname: 'MKT',
        skills: ['Typescript', 'React', 'Next', 'Tailwind CSS', 'React Fast Marquee', 'Npm'],
        slug: 'eleva-mkt',
        thumbnail: '/assets/projects/elevamkt/elevamkt.webp',
        thumbnailDark: '/assets/projects/elevamkt/elevamktd.webp',
        images: {
          mobile: {
            image: '/assets/projects/elevamkt/elevamktmp.webp',
            imageDark: '/assets/projects/elevamkt/elevamktmpd.webp'
          },
          desktop: {
            image: '/assets/projects/elevamkt/elevamktdp.webp',
            imageDark: '/assets/projects/elevamkt/elevamktdpd.webp'
          }
        },
        alt: 'Miniatura do projeto do eleva marketing',
        code: 'https://github.com/davidmedev222/eleva-mkt',
        demo: 'https://elevamkt.vercel.app/',
        description:
          'Eleva MKT, explore nosso site de serviços de marketing. Com um foco especializado em estratégias digitais, SEO, conteúdo envolvente e campanhas de mídia social, ajudamos a impulsionar sua presença on-line para o sucesso.',
        project: 'Eleva MKT',
        date: 'Outubro 2023',
        role: 'Desenvolvedor Frontend',
        technologies: [
          'Typescript',
          'React',
          'Next',
          'Tailwind CSS',
          'React Fast Marquee',
          'Next Themes',
          'Clsx',
          'PostCSS',
          'CommitLint',
          'Husky',
          'Npm'
        ],
        tools: ['ESLint', 'Prettier', 'Figma', 'Notion', 'Visual Studio Code', 'Git', 'Github'],
        video: '',
        info: {
          code: 'Código',
          demo: 'Demo',
          project: 'Projeto',
          date: 'Data',
          role: 'Função',
          technologies: 'Tecnologias',
          tools: 'Ferramentas',
          back: 'Back',
          next: 'Next'
        },
        mockups: [
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/elevamkt/elevamkt.webp',
            imageDark: '/assets/projects/elevamkt/elevamktd.webp',
            alt: 'Design da apresentação do projeto de eleva marketing'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/elevamkt/elevamkt2.webp',
            imageDark: '/assets/projects/elevamkt/elevamkt2d.webp',
            alt: 'Design da apresentação do projeto de eleva marketing'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/elevamkt/elevamkt3.webp',
            imageDark: '/assets/projects/elevamkt/elevamkt3d.webp',
            alt: 'Design da apresentação do projeto de eleva marketing'
          }
        ],
        prevProject: 'chat-box',
        nextProject: 'solidarity-union'
      },
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
        alt: 'Miniatura do projeto do sindicato solidário',
        code: 'https://github.com/No-Country/s10-13-m-express-next',
        demo: 'https://union-solidaria-app.vercel.app/',
        description:
          'Um aplicativo da Web que conecta voluntários a iniciativas sociais de diferentes categorias e temas, além de permitir que as organizações criem suas próprias iniciativas para recrutar voluntários. Um portal voltado para voluntários que desejam ajudar além de seus recursos ou possibilidades.',
        project: 'Solidarity Union',
        date: 'Agosto 2023',
        role: 'Desenvolvedor Frontend',
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
          project: 'Projeto',
          date: 'Data',
          role: 'Função',
          technologies: 'Tecnologias',
          tools: 'Ferramentas',
          back: 'Back',
          next: 'Next'
        },
        mockups: [
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/unionsolidaria/unionsolidaria.webp',
            imageDark: '/assets/projects/unionsolidaria/unionsolidariad.webp',
            alt: 'Design da apresentação do projeto de união solidária'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/unionsolidaria/unionsolidaria2.webp',
            imageDark: '/assets/projects/unionsolidaria/unionsolidaria2d.webp',
            alt: 'Design da apresentação do projeto de união solidária'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/unionsolidaria/unionsolidaria3.webp',
            imageDark: '/assets/projects/unionsolidaria/unionsolidaria3d.webp',
            alt: 'Design da apresentação do projeto de união solidária'
          }
        ],
        prevProject: 'eleva-mkt',
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
        alt: 'Miniatura do projeto do site de design',
        code: 'https://github.com/davidmedev222/design',
        demo: 'https://designwebsite.vercel.app/',
        description:
          'Site que permite que os designers mostrem seus trabalhos e projetos de forma atraente e profissional. Onde eles podem criar seu portfólio personalizado, carregar seus designs e compartilhá-los com o mundo. Esse site permite que eles destaquem seu talento e se conectem com clientes ou colaboradores em potencial.',
        project: 'Design Website',
        date: 'Agosto 2023',
        role: 'Desenvolvedor Frontend',
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
          project: 'Projeto',
          date: 'Data',
          role: 'Função',
          technologies: 'Tecnologias',
          tools: 'Ferramentas',
          back: 'Back',
          next: 'Next'
        },
        mockups: [
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/designwebsite/designwebsite.webp',
            imageDark: '/assets/projects/designwebsite/designwebsited.webp',
            alt: 'Design da apresentação do projeto do site de design'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/designwebsite/designwebsite2.webp',
            imageDark: '/assets/projects/designwebsite/designwebsite2d.webp',
            alt: 'Design da apresentação do projeto do site de design'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/designwebsite/designwebsite3.webp',
            imageDark: '/assets/projects/designwebsite/designwebsite3d.webp',
            alt: 'Design da apresentação do projeto do site de design'
          }
        ],
        prevProject: 'solidarity-union',
        nextProject: 'mova-app'
      },
      {
        id: crypto.randomUUID(),
        month: 'Julho',
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
        alt: 'Miniatura do projeto do aplicativo Mova',
        code: 'https://github.com/davidmedev222/mova',
        demo: 'https://github.com/davidmedev222/mova#usage',
        description:
          'Aplicativo móvel no qual você pode visualizar os catálogos de filmes populares, filmes com melhor classificação, filmes recebidos, séries e muito mais.',
        project: 'Mova App',
        date: 'Julho 2023',
        role: 'Desenvolvedor Frontend',
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
          project: 'Projeto',
          date: 'Data',
          role: 'Função',
          technologies: 'Tecnologias',
          tools: 'Ferramentas',
          back: 'Back',
          next: 'Next'
        },
        mockups: [
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/movaapp/movaapp.webp',
            imageDark: '/assets/projects/movaapp/movaappd.webp',
            alt: 'Design da apresentação do projeto do aplicativo mova'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/movaapp/movaapp2.webp',
            imageDark: '/assets/projects/movaapp/movaapp2d.webp',
            alt: 'Design da apresentação do projeto do aplicativo mova'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/movaapp/movaapp3.webp',
            imageDark: '/assets/projects/movaapp/movaapp3d.webp',
            alt: 'Design da apresentação do projeto do aplicativo mova'
          }
        ],
        prevProject: 'design-website',
        nextProject: 'lot-todo'
      },
      {
        id: crypto.randomUUID(),
        month: 'Julho',
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
        alt: 'Miniatura do projeto Lot Todo',
        code: 'https://github.com/No-Country/C12-38-M-REACTNATIVE',
        demo: 'https://expo.dev/@florencia09/lot-todo?serviceType=classic&distribution=expo-go',
        description:
          'O aplicativo busca oferecer uma ferramenta para que os usuários em potencial organizem suas atividades diárias por meio de listas de tarefas divididas por categorias e com a possibilidade de visualizá-las diariamente, semanalmente e mensalmente, além de uma tela inicial na qual é possível ver rapidamente o número total de tarefas criadas. Há também a possibilidade de excluir essas tarefas ou marcá-las como concluídas. Por fim, você pode se registrar como usuário, alterar os dados da conta e a foto do perfil.',
        project: 'Lot Todo',
        date: 'Julho 2023',
        role: 'Desenvolvedor Frontend',
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
          project: 'Projeto',
          date: 'Data',
          role: 'Função',
          technologies: 'Tecnologias',
          tools: 'Ferramentas',
          back: 'Back',
          next: 'Next'
        },
        mockups: [
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/lottodo/lottodo.webp',
            imageDark: '/assets/projects/lottodo/lottodod.webp',
            alt: 'Design da apresentação do projeto lot todo'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/lottodo/lottodo2.webp',
            imageDark: '/assets/projects/lottodo/lottodo2d.webp',
            alt: 'Design da apresentação do projeto lot todo'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/lottodo/lottodo3.webp',
            imageDark: '/assets/projects/lottodo/lottodo3d.webp',
            alt: 'Design da apresentação do projeto lot todo'
          }
        ],
        prevProject: 'mova-app',
        nextProject: 'lawyer-website'
      },
      {
        id: crypto.randomUUID(),
        month: 'Julho',
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
        alt: 'Miniatura do projeto do site do advogado',
        code: 'https://github.com/demattei-teo/Lawyer',
        demo: 'https://lawyerdev.vercel.app/',
        description:
          'Site de um escritório de advocacia que oferece serviços jurídicos a seus clientes. Onde você pode visualizar informações sobre sua consultoria e representação legal de qualidade para seus clientes, respeitando os princípios éticos e deontológicos da profissão.',
        project: 'Lawyer Website',
        date: 'Julho 2023',
        role: 'Desenvolvedor Frontend',
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
          project: 'Projeto',
          date: 'Data',
          role: 'Função',
          technologies: 'Tecnologias',
          tools: 'Ferramentas',
          back: 'Back',
          next: 'Next'
        },
        mockups: [
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/lawyerwebsite/lawyerwebsite.webp',
            imageDark: '/assets/projects/lawyerwebsite/lawyerwebsited.webp',
            alt: 'Design da apresentação do projeto do site do advogado'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/lawyerwebsite/lawyerwebsite2.webp',
            imageDark: '/assets/projects/lawyerwebsite/lawyerwebsite2d.webp',
            alt: 'Design da apresentação do projeto do site do advogado'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/lawyerwebsite/lawyerwebsite3.webp',
            imageDark: '/assets/projects/lawyerwebsite/lawyerwebsite3d.webp',
            alt: 'Design da apresentação do projeto do site do advogado'
          }
        ],
        prevProject: 'lot-todo',
        nextProject: 'my-photos'
      },
      {
        id: crypto.randomUUID(),
        month: 'Maio',
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
        alt: 'Miniatura do projeto My photos',
        code: 'https://github.com/davidmedev222/my-photos',
        demo: 'https://myphotosdev.vercel.app/',
        description:
          'Site projetado exclusivamente para exibir fotografias, com foco em proporcionar aos visitantes uma experiência visual cativante, apresentando imagens impressionantes em um layout simples de uma página.',
        project: 'My Photos',
        date: 'May 2023',
        role: 'Desenvolvedor Frontend',
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
          project: 'Projeto',
          date: 'Data',
          role: 'Função',
          technologies: 'Tecnologias',
          tools: 'Ferramentas',
          back: 'Back',
          next: 'Next'
        },
        mockups: [
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/myphotos/myphotos.webp',
            imageDark: '/assets/projects/myphotos/myphotosd.webp',
            alt: 'Design da apresentação do projeto my photos'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/myphotos/myphotos2.webp',
            imageDark: '/assets/projects/myphotos/myphotos2d.webp',
            alt: 'Design da apresentação do projeto my photos'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/myphotos/myphotos.webp',
            imageDark: '/assets/projects/myphotos/myphotosd.webp',
            alt: 'Design da apresentação do projeto my photos'
          }
        ],
        prevProject: 'lawyer-website',
        nextProject: 'agency-website'
      },
      {
        id: crypto.randomUUID(),
        month: 'Março',
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
        alt: 'Miniatura do projeto do site da agência',
        code: 'https://github.com/davidmedev222/agency',
        demo: 'https://devagency.vercel.app/',
        description:
          'Agência, site moderno onde você pode ver os projetos, clientes, serviços, trabalhos e informações sobre a agência.',
        project: 'Agency Website',
        date: 'Março 2023',
        role: 'Desenvolvedor Frontend',
        technologies: ['Typescript', 'React', 'Styled Components', 'ViteJs', 'React Router Dom', 'Pnpm'],
        tools: ['ESLint', 'Figma', 'Trello', 'Visual Studio Code', 'Git', 'Github'],
        video: '',
        info: {
          code: 'Código',
          demo: 'Demo',
          project: 'Projeto',
          date: 'Data',
          role: 'Função',
          technologies: 'Tecnologias',
          tools: 'Ferramentas',
          back: 'Back',
          next: 'Next'
        },
        mockups: [
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/agencywebsite/agencywebsite.webp',
            imageDark: '/assets/projects/agencywebsite/agencywebsited.webp',
            alt: 'Design da apresentação do projeto do site da agência'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/agencywebsite/agencywebsite2.webp',
            imageDark: '/assets/projects/agencywebsite/agencywebsite2d.webp',
            alt: 'Design da apresentação do projeto do site da agência'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/agencywebsite/agencywebsite3.webp',
            imageDark: '/assets/projects/agencywebsite/agencywebsite3d.webp',
            alt: 'Design da apresentação do projeto do site da agência'
          }
        ],
        prevProject: 'my-photos',
        nextProject: 'apollo-nft'
      },
      {
        id: crypto.randomUUID(),
        month: 'Janeiro',
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
        alt: 'Miniatura do projeto Apollo NFT',
        code: 'https://github.com/davidmedev222/landing-apollonft-react',
        demo: 'https://apollonft.vercel.app/',
        description:
          'Apollo NFT, site onde você pode encontrar informações sobre o mercado de nft e informações sobre como criar seu próprio nft a partir da página.',
        project: 'Apollo NFT',
        date: 'Janeiro 2023',
        role: 'Desenvolvedor Frontend',
        technologies: ['Javascript', 'React', 'Sass', 'ViteJs', 'React Router Dom', 'CommitLint', 'Husky', 'Pnpm'],
        tools: ['ESLint', 'Figma', 'Trello', 'Visual Studio Code', 'Git', 'Github'],
        video: '',
        info: {
          code: 'Código',
          demo: 'Demo',
          project: 'Projeto',
          date: 'Data',
          role: 'Função',
          technologies: 'Tecnologias',
          tools: 'Ferramentas',
          back: 'Back',
          next: 'Next'
        },
        mockups: [
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/apollonft/apollonft.webp',
            imageDark: '/assets/projects/apollonft/apollonftd.webp',
            alt: 'Design de apresentação do projeto union solidaria'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/apollonft/apollonft2.webp',
            imageDark: '/assets/projects/apollonft/apollonft2d.webp',
            alt: 'Design de apresentação do projeto union solidaria'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/apollonft/apollonft3.webp',
            imageDark: '/assets/projects/apollonft/apollonft3d.webp',
            alt: 'Design de apresentação do projeto union solidaria'
          }
        ],
        prevProject: 'agency-website',
        nextProject: 'blizt-website'
      },
      {
        id: crypto.randomUUID(),
        month: 'Dezembro',
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
        alt: 'Miniatura do projeto do site Blizt',
        code: 'https://github.com/davidmedev222/landing-blizt-react',
        demo: 'https://blizt.vercel.app/',
        description:
          'Site da Blizt, onde é possível ver informações sobre a empresa, serviços, projetos e como entrar em contato com a marca.',
        project: 'Blizt Website',
        date: 'Dezembro 2022',
        role: 'Desenvolvedor Frontend',
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
          project: 'Projeto',
          date: 'Data',
          role: 'Função',
          technologies: 'Tecnologias',
          tools: 'Ferramentas',
          back: 'Back',
          next: 'Next'
        },
        mockups: [
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/bliztwebsite/bliztwebsite.webp',
            imageDark: '/assets/projects/bliztwebsite/bliztwebsited.webp',
            alt: 'Design da apresentação do projeto do site da blizt'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/bliztwebsite/bliztwebsite2.webp',
            imageDark: '/assets/projects/bliztwebsite/bliztwebsite2d.webp',
            alt: 'Design da apresentação do projeto do site da blizt'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/bliztwebsite/bliztwebsite.webp',
            imageDark: '/assets/projects/bliztwebsite/bliztwebsited.webp',
            alt: 'Design da apresentação do projeto do site da blizt'
          }
        ],
        prevProject: 'apollo-nft',
        nextProject: 'jordan-store'
      },
      {
        id: crypto.randomUUID(),
        month: 'Outubro',
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
        alt: 'Miniatura do projeto da Jordan Store',
        code: 'https://github.com/davidmedev222/ecommerce-jordan-react',
        demo: 'https://jordanstore.vercel.app/',
        description:
          'Loja on-line de tênis para pessoas com preferência pela marca Jordan, onde poderão comprar e gerenciar sua própria conta no site.',
        project: 'Jordan Store',
        date: 'Outubro 2022',
        role: 'Desenvolvedor Frontend',
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
          project: 'Projeto',
          date: 'Data',
          role: 'Função',
          technologies: 'Tecnologias',
          tools: 'Ferramentas',
          back: 'Back',
          next: 'Next'
        },
        mockups: [
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/jordanstore/jordanstore.webp',
            imageDark: '/assets/projects/jordanstore/jordanstored.webp',
            alt: 'Design de apresentação do projeto da loja jordan'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/jordanstore/jordanstore2.webp',
            imageDark: '/assets/projects/jordanstore/jordanstore2d.webp',
            alt: 'Design de apresentação do projeto da loja jordan'
          },
          {
            id: crypto.randomUUID(),
            image: '/assets/projects/jordanstore/jordanstore3.webp',
            imageDark: '/assets/projects/jordanstore/jordanstore3d.webp',
            alt: 'Design de apresentação do projeto da loja jordan'
          }
        ],
        prevProject: 'blizt-website',
        nextProject: 'chat-box'
      }
    ]
  },
  about: {
    title: 'Sobre Mim',
    name: 'David',
    lastname: 'Mamani',
    paragraph: `Desenvolvedor web e mentor com 2 anos de experiência, especializado em Frontend com um sólido foco na criação de interfaces de usuário modernas e funcionais usando práticas recomendadas e padrões do setor.

    Participei de várias equipes colaborativas formadas pela Startup No Country Argentina. Essas experiências me permitiram desenvolver habilidades eficazes de comunicação e colaboração, além de adaptabilidade para trabalhar em ambientes dinâmicos.
    
    Como profissional, estou sempre atualizando meus conhecimentos para acompanhar as últimas tendências e tecnologias.
    
    No momento, estou procurando um emprego como desenvolvedor front-end ou cargos semelhantes.`,
    experience: {
      title: 'Projetos',
      categories: [
        { id: crypto.randomUUID(), title: 'Pessoal', quantity: 7 },
        { id: crypto.randomUUID(), title: 'Colaborativas', quantity: 7 },
        { id: crypto.randomUUID(), title: 'Líder de Equipe', quantity: 2 }
      ]
    },
    skills: {
      title: 'Habilidades',
      categories: [
        {
          id: crypto.randomUUID(),
          title: 'Linguagens e Pré-processadores',
          logos: [
            { id: crypto.randomUUID(), image: '/assets/skills/logohtml.webp', alt: 'Logotipo da tecnologia html' },
            { id: crypto.randomUUID(), image: '/assets/skills/logocss.webp', alt: 'Logotipo da tecnologia css' },
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logojavascript.webp',
              alt: 'Logotipo da tecnologia javascript'
            },
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logotypescript.webp',
              alt: 'Logotipo da tecnologia typescript'
            },
            { id: crypto.randomUUID(), image: '/assets/skills/logosass.webp', alt: 'Logotipo da tecnologia sass' },
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logopostcss.webp',
              alt: 'Logotipo da tecnologia postcss'
            },
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logomarkdown.webp',
              alt: 'Logotipo da tecnologia markdown'
            }
          ]
        },
        {
          id: crypto.randomUUID(),
          title: 'Build Tools & Bundlers',
          logos: [
            { id: crypto.randomUUID(), image: '/assets/skills/logobabel.webp', alt: 'Logotipo da tecnologia babeljs' },
            { id: crypto.randomUUID(), image: '/assets/skills/logovite.webp', alt: 'Logotipo da tecnologia vitejs' }
          ]
        },
        {
          id: crypto.randomUUID(),
          title: 'Frameworks',
          logos: [
            { id: crypto.randomUUID(), image: '/assets/skills/logonext.webp', alt: 'Logotipo da tecnologia nextjs' },
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logotailwindcss.webp',
              alt: 'Logotipo da tecnologia tailwind css'
            },
            { id: crypto.randomUUID(), image: '/assets/skills/logonode.webp', alt: 'Logotipo da tecnologia node js' },
            {
              id: crypto.randomUUID(),
              title: 'expo',
              image: '/assets/skills/logoexpo.webp',
              imageDark: '/assets/skills/logoexpod.webp',
              alt: 'Logotipo da tecnologia expo'
            },
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logofirebase.webp',
              alt: 'Logotipo da tecnologia firebase'
            }
          ]
        },
        {
          id: crypto.randomUUID(),
          title: 'Bibliotecas',
          logos: [
            { id: crypto.randomUUID(), image: '/assets/skills/logoreact.webp', alt: 'Logotipo da tecnologia react' },
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logomui.webp',
              alt: 'Logotipo da tecnologia material ui'
            },
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logobootstrap.webp',
              alt: 'Logotipo da tecnologia bootstrap'
            },
            {
              id: crypto.randomUUID(),
              title: 'cssmodules',
              image: '/assets/skills/logocssmodules.webp',
              imageDark: '/assets/skills/logocssmodulesd.webp',
              alt: 'Logotipo da tecnologia css modules'
            },
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logoredux.webp',
              alt: 'Logotipo da tecnologia redux toolkit'
            },
            { id: crypto.randomUUID(), image: '/assets/skills/logoaxios.webp', alt: 'Logotipo da tecnologia axios' },
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logomongoose.webp',
              alt: 'Logotipo da tecnologia mongoose'
            },
            { id: crypto.randomUUID(), image: '/assets/skills/logostripe.webp', alt: 'Logotipo da tecnologia stripe' },
            {
              id: crypto.randomUUID(),
              title: 'commitlint',
              image: '/assets/skills/logocommitlint.webp',
              imageDark: '/assets/skills/logocommitlintd.webp',
              alt: 'Logotipo da tecnologia commitlint'
            },
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logoreactrouterdom.webp',
              alt: 'Logotipo da tecnologia react router dom'
            },
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logoreacthookform.webp',
              alt: 'Logotipo da tecnologia react hook form'
            },
            { id: crypto.randomUUID(), image: '/assets/skills/logohusky.webp', alt: 'Logotipo da tecnologia husky' },
            {
              id: crypto.randomUUID(),
              title: 'swr',
              image: '/assets/skills/logoswr.webp',
              imageDark: '/assets/skills/logoswrd.webp',
              alt: 'Logotipo da tecnologia swr'
            },
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logozustand.webp',
              alt: 'Logotipo da tecnologia zustand'
            },
            {
              id: crypto.randomUUID(),
              title: 'styledcomponents',
              image: '/assets/skills/logostyledcomponents.webp',
              imageDark: '/assets/skills/logostyledcomponentsd.webp',
              alt: 'Logotipo da tecnologia styled components'
            }
          ]
        },
        {
          id: crypto.randomUUID(),
          title: 'Gerentes de Pacotes',
          logos: [
            { id: crypto.randomUUID(), image: '/assets/skills/logopnpm.webp', alt: 'Logotipo da tecnologia pnpm' },
            { id: crypto.randomUUID(), image: '/assets/skills/logonpm.webp', alt: 'Logotipo da tecnologia npm' }
          ]
        },
        {
          id: crypto.randomUUID(),
          title: 'Bancos de Dados',
          logos: [
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logomongodb.webp',
              alt: 'Logotipo da tecnologia mongo db'
            },
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logofirebase.webp',
              alt: 'Logotipo da tecnologia firebase'
            }
          ]
        },
        {
          id: crypto.randomUUID(),
          title: 'Ferramentas',
          logos: [
            { id: crypto.randomUUID(), image: '/assets/skills/logotrello.webp', alt: 'Logotipo da tecnologia trello' },
            { id: crypto.randomUUID(), image: '/assets/skills/logofigma.webp', alt: 'Logotipo da tecnologia figma' },
            { id: crypto.randomUUID(), image: '/assets/skills/logomiro.webp', alt: 'Logotipo da tecnologia miro' },
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logorapidapi.webp',
              alt: 'Logotipo da tecnologia rapid api'
            },
            { id: crypto.randomUUID(), image: '/assets/skills/logogit.webp', alt: 'Logotipo da tecnologia git' },
            {
              id: crypto.randomUUID(),
              title: 'github',
              image: '/assets/skills/logogithub.webp',
              imageDark: '/assets/skills/logogithubd.webp',
              alt: 'Logotipo da tecnologia github'
            },
            { id: crypto.randomUUID(), image: '/assets/skills/logocanva.webp', alt: 'Logotipo da tecnologia canva' },
            { id: crypto.randomUUID(), image: '/assets/skills/logoslack.webp', alt: 'Logotipo da tecnologia slack' },
            { id: crypto.randomUUID(), image: '/assets/skills/logonotion.webp', alt: 'Logotipo da tecnologia notion' },
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logodiscord.webp',
              alt: 'Logotipo da tecnologia discord'
            },
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logovisualstudiocode.webp',
              alt: 'Logotipo da tecnologia visual studio code'
            },
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logowordpress.webp',
              alt: 'Logotipo da tecnologia wordpress'
            },
            { id: crypto.randomUUID(), image: '/assets/skills/logoeslint.webp', alt: 'Logotipo da tecnologia eslint' },
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logoprettier.webp',
              alt: 'Logotipo da tecnologia prettier'
            }
          ]
        }
      ]
    }
  },
  contact: {
    title: 'Contato',
    social: {
      paragraph: 'Convido-o a se conectar por meio de minhas redes sociais.',
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
      paragraph: 'Ou entre em contato comigo pelo E-mail.',
      name: 'Nome',
      email: 'E-mail',
      message: 'Mensagem',
      errors: {
        name: {
          required: 'Digite seu nome.',
          min: 'O nome é muito curto. Mínimo de 3 caracteres.'
        },
        email: {
          format: 'Digite um endereço de e-mail válido.',
          required: 'Digite seu endereço de e-mail.',
          min: 'O e-mail é muito curto. Mínimo de 5 caracteres.'
        },
        message: {
          required: 'Digite sua mensagem.',
          min: 'A mensagem é muito curta. Mínimo de 20 caracteres.'
        }
      },
      check: 'Ele foi enviado corretamente, obrigado!',
      alert: 'Ocorreu um erro.',
      button: 'Enviar'
    }
  },
  footer: {
    categories: {
      info: {
        title: 'Info',
        links: [
          { id: crypto.randomUUID(), href: Routes.home, title: 'Início' },
          { id: crypto.randomUUID(), href: Routes.projects, title: 'Projetos' },
          { id: crypto.randomUUID(), href: Routes.about, title: 'Sobre Mim' },
          { id: crypto.randomUUID(), href: Routes.contact, title: 'Contato' }
        ]
      },
      contact: {
        title: 'Contato',
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
    copyright: '© Davidmedev. Todos os direitos reservados.'
  }
}

export default dictionary

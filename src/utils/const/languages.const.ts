import { Routes } from './routes.const'

export const languageEN = {
  header: {
    links: [
      { id: crypto.randomUUID(), href: Routes.home, title: 'Home' },
      { id: crypto.randomUUID(), href: Routes.projects, title: 'Projects' },
      { id: crypto.randomUUID(), href: Routes.about, title: 'About Me' },
      { id: crypto.randomUUID(), href: Routes.contact, title: 'Contact' }
    ]
  },
  home: {
    name: 'David Mamani',
    role: 'Frontend Developer',
    projects: [
      {
        id: crypto.randomUUID(),
        month: 'August',
        year: '2023',
        name: 'Design',
        subname: 'Website',
        skills: ['Typescript', 'Next', 'Tailwind CSS', 'Clsx', 'React Hook Form', 'Pnpm'],
        slug: 'design-website',
        image: '/assets/projects/designwebsite/designwebsite.webp',
        alt: 'Design website project thumbnail',
        code: 'https://github.com/davidmedev222/design',
        demo: 'https://designwebsite.vercel.app/',
        description:
          'Website that allows designers to show their work and projects in an attractive and professional way. Where they can create their personalized portfolio, upload their designs, and share it with the world. This website allows them to highlight their talent and connect with potential clients or collaborators.',
        project: 'Design Website',
        date: 'August 2023',
        role: 'Frontend Developer',
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
        mockups: [
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the design website project' },
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the design website project' },
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the design website project' }
        ],
        prevProject: '',
        nextProject: 'solidarity-union'
      },
      {
        id: crypto.randomUUID(),
        month: 'July',
        year: '2023',
        name: 'Mova',
        subname: 'App',
        skills: ['Typescript', 'Expo', 'React Native', 'Clsx', 'Firebase', 'Pnpm'],
        slug: 'mova-app',
        image: '/assets/projects/movaapp/movaapp.webp',
        alt: 'Mova app project thumbnail',
        code: 'https://github.com/davidmedev222/mova',
        demo: 'https://github.com/davidmedev222/mova#usage',
        description:
          'Mobile application where you can view the catalogs of popular movies, top rated movies, incoming movies, series and more.',
        project: 'Mova App',
        date: 'July 2023',
        role: 'Frontend Developer',
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
        mockups: [
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the mova app project' },
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the mova app project' },
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the mova app project' }
        ],
        prevProject: '',
        nextProject: 'design-website'
      },
      {
        id: crypto.randomUUID(),
        month: 'May',
        year: '2023',
        name: 'My',
        subname: 'Photos',
        skills: ['Typescript', 'Next', 'Tailwind CSS', 'Clsx', 'Firebase', 'Pnpm'],
        slug: 'my-photos',
        image: '/assets/projects/myphotos/myphotos.webp',
        alt: 'My photos project thumbnail',
        code: 'https://github.com/davidmedev222/my-photos',
        demo: 'https://myphotosdev.vercel.app/',
        description:
          'Website designed exclusively to showcase photographs, focused on providing visitors with a captivating visual experience by presenting stunning images in a simple one-page layout.',
        project: 'My Photos',
        date: 'May 2023',
        role: 'Frontend Developer',
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
        mockups: [
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the my photos project' },
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the my photos project' },
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the my photos project' }
        ],
        prevProject: '',
        nextProject: 'lawyer-website'
      },
      {
        id: crypto.randomUUID(),
        month: 'January',
        year: '2023',
        name: 'Apollo',
        subname: 'NFT',
        skills: ['Javascript', 'React', 'Sass', 'ViteJs', 'React Router Dom', 'Pnpm'],
        slug: 'apollo-nft',
        image: '/assets/projects/apollonft/apollonft.webp',
        alt: 'Apollo NFT project thumbnail',
        code: 'https://github.com/davidmedev222/landing-apollonft-react',
        demo: 'https://apollonft.vercel.app/',
        description:
          'Apollo NFT, Website where you can find information about the nft market and information on how to create your own nft from the page.',
        project: 'Apollo NFT',
        date: 'January 2023',
        role: 'Frontend Developer',
        technologies: ['Javascript', 'React', 'Sass', 'ViteJs', 'React Router Dom', 'CommitLint', 'Husky', 'Pnpm'],
        tools: ['ESLint', 'Figma', 'Trello', 'Visual Studio Code', 'Git', 'Github'],
        video: '',
        mockups: [
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the union solidaria project' },
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the union solidaria project' },
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the union solidaria project' }
        ],
        prevProject: '',
        nextProject: 'solidarity-union'
      },
      {
        id: crypto.randomUUID(),
        month: 'October',
        year: '2022',
        name: 'Jordan',
        subname: 'Store',
        skills: ['Javascript', 'React', 'Styled Components', 'ViteJs', 'React Router Dom', 'Firebase'],
        slug: 'jordan-store',
        image: '/assets/projects/jordanstore/jordanstore.webp',
        alt: 'Jordan Store project thumbnail',
        code: 'https://github.com/davidmedev222/ecommerce-jordan-react',
        demo: 'https://jordanstore.vercel.app/',
        description:
          'Online sneaker store for people with a Jordan brand preference, where they will be able to purchase and manage their own account on the website.',
        project: 'Jordan Store',
        date: 'October 2022',
        role: 'Frontend Developer',
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
        mockups: [
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the jordan store project' },
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the jordan store project' },
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the jordan store project' }
        ],
        prevProject: '',
        nextProject: 'solidarity-union'
      }
    ],
    link: { id: crypto.randomUUID(), href: Routes.projects, title: 'View All' }
  },
  projects: {
    title: 'Projects',
    projects: [
      {
        id: crypto.randomUUID(),
        month: 'August',
        year: '2023',
        name: 'Solidarity',
        subname: 'Union',
        skills: ['Typescript', 'Next', 'Tailwind CSS', 'Redux Toolkit', 'Axios', 'Npm'],
        slug: 'solidarity-union',
        image: '/assets/projects/unionsolidaria/unionsolidaria.webp',
        alt: 'Solidarity union project thumbnail',
        code: 'https://github.com/No-Country/s10-13-m-express-next',
        demo: 'https://union-solidaria-app.vercel.app/',
        description:
          'A webapp that connects volunteers with social initiatives of different categories and themes, that also allows organizations to create their own initiatives to recruit volunteers. A portal oriented to volunteers who want to help beyond their resources or possibilities.',
        project: 'Solidarity Union',
        date: 'August 2023',
        role: 'Frontend Developer',
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
        tools: ['ESLint, Prettier, Figma, Notion, RapidAPI Client, Slack, Discord, Visual Studio Code, Git, Github'],
        video: '',
        mockups: [
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the solidarity union project' },
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the solidarity union project' },
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the solidarity union project' }
        ],
        prevProject: '',
        nextProject: 'solidarity-union'
      },
      {
        id: crypto.randomUUID(),
        month: 'August',
        year: '2023',
        name: 'Design',
        subname: 'Website',
        skills: ['Typescript', 'Next', 'Tailwind CSS', 'Clsx', 'React Hook Form', 'Pnpm'],
        slug: 'design-website',
        image: '/assets/projects/designwebsite/designwebsite.webp',
        alt: 'Design website project thumbnail',
        code: 'https://github.com/davidmedev222/design',
        demo: 'https://designwebsite.vercel.app/',
        description:
          'Website that allows designers to show their work and projects in an attractive and professional way. Where they can create their personalized portfolio, upload their designs, and share it with the world. This website allows them to highlight their talent and connect with potential clients or collaborators.',
        project: 'Design Website',
        date: 'August 2023',
        role: 'Frontend Developer',
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
        mockups: [
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the design website project' },
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the design website project' },
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the design website project' }
        ],
        prevProject: '',
        nextProject: 'solidarity-union'
      },
      {
        id: crypto.randomUUID(),
        month: 'July',
        year: '2023',
        name: 'Mova',
        subname: 'App',
        skills: ['Typescript', 'Expo', 'React Native', 'Clsx', 'Firebase', 'Pnpm'],
        slug: 'mova-app',
        image: '/assets/projects/movaapp/movaapp.webp',
        alt: 'Mova app project thumbnail',
        code: 'https://github.com/davidmedev222/mova',
        demo: 'https://github.com/davidmedev222/mova#usage',
        description:
          'Mobile application where you can view the catalogs of popular movies, top rated movies, incoming movies, series and more.',
        project: 'Mova App',
        date: 'July 2023',
        role: 'Frontend Developer',
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
        mockups: [
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the mova app project' },
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the mova app project' },
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the mova app project' }
        ],
        prevProject: '',
        nextProject: 'design-website'
      },
      {
        id: crypto.randomUUID(),
        month: 'July',
        year: '2023',
        name: 'Lot',
        subname: 'Todo',
        skills: ['Javascript', 'Expo', 'React', 'Style Sheet', 'Firebase', 'Npm'],
        slug: 'lot-todo',
        image: '/assets/projects/lottodo/lottodo.webp',
        alt: 'Lot todo project thumbnail',
        code: 'https://github.com/No-Country/C12-38-M-REACTNATIVE',
        demo: 'https://expo.dev/@florencia09/lot-todo?serviceType=classic&distribution=expo-go',
        description:
          'The application seeks to offer a tool to potential users to organize their daily activities through lists of tasks divided by categories and with the possibility of visualizing them on a daily, weekly and monthly basis; as well as a home screen where you can see at a glance the total number of tasks created. There is also the possibility of deleting these tasks or marking them as completed. Finally, you can register as a user, change your account data and profile picture.',
        project: 'Lot Todo',
        date: 'July 2023',
        role: 'Frontend Developer',
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
        mockups: [
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the lot todo project' },
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the lot todo project' },
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the lot todo project' }
        ],
        prevProject: '',
        nextProject: 'mova-app'
      },
      {
        id: crypto.randomUUID(),
        month: 'July',
        year: '2023',
        name: 'Lawyer',
        subname: 'Website',
        skills: ['Typescript', 'Next', 'Tailwind CSS', 'Clsx', 'React Hook Form', 'Pnpm'],
        slug: 'lawyer-website',
        image: '/assets/projects/lawyerwebsite/lawyerwebsite.webp',
        alt: 'Lawyer website project thumbnail',
        code: 'https://github.com/demattei-teo/Lawyer',
        demo: 'https://lawyerdev.vercel.app/',
        description:
          'Website of a law firm that offers legal services to its clients. Where you can view information about their advice and quality legal representation to their clients respecting the ethical and deontological principles of the profession.',
        project: 'Lawyer Website',
        date: 'July 2023',
        role: 'Frontend Developer',
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
        mockups: [
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the lawyer website project' },
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the lawyer website project' },
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the lawyer website project' }
        ],
        prevProject: '',
        nextProject: 'lot-todo'
      },
      {
        id: crypto.randomUUID(),
        month: 'May',
        year: '2023',
        name: 'My',
        subname: 'Photos',
        skills: ['Typescript', 'Next', 'Tailwind CSS', 'Clsx', 'Firebase', 'Pnpm'],
        slug: 'my-photos',
        image: '/assets/projects/myphotos/myphotos.webp',
        alt: 'My photos project thumbnail',
        code: 'https://github.com/davidmedev222/my-photos',
        demo: 'https://myphotosdev.vercel.app/',
        description:
          'Website designed exclusively to showcase photographs, focused on providing visitors with a captivating visual experience by presenting stunning images in a simple one-page layout.',
        project: 'My Photos',
        date: 'May 2023',
        role: 'Frontend Developer',
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
        mockups: [
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the my photos project' },
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the my photos project' },
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the my photos project' }
        ],
        prevProject: '',
        nextProject: 'lawyer-website'
      },
      {
        id: crypto.randomUUID(),
        month: 'March',
        year: '2023',
        name: 'Chat',
        subname: 'Box',
        skills: ['Typescript', 'React', 'Styled Components', 'ViteJs', 'React Router Dom', 'Npm'],
        slug: 'chat-box',
        image: '/assets/projects/chatbox/chatbox.webp',
        alt: 'Chat Box project thumbnail',
        code: 'https://github.com/No-Country/S7-20-T-NODEREACT',
        demo: 'https://github.com/No-Country/S7-20-T-NODEREACT',
        description:
          'A chat application that allows users to communicate with other users via text messages where users can create an account, change their settings and preferences.',
        project: 'Chat Box',
        date: 'March 2023',
        role: 'Frontend Developer',
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
        mockups: [
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the chat box project' },
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the chat box project' },
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the chat box project' }
        ],
        prevProject: '',
        nextProject: 'my-photos'
      },
      {
        id: crypto.randomUUID(),
        month: 'March',
        year: '2023',
        name: 'Agency',
        subname: 'Website',
        skills: ['Typescript', 'React', 'Styled Components', 'ViteJs', 'React Router Dom', 'Pnpm'],
        slug: 'agency-website',
        image: '/assets/projects/agencywebsite/agencywebsite.webp',
        alt: 'Agency website project thumbnail',
        code: 'https://github.com/davidmedev222/agency',
        demo: 'https://devagency.vercel.app/',
        description:
          'Agency, modern website where you can see the projects, clients, services, jobs, and information about the agency.',
        project: 'Agency Website',
        date: 'March 2023',
        role: 'Frontend Developer',
        technologies: ['Typescript', 'React', 'Styled Components', 'ViteJs', 'React Router Dom', 'Pnpm'],
        tools: ['ESLint', 'Figma', 'Trello', 'Visual Studio Code', 'Git', 'Github'],
        video: '',
        mockups: [
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the agency website project' },
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the agency website project' },
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the agency website project' }
        ],
        prevProject: '',
        nextProject: 'solidarity-union'
      },
      {
        id: crypto.randomUUID(),
        month: 'January',
        year: '2023',
        name: 'Custom',
        subname: 'Sports',
        skills: ['Javascript', 'React', 'Styled Components', 'ViteJs', 'React Router Dom', 'Npm'],
        slug: 'custom-sports',
        image: '/assets/projects/customsports/customsports.webp',
        alt: 'Custom Sports project thumbnail',
        code: 'https://github.com/No-Country/S6-14-T-MERN',
        demo: 'http://ec2-18-118-29-121.us-east-2.compute.amazonaws.com/',
        description:
          'Custom Sports, online store of sports apparel, where you can design and buy the sports model, with the possibility to create and manage a personal user account.',
        project: 'Custom Sports',
        date: 'January 2023',
        role: 'Frontend Developer',
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
        mockups: [
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the custom sports project' },
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the custom sports project' },
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the custom sports project' }
        ],
        prevProject: '',
        nextProject: 'solidarity-union'
      },
      {
        id: crypto.randomUUID(),
        month: 'January',
        year: '2023',
        name: 'Apollo',
        subname: 'NFT',
        skills: ['Javascript', 'React', 'Sass', 'ViteJs', 'React Router Dom', 'Pnpm'],
        slug: 'apollo-nft',
        image: '/assets/projects/apollonft/apollonft.webp',
        alt: 'Apollo NFT project thumbnail',
        code: 'https://github.com/davidmedev222/landing-apollonft-react',
        demo: 'https://apollonft.vercel.app/',
        description:
          'Apollo NFT, Website where you can find information about the nft market and information on how to create your own nft from the page.',
        project: 'Apollo NFT',
        date: 'January 2023',
        role: 'Frontend Developer',
        technologies: ['Javascript', 'React', 'Sass', 'ViteJs', 'React Router Dom', 'CommitLint', 'Husky', 'Pnpm'],
        tools: ['ESLint', 'Figma', 'Trello', 'Visual Studio Code', 'Git', 'Github'],
        video: '',
        mockups: [
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the union solidaria project' },
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the union solidaria project' },
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the union solidaria project' }
        ],
        prevProject: '',
        nextProject: 'solidarity-union'
      },
      {
        id: crypto.randomUUID(),
        month: 'December',
        year: '2022',
        name: 'Blizt',
        subname: 'Website',
        skills: ['Javascript', 'React', 'Sass', 'ViteJs', 'React Router Dom', 'Pnpm'],
        slug: 'blizt-website',
        image: '/assets/projects/bliztwebsite/bliztwebsite.webp',
        alt: 'Blizt Website project thumbnail',
        code: 'https://github.com/davidmedev222/landing-blizt-react',
        demo: 'https://blizt.vercel.app/',
        description:
          'Blizt website, where you can see information about the company, services, projects and how to contact the brand.',
        project: 'Blizt Website',
        date: 'December 2022',
        role: 'Frontend Developer',
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
        mockups: [
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the blizt website project' },
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the blizt website project' },
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the blizt website project' }
        ],
        prevProject: '',
        nextProject: 'solidarity-union'
      },
      {
        id: crypto.randomUUID(),
        month: 'November',
        year: '2022',
        name: 'Stadium',
        subname: 'Sports',
        skills: ['Javascript', 'React', 'Sass', 'ViteJs', 'React Router Dom', 'Npm'],
        slug: 'stadium-sports',
        image: '/assets/projects/stadiumsports/stadiumsports.webp',
        alt: 'Stadium Sports project thumbnail',
        code: 'https://github.com/No-Country/C8-73-T-RN',
        demo: 'https://e-stadium.vercel.app/',
        description:
          'Online gaming and e-sports platform for gamers and tournament organizers where gamers can discover tournaments and participate, and tournament organizers can create and manage their tournaments and build their own communities.',
        project: 'Stadium Sports',
        date: 'November 2022',
        role: 'Frontend Developer',
        technologies: ['Javascript', 'React', 'Sass', 'ViteJs', 'React Router Dom', 'Firebase', 'Glider Js', 'Npm'],
        tools: ['Figma', 'Trello', 'Slack', 'Discord', 'Visual Studio Code', 'Git', 'Github'],
        video: '',
        mockups: [
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the stadium sports project' },
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the stadium sports project' },
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the stadium sports project' }
        ],
        prevProject: '',
        nextProject: 'solidarity-union'
      },
      {
        id: crypto.randomUUID(),
        month: 'October',
        year: '2022',
        name: 'Jordan',
        subname: 'Store',
        skills: ['Javascript', 'React', 'Styled Components', 'ViteJs', 'React Router Dom', 'Firebase'],
        slug: 'jordan-store',
        image: '/assets/projects/jordanstore/jordanstore.webp',
        alt: 'Jordan Store project thumbnail',
        code: 'https://github.com/davidmedev222/ecommerce-jordan-react',
        demo: 'https://jordanstore.vercel.app/',
        description:
          'Online sneaker store for people with a Jordan brand preference, where they will be able to purchase and manage their own account on the website.',
        project: 'Jordan Store',
        date: 'October 2022',
        role: 'Frontend Developer',
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
        mockups: [
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the jordan store project' },
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the jordan store project' },
          { id: crypto.randomUUID(), image: '', alt: 'Design of presentation of the jordan store project' }
        ],
        prevProject: '',
        nextProject: 'solidarity-union'
      }
    ]
  },
  about: {
    title: 'About Me',
    name: 'David',
    lastname: 'Mamani',
    paragraph: `Web developer and mentor with 2 years of experience, specialized in Frontend with a solid focus on creating modern and functional user interfaces using best practices and industry standards.

    I participated in multiple collaborative teams formed by Startup No Country Argentina. These experiences allowed me to develop effective communication and collaboration skills, as well as adaptability to work in dynamic environments.
    
    As a professional, I am constantly updating my knowledge to keep up with the latest trends and technologies.
    
    I am currently looking for a job as a Frontend Developer or similar positions.`,
    experience: {
      title: 'Projects',
      categories: [
        { id: crypto.randomUUID(), title: 'Personal', quantity: 6 },
        { id: crypto.randomUUID(), title: 'Collaborative', quantity: 7 },
        { id: crypto.randomUUID(), title: 'Team Leader', quantity: 2 }
      ]
    },
    skills: {
      title: 'Skills',
      categories: [
        {
          id: crypto.randomUUID(),
          title: 'Languages & preprocessors',
          logos: [
            { id: crypto.randomUUID(), image: '/assets/skills/logohtml.webp', alt: 'Technology logo html' },
            { id: crypto.randomUUID(), image: '/assets/skills/logocss.webp', alt: 'Technology logo css' },
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logojavascript.webp',
              alt: 'Technology logo javascript'
            },
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logotypescript.webp',
              alt: 'Technology logo typescript'
            },
            { id: crypto.randomUUID(), image: '/assets/skills/logosass.webp', alt: 'Technology logo sass' },
            { id: crypto.randomUUID(), image: '/assets/skills/logopostcss.webp', alt: 'Technology logo postcss' },
            { id: crypto.randomUUID(), image: '/assets/skills/logomarkdown.webp', alt: 'Technology logo markdown' }
          ]
        },
        {
          id: crypto.randomUUID(),
          title: 'Build Tools & Bundlers',
          logos: [
            { id: crypto.randomUUID(), image: '/assets/skills/logobabel.webp', alt: 'Technology logo babeljs' },
            { id: crypto.randomUUID(), image: '/assets/skills/logovite.webp', alt: 'Technology logo vitejs' }
          ]
        },
        {
          id: crypto.randomUUID(),
          title: 'Frameworks',
          logos: [
            { id: crypto.randomUUID(), image: '/assets/skills/logonext.webp', alt: 'Technology logo nextjs' },
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logotailwindcss.webp',
              alt: 'Technology logo tailwind css'
            },
            { id: crypto.randomUUID(), image: '/assets/skills/logonode.webp', alt: 'Technology logo node js' },
            { id: crypto.randomUUID(), image: '/assets/skills/logofirebase.webp', alt: 'Technology logo firebase' }
          ]
        },
        {
          id: crypto.randomUUID(),
          title: 'Libraries',
          logos: [
            { id: crypto.randomUUID(), image: '/assets/skills/logoreact.webp', alt: 'Technology logo react' },
            { id: crypto.randomUUID(), image: '/assets/skills/logomui.webp', alt: 'Technology logo material ui' },
            { id: crypto.randomUUID(), image: '/assets/skills/logobootstrap.webp', alt: 'Technology logo bootstrap' },
            { id: crypto.randomUUID(), image: '/assets/skills/logoredux.webp', alt: 'Technology logo redux toolkit' },
            { id: crypto.randomUUID(), image: '/assets/skills/logoaxios.webp', alt: 'Technology logo axios' },
            { id: crypto.randomUUID(), image: '/assets/skills/logomongoose.webp', alt: 'Technology logo mongoose' },
            { id: crypto.randomUUID(), image: '/assets/skills/logostripe.webp', alt: 'Technology logo stripe' },
            { id: crypto.randomUUID(), image: '/assets/skills/logocommitlint.webp', alt: 'Technology logo commitlint' },
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logoreactrouterdom.webp',
              alt: 'Technology logo react router dom'
            },
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logoreacthookform.webp',
              alt: 'Technology logo react hook form'
            },
            { id: crypto.randomUUID(), image: '/assets/skills/logohusky.webp', alt: 'Technology logo husky' },
            { id: crypto.randomUUID(), image: '/assets/skills/logozustand.webp', alt: 'Technology logo zustand' },
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logostyledcomponents.webp',
              alt: 'Technology logo styled components'
            }
          ]
        },
        {
          id: crypto.randomUUID(),
          title: 'Package Managers',
          logos: [
            { id: crypto.randomUUID(), image: '/assets/skills/logopnpm.webp', alt: 'Technology logo pnpm' },
            { id: crypto.randomUUID(), image: '/assets/skills/logonpm.webp', alt: 'Technology logo npm' }
          ]
        },
        {
          id: crypto.randomUUID(),
          title: 'Databases',
          logos: [
            { id: crypto.randomUUID(), image: '/assets/skills/logomongodb.webp', alt: 'Technology logo mongo db' },
            { id: crypto.randomUUID(), image: '/assets/skills/logofirebase.webp', alt: 'Technology logo firebase' }
          ]
        },
        {
          id: crypto.randomUUID(),
          title: 'Tools & Linters',
          logos: [
            { id: crypto.randomUUID(), image: '/assets/skills/logotrello.webp', alt: 'Technology logo trello' },
            { id: crypto.randomUUID(), image: '/assets/skills/logofigma.webp', alt: 'Technology logo figma' },
            { id: crypto.randomUUID(), image: '/assets/skills/logomiro.webp', alt: 'Technology logo miro' },
            { id: crypto.randomUUID(), image: '/assets/skills/logorapidapi.webp', alt: 'Technology logo rapid api' },
            { id: crypto.randomUUID(), image: '/assets/skills/logogit.webp', alt: 'Technology logo git' },
            { id: crypto.randomUUID(), image: '/assets/skills/logogithub.webp', alt: 'Technology logo github' },
            { id: crypto.randomUUID(), image: '/assets/skills/logocanva.webp', alt: 'Technology logo canva' },
            { id: crypto.randomUUID(), image: '/assets/skills/logoslack.webp', alt: 'Technology logo slack' },
            { id: crypto.randomUUID(), image: '/assets/skills/logonotion.webp', alt: 'Technology logo notion' },
            { id: crypto.randomUUID(), image: '/assets/skills/logodiscord.webp', alt: 'Technology logo discord' },
            {
              id: crypto.randomUUID(),
              image: '/assets/skills/logovisualstudiocode.webp',
              alt: 'Technology logo visual studio code'
            },
            { id: crypto.randomUUID(), image: '/assets/skills/logowordpress.webp', alt: 'Technology logo wordpress' },
            { id: crypto.randomUUID(), image: '/assets/skills/logoeslint.webp', alt: 'Technology logo eslint' },
            { id: crypto.randomUUID(), image: '/assets/skills/logoprettier.webp', alt: 'Technology logo prettier' }
          ]
        }
      ]
    }
  },
  contact: {
    title: 'Contact',
    social: {
      paragraph: 'I invite you to connect through my social networks.',
      media: [
        {
          id: crypto.randomUUID(),
          href: 'https://www.linkedin.com/in/davidmedev/',
          image: '/assets/media/logolinkedin.png',
          alt: 'Linkedin social network icon',
          title: 'Linkedin'
        },
        {
          id: crypto.randomUUID(),
          href: 'https://github.com/davidmedev222',
          image: '/assets/media/logogithub.png',
          alt: 'Github social network icon',
          title: 'Github'
        },
        {
          id: crypto.randomUUID(),
          href: 'https://www.instagram.com/davidmedev/',
          image: '/assets/media/logoinstagram.png',
          alt: 'Instagram social network icon',
          title: 'Instagram'
        }
      ]
    },
    contact: {
      paragraph: 'Or contact me by Gmail.',
      button: 'Submit'
    }
  },
  footer: {
    categories: {
      info: {
        title: 'Info',
        links: [
          { id: crypto.randomUUID(), href: Routes.home, title: 'Home' },
          { id: crypto.randomUUID(), href: Routes.projects, title: 'Projects' },
          { id: crypto.randomUUID(), href: Routes.about, title: 'About Me' },
          { id: crypto.randomUUID(), href: Routes.contact, title: 'Contact' }
        ]
      },
      contact: {
        title: 'Contact',
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
    copyright: '© davidmedev. All rights reserved.'
  }
}

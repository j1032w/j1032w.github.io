interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Angular Dashboard Starter',
    description: `A dashboard starter pack build with Angular 18, Nest.js 9, TypeScript 5`,
    imgSrc: '/static/images/angular-dashboard-screen.png',
    href: 'https://www.j1032.com/dashboard',
  },
  {
    title: 'React.js Dashboard Starter',
    description: `ReactJS frontend and NestJS backend dashboard starter, build with React 18,  Nest.js 9, Nx monorepo, TypeScript`,
    imgSrc: '/static/images/react-dashboard-swagger-screen.png',
    href: 'https://github.com/j1032w/das-mono-nestjs-reactjs',
  },
]

export default projectsData

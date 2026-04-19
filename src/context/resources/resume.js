import educationLogo from '../../assets/educ.png'
import workLogo from '../../assets/work.png'
import miscLogo from '../../assets/misc.png'
import { sortDesc as oldestFirst } from '../../utils'

export default {
  experience: {
    visible: true,
    logo: workLogo,
    sortFunc: oldestFirst,
    items: [
      {
        order: 0,
        timePeriod: '2008 - 2017',
        title: 'Project manager',
        place: '',
        show: false
        /*         description: [
          '> Elsevier - managed books & journals in Health Sciences',
          '> Cairn.info - managed journals in Humanities'
        ] */
      },
      {
        order: 1,
        timePeriod: 'Feb - July 2018',
        title: 'Fullstack developer',
        place: 'Groupeer Technologies',
        show: true,
        description: [
          '> React Typescript App internationalization',
          '> Fleet management service for IoT devices'
        ]
      },
      {
        order: 2,
        timePeriod: 'July - Oct 2018',
        title: 'Python Backend developer',
        place: 'SFR',
        show: true,
        description: [
          '> Maintained a large event-driven Python Application',
          '> Created Webservices using Django'
        ]
      },
      {
        order: 3,
        timePeriod: 'Nov 2018 - Oct 2020',
        title: 'Software Engineer',
        place: 'Photobox',
        show: true,
        description: [
          'AI-in-Editor Team',
          '> Integrated AI features for Photo books creation',
          '> Optimized image upload/download',
        ]
      },
      {
        order: 4,
        timePeriod: 'Oct 2020 - present',
        title: 'Lead Software Engineer',
        place: 'AVIV Group (SeLoger)',
        show: true,
        description: [
          '> Build runtime-composition and SSR frontend framework',
          '> Optimize loading time, bundle size, caches strategies',
          '> Created an AI agent using RAG, pgVector DB and MCP',
          '> Mentoring & Code reviews',
        ]
      }
    ]
  },
  education: {
    visible: true,
    logo: educationLogo,
    sortFunc: oldestFirst,
    items: [
      {
        order: 1,
        title: 'JS Fullstack Developer Training',
        place: 'IFOCOP - 2018',
        show: true,
        description: [
          '> frontend project: Fallout-style RPG in React',
          '> fullstack project: Realtime Bitcoin trading simulator'
        ]
      },
    ]
  },
  miscellaneous: {
    visible: true,
    logo: miscLogo,
    items: [
      {
        order: 0,
        title: 'Native speaker French, fluent in English.',
        show: true
      },
      {
        order: 1,
        title: 'Passionate traveller and rider. Fond of trail running.',
        show: true
      },
      {
        order: 2,
        title: 'I really love cinema, especially Tarantino, Casavetes and Kubrick.',
        show: true
      }
    ]
  }
}

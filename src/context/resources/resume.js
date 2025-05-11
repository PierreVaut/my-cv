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
        show: true
        /*         description: [
          '> Elsevier - managed books & journals in Health Sciences',
          '> Cairn.info - managed journals in Humanities'
        ] */
      },
      {
        order: 2,
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
        order: 3,
        timePeriod: 'July - Oct 2018',
        title: 'Python Backend developer',
        place: 'SFR',
        show: true,
        description: [
          '> Create a webservice for Cloud clients',
          '> Improve Test Coverage'
        ]
      },
      {
        order: 4,
        timePeriod: 'Nov 2018 - Oct 2020',
        title: 'Software Engineer',
        place: 'Photobox',
        show: true,
        description: [
          'AI-in-Editor Team',
          '> Develop AI features for Photo books creation',
          '> Improve Image Loading Time',
          '> Enhance Dynamic linking between Apps and Web'
        ]
      },
      {
        order: 5,
        timePeriod: 'Oct 2020 - present',
        title: 'Lead Software Engineer',
        place: 'AVIV Group (SeLoger)',
        show: true,
        description: [
          '> Deliver a multi-brand White Label solution',
          '> Migrate the Frontend to a runtime-composition architecture',
          '> Improve Web Core Vitals and Accessibility',
          '> Mentoring & Code reviews'
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
        order: 0,
        title: 'Master’s degree in Humanities',
        place: 'Sorbonne University - 2008',
        show: true
      },
      {
        order: 2,
        title: 'JS Fullstack Developer Training',
        place: 'IFOCOP - 2018',
        show: true,
        description: [
          '> frontend project: Fallout-style RPG in React',
          '> fullstack project: Realtime Bitcoin trading simulator'
        ]
      },
      {
        order: 1,
        title: 'Self-training Javascript and Python - 2017',
        show: false,
        description: ['> frontend project: Dynamic newsfeed website']
      }
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
        title: 'I really love cinema, especially Kubrick, Casavetes and Tarantino.',
        show: true
      }
    ]
  }
}

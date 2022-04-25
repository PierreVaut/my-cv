import educationLogo from '../../assets/educ.png'
import workLogo from '../../assets/work.png'
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
        show: true,
        description: [
          '> Elsevier - digital books and journals in Health Science',
          '> Cairn.info - digital books and journals in Humanities'
        ]
      },
      {
        order: 2,
        timePeriod: 'Feb - July 2018',
        title: 'Fullstack developer Javascript',
        place: 'Groupeer Technologies',
        show: true,
        description: ['> Created a fleet management service for the IoT devices']
      },
      {
        order: 3,
        timePeriod: 'July - Oct 2018',
        title: 'Backend developer Python',
        place: 'SFR',
        show: true,
        description: [
          '> Contributed to application maintenance, created a webservice for Cloud clients, improved test coverage'
        ]
      },
      {
        order: 4,
        timePeriod: 'Nov 2018 - present',
        title: 'Software Engineer',
        place: 'Photobox',
        show: true,
        description: [
          'AI-in-Editor Team',
          '> Improved Conversion rate by implementing AI features (Autofill, Shuffle layout, Easy-Create) in the creation process',
          '> Improved Time-to-action using frontend image compression',
          '> Improved UX using Cross-device Firebase dynamic link'
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
        title: 'Master’s degree in Communication',
        place: 'Sorbonne University - 2008',
        show: true
      },
      {
        order: 2,
        title: 'Full stack Javascript Training',
        place: 'IFOCOP - 2018',
        show: true,
        description: [
          '> frontend project: Fallout RPG in React',
          '> fullstack project: Realtime Bitcoin trading simulator'
        ]
      },
      {
        order: 1,
        title: 'Self-training Javascript and Python - 2017',
        show: true,
        description: ['> frontend project: Dynamic newsfeed website']
      }
    ]
  },
  miscellaneous: {
    visible: true,
    logo: educationLogo,
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
        title: 'I really love cinema, especially Kubrick, Visconti and Tarkovsky.',
        show: true
      }
    ]
  }
}

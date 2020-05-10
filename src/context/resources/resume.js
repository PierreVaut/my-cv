import educationLogo from '../../assets/educ.png';
import workLogo from '../../assets/work.png';
import { sortDesc as oldestFirst } from '../../utils';

export default {
  experience: {
    visible: true,
    logo: workLogo,
    sortFunc: oldestFirst,
    items: [
      {
        order: 0,
        timePeriod: '2008-2011',
        title: 'Project manager',
        place: 'Cairn.info',
        show: true,
        description: ['> Did some stuff'],
      },
      {
        order: 1,
        timePeriod: '2012-2017',
        title: 'Project manager',
        place: 'Elsevier',
        show: true,
        description: ['> Drank coffee', '> Learned react'],
      },
      {
        order: 2,
        timePeriod: 'Feb 2018-July 2018',
        title: 'Fullstack developer Javascript',
        place: 'Groupeer Technologies',
        show: true,
        description: ['> Did some stuff lalala'],
      },
      {
        order: 3,
        timePeriod: 'July 2018-October 2018',
        title: 'Backend developer Python',
        place: 'SFR',
        show: true,
        description: ['> Fixed bugs'],
      },
      {
        order: 4,
        timePeriod: 'November 2018-present',
        title: 'Software Engineer',
        place: 'Photobox',
        show: true,
        description: ['> Actually did stuff'],
      },
    ],
  },
  education: {
    visible: true,
    logo: educationLogo,
    sortFunc: oldestFirst,
    items: [
      {
        order: 0,
        timePeriod: '2008',
        title: 'Master’s degree in Communication',
        place: 'University Paris Sorbonne',
        show: true,
      },
      {
        order: 2,
        timePeriod: '2018',
        title: 'Full stack Javascript Training',
        place: 'IFOCOP',
        show: true,
        description: ['> frontend project: Fallout RPG in React', '> fullstack project: Bitcoin live trading platform'],

      },
      {
        order: 1,
        timePeriod: '2017',
        title: 'Training in Javascript and Python',
        place: 'Self-teaching',
        show: true,
        description: ['> frontend project: Newsroom'],

      },
    ],
  },
  miscellaneous: {
    visible: true,
    logo: educationLogo,
    items: [
      {
        order: 0,
        title: 'Native speaker French, fluent in English.',
        show: true,
      },
      {
        order: 1,
        title: 'Passionate traveller. Fond of running, trail and mountain bike.',
        show: true,
      },
      {
        order: 2,
        title: 'I really love cinema, especially Kubrick, Visconti and Tarkovsky.',
        show: true,
      },
    ],
  },
};

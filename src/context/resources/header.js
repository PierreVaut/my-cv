import resumePicture from '../../assets/resume.JPG';

export default {
  firstName: 'Pierre',
  lastName: 'Vautherin',
  email: 'p.vautherin@hotmail.com',
  github: {
    text: 'github.com/PierreVaut',
    link: 'https://github.com/PierreVaut',
    description: 'Github',
  },
  linkedin: {
    text: 'linkedin.com/in/pierrevautherin',
    link: 'https://www.linkedin.com/in/pierrevautherin/',
    description: 'Linkedin',
  },
  image: {
    src: resumePicture,
    show: true,
    alt: 'pv',
  },
  summary: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
     unknown printer took a galley of type and scrambled it to make a type specimen book.`,
};

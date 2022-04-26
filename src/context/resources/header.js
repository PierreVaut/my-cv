import resumePicture from '../../assets/resume.JPG'

export default {
  firstName: 'Pierre',
  lastName: 'Vautherin',
  email: 'p.vautherin@hotmail.com',
  title: 'Software Engineer Javascript',
  github: {
    text: 'github.com/PierreVaut',
    link: 'https://github.com/PierreVaut',
    description: 'Github'
  },
  linkedin: {
    text: 'linkedin.com/in/pierrevautherin',
    link: 'https://www.linkedin.com/in/pierrevautherin/',
    description: 'Linkedin'
  },
  image: {
    src: resumePicture,
    show: true,
    alt: 'pv'
  },
  summary: `I am a big fan of React-redux and AWS solutions.
    I worked a few years in the publishing industry, before working in web development.
    I am a hard worker, motivated by technical challenges`
}

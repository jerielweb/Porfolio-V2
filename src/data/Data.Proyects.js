import { JS, HTML, ReactJS, CSS, oboeEdits, calc, portfolio } from "./../assets/index.js"

const PROYECT_DATA = [
  {
    title: 'Oboe Edits',
    description: 'Un sitio Loading Page donde se especializa ofrecer servicios de edición de alta calidad.',
    imgSrc: oboeEdits.src,
    imgScreen: 'Captura de pantalla del sitio Oboe Edits',
    frameworks: ['ReactJS', 'JavaScript', 'CSS'],
    tags: [ReactJS.src, JS.src, CSS.src],
    githubLink: 'https://github.com/jerielweb/Oboe-Edits',
    liveLink: 'https://oboe-edits.vercel.app/'
  },
  {
    title: 'Calculadora',
    description: 'Un proyecto personal hecho destacadamente para el aprendizaje, fue creado durante el curso de JavaScript.',
    imgSrc: calc.src,
    imgScreen: 'Captura de pantalla De la calculadora',
    frameworks: ['HTML', 'CSS', 'JavaScript'],
    tags: [HTML.src, CSS.src, JS.src],
    githubLink: 'https://github.com/jerielweb/calculadora',
    liveLink: 'https://jerielweb.github.io/calculadora/'
  },
  {
    title: 'Porfolio V1',
    description: 'Un proyecto personal hecho destacadamente para el aprendizaje, fue creado durante el curso de JavaScript.',
    imgSrc: portfolio.src,
    imgScreen: 'Captura de pantalla De la mi primer portafolio',
    frameworks: ['HTML', 'CSS', 'JavaScript'],
    tags: [HTML.src, CSS.src, JS.src],
    githubLink: 'https://github.com/jerielweb/portfolio',
    liveLink: 'https://jerielweb.github.io/portfolio'
  },
];

export default PROYECT_DATA
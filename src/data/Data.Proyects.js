import { JS, HTML, React, CSS, oboeEdits, calc, portfolio, vite, LosSimpson, TS } from "./../assets/index.js"

const PROYECT_DATA = [
  {
    title: 'Los Simpson',
    description: 'En este Proyecto me enfoque en como funcionan las apis y quise aplicar mis conocimientos en este pequeño proyecto que hice :)',
    imgSrc: LosSimpson.src,
    imgScreen: 'Captura de pantalla De los Simpson',
    frameworks: ['ReactTS', 'TypeScript', 'CSS', 'Vite'],
    tags: [React.src, TS.src, CSS.src, vite.src],
    githubLink: 'https://github.com/jerielweb/los-sipmson',
    liveLink: 'https://los-sipmson.vercel.app/'
  },
  {
    title: 'Oboe Edits',
    description: 'Un sitio Loading Page donde se especializa ofrecer servicios de edición de alta calidad.',
    imgSrc: oboeEdits.src,
    imgScreen: 'Captura de pantalla del sitio Oboe Edits',
    frameworks: ['ReactJS', 'JavaScript', 'CSS', 'Vite'],
    tags: [React.src, JS.src, CSS.src, vite.src],
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
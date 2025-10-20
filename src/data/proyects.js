
//Screen Shots
import oboeEdits from "./../assets/758shots_so.png"
import calc from "./../assets/678shots_so.png"

// Tags
import Astro from "./../assets/icons/astro.svg"
import ReactJS from "./../assets/icons/react.js.svg"
import CSS from "./../assets/icons/css.svg"
import JS from "./../assets/icons/js.svg"
import HTML from "./../assets/icons/html.svg"

export const projects = [
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
  }
];

export default projects
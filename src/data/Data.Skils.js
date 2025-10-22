import Astro from "./../assets/icons/astro.svg"
import ReactJS from "./../assets/icons/react.js.svg"
import CSS from "./../assets/icons/css.svg"
import JS from "./../assets/icons/js.svg"
import HTML from "./../assets/icons/html.svg"
import Tailwind from "./../assets/icons/tailwind.svg"
import VScode from "./../assets/icons/VScode.svg"

export const skilsData = [
    {
        name: 'Astro',
        picture: Astro.src,
        link: 'https://astro.build'
    },
    {
        name: 'ReactJS',
        picture: ReactJS.src,
        link: 'https://react.dev'
    },
    {
        name: 'CSS',
        picture: CSS.src,
        link: 'https://es.wikipedia.org/wiki/CSS'
    },
    {
        name: 'JavaScript',
        picture: JS.src,
        link: 'https://es.wikipedia.org/wiki/JavaScript'
    },
    {
        name: 'HTML',
        picture: HTML.src,
        link: 'https://es.wikipedia.org/wiki/HTML'
    },
    {
        name: 'TailwindCSS',
        picture: Tailwind.src,
        link: 'https://tailwindcss.com'
    },
    {
        name: 'VS Code',
        picture: VScode.src,
        link: 'https://code.visualstudio.com'
    }
]
export default skilsData
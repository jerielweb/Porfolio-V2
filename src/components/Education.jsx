import { EDUCATION } from "../data/index";
import { Link } from "../assets/index.js";

export default function Education() {
    return (
        <section>
            <h2 className="text-center font-extrabold sm:text-5xl text-4xl">Educación</h2>
            <div className="size-full flex flex-wrap justify-center gap-8 mt-10">
                {EDUCATION.map((course, edu) => (
                    <div className="flex flex-col gap-2 justify-center items-center max-w-sm border-2 border-purple-400 hover:border-purple-100 active:border-purple-100 transition duration-200 ease-out p-3 rounded-lg text-[15px] mx-5" key={edu.id}>
                        <div>
                            <img src={course.img} alt={course.title} className="aspect-auto w-90 h-auto pointer-events-none" />
                        </div>
                        <div>
                            <h3 className="education__title">{course.title}</h3>
                            <p className="education__institution">{course.institution}</p>
                            <span className="text-[12px] text-purple-50/50 font-medium">{course.age}</span>
                        </div>
                        <div className="flex size-full justify-center items-center">
                            <a href={course.link} className="text-[17px] w-full h-fit bg-purple-700 py-2 px-5 rounded-[10px] transition active:scale-93 font-semibold cursor-pointer mx-3 items-center justify-center flex mt-4 text-center max-w-65 sm:max-w-none flex-row gap-2" target="_blank" rel="noopener noreferrer">
                                <p>Sitio Oficial</p>
                                    <img src={Link.src} alt="Sitio Oficial" className="size-5 pointer-events-none" />
                                </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
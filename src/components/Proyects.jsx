// src/components/ProjectCard.jsx
import proyectsData from "./../data/proyects"
export default function ProjectCard() {
  return (
    <section id="proyects" className='flex min-h-[650px] text-purple-100 flex-col gap-5 justify-center w-full items-center'>
      <h2 className="text-center font-extrabold text-5xl">Proyectos más Recientes</h2>
      {proyectsData.map ((data, index) => (
        <article key={index} className='flex gap-5 rounded-2xl m-8 overflow-hidden lg:pr-0 lg:pl-0 flex-col-reverse xl:flex-row lg:max-w-6xl xl:h-96 border-3 justify-between items-center hover:scale-103 transition duration-200 ease-out'>
          <div className="xl:max-w-lg w-full xl:w-auto flex flex-col h-full p-5">
            <div className="flex h-full flex-col justify-between gap-5">
                <h2
                className="text-4xl font-bold"
                >{data.title}</h2>
              <div>
                {/* Lógica para descripción: Correcta */}
                {data.description instanceof Array ? (
                            data.description.map((desc, i) => (
                                <p key={i} >{desc}</p>
                            ))
                        ) : (
                            <p
                            className="max-w-[400px] text-[1.3rem] font-semibold"
                            >{data.description}</p>
                        )}
              </div>
              <div>
                <h2
                className="text-3xl font-bold"
                >Stacks</h2>
                <div className="flex flex-row w-max gap-2">
                {data.tags instanceof Array && data.frameworks instanceof Array && data.tags.length === data.frameworks.length ? (
                  data.tags.map((imgSrc, p) => (
                    <img
                      key={p}
                      className="size-12 aspect-square pointer-events-none rounded"
                      alt={data.frameworks[p]}
                      itemType="image/svg+xml"
                      src={imgSrc}
                    />
                  ))
                ) : (
                  <img
                    itemType="image/svg+xml"
                    src={data.tags}
                    alt={`Iconos de tecnologías para ${data.title}`}
                  />
                )}
                </div>
              </div>
              <div className="flex lg:w-full lg:flex-row gap-5 font-semibold text-center">
                <a className="text-[20px] size-fit bg-purple-700 py-2 px-5 rounded-[10px]" target="_blank" href={data.liveLink}>Ver Demo</a>
                <a className="text-[20px] size-fit bg-purple-700 py-2 px-5 rounded-[10px]" target="_blank" href={data.githubLink}>Ver Codigo</a>
              </div>
            </div>
          </div>
          <div className="flex lg:p-0 mask-clip-border">
            <img src={data.imgSrc} alt={data.imgScreen} className="max-h-96 h-auto object-contain aspect-video rounded-2xl mask-clip-border"/>
          </div>
        </article>
      ))}
    </section>
  );
}

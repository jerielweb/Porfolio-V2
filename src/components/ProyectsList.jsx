
import { proyectsData } from "./../data/index.js

export default function ProjectList() {
  return (
    <section id="proyects" className='flex min-h-[650px] text-purple-100 flex-col gap-2 justify-center w-full items-center'>
      <h2 className="text-center font-extrabold sm:text-5xl text-4xl">Proyectos más Recientes</h2>
      {proyects.map((data, index) => (
        <article key={data.id || index} className='flex gap-2 rounded-2xl m-8 overflow-hidden lg:pr-0 lg:pl-0 flex-col-reverse xl:flex-row lg:max-w-6xl xl:h-96 border-3 justify-between items-center hover:scale-103 transition duration-200 ease-out'>
          <div className="xl:max-w-lg w-full xl:w-auto flex flex-col h-full p-5">
            <div className="flex h-full flex-col justify-between gap-5">
                <h2
                className="text-4xl font-bold"
                data-astro-transition-persist={`project-title-${data.id || data.title}`}
                >{data.title}</h2>
              <div>
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
                      loading="lazy"
                      data-astro-transition-persist={`stack-image-${data.id || data.title}-${p}`}
                    />
                  ))
                ) : (
                  <img
                    itemType="image/svg+xml"
                    src={data.tags}
                    alt={`Iconos de tecnologías para ${data.title}`}
                    loading="lazy"
                    data-astro-transition-persist={`stack-image-${data.id || data.title}`}
                  />
                )}
                </div>
              </div>
              <div className="flex lg:w-full lg:flex-row gap-5 font-semibold text-center items-center justify-center sm:justify-normal sm:items-normal">
                <a className="text-[20px] size-fit bg-purple-700 py-2 px-5 rounded-[10px] transition active:scale-93" target="_blank" href={data.liveLink} rel="noopener norefered">Ver Demo</a>
                <a className="text-[20px] size-fit bg-purple-700 py-2 px-5 rounded-[10px] transition active:scale-93" target="_blank" href={data.githubLink} rel="noopener norefered">Ver Codigo</a>
              </div>
            </div>
          </div>
          <div className="flex lg:p-0 mask-clip-border">
            <img
            src={data.imgSrc}
            alt={data.imgScreen}
            className="max-h-96 h-auto object-contain aspect-video rounded-xl mask-clip-border"
            loading="lazy"
            data-astro-transition-persist={`project-image-${data.id || data.title}`}
            />
          </div>
        </article>
      ))}
      {isHomePage && (
        <a href="/proyects" className="text-[20px] size-fit bg-purple-700 py-2 px-5 rounded-[10px] transition active:scale-93 font-semibold cursor-pointer">
          Ver todos los Proyectos
        </a>
      )}
    </section>
  );
}
export default function ProjectList({proyectsData = [], title, showAllButton = true}) {
  return (
    <section className='flex min-h-[650px] text-purple-100 flex-col gap-2 justify-center w-full items-center'>
      <h2 className={showAllButton ? "text-center font-extrabold sm:text-5xl text-4xl" : "text-center font-extrabold sm:text-5xl text-4xl mt-20"}>{title}</h2>
      {proyectsData.map((data, index) => (
        <article key={index} className='flex gap-2 rounded-2xl m-8 overflow-hidden lg:pr-0 lg:pl-0 flex-col-reverse xl:flex-row lg:max-w-6xl xl:h-96 border-3 border-purple-400 justify-between items-center hover:border-purple-100 active:border-purple-100 transition duration-200 ease-out'>
          <div className="xl:max-w-lg w-full xl:w-auto flex flex-1 flex-col h-full px-5 py-3">
            <div className="flex h-full flex-col justify-evenly gap-2">
                <h2
                className="text-4xl font-bold"
                data-astro-transition-persist={`project-title-${data.title}`}
                >{data.title}</h2>
              <div>
                {data.description instanceof Array ? (
                            data.description.map((desc, i) => (
                                <p key={i}>{desc}</p>
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
                <div className="flex flex-row w-max gap-2 font-">
                {data.tags instanceof Array && data.frameworks instanceof Array && data.tags.length === data.frameworks.length ? (
                  data.tags.map((imgSrc, p) => (
                    <img
                      key={p}
                      className="size-11 aspect-square pointer-events-none rounded"
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
                    data-astro-transition-persist={`stack-image-${data.title}`}
                  />
                )}
                </div>
              </div>
              <div className="flex lg:w-full lg:flex-row gap-5 font-semibold text-center items-center justify-center sm:justify-normal sm:items-normal">
                <a className="text-[17px] size-fit bg-purple-700 py-2 px-5 rounded-[10px] transition active:scale-93" target="_blank" href={data.liveLink} rel="noopener noreferrer">Ver Demo</a>
                <a className="text-[17px] size-fit bg-purple-700 py-2 px-5 rounded-[10px] transition active:scale-93" target="_blank" href={data.githubLink} rel="noopener noreferrer">Ver Codigo</a>
              </div>
            </div>
          </div>
          <div className="flex lg:p-0 mask-clip-border">
            <img
            src={data.imgSrc}
            alt={data.imgScreen}
            className="max-h-96 h-auto object-contain aspect-video rounded-xl mask-clip-border"
            loading="lazy"
            />
          </div>
        </article>
      ))}
      { showAllButton && (
      <a href="/proyects" className="text-[20px] size-fit bg-purple-700 py-2 px-5 rounded-[10px] transition active:scale-93 font-semibold cursor-pointer mx-3 items-center justify-center flex mt-4 text-center max-w-65 sm:max-w-none">
          Ver todos los Proyectos
        </a>
      )}
    </section>
  );
}

// src/components/ProjectCard.jsx
import proyectsData from "./../data/proyects"


export default function ProjectCard() {
  return (
    <section className='flex text-purple-100 flex-col gap-5'>
      <h2>Proyectoes mas Recientes</h2>
      {proyectsData.map ((data, index) => (
        <article key={index} className='flex rounded-3xl overflow-hidden flex-row lg:w-5xl lg:h-64 border-b-purple-50 border justify-between items-center'>
          <div className="max-w-lg flex lg:flex-col justify-evenly h-full">
              <h2>{data.title}</h2>
            <div>
              {data.description instanceof Array ? (
                          data.description.map((desc, i) => (
                              <p key={i}>{desc}</p>
                          ))
                      ) : (
                          <p className="max-w-[400px]">{data.description}</p>
                      )}
            </div>
            <div>

            </div>
          </div>
          <div>
            <img src={data.imgSrc} alt={data.title} className=" max-w-[512px]"/>
          </div>
        </article>
      ))}
    </section>
  );
}
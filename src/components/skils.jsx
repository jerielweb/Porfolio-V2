import skilsData from "../data/Data.Skils.js";

export function Skils()  {
    return(
        <section className="flex min-h-[650px] text-purple-100 flex-col gap-10 justify-center w-full items-center">
            <h2 className="text-center font-extrabold text-5xl">Conocimientos</h2>
            <div className="flex max-w-5xl flex-row flex-wrap gap-10 items-center justify-center">
                {skilsData.map ((sk, index) => (
                    <div key={index}
                    className="flex size-fit hover:scale-105 transition duration-200 ease-out"
                    >
                        <a
                        className="flex items-center justify-center flex-col gap-5 rounded-3xl border p-4"
                        rel="noopener norefered"
                        target="_blank"
                        href={sk.link}
                        >
                            <img src={sk.picture} className="sm:size-30 size-20 rounded" alt={sk.name}/>
                            <p>{sk.name}</p>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skils
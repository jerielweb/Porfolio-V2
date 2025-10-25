import skilsData from "../data/Data.Skils.js";

export function Skils()  {
    return(
        <section className="flex min-h-[650px] text-purple-100 flex-col gap-10 justify-center w-full items-center px-2">
            <h2 className="text-center font-extrabold sm:text-5xl text-4xl">Conocimientos</h2>
            <div className="flex max-w-5xl flex-row flex-wrap gap-5 items-center justify-center">
                {skilsData.map ((sk, index) => (
                    <div key={index}
                    className="flex size-fit hover:scale-105 active:scale-98 transition duration-200 ease-out"
                    >
                        <a
                        className="flex items-center justify-center flex-col gap-5 rounded-3xl border-2 p-4 h-50 w-[150px]"
                        rel="noopener norefered"
                        target="_blank"
                        href={sk.link}
                        >
                            <img src={sk.picture}
                            type="image/svg+xml"
                            className="size-27 rounded pointer-events-none aspect-square"
                            alt={sk.name}
                            load="lazy"
                            />
                            <p className="text-xl font-[500]">{sk.name}</p>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skils
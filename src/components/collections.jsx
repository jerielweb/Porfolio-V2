import COLLECTIONS from '../data/Data.Collections.js';
import Link from './../assets/UI/link.svg'


export default function CollectionsCard() {
    return (
        <>
            <h1 className="col-span-3 text-4xl mt-25">Mis Colecciones favoritas</h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-[1200px] w-full min-h-[80vh] px-5">
                {COLLECTIONS.map((collection, index) => (
                    <article key={index} className="flex flex-col gap-2 justify-center items-center max-w-sm bg-neutral-900 p-3 max-h-80 rounded-lg">
                    <div>
                    <img src={collection.imgsrc}
                    alt={collection.title}
                    className="aspect-video
                    rounded
                    transition object-cover
                    "
                    />
                    </div>

                    <div className="flex flex-col w-full ">
                    <h2 className="text-[17px] font-bold">{collection.title}</h2>
                    <p className="text-[15px] text-center">{collection.description}</p>
                    <span className="text-[12px] text-purple-50/50">{collection.categories}</span>
                    </div>

                    <div className="flex flex-col gap-3 justify-center items-center w-full">
                    <a href={collection.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[17px] text-center bg-purple-700 py-2 w-full px-5 rounded-[10px] transition active:scale-93 flex flex-row justify-center items-center gap-2"
                    >
                        <img src={Link.src} alt="Link icon" type="image/svg+xml" className="inline-block mr-2 size-6 pointer-events-none" />
                        <p>Visitar</p>
                    </a>
                    </div>
                </article>
            ))}
        </div>
    </>
    )
}
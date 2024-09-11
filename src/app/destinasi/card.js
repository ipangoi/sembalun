import cardList from "../destinasi_data"

export default function DestinasiCard() {
    return (
        <div>
            {cardList.map(card => (
                <a href={card.url} className="shadow rounded-xl w-full">
                    <div
                        className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72 rounded-t-lg z-20"
                        style={{ backgroundImage: `url(${card.img})`}}
                    >
                        <span
                            className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"
                        ></span>
                        <span
                            className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base"
                        >Read More</span>
                    </div>
                    <div className="bg-gradient-to-b from-white to-slate-50 py-6 px-5 xl:py-8 rounded-b-xl">
                        <span className="block font-body text-xl font-semibold text-secondary">
                            {card.title}
                        </span>
                        <span className="block pt-2 font-body text-grey-20">
                            {card.text}
                        </span>
                    </div>
                </a>
            ))}
        </div>
    )
}
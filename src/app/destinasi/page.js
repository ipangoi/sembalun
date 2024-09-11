
import cardList from "../../app/component/destinasi_data_full"

export default function Destinasi() {
    return (

        <section class="text-gray-600 body-font">
            <div class="relative block h-[240px] lg:h-[500px]">
                <div class="relative w-full h-full">
                    <div
                        class="absolute top-0 left-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage: 'url("/5.jpg")',
                            filter: 'brightness(50%)',
                            zIndex: -1
                        }}
                    ></div>
                </div>
            </div>
            <section class="relative py-2 bg-gray-100">
                <div class="container mx-auto">
                    <div
                    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-48 lg:-mt-96 p-8"
                    >
                        <section class="text-gray-600 body-font">
                            <div class="container px-5 py-4 mx-auto">
                                
                                <div class="flex flex-col text-center w-full mb-8">
                                    <h1 class="sm:text-3xl md:text-4xl text-2xl font-medium md:font-semibold title-font mb-4 text-secondary">Destinasi Wisata Desa Sembalun</h1>
                                    <p class="lg:w-4/5 mx-auto leading-relaxed text-base">Desa Sembalun terkenal akan berbagai tempat wisata yang wajib dikunjungi. Mulai dari yang terkenal—yakni jalur pendakian Gunung Rinjani, dilengkapi dengan bukit-bukit beserta wisata alam lainnya. Di Sembalun, Wisatawan akan disuguhi pemandangan yang menyejukkan mata.</p>
                                </div>
                                <div class="flex flex-wrap -m-4">
                                    {cardList.map(card => (
                                        <div class="lg:w-1/3 sm:w-1/2 p-4">
                                            <div class="flex relative">
                                                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={card.img}/>
                                                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white bg-opacity-90 md:opacity-0 hover:opacity-100 ease-in-out transition-all duration-300">
                                                    <h2 class="text-sm title-font font-medium text-secondary mb-1">{card.category}</h2>
                                                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{card.title}</h1>
                                                    <p class="leading-relaxed h-24 overflow-auto">{card.text_singkat}</p>
                                                    <span
                                                        className="my-4 inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50  hover:rounded-t-lg ease-in-out"
                                                    ></span>
                                                    <a href={card.url}
                                                        className="right-0 bottom-0 mr-4 block rounded-full border-2 border-secondary px-6 py-2 text-center font-body text-xs font-bold uppercase text-secondary md:text-base hover:text-white hover:bg-secondary ease-in-out duration-200"
                                                    >Read More</a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    
                                </div>
                            </div>
                        </section>
                    </div>

                </div>
            </section>

        </section>


        
    )
}
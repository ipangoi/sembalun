import cardList from "../umkm/umkm_data_full"
import { FaFacebook, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function UMKM() {
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
            <section class="relative py-16 bg-gray-100">
                <div class="container mx-auto px-4">
                    <div
                    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-48 lg:-mt-96 p-8"
                    >
                        <div class="container px-5 py-2 mx-auto">
                            <div class="flex flex-col text-center w-full mb-10">
                            <h1 class="sm:text-4xl text-3xl font-semibold title-font mb-4 text-secondary">Produk Khas Sembalun sebagai Buah Tangan bagi Wisatawan</h1>
                            <p class="lg:w-4/5 mx-auto leading-relaxed text-sm md:text-base">Desa Sembalun sebagai salah satu desa wisata tidak hanya menawarkan keindahan wisata Gunung Rinjani dan Bukit-bukit di sekitarnya. Melalui pemanfaatan komoditas-komoditas lokal dan warisan budaya turun-temurun yang telah ada, UMKM Desa Sembalun menawarkan produk-produk berkualitas hasil produksi lokal. Produk-produk lokal desa ini dapat menjadi suatu buah tangan bagi wisatawan yang berkunjung ke Desa Sembalun.</p>
                            </div>

                            <div class="flex flex-wrap -m-4">
                                {cardList.map(s => (
                                    <div class="p-4 lg:w-1/2">
                                        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                        <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={s.img}/>
                                        <div class="flex-grow sm:pl-8">
                                            <h2 class="title-font font-semibold text-lg text-secondary">{s.title}</h2>
                                            <h3 class="text-gray-500 mb-3">{s.pemilik}</h3>
                                            <p class="mb-2 text-sm">{s.deskripsi}</p>
                                            <a
                                                href={`https://wa.me/`+ s.contact}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                class="inline-flex bg-secondary p-3 rounded-lg hover:bg-primary animation-all ease-in-out duration-300">
                                            <span class="text-white">
                                                Contact Person:
                                            </span> 
                                            <div
                                                className="text-white mx-1"
                                            >
                                                <FaWhatsapp size={24} />
                                            </div>
                                            </a>
                                        </div>
                                        </div>
                                    </div>
                                    
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </section>

    )
}
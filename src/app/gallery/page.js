export default function Gallery() {
    return (
        <div>
            <div class="profile-page">
                <section class="relative block h-[240px] lg:h-[500px]">
                    <div class="relative w-full h-full">
                        <div
                            class="absolute top-0 left-0 w-full h-full bg-center bg-cover"
                            style={{
                                backgroundImage: 'url("/5.jpg")',
                                filter: 'brightness(50%)',
                                zIndex: -1
                            }}
                        ></div>
                        
                        <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10">
                            <h1 class="font-semibold text-white text-3xl lg:text-6xl">
                                Galeri Desa Sembalun
                            </h1>
                        </div>
                    </div>
                </section>
                
                <section class="relative py-16 bg-gray-100">
                    <div class="container mx-auto px-4">
                        <div
                        class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-36 lg:-mt-64 p-8"
                        >
                            <section class="text-gray-600 body-font">
                            <div class="container px-2 py-4 mx-auto flex flex-wrap">
                                <div class="flex flex-wrap md:-m-2 -m-1">
                                <div class="flex flex-wrap md:w-1/2">
                                    <div class="md:p-2 p-1 w-1/2">
                                    <img alt="gallery" class="w-full object-cover h-full object-center block" src="/sembalun-1.jpg"/>
                                    </div>
                                    <div class="md:p-2 p-1 w-1/2">
                                    <img alt="gallery" class="w-full object-cover h-full object-center block" src="/sembalun-2.jpg"/>
                                    </div>
                                    <div class="md:p-2 p-1 w-full">
                                    <img alt="gallery" class="w-full h-full object-cover object-center block" src="/sembalun-3.jpg"/>
                                    </div>
                                </div>
                                <div class="flex flex-wrap md:w-1/2">
                                    <div class="md:p-2 p-1 w-full">
                                    <img alt="gallery" class="w-full h-full object-cover object-center block" src="/pergasingan.jpg"/>
                                    </div>
                                    <div class="md:p-2 p-1 w-1/2">
                                    <img alt="gallery" class="w-full object-cover h-full object-center block" src="/rinjani.jpg"/>
                                    </div>
                                    <div class="md:p-2 p-1 w-1/2">
                                    <img alt="gallery" class="w-full object-cover h-full object-center block" src="/5.jpg"/>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </section>
                        </div>
                        
                    </div>
                </section>
            </div>

        </div>
    )
}
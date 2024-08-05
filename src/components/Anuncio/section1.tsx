const Section1 = () => {
    return (
        <section className=" bg-gray-50 px-2 py-4 sm:px-8 sm:py-8">
            {/* Fondos desenfocados */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute left-[-10rem] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl md:left-[-15rem] lg:left-[-20rem]">
                    <div className="aspect-[577/310] w-[30rem] md:w-[40rem] lg:w-[50rem] opacity-30 bg-gray-200"></div>
                </div>
                <div className="absolute right-[-10rem] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl md:right-[-15rem] lg:right-[-20rem]">
                    <div className="aspect-[577/310] w-[30rem] md:w-[40rem] lg:w-[50rem] opacity-30 bg-gray-200"></div>
                </div>
            </div>
            {/* Contenido principal */}
            <div className=" flex flex-col items-center gap-y-4 text-center">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <p className="text-sm leading-6 text-gray-900 flex-1">
                        <strong className="font-semibold">Próximo Webinar</strong>
                        <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                            <circle cx="1" cy="1" r="1" />
                        </svg>
                        28 de Agosto desde las 8 – 9 Desarrollo
                        <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                            <circle cx="1" cy="1" r="1" />
                        </svg>
                        <strong className="font-semibold">Tema:</strong> Desarrollo Profesional y Networking.
                    </p>
                    <a 
                        href="#" 
                        className="inline-block rounded bg-purple-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                    >
                        Regístrate Ahora <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Section1;

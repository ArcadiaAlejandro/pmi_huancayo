const Section1 = () => {
    return (
        <>
        <section className="relative bg-gray-50 py-10 sm:py-12 px-4 sm:px-6 lg:px-8">
                {/* Contenedor de proyectos */}
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Proyecto 1 */}
                    <div className="flex flex-col items-center">
                        <picture>
                            {/*<source srcSet="https://www.estrategiaods.org.br/wp-content/uploads/2021/07/odssss-1-scaled.jpg" type="image/avif" />*/}
                            <img
                                src="https://www.estrategiaods.org.br/wp-content/uploads/2021/07/odssss-1-scaled.jpg"
                                alt="Feature Image"
                                loading="lazy"
                                width="730"
                                height="584"
                                className="object-cover rounded-lg shadow-lg"
                            />
                        </picture>
                    </div>

                    {/* Información del proyecto */}
                    <div className="flex flex-col items-center text-center">
                        <div className="  text-[#06BADBc7]  text-xl font-light   px-3 py-1 mb-4">
                            ¿Qué son las ODS?
                        </div>
                        <h3 className="text-2xl font-medium mb-4">
                            ODS (Objetivos de Desarrollo Sostenible)
                        </h3>
                        <p className="text-base text-gray-600 mb-6">
                            Los ODS son un conjunto de 17 metas globales adoptadas por la ONU en 2015 para lograr un desarrollo sostenible y equitativo para el 2030.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <a
                                href="https://www.undp.org/es/sustainable-development-goals"
                                className="inline-flex items-center rounded bg-[#4D17A0] text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-indigo-800 transition duration-150 ease-in-out"
                            >
                                Conoce mas de las ods 
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-2">
                                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd"></path>
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-sm text-gray-600 hover:text-indigo-600 transition duration-150 ease-in-out"
                            >
                                Ver proyectos relacionados
                            </a>
                        </div>
                    </div>
                </div>
        </section>

        </>
    );
};

export default Section1;

import Network from '../../assets/img/gift/Network.gif';
const Section2 = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-col px-5 py-24 md:flex-row items-center">
                    <div className="flex flex-col items-center text-center md:items-start md:text-left md:w-1/2 lg:pr-24 md:pr-16 mb-16 md:mb-0">
                        <p className="text-gray-400">BIENVENIDO A</p>
                        <h1 className="title-font text-3xl sm:text-4xl font-bold text-[#4D17A0] mb-4">
                            PMI LIMA PERÚ CHAPTER
                            <br className="hidden lg:inline-block" />
                            Edición Huancayo
                        </h1>
                        <p className="mb-8 leading-relaxed text-base md:text-lg">
                            La Comunidad Estudiantil de Huancayo es un capitulo perteneciente al PMI (Project Managment Institute) conformada por estudiantes voluntarios de la <strong className='text-[#FF610F]'>Universidad Continental </strong>, la cual busca fomentar el desarrollo activo de proyectos en la región de Huancayo, a través de diversas actividades, tales como:
                            <br />
                            <br />
                            ✨ Webinars
                            <br />
                            ✨ Gestión de Proyectos
                            <br />
                            ✨ Focus Group, entre otros.
                            <br />
                            <br />
                            Si estás interesado en participar de nuestras actividades, no dudes en estar atento a nuestras redes sociales, donde publicaremos información sobre nuestras actividades y próximas convocatorias.
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
                            <button className="inline-flex items-center text-white bg-[#FF610F] border-0 py-2 px-6 focus:outline-none hover:bg-[#ff630fc7] rounded text-base md:text-lg">
                                Conoce más de nuestras actividades
                                <svg className='mt-1.5 ml-2' width="20" height="15" viewBox="0 0 60 110" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M108.5 0V110L54.25 55L54 110L0 55H54.25L0 0H108.5Z" fill="white"/>
                                </svg>
                            </button>
                            <button className="inline-flex items-center text-white bg-[#4D17A0] border-0 py-2 px-6 focus:outline-none hover:bg-[#4D17A0c7] rounded text-base md:text-lg">
                                Beneficios
                                <svg className='mt-1.5 ml-2' width="20" height="15" viewBox="0 0 60 110" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M108.5 0V110L54.25 55L54 110L0 55H54.25L0 0H108.5Z" fill="white"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full md:w-5/6 flex justify-center">
                        <img className="object-cover object-center rounded" alt="hero" src={Network} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Section2;

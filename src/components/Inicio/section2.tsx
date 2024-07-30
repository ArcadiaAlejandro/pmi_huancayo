import Network from '../../assets/img/gift/Network.gif';
const Section2 = () => {

    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div
                        className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <p className='text-gray-400'>BIENVENIDO A</p>
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-[#4D17A0]">PMI LIMA PERÚ CHAPTER
                            <br className="hidden lg:inline-block" />
                            Edición Huancayo
                        </h1>
                        <p className="mb-8 leading-relaxed">
                        La Comunidad Estudiantil de Huancayo es un capitulo perteneciente al PMI (Project Managment Institute) conformada por estudiantes voluntarios de la <strong className='text-[#FF610F]'>Universidad Continental </strong>, la cual busca fomentar el desarrollo activo de proyectos en la región de Huancayo, a través de diversas actividades, tales como:
                        <br />
                        <br className="hidden lg:inline-block" />
                            ✨ Webinars
                        <br className="hidden lg:inline-block" />
                            ✨ Gestion de Proyectos
                        <br className="hidden lg:inline-block" />
                            ✨ Focus Group, entre otros.
                        <br className="hidden lg:inline-block" />
                        <br />
                        Si estas interesado en participar de nuestras actividades, no dudes en estar atento a nuestras redes sociales, donde publicaremos información sobre nuestras actividades y proximas convoctorias.
                        </p>
                        <div className="flex justify-center gap-6">
                            <button className="inline-flex text-white bg-[#FF610F] border-0 py-2 px-6 focus:outline-none hover:bg-[#ff630fc7] rounded text-lg">Conoce mas de nuestas actividades
                                <svg className='mt-1.5 ml-1' width="20" height="15" viewBox="0 0 60 110" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M108.5 0V110L54.25 55L54 110L0 55H54.25L0 0H108.5Z" fill="white"/>
                                </svg>
                            </button>
                            <button className="inline-flex text-white bg-[#4D17A0] border-0 py-2 px-6 focus:outline-none hover:bg-[#4D17A0c7] rounded text-lg">Beneficios
                            <svg className='mt-1.5 ml-1' width="20" height="15" viewBox="0 0 60 110" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M108.5 0V110L54.25 55L54 110L0 55H54.25L0 0H108.5Z" fill="white"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src={Network} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Section2;
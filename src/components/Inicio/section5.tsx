import Impacto from '../../assets/img/gift/Impacto.gif';

const Section5 = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row bg-slate-50">
                    {/* Imagen a la izquierda */}
                <div className="md:w-1/2 flex justify-center items-center p-4 mt-8">
                    <img src={Impacto} alt="Network" className="max-w-full h-96 " />
                </div>
                {/* Contenedor de contenido a la derecha */}
                <div className="flex flex-col items-center md:items-start gap-4 pt-16 px-2 md:w-1/2">
                    <p className="flex justify-center w-full gap-2 pt-4 font-extrabold text-2xl md:text-3xl text-[#4d17a0]">
                        <span>Nuestro Impacto</span>
                        <svg className="w-8 h-8 text-orange-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z">
                            </path>
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z">
                            </path>
                        </svg>
                    </p>

                    {/* Grid de recuadros */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8 pt-4 mx-auto">
                        <div title="All contributed components"
                            className="flex flex-col justify-center items-center gap-2 border-2 border-dashed border-[#ff630fae] p-4 rounded-md h-32 text-gray-500">
                            <div className="flex gap-2 items-center">
                                <span className="font-bold text-3xl md:text-4xl">1</span>
                                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor">
                                    {/* Aquí va el path */}
                                </svg>
                            </div>
                            <span className="font-semibold text-sm text-center">Proyecto Desarrollado</span>
                        </div>

                        <div title="Users got help"
                            className="flex flex-col justify-center items-center gap-2 border-2 border-dashed border-[#ff630fae] p-4 rounded-md h-32 text-gray-500">
                            <div className="flex gap-2 items-center">
                                <span className="font-bold text-3xl md:text-4xl">2</span>
                                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor">
                                    {/* Aquí va el path */}
                                </svg>
                            </div>
                            <span className="font-semibold text-sm text-center">Alianzas Generadas</span>
                        </div>

                        <div title="Total favorites received on components"
                            className="flex flex-col justify-center items-center gap-2 border-2 border-dashed border-[#ff630fae] p-4 rounded-md h-32 text-gray-500">
                            <div className="flex gap-2 items-center">
                                <span className="font-bold text-3xl md:text-4xl">15</span>
                                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor">
                                    {/* Aquí va el path */}
                                </svg>
                            </div>
                            <span className="font-semibold text-sm text-center">Voluntarios</span>
                        </div>

                        <div title="Component views"
                            className="flex flex-col justify-center items-center gap-2 border-2 border-dashed border-[#ff630fae] p-4 rounded-md h-32 text-gray-500">
                            <div className="flex gap-2 items-center">
                                <span className="font-bold text-3xl md:text-4xl">2.4k</span>
                                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor">
                                    {/* Aquí va el path */}
                                </svg>
                            </div>
                            <span className="font-semibold text-sm text-center">Seguidores</span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Section5;

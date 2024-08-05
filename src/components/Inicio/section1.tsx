const Section1 = () => {
    return (
        <>
        <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
            <div className="absolute inset-0 bg-purple-900 bg-opacity-50 flex flex-col justify-center items-center text-white p-6 md:p-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">
                    PMI Lima Perú Chapter: <strong className="text-[#f1cab5]">Edición Huancayo</strong>
                </h1>
                <p className="text-lg md:text-xl mb-4 text-center">El Capítulo más grande de habla hispana</p>
                <button className="px-4 py-2 md:px-6 md:py-2 bg-[#4D17A0] text-white font-semibold rounded hover:bg-[#8756d1e2]">
                    CONOCER PMI
                </button>
            </div>
            <div className="absolute bottom-0 left-0 grid grid-cols-1 gap-1 w-full sm:grid-cols-2">
                <div className="bg-[#06BADB] text-white p-4 md:p-8 flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold mb-2">¡Próximo Webinar!</h2>
                        <p className="text-sm md:text-base mt-3 text-[#ede7e7]">28 de Agosto</p>
                        <p className="text-base md:text-lg">Desarrollo Profesional y Networking</p>
                        <p className="text-base md:text-lg">Ponente: Jennifer Guerra</p>
                    </div>
                    <div className="flex justify-end">
                        <a href="/" title="link" className="text-white text-lg md:text-xl">
                            <img src="https://cdn.jsdelivr.net/npm/bootstrap-icons/icons/arrow-right-circle.svg" alt="icon" className="w-5 h-5 md:w-6 md:h-6" />
                        </a>
                    </div>
                </div>
                <div className="bg-[#06BADB] text-white p-4 md:p-8 flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold mb-2">WEBINARS CADA SEMANA</h2>
                        <p className="text-base md:text-lg">No dejes de aprender</p>
                    </div>
                    <div className="flex justify-end">
                        <a href="#" title="link" className="text-white text-lg md:text-xl">
                            <img src="https://cdn.jsdelivr.net/npm/bootstrap-icons/icons/arrow-right-circle.svg" alt="icon" className="w-5 h-5 md:w-6 md:h-6" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Section1;

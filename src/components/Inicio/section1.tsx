const Section1 = () => {

    return (
        <>
              <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
            <div className="absolute inset-0 bg-purple-900 bg-opacity-50 flex flex-col justify-center items-center text-white p-8">
                <h1 className="text-4xl font-bold mb-2">
                    PMI Lima Perú Chapter: <strong className="text-[#f1cab5]">Edición Huancayo</strong >
                    </h1>
                <p className="text-xl mb-4">El Capítulo más grande de habla hispana</p>
                <button className="px-6 py-2 bg-[#4D17A0] text-white font-semibold rounded hover:bg-[#8756d1e2] ">
                    CONOCER PMI
                </button>
            </div>

            <div className="absolute bottom-0 left-0 grid grid-cols-1 md:grid-cols-2 gap-1">
                <div className="bg-[#06BADB] text-white p-8 flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl font-bold mb-2">
                            ¡Proximo Webinar!
                        </h2>
                        <p className="text-xm mt-3 text-[#ede7e7]">28 de Agosto</p>
                        <p className="text-lg">Desarrollo Profesional y Networking</p>
                        <p className="text-lg">Ponente: Jennifer Guerra</p>
                    </div>

                    <div className="flex justify-end">
                            <a href="/" title='link' className="text-white text-xl">
                                <svg width="30" height="20" viewBox="0 0 109 110" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M108.5 0V110L54.25 55L54 110L0 55H54.25L0 0H108.5Z" fill="white"/>
                                </svg>
                            </a>
                    </div>

                </div>
                <div className="bg-[#06BADB] text-white p-8 flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl font-bold mb-2">WEBINARS CADA SEMANA</h2>
                        <p className="text-lg">No dejes de aprender</p>
                    </div>
                    <div className="flex justify-end">
                            <a href="#"  title='link' className="text-white text-xl">
                                <svg width="30" height="20" viewBox="0 0 109 110" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M108.5 0V110L54.25 55L54 110L0 55H54.25L0 0H108.5Z" fill="white"/>
                                </svg>
                            </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Section1;
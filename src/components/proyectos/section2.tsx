import React, { useState } from 'react';

// Define los tipos para los beneficios
interface Benefit {
    title: string;
    description: string;
}

const Section2: React.FC = () => {
    // Especifica el tipo de selectedGroup
    const [selectedGroup, setSelectedGroup] = useState<'empresarial' | 'tecnologico' | 'social' | 'investigacion' |null>(null);

    // Define los beneficios con el tipo Benefit
    const proyectos: Record<'empresarial' | 'tecnologico' | 'social' | 'investigacion' , Benefit[]> = {
        empresarial: [
            {
                title: "Desarrollo Profesional Temprano",
                description: "Oportunidad para hacer Networking y construir tu red de contactos",
            },
        ],
        tecnologico: [
            // Beneficios para profesionales
            {
                title: "Certificaciones y Cursos de Especialización",
                description: "Participaras de nuestros cursos y talleres de especialización de manera graruita.",
            },
        ],
        social: [
            // Beneficios para organizaciones
            {
                title: "Colaboración y Proyectos Conjuntos",
                description: "Participa en proyectos colaborativos con estudiantes y profesionales, creando oportunidades de impacto y desarrollo mutuo.",
            },
        ],
        investigacion: [
            // Beneficios para organizaciones
            {
                title: "Colaboración y Proyectos Conjuntos",
                description: "Participa en proyectos colaborativos con estudiantes y profesionales, creando oportunidades de impacto y desarrollo mutuo.",
            },
        ],
    };

    // Especifica el tipo de group
    const handleButtonClick = (group: 'empresarial' | 'tecnologico' | 'social' | 'investigacion') => {
        setSelectedGroup(group);
    };

    return (
        <>
            <section id="features" className="container mx-auto px-4 space-y-6 py-8 md:py-12 lg:py-20">
                    <div className="flex gap-6 justify-center">
                        <button onClick={() => handleButtonClick('empresarial')} title=' 'className="inline-flex text-white bg-[#4D17A0] border-0 py-2 px-6 focus:outline-none hover:bg-[#4D17A0c7] rounded text-lg">
                            Proyectos Empresariales
                        </button>
                        <button onClick={() => handleButtonClick('tecnologico')} className="inline-flex text-white bg-[#FF610F] border-0 py-2 px-6 focus:outline-none hover:bg-[#FF610Fc7] rounded text-lg">
                            Proyectos Tecnológicos
                        </button>
                        <button onClick={() => handleButtonClick('social')} className="inline-flex text-white bg-[#06BADB] border-0 py-2 px-6 focus:outline-none hover:bg-[#06BADBc7] rounded text-lg">
                            Proyectos Sociales
                        </button>
                        <button onClick={() => handleButtonClick('investigacion')} className="inline-flex text-white bg-[#000000] border-0 py-2 px-6 focus:outline-none hover:bg-[#000000c7] rounded text-lg">
                            Proyectos de Investigación
                        </button>
                    </div>

                    <br className="hidden lg:inline-block" />

                    {selectedGroup && (
                        <h1 className="font-bold text-2xl mt-8 text-[#363636]">Beneficios de ser miembro de <span className='text-[#ff630f]'>{selectedGroup.charAt(0).toUpperCase() + selectedGroup.slice(1)}</span></h1>
                    )}

                <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
                    {selectedGroup && proyectos[selectedGroup].map((benefit, index) => (
                        <div key={index} className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-500 p-2">
                            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                                <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                                    {/* Agrega el SVG aquí si es necesario */}
                                </svg>
                                <div className="space-y-2">
                                    <h3 className="font-bold text-[#4e17a0a5]">{benefit.title}</h3>
                                    <p className="text-sm text-muted-foreground text-gray-400">{benefit.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Section2;

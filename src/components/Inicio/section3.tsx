import React, { useState } from 'react';

// Define los tipos para los beneficios
interface Benefit {
    title: string;
    description: string;
}

const Section3: React.FC = () => {
    // Especifica el tipo de selectedGroup
    const [selectedGroup, setSelectedGroup] = useState<'estudiantes' | 'profesionales' | 'organizaciones' | null>(null);

    // Define los beneficios con el tipo Benefit
    const benefits: Record<'estudiantes' | 'profesionales' | 'organizaciones', Benefit[]> = {
        estudiantes: [
            {
                title: "Desarrollo Profesional Temprano",
                description: "Oportunidad para hacer Networking y construir tu red de contactos",
            },
            {
                title: "Acceso a Recursos Exclusivos",
                description: "Podrás participar de nuestros eventos y programas de capacitación.",
            },
            {
                title: "Experiencia Práctica",
                description: "Participarás de proyectos reales en colaboración con organizaciones o nuestra comunidad.",
            },
            {
                title: "Desarrollo de Habilidades Blandas",
                description: "Trabajarás de manera colaborativa en proyectos grupales.",
            },
            {
                title: "Certificaciones",
                description: "Al acabar nuestro voluntariado recibirás una certificación de finalización.",
            },
            {
                title: "Reconocimientos",
                description: "Para nuestros miembros más proactivos y activos, se les dará un premio.",
            },
        ],
        profesionales: [
            // Beneficios para profesionales
            {
                title: "Certificaciones y Cursos de Especialización",
                description: "Participaras de nuestros cursos y talleres de especialización de manera graruita.",
            },
            {
                title: "Colaboración en Proyectos",
                description: " Forma parte de proyectos colaborativos y trabaja en iniciativas innovadoras junto a otros profesionales y estudiantes de tu campo.",
            },
            {
                title: "Red de Networking",
                description: "Amplía tu red profesional, estableciendo conexiones valiosas con otros expertos y líderes de la industria.",
            },
            {
                title: "Oportunidades de Mentoría",
                description: "Ofrece y recibe mentoría para apoyar el crecimiento profesional y personal dentro de la comunidad.",
            },
            {
                title: "Certificaciones",
                description: "Al acabar nuestro voluntariado recibirás una certificación de finalización.",
            },
            {
                title: "Acceso a Recursos y Herramientas",
                description: "Benefíciate de herramientas y recursos exclusivos que faciliten tu desarrollo profesional y gestión de proyectos.",
            },
        ],
        organizaciones: [
            // Beneficios para organizaciones
            {
                title: "Colaboración y Proyectos Conjuntos",
                description: "Participa en proyectos colaborativos con estudiantes y profesionales, creando oportunidades de impacto y desarrollo mutuo.",
            },
            {
                title: "Visibilidad y Reconocimiento",
                description: "Aumenta la visibilidad de tu organización y fortalece su imagen a través de la participación en eventos y proyectos comunitarios.",
            },
            {
                title: "Acceso a Talento Joven",
                description: "Conecta con estudiantes talentosos y potenciales futuros empleados para integrar nuevas habilidades y perspectivas a tu equipo.",
            },
            {
                title: "Desarrollo de Alianzas Estratégicas",
                description: "Establece alianzas y colaboraciones estratégicas con otras organizaciones y actores clave en tu sector.",
            },
            {
                title: "Oportunidades de Capacitación",
                description: "Participa en programas de capacitación y formación para tu equipo, mejorando las competencias y habilidades dentro de tu organización.",
            },
            {
                title: "Impacto Social y Comunitario",
                description: "Contribuye a iniciativas de responsabilidad social y proyectos comunitarios que generen un impacto positivo en la sociedad.",
            },
        ],
    };

    // Especifica el tipo de group
    const handleButtonClick = (group: 'estudiantes' | 'profesionales' | 'organizaciones') => {
        setSelectedGroup(group);
    };

    return (
        <>
            <section id="features" className="container mx-auto px-4 space-y-6 bg-slate-50 py-8 md:py-12 lg:py-20">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <span className="text-lg text-gray-400">Beneficios de... </span>
                    <h2 className="font-bold text-2xl leading-[1.1] sm:text-4xl md:text-6xl text-[#363636]">Nuestra comunidad</h2>

                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-base sm:leading-7 text-gray-500">
                        Nuestra comunidad está diseñada para beneficiar tanto a estudiantes como a profesionales y organizaciones externas. Al unirse, podrán disfrutar de las siguientes ventajas:
                    </p>

                    <div className="flex gap-6 justify-center">
                        <button onClick={() => handleButtonClick('estudiantes')} className="inline-flex text-white bg-[#FF610F] border-0 py-2 px-6 focus:outline-none hover:bg-[#ff630fc7] rounded text-lg">
                            Estudiantes
                        </button>
                        <button onClick={() => handleButtonClick('profesionales')} className="inline-flex text-white bg-[#4D17A0] border-0 py-2 px-6 focus:outline-none hover:bg-[#4D17A0c7] rounded text-lg">
                            Profesionales
                        </button>
                        <button onClick={() => handleButtonClick('organizaciones')} className="inline-flex text-white bg-[#06BADB] border-0 py-2 px-6 focus:outline-none hover:bg-[#06BADBc7] rounded text-lg">
                            Organizaciones
                        </button>
                    </div>

                    <br className="hidden lg:inline-block" />

                    {selectedGroup && (
                        <h1 className="font-bold text-2xl mt-8 text-[#363636]">Beneficios de ser miembro de <span className='text-[#ff630f]'>{selectedGroup.charAt(0).toUpperCase() + selectedGroup.slice(1)}</span></h1>
                    )}
                </div>

                <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
                    {selectedGroup && benefits[selectedGroup].map((benefit, index) => (
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

export default Section3;

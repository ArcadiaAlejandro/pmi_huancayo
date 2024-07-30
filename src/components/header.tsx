import React, { useState, useRef, useEffect } from 'react';
import Equipo from '../assets/img/gift/Equipo.gif'
import Logo from '../assets/SVG/PMI - ISOTIPO.svg'
const Header: React.FC = () => {
    const [navigationMenuOpen, setNavigationMenuOpen] = useState(false);
    const [navigationMenu, setNavigationMenu] = useState('');
    const [navigationMenuCloseTimeout, setNavigationMenuCloseTimeout] = useState<NodeJS.Timeout | null>(null);
    const navigationDropdownRef = useRef<HTMLDivElement | null>(null);

    const navigationMenuCloseDelay = 200;

    const navigationMenuLeave = () => {
        if (navigationMenuCloseTimeout) {
        clearTimeout(navigationMenuCloseTimeout);
        }
        setNavigationMenuCloseTimeout(setTimeout(() => {
        navigationMenuClose();
        }, navigationMenuCloseDelay));
    };

    const navigationMenuReposition = (navElement: HTMLButtonElement) => {
        if (navigationDropdownRef.current) {
        navigationMenuClearCloseTimeout();
        const dropdown = navigationDropdownRef.current;
        dropdown.style.left = `${navElement.offsetLeft}px`;
        dropdown.style.marginLeft = `${navElement.offsetWidth / 2}px`;
        }
    };

    const navigationMenuClearCloseTimeout = () => {
        if (navigationMenuCloseTimeout) {
        clearTimeout(navigationMenuCloseTimeout);
        }
    };

    const navigationMenuClose = () => {
        setNavigationMenuOpen(false);
        setNavigationMenu('');
    };

    useEffect(() => {
        return () => {
        if (navigationMenuCloseTimeout) {
            clearTimeout(navigationMenuCloseTimeout);
        }
        };
    }, [navigationMenuCloseTimeout]);

    return (
        <nav className=" fixed w-full z-10 bg-white shadow-md">
        <div className="flex items-center justify-between p-4">
                {/* Logo */}
                <a href="#home" className="flex items-center">
                    <img src={Logo} alt="Logo" className="ml-8 h-15" />
                </a>
            
            <ul className="flex items-center space-x-12 list-none text-neutral-700 group ">
            <li>
                <a
                href="#_"
                className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium transition-colors rounded-md bg-background hover:bg-[#4e17a00f] group w-max"
                >
                Inicio
                </a>
            </li>
            <li>
                <button
                className={`inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                    navigationMenu === 'getting-started' ? 'bg-[#4e17a00f]' : 'hover:bg-[#4e17a00f]'
                }`}
                onMouseOver={(e) => {
                    setNavigationMenuOpen(true);
                    navigationMenuReposition(e.currentTarget);
                    setNavigationMenu('getting-started');
                }}
                onMouseLeave={navigationMenuLeave}
                >
                <span>Proyectos</span>
                    <svg
                        className={`relative top-[1px] ml-1 h-3 w-3 ease-out duration-300 ${navigationMenuOpen && navigationMenu === 'getting-started' ? '-rotate-180' : ''}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </button>
            </li>
            <li>
                <button
                className={`inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                    navigationMenu === 'learn-more' ? 'bg-[#4e17a00f]' : 'hover:bg-[#4e17a00f]'
                }`}
                onMouseOver={(e) => {
                    setNavigationMenuOpen(true);
                    navigationMenuReposition(e.currentTarget);
                    setNavigationMenu('learn-more');
                }}
                onMouseLeave={navigationMenuLeave}
                >
                <span>Noticas</span>
                <svg
                    className={`relative top-[1px] ml-1 h-3 w-3 ease-out duration-300 ${navigationMenuOpen && navigationMenu === 'learn-more' ? '-rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                >
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
                </button>
            </li>
            <li>
                <a
                href="#_"
                className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium transition-colors rounded-md bg-background hover:bg-[#4e17a00f]  group w-max"
                >
                Sobre Nosotros
                </a>
            </li>
            </ul>

             {/* Botones al final */}
             <div className="flex space-x-2">
                    <button className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium transition-colors rounded-md bg-[#06bbdb] text-[#fffefe] hover:bg-[#06bbdbab]">
                        Inicio
                    </button>
                    <button className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium transition-colors rounded-md bg-[#4D17A0] text-white hover:bg-[#4e17a0af] ">
                        Unirse
                    </button>
                </div>

        </div>
        {/*Seccion desplegable de proyectos*/}
        <div
            ref={navigationDropdownRef}
            className={`absolute top-0 pt-3 duration-200 ease-out -translate-x-1/2 translate-y-11 ${navigationMenuOpen ? 'block' : 'hidden'}`}
            onMouseOver={navigationMenuClearCloseTimeout}
            onMouseLeave={navigationMenuLeave}>

                <div className="flex justify-center w-auto h-auto overflow-hidden bg-white border rounded-md shadow-sm border-neutral-200/70">
                <div className={`flex items-stretch justify-center w-full p-6 gap-x-3 ${navigationMenu === 'getting-started' ? 'block' : 'hidden'}`}>
                    {/*Seccion de imagen*/}
                    <div className="flex-shrink-0 w-48 rounded pt-28 pb-7 bg-gradient-to-r from-red-500 to-orange-500">
                    <div className="relative px-7 space-y-1.5 text-white">
                        {/*Aqui va la imagen*/}
                        <img 
                        src={Equipo} 
                        alt='imagen de equipo'
                        />
                        {/*Texto que va debajo de la imagen*/}
                        <br className="hidden lg:inline-block" />
                        <span className="block font-bold">Portafolio de Proyectos</span>
                        <span className="block text-xs opacity-60">Mira como nuestra comunidad ha desarrollado diversos proyectos e iniciativas.</span>
                    </div>
                    </div>

                    {/*Opciones de navegacion de Proyectos*/}
                    <div className="w-72">
                        <a href="#_" onClick={navigationMenuClose} className="block px-3.5 py-3 text-sm rounded hover:bg-neutral-100">
                            <span className="block mb-1 font-medium text-[#4D17A0]">Proyectos Empresariales</span>
                            <span className="block font-light leading-5 opacity-50">Un proyecto empresarial es una iniciativa temporal dentro de una empresa destinada a alcanzar objetivos específicos que se alinean con las metas y estrategias de negocio.</span>
                        </a>
                        <a href="#_" onClick={navigationMenuClose} className="block px-3.5 py-3 text-sm rounded hover:bg-neutral-100">
                            <span className="block mb-1 font-medium text-[#FF610F]">Proyectos Tecnológicos</span>
                            <span className="block leading-5 opacity-50">Un proyecto social tiene como objetivo abordar problemas sociales y mejorar la calidad de vida en comunidades.</span>
                        </a>
                        <a href="#_" onClick={navigationMenuClose} className="block px-3.5 py-3 text-sm rounded hover:bg-neutral-100">
                            <span className="block mb-1 font-medium text-[#06BADB]">Proyectos Sociales</span>
                            <span className="block leading-5 opacity-50">Un proyecto social es una iniciativa diseñada para abordar problemas sociales, orientandose en generar un impacto positivo en la sociedad</span>
                        </a>
                        <a href="#_" onClick={navigationMenuClose} className="block px-3.5 py-3 text-sm rounded hover:bg-neutral-100">
                            <span className="block mb-1 font-medium text-black">Proyectos de Investigación</span>
                            <span className="block leading-5 opacity-50">Un proyecto de investigación es una iniciativa diseñado a recabar información y formular hipótesis sobre un determinado fenómeno social o científico.</span>
                        </a>
                    </div>

                {/*Seccion desplegable de Noticias*/}

                    </div>
                        <div className={`flex items-stretch justify-center w-full p-6 ${navigationMenu === 'learn-more' ? 'block' : 'hidden'}`}>
                        <div className="w-72">
                            <a href="#_" onClick={navigationMenuClose} className="block px-3.5 py-3 text-sm rounded hover:bg-neutral-100">
                                <span className="block mb-1 font-medium text-black">Reuniones y Eventos</span>
                                <span className="block font-light leading-5 opacity-50">Enterate sobre nuestras próximas reuniones, talleres y eventos.</span>
                                </a>
                                <a href="#_" onClick={navigationMenuClose} className="block px-3.5 py-3 text-sm rounded hover:bg-neutral-100">
                                <span className="block mb-1 font-medium text-black"> Logros y Éxitos</span>
                                <span className="block font-light leading-5 opacity-50">Conoce de nuestros logros obtenidos por nuestros miembros y/o proyectos</span>
                                </a>
                                <a href="#_" onClick={navigationMenuClose} className="block px-3.5 py-3 text-sm rounded hover:bg-neutral-100">
                                <span className="block mb-1 font-medium text-black">Cambios en el Equipo</span>
                                <span className="block leading-5 opacity-50">Informate de como nuestro equipo ha evolucionado a lo largo del tiempo.</span>
                            </a>
                    </div>
                <div className="w-72">
                    <a href="#_" onClick={navigationMenuClose} className="block px-3.5 py-3 text-sm rounded hover:bg-neutral-100">
                    <span className="block mb-1 font-medium text-black">Aliados</span>
                    <span className="block font-light leading-5 opacity-50">Conoce de todas nuestras colaboraciones con otras organizaciones.</span>
                    </a>
                    <a href="#_" onClick={navigationMenuClose} className="block px-3.5 py-3 text-sm rounded hover:bg-neutral-100">
                    <span className="block mb-1 font-medium text-black">Información General y Comunitaria</span>
                    <span className="block leading-5 opacity-50">Informate de las ultimas noticias y actualizaciones que trae nustra comunidad.</span>
                    </a>
                    <a href="#_" onClick={navigationMenuClose} className="block px-3.5 py-3 text-sm rounded hover:bg-neutral-100">
                    <span className="block mb-1 font-medium text-black">Preguntas y Respuestas</span>
                    <span className="block leading-5 opacity-50">En esta sección encontraras las respuestas a las preguntas más frecuentes sobre nuestra comunidad y sus actividades.</span>
                    </a>
                </div>
            </div>
        </div>
        </div>
        </nav>
    );
};

export default Header;
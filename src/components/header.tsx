import React, { useState, useRef, useEffect } from 'react';
import { lazy } from 'react';

import { NavLink } from 'react-router-dom';

const Section = lazy(() => import('./Anuncio/section1'));

import Equipo from '../assets/img/gift/Equipo.gif';
import Logo from '../assets/SVG/PMI - ISOTIPO.svg';

const Header: React.FC = () => {
    const [navigationMenuOpen, setNavigationMenuOpen] = useState(false);
    const [navigationMenu, setNavigationMenu] = useState('');
    const [navigationMenuCloseTimeout, setNavigationMenuCloseTimeout] = useState<NodeJS.Timeout | null>(null);
    const navigationDropdownRef = useRef<HTMLDivElement | null>(null);

    const navigationMenuCloseDelay = 200;

    const navigationMenuLeave = () => {
        navigationMenuClearCloseTimeout();
        setNavigationMenuCloseTimeout(setTimeout(() => {
            navigationMenuClose();
        }, navigationMenuCloseDelay));
    };

    const navigationMenuReposition = (navElement: HTMLButtonElement) => {
        if (navigationDropdownRef.current && navElement) {
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
        <nav className="fixed w-full z-10 bg-white shadow-md">
            <div className="flex items-center justify-between p-4">
                {/* Logo */}
                <NavLink
                    to="/"
                    style={({ isActive }) => ({
                    fontWeight: isActive ? 'bold' : 'normal',
                    })}
                >
                <a className="flex items-center">
                    <img src={Logo} alt="Logo" className="ml-8 h-15" />
                </a>
                </NavLink>
                {/* Toggle Button for Mobile */}
                <button
                    className="block lg:hidden p-2 text-gray-600"
                    onClick={() => setNavigationMenuOpen(!navigationMenuOpen)}
                    title='button'
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex items-center space-x-12 list-none text-neutral-700 group">
                    <li>
                        <NavLink
                            to="/"
                            style={({ isActive }) => ({
                            fontWeight: isActive ? 'bold' : 'normal',
                            })}
                        >
                            <a
                                href="#_"
                                className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium transition-colors rounded-md bg-background hover:bg-[#4e17a00f] group w-max"
                            >
                                Inicio
                            </a>
                            </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Proyectos"
                            style={({ isActive }) => ({
                            fontWeight: isActive ? 'bold' : 'normal',
                            })}
                        >
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
                                className={`relative top-[1px] ml-1 h-3 w-3 ease-out duration-300 ${
                                    navigationMenuOpen && navigationMenu === 'getting-started' ? '-rotate-180' : ''
                                }`}
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
                        </NavLink>
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
                            <span>Noticias</span>
                            <svg
                                className={`relative top-[1px] ml-1 h-3 w-3 ease-out duration-300 ${
                                    navigationMenuOpen && navigationMenu === 'learn-more' ? '-rotate-180' : ''
                                }`}
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
                        <NavLink
                            to="/SobreNosotros"
                            style={({ isActive }) => ({
                            fontWeight: isActive ? 'bold' : 'normal',
                            })}
                        >
                        <button
                            className={`inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                                navigationMenu === 'sobre-nosotros' ? 'bg-[#4e17a00f]' : 'hover:bg-[#4e17a00f]'
                            }`}
                            onMouseOver={(e) => {
                                setNavigationMenuOpen(true);
                                navigationMenuReposition(e.currentTarget);
                                setNavigationMenu('sobre-nosotros');
                            }}
                            onMouseLeave={navigationMenuLeave}
                        >

                            <span>Sobre Nosotros</span>


                            <svg
                                className={`relative top-[1px] ml-1 h-3 w-3 ease-out duration-300 ${
                                    navigationMenuOpen && navigationMenu === 'learn-more' ? '-rotate-180' : ''
                                }`}
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
                        </NavLink>
                    </li>
                </ul>

                {/* Desktop Buttons */}
                <div className="hidden lg:flex space-x-2">
                    <button className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium transition-colors rounded-md bg-[#06bbdb] text-[#fffefe] hover:bg-[#06bbdbab]">
                        Inicio
                    </button>
                    <button className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium transition-colors rounded-md bg-[#4D17A0] text-white hover:bg-[#4e17a0af]">
                        Unirse
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden fixed inset-0 bg-white z-20 transition-transform transform ${
                    navigationMenuOpen ? 'translate-x-0' : 'translate-x-full'
                } shadow-lg`}
            >
                <div className="flex flex-col p-4">
                    <button
                        className="self-end p-2 text-gray-600"
                        onClick={() => setNavigationMenuOpen(false)}
                        title="Cerrar menú"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <ul className="flex flex-col space-y-4 mt-4">
                        <li>
                            <a href="#_" className="block py-2 text-sm font-medium text-gray-800 hover:bg-gray-100">
                                Inicio
                            </a>
                        </li>
                        <li>
                            <button
                                className="block py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 w-full flex items-center justify-between"
                                onClick={() => {
                                    // Toggle visibility of the sub-menu without affecting the main menu
                                    setNavigationMenu(navigationMenu === 'getting-started' ? '' : 'getting-started');
                                }}
                            >
                                Proyectos
                                <svg
                                    className={`w-4 h-4 transform ${
                                        navigationMenu === 'getting-started' ? 'rotate-180' : ''
                                    }`}
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
                            {navigationMenu === 'getting-started' && (
                                <div className="pl-4 mt-2">
                                    <a href="#_" className="block py-2 text-sm text-gray-700 hover:bg-gray-100">Proyectos Empresariales</a>
                                    <a href="#_" className="block py-2 text-sm text-gray-700 hover:bg-gray-100">Proyectos Tecnológicos</a>
                                    <a href="#_" className="block py-2 text-sm text-gray-700 hover:bg-gray-100">Proyectos Sociales</a>
                                    <a href="#_" className="block py-2 text-sm text-gray-700 hover:bg-gray-100">Proyectos de Investigación</a>
                                </div>
                            )}
                        </li>
                        <li>
                            <button
                                className="block py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 w-full flex items-center justify-between"
                                onClick={() => {
                                    // Toggle visibility of the sub-menu without affecting the main menu
                                    setNavigationMenu(navigationMenu === 'learn-more' ? '' : 'learn-more');
                                }}
                            >
                                Noticias
                                <svg
                                    className={`w-4 h-4 transform ${
                                        navigationMenu === 'learn-more' ? 'rotate-180' : ''
                                    }`}
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
                            {navigationMenu === 'learn-more' && (
                                <div className="pl-4 mt-2">
                                    <a href="#_" className="block py-2 text-sm text-gray-700 hover:bg-gray-100">Reuniones y Eventos</a>
                                    <a href="#_" className="block py-2 text-sm text-gray-700 hover:bg-gray-100">Logros y Éxitos</a>
                                    <a href="#_" className="block py-2 text-sm text-gray-700 hover:bg-gray-100">Cambios en el Equipo</a>
                                    <a href="#_" className="block py-2 text-sm text-gray-700 hover:bg-gray-100">Aliados</a>
                                    <a href="#_" className="block py-2 text-sm text-gray-700 hover:bg-gray-100">Información General y Comunitaria</a>
                                    <a href="#_" className="block py-2 text-sm text-gray-700 hover:bg-gray-100">Preguntas y Respuestas</a>
                                </div>
                            )}
                        </li>

                        <li>
                            <button
                                className="block py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 w-full flex items-center justify-between"
                                onClick={() => {
                                    // Toggle visibility of the sub-menu without affecting the main menu
                                    setNavigationMenu(navigationMenu === 'sobre-nosotros' ? '' : 'sobre-nosotros');
                                }}
                            >
                                Sobre Nosotros
                                <svg
                                    className={`w-4 h-4 transform ${
                                        navigationMenu === 'sobre-nosotros' ? 'rotate-180' : ''
                                    }`}
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
                            {navigationMenu === 'sobre-nosotros' && (
                                <div className="pl-4 mt-2">
                                    <a href="#_" className="block py-2 text-sm text-gray-700 hover:bg-gray-100">Cambios en el Equipo</a>
                                    <a href="#_" className="block py-2 text-sm text-gray-700 hover:bg-gray-100">Preguntas y Respuestas</a>
                                    <a href="#_" className="block py-2 text-sm text-gray-700 hover:bg-gray-100">Convocatoria de Voluntarios</a>
                                    <NavLink
                                        to="/SobreNosotros/Roles-y-Responsabilidades"
                                        style={({ isActive }) => ({
                                        fontWeight: isActive ? 'bold' : 'normal',
                                        })}
                                    ><a href="#_" className="block py-2 text-sm text-gray-700 hover:bg-gray-100">Roles y Responsabilidades</a>
                                    
                                    </NavLink>
                                </div>
                            )}
                        </li>


                        <li>
                            <button className="block w-full py-2 text-sm font-medium text-white bg-[#06bbdb] hover:bg-[#06bbdbab]">
                                Inicio
                            </button>
                            <button className="block w-full py-2 mt-2 text-sm font-medium text-white bg-[#4D17A0] hover:bg-[#4e17a0af]">
                                Unirse
                            </button>
                        </li>
                    </ul>
                </div>
            </div>


            {/* Dropdown Menu for Desktop */}
            <div
                ref={navigationDropdownRef}
                className={`absolute top-0 pt-3 duration-200 ease-out -translate-x-1/2 translate-y-11 ${
                    navigationMenuOpen ? 'block' : 'hidden'
                }`}
                onMouseOver={navigationMenuClearCloseTimeout}
                onMouseLeave={navigationMenuLeave}
            >
                <div className="flex justify-center w-auto h-auto overflow-hidden bg-white border rounded-md shadow-sm border-neutral-200/70">
                    <div className={`flex items-stretch justify-center w-full p-6 gap-x-3 ${navigationMenu === 'getting-started' ? 'block' : 'hidden'}`}>
                        {/* Section of Image */}
                        <div className="flex-shrink-0 w-48 rounded pt-28 pb-7 bg-gradient-to-r from-red-500 to-orange-500">
                            <div className="relative px-7 space-y-1.5 text-white">
                                {/* Here goes the image */}
                                <img src={Equipo} alt='imagen de equipo' />
                                {/* Text below the image */}
                                <br className="hidden lg:inline-block" />
                                <span className="block font-bold">Portafolio de Proyectos</span>
                                <span className="block text-xs opacity-60">Mira como nuestra comunidad ha desarrollado diversos proyectos e iniciativas.</span>
                            </div>
                        </div>

                        {/* Project Navigation Options */}
                        <div className="w-72">
                            <a href="#_" onClick={navigationMenuClose} className="block px-3.5 py-3 text-sm rounded hover:bg-neutral-100">
                                <span className="block mb-1 font-medium text-[#4D17A0]">Proyectos Empresariales</span>
                                <span className="block font-light leading-5 opacity-50">Un proyecto empresarial es una iniciativa temporal dentro de una empresa destinada a alcanzar objetivos específicos que se alinean con las metas y estrategias de negocio.</span>
                            </a>
                            <a href="#_" onClick={navigationMenuClose} className="block px-3.5 py-3 text-sm rounded hover:bg-neutral-100">
                                <span className="block mb-1 font-medium text-[#FF610F]">Proyectos Tecnológicos</span>
                                <span className="block leading-5 opacity-50">Un proyecto tecnológico tiene como objetivo abordar problemas tecnológicos mediante la creación de soluciones innovadoras.</span>
                            </a>
                            <a href="#_" onClick={navigationMenuClose} className="block px-3.5 py-3 text-sm rounded hover:bg-neutral-100">
                                <span className="block mb-1 font-medium text-[#06BADB]">Proyectos Sociales</span>
                                <span className="block leading-5 opacity-50">Un proyecto social es una iniciativa diseñada para abordar problemas sociales, orientándose a generar un impacto positivo en la sociedad.</span>
                            </a>
                            <a href="#_" onClick={navigationMenuClose} className="block px-3.5 py-3 text-sm rounded hover:bg-neutral-100">
                                <span className="block mb-1 font-medium text-black">Proyectos de Investigación</span>
                                <span className="block leading-5 opacity-50">Un proyecto de investigación es una iniciativa diseñada para recabar información y formular hipótesis sobre un determinado fenómeno social o científico.</span>
                            </a>
                        </div>
                    </div>


                    <div className={`flex items-stretch justify-center w-full p-6 ${navigationMenu === 'learn-more' ? 'block' : 'hidden'}`}>
                        <div className="w-72">
                            <a href="#_" onClick={navigationMenuClose} className="block px-3.5 py-3 text-sm rounded hover:bg-neutral-100">
                                <span className="block mb-1 font-medium text-black">Reuniones y Eventos</span>
                                <span className="block font-light leading-5 opacity-50">Enterate sobre nuestras próximas reuniones, talleres y eventos.</span>
                            </a>
                            <a href="#_" onClick={navigationMenuClose} className="block px-3.5 py-3 text-sm rounded hover:bg-neutral-100">
                                <span className="block mb-1 font-medium text-black">Logros y Éxitos</span>
                                <span className="block font-light leading-5 opacity-50">Conoce de nuestros logros obtenidos por nuestros miembros y/o proyectos</span>
                            </a>

                        </div>
                        <div className="w-72">
                            <a href="#_" onClick={navigationMenuClose} className="block px-3.5 py-3 text-sm rounded hover:bg-neutral-100">
                                <span className="block mb-1 font-medium text-black">Aliados</span>
                                <span className="block font-light leading-5 opacity-50">Conoce de todas nuestras colaboraciones con otras organizaciones.</span>
                            </a>
                            <a href="#_" onClick={navigationMenuClose} className="block px-3.5 py-3 text-sm rounded hover:bg-neutral-100">
                                <span className="block mb-1 font-medium text-black">Información General y Comunitaria</span>
                                <span className="block leading-5 opacity-50">Informate de las ultimas noticias y actualizaciones que trae nuestra comunidad.</span>
                            </a>

                        </div>
                    </div>


                    <div className={`flex items-stretch justify-center w-full p-6 ${navigationMenu === 'sobre-nosotros' ? 'block' : 'hidden'}`}>
                        <div className="w-72">

                            <a href="#_" onClick={navigationMenuClose} className="block px-3.5 py-3 text-sm rounded hover:bg-neutral-100">
                                <span className="block mb-1 font-medium text-black">Cambios en el Equipo</span>
                                <span className="block leading-5 opacity-50">Informate de como nuestro equipo ha evolucionado a lo largo del tiempo.</span>
                            </a>

                            <a href="#_" onClick={navigationMenuClose} className="block px-3.5 py-3 text-sm rounded hover:bg-neutral-100">
                                <span className="block mb-1 font-medium text-black">Convocatoria de Voluntariados</span>
                                <span className="block leading-5 opacity-50">Enterate sobre nuestras vacantes y trabaja con nosotros.</span>
                            </a>

                        </div>
                        <div className="w-72">

                            <a href="#_" onClick={navigationMenuClose} className="block px-3.5 py-3 text-sm rounded hover:bg-neutral-100">
                                <span className="block mb-1 font-medium text-black">Preguntas y Respuestas</span>
                                <span className="block leading-5 opacity-50">En esta sección encontrarás las respuestas a las preguntas más frecuentes sobre nuestra comunidad y sus actividades.</span>
                            </a>
                            <NavLink
                                        to="/SobreNosotros/Roles-y-Responsabilidades"
                                        style={({ isActive }) => ({
                                        fontWeight: isActive ? 'bold' : 'normal',
                                        })}
                            >
                                <a href="#_" onClick={navigationMenuClose} className="block px-3.5 py-3 text-sm rounded hover:bg-neutral-100">
                                    <span className="block mb-1 font-medium text-black">Roles y Responsabilidades</span>
                                    <span className="block font-light leading-5 opacity-50">Enterate de como gestionamos nuestra comunidad y cuales son nuestras funciones.</span>
                                </a>
                            </NavLink>
                        </div>
                    </div>



                </div>
            </div>

            <hr />
            {/* Anuncio de evento */}
            <Section />
        </nav>
        
    );
};

export default Header;

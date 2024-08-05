import logo from '../assets/SVG/PMI - IMAGOTIPO.svg';

const Footer = () => {
    return (
        <>
            <hr />
            <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="sm:col-span-2">
                        <a href="/" aria-label="Go home" title="Company" className="inline-flex items-center">
                            <img src={logo} alt="Logo" className="h-32" />
                        </a>
                        <div className="mt-6 lg:max-w-sm">
                            <p className="text-xs text-gray-800">
                                La Comunidad Estudiantes de Huancayo es un capítulo perteneciente al PMI, que busca fomentar la educación y la formación de profesionales en la gestión de proyectos.
                            </p>
                            <p className="mt-4 text-xs text-gray-800">
                                Nuestra comunidad está orientada en desarrollar en <strong>Conectar, Desarrollar y Liderar</strong> diversos proyectos en la región de Huancayo, independientemente de su rubro, naturaleza o magnitud.
                                <br />
                                <br />
                                Dentro de nuestras actividades, se encuentran la realización de eventos, charlas, talleres, entre otros, que buscan contribuir con las ODS de la ONU, afianzando nuestro compromiso con la sociedad, medio ambiente, economía y desarrollo sostenible.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-2 text-sm">
                        <p className="text-xs font-medium tracking-wide text-gray-900">"Suceden cosas buenas cuando te involucras con PMI"</p>
                        <br />
                        <p className="text-xl font-bold tracking-wide text-gray-900">Organización</p>
                        <div className="flex flex-col space-y-2">
                            <a href="/" className="text-gray-800 hover:text-[#4D17A0] hover:font-medium">Inicio</a>
                            <a href="/" className="text-gray-800 hover:text-[#4D17A0] hover:font-medium">Sobre Nosotros</a>
                            <a href="/" className="text-gray-800 hover:text-[#4D17A0] hover:font-medium">Proyectos</a>
                            <a href="/" className="text-gray-800 hover:text-[#4D17A0] hover:font-medium">Noticias</a>
                        </div>
                    </div>

                    <div>
                        <div className="space-y-2 text-sm">
                            <p className="text-base font-bold tracking-wide text-gray-900">Forma parte de Nuestro Equipo</p>
                            <div className="flex flex-col space-y-2">
                                <div className="flex items-center">
                                    <p className="mr-1 text-gray-800">Email:</p>
                                    <a href="mailto:pmi_estudiantil_uc@continental.edu.pe" aria-label="Our email" title="Our email" className="text-deep-purple-accent-400 text-xs hover:text-deep-purple-800">pmi_estudiantil_uc@continental.edu.pe</a>
                                </div>
                                <div className="flex items-center">
                                    <p className="mr-1 text-gray-800">Dirección:</p>
                                    <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" aria-label="Our address" title="Our address" className="text-deep-purple-accent-400 text-xs hover:text-deep-purple-800">Av San Carlos 1980, Huancayo 12000, Perú</a>
                                </div>
                            </div>

                            <br />
                            <hr />
                            <br />

                            <span className="text-base font-medium tracking-wide text-gray-900">Síguenos en redes Sociales</span>
                            <div className="flex items-center mt-1 space-x-3">
                                <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
                                    {/* Logo de Twitter */}
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                        <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"></path>
                                    </svg>
                                </a>
                                {/* Logo de Instagram */}
                                <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
                                    <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                                        <circle cx="15" cy="15" r="4"></circle>
                                        <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10 C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1 c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"></path>
                                    </svg>
                                </a>
                                {/* Logo de Facebook */}
                                <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                        <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"></path>
                                    </svg>
                                </a>
                                {/* Logo de TikTok */}
                                <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
                                    <svg className="h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 50" clipRule="evenodd">
                                        <path fill="currentColor" fillRule="evenodd" d="M10.904,6h26.191C39.804,6,42,8.196,42,10.904v26.191 C42,39.804,39.804,42,37.096,42H10.904C8.196,42,6,39.804,6,37.096V10.904C6,8.196,8.196,6,10.904,6z" clipRule="evenodd"/>
                                        <path fillRule="evenodd" d="M29.208,20.607c1.576,1.126,3.507,1.788,5.592,1.788v-4.011 c-0.395,0-0.788-0.041-1.174-0.123v3.157c-2.085,0-4.015-0.663-5.592-1.788v8.184c0,4.094-3.321,7.413-7.417,7.413 c-1.528,0-2.949-0.462-4.129-1.254c1.347,1.376,3.225,2.23,5.303,2.23c4.096,0,7.417-3.319,7.417-7.413L29.208,20.607L29.208,20.607 z M30.657,16.561c-0.805-0.879-1.334-2.016-1.449-3.273v-0.516h-1.113C28.375,14.369,29.331,15.734,30.657,16.561L30.657,16.561z M19.079,30.832c-0.45-0.59-0.693-1.311-0.692-2.053c0-1.873,1.519-3.391,3.393-3.391c0.349,0,0.696,0.053,1.029,0.159v-4.1 c-0.389-0.053-0.781-0.076-1.174-0.068v3.191c-0.333-0.106-0.68-0.159-1.03-0.159c-1.874,0-3.393,1.518-3.393,3.391 C17.213,29.127,17.972,30.274,19.079,30.832z" clipRule="evenodd"/>
                                        <path fill="#ffffff" fillRule="evenodd" d="M28.034,19.63c1.576,1.126,3.507,1.788,5.592,1.788v-3.157 c-1.164-0.248-2.194-0.856-2.969-1.701c-1.326-0.827-2.281-2.191-2.561-3.788h-2.923v16.018c-0.007,1.867-1.523,3.379-3.393,3.379 c-1.102,0-2.081-0.525-2.701-1.338c-1.107-0.558-1.866-1.705-1.866-3.029c0-1.873,1.519-3.391,3.393-3.391 c0.359,0,0.705,0.056,1.03,0.159V21.38c-4.024,0.083-7.26,3.369-7.26,7.411c0,2.018,0.806,3.847,2.114,5.183 c1.18,0.792,2.601,1.254,4.129,1.254c4.096,0,7.417-3.319,7.417-7.413L28.034,19.63L28.034,19.63z" clipRule="evenodd"/>
                                        <path fill="#ffffff" fillRule="evenodd" d="M33.626,18.262v-0.854c-1.05,0.002-2.078-0.292-2.969-0.848 C31.445,17.423,32.483,18.018,33.626,18.262z M28.095,12.772c-0.027-0.153-0.047-0.306-0.061-0.461v-0.516h-4.036v16.019 c-0.006,1.867-1.523,3.379-3.393,3.379c-0.549,0-1.067-0.13-1.526-0.362c0.62,0.813,1.599,1.338,2.701,1.338 c1.87,0,3.386-1.512,3.393-3.379V12.772H28.095z M21.635,21.38v-0.909c-0.337-0.046-0.677-0.069-1.018-0.069 c-4.097,0-7.417,3.319-7.417,7.413c0,2.567,1.305,4.829,3.288,6.159c-1.308-1.336-2.114-3.165-2.114-5.183 C14.374,24.749,17.611,21.463,21.635,21.38z" clipRule="evenodd"/>
                                    </svg>
                                </a>
                            </div>
                            <p className="mt-4 text-sm text-gray-500">
                                Enterate de nuestras últimas novedades por medio de nuestras redes sociales.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col-reverse justify-between items-center pt-5 pb-10 border-t lg:flex-row lg:items-start">
                    <p className="text-xs text-gray-500 mb-4 lg:mb-0 lg:order-1">
                        © 2024 PMI Chapter Lima: Huancayo. Todos los derechos reservados.
                    </p>
                    <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row lg:order-2">
                        <li>
                            <a 
                                href="/faq" 
                                className="text-xs text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400" 
                                aria-label="Preguntas y Respuestas"
                            >
                                Preguntas y Respuestas
                            </a>
                        </li>
                        <li>
                            <a 
                                href="/privacy-policy" 
                                className="text-xs text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400" 
                                aria-label="Política de Privacidad"
                            >
                                Política de Privacidad
                            </a>
                        </li>
                        <li>
                            <a 
                                href="/terms-and-conditions" 
                                className="text-xs text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400" 
                                aria-label="Términos y Condiciones"
                            >
                                Términos &amp; Condiciones
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Footer;

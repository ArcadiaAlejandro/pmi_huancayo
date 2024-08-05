import { Link } from 'react-router-dom';
import Cavernicola from "../../assets/img/gift/404.gif";
const Section1 = () => {
    return (
        <section className="py-8 pt-36 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center">
                    <div className="w-full max-w-2xl text-center">
                        <div 
                            className="bg-cover bg-center h-72 md:h-96 lg:h-[400px] flex items-center justify-center relative"
                            style={{ backgroundImage: Cavernicola }}
                        >
                            <h1 className="text-5xl md:text-7xl lg:text-9xl text-[#4e17a0] font-bold drop-shadow-lg opacity-15">ERROR 404</h1>
                        </div>
                        <div className="relative -mt-16 px-4">
                            <h3 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-gray-800">Parece que estás perdido</h3>
                            <p className="mt-4 text-base md:text-lg lg:text-xl text-gray-600">La página que estás buscando no está disponible o aun no se ha implementado.</p>
                            <Link to='/'> <a 
                                href="https://instagram.com/abol.codes" 
                                className="inline-block px-6 py-3 bg-[#4e17a0] text-white rounded-md mt-5 text-base md:text-lg hover:bg-[#3c0d7a]"
                            >
                                Volver al Inicio
                            </a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section1;


import Header from '../../components/header';
import Footer from '../../components/footer';

import logo from '../../assets/SVG/PMI - IMAGOTIPO.svg';

const Loading = () => (
    <>

    <Header />

    <div className='flex flex-col justify-center items-center bg-white h-screen'>
        <img src={logo} alt="Logo del CEUC" className='h-32 mb-4' />
        <br />
        <div className='text-black text-lg'>Cargando...</div>
        <br />
        <div className='flex space-x-4'>
            <div className='h-6 w-6 bg-[#ff630fc7] rounded-full animate-bounce [animation-delay:-0.3s]'></div>
            <div className='h-6 w-6 bg-[#4e17a0] rounded-full animate-bounce [animation-delay:-0.15s]'></div>
            <div className='h-6 w-6 bg-[#06BADBc7] rounded-full animate-bounce'></div>
        </div>

    </div>




    <Footer />

    </>

);

export default Loading;

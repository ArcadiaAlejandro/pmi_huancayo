import { Suspense, lazy } from 'react';

import Header from '../components/header';
import Footer from '../components/footer';

import Loading from '../routes/loading/Loading'

const Section1 = lazy(() => import('../components/sobre_nosotros/Responsabilidades/section1'));
const Section2 = lazy(() => import('../components/sobre_nosotros/Responsabilidades/section2'));
export default function Route(){
    return (
    <>
        
        {/* Seccion de Navegacion */}  
        <Header />
        {/* Seccion de Contenido */}
        <Suspense fallback= {< Loading />}>
            {/* Pagina de presentacion*/} 
            <Section1 />
            {/* Pagina de Roles y Responsabilidades*/} 
            <Section2 />
        </Suspense>

        {/* Seccion de Pie de Pagina */}  
        <Footer />

    </>
    )
}
import { Suspense, lazy } from 'react';

import Header from '../components/header';
import Footer from '../components/footer';

import Loading from '../routes/loading/Loading'

// Carga diferida de los componentes
const Section1 = lazy(() => import('../components/proyectos/section1'));
const Section2 = lazy(() => import('../components/proyectos/section2'));
const Section3 = lazy(() => import('../components/proyectos/section3'));
export default function Route(){
    return (
    <>
        {/* Seccion de Navegacion */}  
            <Header />
        
        <Suspense fallback= {< Loading />}>
        {/* Seccion de Contenido */}
            {/* Presentacion de PMI Chapter Huancayo */} 
            <Section1 />

            <Section2 />

            <Section3 />
        </Suspense>
        {/* Seccion de Pie de Pagina */}  
        <Footer />
    </>
    )
}
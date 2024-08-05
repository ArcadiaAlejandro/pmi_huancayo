import { Suspense, lazy } from 'react';

import Header from '../components/header';
import Footer from '../components/footer';

import Loading from '../routes/loading/Loading'

// Carga diferida de los componentes
const Section1 = lazy(() => import('../components/Inicio/section1'));
const Section2 = lazy(() => import('../components/Inicio/section2'));
const Section3 = lazy(() => import('../components/Inicio/section3'));
const Section4 = lazy(() => import('../components/Inicio/section4'));
const Section5 = lazy(() => import('../components/Inicio/section5'));
const Section6 = lazy(() => import('../components/Inicio/section6'));

export default function Route(){
    return (
    <>
        {/* Seccion de Navegacion */}  
        <Header />
        
        <Suspense fallback= {< Loading />}>
        {/* Seccion de Contenido */}

            {/* Presentacion de PMI Chapter Huancayo */} 
            <Section1 />
            {/* Seccion de que es PMI */} 
            <Section2 />
            {/* Seccion de beneficios de la comunidad */} 
            <Section3 />
            {/* Seccion de Aliados*/}
            <Section4 />
            {/* Seccion de Estadistica*/}
            <Section5 />
            {/* Seccion de Equipo*/} 
            <Section6 />
        </Suspense>
        {/* Seccion de Pie de Pagina */}  
        <Footer />
    </>
    )
}
import { Suspense, lazy } from 'react';

import Header from '../components/header';
import Footer from '../components/footer';

import Loading from '../routes/loading/Loading'

// Carga diferida del componente Section1
const Section1 = lazy(() => import('../components/404/section1'));

export default function Route(){
    return (
    <>
        {/* Seccion de Navegacion */}  
        <Header />
        <Suspense fallback= {< Loading />}>
        {/* Seccion de Contenido */}
            {/* Pagina de error 404*/} 
            <Section1 />
        </Suspense>
        {/* Seccion de Pie de Pagina */}  
        <Footer />
    </>
    )
}
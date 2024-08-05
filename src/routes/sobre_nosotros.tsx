import { Suspense, lazy } from 'react';

import Header from '../components/header';
import Footer from '../components/footer';

import Loading from '../routes/loading/Loading'

const Section1 = lazy(() => import('../components/sobre_nosotros/section1'));

export default function Route(){
    return (
    <>
        
        {/* Seccion de Navegacion */}  
        <Header />
        {/* Seccion de Contenido */}
        <Suspense fallback= {< Loading />}>
            {/* Pagina de error 404*/} 
            <Section1 />
        </Suspense>

        {/* Seccion de Pie de Pagina */}  
        <Footer />

    </>
    )
}
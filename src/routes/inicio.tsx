
import Header from '../components/header';
import Footer from '../components/footer';

import Section1 from '../components/Inicio/section1';
import Section2 from '../components/Inicio/section2';
import Section3 from '../components/Inicio/section3';
import Section4 from '../components/Inicio/section4';
import Section5 from '../components/Inicio/section5';
import Section6 from '../components/Inicio/section6';

export default function Route(){
    return (
    <>
        {/* Seccion de Navegacion */}  
        <hr/>
        <Header />
            
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
        {/* Seccion de Pie de Pagina */}  
        <Footer />
    </>
    )
}
import Wichay from '../../assets/img/gift/LOGO_WICHAY_COLOR.webp';
import Universidad_continental from '../../assets/img/png/Logo U Continental.png';

const logos = [
    Wichay,
    Universidad_continental,
];

const Section4 = () => {

    return (
        <>
        <section className="bg-white">
            <div className="flex items-center justify-center h-full">
                <div className="mx-auto w-full max-w-7xl px-5 md:px-10 md:py-20">
                <h5 className="mb-12 text-lg font-medium md:mb-16 lg:mb-20 lg:text-5xl text-[#363636] text-center">
                    Aliados que ya confian en <span className="text-[#ff630f] font-bold ">NOSOTROS</span>
                </h5>
                
                    <div className="flex justify-center overflow-hidden space-x-10 group">
                        <div className="flex justify-center space-x-10">
                            {logos.map((logo, index) => (
                                <div key={index} className="flex justify-center items-center">
                                    <img
                                        src={logo}
                                        alt={`Logo ${index}`}
                                        className="max-w-none w-52 filter grayscale transition-all duration-400 hover:filter-none"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
            </div>
                
            </div>
        </section>
        </>
    );
};

export default Section4;
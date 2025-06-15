import FooterContainer from "../component/footer";
import NavbarContainer from "../component/navbar";
import laut_4 from "../assets/images/Content Web SiSegar/laut_4.jpg";

function Hero(){
    return (
        <>
            <div className={`w-full h-[90vh] relative flex items-center justify-center p-[3rem]`}>
                <img src={laut_4} alt="" className="h-full w-full object-cover absolute top-0 bottom-0 left-0 right-0"/>
                <div className="relative z-20 w-full h-[80%] md:w-[80%] lg:h-[70&] p-4 md:p-6 lg:p-8 bg-white/15 backdrop-blur-sm rounded-xl shadow-lg border-[2px] border-white/15 text-white flex flex-col items-center justify-center overflow-hidden transform transition-all duration-300 hover:scale-[1.01] cursor-pointer">
                    <p className="font-montserrat font-bold text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] text-center mb-4 text-parsley-950">Inspirasi untuk Bumi yang Lebih Baik</p>
                    <p className="font-montserrat text-[1rem] md:text-[1.3rem] lg:text-[1.5rem] text-parsley-900 text-center">Temukan solusi inovatif dan praktik terbaik untuk gaya hidup berkelanjutan. siSegar Pintar, panduan lengkap untukmu</p>
                </div>

            </div>
        </>
    )
}

function Content(){
    
}

export default function Blog(){
    return (
        <>
            <NavbarContainer/>
            <Hero/>
            <FooterContainer/>
        </>
    )
}
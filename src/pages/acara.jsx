import FooterContainer from "../component/footer";
import NavbarContainer from "../component/navbar";
import sawah_3 from "../assets/images/Content Web SiSegar/sawah_3.jpg";

function Hero(){
    return (
        <>
            <div className={`w-full h-[90vh] relative flex items-center justify-center p-[3rem]`}>
                <img src={sawah_3} alt="" className="h-full w-full object-cover absolute top-0 bottom-0 left-0 right-0"/>
                <div className="relative z-20 w-full h-[80%] md:w-[80%] lg:h-[70&] p-4 md:p-6 lg:p-8 bg-white/15 backdrop-blur-sm rounded-xl shadow-lg border-[2px] border-white/15 text-white flex flex-col items-center justify-center overflow-hidden transform transition-all duration-300 hover:scale-[1.01] cursor-pointer">
                    <p className="font-montserrat font-bold text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] text-center mb-4 text-parsley-950">Ikuti Acara, Jadi Inspirasi</p>
                    <p className="font-montserrat text-[1rem] md:text-[1.3rem] lg:text-[1.5rem] text-parsley-900 text-center">Dari workshop edukatif hingga aksi bersih lingkungan, temukan acara-acara menarik yang akan memperkaya pengalaman dan semangat pedulimu.</p>
                </div>

            </div>
        </>
    )
}

function Content(){
    return (
        <>
            <div className="w-full h-fit p-6 bg-parsley-200">
                <div className="w-full md:w-[75%] lg:w-[70%] md:mx-auto h-fit">
                    <div className="w-full h-[20vh]">
                        <form action="" className="w-full h-full flex flex-col justify-center">
                            <input type="text" name="" className="w-full lg:w-[80%] h-fit text-[24px] lg:mx-auto p-4 lg:py-2  mb-4 font-montserrat bg-parsley-50 text-parsley-600 rounded-2xl placeholder:font-bold placeholder:text-parsley-600" placeholder="Cari Nama Acara"/>
                            <button className="w-full lg:w-[80%] h-fit py-3 lg:py-2 lg:mx-auto text-[20px] font-bold font-montserrat bg-parsley-700 text-parsley-50 rounded-2xl">Cari Acara</button>
                        </form>
                    </div>
                    <div className="w-full h-fit"></div>
                </div>
            </div>
        </>
    )
}

export default function Acara(){
    return (
        <>
            <NavbarContainer/>
            <Hero/>
            <Content/>
            <FooterContainer/>
        </>
    )
}
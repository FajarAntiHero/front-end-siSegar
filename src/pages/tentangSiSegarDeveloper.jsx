import FooterContainer from "../component/footer";
import NavbarContainer from "../component/navbar";
import air_terjun from "../assets/images/Content Web SiSegar/air_terjun.jpg";
import flower from "../assets/images/assest png/flower-1.png"
import fotoFarid from "../assets/images/foto_farid.jpg"
import fotoRidho from "../assets/images/foto_ridho.jpg"

function Hero(){
    return (
        <>
            <div className={`w-full h-[90vh] relative flex items-center justify-center p-[3rem]`}>
                <img src={air_terjun} alt="" className="h-full w-full object-cover absolute top-0 bottom-0 left-0 right-0"/>
                <div className="relative z-20 w-full h-[80%] md:w-[80%] lg:h-[70&] p-4 md:p-6 lg:p-8 bg-white/15 backdrop-blur-sm rounded-xl shadow-lg border-[2px] border-white/15 text-white flex flex-col items-center justify-center overflow-hidden transform transition-all duration-300 hover:scale-[1.01] cursor-pointer">
                    <p className="font-montserrat font-bold text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] text-center mb-4 text-parsley-950">Lingkungan Sehat, Dimulai dari Kita</p>
                    <p className="font-montserrat text-[1rem] md:text-[1.3rem] lg:text-[1.5rem] text-parsley-900 text-center">Temukan inspirasi, koneksikan diri dengan komunitas peduli, dan wujudkan solusi nyata untuk bumi yang lebih lestari bersama siSegar.</p>
                </div>

            </div>
        </>
    )
}

function Content(){

    const listData = [
        {image: null, titleCard: "Fajar Maulana", messageCard: "Front End, Back End, UI Design"},
        {image: fotoFarid, titleCard: "Farid Rahmat Alfiansyah", messageCard: "Front End, Ui Design"},
        {image: fotoRidho, titleCard: "Ridho Kurnia Aji", messageCard: "UI Design, SEO"}
    ]
    return (
        <div className="w-full h-fit lg:h-[90vh] lg:flex lg:justify-center lg:items-center bg-parsley-50">
            <div className="w-full h-fit md:w-[75%] lg:w-[60%] md:mx-auto p-6 pt-8 relative">
                <img src={flower} alt="flower" className='w-[2rem] md:w-[3rem] h-[2rem] md:h-[3rem] absolute z-0 top-[2rem] left-[2rem]'/>
                <img src={flower} alt="flower" className='w-[3rem] md:w-[4rem] md:h-[4rem] h-[3rem] absolute z-0 top-[2rem] right-[2rem]'/>
                <div className="w-full h-fit mt-[3rem] mb-[2rem]">
                    <p className="font-montserrat text-center mb-[1rem] font-bold text-parsley-950 text-[28px]">siSegar Membagikan Ide Hebatmu</p>
                    <p className="font-montserrat text-center text-parsley-600 text-[16px]">
                        Saatnya mewujudkan lingkungan sehat impianmu dengan belajar dan tumbuh, bersama mereka yang memiliki tujuan serupa.
                    </p>
                </div>
                <div className="w-full h-fit lg:flex lg:flex-wrap lg:justify-between">
                    {listData.map((item) => {
                        return (
                            <div className="w-full lg:w-[30%] h-fit rounded-[20px] bg-parsley-300 p-[8px] mb-6">
                                <div className="w-full h-[20vh] rounded-xl bg-gray-500 overflow-hidden mb-3">
                                    <img src={item.image} alt="" className="w-full h-full object-cover"/>
                                </div>
                                <p className="font-montserrat font-bold text-parsley-950 text-[16px] text-center">{item.titleCard}</p>
                                <p className="font-montserrat text-parsley-800 text-[12px] text-center">{item.messageCard}</p>

                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default function SiSegarDeveloper(){
    return (
        <>
            <NavbarContainer/>
            <Hero/>
            <Content/>
            <FooterContainer/>
        </>
    )
}
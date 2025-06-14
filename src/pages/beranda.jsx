import { Link } from "react-router-dom";
import NavbarContainer from "../component/navbar";
import FooterContainer from "../component/footer";

function Hero(){
    return (
        <div className="w-full h-[90vh] bg-parsley-50">
            <div className="container p-6 h-full flex flex-col">
                <div className="w-full h-fit mt-4 mb-[2rem]">
                    <p className="font-montserrat text-parsley-950 font-bold text-[32px] mb-[1rem]">siSegar Peduli Lingkungan Hijau dan Peduli Alam</p>
                    <p className="font-montserrat text-parsley-500 text-[16px] mb-[1rem]">
                        siSegar adalah sebuah platform digital yang dirancang untuk mendorong terciptanya lingkungan hidup yang sehat, hijau dan berkelanjutan. 
                    </p>
                    <Link to="/tentang/sisegar" className="inline-flex items-center justify-center rounded-2xl font-montserrat font-bold text-parsley-950 w-[55%] h-[50px] bg-parsley-400 ">Informasi Lengkap</Link>
                </div>
                <div className="w-full h-fit bg-parsley-300 rounded-2xl p-3 max-h-full">
                    <div className="w-full h-[20vh] rounded-xl overflow-hidden bg-gray-500 mb-[1.2rem]">
                        <img src="#" alt="#" />
                    </div>
                    <p className="font-montserrat font-bold text-xl text-parsley-950 mb-3">Hutan Tropis Kalimantan</p>
                    <p className="font-montserrat text-[16px]">Hutan Tropis Kalimantan mengalami kebakaran sampe botak</p>
                </div>
            </div>
        </div>
    )
}

function Content(){

    const listData = [
        {image: '', titleCard: "siSegar Komunitas", messageCard: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis recusandae debitis quaerat?"},
        {image: '', titleCard: "siSegar Acara", messageCard: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis recusandae debitis quaerat?"},
        {image: '', titleCard: "siSegar Pintar", messageCard: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis recusandae debitis quaerat?"}
    ]
    return (
        <div className="w-full h-fit bg-parsley-50">
            <div className="container h-fit p-6">
                <div className="w-full h-fit mt-[3rem] mb-[2rem]">
                    <p className="font-montserrat text-center mb-[1rem] font-bold text-parsley-950 text-[28px]">siSegar Membagikan Ide Hebatmu</p>
                    <p className="font-montserrat text-center text-parsley-600 text-[16px]">
                        Saatnya mewujudkan lingkungan sehat impianmu dengan belajar dan tumbuh, bersama mereka yang memiliki tujuan serupa.
                    </p>
                </div>
                <div className="w-full h-fit">
                    {listData.map((item) => {
                        return (
                            <div className="w-full h-fit rounded-[20px] bg-parsley-300 p-[8px] mb-6">
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

export default function Beranda(){
    return (
        <>
            {/* NAVBAR */}
            <NavbarContainer/>
            {/* HERO */}
            <Hero/>
            {/* CONTENT 1 */}
            <Content/>
            {/* FOOTER */}
            <FooterContainer/>
        </>
    )
}
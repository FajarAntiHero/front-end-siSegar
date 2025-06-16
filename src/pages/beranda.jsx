import React from 'react';
import { Link } from "react-router-dom";
import NavbarContainer from "../component/navbar";
import FooterContainer from "../component/footer";
import hutan_kalimantan from "../assets/images/Content Web SiSegar/hutan_kalimantan.jpg";
import useScrollAnimation from "../component/useScrollAnimation";
import flower from "../assets/images/assest png/flower-1.png"
import leaf from "../assets/images/assest png/leaf.png"

function Hero(){

    return (
        <div className="w-full h-[90vh] bg-parsley-50">
            <div className="w-full md:w-[75%] md:mx-auto px-6 h-full flex flex-col lg:flex-row justify-evenly lg:items-center relative">
                <img src={flower} alt="flower" className='w-[2rem] h-[2rem] absolute z-0 top-[2rem] right-[3rem]'/>
                <img src={leaf} alt="leaf" className='hidden md:block w-[2rem] h-[2rem] absolute z-0 bottom-[5rem] left-[2rem]'/>
                <div className="w-full lg:w-[40%] h-fit mt-4 mb-[2rem] ">
                    <p className="font-montserrat text-parsley-950 font-bold text-[32px] md:text-[36px] mb-[1rem]">siSegar Peduli Lingkungan Hijau dan Peduli Alam</p>
                    <p className="font-montserrat text-parsley-500 text-[16px] md:text-[20px] mb-[1rem]">
                        siSegar adalah sebuah platform digital yang dirancang untuk mendorong terciptanya lingkungan hidup yang sehat, hijau dan berkelanjutan. 
                    </p>
                    <Link to="/tentang/sisegar" className="inline-flex items-center justify-center rounded-2xl font-montserrat font-bold text-parsley-950 w-[55%] h-[50px] bg-parsley-400 ">Baca Lengkap</Link>
                </div>
                <div className="w-full lg:w-[40%] h-fit bg-parsley-300 rounded-2xl p-2">
                    <div className="w-full h-[20vh] lg:h-[30vh] rounded-xl overflow-hidden bg-gray-500 mb-2">
                        <img src={hutan_kalimantan} alt="Hutan Kalimantan" className="w-full h-full object-cover"/>
                    </div>
                    <div className="w-full h-fit md:h-[20vh] rounded-xl">
                        <p className="font-montserrat font-bold text-[16px] md:text-[20px] text-parsley-950 mb-1 text-center">Hutan Kalimantan</p>
                        <p className="font-montserrat text-[14px] md:text-[16px] text-parsley-600 text-center">
                            Hutan Kalimantan adalah rumah bagi lebih dari 15.000 ragam tumbuhan, 222 mamalia, 420 jenis burung, 100 jenis amfibi, dan 394 jenis ikan.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Content(){

    const headerContent = useScrollAnimation({})
    const cardContent = useScrollAnimation({})

    const listData = [
        {key: 1,image: '', titleCard: "siSegar Komunitas", messageCard: "Bergabunglah dengan gerakan hijau di sekitarmu! Temukan dan terhubunglah dengan individu serta kelompok yang peduli lingkungan. "},
        {key: 2, image: '', titleCard: "siSegar Acara", messageCard: "Jangan lewatkan kesempatan untuk belajar dan beraksi! Jelajahi berbagai acara menarik seputar lingkungan."},
        {key: 3, image: '', titleCard: "siSegar Blog", messageCard: "Perluas wawasanmu tentang gaya hidup berkelanjutan! Dapatkan tips praktis, panduan edukatif, dan informasi terbaru seputar lingkungan. "}
    ]
    return (
        <div className="w-full h-fit bg-parsley-50">
            <div className="w-full md:w-[75%] md:mx-auto h-fit p-6">
                <div ref={headerContent} className="w-full h-fit mt-[3rem] mb-[2rem]">
                    <p className="font-montserrat text-center mb-[1rem] font-bold text-parsley-950 text-[28px]">siSegar Membagikan Ide Hebatmu</p>
                    <p className="font-montserrat text-center text-parsley-600 text-[16px]">
                        Saatnya mewujudkan lingkungan sehat impianmu dengan belajar dan tumbuh, bersama mereka yang memiliki tujuan serupa.
                    </p>
                </div>
                <div ref={cardContent}  className="w-full h-fit lg:flex lg:justify-between lg:items-center lg:flex-wrap">
                    {listData.map((item) => {
                        return (
                            <div key={item.key} className="w-full lg:w-[30%] h-fit lg:h-[50vh] group rounded-[20px] bg-parsley-300 p-4 mb-6">
                                <div className="w-full h-[20vh] rounded-xl bg-gray-500 overflow-hidden mb-3">
                                    <img src={item.image} alt="" className="w-full h-full object-cover"/>
                                </div>
                                <div className="w-full h-fit">
                                    <p className="font-montserrat font-bold text-parsley-950 text-[20px] text-center">{item.titleCard}</p>
                                    <p className="font-montserrat text-parsley-800 text-[16px] text-center">{item.messageCard}</p>
                                </div>

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
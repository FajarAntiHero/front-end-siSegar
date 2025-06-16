import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {CommunityCard} from "../component/blogCard"
import FooterContainer from "../component/footer";
import NavbarContainer from "../component/navbar";
import jalan_1 from "../assets/images/Content Web SiSegar/jalan_1.jpg";
import { ShowError, ShowLoading, ShowResult } from '../services/processData';

function Hero(){
    return (
        <>
            <div className={`w-full h-[90vh] relative flex items-center justify-center p-[3rem]`}>
                <img src={jalan_1} alt="" className="h-full w-full object-cover absolute top-0 bottom-0 left-0 right-0"/>
                <div className="relative z-20 w-full h-[80%] md:w-[80%] lg:h-[70&] p-4 md:p-6 lg:p-8 bg-white/15 backdrop-blur-sm rounded-xl shadow-lg border-[2px] border-white/15 text-white flex flex-col items-center justify-center overflow-hidden transform transition-all duration-300 hover:scale-[1.01] cursor-pointer">
                    <p className="font-montserrat font-bold text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] text-center mb-4 text-parsley-950">Berkumpul, Beraksi, Berdampak</p>
                    <p className="font-montserrat text-[1rem] md:text-[1.3rem] lg:text-[1.5rem] text-parsley-900 text-center">Temukan komunitas peduli lingkungan di dekatmu. Satukan visi, kolaborasi, dan ciptakan gerakan nyata untuk perubahan positif.</p>
                </div>

            </div>
        </>
    )
}

function Content(){

    const [komunitas, setKomunitas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchKomunitas = async () => {
        try {
            // Panggil endpoint API publik untuk daftar Komunitas
            // Sesuaikan URL jika backend Anda tidak berjalan di port 8000 atau domain berbeda
            const response = await axios.get('http://127.0.0.1:8000/api/komunitas/public/');
            setKomunitas(response.data.results);
        } catch (err) {
            setError(err.message);
            console.error("Error fetching public Blog:", err);
        } finally {
            setLoading(false);
        }
        };

        fetchKomunitas();
    }, []); // Array kosong berarti useEffect hanya berjalan sekali setelah render pertama

    return (
        <>
            <div className="w-full h-fit p-6 bg-parsley-200">
                <div className="w-full md:w-[75%] lg:w-[70%] md:mx-auto h-fit">
                    <div className="w-full h-[20vh] mb-6">
                        <form action="" className="w-full h-full flex flex-col justify-center">
                            <input type="text" name="" className="w-full lg:w-[80%] h-fit text-[24px] lg:mx-auto p-4 lg:py-2  mb-4 font-montserrat bg-parsley-50 text-parsley-600 rounded-2xl placeholder:font-bold placeholder:text-parsley-600" placeholder="Cari Nama Komunitas"/>
                            <button className="w-full lg:w-[80%] h-fit py-3 lg:py-2 lg:mx-auto text-[20px] font-bold font-montserrat bg-parsley-700 text-parsley-50 rounded-2xl">Cari Komunitas</button>
                        </form>
                    </div>
                    {loading ? (
                        <ShowLoading />
                    ) : error ? (
                        <ShowError message={error} />
                    ) : (
                        <ShowResult data={komunitas} nameCard={"komunitas"} />
                    )}
                </div>
            </div>
        </>
    )   
}

export default function Komunitas(){
    return (
        <>
            <NavbarContainer/>
            <Hero/>
            <Content/>
            <FooterContainer/>
        </>
    )
}
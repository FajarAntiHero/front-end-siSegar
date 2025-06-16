import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'; // useParams untuk mendapatkan ID dari URL
import axios from 'axios';
import FooterContainer from "../component/footer"
import NavbarContainer from "../component/navbar"
import jalan_1 from "../assets/images/Content Web SiSegar/jalan_1.jpg";
import clock from "../assets/images/assest png/clock.png"
import pin from "../assets/images/assest png/pin.png"
import { AuthorDetail, IconApp } from "../component/utils";

function Content(){
    const { id } = useParams(); // Mengambil 'id' dari parameter URL (misal: /events-public/123)
    const [acara, setAcara] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAcaraDetail = async () => {
        try {
            // Panggil endpoint API publik untuk detail acara
            const response = await axios.get(`http://127.0.0.1:8000/api/acara/public/${id}/`);
            setAcara(response.data);
        } catch (err) {
            setError(err);
            console.error(`Error fetching event with ID ${id}:`, err);
        } finally {
            setLoading(false);
        }
        };

        fetchAcaraDetail();
    }, [id]); // useEffect akan dijalankan ulang jika 'id' di URL berubah

    if (loading) return <div>Loading event details...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!event) return <div>Event not found.</div>;

    return (
        <>
            <div className="w-full h-fit bg-parsley-50">
                <div className="w-full md:w-[80%] lg:w-[70%] h-fit md:mx-auto p-4 pt-6">
                    <div className="w-full h-[20vh] md:h-[25vh] lg:h-[30vh] rounded-xl overflow-hidden mb-6">
                        <img src={jalan_1} alt="Gambar Blog" className="w-full h-full object-cover"/>
                    </div>
                    <div className="w-full h-fit mb-6">
                        <div className="w-fit h-fit mx-auto relative mb-4 md:mb-5 lg:mb-6">
                            <p className="font-montserrat cursor-pointer text-parsley-700 font-bold text-[20px] md:text-[24px] lg:[28px] text-center before:content-[''] before:w-full before:h-0.5 before:bg-parsley-600 before:scale-x-0 hover:before:scale-x-100 before:transition-all before:duration-[0.5s] before:absolute before:bottom-0">{acara.name_event}</p>
                        </div>

                        <div className="w-full h-fit mb-4">
                            <p className="font-montserrat text-parsley-900 font-bold text-[16px] md:text-[18px] lg:text-[20px] mb-2">Deskripsi Acara</p>
                            <div className="w-full h-fit min-h-[10vh] rounded-xl bg-parsley-200 overflow-hidden relative before:content-[''] before:absolute before:bg-parsley-700 before:w-2 before:h-full before:left-0 before:top-0 p-4 lg:p-5">
                                <p className="font-montserrat text-parsley-600 text-[12px] md:text-[14px] lg:[26px]">{acara.description}</p>
                            </div>
                        </div>
                        <div className="w-full h-fit mb-4 md:flex md:justify-between">
                            <div className="w-full md:w-[45%] h-fit mb-4 md:mb-0">
                                <p className="font-montserrat text-parsley-900 font-bold text-[16px] md:text-[18px] lg:text-[20px] mb-2">Waktu Acara</p>
                                <div className="w-full h-fit min-h-[10vh] rounded-xl bg-parsley-200 flex justify-center items-center overflow-hidden relative before:content-[''] before:absolute before:bg-parsley-700 before:w-2 before:h-full before:left-0 before:top-0 p-4 lg:p-5">
                                    <img src={clock} alt="clock" className="w-[3rem] h-[3rem] z-10 absolute right-[-12px] bottom-[-12px] -rotate-12" />
                                    <p className="font-montserrat font-bold text-parsley-600 text-[16px] md:text-[20px] lg:[24px] text-center">{acara.time_event}</p>
                                </div>
                            </div>
                            <div className="w-full md:w-[45%] h-fit">
                                <p className="font-montserrat text-parsley-900 font-bold text-[16px] md:text-[18px] lg:text-[20px] mb-2">Waktu Pendaftaran</p>
                                <div className="w-full h-fit min-h-[10vh] rounded-xl bg-parsley-200 flex justify-center items-center overflow-hidden relative before:content-[''] before:absolute before:bg-parsley-700 before:w-2 before:h-full before:left-0 before:top-0 p-4 lg:p-5">
                                    <img src={pin} alt="pin" className="w-[3rem] h-[3rem] z-10 absolute right-[-5px] bottom-[-2px] -rotate-6" />
                                    <p className="font-montserrat font-bold text-parsley-600 text-[16px] md:text-[20px] lg:[24px] text-center">{acara.time_registration}</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-fit mb-4">
                            <p className="font-montserrat font-bold text-parsley-900 text-[16px] md:text-[18px] lg:text-[20px] mb-2">Tempat Acara</p>
                            <div className="w-full h-fit min-h-[10vh] rounded-xl bg-parsley-200 overflow-hidden relative before:content-[''] before:absolute before:bg-parsley-700 before:w-2 before:h-full before:left-0 before:top-0 p-4 lg:p-5">
                                <p className="font-montserrat text-parsley-600 text-[12px] md:text-[14px] lg:[16px]">{acara.place_event}</p>
                            </div>
                        </div>
                        <div className="w-full h-fit mb-4">
                            <p className="font-montserrat font-bold text-parsley-900 text-[16px] md:text-[18px] lg:text-[20px] mb-2">Penyelenggara Acara</p>
                            <div className="w-full h-fit min-h-[10vh] rounded-xl bg-parsley-200 overflow-hidden relative before:content-[''] before:absolute before:bg-parsley-700 before:w-2 before:h-full before:left-0 before:top-0 p-4 lg:p-5">
                                <p className="font-montserrat text-parsley-600 text-[12px] md:text-[14px] lg:[16px]">{acara.event_coordinator}</p>
                            </div>
                        </div>
                        <div className="w-full h-fit mb-4">
                            <p className="font-montserrat font-bold text-parsley-900 text-[16px] md:text-[18px] lg:text-[20px] mb-2">Kriteria Peserta</p>
                            <div className="w-full h-fit min-h-[10vh] rounded-xl bg-parsley-200 overflow-hidden relative before:content-[''] before:absolute before:bg-parsley-700 before:w-2 before:h-full before:left-0 before:top-0 p-4 lg:p-5">
                                <p className="font-montserrat text-parsley-600 text-[12px] md:text-[14px] lg:[16px]">{acara.criteria_member}</p>
                            </div>
                        </div>
                        <div className="w-full h-fit mb-4">
                            <p className="font-montserrat font-bold text-parsley-900 text-[16px] md:text-[18px] lg:text-[20px] mb-2">Kontak Admin</p>
                            <div className="w-full h-fit min-h-[10vh] rounded-xl bg-parsley-200 overflow-hidden relative before:content-[''] before:absolute before:bg-parsley-700 before:w-2 before:h-full before:left-0 before:top-0 p-4 lg:p-5">
                                <p className="font-montserrat text-parsley-600 text-[12px] md:text-[14px] lg:[16px]">{acara.contact_admin}</p>
                            </div>
                        </div>
                        <div className="w-full h-fit mb-6">
                            <p className="font-montserrat font-bold text-parsley-900 text-[16px] md:text-[18px] lg:text-[20px] mb-2 text-center">Sosial Media Acara</p>
                            <div className="w-full h-fill md:flex md:flex-wrap md:justify-center bg-parsley-200 rounded-xl p-2 md:p-4 relative overflow-hidden">
                                <img src={clock} alt="clock" className="w-[5rem] h-[5rem] absolute right-[-12px] bottom-[-12px]" />
                                <div className="w-[60%] md:w-[30%] lg:w-[20%] h-fit bg-parsley-300 rounded-xl p-2 md:p-3 lg:p-4 m-auto md:mx-3 mb-4 lg:mb-0">
                                    <div className="w-full min-h-[8vh] rounded-xl flex justify-center items-center">
                                        <IconApp width={"w-[2.5rem] md:w-[3rem] lg:w-[3.5rem]"} height={"h-[2.5rem] md:h-[3rem] lg:h-[3.5rem]"} nameIcon={"fa-instagram"} sizeIcon={"text-[16px] md:text-[1.2rem] lg:text-[1.5rem]"}/>
                                    </div>
                                    <p className="font-montserrat font-bold text-[12px] md:text-[14px] lg:text-[16px] text-parsley-700 text-center">
                                        Instagram
                                    </p>
                                </div>
                                <div className="w-[60%] md:w-[30%] lg:w-[20%] h-fit bg-parsley-300 rounded-xl p-2 md:p-3 lg:p-4 m-auto md:mx-3 mb-4 lg:mb-0">
                                    <div className="w-full min-h-[8vh] rounded-xl flex justify-center items-center">
                                        <IconApp width={"w-[2.5rem] md:w-[3rem] lg:w-[3.5rem]"} height={"h-[2.5rem] md:h-[3rem] lg:h-[3.5rem]"} nameIcon={"fa-facebook"} sizeIcon={"text-[16px] md:text-[1.2rem] lg:text-[1.5rem]"}/>
                                    </div>
                                    <p className="font-montserrat font-bold text-[12px] md:text-[14px] lg:text-[16px] text-parsley-700 text-center">
                                        Facebook
                                    </p>
                                </div>
                                <div className="w-[60%] md:w-[30%] lg:w-[20%] h-fit bg-parsley-300 rounded-xl p-2 md:p-3 lg:p-4 m-auto md:mx-3  mb-4 lg:mb-0">
                                    <div className="w-full min-h-[8vh] rounded-xl flex justify-center items-center">
                                        <IconApp width={"w-[2.5rem] md:w-[3rem] lg:w-[3.5rem]"} height={"h-[2.5rem] md:h-[3rem] lg:h-[3.5rem]"} nameIcon={"fa-twitter"} sizeIcon={"text-[16px] md:text-[1.2rem] lg:text-[1.5rem]"}/>
                                    </div>
                                    <p className="font-montserrat font-bold text-[12px] md:text-[14px] lg:text-[16px] text-parsley-700 text-center">
                                        Twitter
                                    </p>
                                </div>
                            </div>
                        </div>
                        <AuthorDetail author={acara.owner_event} timePublished={acara.created_at_event}/>
                    </div>
                </div>
            </div>
        </>
    )
}

function EventPages(){
    return (
        <>
            <NavbarContainer/>
            <Content/>
            <FooterContainer/>
        </>
    )
}
export default EventPages
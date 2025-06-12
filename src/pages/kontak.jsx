import { useState } from "react";
import FooterContainer from "../component/footer";
import NavbarContainer from "../component/navbar";
import axios from "axios";

function Hero(){
    return (
        <>
            <div className="w-full h-[90vh]">
                <div className="container p-6 h-full flex"></div>
            </div>
        </>
    )
}

function KontakForm(){

    const [nameUser, setNameUser] = useState("")
    const [titleUser, setTitleUser] = useState("")
    const [emailUser, setEmailUser] = useState("")
    const [messageUser, setMessageUser] = useState("")

    const yearNow = new Date()

    const handleSubmit = async (e) => {

        e.preventDefault()

        const SERVICEID = "service_7glj89c"
        const TEMPLATEID = "template_hbdacqu"
        const PUBLICKEY = "7TYsrwnQD6VpfbCj_"
        
        const dataEmail = {
            service_id: SERVICEID,
            template_id: TEMPLATEID,
            user_id: PUBLICKEY,
            template_params:{
                name_user: nameUser,
                judul_email : titleUser,
                akun_email: emailUser,
                pesan_email: messageUser,
                to_name: "SiSegar Team",
                tahun_sekarang: yearNow.getFullYear()
            }
        }

        try {
            const respond = await axios.post("https://api.emailjs.com/api/v1.0/email/send", dataEmail);
            console.log(respond.data);
            setNameUser("")
            setTitleUser("")
            setEmailUser("")
            setMessageUser("")
            
        } catch(error) {
            console.error(error);
        }

    }


    return (
        <>
            <div className="w-full h-fit">
                <div className="container h-fit p-6">
                    <div className="w-full h-fit mt-[3rem] mb-[2rem]">
                        <p className="font-montserrat text-center mb-[1rem] font-bold text-parsley-950 text-[28px]">
                            Hubungi Tim Kami
                        </p>
                        <p className="font-montserrat text-center text-parsley-600 text-[16px]">
                            Saatnya mewujudkan lingkungan sehat impianmu dengan belajar dan tumbuh, bersama mereka yang memiliki tujuan serupa.
                        </p>
                    </div>
                    <div className="h-fit w-full bg-parsley-300 rounded-2xl">
                        <form onSubmit={handleSubmit} className="w-full h-fit p-5 box-border">
                            <div className="w-full h-[10vh] mb-3">
                                <label htmlFor="name-user" className="font-montserrat font-bold text-parsley-600 text-[16px] pl-3">Nama Pengguna</label>
                                <input 
                                    type="text" 
                                    id="name-user" 
                                    name="name-user" 
                                    placeholder="Nama Kamu"
                                    value={nameUser}
                                    onChange={(e) => setNameUser(e.target.value)} 
                                    className="block rounded-2xl w-full h-[calc(100%_-_36px)] bg-parsley-50 px-5 font-montserrat font-bold text-[20px] text-parsley-600 placeholder:text-parsley-600/50 placeholder:font-bold placeholder:font-montserrat"/>
                            </div>
                            <div className="w-full h-[10vh] mb-3">
                                <label htmlFor="judul-email" className="font-montserrat font-bold text-parsley-600 text-[16px] pl-3">Judul Email</label>
                                <input 
                                    type="text" 
                                    id="judul-email" 
                                    name="judul-email" 
                                    placeholder="Judul Email Kamu"
                                    value={titleUser}
                                    onChange={(e) => setTitleUser(e.target.value)} 
                                    className="block rounded-2xl w-full h-[calc(100%_-_36px)] bg-parsley-50 px-5 font-montserrat font-bold text-[20px] text-parsley-600 placeholder:text-parsley-600/50 placeholder:font-bold placeholder:font-montserrat"/>
                            </div>
                            <div className="w-full h-[10vh] mb-3">
                                <label htmlFor="akun-email" className="font-montserrat font-bold text-parsley-600 text-[16px] pl-3">Akun Email</label>
                                <input 
                                    type="text" 
                                    id="akun-email" 
                                    name="akun-email" 
                                    placeholder="Nama Akun Email Kamu"
                                    value={emailUser} 
                                    onChange={(e) => setEmailUser(e.target.value)}
                                    className="block rounded-2xl w-full h-[calc(100%_-_36px)] bg-parsley-50 px-5 font-montserrat font-bold text-[20px] text-parsley-600 placeholder:text-parsley-600/50 placeholder:font-bold placeholder:font-montserrat"/>
                            </div>
                            <div className="w-full h-[45vh] mb-5">
                                <label htmlFor="pesan-email" className="font-montserrat font-bold text-parsley-600 text-[16px] pl-3">Pesan Email</label>
                                <textarea 
                                    name="pesan-email" 
                                    id="pesan-email" 
                                    placeholder="Isi Email Kamu.."
                                    value={messageUser}
                                    onChange={(e) => setMessageUser(e.target.value)}
                                    className="block rounded-2xl w-full h-[calc(100%_-_36px)] bg-parsley-50 font-montserrat p-5 text-[20px] text-parsley-600 placeholder:text-parsley-600/50 placeholder:font-bold placeholder:font-montserrat"></textarea>
                            </div>
                            <button type="submit" className="w-full h-[5vh] rounded-2xl cursor-pointer bg-parsley-800 text-[16px] text-parsley-100 font-montserrat font-bold text-center">
                                Kirim Email
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default function Kontak(){
    return (
        <>
            <NavbarContainer/>
            <Hero/>
            <KontakForm/>
            <FooterContainer/>
        </>
    )
}
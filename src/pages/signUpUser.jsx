// import { Link } from "react-router";
// import { InputComponent, LogoSiSegar } from "../component/utils";
// import { ButtonComponent } from "../component/button";
// import laut_3 from "../assets/images/Content Web SiSegar/laut_3.jpg";

// export default function SignUpUser(){
//     return (
//         <>
//             <div className="w-full h-[100vh] min-h-screen overflow-scroll px-6 bg-parsley-200 flex justify-center items-center">
//                 <div className="w-full md:w-[75%] lg:w-[40%] md:mx-auto h-fit">
//                     <div className="w-full h-fit rounded-3xl bg-parsley-50 mb-3 p-4 md:p-6">
//                         <Link to={"/"} className="cursor-pointer">
//                             <div className="w-full h-[5vh] flex justify-center items-center mb-4">
//                                 <LogoSiSegar/>
//                                 <p className="font-montserrat font-bold text-2xl text-parsley-950">siSegar</p>
//                             </div>
//                         </Link>
//                         <div className="w-full h-[15vh] mb-4 rounded-[20px] overflow-hidden bg-gray-600">
//                             <img src={laut_3} alt="Laut" className="w-full h-full object-cover"/>
//                         </div>
//                         <div className="w-full h-fit">
//                             <p className="font-montserrat font-bold text-parsley-600 text-center text-[16px] mb-4 lg:mb-2">Buat Akun</p>
//                             <div className="w-full h-fit">
//                                 <form action="" className="flex flex-col items-center">
//                                     <InputComponent nameLabel={"Nama Pengguna"} idForm={"username"} typeInput={"text"} placeholder={"Nama Pengguna Akun"} marginForm={"mb-4"} bgInput={"bg-parsley-200"} isRequired={true}/>
//                                     <InputComponent nameLabel={"Email Pengguna"} idForm={"email"} typeInput={"text"} placeholder={"Email Pengguna Akun"} marginForm={"mb-4"} bgInput={"bg-parsley-200"} isRequired={true}/>
//                                     <InputComponent nameLabel={"Kata Sandi"} idForm={"password"} typeInput={"password"} placeholder={"Kata Sandi Akun"} marginForm={"mb-4"} bgInput={"bg-parsley-200"} isRequired={true}/>
//                                     <InputComponent nameLabel={"Konfirmasi Kata Sandi"} idForm={"password2"} typeInput={"password"} placeholder={"Kata Sandi Akun"} marginForm={"mb-6"} bgInput={"bg-parsley-200"} isRequired={true}/>
//                                     <ButtonComponent 
//                                         textButton={"Buat Akun"} 
//                                         colorText={"text-parsley-50"} 
//                                         margin={"mb-6 lg:mb-4"} 
//                                         bgButton={"bg-parsley-800"} 
//                                         borderRadius={"rounded-[20px]"}
//                                         padding={"py-4 px-6 lg:py-2"}
//                                         textSize={"text-[16px]"}
//                                     />
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                     <p className="font-montserrat text-[16px] text-parsley-600 text-center">Sudah Punya Akun? <Link to={"/masuk-akun"} className="font-bold">Masuk</Link></p>
//                 </div>
//             </div>
//         </>
//     )
// }

import { Link } from "react-router-dom"; // Pastikan ini 'react-router-dom' bukan hanya 'react-router'
import { InputComponent, LogoSiSegar } from "../component/utils";
import { ButtonComponent } from "../component/button";
import laut_3 from "../assets/images/Content Web SiSegar/laut_3.jpg";

export default function SignUpUser(){
    return (
        <>
            {/* Perbaikan utama di sini:
                - h-[100vh] diubah menjadi min-h-screen untuk fleksibilitas tinggi.
                  min-h-screen akan memastikan elemen setidaknya setinggi viewport,
                  tapi akan memanjang jika kontennya lebih banyak (misalnya saat rotasi ke landscape).
                - overflow-y-auto memastikan scroll hanya di sumbu Y jika konten melebihi.
                  (Anda sudah pakai overflow-scroll, yang juga oke, tapi overflow-y-auto lebih spesifik)
                - px-6 dan py-4 md:py-8 untuk padding responsif agar ada ruang di atas/bawah
                  terutama di mode landscape yang lebih pendek.
                - items-center dan justify-center tetap untuk menengahkan konten secara default.
            */}
            <div className="w-full min-h-screen overflow-y-auto px-6 py-4 md:py-8 bg-parsley-200 flex justify-center items-center">
                <div className="w-full md:w-[75%] lg:w-[40%] md:mx-auto h-fit">
                    <div className="w-full h-fit rounded-3xl bg-parsley-50 mb-3 p-4 md:p-6">
                        <Link to={"/"} className="cursor-pointer">
                            <div className="w-full h-[5vh] flex justify-center items-center mb-4">
                                <LogoSiSegar/>
                                <p className="font-montserrat font-bold text-2xl text-parsley-950">siSegar</p>
                            </div>
                        </Link>
                        {/* Tinggi gambar latar di sini (h-[15vh]) mungkin perlu disesuaikan di mode landscape
                            jika terlihat terlalu pendek. Bisa menggunakan h-24 atau h-32 dan biarkan responsif
                            menggunakan kelas md:h-40 atau lg:h-48 jika ingin lebih besar di layar desktop.
                            Namun, karena ini adalah gambar dekoratif di dalam form, h-[15vh] mungkin masih oke.
                            Jika ingin lebih fleksibel, bisa pakai tinggi fixed/rem atau height responsif.
                        */}
                        <div className="w-full h-[15vh] mb-4 rounded-[20px] overflow-hidden bg-gray-600">
                            <img src={laut_3} alt="Laut" className="w-full h-full object-cover"/>
                        </div>
                        <div className="w-full h-fit">
                            <p className="font-montserrat font-bold text-parsley-600 text-center text-[16px] mb-4 lg:mb-2">Buat Akun</p>
                            <div className="w-full h-fit">
                                <form action="" className="flex flex-col items-center">
                                    <InputComponent nameLabel={"Nama Pengguna"} idForm={"username"} typeInput={"text"} placeholder={"Nama Pengguna Akun"} marginForm={"mb-4"} bgInput={"bg-parsley-200"} isRequired={true}/>
                                    <InputComponent nameLabel={"Email Pengguna"} idForm={"email"} typeInput={"text"} placeholder={"Email Pengguna Akun"} marginForm={"mb-4"} bgInput={"bg-parsley-200"} isRequired={true}/>
                                    <InputComponent nameLabel={"Kata Sandi"} idForm={"password"} typeInput={"password"} placeholder={"Kata Sandi Akun"} marginForm={"mb-4"} bgInput={"bg-parsley-200"} isRequired={true}/>
                                    <InputComponent nameLabel={"Konfirmasi Kata Sandi"} idForm={"password2"} typeInput={"password"} placeholder={"Kata Sandi Akun"} marginForm={"mb-6"} bgInput={"bg-parsley-200"} isRequired={true}/>
                                    <ButtonComponent
                                        textButton={"Buat Akun"}
                                        colorText={"text-parsley-50"}
                                        margin={"mb-6 lg:mb-4"}
                                        bgButton={"bg-parsley-800"}
                                        borderRadius={"rounded-[20px]"}
                                        padding={"py-4 px-6 lg:py-2"}
                                        textSize={"text-[16px]"}
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                    <p className="font-montserrat text-[16px] text-parsley-600 text-center">Sudah Punya Akun? <Link to={"/masuk-akun"} className="font-bold">Masuk</Link></p>
                </div>
            </div>
        </>
    )
}
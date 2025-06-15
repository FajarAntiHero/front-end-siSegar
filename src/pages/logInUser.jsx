import { Link } from "react-router";
import { InputComponent, LogoSiSegar } from "../component/utils";
import { ButtonComponent } from "../component/button";
import daun_tanaman from "../assets/images/Content Web SiSegar/daun_tanaman.jpg";

export default function LogInUser(){
    return (
        <>
            <div className="w-full h-[100vh] px-6 bg-parsley-200 flex justify-center items-center">
                <div className="w-full md:w-[80%] lg:w-[40%] md:mx-auto h-fit">
                    <div className="w-full h-fit rounded-3xl bg-parsley-50 mb-3 p-4 md:p-6">
                        <Link to={"/"} className="cursor-pointer">
                            <div className="w-full h-[5vh] flex justify-center items-center mb-4">
                                <LogoSiSegar/>
                                <p className="font-montserrat font-bold text-2xl text-parsley-950">siSegar</p>
                            </div>
                        </Link>
                        <div className="w-full h-[15vh] mb-4 rounded-[20px] overflow-hidden bg-gray-600">
                            <img src={daun_tanaman} alt="Daun Tanaman" className="w-full h-full object-cover"/>
                        </div>
                        <div className="w-full h-fit">
                            <p className="font-montserrat font-bold text-parsley-600 text-center text-[16px] mb-4 lg:mb-2">Masuk</p>
                            <div className="w-full h-fit">
                                <form action="" className="flex flex-col items-center">
                                    <InputComponent nameLabel={"Nama Pengguna"} idForm={"username"} typeInput={"text"} placeholder={"Nama Pengguna Akun"} marginForm={"mb-4"} bgInput={"bg-parsley-200"} isRequired={true}/>
                                    <InputComponent nameLabel={"Kata Sandi"} idForm={"password"} typeInput={"password"} placeholder={"Kata Sandi Akun"} marginForm={"mb-6"} bgInput={"bg-parsley-200"} isRequired={true}/>
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
                    <p className="font-montserrat text-[16px] text-parsley-600 text-center">Belum Punya Akun? <Link to={"/daftar-akun"} className="font-bold">Daftar Akun</Link></p>
                </div>
            </div>
        </>
    )
}
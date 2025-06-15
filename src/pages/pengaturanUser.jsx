import { NavbarDashboard } from "../component/navbar";
import { MenuDashboard } from "../component/utils";

export default function SettingUser(){
    return (
        <>
            <div className="w-full h-fit p-4">
                <NavbarDashboard/>
                <div className="w-full h-[calc(100vh_-_16vh_-_64px)] p-4 md:p-6 lg:p-8 bg-parsley-300 rounded-3xl mb-4 flex flex-col lg:flex-row items-center justify-between">
                    <div className="w-[90%] md:w-[80%] lg:w-[50%] h-[45%] lg:h-full flex justify-center items-center">
                        <p className="font-montserrat text-3xl md:text-[1.5rem] lg:text-[2rem] font-bold bg-gradient-to-r from-parsley-950 via-parsley-700 to-parsley-500 text-transparent bg-clip-text">Pengaturan Akun</p>
                    </div>
                    <div className="w-[90%] md:w-[80%] lg:w-[50%] h-[55%] lg:h-full flex flex-col items-center justify-between">
                        <div className="w-full h-[80%] bg-parsley-50 rounded-2xl flex flex-col justify-between p-3">
                            <div className="w-full h-[32%] mb-6">
                                <p className="text-[12px] md:text-[14px] font-montserrat font-bold text-parsley-600 pl-4">Nama Pengguna</p>
                                <div className="w-full h-[80%] bg-parsley-200 rounded-xl flex justify-center items-center">
                                    <p className="text-[16px] font-montserrat font-bold text-parsley-900">Pengguna Testing</p>
                                </div>
                            </div>
                            <div className="w-full h-[32%] mb-6">
                                <p className="text-[12px] md:text-[14px] font-montserrat font-bold text-parsley-600 pl-4">Alamat Email Pengguna</p>
                                <div className="w-full h-[80%] bg-parsley-200 rounded-xl flex justify-center items-center">
                                    <p className="text-[16px] font-montserrat font-bold text-parsley-900">Testing@gmai.com</p>
                                </div>
                            </div>
                            <div className="w-full h-[32%] mb-6">
                                <p className="text-[12px] md:text-[14px] font-montserrat font-bold text-parsley-600 pl-4">Kata Sandi Akun</p>
                                <div className="w-full h-[80%] bg-parsley-200 rounded-xl flex justify-center items-center">
                                    <p className="text-[16px] font-montserrat font-bold text-parsley-900">12345</p>
                                </div>
                            </div>
                        </div>
                        <button className="w-full cursor-pointer h-[15%] bg-guardsman-red-500 text-[24px] text-guardsman-red-50 rounded-2xl text-center font-montserrat font-bold">Keluar</button>
                    </div>
                </div>
                <MenuDashboard bgMenu={"bg-parsley-300"}/>
            </div>
        </>
    )
}
import { NavbarDashboard } from "../component/navbar";
import { MenuDashboard } from "../component/utils";

export default function MainDashboard(){
    return (
        <>
            <div className="w-full h-fit p-4">
                <NavbarDashboard/>
                <div className="w-full h-[calc(100vh_-_16vh_-_64px)] p-4 md:p-6 lg:p-8 bg-parsley-300 rounded-3xl mb-4 flex flex-col items-center justify-between">
                    <div className="w-[90%] md:w-[80%] lg:w-[60%] h-[60%] flex justify-center items-center">
                        <p className="font-montserrat text-3xl md:text-[1.5rem] lg:text-[2rem] font-bold bg-gradient-to-r from-parsley-950 via-parsley-800 to-parsley-500 text-transparent bg-clip-text">Halo, Pengguna!</p>
                    </div>
                    <div className="w-[90%] md:w-[80%] lg:w-[60%] h-[25%] flex justify-between">
                        <div className="w-[48%] h-full bg-parsley-50 rounded-2xl"></div>
                        <div className="w-[48%] h-full bg-parsley-50 rounded-2xl"></div>
                    </div>
                    <div className="w-[90%] md:w-[80%] lg:w-[60%] h-[10%] bg-parsley-50 rounded-2xl"></div>
                </div>
                <MenuDashboard bgMenu={"bg-parsley-300"}/>
            </div>
        </>
    )
}
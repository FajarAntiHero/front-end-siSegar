import { NavbarDashboard } from "../component/navbar";
import { MenuDashboard } from "../component/utils";

export default function MainDashboard(){
    return (
        <>
            <div className="w-full h-fit p-4">
                <NavbarDashboard/>
                <div className="w-full h-[calc(100vh_-_16vh_-_64px)] p-4 bg-parsley-300 rounded-3xl mb-4 flex flex-col justify-between">
                    <div className="w-full h-[60%] flex justify-center items-center">
                        <p className="font-montserrat text-3xl font-bold bg-gradient-to-r from-parsley-950 via-parsley-700 to-parsley-500 text-transparent bg-clip-text">Halo, Pengguna!</p>
                    </div>
                    <div className="w-full h-[25%] flex justify-between">
                        <div className="w-[48%] h-full bg-parsley-50 rounded-2xl"></div>
                        <div className="w-[48%] h-full bg-parsley-50 rounded-2xl"></div>
                    </div>
                    <div className="w-full h-[10%] bg-parsley-50 rounded-2xl"></div>
                </div>
                <MenuDashboard bgMenu={"bg-parsley-300"}/>
            </div>
        </>
    )
}
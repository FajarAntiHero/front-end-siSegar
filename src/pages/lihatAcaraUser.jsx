import { NavbarDashboard } from "../component/navbar";
import { CardDashboard, MenuDashboard } from "../component/utils";

export default function ShowEventUser(){
    return (
        <>
            <div className="w-full h-fit p-[16px]">
                <NavbarDashboard/>
                <div className="w-full h-[calc(100vh_-_8vh_-_42px)] lg:h-[calc(100vh_-_8vh_-_45px)] bg-parsley-300 rounded-3xl lg:flex">
                    <div className="w-full md:w-[80%] lg:w-[50%] md:mx-auto h-[30%] lg:h-full flex justify-center items-center">
                        <p className="font-montserrat text-3xl md:text-[2.5rem] font-bold bg-gradient-to-r from-parsley-950 via-parsley-700 to-parsley-500 text-transparent bg-clip-text">Acara Kamu</p>
                    </div>
                    <div className="w-full md:w-[80%] lg:w-[50%] md:mx-auto h-[70%] lg:h-full p-4 lg:flex lg:flex-col lg:items-center lg:justify-center">
                        <div className="w-full lg:w-[80%] h-[20%] px-4 flex justify-center items-center">
                            <MenuDashboard bgMenu={"bg-parsley-50"}/>
                        </div>
                        <div className="w-full lg:w-[80%] h-[80%] rounded-2xl overflow-y-scroll">
                            <CardDashboard/>
                            <CardDashboard/>
                            <CardDashboard/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
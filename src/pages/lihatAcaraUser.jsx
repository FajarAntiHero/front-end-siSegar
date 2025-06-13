import { NavbarDashboard } from "../component/navbar";
import { CardCommunityDashboard, MenuDashboard } from "../component/utils";

export default function ShowEventUser(){
    return (
        <>
            <div className="w-full h-fit p-4">
                <NavbarDashboard/>
                <div className="w-full h-fit bg-parsley-300 rounded-3xl">
                    <div className="w-full h-[20vh] flex justify-center items-center">
                        <p className="font-montserrat text-3xl font-bold bg-gradient-to-r from-parsley-950 via-parsley-700 to-parsley-500 text-transparent bg-clip-text">Acara Kamu</p>
                    </div>
                    <div className="w-full h-[calc(100vh_-_20vh_-_8vh_-_46px)] p-4">
                        <div className="w-full h-[20%] px-4">
                            <MenuDashboard bgMenu={"bg-parsley-50"}/>
                        </div>
                        <div className="w-full h-[80%] rounded-2xl overflow-y-scroll">
                            <CardCommunityDashboard/>
                            <CardCommunityDashboard/>
                            <CardCommunityDashboard/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
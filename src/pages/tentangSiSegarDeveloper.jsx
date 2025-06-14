import FooterContainer from "../component/footer";
import NavbarContainer from "../component/navbar";

function Content(){

    const listData = [
        {image: '', titleCard: "siSegar Komunitas", messageCard: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis recusandae debitis quaerat?"},
        {image: '', titleCard: "siSegar Acara", messageCard: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis recusandae debitis quaerat?"},
        {image: '', titleCard: "siSegar Pintar", messageCard: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis recusandae debitis quaerat?"}
    ]
    return (
        <div className="w-full h-fit bg-parsley-50">
            <div className="container h-fit p-6">
                <div className="w-full h-fit mt-[3rem] mb-[2rem]">
                    <p className="font-montserrat text-center mb-[1rem] font-bold text-parsley-950 text-[28px]">siSegar Membagikan Ide Hebatmu</p>
                    <p className="font-montserrat text-center text-parsley-600 text-[16px]">
                        Saatnya mewujudkan lingkungan sehat impianmu dengan belajar dan tumbuh, bersama mereka yang memiliki tujuan serupa.
                    </p>
                </div>
                <div className="w-full h-fit">
                    {listData.map((item) => {
                        return (
                            <div className="w-full h-fit rounded-[20px] bg-parsley-300 p-[8px] mb-6">
                                <div className="w-full h-[20vh] rounded-xl bg-gray-500 overflow-hidden mb-3">
                                    <img src={item.image} alt="" className="w-full h-full object-cover"/>
                                </div>
                                <p className="font-montserrat font-bold text-parsley-950 text-[16px] text-center">{item.titleCard}</p>
                                <p className="font-montserrat text-parsley-800 text-[12px] text-center">{item.messageCard}</p>

                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default function SiSegarDeveloper(){
    return (
        <>
            <NavbarContainer/>
            <Content/>
            <FooterContainer/>
        </>
    )
}
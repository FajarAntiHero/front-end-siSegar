import CardContainer from "../component/comunitycard";
import FooterContainer from "../component/footer";
import NavbarContainer from "../component/navbar";
import jalan_1 from "../assets/images/Content Web SiSegar/jalan_1.jpg";

function Hero(){
    return (
        <>
            <div className={`w-full h-[90vh] relative flex items-center justify-center p-[3rem]`}>
                <img src={jalan_1} alt="" className="h-full w-full object-cover absolute top-0 bottom-0 left-0 right-0"/>
                <div className="relative z-20 w-full h-[50%] bg-white/15 backdrop-blur-sm rounded-xl shadow-lg border-[2px] border-white/15 p-6 text-white flex flex-col items-center justify-center overflow-hidden transform transition-all duration-300 hover:scale-[1.01] cursor-pointer">

                </div>

            </div>
        </>
    )
}

function Content(){
    return (
        <>
            <div className="w-full h-fit p-6 bg-parsley-200">
                <div className="w-full md:w-[75%] lg:w-[70%] md:mx-auto h-fit">
                    <div className="w-full h-[20vh]">
                        <form action="" className="w-full h-full flex flex-col justify-center">
                            <input type="text" name="" className="w-full lg:w-[80%] h-fit text-[24px] lg:mx-auto p-4 lg:py-2  mb-4 font-montserrat bg-parsley-50 text-parsley-600 rounded-2xl placeholder:font-bold placeholder:text-parsley-600" placeholder="Cari Nama Komunitas"/>
                            <button className="w-full lg:w-[80%] h-fit py-3 lg:py-2 lg:mx-auto text-[20px] font-bold font-montserrat bg-parsley-700 text-parsley-50 rounded-2xl">Cari Komunitas</button>
                        </form>
                    </div>
                    <div className="w-full h-fit">
                        <CardContainer
                            thumbnailImage="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
                            comunityName="Komunitas SiSegar"
                            comunityDesc="Ini deskripsi komunitas yang keren."
                            tags={["Sayur", "Petani", "Organik"]}
                            buttonText="Gabung"
                            socialLinks={[
                                { icon: "fa-youtube", url: "https://youtube.com" },
                                { icon: "fa-twitter", url: "https://twitter.com" },
                                { icon: "fa-linkedin", url: "https://linkedin.com" },
                                { icon: "fa-facebook", url: "https://facebook.com" },
                                { icon: "fa-instagram", url: "https://instagram.com" }
                            ]}
                        />
                    </div>
                </div>
            </div>
        </>
    )   
}

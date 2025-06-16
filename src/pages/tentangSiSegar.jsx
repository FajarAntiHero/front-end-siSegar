import FooterContainer from "../component/footer";
import NavbarContainer from "../component/navbar";
import sawah_2 from "../assets/images/Content Web SiSegar/sawah_2.jpg";
import daun_tanaman_2 from "../assets/images/Content Web SiSegar/daun_tanaman_2.jpg";
import useScrollAnimation from "../component/useScrollAnimation";
import flower from "../assets/images/assest png/flower-1.png"

function Hero(){
    const heroContent = useScrollAnimation({})
    return (
        <>
            <div className={`w-full h-[90vh] relative flex items-center justify-center p-[3rem]`}>
                <img src={sawah_2} alt="" className="h-full w-full object-cover absolute top-0 bottom-0 left-0 right-0"/>
                <div className="relative z-20 w-full h-[80%] md:w-[80%] lg:h-[70&] p-4 md:p-6 lg:p-8 bg-white/15 backdrop-blur-sm rounded-xl shadow-lg border-[2px] border-white/15 text-white flex flex-col items-center justify-center overflow-hidden transform transition-all duration-300 hover:scale-[1.01] cursor-pointer">
                    <p className="font-montserrat font-bold text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] text-center mb-4 text-parsley-950">Hijaukan Harapan, Segarkan Bumi Kita</p>
                    <p className="font-montserrat text-[1rem] md:text-[1.3rem] lg:text-[1.5rem] text-parsley-900 text-center">Setiap langkah kecil kita hari ini adalah warisan besar untuk masa depan. Bergabunglah dengan siSegar dan jadilah bagian dari perubahan positif.</p>
                </div>

            </div>
        </>
    )
}

function Content(){

    const firstContent = useScrollAnimation({}, {}, {start: "center 20%"})
    const secondContent = useScrollAnimation({}, {}, {start: "center 20%"})
    const thirdContent = useScrollAnimation({}, {}, {start: "center 20%"})
    const fourthContent = useScrollAnimation({}, {}, {start: "center 20%"})
    const fifthContent = useScrollAnimation({}, {}, {start: "center 20%"})

    return (
        <>  
            <div className="w-full h-fit bg-parsley-50">
                <div className="w-full h-fit md:w-[75%] lg:w-[60%] md:mx-auto pt-8 bg-parsley-50 ">
                    <div ref={firstContent} className="container h-[90vh] flex flex-col justify-center items:center px-6 mb-[2rem] relative">
                        <img src={flower} alt="flower" className='w-[5rem] h-[5rem] absolute z-0 top-[4rem] right-[3rem]'/>
                        <img src={flower} alt="flower" className='w-[4rem] h-[4rem] absolute z-0 bottom-[4rem] left-[2rem]'/>
                        <p className="font-montserrat text-center mb-[1rem] font-bold text-parsley-600 text-[28px]">Apa itu siSegar?</p>
                        <p className="font-montserrat text-center text-parsley-500 text-[16px]">
                            siSegar adalah sebuah platform digital yang didedikasikan untuk mewujudkan lingkungan hidup yang lebih sehat, hijau, dan berkelanjutan bagi semua.
                        </p>
                    </div>
                    <div ref={secondContent} className="container h-[90vh] flex flex-col justify-center items:center px-6 mb-[2rem] relative">
                        <img src={flower} alt="flower" className='w-[5rem] h-[5rem] absolute z-0 top-[4rem] left-[3rem]'/>
                        <img src={flower} alt="flower" className='w-[4rem] h-[4rem] absolute z-0 bottom-[5rem] right-[2rem]'/>
                        <p className="font-montserrat text-center mb-[1rem] font-bold text-parsley-600 text-[28px]">Misi siSegar</p>
                        <p className="font-montserrat text-center text-parsley-500 text-[16px] mb-3">
                            Misi kami adalah <strong>mendorong kesadaran dan partisipasi aktif </strong> dalam menjaga kelestarian lingkungan. 
                        </p>
                        <p className="font-montserrat text-center text-parsley-500 text-[16px]">
                            Kami hadir sebagai jembatan yang menghubungkan individu, komunitas, dan inisiatif untuk bersama-sama menciptakan dampak positif, dimulai dari hal kecil hingga perubahan besar.
                        </p>
                    </div>
                    <div ref={thirdContent} className="container lg:w-[70%] flex flex-col justify-center items:center lg:mx-auto h-[80vh] p-6 mb-[2rem] bg-parsley-300 md:rounded-2xl">
                        <div className="w-full h-[50%] rounded-2xl mb-6 overflow-hidden">
                            <img src={daun_tanaman_2} alt="Lingkungan Sehat" className="h-full w-full object-cover" />
                        </div>
                        <div className="w-full h-fit">
                            <p className="font-montserrat text-center mb-4 font-bold text-parsley-900 text-[20px]">
                                Fakta Menarik Tentang Lingkungan Sehat
                            </p>
                            <p className="font-montserrat text-center text-parsley-700 text-[16px]">
                                <strong>Satu pohon besar bisa menghasilkan oksigen cukup untuk 4 orang setiap hari.</strong> Bayangkan dampaknya jika kita menanam lebih banyak!
                            </p>
                        </div>
                    </div>
                    <div ref={fourthContent} className="container h-[90vh] flex flex-col justify-center items:center px-6 mb-[2rem] relative">
                        <img src={flower} alt="flower" className='w-[5rem] h-[5rem] absolute z-0 top-[4rem] right-[3rem]'/>
                        <img src={flower} alt="flower" className='w-[4rem] h-[4rem] absolute z-0 bottom-[4rem] left-[2rem]'/>
                        <p className="font-montserrat text-center mb-[1rem] font-bold text-parsley-600 text-[28px]">Cerita siSegar</p>
                        <p className="font-montserrat text-center text-parsley-500 text-[16px] mb-3">
                            siSegar lahir dari kepedulian mendalam terhadap tantangan lingkungan yang kita hadapi saat ini. Kami melihat potensi luar biasa dalam kolaborasi dan teknologi untuk mengatasi masalah tersebut. 
                        </p>
                        <p className="font-montserrat text-center text-parsley-500 text-[16px]">
                            Dimulai dari ide sederhana untuk menghubungkan para pegiat lingkungan, siSegar kini berkembang menjadi platform yang memungkinkan lebih banyak orang untuk berbagi, belajar, dan beraksi. 
                        </p>
                    </div>
                    <div ref={fifthContent} className="container h-[90vh] flex flex-col justify-center items:center p-6">
                        <div className="w-full rounded-2xl h-[80%] p-4 bg-parsley-200 flex justify-center items-center">
                            <p className="font-montserrat text-2xl text-center font-bold bg-gradient-to-r from-parsley-950 via-parsley-700 to-parsley-500 text-transparent bg-clip-text">
                                Berkolaborasi untuk Lingkungan yang Lebih Baik.
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default function TentangSiSegar(){
    return (
        <>
            <NavbarContainer/>
            <Hero/>
            <Content/>
            <FooterContainer/>
        </>
    )
}
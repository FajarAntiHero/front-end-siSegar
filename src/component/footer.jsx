import logo_sisegar from "../assets/images/logo_sisegar.png";
import { IconApp, LogoSiSegar } from "./utils";
import useScrollAnimation from "./useScrollAnimation";

const socialIcons = [
  "fa-youtube",
  "fa-twitter",
  "fa-linkedin",
  "fa-facebook",
  "fa-instagram"
];

export default function FooterContainer() {

  return (
    <footer  className="bg-parsley-100 w-full">
        <div className=" w-full md:w-[75%] md:mx-auto flex flex-col items-center">
            <div className="w-full p-6">

                {/* Logo & Judul */}
                <div className="w-full h-fit flex justify-center items-center mb-6">
                    <LogoSiSegar/>
                    <p className="text-2xl text-parsley-950 font-bold font-montserrat">siSegar</p>
                </div>

                {/* Tentang */}
                <div className="text-center text-parsley-950 mb-6">
                    <p className="text-[16px] font-bold mb-3 font-montserrat">Tentang siSegar</p>
                    <p className="text-[16px] font-montserrat">
                        siSegar adalah sebuah platform digital yang dirancang untuk mendorong terciptanya lingkungan hidup yang sehat, hijau dan berkelanjutan.
                    </p>
                </div>

                {/* Sosial Media */}
                <div className="w-full h-fit bg-parsley-100">
                    <p className="text-[16px] text-center font-bold text-parsley-950 mb-3 font-montserrat">Sosial Media siSegar</p>
                    <div className="w-full h-fit gap-2 flex justify-center">
                        {socialIcons.map((icon, index) => (
                        <IconApp key={index} height={"h-[2.5rem]"} width={"w-[2.5rem]"} nameIcon={icon} sizeIcon={"1"}/>
                        ))}
                    </div>
                </div>
            </div>
           

        </div>
        {/* Copyright */}
        <div className="bg-parsley-300 w-full p-4">
            <div className="w-full md:w-[75%] md:mx-auto flex flex-col justify-center">
                <div className="flex items-center justify-center w-full gap-25 mb-[1rem]">
                    <a href="#" className="text-[16px] text-center text-parsley-950 relative cursor-pointer before:content-[''] before:w-full before:h-0.5 before:bg-parsley-950 before:scale-x-0 hover:before:scale-x-100 before:transition-all before:duration-[0.5s] before:absolute before:bottom-0 ">All Rights Reserved</a>
                    <a href="#" className="text-[16px] text-center text-parsley-950 relative cursor-pointer before:content-[''] before:w-full before:h-0.5 before:bg-parsley-950 before:scale-x-0 hover:before:scale-x-100 before:transition-all before:duration-[0.5s] before:absolute before:bottom-0">Privacy Policy</a>
                </div>
                <p className="text-[16px] text-center text-parsley-950 cursor-pointer">@CopyRights siSegar 2025</p>
            </div>
        </div>
    </footer>
  );
}

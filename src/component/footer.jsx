import logo_sisegar from "../assets/images/logo_sisegar.png";
import { IconApp, LogoSiSegar } from "./utils";

const socialIcons = [
<<<<<<< HEAD
  "youtube",
  "twitter",
  "linkedin",
  "facebook",
  "instagram",
=======
  "fa-youtube",
  "fa-twitter",
  "fa-linkedin",
  "fa-facebook",
  "fa-instagram"
>>>>>>> b331a8be9418469ac80e140ed6d4b22a1310bb4e
];

export default function FooterContainer() {
  return (
    <footer>
<<<<<<< HEAD
      <div className="bg-parsley-50 flex flex-col items-center font-montserrat">
        {/* Logo & Judul */}
        <div className="flex items-center gap-2 m-[1vh]">
          <img
            src={logo_sisegar}
            alt="Logo siSegar"
            className="w-[4vh] h-[4vh] rounded-full"
          />
          <p className="text-[24px] font-bold">siSegar</p>
        </div>

        {/* Tentang */}
        <div className="m-[1vh] text-center text-parsley-950">
          <p className="text-[16px] font-bold">Tentang siSegar</p>
          <p className="text-[16px]">
            siSegar adalah sebuah platform digital yang dirancang untuk mendorong
            terciptanya lingkungan hidup yang sehat, hijau dan berkelanjutan.
          </p>
        </div>

        {/* Sosial Media */}
        <div className="m-[1vh] flex flex-col items-center">
          <p className="text-[16px] font-bold text-parsley-950">
            Sosial Media siSegar
          </p>
          <div className="flex items-center gap-2 m-[1vh]">
            {socialIcons.map((icon) => (
              <div
                key={icon}
                className="w-[4vh] h-[4vh] bg-parsley-300 rounded-full flex items-center justify-center border-[2px] border-parsley-950"
              >
                <i
                  className={`fa-brands fa-${icon} text-parsley-950 text-[2.2vh] leading-none`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="bg-parsley-300 w-full flex justify-center items-center">
          <div className="m-[2vh] flex flex-col items-center gap-[1vh]">
            <div className="flex items-center gap-[2.5vh]">
              <p className="text-[12px] text-parsley-950 text-center">
                All Rights Reserved
              </p>
              <p className="text-[12px] text-parsley-950 text-center">
                Privacy Policy
              </p>
            </div>
            <p className="text-[12px] text-parsley-950 text-center">
              @CopyRights siSegar 2025
            </p>
          </div>
=======
        <div className="bg-parsley-100 flex flex-col items-center">
            <div className="container p-6">

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
                        {socialIcons.map((icon) => (
                        <IconApp nameIcon={icon}/>
                        ))}
                    </div>
                </div>
            </div>
           

        </div>
        {/* Copyright */}
        <div className="bg-parsley-300 w-full p-4">
            <div className="container flex flex-col justify-center">
                <div className="flex items-center justify-center w-full gap-25 mb-[1rem]">
                    <a href="#" className="text-[16px] text-center text-parsley-950 relative cursor-pointer before:content-[''] before:w-full before:h-0.5 before:bg-parsley-950 before:scale-x-0 hover:before:scale-x-100 before:transition-all before:duration-[0.5s] before:absolute before:bottom-0 ">All Rights Reserved</a>
                    <a href="#" className="text-[16px] text-center text-parsley-950 relative cursor-pointer before:content-[''] before:w-full before:h-0.5 before:bg-parsley-950 before:scale-x-0 hover:before:scale-x-100 before:transition-all before:duration-[0.5s] before:absolute before:bottom-0">Privacy Policy</a>
                </div>
                <p className="text-[16px] text-center text-parsley-950 cursor-pointer">@CopyRights siSegar 2025</p>
            </div>
>>>>>>> b331a8be9418469ac80e140ed6d4b22a1310bb4e
        </div>
    </footer>
  );
}

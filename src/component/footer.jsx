import logo_sisegar from "../assets/images/logo_sisegar.png";

const socialIcons = [
  "youtube",
  "twitter",
  "linkedin",
  "facebook",
  "instagram",
];

export default function FooterContainer() {
  return (
    <footer>
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
        </div>
      </div>
    </footer>
  );
}

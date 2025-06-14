import { useState } from "react";
import logo_sisegar from "../assets/images/logo_sisegar.png";

function NavbarSideList( {navbarListName}){

  const [tentangOpen, setTentangOpen] = useState(false)
  const [layananOpen, setLayananOpen] = useState(false)
  const [AkunOpen, setAkunOpen] = useState(false)

  const openTentang = () => {
    setTentangOpen((state) => !tentangOpen)
  }

  const openLayanan = () => {
    setLayananOpen((state) => !layananOpen)
  }

  const openAkun = () => {
    setAkunOpen((state) => !AkunOpen)
  }

  if (navbarListName == "Tentang") {
    return (
      <div>
        <div className="w-full h-[5vh] bg-parsley-200 flex items-center justify-center transition-colors duration-200" onClick={openTentang}>
          <a href="#" className="font-montserrat text-parsley-900 font-bold">{navbarListName}</a>
        </div>
        <div className={`w-full h-fit ${tentangOpen ? "block" : "hidden"}`}>
          <div className="w-full h-[5vh] bg-parsley-50 flex items-center justify-center transition-colors duration-200">
            <a href="#" className="font-montserrat text-parsley-900 font-bold">siSegar</a>
          </div>
          <div className="w-full h-[5vh] bg-parsley-50 flex items-center justify-center transition-colors duration-200">
            <a href="#" className="font-montserrat text-parsley-900 font-bold">siSegar Developer</a>
          </div>
        </div>
      </div>
    )
  } else if (navbarListName == "Layanan") {
    return (
      <div>
        <div className="w-full h-[5vh] bg-parsley-200 flex items-center justify-center transition-colors duration-200" onClick={openLayanan}>
          <a href="#" className="font-montserrat text-parsley-900 font-bold">{navbarListName}</a>
        </div>
        <div className={`w-full h-fit ${layananOpen ? "block" : "hidden"}`}>
          <div className="w-full h-[5vh] bg-parsley-50 flex items-center justify-center transition-colors duration-200 before:content-[''] before:absolute before:w-1.5 before:h-full before:bg-parsley-900 before:left-0 relative">
            <a href="#" className="font-montserrat text-parsley-900 font-bold">Komunitas</a>
          </div>
          <div className="w-full h-[5vh] bg-parsley-50 flex items-center justify-center transition-colors duration-200 before:content-[''] before:absolute before:w-1.5 before:h-full before:bg-parsley-900 before:left-0 relative">
            <a href="#" className="font-montserrat text-parsley-900 font-bold">Acara</a>
          </div>
          <div className="w-full h-[5vh] bg-parsley-50 flex items-center justify-center transition-colors duration-200 before:content-[''] before:absolute before:w-1.5 before:h-full before:bg-parsley-900 before:left-0 relative">
            <a href="#" className="font-montserrat text-parsley-900 font-bold">Deteksi Sampah</a>
          </div>
          <div className="w-full h-[5vh] bg-parsley-50 flex items-center justify-center transition-colors duration-200">
            <a href="#" className="font-montserrat text-parsley-900 font-bold">Kontak</a>
          </div>
        </div>
      </div>
    )
  }else if (navbarListName == "Akun") {
    return (
      <div>
        <div className="w-full h-[5vh] bg-parsley-200 flex items-center justify-center transition-colors duration-200" onClick={openAkun}>
          <a href="#" className="font-montserrat text-parsley-900 font-bold">{navbarListName}</a>
        </div>
        <div className={`w-full h-fit ${AkunOpen ? "block" : "hidden"}`}>
          <div className="w-full h-[5vh] bg-parsley-50 flex items-center justify-center transition-colors duration-200 before:content-[''] before:absolute before:w-1.5 before:h-full before:bg-parsley-900 before:left-0 relative">
            <a href="#" className="font-montserrat text-parsley-900 font-bold">Log-in</a>
          </div>
          <div className="w-full h-[5vh] bg-parsley-50 flex items-center justify-center transition-colors duration-200 before:content-[''] before:absolute before:w-1.5 before:h-full before:bg-parsley-900 before:left-0 relative">
            <a href="#" className="font-montserrat text-parsley-900 font-bold">Register</a>
          </div>
        </div>
      </div>
    )} else {
    return (
      <div className="w-full h-[5vh] bg-parsley-200 flex items-center justify-center transition-colors duration-200">
        <a href="#" className="font-montserrat text-parsley-900 font-bold">{navbarListName}</a>
      </div>
    )
  }
}

export default function NavbarContainer() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="bg-parsley-200 p-4 flex justify-between w-full h-[10vh]">
        <div className="w-[97.5%] h-full m-auto flex justify-between">
          <div className="w-[50%] h-full flex items-center justify-center">
            <div className="w-[26%] h-[80%] bg-white mr-[10px] rounded-3xl overflow-hidden">
              <img src={logo_sisegar} alt="" className="object-cover w-full h-full"/>
            </div>
            <p className="text-parsley-950 font-bold text-2xl font-montserrat">siSegar</p>
          </div>
          <div className="w-[20%] h-full flex items-center justify-center">
            <i
              className={`fa-solid fa-bars text-[32px] text-parsley-900 cursor-pointer 
              transition-transform duration-200 ease-in-out 
              hover:scale-110 active:scale-90`}
              onClick={toggleMenu}
            ></i>
          </div>
        </div>
      </nav>

      {/* Side Menu */}
      <div
        className={`w-[60vw] h-[90vh] fixed top-[10vh] right-0 bg-parsley-200 z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* <div className="w-full h-fit">
          {["Beranda", "Tentang", "Layanan", "Blog"].map((item) => (
            <div
              key={item}
              className="w-full h-[5vh] bg-white flex items-center justify-center transition-colors duration-200 hover:bg-emerald-200"
            >
                if (item == "Tentang") {
                  <div></div>
                }
              <a href="#" className="text-emerald-950 font-medium">{item}</a>
            </div>
          ))}
        </div> */}
        <NavbarSideList navbarListName={"Beranda"}/>
        <NavbarSideList navbarListName={"Tentang"}/>
        <NavbarSideList navbarListName={"Blog"}/>
        <NavbarSideList navbarListName={"Layanan"}/>
        <NavbarSideList navbarListName={"Akun"}/>
      </div>
    </div>
  );
}

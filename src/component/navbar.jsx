import { useState } from "react";
import { LogoSiSegar } from "./utils";
import { Link } from "react-router-dom";

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
          <p className="font-montserrat text-parsley-900 font-bold">{navbarListName}</p>
        </div>
        <div className={`w-full h-fit ${tentangOpen ? "block" : "hidden"}`}>
          <div className="w-full h-[5vh] bg-parsley-50 flex items-center justify-center transition-colors duration-200">
            <Link to="/tentang/sisegar" className="font-montserrat text-parsley-900 font-bold">siSegar</Link>
          </div>
          <div className="w-full h-[5vh] bg-parsley-50 flex items-center justify-center transition-colors duration-200">
            <Link to="/tentang/sisegar-developer" className="font-montserrat text-parsley-900 font-bold">siSegar Developer</Link>
          </div>
        </div>
      </div>
    )
  } else if (navbarListName == "Layanan") {
    return (
      <div>
        <div className="w-full h-[5vh] bg-parsley-200 flex items-center justify-center transition-colors duration-200" onClick={openLayanan}>
          <p className="font-montserrat text-parsley-900 font-bold">{navbarListName}</p>
        </div>
        <div className={`w-full h-fit ${layananOpen ? "block" : "hidden"}`}>
          <div className="w-full h-[5vh] bg-parsley-50 flex items-center justify-center transition-colors duration-200 before:content-[''] before:absolute before:w-1.5 before:h-full before:bg-parsley-900 before:left-0 relative">
            <Link to="/layanan/komunitas" className="font-montserrat text-parsley-900 font-bold">Komunitas</Link>
          </div>
          <div className="w-full h-[5vh] bg-parsley-50 flex items-center justify-center transition-colors duration-200 before:content-[''] before:absolute before:w-1.5 before:h-full before:bg-parsley-900 before:left-0 relative">
            <Link to="/layanan/acara" className="font-montserrat text-parsley-900 font-bold">Acara</Link>
          </div>
          <div className="w-full h-[5vh] bg-parsley-50 flex items-center justify-center transition-colors duration-200 before:content-[''] before:absolute before:w-1.5 before:h-full before:bg-parsley-900 before:left-0 relative">
            <Link to="/layanan/deteksi-gambar" className="font-montserrat text-parsley-900 font-bold">Deteksi Sampah</Link>
          </div>
          <div className="w-full h-[5vh] bg-parsley-50 flex items-center justify-center transition-colors duration-200">
            <Link to="/layanan/kontak" className="font-montserrat text-parsley-900 font-bold">Kontak</Link>
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
    )
  } else if (navbarListName == "Akun Anda") {
    return (
      <div>
        <div className="w-full h-[5vh] bg-parsley-200 flex items-center justify-center transition-colors duration-200" onClick={openAkun}>
          <a href="#" className="font-montserrat text-parsley-900 font-bold">{navbarListName}</a>
        </div>
        <div className={`w-full h-fit ${AkunOpen ? "block" : "hidden"}`}>
          <div className="w-full h-[5vh] bg-parsley-50 flex items-center justify-center transition-colors duration-200 before:content-[''] before:absolute before:w-1.5 before:h-full before:bg-parsley-900 before:left-0 relative">
            <a href="#" className="font-montserrat text-parsley-900 font-bold">Profile</a>
          </div>
          <div className="w-full h-[5vh] bg-parsley-50 flex items-center justify-center transition-colors duration-200 before:content-[''] before:absolute before:w-1.5 before:h-full before:bg-parsley-900 before:left-0 relative">
            <a href="#" className="font-montserrat text-parsley-900 font-bold">Log-Out</a>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="w-full h-[5vh] bg-parsley-200 flex items-center justify-center transition-colors duration-200">
        <Link to={`/${navbarListName == 'Beranda' ? "" : navbarListName.toLowerCase()}`} className="font-montserrat text-parsley-900 font-bold">
          {navbarListName}
        </Link>
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
    <nav className="bg-parsley-200 p-4 flex justify-between w-full h-[10vh] sticky z-50 top-0">
      <div className="w-[97.5%] h-full m-auto flex justify-between">
        <div className="w-[50%] h-full flex items-center justify-center">
          <LogoSiSegar/>
          <p className="text-parsley-950 font-bold text-2xl font-montserrat">siSegar</p>
        </div>
        <div className="w-[20%] h-full flex items-center justify-center lg:hidden">
          <i
            className={`fa-solid fa-bars text-[32px] text-parsley-900 cursor-pointer 
            transition-transform duration-200 ease-in-out 
            hover:scale-110 active:scale-90`}
            onClick={toggleMenu}
          ></i>
        </div>
      </div>

      {/* Side Menu */}
      <div
        className={`w-[60vw] h-[90vh] fixed top-[10vh] right-0 bg-parsley-200 z-[999] transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <NavbarSideList navbarListName={"Beranda"}/>
        <NavbarSideList navbarListName={"Tentang"}/>
        <NavbarSideList navbarListName={"Blog"}/>
        <NavbarSideList navbarListName={"Layanan"}/>
        <NavbarSideList navbarListName={"Akun"}/>
      </div>
    </nav>

  );
}

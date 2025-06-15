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
          <p className="font-montserrat text-parsley-900 md:text-[16px] font-bold">{navbarListName}</p>
        </div>
        <div className={`w-full h-fit ${tentangOpen ? "block" : "hidden"}`}>
          <div className="w-full h-[5vh] bg-parsley-50 flex items-center justify-center transition-colors duration-200">
            <Link to="/tentang/sisegar" className="font-montserrat text-parsley-900 md:text-[16px] font-bold">siSegar</Link>
          </div>
          <div className="w-full h-[5vh] bg-parsley-50 flex items-center justify-center transition-colors duration-200">
            <Link to="/tentang/sisegar-developer" className="font-montserrat text-parsley-900 md:text-[16px] font-bold">siSegar Developer</Link>
          </div>
        </div>
      </div>
    )
  } else if (navbarListName == "Layanan") {
    return (
      <div>
        <div className="w-full h-[5vh] bg-parsley-200 flex items-center justify-center transition-colors duration-200" onClick={openLayanan}>
          <p className="font-montserrat text-parsley-900 md:text-[16px] font-bold">{navbarListName}</p>
        </div>
        <div className={`w-full h-fit ${layananOpen ? "block" : "hidden"}`}>
          <div className="w-full h-[5vh] bg-parsley-50 flex items-center justify-center transition-colors duration-20">
            <Link to="/layanan/komunitas" className="font-montserrat text-parsley-900 md:text-[16px] font-bold">Komunitas</Link>
          </div>
          <div className="w-full h-[5vh] bg-parsley-50 flex items-center justify-center transition-colors duration-20">
            <Link to="/layanan/acara" className="font-montserrat text-parsley-900 font-bold md:text-[16px]">Acara</Link>
          </div>
          <div className="w-full h-[5vh] bg-parsley-50 flex items-center justify-center transition-colors duration-20">
            <Link to="/layanan/deteksi-gambar" className="font-montserrat text-parsley-900 md:text-[16px] font-bold">Deteksi Sampah</Link>
          </div>
          <div className="w-full h-[5vh] bg-parsley-50 flex items-center justify-center transition-colors duration-200">
            <Link to="/layanan/kontak" className="font-montserrat text-parsley-900 md:text-[16px] font-bold">Kontak</Link>
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
          <div className="w-full h-[5vh] bg-parsley-50 flex items-center justify-center transition-colors duration-200">
            <Link to="/daftar-akun" className="font-montserrat text-parsley-900 md:text-[16px] font-bold">Daftar</Link>
          </div>
          <div className="w-full h-[5vh] bg-parsley-50 flex items-center justify-center transition-colors duration-200">
            <Link to="/masuk-akun" className="font-montserrat text-parsley-900 md:text-[16px] font-bold">Masuk</Link>
          </div>
        </div>
      </div>
    )
  // } else if (navbarListName == "Akun Anda") {
  //   return (
  //     <div>
  //       <div className="w-full h-[5vh] bg-parsley-200 flex items-center justify-center transition-colors duration-200" onClick={openAkun}>
  //         <a href="#" className="font-montserrat text-parsley-900 font-bold">{navbarListName}</a>
  //       </div>
  //       <div className={`w-full h-fit ${AkunOpen ? "block" : "hidden"}`}>
  //         <div className="w-full h-[5vh] bg-parsley-50 flex items-center justify-center transition-colors duration-200 before:content-[''] before:absolute before:w-1.5 before:h-full before:bg-parsley-900 before:left-0 relative">
  //           <a href="#" className="font-montserrat text-parsley-900 font-bold">Profile</a>
  //         </div>
  //         <div className="w-full h-[5vh] bg-parsley-50 flex items-center justify-center transition-colors duration-200 before:content-[''] before:absolute before:w-1.5 before:h-full before:bg-parsley-900 before:left-0 relative">
  //           <a href="#" className="font-montserrat text-parsley-900 font-bold">Log-Out</a>
  //         </div>
  //       </div>
  //     </div>
  //   )
  } else {
    return (
      <div className="w-full h-[5vh] bg-parsley-200 flex items-center justify-center transition-colors duration-200">
        <Link to={`/${navbarListName == 'Beranda' ? "" : navbarListName.toLowerCase()}`} className="font-montserrat md:text-[16px] text-parsley-900 font-bold">
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
    <nav className="bg-parsley-200 lg:bg-parsley-50 flex justify-between w-full h-[10vh] sticky z-50 top-0">
      <div className="w-[90%] md:w-[75%] h-full m-auto flex justify-between">
        <div className="w-[50%] lg:w-[20%] h-full flex items-center justify-center md:justify-start">
          <LogoSiSegar/>
          <p className="text-parsley-950 font-bold text-2xl font-montserrat">siSegar</p>
        </div>
        <div className="hidden lg:w-[40%] lg:h-full lg:flex lg:items-center lg:justify-around">
          <Link to="/" className="relative font-montserrat text-[16px] text-parsley-600 before:content-[''] before:w-full before:h-0.5 before:bg-parsley-600 before:scale-x-0 hover:before:scale-x-100 before:transition-all before:duration-[0.5s] before:absolute before:bottom-0">Beranda</Link>
          <div className="w-fit h-fit relative">
            <p className="font-montserrat text-[16px] cursor-pointer text-parsley-600 before:content-[''] before:w-full before:h-0.5 before:bg-parsley-600 before:scale-x-0 hover:before:scale-x-100 before:transition-all before:duration-[0.5s] before:absolute before:bottom-0">Tentang</p>
            <div className=""></div>
          </div>
          <Link to="/blog" className="relative font-montserrat text-[16px] text-parsley-600 before:content-[''] before:w-full before:h-0.5 before:bg-parsley-600 before:scale-x-0 hover:before:scale-x-100 before:transition-all before:duration-[0.5s] before:absolute before:bottom-0">Blog</Link>
          <div className="w-fit h-fit relative">
            <p className="font-montserrat text-[16px] cursor-pointer text-parsley-600 before:content-[''] before:w-full before:h-0.5 before:bg-parsley-600 before:scale-x-0 hover:before:scale-x-100 before:transition-all before:duration-[0.5s] before:absolute before:bottom-0">Layanan</p>
          </div>
        </div>
        <div className="hidden lg:w-[25%] lg:h-full lg:flex lg:items-center lg:justify-around">
          <Link to="/daftar-akun" className="inline-block h-fit w-fit p-2 px-4 rounded-xl bg-parsley-600 hover:bg-parsley-600/50 text-parsley-50 hover:text-parsley-600 font-bold font-montserrat ">Daftar</Link>
          <Link to="/masuk-akun" className="inline-block h-fit w-fit p-2 px-4 rounded-xl bg-parsley-600/50 hover:bg-parsley-600 text-parsley-600 hover:text-parsley-50 font-bold font-montserrat ">Masuk</Link>
        </div>
        <div className="w-[20%] h-full flex items-center justify-center md:justify-end lg:hidden">
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
        className={`w-[60vw] md:w-[45vw] h-[90vh] fixed top-[10vh] right-0 bg-parsley-200 z-[999] transform transition-transform duration-300 ease-in-out ${
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

export function NavbarDashboard(){
  return (
    <>
      <div className="w-full h-[8vh] bg-parsley-300 flex justify-center items-center rounded-3xl mb-[12px]">
        <LogoSiSegar/>
        <p className="text-parsley-950 text-2xl font-bold">siSegar</p>
      </div>
    </>
  )
}

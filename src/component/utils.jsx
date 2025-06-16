import React, { useState, useEffect, useRef } from 'react'; 
import logoSiSegar from '../assets/images/logo_sisegar.png';
import { Link } from "react-router";
import { ButtonCustomSizeableComponent } from './button';

export function IconApp({ width, height, nameIcon, link = "#" , sizeIcon}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${width} ${height} rounded-3xl border-2 bg-parsley-300 border-parsley-800 flex justify-center items-center`}
    >
      <i className={`fa-brands ${nameIcon} text-parsley-800 ${sizeIcon} mb-0`} />
    </a>
  );
}

export function LogoSiSegar(){
    return (
        <div className='w-[2.4rem] md:w-[2.5rem] h-[2.4rem] md:h-[2.5rem] rounded-3xl overflow-hidden mr-[1rem]'>
            <img src={logoSiSegar} alt="" className='w-full h-full object-cover'/>
        </div>
    )
}

export function InputComponent( {nameLabel, idForm, typeInput, placeholder, marginForm, isRequired, value, onChange}){

    if (isRequired){
        return (
            <>
                <div className={`w-full h-[8vh] ${marginForm}`}>
                    <label htmlFor={idForm} className='font-montserrat font-bold text-parsley-600 text-[12px] md:text-[14px] pl-4 mb-2'>{nameLabel}</label>
                    <input 
                        type={typeInput} 
                        id={idForm} 
                        placeholder={placeholder} 
                        className='w-full h-[calc(100%_-_24px)] rounded-2xl bg-parsley-300 font-montserrat text-[14px] md:text-[16px] p-4 text-parsley-600 placeholder:font-bold placeholder:text-parsley-600' 
                        required
                        value={value}
                        onChange={onChange}

                    />
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className={`w-full h-[8vh] ${marginForm}`}>
                    <label htmlFor={idForm} className='font-montserrat font-bold text-parsley-600 text-[12px] md:text-[14px] pl-4 mb-2'>{nameLabel}</label>
                    <input 
                        type={typeInput} 
                        id={idForm} 
                        placeholder={placeholder} 
                        className='w-full h-[calc(100%_-_24px)] rounded-2xl bg-parsley-300 font-montserrat text-[14px] md:text-[16px] p-4 text-parsley-600 placeholder:font-bold placeholder:text-parsley-600' 
                        value={value}
                        onChange={onChange}

                    />
                </div>
            </>
        )
    }
}

export function TextAreaComponent( {nameLabel, idForm, typeInput, placeholder, marginForm, bgInput, isRequired, value, onChange}){

    if (isRequired){
        return (
            <>
                <div className={`w-full h-[15vh] ${marginForm}`}>
                    <label htmlFor={idForm} className='font-montserrat font-bold text-parsley-600 text-[12px] md:text-[14px] pl-4 mb-2'>{nameLabel}</label>
                    <textarea 
                        id={idForm}  
                        required 
                        placeholder={placeholder} 
                        className={`w-full h-[calc(100%_-_24px)] resize-none rounded-2xl ${bgInput} font-montserrat text-[14px] md:text-[16px] p-4 text-parsley-600 placeholder:font-bold placeholder:text-parsley-600`}
                        value={value}
                        onChange={onChange}   
                    ></textarea>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className={`w-full h-[15vh] ${marginForm}`}>
                    <label htmlFor={idForm} className='font-montserrat font-bold text-parsley-600 text-[12px] md:text-[14px] pl-4 mb-2'>{nameLabel}</label>
                    <textarea 
                        id={idForm}  
                        placeholder={placeholder} 
                        className={`w-full h-[calc(100%_-_24px)] resize-none rounded-2xl ${bgInput} font-montserrat text-[14px] md:text-[16px] p-4 text-parsley-600 placeholder:font-bold placeholder:text-parsley-600`}
                        value={value}
                        onChange={onChange}   
                    ></textarea>
                </div>
            </>
        )
    }
}

// export function MenuDashboard({bgMenu, position}){

//     const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
//     const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

//     const isWrenchOpen = () => {
//         setIsProductsDropdownOpen()
//     }

//     return (
//         <>
//             <div className={`w-full h-[8vh] p-4 ${bgMenu} rounded-3xl flex justify-center items-center`}>
//                 <Link to={'/user/dashboard'} className="mx-4"><i className="fa-solid fa-house text-[24px] text-parsley-950"></i></Link>
//                 <div className="w-fit h-fit relative group">
//                     <i className="fa-solid fa-wrench mx-4 text-[24px] text-parsley-950"></i>
//                     <div className={`lg:w-[200px] lg:h-[150px] hidden bg-parsley-500 rounded-2xl absolute ${position} p-3 group-hover:flex group-hover:flex-col group-hover:justify-between`}>
//                         <div className="w-full h-[45%] flex items-center justify-center p-2 bg-parsley-100 hover:bg-parsley-50 rounded-xl font-montserrat font-bold text-parsley-600 mb-2"><Link to={"/user/lihat-komunitas"}>Lihat Komunitas</Link></div>
//                         <div className="w-full h-[45%] flex items-center justify-center p-2 bg-parsley-100 hover:bg-parsley-50 rounded-xl font-montserrat font-bold text-parsley-600 "><Link to={"/user/lihat-acara"}>Lihat Acara</Link></div>
//                     </div>
//                 </div>
//                 <div className="w-fit h-fit relative group">
//                     <i className="fa-solid fa-user-group mx-4 text-[24px] text-parsley-950"></i>
//                     <div className={`lg:w-[200px] lg:h-[150px] hidden bg-parsley-500 rounded-2xl absolute ${position} p-3 group-hover:flex group-hover:flex-col group-hover:justify-between`}>
//                         <div className="w-full h-[45%] flex items-center justify-center p-2 bg-parsley-100 hover:bg-parsley-50 rounded-xl font-montserrat font-bold text-parsley-600 mb-2"><Link to={"/user/buat-komunitas"}>Buat Komunitas</Link></div>
//                         <div className="w-full h-[45%] flex items-center justify-center p-2 bg-parsley-100 hover:bg-parsley-50 rounded-xl font-montserrat font-bold text-parsley-600 "><Link to={"/user/buat-acara"}>Buat Acara</Link></div>
//                     </div>
//                 </div>
//                 <Link to={'/user/pengaturan'} className="mx-4"><i className="fa-solid fa-calendar-days text-[24px] text-parsley-950"></i></Link>
//             </div>
//         </>
//     )
// }

export function MenuDashboard({bgMenu, position}){
    const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

    // Refs untuk mendeteksi klik di luar masing-masing dropdown
    const productsDropdownRef = useRef(null);
    const servicesDropdownRef = useRef(null);
    const productsIconRef = useRef(null); // Ref untuk icon agar tidak menutup saat icon diklik
    const servicesIconRef = useRef(null); // Ref untuk icon agar tidak menutup saat icon diklik


    // Fungsi untuk toggle dropdown produk
    const toggleProductsDropdown = () => {
        setIsProductsDropdownOpen(prev => !prev);
        // Pastikan dropdown lain tertutup saat yang satu dibuka
        setIsServicesDropdownOpen(false);
    };

    // Fungsi untuk toggle dropdown layanan
    const toggleServicesDropdown = () => {
        setIsServicesDropdownOpen(prev => !prev);
        // Pastikan dropdown lain tertutup saat yang satu dibuka
        setIsProductsDropdownOpen(false);
    };

    // useEffect untuk menangani klik di luar dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Untuk dropdown "Produk" (icon kunci pas)
            if (productsDropdownRef.current &&
                !productsDropdownRef.current.contains(event.target) &&
                productsIconRef.current &&
                !productsIconRef.current.contains(event.target)) {
                setIsProductsDropdownOpen(false);
            }
            // Untuk dropdown "Layanan" (icon user-group)
            if (servicesDropdownRef.current &&
                !servicesDropdownRef.current.contains(event.target) &&
                servicesIconRef.current &&
                !servicesIconRef.current.contains(event.target)) {
                setIsServicesDropdownOpen(false);
            }
        };

        // Tambahkan event listener saat komponen dimuat
        document.addEventListener("mousedown", handleClickOutside);
        // Hapus event listener saat komponen dilepas
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []); // Array kosong berarti efek ini hanya berjalan sekali

    return (
        <>
            <div className={`w-full h-[8vh] p-4 ${bgMenu} rounded-3xl flex justify-center items-center relative`}> {/* Tambah relative jika menu melayang di atas */}
                <Link to={'/user/dashboard'} className="mx-4"><i className="fa-solid fa-house text-[24px] text-parsley-950"></i></Link>

                {/* Dropdown untuk "Produk" (ikon wrench/kunci pas) */}
                <div className="w-fit h-fit relative"> {/* Hapus 'group' class */}
                    <div
                        className="mx-4 cursor-pointer" // Tambah cursor-pointer
                        onClick={toggleProductsDropdown} // Tambah onClick handler
                        ref={productsIconRef} // Tambah ref ke div ikon
                    >
                        <i className="fa-solid fa-wrench text-[24px] text-parsley-950"></i>
                    </div>
                    {/* Tampilkan dropdown berdasarkan state isProductsDropdownOpen */}
                    <div
                        ref={productsDropdownRef} // Tambah ref ke dropdown content
                        className={`lg:w-[200px] lg:h-[150px] bg-parsley-500 rounded-2xl absolute ${position} p-3 flex flex-col justify-between
                            ${isProductsDropdownOpen ? 'flex' : 'hidden'} `} 
                    >
                        <div className="w-full h-[45%] flex items-center justify-center p-2 bg-parsley-100 hover:bg-parsley-50 rounded-xl font-montserrat font-bold text-parsley-600 mb-2">
                            <Link to={"/user/lihat-komunitas"} onClick={() => setIsProductsDropdownOpen(false)}>Lihat Komunitas</Link> {/* Tutup saat link diklik */}
                        </div>
                        <div className="w-full h-[45%] flex items-center justify-center p-2 bg-parsley-100 hover:bg-parsley-50 rounded-xl font-montserrat font-bold text-parsley-600 ">
                            <Link to={"/user/lihat-acara"} onClick={() => setIsProductsDropdownOpen(false)}>Lihat Acara</Link> {/* Tutup saat link diklik */}
                        </div>
                    </div>
                </div>

                {/* Dropdown untuk "Layanan" (ikon user-group) */}
                <div className="w-fit h-fit relative"> {/* Hapus 'group' class */}
                    <div
                        className="mx-4 cursor-pointer" // Tambah cursor-pointer
                        onClick={toggleServicesDropdown} // Tambah onClick handler
                        ref={servicesIconRef} // Tambah ref ke div ikon
                    >
                        <i className="fa-solid fa-user-group text-[24px] text-parsley-950"></i>
                    </div>
                    {/* Tampilkan dropdown berdasarkan state isServicesDropdownOpen */}
                    <div
                        ref={servicesDropdownRef} // Tambah ref ke dropdown content
                        className={`lg:w-[200px] lg:h-[150px] bg-parsley-500 rounded-2xl absolute ${position} p-3 flex flex-col justify-between
                            ${isServicesDropdownOpen ? 'flex' : 'hidden'} `} 
                    >
                        <div className="w-full h-[45%] flex items-center justify-center p-2 bg-parsley-100 hover:bg-parsley-50 rounded-xl font-montserrat font-bold text-parsley-600 mb-2">
                            <Link to={"/user/buat-komunitas"} onClick={() => setIsServicesDropdownOpen(false)}>Buat Komunitas</Link> {/* Tutup saat link diklik */}
                        </div>
                        <div className="w-full h-[45%] flex items-center justify-center p-2 bg-parsley-100 hover:bg-parsley-50 rounded-xl font-montserrat font-bold text-parsley-600 ">
                            <Link to={"/user/buat-acara"} onClick={() => setIsServicesDropdownOpen(false)}>Buat Acara</Link> {/* Tutup saat link diklik */}
                        </div>
                    </div>
                </div>

                <Link to={'/user/pengaturan'} className="mx-4"><i className="fa-solid fa-calendar-days text-[24px] text-parsley-950"></i></Link>
            </div>
        </>
    )
}

export function CardDashboard(){
    return (
        <>
            <div className='w-full h-fit rounded-2xl bg-parsley-50 p-4 mb-4'>
                <div className='w-full h-[15vh] rounded-xl bg-parsley-900 overflow-hidden mb-4'>
                    <img src="" alt="" className='w-full h-full object-cover'/>
                </div>
                <p className='text-[20px] text-parsley-600 font-montserrat font-bold mb-2'>Nama Komunitas</p>
                <p className='text-[16px] text-parsley-600 font-montserrat mb-4'>Nama Komunitas ini bertujuan untuk mengembangkan ide apa gatau pokoknya ini placeholder text, djaogijregoij bklbjapijafjk; jeipboajiejgiojeiobje</p>
                <ButtonCustomSizeableComponent
                    width={"w-full"}
                    height={"h-fit"}
                    textButton={"Selengkapnya"}
                    colorText={"text-parsley-50"}
                    bgButton={"bg-parsley-600"}
                    margin={""}
                    padding={"p-4"}
                    borderRadius={"rounded-xl"}
                    textSize={"text-[20px]"}
                />
            </div>
        </>
    )
}

export function AuthorDetail( {author, timePublished}) {
    return (
        <>
            <div className="w-full min-h-[8vh] bg-parsley-200 rounded-xl flex justify-between items-center px-3 md:px-4 lg:px-6">
                <p className='font-montserrat text-[12px] md:text-[16px] lg:text-[20px] text-parsley-500'>Penulis: <span className='font-bold'>{author}</span></p>
                <p className='font-montserrat text-[12px] md:text-[16px] lg:text-[20px] text-parsley-500'>Waktu Rilis: <span className='font-bold'>{timePublished}</span></p>
            </div>
        </>
    )
}
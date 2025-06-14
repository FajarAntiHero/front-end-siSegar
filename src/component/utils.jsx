import logoSiSegar from '../assets/images/logo_sisegar.png';
import { Link } from "react-router";
import { ButtonCustomSizeableComponent } from './button';

export function IconApp({ nameIcon, link = "#" }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-[2.5rem] h-[2.5rem] rounded-3xl border-2 bg-parsley-300 border-parsley-800 flex justify-center items-center"
    >
      <i className={`fa-brands ${nameIcon} text-parsley-800 text-[1.2rem]`} />
    </a>
  );
}

export function LogoSiSegar(){
    return (
        <div className='w-[2rem] md:w-[2.5rem] h-[2rem] md:h-[2.5rem] rounded-3xl overflow-hidden mr-[1rem]'>
            <img src={logoSiSegar} alt="" className='w-full h-full object-cover'/>
        </div>
    )
}

export function InputComponent( {nameLabel, idForm, typeInput, placeholder, marginForm, isRequired}){

    if (isRequired){
        return (
            <>
                <div className={`w-full h-[8vh] ${marginForm}`}>
                    <label htmlFor={idForm} className='font-montserrat font-bold text-parsley-600 text-[16px] lg:text-[12px] pl-4 mb-2'>{nameLabel}</label>
                    <input type={typeInput} id={idForm} placeholder={placeholder} className='w-full h-[calc(100%_-_24px)] rounded-2xl bg-parsley-300 font-montserrat text-[20px] lg:text-[16px] p-4 text-parsley-600 placeholder:font-bold placeholder:text-parsley-600' required />
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className={`w-full h-[8vh] ${marginForm}`}>
                    <label htmlFor={idForm} className='font-montserrat font-bold text-parsley-600 text-[16px] lg:text-[12px] pl-4 mb-2'>{nameLabel}</label>
                    <input type={typeInput} id={idForm} placeholder={placeholder} className='w-full h-[calc(100%_-_24px)] rounded-2xl bg-parsley-300 font-montserrat text-[20px] lg:text-[16px] p-4 text-parsley-600 placeholder:font-bold placeholder:text-parsley-600' />
                </div>
            </>
        )
    }
}

export function TextAreaComponent( {nameLabel, idForm, typeInput, placeholder, marginForm, bgInput, isRequired}){

    if (isRequired){
        return (
            <>
                <div className={`w-full h-[15vh] ${marginForm}`}>
                    <label htmlFor={idForm} className='font-montserrat font-bold text-parsley-600 text-[16px] pl-4 mb-2'>{nameLabel}</label>
                    <textarea type={typeInput} id={idForm}  required placeholder={placeholder} className={`w-full h-[calc(100%_-_24px)] resize-none rounded-2xl ${bgInput} font-montserrat text-[20px] p-4 text-parsley-600 placeholder:font-bold placeholder:text-parsley-600`}></textarea>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className={`w-full h-[15vh] ${marginForm}`}>
                    <label htmlFor={idForm} className='font-montserrat font-bold text-parsley-600 text-[16px] pl-4 mb-2'>{nameLabel}</label>
                    <textarea type={typeInput} id={idForm} placeholder={placeholder} className={`w-full h-[calc(100%_-_24px)] resize-none rounded-2xl ${bgInput} font-montserrat text-[20px] p-4 text-parsley-600 placeholder:font-bold placeholder:text-parsley-6001`}></textarea>
                </div>
            </>
        )
    }
}

export function MenuDashboard({bgMenu}){
    return (
        <>
            <div className={`w-full h-[8vh] p-4 ${bgMenu} rounded-3xl flex justify-center items-center`}>
                <Link to={'/user/dashboard'} className="mx-4"><i className="fa-solid fa-house text-[24px] text-parsley-950"></i></Link>
                <i className="fa-solid fa-wrench mx-4 text-[24px] text-parsley-950"></i>
                <i className="fa-solid fa-user-group mx-4 text-[24px] text-parsley-950"></i>
                <Link to={'/user/pengaturan'} className="mx-4"><i className="fa-solid fa-calendar-days text-[24px] text-parsley-950"></i></Link>
            </div>
        </>
    )
}

export function CardDashboard(){
    return (
        <>
            <div className='w-full h-fit rounded-2xl bg-parsley-50 p-4 mb-4'>
                <div className='w-full h-[15vh] rounded-xl bg-parsley-900 mb-4'>

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
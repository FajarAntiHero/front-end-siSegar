import logoSiSegar from '../assets/images/logo_sisegar.png';

export function IconApp( {nameIcon} ){
    return (
        <div className="w-[2.5rem] h-[2.5rem] rounded-3xl border-2 bg-parsley-300 border-parsley-800 flex justify-center items-center">
            <a href="#">
                <i className={`fa-brands ${nameIcon} text-parsley-800`}></i>
            </a>
        </div>
    )
}

export function LogoSiSegar(){
    return (
        <div className='w-[2.5rem] h-[2.5rem] rounded-3xl overflow-hidden'>
            <img src={logoSiSegar} alt="" srcset="" className='w-full h-full object-cover'/>
        </div>
    )
}
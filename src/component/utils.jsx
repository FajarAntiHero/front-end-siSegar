import logoSiSegar from '../assets/images/logo_sisegar.png';

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

export function LogoSiSegar() {
  return (
    <div className="w-[2.5rem] h-[2.5rem] rounded-3xl overflow-hidden mr-[1rem]">
      <img src={logoSiSegar} alt="Logo SiSegar" className="w-full h-full object-cover" />
    </div>
  );
}

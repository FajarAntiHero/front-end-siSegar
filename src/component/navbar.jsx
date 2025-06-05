import { useState } from "react";

export default function NavbarContainer() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="bg-emerald-950 p-4 text-white flex justify-between w-full h-[10vh]">
        <div className="w-[97.5%] h-full m-auto flex justify-between">
          <div className="w-[35%] h-full flex items-center justify-center">
            <div className="w-[30%] h-[80%] bg-white mr-[10px] rounded-md overflow-hidden">
              <img src="" alt="" />
            </div>
            <p className="text-emerald-50">siSegar</p>
          </div>
          <div className="w-[20%] h-full flex items-center justify-center">
            <i
              className={`fa-solid fa-bars text-[32px] text-emerald-50 cursor-pointer transition-transform duration-150 ease-in-out focus:bg-emerald-300 active:scale-80`}
              onClick={toggleMenu}
            ></i>
          </div>
        </div>
      </nav>

      {/* Side Menu */}
      <div
        className={`w-[60vw] h-[90vh] fixed top-[10vh] right-0 bg-emerald-100 z-50 transform transition-transform duration-150 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="w-full h-fit">
          {["HOME", "ABOUT", "SERVICE", "BLOG"].map((item) => (
            <div
              key={item}
              className="w-full h-[5vh] bg-white flex items-center justify-center transition-colors duration-150 hover:bg-emerald-200"
            >
              <a href="#" className="text-emerald-950 font-medium">
                {item}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

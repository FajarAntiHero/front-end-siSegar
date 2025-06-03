import { useEffect, useRef } from "react";

export default function NavbarContainer() {
  const toggleRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const toggleBtn = toggleRef.current;
    const menu = menuRef.current;

    const handleToggle = () => {
      menu.classList.toggle("hidden");
    };

    toggleBtn.addEventListener("click", handleToggle);

    return () => {
      toggleBtn.removeEventListener("click", handleToggle);
    };
  }, []);

  return (
    <nav className="bg-emerald-950 p-4 text-white flex justify-between w-full h-[10vh] relative">
      <div className="w-[97.5%] h-full m-auto flex justify-between">
        <div className="w-[35%] h-full flex items-center justify-center">
          <div className="w-[30%] h-[80%] bg-white mr-[10px] rounded-md overflow-hidden">
            <img src="" alt="" />
          </div>
          <p className="text-emerald-50">siSegar</p>
        </div>
        <div className="w-[20%] h-full flex items-center justify-center">
          <i
            ref={toggleRef}
            className="fa-solid fa-bars text-[32px] text-emerald-50 cursor-pointer"
          ></i>
        </div>
      </div>
      <div
        ref={menuRef}
        className="w-[60vw] h-[90vh] absolute top-[10vh] right-0 bg-emerald-100 hidden"
      >
        <div className="w-full h-fit">
          {["HOME", "ABOUT", "SERVICE", "BLOG"].map((item) => (
            <div
              key={item}
              className="w-full h-[5vh] bg-white flex items-center justify-center"
            >
              <a href="#" className="text-emerald-950">
                {item}
              </a>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

import { useState } from "react";
import "./assets/style/header.css";
import logo from "./assets/vector/IamJem.svg";

function Header() {
  const [open, setOpen] = useState(false);

  const scrollToPosition = (y) => {
  setOpen(false); // close mobile menu
  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
};


  return (
  <header className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-md">
  <nav className="flex justify-between items-center max-w-[84%] mx-auto py-6 px-2">
    
    <div>
      <img className="w-10" src={logo} alt="logo" />
    </div>

    <button
      onClick={() => setOpen(!open)}
      className="hidden max-[426px]:block text-3xl"
    >
      {open ? "✕" : "☰"}
    </button>

    <div
      className={`
        px-5
        max-[426px]:absolute
        max-[426px]:top-16
        max-[426px]:inset-x-0
        max-[426px]:bg-white/60
        max-[426px]:transition-all
        max-[426px]:duration-300
        ${open ? "max-[426px]:block" : "max-[426px]:hidden"}
      `}
    >
      <ul className="
        flex 
        md:flex-row 
        flex-col 
        md:items-center 
        md:gap-[1.6vw] 
        gap-8 
        text-[1.4rem]
        max-[426px]:items-center
        max-[426px]:py-6
      ">
        <li><button onClick={() => scrollToPosition(1100)}>01.ABOUT ME</button></li>
        <li><button onClick={() => scrollToPosition(2000)} className="hover:text-[#f2552e]" href="">02.SKILLS</button></li>
        <li><button onClick={() => scrollToPosition(4400)} className="hover:text-[#f2552e]" href="">03.PROJECTS</button></li>
        <li><button onClick={() => scrollToPosition()} className="hover:text-[#f2552e]" href="">04.EMAIL</button></li>
      </ul>
    </div>
  </nav>
</header>
  );
}

export default Header;

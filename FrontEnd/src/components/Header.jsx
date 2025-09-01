import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="bg-[#1F6482] text-white py-[16px] flex justify-between items-center lg:py-[24px]" style={{ fontFamily: "'Noto Sans', sans-serif" }}>
      <img
        src="src/assets/UANE.svg"
        alt="Logo UANE"
        className="w-[75px] h-[24px] ml-[12px] lg:ml-[72px]"
      />

     
      <nav className="hidden lg:flex space-x-8">
        <a href="#courses" className="hover:text-gray-300 font-bold text-xs">
          CURSOS
        </a>
        <a href="#teachers" className="hover:text-gray-300 font-bold text-xs">
          PROFESSORES
        </a>
        <a href="#about" className="hover:text-gray-300 font-bold text-xs">
          SOBRE A UANE
        </a>
        <a href="#partners" className="hover:text-gray-300 font-bold text-xs">
          PARCERIAS
        </a>
        <a
          href="#portal"
          className="flex items-center gap-2 hover:text-gray-300 font-bold text-xs mr-[72px]"
        >
          <i className="fa-solid fa-user-circle text-sm"></i>
          PORTAL DO ALUNO
        </a>
      </nav>

      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mr-[12px] lg:hidden p-2"
        aria-label="Menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

  
      {isOpen && (
        <div className="absolute top-[70px] right-3 w-[220px] rounded-2xl bg-white/90 backdrop-blur-md shadow-xl p-4 flex flex-col space-y-4 text-[#1F6482] z-50 animate-fadeIn">
          <a
            href="#courses"
            className="hover:text-[#145265] font-semibold text-sm"
            onClick={() => setIsOpen(false)}
          >
            CURSOS
          </a>
          <a
            href="#teachers"
            className="hover:text-[#145265] font-semibold text-sm"
            onClick={() => setIsOpen(false)}
          >
            PROFESSORES
          </a>
          <a
            href="#about"
            className="hover:text-[#145265] font-semibold text-sm"
            onClick={() => setIsOpen(false)}
          >
            SOBRE A UANE
          </a>
          <a
            href="#partners"
            className="hover:text-[#145265] font-semibold text-sm"
            onClick={() => setIsOpen(false)}
          >
            PARCERIAS
          </a>
          <a
            href="#portal"
            className="flex items-center gap-2 hover:text-[#145265] font-semibold text-sm"
            onClick={() => setIsOpen(false)}
          >
            <i className="fa-solid fa-user-circle text-sm"></i>
            PORTAL DO ALUNO
          </a>
        </div>
      )}
    </header>
  );
}

import "@fortawesome/fontawesome-free/css/all.min.css";



export default function Header() {
    return (

        <header className="bg-[#1F6482] text-white py-[16px] flex justify-between items-center lg:py-[24px] " style={{ fontFamily: "'Noto Sans', sans-serif" }}>
            <img src="src/assets/UANE.svg" alt="Logo UANE" className="w-[75px] h-[24px] ml-[12px] lg:ml-[72px]" />
            <nav className="hidden lg:flex space-x-8">
                <a href="#courses" className="hover:text-gray-300 font-bold text-sm">CURSOS</a>
                <a href="#teachers" className="hover:text-gray-300 font-bold text-sm">PROFESSORES</a>
                <a href="#about" className="hover:text-gray-300 font-bold text-sm">SOBRE A UANE</a>
                <a href="#partners" className="hover:text-gray-300 font-bold text-sm">PARCERIAS</a>
                <a href="#portal" className="flex items-center gap-2 hover:text-gray-300 font-bold text-sm mr-[72px]">
                    <i className="fa-solid fa-user-circle text-xl"></i>
                    PORTAL DO ALUNO
                </a>
            </nav>
            <button className=" mr-[12px]  lg:hidden">☰</button>
        </header>
    );
}
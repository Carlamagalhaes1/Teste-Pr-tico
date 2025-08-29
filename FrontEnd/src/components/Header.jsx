



export function Header() {
    return (
        
        <header className="bg-[#1F6482] text-white p-4 flex justify-between items-center" style={{ fontFamily: "'Noto Sans', sans-serif" }}>
            <img src="/UANE.svg" alt="Logo UANE" className="h-10" />
            <nav className="hidden md:flex space-x-6">
                <a href="#courses" className="hover:text-gray-300 font-bold">CURSOS</a>
                <a href="#teachers" className="hover:text-gray-300 font-bold">PROFESSORES</a>
                <a href="#about" className="hover:text-gray-300 font-bold">SOBRE</a>
                <a href="#partners" className="hover:text-gray-300 font-bold">PARCERIAS</a>
            </nav>
            <button className="md:hidden">☰</button>
        </header>
    );
}
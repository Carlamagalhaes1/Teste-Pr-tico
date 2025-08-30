export default function Investment() {
  return (
    <section className=" p-4 sm:p-4 md:pt-0 md:pb-0 lg:px-[72px] lg:pb-4 font-sans">
     
      <h2 className="text-xl sm:text-3xl font-bold text-black mb-4 border-l-4 border-[#138E98] pl-2">
        Investimento
      </h2>

    
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
        
      
        <div className="bg-[#04254E] text-white p-4 lg:p-8 flex flex-col justify-center items-center border border-[#70707082] rounded-lg  text-center">
          <p className="text-base md:text-[20px] font-normal">
            3º lote: Total de R$ 2.835,35 <br /> + Matrícula de R$ 70
          </p>
          <h3 className="text-3xl md:text-3xl font-bold mt-7">
            Até 15X de R$ 189,02
          </h3>
          <button className="mt-7 bg-[#138E98] hover:bg-teal-700 text-white rounded-3xl px-6 py-2 font-semibold transition">
            Faça sua matrícula
          </button>
        </div>

        <div className="bg-[#7070702a] p-2  lg:p-6 flex flex-col justify-center items-center rounded-lg border border-[#70707082] text-center">
          <h3 className="text-xl font-bold flex items-center gap-1">
            <h1 className="text-[#555555] text-4xl font-serif">OP</h1>
            <span className="text-yellow-500 font-bold">+</span>
          </h3>
          <p className="font-bold text-black lg:text-2xl mt-2">
            Ganhe acesso grátis por 90 dias.
          </p>
          <p className="text-sm text-[#1E1E1E]  mt-2">
            Reportagens & Colunistas; <br /> Filmes & Séries; <br /> Podcasts & Web Stories.
          </p>
          <a
            href="#"
            className="mt-3 text-[#1F6482] text-sm font-bold hover:underline"
          >
            Conheça o OPOVO+
          </a>
        </div>
      </div>
    </section>
  );
}

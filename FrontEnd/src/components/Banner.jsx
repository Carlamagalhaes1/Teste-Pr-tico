export default function Banner() {
    return (
        <section className="bg-[#17254D] text-white flex flex-col lg:flex-row items-center justify-between px-6 py-10 lg:px-16 lg:py-[48px] font-sans">

            <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0 lg:order-2">
                <img src="src/assets/images/fotodocurso.png" alt="Foto do curso Secretaria Escolar" className="rounded-lg object-cover md:h-[433px] md:w-[596px] lg:w-[636px] lg:h-[462px]"/>
            </div>
            <div className="w-full lg:w-1/2 lg:pr-[72px] text-center lg:text-left space-y-4 lg:order-1 ">
     
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                    <span className="border border-[#D0FBEB] text-[#D0FBEB] text-xs font-semibold px-3 py-1 lg:text-[16px] ">
                        TÉCNICO
                    </span>
                    <span className="border border-[#D0FBEB] text-[#D0FBEB] text-xs font-semibold px-3 py-1 lg:text-[16px]">
                        TECNOLOGIA E PROFISSÃO
                    </span>
                </div>

                
                <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold">
                    Secretaria Escolar
                </h2>

              
                <p className="text-sm leading-relaxed max-w-2xl mx-auto lg:mb-[24px] lg:mx-0 lg:text-[17px]">
                    O(a) profissional em Secretaria Escolar é peça-chave para a gestão
                    eficiente da escola, garantindo o funcionamento legal e organizado da instituição. Responsável por gerenciar a documentação dos estudantes, ele(a) também contribui para o alinhamento do currículo escolar com as necessidades reais dos alunos. Seja essencial para o sucesso da escola e para a formação de um ambiente educacional estruturado. Invista na sua capacitação e faça a diferença na gestão escolar!
                </p>

                <div className="flex gap-12  lg:mb-[85px] ">
                    <div className="flex justify-center lg:justify-start">
                    <img
                        src="src/assets/images/Barrademarcas.png"
                        alt="Realização Logos"
                        className="w-[180px] md:w-[220px]"
                    />
                </div>

                
                <div className="flex justify-center lg:justify-start">
                    <button className="bg-[#138E98] hover:bg-[#009970] text-white px-6 py-3 rounded-[500px] font-semibold">
                        Faça sua matrícula
                    </button>
                </div>

                </div>

                
            </div>
        </section>
    );
}

export default function BANNER() {
    return (
        <div className="bg-[#17254D] text-white lg:px-[72px]">
            <div className="container mx-auto px-4 lg:py-14 md:px-0 py-6 md:py-8 ">
                <div className="flex flex-col lg:flex-row lg:px-0 justify-between gap-6 md:gap-8 md:px-16">

                    
                    <div className="w-full md:w-auto  md:h-[462px] lg:w-[636px] lg:h-[462px] relative rounded-lg overflow-hidden order-1 lg:order-2">
                        <img
                            src="src/assets/images/Fotodocurso.png"
                            alt="Profissional de Secretaria Escolar"
                            className="object-cover w-full h-full"
                        />
                    </div>

                    
                    <div className="w-full md:flex-1 md:max-w-2xl order-2 lg:order-1">

                        <div className="flex flex-wrap gap-3 mt-4 mb-4 md:mt-0">
                            <span className="px-3 py-1 text-sm text-[#D0FBEB] font-medium border border-[#D0FBEB]">
                                TÉCNICO
                            </span>
                            <span className="px-3 py-1 text-sm text-[#D0FBEB] md:text-sm font-medium border border-[#D0FBEB]">
                                TECNOLOGIA E PROFISSÃO
                            </span>
                        </div>

                        <h1 className="text-5xl text-[39px] lg:text-[40px] md:text-5xl  font-bold mb-4 text-balance">
                            Secretaria Escolar
                        </h1>

                        <p className="text-[21px] lg:text-[17px] md:text-[22px] leading-tight mb-7 text-slate-200">
                            O(a) profissional em Secretaria Escolar é peça-chave para a gestão eficiente da escola, garantindo o
                            funcionamento legal e organizado da instituição. Responsável por gerenciar a documentação dos estudantes,
                            ele(a) também contribui para o alinhamento do currículo escolar com as necessidades reais dos alunos. Seja
                            essencial para o sucesso da escola e para a formação de um ambiente educacional estruturado. Invista na
                            sua capacitação e faça a diferença na gestão escolar!
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 lg:mb-[100px]">
                            <div className="flex justify-center sm:justify-start">
                                <img
                                    src="src/assets/images/Barrademarcas.png"
                                    alt="Logos das instituições parceiras"
                                    width={235}
                                    height={57}
                                />
                            </div>
                            <button className="bg-[#138E98] hover:bg-teal-600 text-white px-8 py-3 font-medium rounded-full sm:w-auto transition">
                                Faça sua matrícula
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

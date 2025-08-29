export default function BANNER() {
    return (
        <div className="bg-[#17254D] text-white lg:px-[72px]">
            <div className="container mx-auto px-4 md:px-6 py-6 md:py-8 lg:py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">

                    <div className="w-full  md:flex-1 md:max-w-lg order-2 md:order-1 ">

                        <div className="flex flex-wrap gap-3 mt-4 mb-4">
                            <span className="px-3 py-1 text-sm text-[#D0FBEB] font-medium border border-[#D0FBEB]">
                                TÉCNICO
                            </span>
                            <span className="px-3 py-1 text-sm  text-[#D0FBEB] md:text-sm font-medium border border-[#D0FBEB]">
                                TECNOLOGIA E PROFISSÃO
                            </span>
                        </div>


                        <h1 className="text-5xl text-[39px] md:text-3xl lg:text-[40px] font-bold mb-4 text-balance">
                            Secretaria Escolar
                        </h1>


                        <p className="text-[21px] lg:text-[17px]  leading-tight mb-7 text-slate-200 ">
                            O(a) profissional em Secretaria Escolar é peça-chave para a gestão eficiente da escola, garantindo o
                            funcionamento legal e organizado da instituição. Responsável por gerenciar a documentação dos estudantes,
                            ele(a) também contribui para o alinhamento do currículo escolar com as necessidades reais dos alunos. Seja
                            essencial para o sucesso da escola e para a formação de um ambiente educacional estruturado. Invista na
                            sua capacitação e faça a diferença na gestão escolar!
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4  lg:mb-[100px]  ">
                            <div className="flex justify-center sm:justify-start">
                                <img
                                    src="src/assets/images/Barrademarcas.png"
                                    alt="Logos das instituições parceiras"
                                    width={235}
                                    height={57}
                                    className=""
                                />
                            </div>
                            <button className="bg-[#138E98]  hover:bg-teal-600 text-white  px-8 py-3 font-medium rounded-full  sm:w-auto transition">
                                Faça sua matrícula
                            </button>
                        </div>
                    </div>

                    <div className="w-full md:w-[336px] md:h-[462px] lg:w-[636px] lg:h-[462px] relative rounded-lg overflow-hidden order-1 md:order-2">
                        <img
                            src="src/assets/images/Fotodocurso.png"
                            alt="Profissional de Secretaria Escolar"
                            className="object-cover w-full h-full"
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

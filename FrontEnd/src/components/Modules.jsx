import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const data = [
  {
    title: "Módulo 1 - Secretaria escolar",
    content:
      "Você se apropriará dos conhecimentos relativos ao perfil do secretário escolar, atribuições, rotina e atendimento ao público, compreendendo a relação da ética e moral na vida profissional e, como a liderança e organização podem contribuir para o sucesso desse setor."
  },
  {
    title: "Módulo 2 - Redação oficial e informática",
    content:
      "Apresentação dos modelos de documentos e redação oficiais, apontando programas que auxiliam o profissional da Secretaria Escolar na elaboração dos mesmos. Você saberá a importância da redação oficial no âmbito educacional e aprenderá a utilizar programas como o Word do Microsoft Office e o Writer do OpenOffice.org e, o Excel do Microsoft Office e do Calc do OpenOffice.org., para a criação, edição e impressão de documentos."
  },
  {
    title: "Módulo 3 - Estatística básica e indicadores educacionais",
    content:
      "Introdução à estatística aplicada à educação, com noções de coleta, organização, interpretação de dados e uso de indicadores educacionais para auxiliar na gestão escolar."
  },
  {
    title: "Módulo 4 - Planejamento, gestão e legislação educacional",
    content:
      "Estudo da legislação educacional brasileira, políticas públicas e instrumentos de gestão aplicados ao ambiente escolar, além de noções sobre planejamento estratégico."
  },
  {
    title: "Módulo 5 - Funcionamento e organização da secretaria escolar",
    content:
      "Aborda os processos de escrituração escolar, organização de arquivos, expedição de documentos e fluxo de informações administrativas no âmbito escolar."
  },
  {
    title: "Módulo 6 - Legislação educacional",
    content:
      "Análise da legislação específica que regulamenta a educação no Brasil, incluindo normas, diretrizes e responsabilidades dos profissionais da secretaria escolar."
  },
  {
    title: "Módulo 7 - Estágio supervisionado",
    content:
      "Vivência prática em ambiente escolar supervisionada, aplicando os conhecimentos adquiridos durante o curso em situações reais do dia a dia da secretaria escolar."
  }
];



export default function Modules() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" bg-[#F3F3F3] p-4 sm:p-6 md:p-8 shadow-md lg:px-[72px] font-sans">
      <h2 className="text-xl sm:text-3xl font-bold text-black mb-4 border-l-4 border-[#138E98] pl-2">
        Oque você vai aprender
      </h2>

      <div className="space-y-3">
        {data.map((item, index) => (
          <div
            key={index}
            className=" bg-[#DFDFDF] shadow-sm rounded-sm"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full rounded-sm  flex items-center justify-between px-4 py-3 text-left text-sm sm:text-base font-semibold text-[#1F6482] hover:bg-gray-200"
            >
              {item.title}
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-blue-700" />
              ) : (
                <ChevronDown className="w-5 h-5 text-blue-700" />
              )}
            </button>

            {openIndex === index && (
              <div className="px-4 rounded-b-sm  pb-4 p-2 text-gray-700 bg-white text-sm sm:text-base">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

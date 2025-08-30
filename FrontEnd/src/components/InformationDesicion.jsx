import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const data = [
  {
    title: "Competências que você vai desenvolver",
    content: "O curso aborda o papel do(a) secretário(a) escolar, suas atribuições e competências, incluindo organização de arquivos, credenciamento de escolas e relações interpessoais no ambiente de trabalho. Também apresenta noções de redação oficial, com modelos de documentos, gramática aplicada e uso adequado de pronomes de tratamento. Na parte de informática, são exploradas funções básicas de editores de texto e planilhas para organização e apresentação de dados. Por fim, o curso trata dos principais instrumentais da Secretaria Escolar, como a escrituração, documentos de gestão e avaliações de aprendizagem."
  },
  {
    title: "Para quem se destina",
    content:
      "Esse curso é para você, que já concluiu ou está concluindo o ensino médio e quer se capacitar para entrar no mercado de trabalho. É gestor escolar e quer ampliar os seus conhecimentos a respeito dos processos realizados na secretaria escolar. Que deseja ter uma formação técnica para estar preparado(a)para realizar concurso público e atuar em escolas públicas ou privadas."
  },
  {
    title: "Quando será o pagamento da primeira mensalidade e a data de início do curso?",
    content: "As aulas começam 21 de julho, mas a 1ª mensalidade do Curso Técnico em Secretaria Escolar será cobrada apenas 10 de agosto de 2025."
  },
  {
    title: "Quais são as condições de pagamento e quais os descontos oferecidos?",
    content: "À vista (20% de desconto): Valor final:  R$ 2.268,28 Parcelado em 2 a 6 vezes (10% de desconto): Valor final: R$ 2.551,80 Parcelamento acima de 6 vezes (sem desconto): Valor final: R$ 2.835,35"
  }
];

export default function InformationDecision() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" bg-[#F3F3F3] p-4 sm:p-6 md:p-8 shadow-md lg:px-[72px] font-sans">
      <h2 className="text-xl sm:text-3xl font-bold text-gray-800 mb-4 border-l-4 border-[#138E98] pl-2">
        Informações para decidir
      </h2>

      <div className="space-y-3">
        {data.map((item, index) => (
          <div
            key={index}
            className=" bg-[#DFDFDF] shadow-sm"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between px-4 py-3 text-left text-sm sm:text-base font-semibold text-[#1F6482] hover:bg-gray-200"
            >
              {item.title}
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-blue-700" />
              ) : (
                <ChevronDown className="w-5 h-5 text-blue-700" />
              )}
            </button>

            {openIndex === index && (
              <div className="px-4 pb-4 p-2 text-gray-700 bg-white text-sm sm:text-base">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

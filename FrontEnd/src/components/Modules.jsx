import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const data = [
  {
    title: "Módulo 1 - Secretaria escolar",
    content:
      `Você se apropriará dos conhecimentos relativos ao perfil do secretário escolar, atribuições,
       rotina e atendimento ao público, compreendendo a relação da ética e moral na vida profissional
       e, como a liderança e organização podem contribuir para o sucesso desse setor.`
  },
  {
    title: "Módulo 2 - Redação oficial e informática",
    content:
      `Apresentação dos modelos de documentos e redação oficiais, apontando programas que auxiliam o profissional
       da Secretaria Escolar na elaboração dos mesmos. Você saberá a importância da redação oficial no âmbito educacional
       e aprenderá a utilizar programas como o Word do Microsoft Office e o Writer do OpenOffice.org e, o Excel do Microsoft Office
       e do Calc do OpenOffice.org., para a criação, edição e impressão de documentos.`
  },
  {
    title: "Módulo 3 - Estatística básica e indicadores educacionais",
    content:
      `Estudo sobre Estatística e os Indicadores Educacionais que o profissional de Secretaria Escolar precisa dominar para mensurar
       alguns resultados da instituição de ensino. Você aprenderá a importância da estatística no dia a dia e no setor de Secretaria Escolar,
       conhecendo a aplicação da estatística por meio da coleta de dados, representando os resultados de diferentes modos.`
  },
  {
    title: "Módulo 4 - Planejamento, gestão e legislação educacional",
    content: `Apresentação da história e organização da educação brasileira, imprescindível para o conhecimento da progressão da educação na história social,
         política, econômica e legislativa do país. Você conhecerá a trajetória histórica da educação,
         sua organização, os serviços educacionais, sistemas de informatização
         criados pelo Ministério da Educação, para o controle e acompanhamento das políticas públicas educacionais no país
         , além de apresentar aspectos ligados ao processo de ensino e aprendizagem,
         advindos de teorias dos campos da Pedagogia e Psicologia.`
  },
  {
    title: "Módulo 5 - Funcionamento e organização da secretaria escolar",
    content:
      `A escrituração escolar, os documentos de gestão e os processos de avaliação na educação. Você aprenderá sobre os registros relativos à vida escolar do aluno e da escola. Os procedimentos de elaboração
       dos documentos de gestão que norteiam a prática pedagógica e organizam a instituição de ensino de forma democrática. Além disso, conhecerá os processos de avaliação da instituição de ensino e aqueles 
       provenientes do Ministério da Educação.`
  },
  {
    title: "Módulo 6 - Legislação educacional",
    content: `Estudo da legislação nacional, estadual e modelos de documentos escolares oficiais. Você estudará a legislação nacional que orienta a organização escolar básica, seus níveis e modalidade
          de ensino, além das orientações de funcionamento escolar a nível estadual e, os documentos escolares oficiais utilizados.`
  },
  {
    title: "Módulo 7 - Estágio supervisionado",
    content: `O módulo 7 é o momento em que você realizará o Estágio Curricular Supervisionado, conforme regulamenta a Resolução CNE/CEB n° 02/2005 e Resolução 
          n° 466/2018 do Conselho Estadual de Educação do Ceará.
           Neste período, você irá a campo vivenciar o espaço da Secretaria Escolar,
           aprimorando os conhecimentos obtidos ao dialogar com a realidade prática profissional.`
    
  }
];



export default function Modules() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" bg-[#F3F3F3] p-4 sm:p-6 md:p-8  lg:px-[72px] font-sans">
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
              className="w-full rounded-sm  flex items-center justify-between px-4 py-3 text-left text-lg sm:text-base font-semibold text-[#1F6482] hover:bg-gray-200"
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

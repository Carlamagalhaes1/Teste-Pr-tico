export default function Modules() {
  const modulos = [
    "Secretaria escolar",
    "Redação oficial e informática",
    "Estatística básica e indicadores educacionais",
    "Planejamento, gestão e legislação educacional",
    "Funcionamento e organização da secretaria escolar",
    "Legislação educacional",
    "Estágio supervisionado",
  ];

  return (
    <section className="p-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">O que você vai aprender</h2>
      <ul className="space-y-3">
        {modulos.map((modulo, index) => (
          <li key={index} className="bg-white shadow rounded-lg p-4 hover:shadow-md transition">
            {modulo}
          </li>
        ))}
      </ul>
    </section>
  );
}
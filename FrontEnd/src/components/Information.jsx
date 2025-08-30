
export default function Information() {
  return (
    <section className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:px-16 grid-cols-4-custom">
          <div className="text-center lg:text-left">
            <h3 className="text-[#999999] text-[14px] font-medium mb-1 uppercase">
              CARGA HORÁRIA
            </h3>
            <p className="text-[24px] font-light text-black ">
              1.500 horas
            </p>
          </div>
          <div className="text-center lg:text-left">
            <h3 className="text-[#999999] text-[14px] font-medium mb-1 uppercase">
              CONTEÚDO
            </h3>
            <p className="text-[24px] font-light text-black ">
              7 módulos
            </p>
          </div>
          <div className="text-center lg:text-left">
            <h3 className="text-[#999999] text-[14px] font-medium mb-1 uppercase">
              PERÍODO DE ACESSO
            </h3>
            <p className="text-[24px] font-light text-black ">
              15 meses
            </p>
          </div>
          <div className="text-center lg:text-left">
            <h3 className="text-[#999999] text-[14px] font-medium mb-1 uppercase">
              MODALIDADE
            </h3>
            <p className="text-[24px] font-light text-black ">
              EAD
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

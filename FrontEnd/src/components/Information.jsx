export default function Information() {
  return (
    <section className="bg-[#F3F3F3] py-10  ">
      <div className="container mx-auto ">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:px-9 grid-cols-4-custom">
          <div className="text-center lg:text-left">
            <h3 className="text-[#999999] text-[14px]  font-medium mb-1 uppercase lg:text-lg">
              CARGA HORÁRIA
            </h3>
            <p className="text-3xl font-light text-black ">
              1.500 horas
            </p>
          </div>
          <div className="text-center lg:text-left">
            <h3 className="text-[#999999] text-[14px]  font-medium mb-1 uppercase lg:text-lg">
              CONTEÚDO
            </h3>
            <p className="text-3xl font-light text-black ">
              7 módulos
            </p>
          </div>
          <div className="text-center lg:text-left">
            <h3 className="text-[#999999] text-[14px]  font-medium mb-1 uppercase lg:text-lg">
              PERÍODO DE ACESSO
            </h3>
            <p className="text-3xl font-light text-black ">
              15 meses
            </p>
          </div>
          <div className="text-center lg:text-left">
            <h3 className="text-[#999999] text-[14px]  font-medium mb-1 uppercase lg:text-lg">
              MODALIDADE
            </h3>
            <p className="text-3xl font-light text-black ">
              EAD
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { MessageCircle } from "lucide-react";
import { FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#DFDFDF] w-full">
      <div className="max-w-7xl mx-auto py-10 grid grid-cols-1 md:grid-cols-4 gap-8 px-6 lg:px-12 text-center md:text-left">
        <div>
          <img src={"src/assets/images/Logo.png"} alt="UANE Logo" className="h-12 mb-3 mx-auto md:mx-0" />
        </div>
        <div>
          <h3 className="text-[#555555] font-semibold text-lg mb-2">Informações</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="text-[#138E98] hover:underline">
                Perguntas Frequentes
              </a>
            </li>
            <li>
              <a href="#" className="text-[#138E98] hover:underline">
                Política de Privacidade
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-[#555555] font-semibold text-lg mb-2">Fale conosco</h3>
          <a
            href="tel:+5585993328888"
            className="flex items-center justify-center md:justify-start gap-2 text-[#138E98] font-semibold hover:underline"
          >
            <MessageCircle size={18} /> (85) 99332-8888
          </a>
        </div>
        <div>
          <h3 className="text-[#555555] font-semibold text-lg mb-2">Nos acompanhe nas redes sociais</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#" className="text-[#138E98] hover:text-[#0f6c70]">
              <FaYoutube size={24} />
            </a>
            <a href="#" className="text-[#138E98] hover:text-[#0f6c70]">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-[#138E98] hover:text-[#0f6c70]">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-[#1F6482] text-white px-4 text-sm font-normal py-4 flex flex-col items-center text-center md:flex-row md:justify-between md:items-center md:text-left lg:px-20 ">
        <span>Av. Aguanambi, 282 A - Joaquim Távora, Fortaleza - CE, 60055-402</span>
        <span className="font-semibold text-lg mt-4 lg:text-sm lg:mt-0">EXPEDIENTE</span>
      </div>
    </footer>
  );
}

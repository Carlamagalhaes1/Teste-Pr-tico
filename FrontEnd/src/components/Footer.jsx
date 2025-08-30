import { Phone, MessageCircle } from "lucide-react";
import { FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-[#DFDFDF] w-full">
      
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 items-center gap-6 text-center md:text-left">
        
      
        <div className="flex flex-col items-center md:items-start">
          <img src={"src/assets/images/Logo.png"} alt="UANE Logo" className="h-12 mb-2" />
        </div>

       
        <div className="flex flex-col space-y-2">
          <h3 className="text-gray-800 font-semibold">Informações</h3>
          <a href="#" className="text-[#138E98] hover:underline">
            Perguntas Frequentes
          </a>
          <a href="#" className="text-[#138E98] hover:underline">
            Política de Privacidade
          </a>
        </div>

        <div className="flex flex-col items-center md:items-end space-y-3">
          <div>
            <h3 className="text-gray-800 font-semibold">Fale conosco</h3>
            <a
              href="tel:+5585993328888"
              className="flex items-center justify-center md:justify-start gap-2 text-[#138E98] font-semibold hover:underline"
            >
              <MessageCircle size={18} /> (85) 99332-8888
            </a>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-2">
            <h3 className="text-gray-800 font-semibold">
              Nos acompanhe nas redes sociais
            </h3>
            <div className="flex gap-4">
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
      </div>

      
      <div className="bg-[#1F6482] text-white text-center text-sm font-semibold py-2">
        Av. Aguanambi, 282 A - Joaquim Távora, Fortaleza - CE, 60055-402 &nbsp; | &nbsp; EXPEDIENTE
      </div>
    </footer>
  );
}

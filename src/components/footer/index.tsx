import Image from "next/image";
import React from "react";
import LinkFooter from "./LinkFooter";
import IconFooter from "./IconFooter";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="h-1 bg-yellow-600 w-full mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 border-l-4 border-yellow-600 pl-3">
              Institucional
            </h3>
            <ul className="space-y-2">
              <LinkFooter href="/institucional">
                  CPA
                
              </LinkFooter>
              <LinkFooter href="/documentos-institucionais">
                  Documentos Institucionais
                
              </LinkFooter>
              <LinkFooter href="/politica_privacidade">
                  Política de privacidade
                
              </LinkFooter>
              <LinkFooter href="/institucional">
                  Quem somos
                
              </LinkFooter>
              <LinkFooter href="/academico">
                  Acadêmico
                
              </LinkFooter>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 border-l-4 border-yellow-600 pl-3">
              Cursos
            </h3>
            <ul className="space-y-2">
              <LinkFooter href="/cursos/graduacao-presencial/bacharelado">
                  Graduação Presencial
                
              </LinkFooter>
              <LinkFooter
                  href="/cursos/graduacao-semipresencial"
                >
                  Graduação Semi Presencial
              </LinkFooter>
              <LinkFooter href="/cursos/graduacao-ead">
                  Graduação EAD
                
              </LinkFooter>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 border-l-4 border-yellow-600 pl-3">
              Atendimento
            </h3>
            <ul className="space-y-2">
              <LinkFooter
                  href="mailto:comercial@nossafaculdade.com.br"
                >
                  comercial@nossafaculdade.com.br
              </LinkFooter>
                <LinkFooter
                  href="mailto:secretaria@nossafaculdade.com.br"
                >
                  secretaria@nossafaculdade.com.br
                </LinkFooter>
              <LinkFooter
                  href="https://api.whatsapp.com/send/?phone=558001770800&amp;text&amp;type=phone_number&amp;app_absent=0"
                >
                  (88) 0800 1770 800
              </LinkFooter>
              <LinkFooter
                  href="https://api.whatsapp.com/send/?phone=558899139972&amp;text&amp;type=phone_number&amp;app_absent=0"
                >
                  (88) 99913-9972
              </LinkFooter>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 border-l-4 border-yellow-600 pl-3">
              Redes Sociais
            </h3>
            <div className="flex space-x-4">
              <IconFooter
                href="https://www.instagram.com/unifameccariri/"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </IconFooter>
              <IconFooter
                href="https://www.facebook.com/fameccariri/"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.326V1.326C24 .593 23.407 0 22.675 0z"></path>
                </svg>
              </IconFooter>
              <IconFooter
                href="https://www.youtube.com/@gruponossafaculdade7981"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M23.498 6.186a2.99 2.99 0 00-2.106-2.11C19.622 3.5 12 3.5 12 3.5s-7.622 0-9.392.576a2.99 2.99 0 00-2.106 2.11C0 7.956 0 12 0 12s0 4.044.502 5.814a2.99 2.99 0 002.106 2.11C4.378 20.5 12 20.5 12 20.5s7.622 0 9.392-.576a2.99 2.99 0 002.106-2.11C24 16.044 24 12 24 12s0-4.044-.502-5.814zM9.75 15.568V8.432L15.75 12l-6 3.568z"></path>
                </svg>
              </IconFooter>
            </div>
          </div>
          <div className="mt-4 lg:mt-0 text-left">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://emec.mec.gov.br/emec/consulta-cadastro/detalhamento/d96957f455f6405d14c6542552b0f6eb/MjI5MzI="
            >
              <Image
                alt="QR Code de Validação do MEC"
                loading="lazy"
                width="120"
                height="120"
                decoding="async"
                data-nimg="1"
                className=""
                src="/qr-code.webp"
             />
              <p className="mt-2 text-sm text-white hover:text-yellow-400 transition">
                <span className="font-semibold">
                  Consulte o cadastro da <br /> Instituição no Sistema e-MEC
                </span>
              </p>
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-6">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="text-sm">
              Av. Padre Cícero, 3000 - São José, Crato - CE, 63132-022
            </p>
            <p className="text-sm">
              Horário de atendimento: Segunda a sexta das 8h às 17h
            </p>
            <p className="text-sm">UNIFAMEC - CNPJ: 23.957.843/0001-86</p>
          </div>
        </div>
        <div className="text-center mt-6 text-sm text-gray-400">
          <p>©2025 UNIFAMEC - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

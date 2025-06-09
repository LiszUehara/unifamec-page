import { GraduationCap, BookOpen, Award, CalendarCheck } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  return (
    <div className="bg-gray-50">
      <div className="relative bg-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre a UNIFAMEC</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Excelência em educação que transforma vidas e constrói o futuro
          </p>
        </div>
      </div>

      {/* História e Missão */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Nossa História</h2>
            <p className="text-lg text-gray-700 mb-6">
              A Faculdade Metropolitana do Cariri – UNIFAMEC é uma instituição que preza pela qualidade da educação, formando profissionais qualificados, éticos e comprometidos com o desenvolvimento da sociedade. A partir de uma visão que a insere no plano nacional, a UNIFAMEC se adequa às exigências da nova era, buscando sempre a inovação e a autonomia para avançar no ensino superior. 
            </p>
            <p className="text-lg text-gray-700">
              Integrante do grupo Nossa Faculdade, a UNIFAMEC compartilha da missão de ampliar o acesso à educação superior de excelência em todo o Brasil. Essa conexão fortalece sua estrutura acadêmica, amplia oportunidades para os alunos e garante o alinhamento com as melhores práticas de gestão, tecnologia e inovação no ensino. Com sede em Crato-CE, a UNIFAMEC valoriza a formação integral do estudante, unindo teoria e prática, tecnologia e humanização, tradição e inovação
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/campus-unifamec.webp"
              alt="Campus UNIFAMEC"
              width={800}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
          <div className="order-last md:order-first">
            <Image
              src="/equipe-unifamec.webp" 
              alt="Equipe UNIFAMEC"
              width={800}
              height={500}
              className="w-full h-auto rounded-xl shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Missão e Valores</h2>
            <p className="text-lg text-gray-700 mb-6">
              Nossa missão é promover educação de qualidade formando profissionais e cidadãos competentes, éticos, empreendedores e comprometidos com o desenvolvimento da economia regional sustentável.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span className="text-gray-700">Responsabilidade social e ambiental</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span className="text-gray-700">Transparência, Compromisso com a ética e a qualidade</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">✓</span>
                <span className="text-gray-700">Inovação e empreendedorismo</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Destaques */}
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Nossos Diferenciais</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="flex justify-center mb-4">
                <GraduationCap className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Corpo Docente</h3>
              <p className="text-gray-600">
                Professores com ampla experiência acadêmica e de mercado
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="flex justify-center mb-4">
                <BookOpen className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Infraestrutura</h3>
              <p className="text-gray-600">
                Laboratórios modernos, biblioteca atualizada e espaços de convivência
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="flex justify-center mb-4">
                <Award className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reconhecimento</h3>
              <p className="text-gray-600">
                Cursos reconhecidos pelo MEC com conceitos de excelência
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="flex justify-center mb-4">
                <CalendarCheck className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexibilidade</h3>
              <p className="text-gray-600">
                Modalidades presenciais e EAD para atender diferentes necessidades
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Números */}
      <div className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">UNIFAMEC em Números</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">+30.000</div>
              <div className="text-xl">Alunos Formados</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">+50</div>
              <div className="text-xl">Cursos Oferecidos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">+100</div>
              <div className="text-xl">Professores</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">+15</div>
              <div className="text-xl">Anos de História</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Venha fazer parte da UNIFAMEC</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Transforme seu futuro com uma educação que combina tradição e inovação
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/cursos/graduacao-presencial/bacharelado"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors"
            >
              Conheça Nossos Cursos
            </a>
            <a
              href="/contact"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg text-lg font-medium transition-colors"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
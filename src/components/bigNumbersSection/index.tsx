// components/SectionBigNumbers.tsx

import Image from "next/image";
import Link from "next/link";

export default function SectionBigNumbers() {
  return (
    <section
      data-testid="big-numbers-section"
      data-section="section_preparado_para_o_mercado"
      className="bg-blue-900 text-white px-6 py-12"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Left side - Header */}
        <div className="flex-1 flex flex-col justify-center">
          <header className="space-y-4">
            <h2
              data-testid="big-numbers-section-title"
              className="text-3xl font-bold"
            >
              Veja já os inúmeros beneficios de adquirir nossos cursos
            </h2>
            <p
              data-testid="big-numbers-section-description"
              className="text-lg"
            >
              Cursos de Graduação e Pós-graduação na modalidade EAD, onde a flexibilidade do tempo conta. O aluno estuda e aprende de onde estiver. Havendo atividades presenciais o aluno as desenvolve no local onde mora.
            </p>
          </header>

          <div className="mt-6">
            <Link
              href="/selecao"
              data-element="button_preparado_para_o_mercado"
              className="inline-flex items-center px-6 py-3 border border-yellow-300 text-white hover:bg-yellow-300 hover:text-blue-800 transition rounded-lg font-medium"
            >
              Inscreva-se
            </Link>
          </div>
        </div>

        {/* Right side - Cards */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              data-testid="big-numbers-card-component"
              className=" flex items-center border border-solid border-yellow-300 rounded-lg shadow p-6  gap-6 min-h-40"
            >
              <div className="w-8 h-8 relative flex-shrink-0">
                <Image
                  src={card.icon}
                  alt={card.alt}
                  fill
                  sizes="32px"
                  className="object-contain"
                />
              </div>
              <div>
                <p data-testid="title" className="text-xl font-bold text-yellow-400">{card.title}</p>
                <p data-testid="description" className="text-sm">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const cards = [
  {
    icon: "https://cdn.portal.estacio.br/selo_excelencia_95a6fd2edb.svg",
    alt: "Selo de excelência",
    title: "+19mil",
    description: "Estudantes matriculados em todo o Brasil.",
  },
  {
    icon: "https://cdn.portal.estacio.br/foguete_29b55cbd07.svg",
    alt: "Foguete",
    title: "70%",
    description: "De estudantes empregados.",
  },
  {
    icon: "https://cdn.portal.estacio.br/star_b066134690.svg",
    alt: "Estrela",
    title: "+35",
    description: "Cursos avaliados com nota máxima no MEC.",
  },
  {
    icon: "https://cdn.portal.estacio.br/chapeu_a87023d702.svg",
    alt: "Chapéu de formatura",
    title: "+90mil",
    description: "Vagas disponíveis para alunos em todo Brasil.",
  },
];

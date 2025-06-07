import React from 'react';
import { ChevronDown, Play } from 'lucide-react';

interface ITestimonials {
  id: number;
  name: string;
  type: string;
  position: string;
  quote: string;
  avatar?: string;
}

const TestimonialsSection = () => {
  const testimonials: ITestimonials[] = [
    {
      id: 2,
      name: "Ben-Hur",
      position: "Aluno da UNIFAMEC",
      type: "text",
      quote: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 4,
      name: "Grace Kelly Oliveira de Souza",
      position: "Aluno da UNIFAMEC",
      type: "text",
      quote: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 6,
      name: "Ariadne Liranço",
      position: "Aluna da UNIFAMEC",
      type: "text",
      quote: "lorem ipsum dolor sit amet, consectetur adipiscing.",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 7,
      name: "Henrique Weiand",
      position: "Aluno de Direito UNIFAMEC",
      type: "text",
      quote: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 8,
      name: "Lucas Exposito Rocha",
      position: "Aluno da UNIFAMEC",
      type: "text",
      quote: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 9,
      name: "Antonio Inácio Barbosa Junior",
      position: "Aluno da UNIFAMEC",
      type: "text",
      quote: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      avatar: "/api/placeholder/40/40"
    }
  ];

  const TextTestimonial = ({ testimonial }: { testimonial: ITestimonials }) => (
    <div className="border border-transparent bg-gradient-to-b from-blue-400 to-yellow-600 bg-origin-border overflow-hidden rounded w-full h-full">
      <div className="bg-blue-900 p-6 rounded w-full h-full flex flex-col justify-between lg:justify-between lg:gap-4">
        <p className="self-stretch text-base text-gray-100 md:max-w-[21rem] lg:text-base">
          "{testimonial.quote}"
        </p>
        <div className="flex items-center gap-4 lg:mt-auto">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-900 to-yellow-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">
              {testimonial.name.charAt(0)}
            </span>
          </div>
          <div className="mt-4 lg:mt-auto">
            <strong className="block text-sm font-bold text-gray-200">
              {testimonial.name}
            </strong>
            <span className="text-xs font-bold uppercase tracking-[1.2px] text-gray-300">
              {testimonial.position}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  const organizeTestimonials = () => {
    const columns : ITestimonials[][]= [[], [], []];
    testimonials.forEach((testimonial: ITestimonials, index) => {
      columns[index % 3].push(testimonial);
    });
    return columns;
  };

  const columns = organizeTestimonials();

  return (
    <div className="bg-blue-950 min-h-screen py-16">
      <div className="relative z-10 mx-auto w-full max-w-[78.5rem] px-5">
        {/* Header Section */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-6">
            <div className="group/tag w-fit border border-transparent bg-gradient-to-b from-blue-400 to-yellow-600 bg-origin-border overflow-hidden rounded">
              <div className="flex items-center bg-blue-900 w-fit p-2 max-h-8 lg:px-4 lg:h-9 rounded">
                <span className="text-xs lg:text-sm whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40 font-medium font-mono">
                  Depoimentos de alunos e alunas
                </span>
              </div>
            </div>
            <h2 className="max-w-xs text-2xl/7 font-medium text-yellow-600 lg:max-w-[39.56rem] lg:text-4xl">
              Eles conquistaram seus objetivos de carreira e transformaram suas vidas
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <p className="max-w-[12.5rem] text-lg text-gray-100">
              O próximo depoimento pode ser seu!
            </p>
            <ChevronDown className="h-8 w-8 text-white" />
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-[60px] grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-8">
          {columns.map((column, columnIndex) => (
            <ul key={columnIndex} className="grid gap-4 lg:gap-8">
              {column.map((testimonial) => (
                <li key={testimonial.id}>
                    <TextTestimonial testimonial={testimonial} />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
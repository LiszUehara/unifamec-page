import Link from "next/link";
import { CardCourseProps } from "@/components/cardCourse";
import CourseImage from "@/components/imageCourse";

interface PageProps {
  params: {
    id: string;
  };
}

async function getCourseData(id: string): Promise<CardCourseProps> {
  const response = await fetch(`http://localhost:3000/api/courses/${id}`);
  if (!response.ok) {
    throw new Error('Falha ao carregar os dados do curso');
  }
  return await response.json();
}

export default async function CourseDetailsPage({ params }: PageProps) {
  const course = await getCourseData(params.id);

  const modalityStyle = {
    EAD: "bg-blue-100 text-blue-800",
    Presencial: "bg-green-100 text-green-800",
    Semipresencial: "bg-yellow-100 text-yellow-800",
    default: "bg-gray-100 text-gray-800"
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="flex-1 relative aspect-video">
          <CourseImage
            courseId={params.id}
            alt={`Imagem do curso ${course.title}`}
            className="rounded-lg w-full h-auto max-h-96 object-cover"
            width={800}
            height={450}
          />
        </div>

        {/* Informações do curso */}
        <div className="flex-1 flex flex-col">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {course.title}
          </h1>

          {/* Metadados */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className={`px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold ${
                modalityStyle[course.modality as keyof typeof modalityStyle] || modalityStyle.default
              }`}
            >
              {course.modality}
            </span>
            <span className="text-gray-700">{course.duration} Anos</span>
            <span className="text-xl md:text-2xl font-bold text-green-700">
              {formatPrice(parseFloat(course.price))}
            </span>
          </div>

          <Link
            href={`/thankyou?courseId=${course.id}`}
            className={`mt-auto px-6 py-3 text-center rounded-md text-base md:text-lg font-medium text-white ${
              course.isActive
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-400 cursor-not-allowed"
            } transition-colors max-w-xs`}
            aria-disabled={!course.isActive}
          >
            {course.isActive ? "Comprar Agora" : "Curso Indisponível"}
          </Link>
        </div>
      </div>

      {/* Conteúdo detalhado */}
      <div className="space-y-8">
        {/* Descrição */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
            Descrição do Curso
          </h2>
          <p className="text-gray-700 leading-relaxed">{course.description}</p>
        </section>

        {/* Conteúdo programático */}
        <section>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
            Conteúdo Programático
          </h2>
          <div className="bg-gray-50 p-4 md:p-6 rounded-lg">
            <div className="whitespace-pre-wrap font-sans text-gray-800 leading-relaxed">
              {course.syllabus}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// Geração de metadados dinâmicos
export async function generateMetadata({ params }: PageProps) {
  const course = await getCourseData(params.id);

  return {
    title: `${course.title} | UNIFAMEC`,
    description: course.description.substring(0, 160) + '...',
    openGraph: {
      title: course.title,
      description: course.description.substring(0, 160) + '...',
      images: [
        {
          url: `http://localhost:3000/api/courses/${params.id}/image`,
          width: 800,
          height: 450,
          alt: course.title,
        },
      ],
    },
  };
}
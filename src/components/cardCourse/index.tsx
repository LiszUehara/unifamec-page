import Link from "next/link";
import CourseImage from "../imageCourse";

export interface CardCourseProps {
  title: string;
  modality: string;
  duration: string;
  link: string;
  description: string;
  image: any;
  id: string;
  price: string;
  syllabus: string;
  isActive: boolean;
  category: "EAD" | "Presencial" | "Semipresencial";
}

export default function CardCourse({
  title,
  modality,
  duration,
  category,
  link,
  id,
}: CardCourseProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-yellow-600 flex flex-col justify-between">
      <CourseImage
        courseId={id}
        alt={`Imagem do curso ${title}`}
        width={64}
        height={64}
        className="w-full h-16 object-cover mb-4"
      />
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300  flex flex-col justify-between">

        <div>
          <h3 className="text-xl font-bold text-blue-900 mb-4 min-h-[3em]">
            {title}
          </h3>
          <div className="mb-4">
            <p className="text-lg text-gray-500">
              Modalidade: <span className="font-bold">{modality}</span>
            </p>
            <p className="text-lg text-gray-500">
              Categoria: <span className="font-bold">{category}</span>
            </p>
            <p className="text-lg font-bold text-blue-900">
              Duração: <span className="font-bold">{duration} Anos</span>
            </p>
          </div>
        </div>
        <Link
          className="mt-4"
          href={"/cursos/graduacao-presencial/bacharelado/" + id}
        >
          <div className="inline-block bg-blue-800 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-900 transition-all duration-300 border-2 border-yellow-600 font-bold w-full text-center ">
            Ver detalhes
          </div>
        </Link>
      </div>
    </div>
  );
}

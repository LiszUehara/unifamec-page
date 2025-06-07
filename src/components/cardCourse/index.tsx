export interface CardCourseProps {
  name: string;
  modality: string;
  duration: string;
  link: string;
}

export default function CardCourse({ name, modality, duration, link }: CardCourseProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border-2 border-yellow-600 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold text-blue-900 mb-4 min-h-[3em]">
          {name}
        </h3>
        <div className="mb-4">
          <p className="text-lg text-gray-500">
            Modalidade:{" "}
            <span className="font-bold">{modality}</span>
          </p>
          <p className="text-lg font-bold text-blue-900">
            Duração:{" "}
            <span className="font-bold">{duration}</span>
          </p>
        </div>
      </div>
      <a className="mt-4" href={link}>
        <div className="inline-block bg-blue-800 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-900 transition-all duration-300 border-2 border-yellow-600 font-bold w-full text-center ">
          Ver detalhes
        </div>
      </a>
    </div>
  );
}
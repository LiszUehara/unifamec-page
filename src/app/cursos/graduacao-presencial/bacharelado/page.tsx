"use client";

import Breadcrumb from "@/components/breadcrumb";
import CardCourse, { CardCourseProps } from "@/components/cardCourse";
import { useEffect, useState } from "react";

export default function BachareladoPresencial({
  bread = true,
  search = true,
}: {
  bread: boolean;
  search: boolean;
}) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchCategory, setSearchCategory] = useState<string>("");
  const [courses, setCourses] = useState<CardCourseProps[]>([]);
  const filterList = async () => {
    const params = new URLSearchParams();
    if (searchTerm) params.append("title", searchTerm);
    if (searchCategory) params.append("category", searchCategory);
    const response = await fetch(`/api/courses?${params.toString()}`);
    const data = await response.json();
    setCourses(data);
  };
  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch("/api/courses");
      const data = await response.json();
      setCourses(data);
    };
    fetchCourses();
  }, []);
  return (
    <main className="bg-gray-100">
      {bread && <Breadcrumb />}
      {search && (
        <div className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-lg shadow-md p-4 flex border-2 border-yellow-600">
                <input
                  placeholder="Digite o curso que você procura"
                  className="rounded-[calc(var(--radius)-2px)] border border-gray-300 w-full px-[calc(var(--spacing)*4)] py-[calc(var(--spacing)*3)] flex-grow"
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select
                  className="ml-2 rounded-[calc(var(--radius)-2px)] border border-gray-300 px-4 py-3"
                  value={searchCategory}
                  onChange={(e) => setSearchCategory(e.target.value)}
                >
                  {!searchCategory && <option value="">Categoria</option>}
                  <option value="Presencial">Presencial</option>
                  <option value="Semipresencial">Semipresencial</option>
                  <option value="EAD">EAD</option>
                </select>
                <div onClick={() => filterList()} className="inline-block bg-blue-800 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-900 transition-all duration-300 border-2 border-yellow-600 font-bold  ml-2">
                  Buscar
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-30 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CardCourse {...course} key={index} />
          ))}
        </div>
      </div>
    </main>
  );
}

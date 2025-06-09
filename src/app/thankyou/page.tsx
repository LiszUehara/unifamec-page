// app/agradecimento-compra/page.tsx
'use client';
import { useEffect, useState } from 'react';
import { CheckCircle, BookOpen, Download, Mail } from 'lucide-react';
import Image from 'next/image';

type Course = {
  id: string;
  title: string;
  price: number;
  duration: number;
  modality: string;
};

export default function ThankYouPage() {
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [orderId, setOrderId] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('courseId');
    const order = params.get('orderId') || `ORD-${Math.floor(Math.random() * 1000000)}`;
    setOrderId(order);

    if (courseId) {
      fetch(`/api/courses/${courseId}`)
        .then(res => res.json())
        .then(data => {
          setCourse(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    } else {
      setLoading(false);
    }

  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Compra realizada com sucesso!
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Obrigado por adquirir nosso curso. Abaixo estão os detalhes da sua compra.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-12">
          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row gap-8">
              {course ? (
                <>
                  <div className="flex-shrink-0">
                    <div className="h-40 w-64 relative rounded-md overflow-hidden">
                      <Image
                        src={`/api/courses/${course.id}/image`}
                        alt={course.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-900">{course.title}</h2>
                    <div className="mt-4 space-y-2">
                      <p className="text-gray-600">
                        <span className="font-medium">Valor:</span> {formatPrice(course.price)}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">Duração:</span> {course.duration} horas
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">Modalidade:</span> {course.modality}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">Número do pedido:</span> {orderId}
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <p className="text-gray-600">Detalhes do curso não disponíveis</p>
              )}
            </div>
          </div>
          <div className="bg-gray-50 px-6 py-4 sm:px-8">
            <p className="text-sm text-gray-500">
              Um e-mail com os detalhes da compra foi enviado para sua caixa de entrada.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
"use client";
import React from 'react';
export default function BachareladoEAD() {
  return (
    <main className="bg-white min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">
          Graduação (EaD)
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
          <a
            className="aspect-square bg-white rounded-2xl relative flex flex-col items-center justify-center text-center px-6 py-6 transition-shadow hover:shadow-xl group"
            href="/cursos/graduacao-ead/bacharelado"
          >
            <div className="absolute inset-1 rounded-xl border-2 border-yellow-600 pointer-events-none z-0"></div>
            <div className="z-10 flex flex-col items-center justify-center text-center">
              <div className="text-blue-900 text-5xl mb-3">🎓</div>
              <div className="text-sm font-bold text-blue-900">
                Bacharelado (EaD)
              </div>
            </div>
          </a>
          <a
            className="aspect-square bg-white rounded-2xl relative flex flex-col items-center justify-center text-center px-6 py-6 transition-shadow hover:shadow-xl group"
            href="/cursos/graduacao-ead/licenciatura"
          >
            <div className="absolute inset-1 rounded-xl border-2 border-yellow-600 pointer-events-none z-0"></div>
            <div className="z-10 flex flex-col items-center justify-center text-center">
              <div className="text-blue-900 text-5xl mb-3">📚</div>
              <div className="text-sm font-bold text-blue-900">
                Licenciatura (EaD)
              </div>
            </div>
          </a>
          <a
            className="aspect-square bg-white rounded-2xl relative flex flex-col items-center justify-center text-center px-6 py-6 transition-shadow hover:shadow-xl group"
            href="/cursos/graduacao-ead/tecnologo"
          >
            <div className="absolute inset-1 rounded-xl border-2 border-yellow-600 pointer-events-none z-0"></div>
            <div className="z-10 flex flex-col items-center justify-center text-center">
              <div className="text-blue-900 text-5xl mb-3">💼</div>
              <div className="text-sm font-bold text-blue-900">
                Tecnólogo (EaD)
              </div>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}

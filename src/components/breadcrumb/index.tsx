'use client';
import React from 'react';

export default function Breadcrumb() {
  return (
    <div className="bg-blue-900 text-white py-8 border-b-4 border-yellow-600">
      <div className="container mx-auto px-4">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm">
            <li className="flex items-center">
              <a
                className="text-yellow-400 hover:text-white transition-colors duration-300"
                href="/cursos"
              >
                Cursos
              </a>
            </li>
            {/*
            <li className="flex items-center">
              <svg
                className="w-3 h-3 mx-2 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <a
                className="text-yellow-400 hover:text-white transition-colors duration-300"
                href="/cursos/graduacao-presencial/bacharelado"
              >
                Graduação Presencial
              </a>
            </li>
            <li className="flex items-center">
              <svg
                className="w-3 h-3 mx-2 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="font-semibold text-white">Bacharelado</span>
            </li>
            */}

          </ol>
        </nav>
        <h1 className="text-4xl font-bold mt-4">Bacharelado</h1>
      </div>
    </div>
  );
}

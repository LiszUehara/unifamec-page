"use client";

import { LogOut, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      setIsLoggedIn(true);
      setUserName(user.name || "Usuário");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUserName("");
    router.push("/");
  };
  return (
    <header>
      {/* Barra Superior */}
      <div className="w-full bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-end items-center text-sm gap-4">
            <Link href="/academico" className="hover:text-yellow-400">
              Acadêmico
            </Link>
            <Link href="/institucional" className="hover:text-yellow-400">
              Institucional
            </Link>
            <Link href="/polo" className="hover:text-yellow-400">
              Seja Polo
            </Link>
            <Link href="/vestibular" className="hover:text-yellow-400">
              Vestibular
            </Link>
          </div>
        </div>
      </div>

      {/* Barra de Navegação */}
      <nav className="bg-white text-blue-900 py-3 shadow-sm border-b-2 border-yellow-600">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex-shrink-0 mb-4 md:mb-0">
              <Link href="/" className="flex items-center">
                <Image
                  alt="Logo"
                  loading="lazy"
                  width={140}
                  height={100}
                  className="w-[140px] h-auto md:w-[230px] md:h-auto"
                  src="/unifamec-logo.webp"
                  style={{ color: "transparent" }}
                />
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/cursos/graduacao-presencial/bacharelado"
                className="font-medium hover:text-yellow-600"
              >
                Nossos Cursos
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                href="/about"
                className="font-medium hover:text-yellow-600"
              >
                Sobre Nós
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                href="/contact"
                className="font-medium hover:text-yellow-600"
              >
                Contato
              </Link>
              {isLoggedIn && (
                <>
                  <span className="text-gray-300">|</span>
                  <Link
                    href="/dashboard/courses"
                    className="font-medium hover:text-yellow-600"
                  >
                    Dashboard
                  </Link>
                </>
              )}

              {isLoggedIn ? (
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <User size={20} />
                    <span className="hidden md:inline">{userName}</span>
                  </div>

                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-2 border-2 bg-gray-400 px-3 py-2 rounded-md text-white"
                  >
                    <LogOut size={20} />
                  </button>
                </div>
              ) : (
                <Link
                  href="/auth/login"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center justify-center text-sm md:text-base rounded-[calc(theme(borderRadius.lg)-2px)] border-2 border-yellow-600 bg-blue-800 text-white px-6 py-3 w-[125px] h-[52px] shadow-md transition-all duration-300 hover:shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    Login
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

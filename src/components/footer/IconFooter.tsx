'use client';

import React from 'react';

type IconFooterProps = {
  href: string;
  children: React.ReactNode;
};

export default function IconFooter({ href, children }: IconFooterProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-yellow-400 transition-colors duration-[0.3s] ease-in-out"
    >
      {children}
    </a>
  );
}

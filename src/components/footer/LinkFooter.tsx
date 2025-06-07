'use client';

import React from 'react';
import Link from 'next/link';

type LinkFooterProps = {
  href: string;
  children: React.ReactNode;
};

export default function LinkFooter({ href, children }: LinkFooterProps) {
  return (
    <li>
      <Link
        href={href}
        className="text-gray-300 hover:text-white transition-colors duration-[0.3s] ease-in-out"
      >
        {children}
      </Link>
    </li>
  );
}

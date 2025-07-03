'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-white/70 backdrop-blur-sm shadow-sm mx-4 mt-4 rounded-xl">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex space-x-8 h-16">
          <Link
            href="/freshie-interviewer"
            className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
              pathname === '/freshie-interviewer'
                ? 'text-gray-900 border-b-2 border-blue-500'
                : 'text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-gray-300'
            }`}
          >
            Freshie Interviewer
          </Link>
          <Link
            href="/senior-interviewer"
            className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
              pathname === '/senior-interviewer'
                ? 'text-gray-900 border-b-2 border-blue-500'
                : 'text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-gray-300'
            }`}
          >
            Senior Interviewer
          </Link>
        </div>
      </div>
    </nav>
  );
}
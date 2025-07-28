import React from "react";
import Link from "next/link";
import { GlobalData } from "@/lib/types/global";

export interface Nav {
  id: string | number;
  title: string;
  slug: string;
}

interface HeaderProps {
  globalData: GlobalData | null;
}

export const Header: React.FC<HeaderProps> = ({ globalData }) => {
  const navigation = globalData?.global?.header?.headerNavigation || [];
  return (
    <header className="w-full bg-white shadow">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex gap-6 mb-0 list-none">
          <li>
            <Link
              href="/"
              className="text-blue-700 hover:text-blue-900 font-bold text-lg transition-colors"
            >
              Home
            </Link>
          </li>
          {navigation.map((item) => (
            <li key={item.id}>
              <a
                href={`/${item.slug}`}
                className="text-blue-700 hover:text-blue-900 font-semibold transition-colors"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
};

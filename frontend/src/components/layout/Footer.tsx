import { GlobalData } from "@/lib/types/global";
import React from "react";

export interface Nav {
  id: string | number;
  title: string;
  slug: string;
}

interface FooterProps {
  globalData: GlobalData | null;
}

export const Footer: React.FC<FooterProps> = ({ globalData }) => {
  const navigation = globalData?.global?.footer?.footerNavigation || [];
  return (
    <footer className="w-full bg-gray-100 shadow">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex gap-6 justify-center list-none">
          {navigation.map((item) => (
            <li key={item.id}>
              <a
                href={`/${item.slug}`}
                className="text-gray-700 hover:text-blue-700 font-medium transition-colors"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  )
};

import React from "react";

export interface Nav {
  id: string | number;
  title: string;
  slug: string;
}

interface FooterProps {
  navigation: Nav[];
}

export const Footer: React.FC<FooterProps> = ({ navigation }) => (
  <footer className="w-full bg-gray-100 shadow mt-8">
    <nav className="container mx-auto px-4 py-4">
      <ul className="flex gap-6 justify-center">
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
);

import React from "react";
import Link from "next/link";

interface NavListItem {
  slug: string;
  title: string;
}

interface NavListProps {
  items: NavListItem[];
  prefixIcon?: React.ReactNode;
}

export const NavList: React.FC<NavListProps> = ({ items, prefixIcon = <span className="text-blue-400">→</span> }) => (
  <ul className="list-none pl-0 mb-0">
    {items.map((item) => (
      <li
        key={item.slug}
        className="mb-0 border-b border-gray-200 last:border-b-0 flex items-center gap-2 pt-2 pb-2"
      >
        {prefixIcon}
        <Link
          href={`/blog/${item.slug}`}
          className="text-blue-700 hover:text-blue-900 transition-colors duration-150"
        >
          {item.title}
        </Link>
      </li>
    ))}
  </ul>
);

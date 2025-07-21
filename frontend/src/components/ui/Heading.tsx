import React from "react";

interface HeadingProps {
  children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({ children }) => (
  <h1 className="text-4xl font-bold text-blue-700 mb-6 drop-shadow-lg">{children}</h1>
);

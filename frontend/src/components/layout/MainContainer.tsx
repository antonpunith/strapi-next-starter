import React from "react";

interface MainContainerProps {
  children: React.ReactNode;
}

export const MainContainer: React.FC<MainContainerProps> = ({ children }) => (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 flex flex-col items-center justify-center p-8">
    {children}
  </div>
);

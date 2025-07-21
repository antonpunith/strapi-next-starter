import React from "react";

interface SectionsContainerProps {
  children: React.ReactNode;
}

export const SectionsContainer: React.FC<SectionsContainerProps> = ({ children }) => (
  <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6 mb-6">
    <div className="space-y-6">
      {children}
    </div>
  </div>
);

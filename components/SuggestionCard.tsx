import React from "react";

interface SuggestionCardProps {
  title: string;
  suggestion: string;
  icon?: React.ReactNode;
}

export const SuggestionCard: React.FC<SuggestionCardProps> = ({
  title,
  suggestion,
  icon,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 transition-shadow duration-300 hover:shadow-xl hover:scale-105">
      <div className="flex items-center gap-4 mb-3">
        {icon && <div className="text-3xl text-blue-500">{icon}</div>}
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
      </div>
      <p className="text-gray-700 text-base leading-relaxed">{suggestion}</p>
    </div>
  );
};

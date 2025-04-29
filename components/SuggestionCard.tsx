// components/SuggestionCard.tsx
import React from 'react';

export interface SuggestionCardProps {
  className?: string;
  title: string;
  suggestion: string;
  icon?: React.ReactNode;
}

export const SuggestionCard: React.FC<SuggestionCardProps> = ({ className, title, suggestion, icon }) => {
  return (
    <div className="bg-yellow-100 text-gray-800 rounded-lg shadow-lg p-4 flex items-center space-x-3">
      {icon && <div>{icon}</div>}
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm">{suggestion}</p>
      </div>
    </div>
  );
};
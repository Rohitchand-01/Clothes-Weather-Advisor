// components/SuggestionCard.tsx
import React from 'react';

interface SuggestionCardProps {
  className?: string;
  title: string;
  suggestion: string;
  icon?: React.ReactNode;
}

export const SuggestionCard: React.FC<SuggestionCardProps> = ({ className, title, suggestion, icon }) => {
  return (
    <div className={className}>
      {icon && <div>{icon}</div>}
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm">{suggestion}</p>
      </div>
    </div>
  );
};
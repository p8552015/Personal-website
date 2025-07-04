import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export default function Card({ 
  children, 
  className = '', 
  hover = true,
  gradient = false 
}: CardProps) {
  const baseStyles = 'bg-gray-900 rounded-lg p-6 transition-all duration-300';
  const hoverStyles = hover ? 'hover:scale-105 hover:shadow-xl hover:shadow-red-900/20' : '';
  const gradientStyles = gradient ? 'bg-gradient-to-br from-gray-900 to-gray-800' : '';
  
  return (
    <div className={`${baseStyles} ${hoverStyles} ${gradientStyles} ${className}`}>
      {children}
    </div>
  );
}
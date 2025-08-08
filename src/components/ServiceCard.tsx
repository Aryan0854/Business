import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon
}) => {
  return (
    <div className="bg-black p-8 rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-800">
      <div className="mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
};
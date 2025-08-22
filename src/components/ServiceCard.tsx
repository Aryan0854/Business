import React from 'react';
import { motion } from 'framer-motion';

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
    <motion.div
      className="bg-black p-8 rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-800 min-h-[250px] flex flex-col hover:shadow-lg hover:shadow-purple-500/50"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </motion.div>
  );
};
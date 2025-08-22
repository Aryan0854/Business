import { useState } from 'react';
import { ProjectGalleryModal } from './ProjectGalleryModal';
import { motion } from 'framer-motion';

interface PortfolioCardProps {
  title: string;
  category: string;
  image: string;
  description: string;
  projects?: {
    title: string;
    image: string;
    description: string;
    images: string[];
  }[];
}

export const PortfolioCard = ({ title, category, image, description, projects }: PortfolioCardProps) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const handleViewDemo = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsGalleryOpen(true);
  };

  return (
    <>
      <motion.div
        className="bg-gray-900 rounded-lg overflow-hidden group min-h-[450px] flex flex-col hover:shadow-lg hover:shadow-blue-500/50"
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-64 object-cover transition-transform group-hover:scale-105"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center">
            <button
              onClick={handleViewDemo}
              className="bg-white text-black px-6 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              View Demo
            </button>
          </div>
        </div>
        <div className="p-6">
          <span className="text-sm text-gray-400">{category}</span>
          <h3 className="text-xl font-bold mt-2 mb-2">{title}</h3>
          <p className="text-gray-300 mb-4 line-clamp-3">{description}</p>
        </div>
      </motion.div>

      {projects && (
        <ProjectGalleryModal
          isOpen={isGalleryOpen}
          onClose={() => setIsGalleryOpen(false)}
          category={category}
          projects={projects}
        />
      )}
    </>
  );
};
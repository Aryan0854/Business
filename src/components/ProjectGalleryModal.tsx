import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { PortfolioPreviewModal } from './PortfolioPreviewModal';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  image: string;
  description: string;
  images: string[];
}

interface ProjectGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: string;
  projects: Project[];
}

export const ProjectGalleryModal = ({ isOpen, onClose, category, projects }: ProjectGalleryModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  if (!isOpen) return null;

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <motion.h2
                className="text-2xl font-bold"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                {category} Portfolio
              </motion.h2>
              <motion.button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>

            <div className="relative">
              <div className="flex items-center justify-center">
                <motion.button
                  onClick={handlePrevious}
                  className="absolute left-0 text-white hover:text-gray-300 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="w-8 h-8" />
                </motion.button>
                <div className="flex flex-col items-center">
                  <motion.div
                    className="relative w-full cursor-pointer group"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <img
                      src={projects[currentIndex].image}
                      alt={projects[currentIndex].title}
                      className="w-full h-96 object-cover rounded-lg mb-4"
                      onClick={() => handleProjectClick(projects[currentIndex])}
                    />
                    <div
                      className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center rounded-lg cursor-pointer transition-all"
                      onClick={() => handleProjectClick(projects[currentIndex])}
                    >
                      <p className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity">Click Me</p>
                    </div>
                  </motion.div>
                  <motion.h3
                    className="text-xl font-semibold mb-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                  >
                    {projects[currentIndex].title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-400 text-center"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                  >
                    {projects[currentIndex].description}
                  </motion.p>
                </div>
                <motion.button
                  onClick={handleNext}
                  className="absolute right-0 text-white hover:text-gray-300 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="w-8 h-8" />
                </motion.button>
              </div>
            </div>

            <motion.div
              className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className={`relative cursor-pointer rounded-lg overflow-hidden group ${
                    index === currentIndex ? 'ring-2 ring-white' : ''
                  }`}
                  onClick={() => {
                    setCurrentIndex(index);
                    handleProjectClick(projects[index]);
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center transition-all">
                    <p className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">Click Me</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {selectedProject && (
        <PortfolioPreviewModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          portfolioData={{
            title: selectedProject.title,
            category,
            images: selectedProject.images,
            description: selectedProject.description
          }}
        />
      )}
    </>
  );
}; 
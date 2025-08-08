import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { PortfolioPreviewModal } from './PortfolioPreviewModal';

interface Project {
  title: string;
  image: string;
  description: string;
  images: string[];
  videos?: string[];
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
      <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
        <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">{category} Portfolio</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="relative">
              <div className="flex items-center justify-center">
                <button
                  onClick={handlePrevious}
                  className="absolute left-0 text-white hover:text-gray-300 transition-colors"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <div className="flex flex-col items-center">
                  <div className="relative w-full cursor-pointer group">
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
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{projects[currentIndex].title}</h3>
                  <p className="text-gray-400 text-center">{projects[currentIndex].description}</p>
                </div>
                <button
                  onClick={handleNext}
                  className="absolute right-0 text-white hover:text-gray-300 transition-colors"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`relative cursor-pointer rounded-lg overflow-hidden group ${
                    index === currentIndex ? 'ring-2 ring-white' : ''
                  }`}
                  onClick={() => {
                    setCurrentIndex(index);
                    handleProjectClick(projects[index]);
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center transition-all">
                    <p className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">Click Me</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedProject && (
        <PortfolioPreviewModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          portfolioData={{
            title: selectedProject.title,
            category,
            images: selectedProject.images,
            videos: selectedProject.videos,
            description: selectedProject.description
          }}
        />
      )}
    </>
  );
}; 
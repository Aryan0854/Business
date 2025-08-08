'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import PortfolioPreviewModal from './PortfolioPreviewModal'

interface Project {
  title: string
  image: string
  description: string
  images: string[]
  videos?: string[]
}

interface ProjectGalleryModalProps {
  isOpen: boolean
  onClose: () => void
  category: string
  projects: Project[]
}

export default function ProjectGalleryModal({ 
  isOpen, 
  onClose, 
  category, 
  projects 
}: ProjectGalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  if (!isOpen) return null

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-3xl font-bold gradient-text">
                    {category} Portfolio Collection
                  </h2>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full"
                  >
                    <XMarkIcon className="w-6 h-6" />
                  </button>
                </div>

                {/* Main Project Display */}
                <div className="relative mb-8">
                  <div className="flex items-center justify-center">
                    <button
                      onClick={handlePrevious}
                      className="absolute left-4 z-10 text-white hover:text-blue-400 transition-colors p-2 hover:bg-black/50 rounded-full"
                    >
                      <ChevronLeftIcon className="w-8 h-8" />
                    </button>
                    
                    <div className="flex flex-col items-center max-w-4xl">
                      <motion.div 
                        key={currentIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="relative w-full cursor-pointer group"
                        onClick={() => handleProjectClick(projects[currentIndex])}
                      >
                        <img
                          src={projects[currentIndex].image}
                          alt={projects[currentIndex].title}
                          className="w-full h-96 object-cover rounded-xl mb-6 transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                          <p className="text-white text-xl font-semibold">Click to Explore</p>
                        </div>
                      </motion.div>
                      
                      <h3 className="text-2xl font-bold mb-3 text-center">
                        {projects[currentIndex].title}
                      </h3>
                      <p className="text-gray-400 text-center text-lg leading-relaxed">
                        {projects[currentIndex].description}
                      </p>
                    </div>
                    
                    <button
                      onClick={handleNext}
                      className="absolute right-4 z-10 text-white hover:text-blue-400 transition-colors p-2 hover:bg-black/50 rounded-full"
                    >
                      <ChevronRightIcon className="w-8 h-8" />
                    </button>
                  </div>
                </div>

                {/* Project Thumbnails */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {projects.map((project, index) => (
                    <motion.div
                      key={index}
                      className={`relative cursor-pointer rounded-lg overflow-hidden group ${
                        index === currentIndex ? 'ring-2 ring-blue-500' : ''
                      }`}
                      onClick={() => {
                        setCurrentIndex(index)
                        handleProjectClick(projects[index])
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                        <p className="text-white text-sm font-medium">{project.title}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
  )
}
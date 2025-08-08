'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { EyeIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import ProjectGalleryModal from './ProjectGalleryModal'

interface PortfolioCardProps {
  title: string
  category: string
  image: string
  description: string
  demoLink?: string
  projects?: {
    title: string
    image: string
    description: string
    images: string[]
    videos?: string[]
  }[]
}

export default function PortfolioCard({ 
  title, 
  category, 
  image, 
  description, 
  demoLink,
  projects 
}: PortfolioCardProps) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)

  const handleViewDemo = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsGalleryOpen(true)
  }

  return (
    <>
      <motion.div 
        className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover-lift"
        whileHover={{ scale: 1.02 }}
      >
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Overlay Buttons */}
          <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.button
              onClick={handleViewDemo}
              className="glass-effect px-6 py-3 rounded-full text-white font-medium hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <EyeIcon className="w-5 h-5 inline mr-2" />
              View Demo
            </motion.button>
            {demoLink && (
              <motion.a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-effect p-3 rounded-full text-white hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowTopRightOnSquareIcon className="w-5 h-5" />
              </motion.a>
            )}
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="glass-effect px-3 py-1 rounded-full text-sm font-medium text-white">
              {category}
            </span>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <p className="text-gray-400 leading-relaxed">
            {description}
          </p>
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
  )
}
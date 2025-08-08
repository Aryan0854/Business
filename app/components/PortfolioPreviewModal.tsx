'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

interface PortfolioPreviewModalProps {
  isOpen: boolean
  onClose: () => void
  portfolioData: {
    title: string
    category: string
    images: string[]
    videos?: string[]
    description: string
  }
}

export default function PortfolioPreviewModal({ 
  isOpen, 
  onClose, 
  portfolioData 
}: PortfolioPreviewModalProps) {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
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
                <div>
                  <h2 className="text-3xl font-bold gradient-text mb-2">
                    {portfolioData.title}
                  </h2>
                  <span className="glass-effect px-3 py-1 rounded-full text-sm font-medium text-white">
                    {portfolioData.category}
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-8">
                {/* Description */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Project Overview</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {portfolioData.description}
                  </p>
                </div>

                {/* Image Gallery */}
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-white">Project Gallery</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {portfolioData.images.map((image, index) => (
                      <motion.div 
                        key={index} 
                        className="relative group rounded-xl overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                      >
                        <img
                          src={image}
                          alt={`${portfolioData.title} preview ${index + 1}`}
                          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <a
                          href={image}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center"
                        >
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 glass-effect p-3 rounded-full">
                            <ArrowTopRightOnSquareIcon className="w-6 h-6 text-white" />
                          </div>
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Video Gallery */}
                {portfolioData.videos && portfolioData.videos.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold mb-6 text-white">Project Videos</h3>
                    <div className="grid grid-cols-1 gap-6">
                      {portfolioData.videos.map((video, index) => (
                        <div key={index} className="relative rounded-xl overflow-hidden">
                          <video
                            controls
                            className="w-full rounded-xl"
                            src={video}
                            poster={portfolioData.images[0]}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
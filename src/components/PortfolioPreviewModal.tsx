import { X } from 'lucide-react';
import { motion } from 'framer-motion';

interface PortfolioPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  portfolioData: {
    title: string;
    category: string;
    images: string[];
    description: string;
  };
}

export const PortfolioPreviewModal = ({ isOpen, onClose, portfolioData }: PortfolioPreviewModalProps) => {
  if (!isOpen) return null;

  return (
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
              {portfolioData.title}
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
          
          <div className="space-y-6">
            {/* Image Gallery */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              {portfolioData.images.map((image, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={image}
                    alt={`${portfolioData.title} preview ${index + 1}`}
                    className="w-full h-64 object-cover rounded-lg cursor-pointer"
                  />
                  <a
                    href={image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity rounded-lg flex items-center justify-center"
                  >
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      View Full Size
                    </span>
                  </a>
                </motion.div>
              ))}
            </motion.div>

            {/* Description */}
            <motion.div
              className="mt-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-2">Description</h3>
              <p className="text-gray-400">{portfolioData.description}</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}; 
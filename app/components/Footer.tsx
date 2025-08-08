'use client'

import { motion } from 'framer-motion'
import { RocketLaunchIcon, HeartIcon } from '@heroicons/react/24/outline'

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-gray-800/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl transform -translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <RocketLaunchIcon className="w-8 h-8 text-blue-400" />
            <span className="font-bold text-2xl tracking-tight gradient-text">
              WebCraft Solutions
            </span>
          </div>
          
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Crafting exceptional digital experiences with cutting-edge technology and beautiful design. 
            Let's build something amazing together.
          </p>
          
          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <span>© 2024 WebCraft Solutions. Made with</span>
            <HeartIcon className="w-5 h-5 text-red-500" />
            <span>by Aryan Mishra</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
'use client'

import { motion } from 'framer-motion'
import { DevicePhoneMobileIcon, CpuChipIcon, CodeBracketIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

export default function AboutSection() {
  const skills = [
    { icon: <DevicePhoneMobileIcon className="w-8 h-8" />, label: "Responsive Design" },
    { icon: <CpuChipIcon className="w-8 h-8" />, label: "AI & ML Integration" },
    { icon: <CodeBracketIcon className="w-8 h-8" />, label: "Modern Frameworks" }
  ]

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-8 tracking-tight">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
              I'm a passionate full-stack developer specializing in AI, ML, and modern web development. 
              With expertise in cutting-edge technologies and a keen eye for design, I create exceptional 
              digital experiences that help businesses and individuals stand out in the digital landscape.
            </p>
            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
              My approach combines technical excellence with creative vision, ensuring every project 
              not only functions flawlessly but also delivers an outstanding user experience that 
              drives engagement and results.
            </p>
            
            {/* Skills */}
            <div className="flex flex-wrap gap-6 mb-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 glass-effect px-4 py-3 rounded-full"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-blue-400">{skill.icon}</div>
                  <span className="text-white font-medium">{skill.label}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="https://aryan0854.github.io/Portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View Full Portfolio</span>
              <ArrowTopRightOnSquareIcon className="w-5 h-5" />
            </motion.a>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <motion.a 
                href="https://aryan0854.github.io/Portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src="images/ME/image.png"
                  alt="Developer Workspace"
                  className="relative rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-6 -right-6 glass-effect p-4 rounded-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <CodeBracketIcon className="w-8 h-8 text-blue-400" />
            </motion.div>
            <motion.div
              className="absolute -bottom-6 -left-6 glass-effect p-4 rounded-xl"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
              <CpuChipIcon className="w-8 h-8 text-purple-400" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
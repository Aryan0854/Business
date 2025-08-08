'use client'

import { motion } from 'framer-motion'
import { CodeBracketIcon, PaintBrushIcon, GlobeAltIcon, DevicePhoneMobileIcon, CpuChipIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'

export default function ServicesSection() {
  const services = [
    {
      title: "Custom Web Development",
      description: "Tailored website solutions with modern tech stack, responsive design, and optimal performance for businesses and individuals",
      icon: <CodeBracketIcon className="w-8 h-8" />,
      features: ["React/Next.js", "TypeScript", "Tailwind CSS", "Performance Optimization"]
    },
    {
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interface design that enhances user experience and drives engagement",
      icon: <PaintBrushIcon className="w-8 h-8" />,
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      title: "E-Commerce Solutions",
      description: "Complete online store development with payment integration, inventory management, and analytics",
      icon: <ShoppingCartIcon className="w-8 h-8" />,
      features: ["Payment Integration", "Inventory Management", "Order Tracking", "Analytics Dashboard"]
    },
    {
      title: "Mobile-First Development",
      description: "Responsive web applications optimized for mobile devices with progressive web app capabilities",
      icon: <DevicePhoneMobileIcon className="w-8 h-8" />,
      features: ["PWA Development", "Mobile Optimization", "Touch Interactions", "Offline Support"]
    },
    {
      title: "AI & ML Integration",
      description: "Integrate artificial intelligence and machine learning capabilities into your web applications",
      icon: <CpuChipIcon className="w-8 h-8" />,
      features: ["Chatbots", "Recommendation Systems", "Data Analytics", "Automation"]
    },
    {
      title: "Deployment & Hosting",
      description: "Professional deployment assistance on modern platforms with CI/CD setup and monitoring",
      icon: <GlobeAltIcon className="w-8 h-8" />,
      features: ["Vercel/Netlify", "GitHub Pages", "CI/CD Setup", "Performance Monitoring"]
    }
  ]

  return (
    <section id="services" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 tracking-tight">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive web development services to bring your digital vision to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover-lift h-full">
                <div className="mb-6">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
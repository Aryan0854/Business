import { Github, Linkedin, Mail, Code2, Palette, Globe2, Rocket, MonitorSmartphone, Cpu, Phone, ExternalLink } from 'lucide-react';
import { PortfolioCard } from './components/PortfolioCard';
import { ContactForm } from './components/ContactForm';
import { ServiceCard } from './components/ServiceCard';
import { DiscountModal } from './components/DiscountModal';
import { Floating3DObject } from './components/Floating3DObject';
import { ParticleSystem } from './components/ParticleSystem';
import emailjs from '@emailjs/browser';
import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';

emailjs.init('QWv80P5wF32KqV6o3');

function App() {
  const [isDiscountModalOpen, setIsDiscountModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const portfolioItems = [
    {
      title: "Creative Portfolio for Techies",
      category: "Tech",
      image: "images/Tech/3/Screenshot 2025-03-29 233852.png",
      description: "Tech heavy portfolio for Tech professionals",
      demoLink: "https://business-dashboard-demo.com",
      projects: [
        {
          title: "Portfolio 1",
          image: "images/Tech/1/Screenshot 2025-03-29 232541.png",
          description: "Real-time analytics dashboard with AI-powered insights",
          images: [
            "images/Tech/1/Screenshot 2025-03-29 232555.png",
            "images/Tech/1/Screenshot 2025-03-29 232605.png",
            "images/Tech/1/Screenshot 2025-03-29 232614.png"
          ],
          
        },
        {
          title: "Portfolio 2",
          image: "images/Tech/2/Screenshot 2025-03-29 233811.png",
          description: "Machine learning model performance monitoring dashboard",
          images: [
            "images/Tech/2/Screenshot 2025-03-29 233821.png",
            "images/Tech/2/Screenshot 2025-03-29 233830.png",
            "images/Tech/2/Screenshot 2025-03-29 233843.png"
          ],

        },
        {
          title: "Portfolio 3",
          image: "images/Tech/3/Screenshot 2025-03-29 233852.png",
          description: "Machine learning model performance monitoring dashboard",
          images: [
            "images/Tech/3/Screenshot 2025-03-29 233904.png",
            "images/Tech/3/Screenshot 2025-03-29 233909.png"
          ],

        },
        {
          title: "Portfolio 4",
          image: "images/Tech/4/Screenshot 2025-03-29 233943.png",
          description: "Machine learning model performance monitoring dashboard",
          images: [
            "images/Tech/2/Screenshot 2025-03-29 233821.png",
            "images/Tech/2/Screenshot 2025-03-29 233830.png"
          ],

        },
      ]
    },
    {
      title: "Creative Portfolio for Non-Techies",
      category: "Non-Tech",
      image: "images/Non-Tech/2/Screenshot 2025-03-30 001511.png",
      description: "Minimalist portfolio for creative professionals",
      demoLink: "https://business-dashboard-demo.com",
      projects: [
        {
          title: "Portfolio 1",
          image: "images/Non-Tech/1/Screenshot 2025-03-29 233135.png",
          description: "Elegant portfolio showcase for artists and designers",
          images: [
            "images/Non-Tech/1/Screenshot 2025-03-29 233152.png",
            "images/Non-Tech/1/Screenshot 2025-03-29 233204.png"
          ],
          
        },
        {
          title: "Portfolio 2",
          image: "images/Non-Tech/2/Screenshot 2025-03-30 001511.png",
          description: "Stunning photography portfolio with gallery features",
          images: [
            "images/Non-Tech/2/Screenshot 2025-03-30 001523.png",
            "images/Non-Tech/2/Screenshot 2025-03-30 001534.png",
            "images/Non-Tech/2/Screenshot 2025-03-30 001547.png"
          ],
          
        }
      ]
    },
    {
      title: "E-Commerce Platform",
      category: "Business",
      image: "images/Bussiness/1/Screenshot 2025-08-22 152920.png",
      description: "Full-featured e-commerce website with payment integration and inventory management",
      demoLink: "https://business-dashboard-demo.com",
      projects: [
        {
          title: "Portfolio 1",
          image: "images/Bussiness/1/Screenshot 2025-08-22 152920.png",
          description: "A sleek and modern e-commerce front-end, built with React and Tailwind CSS. Features a clean design, intuitive navigation, and a seamless user experience.",
          images: [
            "images/Bussiness/1/Screenshot 2025-08-22 152931.png"
          ],
          
        },
        {
          title: "Portfolio 2",
          image: "images/Bussiness/2/Screenshot 2025-08-22 153019.png",
          description: "A powerful and feature-rich e-commerce back-end, built with Node.js and Express. Includes a comprehensive inventory management system, secure payment processing, and detailed analytics.",
          images: [
            "images/Bussiness/2/Screenshot 2025-08-22 153027.png",
            "images/Bussiness/2/Screenshot 2025-08-22 153035.png"
          ],
          
        }
      ]
    }
  ];

  const services = [
    {
      title: "Custom Websites & Portfolios",
      description: "Tailored website solutions with modern tech stack for businesses and individuals",
      icon: <Code2 className="w-8 h-8" />
    },
    {
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interface design",
      icon: <Palette className="w-8 h-8" />
    },
    {
      title: "Deployment Assistance",
      description: "Help with deploying sites on Vercel, Netlify, and GitHub Pages",
      icon: <Globe2 className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-black text-white overflow-x-hidden">
      {/* 3D Background Canvas */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Floating3DObject position={[0, 0, 0]} color="#3b82f6" size={1.5} />
          <Floating3DObject position={[-5, 2, -5]} color="#ef4444" size={1} />
          <Floating3DObject position={[5, -2, -5]} color="#10b981" size={1.2} />
          <Floating3DObject position={[0, 0, 0]} color="#3b82f6" size={2} />
          <Floating3DObject position={[-7, 3, -5]} color="#ef4444" size={1.5} />
          <Floating3DObject position={[7, -3, -5]} color="#10b981" size={1.8} />
          <ParticleSystem />
          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full glass bg-opacity-20 z-50 border-b border-gray-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Rocket className="w-8 h-8 text-blue-500" />
              <span className="font-bold text-2xl tracking-tight bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                WebCraft Solutions
              </span>
            </motion.div>
            <div className="flex items-center space-x-6">
              <motion.a
                href="#contact"
                className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-colors font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
              <motion.button
                onClick={() => setIsDiscountModalOpen(true)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Discounts
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-8 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Crafting Digital
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Excellence
            </span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Specialized in creating stunning websites and portfolios with cutting-edge technology and beautiful design.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.a
              href="#portfolio"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Portfolio
            </motion.a>
            <motion.a
              href="#services"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-white rounded-full group bg-gradient-to-br from-blue-600 to-purple-600 group-hover:from-blue-600 group-hover:to-purple-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-800"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative px-8 py-4 transition-all ease-in duration-75 bg-black rounded-full group-hover:bg-opacity-0">
                Services
              </span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 bg-gradient-to-br from-gray-900 to-black relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-16 text-center tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Website & Portfolio Showcase
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <PortfolioCard {...item} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-900 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8 tracking-tight">About Me</h2>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                I'm a passionate developer specializing in AI, ML, and Web Development. With expertise in modern technologies
                and a keen eye for design, I create exceptional digital experiences that help businesses and individuals stand out.
              </p>
              <div className="flex space-x-6">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <MonitorSmartphone className="w-12 h-12" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Cpu className="w-12 h-12" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Code2 className="w-12 h-12" />
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <a
                href="https://aryan0854.github.io/Portfolio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.img
                  src="images\ME\image.png"
                  alt="Workspace"
                  className="rounded-2xl shadow-2xl hover:opacity-90 transition-opacity"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gradient-to-br from-black to-gray-900 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-16 text-center tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-900 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-16 text-center tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Get in Touch
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8">Connect With Me</h3>
              <div className="space-y-6">
                <motion.a
                  href="https://github.com/aryan0854"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-gray-400 hover:text-white transition-colors"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <Github className="w-8 h-8" />
                  <span className="text-lg">GitHub</span>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/aryan-mishra-80ba28223"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-gray-400 hover:text-white transition-colors"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <Linkedin className="w-8 h-8" />
                  <span className="text-lg">LinkedIn</span>
                </motion.a>
                <motion.a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=aryanofficial0854@gmail.com&su=Portfolio%20Inquiry&body=Hello%20Aryan%2C%0A%0AI%20am%20reaching%20out%20regarding%20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-gray-400 hover:text-white transition-colors"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <Mail className="w-8 h-8" />
                  <span className="text-lg">Email Me</span>
                </motion.a>
                <motion.a
                  href="https://wa.me/918310197713"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-gray-400 hover:text-white transition-colors"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <Phone className="w-8 h-8" />
                  <span className="text-lg select-none">WhatsApp</span>
                </motion.a>
                <motion.a
                  href="https://aryan0854.github.io/Portfolio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-gray-400 hover:text-white transition-colors"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <ExternalLink className="w-8 h-8" />
                  <span className="text-lg">Personal Portfolio</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800 relative z-10">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            © 2024 WebCraft Solutions. All rights reserved.
          </motion.p>
        </div>
      </footer>
      <DiscountModal
        isOpen={isDiscountModalOpen}
        onClose={() => setIsDiscountModalOpen(false)}
      />
    </div>
  );
}

export default App;

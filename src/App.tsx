import { Github, Linkedin, Mail, Code2, Palette, Globe2, Rocket, MonitorSmartphone, Cpu, Phone, ExternalLink } from 'lucide-react';
import { PortfolioCard } from './components/PortfolioCard';
import { ContactForm } from './components/ContactForm';
import { ServiceCard } from './components/ServiceCard';
import emailjs from '@emailjs/browser';

emailjs.init('QWv80P5wF32KqV6o3');

function App() {
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
          videos: ["https://example.com/dashboard-demo.mp4"]
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
          videos: ["https://example.com/ml-dashboard-demo.mp4"]
        },
        {
          title: "Portfolio 3",
          image: "images/Tech/3/Screenshot 2025-03-29 233852.png",
          description: "Machine learning model performance monitoring dashboard",
          images: [
            "images/Tech/3/Screenshot 2025-03-29 233904.png",
            "images/Tech/3/Screenshot 2025-03-29 233909.png"
          ],
          videos: ["https://example.com/ml-dashboard-demo.mp4"]
        },
        {
          title: "Portfolio 4",
          image: "images/Tech/4/Screenshot 2025-03-29 233943.png",
          description: "Machine learning model performance monitoring dashboard",
          images: [
            "images/Tech/2/Screenshot 2025-03-29 233821.png",
            "images/Tech/2/Screenshot 2025-03-29 233830.png"
          ],
          videos: ["https://example.com/ml-dashboard-demo.mp4"]
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
          videos: ["https://example.com/artist-portfolio-demo.mp4"]
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
          videos: ["https://example.com/photography-portfolio-demo.mp4"]
        }
      ]
    },
    {
      title: "E-Commerce Platform",
      category: "Business",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
      description: "Full-featured e-commerce website with payment integration and inventory management",
      demoLink: "https://business-dashboard-demo.com",
      projects: [
        {
          title: "Portfolio 1",
          image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
          description: "Complete e-commerce solution with shopping cart and checkout",
          images: [
            "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800"
          ],
          videos: ["https://example.com/online-store-demo.mp4"]
        },
        {
          title: "Portfolio 2",
          image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
          description: "Advanced inventory management system with analytics",
          images: [
            "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800"
          ],
          videos: ["https://example.com/inventory-demo.mp4"]
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
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/90 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Rocket className="w-8 h-8" />
              <span className="font-bold text-2xl tracking-tight">WebCraft Solutions</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#contact" className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-colors">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Crafting Digital
            <br />
            Excellence
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Specialized in creating stunning websites and portfolios with cutting-edge technology and beautiful design.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="#portfolio" className="bg-white text-black px-8 py-4 rounded-full hover:bg-gray-200 transition-colors">
              View Portfolio
            </a>
            <a href="#services" className="border-2 border-white px-8 py-4 rounded-full hover:bg-gray-900 transition-colors">
              Services
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center tracking-tight">Website & Portfolio Showcase</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {portfolioItems.map((item, index) => (
              <PortfolioCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 tracking-tight">About Me</h2>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                I'm a passionate developer specializing in AI, ML, and Web Development. With expertise in modern technologies
                and a keen eye for design, I create exceptional digital experiences that help businesses and individuals stand out.
              </p>
              <div className="flex space-x-6">
                <MonitorSmartphone className="w-12 h-12" />
                <Cpu className="w-12 h-12" />
                <Code2 className="w-12 h-12" />
              </div>
            </div>
            <div className="relative">
              <a 
                href="https://aryan0854.github.io/Portfolio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="images\ME\image.png"
                  alt="Workspace"
                  className="rounded-2xl shadow-2xl hover:opacity-90 transition-opacity"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center tracking-tight">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center tracking-tight">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <ContactForm />
            <div>
              <h3 className="text-2xl font-bold mb-8">Connect With Me</h3>
              <div className="space-y-6">
                <a
                  href="https://github.com/aryan0854"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-gray-400 hover:text-white transition-colors"
                >
                  <Github className="w-8 h-8" />
                  <span className="text-lg">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/aryan-mishra-80ba28223"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="w-8 h-8" />
                  <span className="text-lg">LinkedIn</span>
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=aryanofficial0854@gmail.com&su=Portfolio%20Inquiry&body=Hello%20Aryan%2C%0A%0AI%20am%20reaching%20out%20regarding%20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-8 h-8" />
                  <span className="text-lg">Email Me</span>
                </a>
                <a
                  href="https://wa.me/918310197713"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="w-8 h-8" />
                  <span className="text-lg select-none">WhatsApp</span>
                </a>
                <a
                  href="https://aryan0854.github.io/Portfolio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-gray-400 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-8 h-8" />
                  <span className="text-lg">Personal Portfolio</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>© 2024 WebCraft Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import PortfolioCard from './PortfolioCard'

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('All')

  const portfolioItems = [
    // Tech Category - Enhanced with more modern designs
    {
      title: "AI-Powered Analytics Dashboard",
      category: "Tech",
      image: "images/Tech/1/Screenshot 2025-03-29 232541.png",
      description: "Advanced analytics platform with machine learning insights and real-time data visualization",
      demoLink: "https://ai-analytics-demo.com",
      projects: [
        {
          title: "ML Dashboard Pro",
          image: "images/Tech/1/Screenshot 2025-03-29 232541.png",
          description: "Real-time analytics dashboard with AI-powered insights and predictive modeling",
          images: [
            "images/Tech/1/Screenshot 2025-03-29 232555.png",
            "images/Tech/1/Screenshot 2025-03-29 232605.png",
            "images/Tech/1/Screenshot 2025-03-29 232614.png"
          ],
          videos: ["https://example.com/dashboard-demo.mp4"]
        },
        {
          title: "Data Visualization Suite",
          image: "images/Tech/2/Screenshot 2025-03-29 233811.png",
          description: "Interactive data visualization platform with custom chart builders",
          images: [
            "images/Tech/2/Screenshot 2025-03-29 233821.png",
            "images/Tech/2/Screenshot 2025-03-29 233830.png",
            "images/Tech/2/Screenshot 2025-03-29 233843.png"
          ],
          videos: ["https://example.com/visualization-demo.mp4"]
        },
        {
          title: "Cloud Infrastructure Monitor",
          image: "images/Tech/3/Screenshot 2025-03-29 233852.png",
          description: "Comprehensive cloud monitoring solution with automated scaling insights",
          images: [
            "images/Tech/3/Screenshot 2025-03-29 233904.png",
            "images/Tech/3/Screenshot 2025-03-29 233909.png"
          ],
          videos: ["https://example.com/cloud-monitor-demo.mp4"]
        },
        {
          title: "DevOps Command Center",
          image: "images/Tech/4/Screenshot 2025-03-29 233943.png",
          description: "Unified DevOps platform for CI/CD pipeline management and deployment tracking",
          images: [
            "images/Tech/2/Screenshot 2025-03-29 233821.png",
            "images/Tech/2/Screenshot 2025-03-29 233830.png"
          ],
          videos: ["https://example.com/devops-demo.mp4"]
        }
      ]
    },
    
    // Non-Tech Category - Creative and artistic portfolios
    {
      title: "Creative Studio Portfolio",
      category: "Non-Tech",
      image: "images/Non-Tech/1/Screenshot 2025-03-29 233135.png",
      description: "Elegant portfolio showcase for artists, designers, and creative professionals",
      demoLink: "https://creative-portfolio-demo.com",
      projects: [
        {
          title: "Artist Showcase",
          image: "images/Non-Tech/1/Screenshot 2025-03-29 233135.png",
          description: "Minimalist portfolio for contemporary artists with gallery-style presentation",
          images: [
            "images/Non-Tech/1/Screenshot 2025-03-29 233152.png",
            "images/Non-Tech/1/Screenshot 2025-03-29 233204.png"
          ],
          videos: ["https://example.com/artist-portfolio-demo.mp4"]
        },
        {
          title: "Photography Studio",
          image: "images/Non-Tech/2/Screenshot 2025-03-30 001511.png",
          description: "Stunning photography portfolio with immersive gallery features",
          images: [
            "images/Non-Tech/2/Screenshot 2025-03-30 001523.png",
            "images/Non-Tech/2/Screenshot 2025-03-30 001534.png",
            "images/Non-Tech/2/Screenshot 2025-03-30 001547.png"
          ],
          videos: ["https://example.com/photography-demo.mp4"]
        }
      ]
    },

    // Business Category - Enhanced with more comprehensive solutions
    {
      title: "Enterprise E-Commerce Platform",
      category: "Business",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
      description: "Full-featured e-commerce solution with advanced inventory management and analytics",
      demoLink: "https://enterprise-ecommerce-demo.com",
      projects: [
        {
          title: "Multi-Vendor Marketplace",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
          description: "Comprehensive marketplace platform with vendor management and commission tracking",
          images: [
            "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
          ],
          videos: ["https://example.com/marketplace-demo.mp4"]
        },
        {
          title: "Corporate Website Suite",
          image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
          description: "Professional business website with CMS, blog, and lead generation tools",
          images: [
            "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
          ],
          videos: ["https://example.com/corporate-demo.mp4"]
        },
        {
          title: "SaaS Application Dashboard",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
          description: "Modern SaaS platform with subscription management and user analytics",
          images: [
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
          ],
          videos: ["https://example.com/saas-demo.mp4"]
        }
      ]
    },

    // Additional Tech Projects
    {
      title: "Blockchain DeFi Platform",
      category: "Tech",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
      description: "Decentralized finance platform with smart contract integration and yield farming",
      demoLink: "https://defi-platform-demo.com",
      projects: [
        {
          title: "DeFi Trading Interface",
          image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
          description: "Advanced trading interface with real-time market data and portfolio tracking",
          images: [
            "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80&w=800"
          ],
          videos: ["https://example.com/defi-demo.mp4"]
        }
      ]
    },

    // Additional Non-Tech Projects
    {
      title: "Restaurant & Hospitality",
      category: "Non-Tech",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
      description: "Beautiful restaurant websites with online reservations and menu management",
      demoLink: "https://restaurant-demo.com",
      projects: [
        {
          title: "Fine Dining Experience",
          image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
          description: "Elegant restaurant website with immersive dining experience showcase",
          images: [
            "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&q=80&w=800"
          ],
          videos: ["https://example.com/restaurant-demo.mp4"]
        },
        {
          title: "Event Planning Studio",
          image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
          description: "Sophisticated event planning website with portfolio and booking system",
          images: [
            "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1519167758481-83f29c8e8d4b?auto=format&fit=crop&q=80&w=800"
          ],
          videos: ["https://example.com/events-demo.mp4"]
        }
      ]
    },

    // Additional Business Projects
    {
      title: "FinTech Solutions",
      category: "Business",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800",
      description: "Modern financial technology platforms with advanced security and compliance",
      demoLink: "https://fintech-demo.com",
      projects: [
        {
          title: "Digital Banking Platform",
          image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800",
          description: "Comprehensive digital banking solution with mobile-first design",
          images: [
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
          ],
          videos: ["https://example.com/banking-demo.mp4"]
        },
        {
          title: "Investment Management Portal",
          image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
          description: "Professional investment platform with portfolio analytics and risk assessment",
          images: [
            "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800"
          ],
          videos: ["https://example.com/investment-demo.mp4"]
        }
      ]
    }
  ]

  const categories = ['All', 'Tech', 'Non-Tech', 'Business']
  
  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 tracking-tight">
            Portfolio <span className="gradient-text">Showcase</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover our latest projects spanning across technology, creative industries, and business solutions
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="glass-effect rounded-full p-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={`${item.title}-${activeFilter}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              layout
            >
              <PortfolioCard {...item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
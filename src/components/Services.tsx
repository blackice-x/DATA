import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Video, 
  Zap, 
  Instagram, 
  Music, 
  Play, 
  Briefcase, 
  Calendar,
  X,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: Zap,
      title: 'Motion Graphics & VFX',
      description: 'Stunning visual effects and motion graphics that bring your content to life',
      features: ['3D Animations', 'Visual Effects', 'Logo Animations', 'Particle Systems'],
      price: 'Starting at $299',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Professional editing for short and long-form content',
      features: ['Color Grading', 'Audio Mixing', 'Transitions', 'Multi-cam Editing'],
      price: 'Starting at $199',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Instagram,
      title: 'Social Media Content',
      description: 'Engaging reels and promotional videos for social platforms',
      features: ['Instagram Reels', 'TikTok Videos', 'YouTube Shorts', 'Story Content'],
      price: 'Starting at $99',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Music,
      title: 'Music Videos',
      description: 'Cinematic music videos that capture the essence of your sound',
      features: ['Concept Development', 'Cinematic Editing', 'Color Grading', 'Audio Sync'],
      price: 'Starting at $499',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Play,
      title: 'Logo Animations',
      description: 'Dynamic logo animations and brand intros',
      features: ['2D/3D Logos', 'Brand Intros', 'Outro Cards', 'Watermarks'],
      price: 'Starting at $149',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Calendar,
      title: 'Event Highlights',
      description: 'Memorable event videos and highlight reels',
      features: ['Wedding Videos', 'Corporate Events', 'Conferences', 'Celebrations'],
      price: 'Starting at $399',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Briefcase,
      title: 'Business Content',
      description: 'Professional corporate videos and presentations',
      features: ['Product Demos', 'Training Videos', 'Presentations', 'Testimonials'],
      price: 'Starting at $249',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive video editing solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedService(index)}
            >
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 h-full hover:border-blue-400/40 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-blue-400 font-semibold">{service.price}</span>
                  <ArrowRight className="w-5 h-5 text-blue-400 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Modal */}
      <AnimatePresence>
        {selectedService !== null && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              className="bg-slate-800 border border-blue-500/20 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${services[selectedService].color} rounded-2xl flex items-center justify-center`}>
                  <services[selectedService].icon className="w-8 h-8 text-white" />
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <h3 className="text-3xl font-bold mb-4 text-white">
                {services[selectedService].title}
              </h3>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                {services[selectedService].description}
              </p>

              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4 text-blue-400">What's Included:</h4>
                <ul className="space-y-3">
                  {services[selectedService].features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-400">
                  {services[selectedService].price}
                </span>
                <button className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 rounded-full text-white font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300">
                  Order Now
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
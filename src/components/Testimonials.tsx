import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Content Creator',
      company: '@sarahjcreates',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Rivox Studio transformed my content completely! Their editing style is exactly what I needed for my brand. The attention to detail is incredible.',
      project: 'Instagram Reels Package'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Music Producer',
      company: 'Soundwave Records',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'The music video they created exceeded all expectations. Professional, creative, and delivered on time. Highly recommend!',
      project: 'Music Video Production'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'TechFlow Inc.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Outstanding work on our corporate video. The team understood our vision perfectly and brought it to life with stunning visuals.',
      project: 'Corporate Presentation'
    },
    {
      id: 4,
      name: 'David Park',
      role: 'Event Organizer',
      company: 'Elite Events',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'They captured the essence of our event perfectly. The highlight reel was emotional and beautifully crafted.',
      project: 'Wedding Highlight Reel'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 relative">
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
              Client Testimonials
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See what our clients say about working with Rivox Studio
          </p>
        </motion.div>

        {/* 3D Rotating Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-96 perspective-1000">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="absolute inset-0 flex items-center justify-center"
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: -90, opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 max-w-2xl w-full">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="text-xl font-semibold text-white">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-blue-400">{testimonials[currentIndex].role}</p>
                      <p className="text-gray-400 text-sm">{testimonials[currentIndex].company}</p>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <Quote className="w-8 h-8 text-blue-400/50 mb-4" />
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    "{testimonials[currentIndex].text}"
                  </p>
                  
                  <div className="text-sm text-blue-400 font-medium">
                    Project: {testimonials[currentIndex].project}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <motion.button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-blue-500' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        {/* Video Testimonials Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-blue-400">
            Video Testimonials
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((item) => (
              <motion.div
                key={item}
                className="group relative aspect-video bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl overflow-hidden hover:border-blue-400/40 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={`https://images.pexels.com/photos/317355${item}/pexels-photo-317355${item}.jpeg?auto=compress&cs=tinysrgb&w=800`}
                  alt={`Video testimonial ${item}`}
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.div
                    className="w-16 h-16 bg-blue-500/90 backdrop-blur-sm rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Play className="w-8 h-8 text-white ml-1" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
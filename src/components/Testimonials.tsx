import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Play } from 'lucide-react';

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
      project: 'Instagram Reels Package',
      videoUrl: 'https://www.instagram.com/reel/DNuY8eZ5Abq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Music Producer',
      company: 'Soundwave Records',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'The music video they created exceeded all expectations. Professional, creative, and delivered on time. Highly recommend!',
      project: 'Music Video Production',
      videoUrl: 'https://www.instagram.com/reel/DOAhzJ5krY8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'TechFlow Inc.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Outstanding work on our corporate video. The team understood our vision perfectly and brought it to life with stunning visuals.',
      project: 'Corporate Presentation',
      videoUrl: 'https://www.instagram.com/reel/DM4TmH0yhtL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
    },
    {
      id: 4,
      name: 'David Park',
      role: 'Event Organizer',
      company: 'Elite Events',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'They captured the essence of our event perfectly. The highlight reel was emotional and beautifully crafted.',
      project: 'Wedding Highlight Reel',
      videoUrl: 'https://www.instagram.com/reel/DJ8do1Ky8yG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
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

  const handleVideoClick = (videoUrl: string) => {
    window.open(videoUrl, '_blank');
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-blue-400 font-medium">
                      Project: {testimonials[currentIndex].project}
                    </div>
                    <motion.button
                      onClick={() => handleVideoClick(testimonials[currentIndex].videoUrl)}
                      className="bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-2 rounded-full text-white font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center space-x-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="w-4 h-4" />
                      <span>Watch Video</span>
                    </motion.button>
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
      </div>
    </section>
  );
};

export default Testimonials;
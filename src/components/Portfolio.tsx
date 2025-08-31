import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Filter, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Reels', 'Music Videos', 'Business Content', 'Motion Graphics'];

  const portfolioItems = [
    {
      id: 1,
      title: 'Brand Promotion Reel',
      category: 'Reels',
      thumbnail: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '0:30'
    },
    {
      id: 2,
      title: 'Corporate Presentation',
      category: 'Business Content',
      thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '2:15'
    },
    {
      id: 3,
      title: 'Music Video Edit',
      category: 'Music Videos',
      thumbnail: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '3:45'
    },
    {
      id: 4,
      title: 'Logo Animation',
      category: 'Motion Graphics',
      thumbnail: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '0:10'
    },
    {
      id: 5,
      title: 'Product Showcase',
      category: 'Business Content',
      thumbnail: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '1:20'
    },
    {
      id: 6,
      title: 'Social Media Reel',
      category: 'Reels',
      thumbnail: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '0:45'
    }
  ];

  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 relative">
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
              Our Portfolio
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our latest video editing projects and creative works
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                  : 'bg-slate-800/50 text-gray-300 hover:text-blue-400 border border-blue-500/20 hover:border-blue-400/40'
              }`}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Filter className="w-4 h-4 inline mr-2" />
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              layout
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.div
                    className="w-16 h-16 bg-blue-500/90 backdrop-blur-sm rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Play className="w-8 h-8 text-white ml-1" />
                  </motion.div>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white">
                  {item.duration}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-blue-400 font-medium">{item.category}</span>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Upload Section for Admin */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-slate-800/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Admin Upload</h3>
            <p className="text-gray-300 mb-6">Paste Instagram video link to add to portfolio</p>
            
            <div className="flex gap-4">
              <input
                type="url"
                placeholder="https://instagram.com/reel/..."
                className="flex-1 bg-slate-700/50 border border-blue-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
              />
              <motion.button
                className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 rounded-lg text-white font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Add Video
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
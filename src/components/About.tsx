import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const cards = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To transform creative visions into compelling visual stories that captivate and inspire audiences worldwide.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the leading creative studio that sets new standards in video editing and motion graphics excellence.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Lightbulb,
      title: 'Creative Process',
      description: 'We blend cutting-edge technology with artistic expertise to deliver videos that exceed expectations.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'A passionate collective of editors, animators, and creative professionals dedicated to your success.',
      color: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
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
              About Rivox Studio
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Born from the creative minds at JAME CLUB, Rivox Studio represents the pinnacle of 
            professional video editing services. We craft visual experiences that tell your story.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500"></div>
          
          {[
            { year: '2020', title: 'Foundation', desc: 'JAME CLUB was born with a vision' },
            { year: '2022', title: 'Growth', desc: 'Expanded our creative team and services' },
            { year: '2024', title: 'Rivox Studio', desc: 'Launched as premium video editing brand' },
            { year: '2025', title: 'Innovation', desc: 'Leading the future of video content' }
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-12`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">{item.year}</h3>
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 h-full hover:border-blue-400/40 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${card.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <card.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-white">{card.title}</h3>
                <p className="text-gray-300 leading-relaxed">{card.description}</p>
                
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
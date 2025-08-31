import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown } from 'lucide-react';

const Pricing = () => {
  const packages = [
    {
      name: 'Basic',
      icon: Star,
      price: '$199',
      period: 'per project',
      description: 'Perfect for simple video editing needs',
      features: [
        'Basic video editing',
        'Color correction',
        'Audio enhancement',
        'Simple transitions',
        '2 revisions included',
        '3-5 day delivery'
      ],
      color: 'from-gray-500 to-gray-600',
      popular: false
    },
    {
      name: 'Premium',
      icon: Zap,
      price: '$399',
      period: 'per project',
      description: 'Advanced editing with motion graphics',
      features: [
        'Advanced video editing',
        'Motion graphics',
        'Visual effects',
        'Professional color grading',
        'Audio mixing & mastering',
        '5 revisions included',
        '2-3 day delivery',
        'Custom animations'
      ],
      color: 'from-blue-500 to-blue-600',
      popular: true
    },
    {
      name: 'Elite',
      icon: Crown,
      price: '$799',
      period: 'per project',
      description: 'Premium cinematic experience',
      features: [
        'Cinematic video editing',
        'Advanced VFX & CGI',
        'Custom motion graphics',
        'Professional sound design',
        'Multiple format delivery',
        'Unlimited revisions',
        '1-2 day delivery',
        'Dedicated project manager',
        '3D animations',
        'Custom music composition'
      ],
      color: 'from-purple-500 to-pink-500',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 relative">
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
              Pricing & Packages
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect package for your video editing needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className={`relative group ${pkg.popular ? 'md:-mt-8' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className={`relative bg-slate-800/50 backdrop-blur-sm border ${
                pkg.popular ? 'border-blue-400/40' : 'border-blue-500/20'
              } rounded-2xl p-8 h-full hover:border-blue-400/40 transition-all duration-300`}>
                
                {/* Package Header */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${pkg.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <pkg.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-gray-300 mb-4">{pkg.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{pkg.price}</span>
                    <span className="text-gray-400 ml-2">{pkg.period}</span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700'
                      : 'border-2 border-blue-500/50 text-blue-300 hover:bg-blue-500/10 hover:border-blue-400'
                  }`}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: pkg.popular ? "0 10px 30px rgba(59, 130, 246, 0.3)" : "none"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Order Now
                </motion.button>

                {/* Glow Effect for Popular */}
                {pkg.popular && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-blue-400">
            Package Comparison
          </h3>
          
          <div className="bg-slate-800/30 backdrop-blur-sm border border-blue-500/20 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-700/50">
                  <tr>
                    <th className="text-left p-6 text-white font-semibold">Features</th>
                    <th className="text-center p-6 text-white font-semibold">Basic</th>
                    <th className="text-center p-6 text-white font-semibold">Premium</th>
                    <th className="text-center p-6 text-white font-semibold">Elite</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    'Video Editing',
                    'Color Grading',
                    'Motion Graphics',
                    'Visual Effects',
                    'Sound Design',
                    'Revisions',
                    'Delivery Time'
                  ].map((feature, idx) => (
                    <tr key={idx} className="border-t border-slate-700/50">
                      <td className="p-6 text-gray-300 font-medium">{feature}</td>
                      <td className="p-6 text-center">
                        <Check className={`w-5 h-5 mx-auto ${idx < 2 ? 'text-green-400' : 'text-gray-500'}`} />
                      </td>
                      <td className="p-6 text-center">
                        <Check className={`w-5 h-5 mx-auto ${idx < 5 ? 'text-green-400' : 'text-gray-500'}`} />
                      </td>
                      <td className="p-6 text-center">
                        <Check className="w-5 h-5 mx-auto text-green-400" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
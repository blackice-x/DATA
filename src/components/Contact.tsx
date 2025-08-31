import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Upload,
  MessageCircle,
  Instagram
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section id="contact" className="py-20 relative">
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
              Let's Create Together
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your vision to life? Get in touch and let's discuss your project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-slate-700/50 border border-blue-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-slate-700/50 border border-blue-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Project Type</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full bg-slate-700/50 border border-blue-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400 transition-colors duration-300"
                      required
                    >
                      <option value="">Select project type</option>
                      <option value="social-media">Social Media Content</option>
                      <option value="music-video">Music Video</option>
                      <option value="corporate">Corporate Video</option>
                      <option value="motion-graphics">Motion Graphics</option>
                      <option value="event">Event Highlights</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Budget Range</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full bg-slate-700/50 border border-blue-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400 transition-colors duration-300"
                    >
                      <option value="">Select budget</option>
                      <option value="under-500">Under $500</option>
                      <option value="500-1000">$500 - $1,000</option>
                      <option value="1000-2500">$1,000 - $2,500</option>
                      <option value="2500-plus">$2,500+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Project Details</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full bg-slate-700/50 border border-blue-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Reference Files</label>
                  <div className="border-2 border-dashed border-blue-500/30 rounded-lg p-6 text-center hover:border-blue-400/50 transition-colors duration-300">
                    <Upload className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <p className="text-gray-300">Drop files here or click to upload</p>
                    <p className="text-gray-500 text-sm mt-1">Max file size: 50MB</p>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 py-4 rounded-xl text-white font-semibold text-lg flex items-center justify-center space-x-2 hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: 'Email Us',
                  info: 'hello@rivoxstudio.com',
                  action: 'Send Email',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  icon: Phone,
                  title: 'Call Us',
                  info: '+1 (555) 123-4567',
                  action: 'Call Now',
                  color: 'from-green-500 to-teal-500'
                },
                {
                  icon: MapPin,
                  title: 'Visit Us',
                  info: '123 Creative Street, Studio City, CA 90210',
                  action: 'Get Directions',
                  color: 'from-purple-500 to-pink-500'
                }
              ].map((contact, idx) => (
                <motion.div
                  key={idx}
                  className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 hover:border-blue-400/40 transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white">{contact.title}</h4>
                      <p className="text-gray-300">{contact.info}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Contact Buttons */}
            <div className="space-y-4">
              <motion.button
                className="w-full bg-green-600 hover:bg-green-700 py-4 rounded-xl text-white font-semibold text-lg flex items-center justify-center space-x-2 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Chat</span>
              </motion.button>

              <motion.button
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 py-4 rounded-xl text-white font-semibold text-lg flex items-center justify-center space-x-2 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram DM</span>
              </motion.button>
            </div>

            {/* Map Placeholder */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Our Location</h4>
              <div className="aspect-video bg-slate-700/50 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-2" />
                  <p className="text-gray-300">Interactive Map</p>
                  <p className="text-gray-500 text-sm">Studio City, California</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
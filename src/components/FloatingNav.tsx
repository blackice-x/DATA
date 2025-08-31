import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  User, 
  Briefcase, 
  Image, 
  DollarSign, 
  Mail,
  MessageCircle
} from 'lucide-react';

const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showChat, setShowChat] = useState(false);

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'services', icon: Briefcase, label: 'Services' },
    { id: 'portfolio', icon: Image, label: 'Portfolio' },
    { id: 'pricing', icon: DollarSign, label: 'Pricing' },
    { id: 'contact', icon: Mail, label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Navigation */}
      <motion.div
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="bg-slate-800/80 backdrop-blur-md border border-blue-500/30 rounded-full px-6 py-4">
          <div className="flex items-center space-x-2">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative p-3 rounded-full transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-400 hover:text-blue-400 hover:bg-blue-500/10'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title={item.label}
              >
                <item.icon className="w-5 h-5" />
                
                {activeSection === item.id && (
                  <motion.div
                    className="absolute inset-0 bg-blue-500 rounded-full"
                    layoutId="activeTab"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    style={{ zIndex: -1 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* AI Chat Assistant */}
      <motion.div
        className="fixed bottom-8 right-8 z-40"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <motion.button
          onClick={() => setShowChat(!showChat)}
          className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)"
          }}
          whileTap={{ scale: 0.9 }}
        >
          <MessageCircle className="w-6 h-6" />
        </motion.button>

        {/* Chat Popup */}
        {showChat && (
          <motion.div
            className="absolute bottom-16 right-0 w-80 bg-slate-800/95 backdrop-blur-md border border-blue-500/30 rounded-2xl p-6 shadow-2xl"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-white">AI Assistant</h4>
              <button
                onClick={() => setShowChat(false)}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-3 mb-4">
              <div className="bg-blue-500/20 rounded-lg p-3">
                <p className="text-blue-300 text-sm">
                  Hi! I'm here to help you with any questions about our video editing services. How can I assist you today?
                </p>
              </div>
            </div>

            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 bg-slate-700/50 border border-blue-500/30 rounded-lg px-3 py-2 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-blue-400 transition-colors duration-300"
              />
              <motion.button
                className="bg-blue-500 hover:bg-blue-600 p-2 rounded-lg text-white transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send className="w-4 h-4" />
              </motion.button>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {['Pricing Info', 'Portfolio', 'Get Quote'].map((suggestion) => (
                <button
                  key={suggestion}
                  className="text-xs bg-slate-700/50 text-blue-300 px-3 py-1 rounded-full hover:bg-blue-500/20 transition-colors duration-300"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </>
  );
};

export default FloatingNav;
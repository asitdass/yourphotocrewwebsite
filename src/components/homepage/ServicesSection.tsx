import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Camera, Image, Users, DollarSign, Palette } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTab, setActiveTab] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const services = [
    {
      title: 'Dating Profile',
      icon: <Users className="w-6 h-6" />,
      description: 'Stand out on dating apps with professional photos that showcase your personality.',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
    },
    {
      title: 'Portfolio Shoot',
      icon: <Image className="w-6 h-6" />,
      description: 'Build a professional portfolio with high-quality images for your career advancement.',
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      title: 'Cafe Shoots',
      icon: <Camera className="w-6 h-6" />,
      description: 'Capture candid moments in cozy cafe settings with perfect lighting and ambiance.',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80',
    },
    {
      title: 'Street Photography',
      icon: <Palette className="w-6 h-6" />,
      description: 'Urban photoshoots that capture the energy and character of city streets.',
      image: 'https://images.unsplash.com/photo-1551854716-8b811be39e7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
    },
  ];

  return (
    <section id="services" className="py-20 bg-quaternary">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What We Offer</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              From dating profiles to portfolio shoots, we offer a variety of themes to suit your needs.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <div className="bg-tertiary p-6 rounded-lg shadow-lg">
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center bg-secondary-light p-4 rounded-lg">
                  <DollarSign className="w-6 h-6 text-secondary mr-2" />
                  <span className="text-primary font-medium">Rs 500/theme on weekdays</span>
                </div>
                <div className="flex items-center bg-secondary-light p-4 rounded-lg">
                  <DollarSign className="w-6 h-6 text-secondary mr-2" />
                  <span className="text-primary font-medium">Rs 600/theme on weekends</span>
                </div>
                <div className="flex items-center bg-secondary-light p-4 rounded-lg">
                  <Calendar className="w-6 h-6 text-secondary mr-2" />
                  <span className="text-primary font-medium">Multiple themes available</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex overflow-x-auto pb-2 mb-6 scrollbar-hide">
              <div className="flex space-x-2">
                {services.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`px-6 py-3 rounded-full whitespace-nowrap transition-all duration-300 ${
                      activeTab === index
                        ? 'bg-secondary text-tertiary'
                        : 'bg-tertiary text-primary hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="mr-2">{service.icon}</span>
                      <span className="font-medium">{service.title}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={services[activeTab].image}
                  alt={services[activeTab].title}
                  className="w-full h-80 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">{services[activeTab].title}</h3>
                <p className="text-gray-700 mb-6">{services[activeTab].description}</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span className="text-primary">Professional photographers with years of experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span className="text-primary">Wardrobe and props available</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span className="text-primary">10+ edited photos delivered within 48 hours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span className="text-primary">Multiple locations and themes to choose from</span>
                  </li>
                </ul>
                <a
                  href="#contact"
                  className="inline-block bg-secondary text-tertiary px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300"
                >
                  Book This Service
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <a
              href="#contact"
              className="inline-block bg-primary text-tertiary px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300"
            >
              Explore All Services
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
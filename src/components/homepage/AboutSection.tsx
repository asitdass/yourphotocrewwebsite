import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Camera, Users, Clock, Sparkles } from 'lucide-react';

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  const teamImages = [
    'https://images.unsplash.com/photo-1556103255-4443dbae8e5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1552642986-ccb41e7059e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  ];

  return (
    <section id="about" className="py-20 bg-tertiary">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Who We Are</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              We're a passionate team of 20+ photographers dedicated to making high-quality candid photoshoots accessible and fun for everyone.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div variants={itemVariants} className="order-2 md:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Camera className="w-10 h-10 text-secondary" />,
                    title: 'Affordable',
                    description: 'High-quality photoshoots accessible for the middle class',
                  },
                  {
                    icon: <Sparkles className="w-10 h-10 text-secondary" />,
                    title: 'Timeless Photos',
                    description: 'Capture memories at iconic locations',
                  },
                  {
                    icon: <Users className="w-10 h-10 text-secondary" />,
                    title: 'Wardrobe Provided',
                    description: 'Complete styling for males included',
                  },
                  {
                    icon: <Clock className="w-10 h-10 text-secondary" />,
                    title: 'Quick Turnaround',
                    description: 'Receive your edited photos within 48 hours',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-quaternary p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="mb-4">{item.icon}</div>
                    <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </motion.div>
                ))}
              </div>
              <motion.div variants={itemVariants} className="mt-8">
                <a
                  href="#services"
                  className="inline-block bg-secondary text-tertiary px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300"
                >
                  Learn More About Us
                </a>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="order-1 md:order-2">
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  {teamImages.map((image, index) => (
                    <div
                      key={index}
                      className={`overflow-hidden rounded-lg shadow-lg ${
                        index === 2 ? 'col-span-2' : ''
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Team member ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
                <div className="absolute -bottom-6 -right-6 bg-secondary text-tertiary p-4 rounded-lg shadow-lg">
                  <p className="font-bold text-xl">20+</p>
                  <p className="text-sm">Professional Photographers</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
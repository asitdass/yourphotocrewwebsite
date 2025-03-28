import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Great_Vibes } from 'next/font/google';

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400', // Great Vibes only has one weight (400)
});

const TestimonialsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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

  const testimonials = [
    {
      text: "I was hesitant at first, but the team made me feel so comfortable. The photos turned out amazing and really captured my personality. I've already booked another session!",
      name: "Ananya Sharma",
      role: "Marketing Professional",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      text: "As someone who's always been camera shy, I was amazed at how YourPhotoCrew made me look so natural in the photos. The wardrobe options were fantastic, and the price was unbeatable!",
      name: "Rajiv Mehta",
      role: "Software Engineer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      text: "I needed professional photos for my LinkedIn profile, and YourPhotoCrew delivered beyond my expectations. The team was punctual, professional, and the photos helped me land my dream job!",
      name: "Priya Patel",
      role: "HR Consultant",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    },
    {
      text: "The cafe photoshoot was such a fun experience! The photographers knew exactly how to capture the best angles and lighting. My Instagram has never looked better!",
      name: "Arjun Singh",
      role: "Content Creator",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-20 bg-quaternary">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Our Clients Say</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Don't just take our word for it – hear from our happy clients!
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="bg-tertiary rounded-lg shadow-lg p-6 md:p-10 mb-8">
              <Quote className="w-16 h-16 text-secondary opacity-20 absolute top-8 left-8" />
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg md:text-xl text-gray-700 italic mb-6">
                      "{testimonials[currentTestimonial].text}"
                    </p>
                    <div>
                      <h4 className="text-xl font-semibold text-primary">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <button
                onClick={prevTestimonial}
                className="bg-tertiary text-primary p-2 rounded-full shadow hover:bg-gray-100 transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex space-x-2 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentTestimonial === index ? 'bg-secondary w-6' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="bg-tertiary text-primary p-2 rounded-full shadow hover:bg-gray-100 transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center mt-12">
            <a
              href="#contact"
              className="inline-block bg-secondary text-tertiary px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300"
            >
              Read Google Reviews
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="text-center mt-12"
        >
          <div className="bg-tertiary rounded-lg shadow-lg p-6 md:p-10 mb-8">
            <p className={`${greatVibes.className} text-lg md:text-xl text-gray-700 italic mb-6`}>“We don't use your photos for marketing without prior consent. We here at yourphotocrew respect your privacy”</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
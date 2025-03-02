import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/assets/homepage/hero/image-1.jpg",
      title: "Capture Moments, Not Budgets",
    },
    {
      image: "/assets/homepage/hero/image-2.jpg",
      title: "Shoot At A Price Of A Coffee Date🤩",
    },
    {
      image: "/assets/homepage/hero/image-3.jpg",
      title: "Better Than Your Buddy's Phone😎",
    },
    {
      image: "/assets/homepage/hero/image-4.jpg",
      title: "Come Get 'THAT PIC'✨",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Slider */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-primary bg-opacity-50" />
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Dark Shadow Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-tertiary mb-6 leading-tight">
            Capture Timeless Moments with YourPhotoCrew
          </h1>
          {slides[currentSlide].title && (
            <p className="text-xl md:text-2xl text-tertiary mb-8">
              {slides[currentSlide].title}
            </p>
          )}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary text-tertiary px-8 py-3 rounded-full font-medium text-lg hover:bg-opacity-90 transition-all duration-300"
            >
              Book Now
            </motion.a>
            <motion.a
              href="#gallery"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-tertiary text-tertiary px-8 py-3 rounded-full font-medium text-lg hover:bg-tertiary hover:text-primary transition-all duration-300"
            >
              View Gallery
            </motion.a>
          </div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          onClick={() => {
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <ChevronDown className="text-tertiary w-10 h-10" />
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-secondary w-8"
                : "bg-tertiary bg-opacity-50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Instagram, Camera, Heart, Smile, Users, Play, Pause, ChevronRight } from 'lucide-react';

const BtsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isVideoExpanded, setIsVideoExpanded] = useState(false);
  const [activeDoubt, setActiveDoubt] = useState(0);

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

  const doubts = [
    "About quality?",
    "What will the process be like in person?",
    "Are the crew friendly?",
    "Is it going to be awkward...?",
    "I'm not someone good with poses. I get camera shy..."
  ];

  // Auto-rotate doubts
  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveDoubt((prev) => (prev + 1) % doubts.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [doubts.length]);

  return (
    <section className="py-20 bg-quaternary overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Behind The Scenes</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-700">
              We exclusively click first-timers, only.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left column - Content */}
            <motion.div variants={itemVariants} className="lg:col-span-4 space-y-6">
              <div className="bg-tertiary rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  The First-Timer Journey
                </h3>
                <p className="text-gray-700 mb-8">
                  All first-timers have a similar journey with us. The very first minute, 
                  the feeling of anxiety and these common doubts:
                </p>
                <div className="relative h-20">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeDoubt}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      className="absolute inset-0 flex items-center"
                    >
                      <div className="flex items-center space-x-3 text-gray-700">
                        <ChevronRight className="w-5 h-5 text-secondary" />
                        <span className="text-lg">{doubts[activeDoubt]}</span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              <motion.div
                variants={itemVariants}
                className="bg-primary rounded-2xl p-8 text-tertiary"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Smile className="w-8 h-8 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">
                      ALL THESE DOUBTS FADE AWAY IN THE VERY NEXT 5 MIN...
                    </h4>
                    <p className="mb-4">
                      COME SEE IT FOR YOURSELF even just as a viewer. WE HIRE A SHOOT 'FRIEND' 
                      TAILORING THE PROCESS FOR A FIRST TIMER.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Center column - Video */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-4 relative mx-auto w-full max-w-[350px]"
            >
              <motion.div
                className={`relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ${
                  isVideoExpanded ? 'fixed inset-4 z-50 bg-black' : ''
                }`}
                layoutId="video-container"
              >
                <div className={`${
                  isVideoExpanded 
                    ? 'h-full w-full flex items-center justify-center'
                    : 'aspect-[9/16] bg-gray-900'
                }`}>
                  <iframe
                    className={`w-full h-full rounded-2xl ${
                      isVideoExpanded ? 'max-w-[calc(100vh*9/16)]' : ''
                    }`}
                    src="https://www.youtube.com/embed/your-video-id"
                    title="Behind the scenes at YourPhotoCrew"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <button
                  onClick={() => setIsVideoExpanded(!isVideoExpanded)}
                  className="absolute bottom-4 right-4 bg-secondary text-white p-3 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300"
                >
                  {isVideoExpanded ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>
                
                {/* Video overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 pointer-events-none" />
                
                {/* Video stats */}
                <div className="absolute bottom-4 left-4 flex items-center space-x-4 text-white text-sm">
                  <div className="flex items-center">
                    <Heart className="w-4 h-4 mr-1" />
                    <span>2.4k</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>12k</span>
                  </div>
                </div>
              </motion.div>
              
              {isVideoExpanded && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black bg-opacity-75 z-40"
                  onClick={() => setIsVideoExpanded(false)}
                />
              )}
            </motion.div>

            {/* Right column - Features */}
            <motion.div variants={itemVariants} className="lg:col-span-4 space-y-6">
              <div className="bg-tertiary p-6 rounded-xl shadow-lg">
                <Camera className="w-8 h-8 text-secondary mb-4" />
                <h5 className="font-semibold text-lg mb-2 text-primary">Professional Setup</h5>
                <p className="text-gray-600 text-sm">State-of-the-art equipment and experienced crew</p>
              </div>
              
              <div className="bg-tertiary p-6 rounded-xl shadow-lg">
                <Users className="w-8 h-8 text-secondary mb-4" />
                <h5 className="font-semibold text-lg mb-2 text-primary">Friendly Crew</h5>
                <p className="text-gray-600 text-sm">Dedicated team to make you comfortable</p>
              </div>
              
              <div className="bg-tertiary p-6 rounded-xl shadow-lg">
                <Heart className="w-8 h-8 text-secondary mb-4" />
                <h5 className="font-semibold text-lg mb-2 text-primary">Natural Results</h5>
                <p className="text-gray-600 text-sm">Candid moments captured beautifully</p>
              </div>

              <motion.a
                href="https://www.instagram.com/yourphotocrew"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-secondary text-tertiary p-4 rounded-xl text-center hover:bg-opacity-90 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Instagram className="w-8 h-8 mx-auto mb-2" />
                <span className="font-medium">Watch More BTS Reels</span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BtsSection;
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Tag, Calendar, Clock, Camera } from 'lucide-react';

const OffersSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeStatus, setActiveStatus] = useState<'active' | 'future' | 'past'>('active');

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

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // Sample offers with status and dates
  const allOffers = [
    {
      title: 'Pre-booking Discount',
      description: 'Get 20% off on pre-booking.',
      code: 'PREBOOK20',
      startDate: '2025-01-01',
      endDate: '2025-07-10',
      status: 'active',
      image: 'https://images.unsplash.com/photo-1551854716-8b811be39e7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
    },
    // {
    //   title: 'Group Discount',
    //   description: 'Bring 3 friends and get 15% off on the total package price.',
    //   code: 'GROUP15',
    //   startDate: '2025-01-01',
    //   endDate: '2025-09-13',
    //   status: 'active',
    //   image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
    // },
    // {
    //   title: 'First-Time Offer',
    //   description: 'First-time customers get a free digital photo frame with their package.',
    //   code: 'FIRST10',
    //   startDate: '2025-01-01',
    //   endDate: '2025-11-14',
    //   status: 'active',
    //   image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80',
    // },
    // {
    //   title: 'Seasonal Discount',
    //   description: 'Monsoon special: 25% off on all outdoor photoshoots.',
    //   code: 'MONSOON25',
    //   startDate: '2025-06-01',
    //   endDate: '2025-09-30',
    //   status: 'future',
    //   image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    // },
    // {
    //   title: 'Valentine Special',
    //   description: 'Couple photoshoots at 30% discount for Valentine\'s week.',
    //   code: 'LOVE30',
    //   startDate: '2025-02-07',
    //   endDate: '2025-02-14',
    //   status: 'future',
    //   image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    // },
    // {
    //   title: 'Holiday Season',
    //   description: 'Family portraits with 20% discount during the holiday season.',
    //   code: 'HOLIDAY20',
    //   startDate: '2024-12-01',
    //   endDate: '2024-12-31',
    //   status: 'past',
    //   image: 'https://images.unsplash.com/photo-1545048702-79362596cdc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    // },
    // {
    //   title: 'Diwali Offer',
    //   description: 'Festival special: Book one theme, get one free.',
    //   code: 'DIWALI2FOR1',
    //   startDate: '2024-10-15',
    //   endDate: '2024-11-15',
    //   status: 'past',
    //   image: 'https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    // },
  ];

  // Filter and sort offers based on active status
  const filteredOffers = allOffers.filter(offer => offer.status === activeStatus);
  
  // Sort based on status
  const sortedOffers = [...filteredOffers].sort((a, b) => {
    if (activeStatus === 'active') {
      // Sort by end date in increasing order
      return new Date(a.endDate).getTime() - new Date(b.endDate).getTime();
    } else if (activeStatus === 'future') {
      // Sort by start date in increasing order
      return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
    } else {
      // Sort by end date in decreasing order for past offers
      return new Date(b.endDate).getTime() - new Date(a.endDate).getTime();
    }
  });

  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <section id="offers" className="py-20 bg-tertiary">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Exclusive Offers</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Check out our active discounts and book your shoot today!
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Show this active discount on the shoot day to avail it.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <div className="inline-flex bg-quaternary rounded-full p-1 shadow-md">
              {(['active', 'future', 'past'] as const).map((status) => (
                <button
                  key={status}
                  onClick={() => setActiveStatus(status)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeStatus === status
                      ? 'bg-secondary text-tertiary'
                      : 'text-primary hover:bg-gray-200'
                  }`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
              <button
                onClick={scrollLeft}
                className="bg-tertiary bg-opacity-80 text-primary p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 focus:outline-none"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>

            {sortedOffers.length > 0 ? (
              <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto space-x-6 py-8 px-4 hide-scrollbar justify-evenly"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {sortedOffers.map((offer, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-full sm:w-[350px] bg-quaternary rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative h-48">
                      <img
                        src={offer.image}
                        alt={offer.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-0 left-0 bg-secondary text-tertiary px-4 py-2 rounded-br-lg font-medium flex items-center">
                        <Tag className="w-4 h-4 mr-1" />
                        <span>{offer.code}</span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-primary bg-opacity-75 text-tertiary px-4 py-2 text-sm flex items-center justify-between">
                      <div className="flex items-center">
                        <Camera className="w-4 h-4 mr-1" />
                        <span>
                          {activeStatus === 'active'
                            ? `${formatDate(new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString())} - ${formatDate(offer.endDate)}`
                            : `${formatDate(offer.startDate)} - ${formatDate(offer.endDate)}`
                          }
                        </span>
                      </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-primary mb-2">{offer.title}</h3>
                      <p className="text-gray-700 mb-4">{offer.description}</p>
                      
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <Clock className="w-4 h-4 mr-1" />
                        {activeStatus === 'active' && (
                          <span>
                            Valid from {formatDate(new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString())} to {formatDate(offer.endDate)}
                          </span>
                        )}
                        {activeStatus === 'future' && (
                          <span>Starting from {formatDate(offer.startDate)}</span>
                        )}
                        {activeStatus === 'past' && (
                          <span>Expired on {formatDate(offer.endDate)}</span>
                        )}
                      </div>
                      
                      {activeStatus !== 'past' && (
                        <a
                          href={`https://wa.me/7676235229?text=${encodeURIComponent(
                            `COUPON CODE: ${offer.code}\nDiscount Name: ${offer.title}\nCurrent Date: ${new Date().toLocaleDateString()}`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-secondary text-tertiary px-4 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300"
                        >
                        Claim Offer
                      </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-quaternary rounded-lg">
                <p className="text-gray-600">No {activeStatus} offers available at the moment.</p>
              </div>
            )}

            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
              <button
                onClick={scrollRight}
                className="bg-tertiary bg-opacity-80 text-primary p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 focus:outline-none"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </motion.div>

          {/* <motion.div variants={itemVariants} className="text-center mt-12">
            <a
              href="#services"
              className="inline-block bg-primary text-tertiary px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300"
            >
              View All Offers
            </a>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default OffersSection;
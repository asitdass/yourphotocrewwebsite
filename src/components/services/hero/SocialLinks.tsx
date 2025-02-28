import React, { useEffect, useState } from 'react';

const SocialLinks = () => {
  const [isSticky, setIsSticky] = useState(false);

  // Add scroll event listener to detect when to make the component sticky
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`${
        isSticky
          ? 'fixed bottom-0 left-0 w-full bg-white shadow-lg z-50 animate-slide-up items-center'
          : 'relative mt-[46px] max-md:mt-10 flex-start'
      } flex flex-col justify-center py-6 transition-all duration-300`}
    >
      {/* Title */}
      <div className="text-black text-lg font-semibold mb-4">Book Your Tickets</div>

      {/* Buttons Container */}
      <div className="flex gap-8">
        {/* Paytm Insider Button */}
        <button
          className="group relative flex items-center justify-center w-40 h-20 rounded-md shadow-lg hover:scale-110 transition-transform"
        >
          <img
            src="/assets/homepage/paytm-insider.svg" // Replace with Paytm Insider logo URL
            alt="Paytm Insider Logo"
            className="w-28 group-hover:scale-110 transition-transform"
          />
        </button>

        {/* BookMyShow Button */}
        <button
          className="group relative flex items-center justify-center w-40 h-20 rounded-md shadow-lg hover:scale-110 transition-transform"
        >
          <img
            src="/assets/homepage/bookmyshow-logo.svg" // Replace with BookMyShow logo URL
            alt="BookMyShow Logo"
            className="w-28 group-hover:scale-110 transition-transform"
          />
        </button>

        {/* WhatsApp Button */}
        <button
          className="group relative flex items-center justify-center w-40 h-20 rounded-md shadow-lg hover:scale-110 transition-transform"
        >
          <img
            src="/assets/homepage/whatsapp-logo.svg" // Replace with WhatsApp logo URL
            alt="WhatsApp Logo"
            className="w-28 group-hover:scale-110 transition-transform"
          />
        </button>
      </div>
    </div>
  );
};

export default SocialLinks;
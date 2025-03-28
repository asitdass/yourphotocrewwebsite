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
          ? 'fixed bottom-0 left-0 w-full bg-primary shadow-lg z-50 animate-slide-up items-center flex flex-start gap-4'
          : 'flex flex-col justify-center relative mt-[46px] max-md:mt-10 flex-start'
      } h-[100px] p-8 transition-all duration-300`}
    >
      {/* Title */}
      <div className={`${isSticky ? 'hidden' : ''} text-black text-lg font-semibold mb-4`}>Book Your Tickets</div>

      {/* Buttons Container */}
      <div className="flex gap-8">
        {/* Paytm Insider Button */}
        <a href="https://www.district.in/professional-photoshoot-come-get-that-pic-jun23-2024/event" target="_blank" rel="noopener noreferrer">
        <button
          className={`${isSticky ? 'w-32 h-16' : 'w-40 h-20'} group relative flex items-center justify-center bg-tertiary rounded-md shadow-lg hover:scale-110 transition-transform`}
          >
          <img
            src="/assets/homepage/paytm-insider.svg" // Replace with Paytm Insider logo URL
            alt="Paytm Insider Logo"
            className={`${isSticky ? 'w-20' : 'w-28'} group-hover:scale-110 transition-transform`}
          />
        </button>
        </a>

        {/* BookMyShow Button */}
        <a href="https://in.bookmyshow.com/events/professional-photoshoot-come-get-that-pic/ET00401389" target="_blank" rel="noopener noreferrer">
          <button
            className={`${isSticky ? 'w-32 h-16' : 'w-40 h-20'} group relative bg-tertiary flex items-center justify-center rounded-md shadow-lg hover:scale-110 transition-transform`}
          >
            <img
              src="/assets/homepage/bookmyshow-logo.svg" // Replace with BookMyShow logo URL
              alt="BookMyShow Logo"
              className={`${isSticky ? 'w-20' : 'w-28'} group-hover:scale-110 transition-transform`}
            />
          </button>
        </a>

        {/* WhatsApp Button */}
        <a href="https://wa.me/7676235229" target="_blank" rel="noopener noreferrer">
        <button
          className={`${isSticky ? 'w-auto h-16' : 'w-auto h-20'} group relative bg-tertiary flex items-center justify-center rounded-md shadow-lg hover:scale-110 transition-transform px-2`}
          >
          <img
            src="/assets/homepage/whatsapp.svg" // Replace with WhatsApp logo URL
            alt="WhatsApp Logo"
            className={`${isSticky ? 'w-10' : 'w-14'} group-hover:scale-110 transition-transform`}
          />
          <p className='text-primary text-sm font-semibold'>Cheaper & No Prepayment!</p>
        </button>
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
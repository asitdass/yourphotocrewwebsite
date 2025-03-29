import Footer from "@/components/Footer";
import AboutSection from "@/components/homepage/AboutSection";
import BrandUspSection from "@/components/homepage/BrandUspSection";
import ContactSection from "@/components/homepage/ContactSection";
import GallerySection from "@/components/homepage/GallerySection";
import HeroSection from "@/components/homepage/HeroSection";
import HookupText from "@/components/homepage/HookupText";
import NeedSection from "@/components/homepage/NeedSection";
import ServicesSection from "@/components/homepage/ServicesSection";
import TestimonialsSection from "@/components/homepage/TestimonialsSection";
import Navbar from "@/components/Navbar";
import GlimpseGallery from "@/components/services/gallerysection/GlimpseGallery";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Great_Vibes } from 'next/font/google';

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400', // Great Vibes only has one weight (400)
});

const IndexPage = () => {
  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <HookupText />
      <NeedSection />
      <BrandUspSection />
      <ServicesSection />
      {/* <GallerySection /> */}
      <AboutSection />
      <GlimpseGallery />
      <TestimonialsSection />
      {/* <ContactSection /> */}
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default IndexPage;
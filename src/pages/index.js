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
import WhatsAppButton from "@/components/WhatsAppButton";

const IndexPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <HookupText />
      <AboutSection />
      <NeedSection />
      <BrandUspSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default IndexPage;
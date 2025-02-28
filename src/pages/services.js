import React from 'react'
import { Camera, Clock, Heart, DollarSign, Award } from 'lucide-react';
import ScheduledShoot from '../components/services/hero/ScheduledShoot';
import FeaturesSection from '@/components/services/FeaturesSection';
import CameraLoveSection from '@/components/services/cameralovesection/CameraLoveSection';
import GlimpseGallery from '@/components/services/gallerysection/GlimpseGallery';
import GettingStarted from '@/components/services/gettingstarted/GettingStarted';
import FAQ from '@/components/services/faq/FAQ';
import DiscountSection from '@/components/services/discount/DiscountSection';
const services = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      {/* Header Section */}
      <ScheduledShoot />

      {/* Why Choose Us Section */}
      <CameraLoveSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Portfolio Grid */}
      <GlimpseGallery />

      {/* Getting Started Section */}
      <GettingStarted />

      {/* Pricing Section */}
      <DiscountSection />

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <footer className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="col-span-2">
              <h3 className="font-bold mb-4">YourPhotoCrew</h3>
              <p className="text-gray-600 mb-4">Phone: +91 9999999999</p>
              <p className="text-gray-600">Email: example@example.com</p>
            </div>
            {['Solutions', 'Resources', 'Company', 'Support'].map((column, index) => (
              <div key={index}>
                <h3 className="font-bold mb-4">{column}</h3>
                <ul className="space-y-2">
                  {[1,2,3,4].map((item) => (
                    <li key={item} className="text-gray-600">Menu Item {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default services
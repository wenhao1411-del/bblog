import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, CheckCircle } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm mb-6">
              Professional Sourcing Solutions
            </div>
            <h1 className="mb-6 text-gray-900">
              Your Trusted Partner in China Sourcing
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We help businesses worldwide source quality products from China with 
              confidence. From supplier verification to quality control and logistics, 
              we handle every step of your sourcing journey.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Factory Audit & Supplier Verification</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Professional Quality Inspection</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">End-to-End Logistics Management</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg flex items-center gap-2 transition-colors shadow-lg">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-lg border-2 border-gray-200 transition-colors">
                View Services
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1619070284836-e850273d69ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWN0b3J5JTIwd2FyZWhvdXNlJTIwbG9naXN0aWNzfGVufDF8fHx8MTc2OTI2NDkwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Warehouse and Logistics"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-4xl text-green-600 mb-1">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

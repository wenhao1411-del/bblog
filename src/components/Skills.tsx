import { Search, ClipboardCheck, Package, Truck, FileText, Headphones } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const services = [
  {
    icon: Search,
    title: 'Product Sourcing',
    description: 'We help you find the right suppliers and products that match your requirements and budget'
  },
  {
    icon: ClipboardCheck,
    title: 'Supplier Verification',
    description: 'Comprehensive factory audits and supplier background checks to ensure reliability'
  },
  {
    icon: Package,
    title: 'Quality Control',
    description: 'Professional inspection services during production and before shipment to guarantee quality'
  },
  {
    icon: Truck,
    title: 'Logistics & Shipping',
    description: 'End-to-end logistics management including customs clearance and delivery coordination'
  },
  {
    icon: FileText,
    title: 'Documentation Support',
    description: 'Complete handling of import/export documentation and compliance requirements'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Dedicated account managers available to assist you throughout the sourcing process'
  }
];

export function Skills() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive sourcing solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-xl transition-all group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-green-600 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12">
              <h3 className="text-3xl mb-6 text-gray-900">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-lg mb-1 text-gray-900">Local Expertise</h4>
                    <p className="text-gray-600">Deep understanding of Chinese market and manufacturing landscape</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-lg mb-1 text-gray-900">Quality Assurance</h4>
                    <p className="text-gray-600">Rigorous inspection processes to ensure product quality meets your standards</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-lg mb-1 text-gray-900">Cost Effective</h4>
                    <p className="text-gray-600">Competitive pricing with transparent fee structure and no hidden costs</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-lg mb-1 text-gray-900">Full Transparency</h4>
                    <p className="text-gray-600">Regular updates and complete visibility throughout the sourcing process</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 lg:h-auto">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1768796372175-b4495c84a085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFsaXR5JTIwaW5zcGVjdGlvbiUyMG1hbnVmYWN0dXJpbmd8ZW58MXx8fHwxNzY5MjY0OTA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Quality Inspection"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

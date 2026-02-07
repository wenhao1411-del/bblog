import { Search, ClipboardCheck, Package, Truck, FileText, Headphones, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const services = [
  {
    icon: Search,
    title: 'Product Sourcing',
    description: 'We help you find the right suppliers and products that match your requirements and budget',
    features: [
      'Market research and supplier identification',
      'Product specification matching',
      'Price negotiation and comparison',
      'Sample procurement and evaluation'
    ]
  },
  {
    icon: ClipboardCheck,
    title: 'Supplier Verification',
    description: 'Comprehensive factory audits and supplier background checks to ensure reliability',
    features: [
      'On-site factory inspections',
      'Business license verification',
      'Production capacity assessment',
      'Quality management system review'
    ]
  },
  {
    icon: Package,
    title: 'Quality Control',
    description: 'Professional inspection services during production and before shipment to guarantee quality',
    features: [
      'Pre-production inspection',
      'During production monitoring',
      'Pre-shipment inspection',
      'Container loading supervision'
    ]
  },
  {
    icon: Truck,
    title: 'Logistics & Shipping',
    description: 'End-to-end logistics management including customs clearance and delivery coordination',
    features: [
      'Freight forwarder coordination',
      'Customs documentation',
      'Shipment tracking',
      'Delivery arrangement'
    ]
  },
  {
    icon: FileText,
    title: 'Documentation Support',
    description: 'Complete handling of import/export documentation and compliance requirements',
    features: [
      'Contract preparation and review',
      'Export/import documentation',
      'Compliance certification',
      'Payment terms management'
    ]
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Dedicated account managers available to assist you throughout the sourcing process',
    features: [
      'Dedicated account manager',
      'Real-time communication',
      'Regular progress updates',
      'Emergency support hotline'
    ]
  }
];

export function Services() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Our Services</h1>
            <p className="text-xl text-gray-600">
              Comprehensive sourcing solutions designed to streamline your China sourcing process 
              and ensure successful outcomes
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-xl transition-all"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-green-600 rounded-lg mb-6">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A proven step-by-step approach to successful sourcing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Understand your requirements and sourcing goals' },
              { step: '02', title: 'Sourcing', description: 'Identify and evaluate suitable suppliers' },
              { step: '03', title: 'Quality Control', description: 'Inspect products and ensure quality standards' },
              { step: '04', title: 'Delivery', description: 'Manage logistics and deliver to your door' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-4 text-white text-2xl">
                  {item.step}
                </div>
                <h3 className="text-xl mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-white">Ready to Start Your Sourcing Journey?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you source quality products from China
          </p>
          <a href="/contact">
            <button className="bg-white hover:bg-gray-100 text-green-600 px-8 py-3 rounded-lg transition-colors shadow-lg text-lg">
              Contact Us Today
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}

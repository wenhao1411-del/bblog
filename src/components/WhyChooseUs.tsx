import { Shield, Award, Clock, Globe, Users, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    description: 'Rigorous inspection standards ensure your products meet the highest quality requirements'
  },
  {
    icon: Award,
    title: '10+ Years Experience',
    description: 'Proven track record in China sourcing with deep industry knowledge and expertise'
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'Efficient logistics management ensures your products arrive on schedule'
  },
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Serving clients in 50+ countries with comprehensive local support'
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: '24/7 customer service and dedicated account managers for your peace of mind'
  },
  {
    icon: TrendingUp,
    title: 'Cost Effective',
    description: 'Competitive pricing with transparent fees and no hidden costs'
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your success is our priority. Here's why businesses worldwide trust us for their sourcing needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-full mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Package, Shield, TrendingUp, Users } from 'lucide-react';

const stats = [
  {
    icon: Package,
    value: '5000+',
    label: 'Products Sourced',
    description: 'Successfully delivered'
  },
  {
    icon: Users,
    value: '300+',
    label: 'Global Clients',
    description: 'Across 50 countries'
  },
  {
    icon: Shield,
    value: '98%',
    label: 'Quality Pass Rate',
    description: 'Strict inspection standards'
  },
  {
    icon: TrendingUp,
    value: '$50M+',
    label: 'Transaction Volume',
    description: 'Annual sourcing value'
  }
];

export function Experience() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">Our Track Record</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted by businesses worldwide for reliable and efficient sourcing solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl hover:shadow-lg transition-shadow text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl mb-2 text-gray-900">{stat.value}</div>
              <div className="text-gray-700 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

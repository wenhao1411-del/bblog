import { Link } from 'react-router-dom';
import { Book, FileText, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const guides = [
  {
    icon: Book,
    title: 'Import Guide',
    description: 'Complete guide to importing products from China including regulations, documentation, and best practices',
    link: '/resources/import-guide',
    image: 'https://images.unsplash.com/photo-1713859326033-f75e04439c3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21zJTIwaW1wb3J0JTIwZXhwb3J0JTIwZG9jdW1lbnRzfGVufDF8fHx8MTc2OTUxODQ0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    icon: FileText,
    title: 'Sourcing Agent Guide',
    description: 'Everything you need to know about working with sourcing agents and maximizing your sourcing success',
    link: '/resources/sourcing-agent-guide',
    image: 'https://images.unsplash.com/photo-1565688527174-775059ac429c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3VyY2luZyUyMGFnZW50JTIwbWVldGluZyUyMHN1cHBsaWVyfGVufDF8fHx8MTc2OTUxODQ0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function Resources() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Resources</h1>
            <p className="text-xl text-gray-600">
              Comprehensive guides and resources to help you succeed in China sourcing
            </p>
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {guides.map((guide, index) => (
              <Link key={index} to={guide.link}>
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-green-300 hover:shadow-xl transition-all group">
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={guide.image}
                      alt={guide.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-green-600 rounded-lg mb-3">
                        <guide.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl mb-3 text-gray-900">{guide.title}</h3>
                    <p className="text-gray-600 mb-4">{guide.description}</p>
                    <div className="flex items-center gap-2 text-green-600 group-hover:text-green-700">
                      Read Guide
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

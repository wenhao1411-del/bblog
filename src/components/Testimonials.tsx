import { Star, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'TechGear Inc.',
    country: 'United States',
    image: 'https://images.unsplash.com/photo-1642337707259-0fdcc8fd06f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGJ1c2luZXNzJTIwY3VzdG9tZXIlMjB0ZXN0aW1vbmlhbHxlbnwxfHx8fDE3Njk0OTAxNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 5,
    text: 'Green Sourcing has been instrumental in helping us find reliable manufacturers in China. Their attention to detail and quality control processes saved us from potential disasters. Highly recommended!'
  },
  {
    name: 'Michael Chen',
    company: 'Home Essentials Ltd.',
    country: 'United Kingdom',
    image: 'https://images.unsplash.com/photo-1759310610775-b298f34f73aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBwYXJ0bmVyc2hpcCUyMGludGVybmF0aW9uYWwlMjBidXNpbmVzc3xlbnwxfHx8fDE3Njk1MTkwNTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 5,
    text: 'Working with Green Sourcing has transformed our supply chain. They handle everything from supplier verification to shipping logistics, allowing us to focus on growing our business.'
  },
  {
    name: 'Emma Rodriguez',
    company: 'Fashion Forward',
    country: 'Spain',
    image: 'https://images.unsplash.com/photo-1642337707259-0fdcc8fd06f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGJ1c2luZXNzJTIwY3VzdG9tZXIlMjB0ZXN0aW1vbmlhbHxlbnwxfHx8fDE3Njk0OTAxNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 5,
    text: 'The transparency and professionalism of Green Sourcing is unmatched. They provide regular updates and their quality inspections are thorough. Our product quality has never been better.'
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted by businesses worldwide for reliable sourcing solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl relative"
            >
              <Quote className="w-12 h-12 text-green-600 opacity-20 absolute top-6 right-6" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.company}</div>
                  <div className="text-sm text-gray-500">{testimonial.country}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { CheckCircle, TrendingUp, Package, DollarSign } from 'lucide-react';

const categories = ['All', 'Electronics', 'Furniture', 'Apparel', 'Toys', 'Beauty', 'Kitchenware', 'Sports', 'Automotive'];

const casesData = [
  {
    id: 1,
    title: 'Smart Home Devices for US Tech Startup',
    category: 'Electronics',
    client: 'TechHome Inc., USA',
    image: 'https://images.unsplash.com/photo-1768796372362-05c256e61d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMG1hbnVmYWN0dXJpbmclMjBwcm9kdWN0aW9ufGVufDF8fHx8MTc2OTU3NzEzNHww&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'Client needed to source high-quality smart home devices with strict safety certifications',
    solution: 'Identified 5 certified manufacturers, conducted thorough factory audits, and implemented strict QC processes',
    results: ['30% cost reduction', '100% quality pass rate', 'CE and FCC certified', 'Delivered 2 weeks ahead'],
    orderValue: '$180,000',
    timeline: '45 days'
  },
  {
    id: 2,
    title: 'Modern Furniture Collection for EU Retailer',
    category: 'Furniture',
    client: 'Nordic Living, Sweden',
    image: 'https://images.unsplash.com/photo-1767975363769-1d1d8d942b81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjBob21lJTIwZGVjb3IlMjBwcm9kdWN0c3xlbnwxfHx8fDE3Njk1NzcxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'Required FSC-certified wood and strict environmental compliance for EU market',
    solution: 'Sourced eco-friendly manufacturers with full FSC certification and arranged third-party material testing',
    results: ['FSC certified materials', '25% better pricing', 'Zero quality defects', 'Sustainable packaging'],
    orderValue: '$250,000',
    timeline: '60 days'
  },
  {
    id: 3,
    title: 'Fashion Apparel Line for UK Brand',
    category: 'Apparel',
    client: 'Urban Style Ltd., UK',
    image: 'https://images.unsplash.com/photo-1600247354058-a55b0f6fb720?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmclMjBhcHBhcmVsfGVufDF8fHx8MTc2OTQ4OTY4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'Complex designs with specific fabric requirements and tight production timeline',
    solution: 'Matched with experienced garment factory, provided daily production updates, and coordinated express shipping',
    results: ['Perfect color matching', 'On-time delivery', 'OEKO-TEX certified fabrics', '35% cost savings'],
    orderValue: '$95,000',
    timeline: '30 days'
  },
  {
    id: 4,
    title: 'Educational Toys for Australian Distributor',
    category: 'Toys',
    client: 'KidsPlay Australia',
    image: 'https://images.unsplash.com/photo-1765947388741-13b38cbb4fa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3lzJTIwY2hpbGRyZW4lMjBwcm9kdWN0c3xlbnwxfHx8fDE3Njk1NzcxMzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'Strict safety standards for children products and EN71 compliance required',
    solution: 'Verified supplier credentials, arranged comprehensive safety testing, and supervised production',
    results: ['EN71 & ASTM certified', 'Zero product recalls', '20% cost reduction', '98% quality score'],
    orderValue: '$120,000',
    timeline: '50 days'
  },
  {
    id: 5,
    title: 'Premium Cosmetics for US Beauty Brand',
    category: 'Beauty',
    client: 'Glow Naturals, USA',
    image: 'https://images.unsplash.com/photo-1624574966266-1cdd65b74500?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBjb3NtZXRpY3MlMjBwcm9kdWN0c3xlbnwxfHx8fDE3Njk0ODU3Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'FDA compliance and cruelty-free certification requirements for US market',
    solution: 'Found certified manufacturers with GMP facilities, arranged formula verification and stability testing',
    results: ['FDA compliant', 'Cruelty-free certified', 'Premium packaging', '40% cost savings'],
    orderValue: '$150,000',
    timeline: '55 days'
  },
  {
    id: 6,
    title: 'Professional Kitchenware for German Restaurant Supply',
    category: 'Kitchenware',
    client: 'ProChef Supply, Germany',
    image: 'https://images.unsplash.com/photo-1628736787397-bc033be0fe53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwdXRlbnNpbHMlMjBjb29rd2FyZXxlbnwxfHx8fDE3Njk1NzcxMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'Food-grade stainless steel requirements and LFGB certification for EU market',
    solution: 'Sourced from ISO certified factory, conducted material composition testing, and quality inspections',
    results: ['LFGB certified', 'Food-grade materials', '28% cost reduction', 'Perfect finish quality'],
    orderValue: '$200,000',
    timeline: '40 days'
  },
  {
    id: 7,
    title: 'Wireless Headphones for Canadian Brand',
    category: 'Electronics',
    client: 'SoundWave Tech, Canada',
    image: 'https://images.unsplash.com/photo-1768796372362-05c256e61d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMG1hbnVmYWN0dXJpbmclMjBwcm9kdWN0aW9ufGVufDF8fHx8MTc2OTU3NzEzNHww&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'High audio quality standards with Bluetooth 5.0 and FCC certification',
    solution: 'Selected experienced audio manufacturer, arranged acoustic testing, and managed certification process',
    results: ['FCC & CE certified', 'Superior sound quality', 'On-time delivery', '32% cost savings'],
    orderValue: '$280,000',
    timeline: '48 days'
  },
  {
    id: 8,
    title: 'Office Furniture for UK Corporate Client',
    category: 'Furniture',
    client: 'Corporate Spaces, UK',
    image: 'https://images.unsplash.com/photo-1767975363769-1d1d8d942b81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjBob21lJTIwZGVjb3IlMjBwcm9kdWN0c3xlbnwxfHx8fDE3Njk1NzcxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'Large order quantity with specific ergonomic requirements',
    solution: 'Negotiated bulk pricing, arranged prototype development, and supervised mass production',
    results: ['Ergonomic certified', '35% bulk discount', 'Consistent quality', 'Container optimization'],
    orderValue: '$320,000',
    timeline: '65 days'
  },
  {
    id: 9,
    title: 'Activewear Collection for US Fitness Brand',
    category: 'Apparel',
    client: 'FitLife Athletics, USA',
    image: 'https://images.unsplash.com/photo-1600247354058-a55b0f6fb720?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmclMjBhcHBhcmVsfGVufDF8fHx8MTc2OTQ4OTY4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'Moisture-wicking fabrics with specific stretch and durability requirements',
    solution: 'Found specialized sportswear manufacturer, arranged fabric testing, and quality control',
    results: ['Technical fabric specs met', 'Color consistency', '28% cost reduction', 'Fast turnaround'],
    orderValue: '$140,000',
    timeline: '35 days'
  },
  {
    id: 10,
    title: 'STEM Educational Toys for European Schools',
    category: 'Toys',
    client: 'EduPlay Europe',
    image: 'https://images.unsplash.com/photo-1765947388741-13b38cbb4fa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3lzJTIwY2hpbGRyZW4lMjBwcm9kdWN0c3xlbnwxfHx8fDE3Njk1NzcxMzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'Educational accuracy with EN71 safety standards and multi-language instructions',
    solution: 'Partnered with experienced toy manufacturer, arranged safety testing, and managed packaging',
    results: ['EN71 certified', 'Educational approved', '22% savings', 'Multi-language support'],
    orderValue: '$165,000',
    timeline: '52 days'
  },
  {
    id: 11,
    title: 'Natural Skincare Line for Australian Brand',
    category: 'Beauty',
    client: 'Pure Earth Cosmetics, Australia',
    image: 'https://images.unsplash.com/photo-1624574966266-1cdd65b74500?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBjb3NtZXRpY3MlMjBwcm9kdWN0c3xlbnwxfHx8fDE3Njk0ODU3Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'Organic ingredients with TGA compliance for Australian market',
    solution: 'Sourced from certified organic facility, arranged ingredient verification and compliance testing',
    results: ['TGA compliant', 'Organic certified', 'Premium quality', '38% cost savings'],
    orderValue: '$88,000',
    timeline: '45 days'
  },
  {
    id: 12,
    title: 'Stainless Steel Cookware for French Retailer',
    category: 'Kitchenware',
    client: 'Maison Cuisine, France',
    image: 'https://images.unsplash.com/photo-1628736787397-bc033be0fe53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwdXRlbnNpbHMlMjBjb29rd2FyZXxlbnwxfHx8fDE3Njk1NzcxMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'High-end quality with specific heat distribution requirements',
    solution: 'Selected premium manufacturer, arranged performance testing, and supervised production',
    results: ['Premium grade 304 SS', 'Perfect heat distribution', '25% cost reduction', 'Mirror finish'],
    orderValue: '$195,000',
    timeline: '42 days'
  },
  {
    id: 13,
    title: 'LED Lighting Solutions for Middle East Project',
    category: 'Electronics',
    client: 'Bright Solutions, UAE',
    image: 'https://images.unsplash.com/photo-1768796372362-05c256e61d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMG1hbnVmYWN0dXJpbmclMjBwcm9kdWN0aW9ufGVufDF8fHx8MTc2OTU3NzEzNHww&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'Large commercial project requiring SASO certification and high lumens efficiency',
    solution: 'Found certified LED manufacturer, arranged photometric testing, and expedited certification',
    results: ['SASO certified', 'High efficiency LEDs', 'On-time completion', '30% cost reduction'],
    orderValue: '$420,000',
    timeline: '58 days'
  },
  {
    id: 14,
    title: 'Outdoor Furniture for US Hospitality Chain',
    category: 'Furniture',
    client: 'Resort Living USA',
    image: 'https://images.unsplash.com/photo-1767975363769-1d1d8d942b81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjBob21lJTIwZGVjb3IlMjBwcm9kdWN0c3xlbnwxfHx8fDE3Njk1NzcxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'Weather-resistant materials with UV protection for outdoor use',
    solution: 'Sourced weather-resistant manufacturer, arranged material testing, and quality inspections',
    results: ['UV resistant coating', 'Weather tested', '32% savings', 'Durable construction'],
    orderValue: '$380,000',
    timeline: '70 days'
  },
  {
    id: 15,
    title: 'Denim Jeans Collection for European Brand',
    category: 'Apparel',
    client: 'Urban Denim, Netherlands',
    image: 'https://images.unsplash.com/photo-1600247354058-a55b0f6fb720?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmclMjBhcHBhcmVsfGVufDF8fHx8MTc2OTQ4OTY4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'Specific wash effects and size consistency across large order',
    solution: 'Partnered with experienced denim factory, arranged wash trials, and strict QC',
    results: ['Consistent wash quality', 'Size accuracy 99%', '27% cost reduction', 'Eco-friendly dyes'],
    orderValue: '$210,000',
    timeline: '38 days'
  },
  {
    id: 16,
    title: 'Remote Control Cars for UK Toy Distributor',
    category: 'Toys',
    client: 'ToyWorld UK',
    image: 'https://images.unsplash.com/photo-1765947388741-13b38cbb4fa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3lzJTIwY2hpbGRyZW4lMjBwcm9kdWN0c3xlbnwxfHx8fDE3Njk1NzcxMzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'Electronic toys requiring CE certification and battery safety compliance',
    solution: 'Verified supplier safety standards, arranged battery testing, and full product certification',
    results: ['CE certified', 'Battery safety approved', '24% cost savings', 'Zero defects'],
    orderValue: '$135,000',
    timeline: '46 days'
  },
  {
    id: 17,
    title: 'Luxury Makeup Brushes for US Brand',
    category: 'Beauty',
    client: 'Elite Beauty Tools, USA',
    image: 'https://images.unsplash.com/photo-1624574966266-1cdd65b74500?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBjb3NtZXRpY3MlMjBwcm9kdWN0c3xlbnwxfHx8fDE3Njk0ODU3Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'Premium synthetic bristles with specific softness and durability requirements',
    solution: 'Found specialized manufacturer, arranged bristle testing, and quality verification',
    results: ['Premium quality bristles', 'Consistent softness', '35% cost reduction', 'Luxury packaging'],
    orderValue: '$72,000',
    timeline: '40 days'
  },
  {
    id: 18,
    title: 'Restaurant Equipment for Canadian Chain',
    category: 'Kitchenware',
    client: 'Quick Serve Canada',
    image: 'https://images.unsplash.com/photo-1628736787397-bc033be0fe53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwdXRlbnNpbHMlMjBjb29rd2FyZXxlbnwxfHx8fDE3Njk1NzcxMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'Commercial-grade equipment with NSF certification for food service',
    solution: 'Sourced from NSF certified facility, arranged performance testing, and installation support',
    results: ['NSF certified', 'Commercial grade', '29% cost savings', 'Technical support included'],
    orderValue: '$310,000',
    timeline: '62 days'
  },
  {
    id: 19,
    title: 'Smart Watches for Singapore Retailer',
    category: 'Electronics',
    client: 'Tech Gadgets SG',
    image: 'https://images.unsplash.com/photo-1768796372362-05c256e61d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMG1hbnVmYWN0dXJpbmclMjBwcm9kdWN0aW9ufGVufDF8fHx8MTc2OTU3NzEzNHww&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'Multi-function smart watch with health tracking and long battery life',
    solution: 'Selected experienced wearable manufacturer, arranged app integration, and quality testing',
    results: ['Full functionality', 'CE & FCC certified', '31% cost reduction', 'Custom app integration'],
    orderValue: '$245,000',
    timeline: '55 days'
  },
  {
    id: 20,
    title: 'Children Bedroom Furniture for Australian Retailer',
    category: 'Furniture',
    client: 'Kids Room Australia',
    image: 'https://images.unsplash.com/photo-1767975363769-1d1d8d942b81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjBob21lJTIwZGVjb3IlMjBwcm9kdWN0c3xlbnwxfHx8fDE3Njk1NzcxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'Child-safe furniture with non-toxic finishes and Australian standards compliance',
    solution: 'Verified safety standards, arranged toxicity testing, and quality inspections',
    results: ['AS/NZS certified', 'Non-toxic finishes', '26% cost savings', 'Safety tested'],
    orderValue: '$175,000',
    timeline: '50 days'
  },
  {
    id: 21,
    title: 'Winter Sports Apparel for Swiss Retailer',
    category: 'Apparel',
    client: 'Alpine Sports, Switzerland',
    image: 'https://images.unsplash.com/photo-1600247354058-a55b0f6fb720?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmclMjBhcHBhcmVsfGVufDF8fHx8MTc2OTQ4OTY4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'Technical fabrics with specific insulation and waterproof requirements',
    solution: 'Found specialized outdoor apparel manufacturer, arranged technical testing, and QC',
    results: ['Waterproof tested', 'Thermal insulation verified', '33% cost reduction', 'Performance guaranteed'],
    orderValue: '$290,000',
    timeline: '44 days'
  },
  {
    id: 22,
    title: 'Building Blocks Set for US Educational Supplier',
    category: 'Toys',
    client: 'Learning Tools USA',
    image: 'https://images.unsplash.com/photo-1765947388741-13b38cbb4fa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3lzJTIwY2hpbGRyZW4lMjBwcm9kdWN0c3xlbnwxfHx8fDE3Njk1NzcxMzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'Educational toy requiring ASTM certification and specific size accuracy',
    solution: 'Partnered with certified manufacturer, arranged dimension checking, and safety testing',
    results: ['ASTM certified', 'Size tolerance <0.1mm', '21% cost savings', 'Educational approved'],
    orderValue: '$105,000',
    timeline: '43 days'
  },
  {
    id: 23,
    title: 'Organic Hair Care Products for UK Brand',
    category: 'Beauty',
    client: 'Natural Hair Co., UK',
    image: 'https://images.unsplash.com/photo-1624574966266-1cdd65b74500?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBjb3NtZXRpY3MlMjBwcm9kdWN0c3xlbnwxfHx8fDE3Njk0ODU3Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'Organic certification with specific pH requirements and UK compliance',
    solution: 'Sourced from organic certified facility, arranged formula testing, and compliance verification',
    results: ['Organic certified', 'pH balanced', '36% cost reduction', 'UK compliant'],
    orderValue: '$92,000',
    timeline: '47 days'
  },
  {
    id: 24,
    title: 'Bakeware Collection for German Brand',
    category: 'Kitchenware',
    client: 'BakeMaster Germany',
    image: 'https://images.unsplash.com/photo-1628736787397-bc033be0fe53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwdXRlbnNpbHMlMjBjb29rd2FyZXxlbnwxfHx8fDE3Njk1NzcxMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'Non-stick coating with LFGB and PFOA-free requirements',
    solution: 'Selected certified manufacturer, arranged coating testing, and quality verification',
    results: ['LFGB certified', 'PFOA-free coating', '27% cost savings', 'Premium non-stick'],
    orderValue: '$158,000',
    timeline: '41 days'
  },
  {
    id: 25,
    title: 'Security Cameras for US Security Company',
    category: 'Electronics',
    client: 'SecureView Systems, USA',
    image: 'https://images.unsplash.com/photo-1768796372362-05c256e61d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMG1hbnVmYWN0dXJpbmclMjBwcm9kdWN0aW9ufGVufDF8fHx8MTc2OTU3NzEzNHww&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'High-resolution cameras with night vision and FCC certification',
    solution: 'Found specialized security equipment manufacturer, arranged performance testing, and certification',
    results: ['FCC & CE certified', '4K resolution', '28% cost reduction', 'Night vision tested'],
    orderValue: '$365,000',
    timeline: '53 days'
  },
  {
    id: 26,
    title: 'Modular Shelving Systems for Scandinavian Retailer',
    category: 'Furniture',
    client: 'Space Solutions, Norway',
    image: 'https://images.unsplash.com/photo-1767975363769-1d1d8d942b81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjBob21lJTIwZGVjb3IlMjBwcm9kdWN0c3xlbnwxfHx8fDE3Njk1NzcxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'Modular system requiring precise dimensions and easy assembly design',
    solution: 'Developed custom solution, arranged prototyping, and assembly instructions',
    results: ['Precision manufacturing', 'Easy assembly', '31% cost savings', 'Modular flexibility'],
    orderValue: '$225,000',
    timeline: '57 days'
  },
  {
    id: 27,
    title: 'Yoga Wear Collection for Asian Market',
    category: 'Apparel',
    client: 'Zen Fitness, Japan',
    image: 'https://images.unsplash.com/photo-1600247354058-a55b0f6fb720?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmclMjBhcHBhcmVsfGVufDF8fHx8MTc2OTQ4OTY4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'Four-way stretch fabric with moisture management for yoga practice',
    solution: 'Sourced specialized activewear fabric, arranged stretch testing, and QC',
    results: ['4-way stretch verified', 'Moisture-wicking', '29% cost reduction', 'Color fastness tested'],
    orderValue: '$118,000',
    timeline: '36 days'
  },
  {
    id: 28,
    title: 'Electronic Learning Tablets for Middle East Schools',
    category: 'Toys',
    client: 'EduTech Middle East',
    image: 'https://images.unsplash.com/photo-1765947388741-13b38cbb4fa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3lzJTIwY2hpbGRyZW4lMjBwcm9kdWN0c3xlbnwxfHx8fDE3Njk1NzcxMzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'Educational content in Arabic with SASO certification and durability for school use',
    solution: 'Customized software, arranged drop testing, and certification process',
    results: ['SASO certified', 'Arabic localization', '25% cost savings', 'Rugged design'],
    orderValue: '$275,000',
    timeline: '60 days'
  },
  {
    id: 29,
    title: 'Anti-Aging Serum Line for French Pharmacy Chain',
    category: 'Beauty',
    client: 'Pharmacie Belle, France',
    image: 'https://images.unsplash.com/photo-1624574966266-1cdd65b74500?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBjb3NtZXRpY3MlMjBwcm9kdWN0c3xlbnwxfHx8fDE3Njk0ODU3Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'Pharmaceutical-grade cosmetics with EU cosmetics regulation compliance',
    solution: 'Partnered with GMP certified facility, arranged stability testing, and regulatory compliance',
    results: ['EU compliant', 'Stability tested', '34% cost reduction', 'Pharmaceutical grade'],
    orderValue: '$185,000',
    timeline: '58 days'
  },
  {
    id: 30,
    title: 'Professional Chef Knives for US Culinary Supply',
    category: 'Kitchenware',
    client: 'Chef\'s Choice USA',
    image: 'https://images.unsplash.com/photo-1628736787397-bc033be0fe53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwdXRlbnNpbHMlMjBjb29rd2FyZXxlbnwxfHx8fDE3Njk1NzcxMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    challenge: 'High-carbon stainless steel with specific hardness and edge retention',
    solution: 'Found specialized knife manufacturer, arranged hardness testing, and sharpness verification',
    results: ['HRC 58-60 hardness', 'Superior edge retention', '30% cost savings', 'Professional quality'],
    orderValue: '$142,000',
    timeline: '45 days'
  }
];

export function Cases() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredCases = selectedCategory === 'All' 
    ? casesData 
    : casesData.filter(c => c.category === selectedCategory);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Success Stories</h1>
            <p className="text-xl text-gray-600">
              Discover how we've helped businesses worldwide achieve their sourcing goals with quality products, cost savings, and on-time delivery
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  selectedCategory === category
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((caseItem) => (
              <div
                key={caseItem.id}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={caseItem.image}
                    alt={caseItem.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                      {caseItem.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl mb-2 text-gray-900">{caseItem.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{caseItem.client}</p>

                  <div className="mb-4">
                    <h4 className="text-sm text-gray-700 mb-1">Challenge:</h4>
                    <p className="text-sm text-gray-600">{caseItem.challenge}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm text-gray-700 mb-1">Solution:</h4>
                    <p className="text-sm text-gray-600">{caseItem.solution}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm text-gray-700 mb-2">Results:</h4>
                    <div className="space-y-1">
                      {caseItem.results.map((result, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200 grid grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center gap-1 text-gray-500 text-xs mb-1">
                        <DollarSign className="w-3 h-3" />
                        <span>Order Value</span>
                      </div>
                      <div className="text-gray-900">{caseItem.orderValue}</div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1 text-gray-500 text-xs mb-1">
                        <TrendingUp className="w-3 h-3" />
                        <span>Timeline</span>
                      </div>
                      <div className="text-gray-900">{caseItem.timeline}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-white">Ready to Create Your Success Story?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar results for your business
          </p>
          <a href="/contact">
            <button className="bg-white hover:bg-gray-100 text-green-600 px-8 py-3 rounded-lg transition-colors shadow-lg text-lg">
              Start Your Project
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}

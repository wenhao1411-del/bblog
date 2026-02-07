import { Hero } from '../components/Hero';
import { Experience } from '../components/Experience';
import { Testimonials } from '../components/Testimonials';
import { WhyChooseUs } from '../components/WhyChooseUs';

export function Home() {
  return (
    <div>
      <Hero />
      <Experience />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
}
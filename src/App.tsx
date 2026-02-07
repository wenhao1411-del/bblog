import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Cases } from './pages/Cases';
import { Resources } from './pages/Resources';
import { ImportGuide } from './pages/ImportGuide';
import { SourcingAgentGuide } from './pages/SourcingAgentGuide';
import { BlogList } from './pages/BlogList';
import { BlogPost } from './pages/BlogPost';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/import-guide" element={<ImportGuide />} />
            <Route path="/resources/sourcing-agent-guide" element={<SourcingAgentGuide />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-xl mb-4">Green Sourcing</h3>
                <p className="text-gray-400">
                  Your trusted partner for China sourcing solutions with over 10 years of experience.
                </p>
              </div>
              <div>
                <h4 className="text-lg mb-4">Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/services" className="hover:text-white transition-colors">Product Sourcing</Link></li>
                  <li><Link to="/services" className="hover:text-white transition-colors">Quality Control</Link></li>
                  <li><Link to="/services" className="hover:text-white transition-colors">Supplier Verification</Link></li>
                  <li><Link to="/services" className="hover:text-white transition-colors">Logistics</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg mb-4">Resources</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/resources/import-guide" className="hover:text-white transition-colors">Import Guide</Link></li>
                  <li><Link to="/resources/sourcing-agent-guide" className="hover:text-white transition-colors">Sourcing Agent Guide</Link></li>
                  <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                  <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg mb-4">Contact</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Shenzhen, China</li>
                  <li>+86 156 2063 3734</li>
                  <li>wenhao1411@gmail.com</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center">
              <p className="text-gray-400">© 2026 Green Sourcing. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
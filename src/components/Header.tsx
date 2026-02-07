import { Home, Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourceOpen, setIsResourceOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl text-gray-900">Green Sourcing</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className={`transition-colors ${isActive('/') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}>
              Home
            </Link>
            <Link to="/services" className={`transition-colors ${isActive('/services') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}>
              Service
            </Link>
            <Link to="/cases" className={`transition-colors ${isActive('/cases') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}>
              Cases
            </Link>
            <div className="relative">
              <button 
                onClick={() => setIsResourceOpen(!isResourceOpen)}
                className="text-gray-700 hover:text-green-600 transition-colors flex items-center gap-1"
              >
                Resource
                <ChevronDown className="w-4 h-4" />
              </button>
              {isResourceOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 border border-gray-200">
                  <Link 
                    to="/resources/import-guide" 
                    className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                    onClick={() => setIsResourceOpen(false)}
                  >
                    Import Guide
                  </Link>
                  <Link 
                    to="/resources/sourcing-agent-guide" 
                    className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                    onClick={() => setIsResourceOpen(false)}
                  >
                    Sourcing Agent Guide
                  </Link>
                </div>
              )}
            </div>
            <Link to="/blog" className={`transition-colors ${isActive('/blog') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}>
              Blog
            </Link>
            <Link to="/contact" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors">
              Contact
            </Link>
          </nav>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <Link to="/" className={`transition-colors ${isActive('/') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}>
                Home
              </Link>
              <Link to="/services" className={`transition-colors ${isActive('/services') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}>
                Service
              </Link>
              <Link to="/cases" className={`transition-colors ${isActive('/cases') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}>
                Cases
              </Link>
              <div>
                <button 
                  onClick={() => setIsResourceOpen(!isResourceOpen)}
                  className="text-gray-700 hover:text-green-600 transition-colors flex items-center gap-1 w-full"
                >
                  Resource
                  <ChevronDown className="w-4 h-4" />
                </button>
                {isResourceOpen && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    <Link 
                      to="/resources/import-guide" 
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                      onClick={() => setIsResourceOpen(false)}
                    >
                      Import Guide
                    </Link>
                    <Link 
                      to="/resources/sourcing-agent-guide" 
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                      onClick={() => setIsResourceOpen(false)}
                    >
                      Sourcing Agent Guide
                    </Link>
                  </div>
                )}
              </div>
              <Link to="/blog" className={`transition-colors ${isActive('/blog') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}>
                Blog
              </Link>
              <Link to="/contact" className="block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors text-center">
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
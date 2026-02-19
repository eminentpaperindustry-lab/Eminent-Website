import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Facebook, 
  Linkedin, 
  Youtube, 
  Instagram, 
  Menu, 
  X, 
  ChevronDown,
  Phone,
  Mail
} from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const logoUrl = "https://res.cloudinary.com/ddk4lshru/image/upload/WhatsApp_Image_2025-10-02_at_2.35.56_PM__1_-removebg-preview_7_rtmewu.png";

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { 
      name: 'Offering', 
      path: '#', 
      dropdown: [
        { name: 'Product', path: '/offering/products' },
        { name: 'Certification', path: '/offering/certifications' },
        { name: 'Data Sheets', path: '/offering/data-sheets' },
      ]
    },
    { name: 'Career', path: '/career' },
    { name: 'Media & Events', path: '/media' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full shadow-lg">
      {/* Top Bar - Swapped to Golden White as requested */}
      <div className="bg-[#FCF9F0] text-[#1B4332] px-4 md:px-8 py-2.5 flex justify-between items-center text-[9px] md:text-[10px] font-black tracking-widest uppercase border-b border-gray-200">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-kraft transition-colors"><Youtube size={13} /></a>
            <a href="#" className="hover:text-kraft transition-colors"><Linkedin size={13} /></a>
            <a href="#" className="hover:text-kraft transition-colors"><Instagram size={13} /></a>
            <a href="#" className="hover:text-kraft transition-colors"><Facebook size={13} /></a>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-10">
          <div className="flex items-center space-x-2">
            <Phone size={12} className="text-kraft" />
            <span className="opacity-90 font-bold">+91 93274 36834</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail size={12} className="text-kraft" />
            <span className="opacity-90 font-bold uppercase">crm@epil.biz</span>
          </div>
        </div>
      </div>

      {/* Main Navigation - Swapped to Dark Green as requested */}
      <nav className="bg-[#1B4332] border-b border-eco-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center h-20 md:h-24">
            {/* Logo - White version for dark background */}
            
            <Link to="/" className="flex-shrink-0 py-2">
              <img src={logoUrl} alt="Eminent Logo" className="h-36 md:h-40 w-auto object-contain brightness-0 invert" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  {link.dropdown ? (
                    <button 
                      className="flex items-center space-x-1 text-white hover:text-golden-accent font-black uppercase tracking-[0.1em] text-xs py-2 transition-all duration-300"
                      onMouseEnter={() => setDropdownOpen(true)}
                    >
                      <span>{link.name}</span>
                      <ChevronDown size={14} className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <Link 
                      to={link.path} 
                      className={`text-white hover:text-golden-accent font-black uppercase tracking-[0.1em] text-xs py-2 transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-kraft after:transition-all hover:after:w-full ${location.pathname === link.path ? 'text-golden-accent after:w-full' : ''}`}
                    >
                      {link.name}
                    </Link>
                  )}

                  {link.dropdown && (
                    <div className="absolute left-0 mt-0 w-64 bg-[#1B4332] shadow-2xl rounded-b-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-t-4 border-[#937047] overflow-hidden translate-y-2 group-hover:translate-y-0">
                      <div className="py-2">
                        {link.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className="block px-8 py-4 text-[10px] font-black uppercase tracking-widest text-white/70 hover:bg-white/5 hover:text-golden-accent transition-all border-b border-white/5 last:border-0"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <Link to="/contact" className="bg-[#937047] hover:bg-white hover:text-[#1B4332] text-white px-8 py-3.5 rounded-full font-black text-[10px] uppercase tracking-[0.2em] transition-all transform hover:scale-105 shadow-xl">
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none p-2 bg-eco-dark rounded-xl">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="lg:hidden bg-[#1B4332] border-t border-white/5 py-8 px-6 space-y-6 shadow-inner animate-fade-in-up">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.dropdown ? (
                  <div className="space-y-4">
                    <p className="font-black text-[#937047] uppercase text-xs tracking-[0.2em]">{link.name}</p>
                    {link.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        onClick={() => setIsOpen(false)}
                        className="block py-1 text-white/60 hover:text-white font-bold ml-4 uppercase text-[10px] tracking-widest"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-white/90 font-black uppercase text-xs tracking-widest hover:text-golden-accent"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
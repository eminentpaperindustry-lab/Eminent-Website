
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Youtube, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-eco-dark text-golden-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* About Section */}
        <div className="space-y-6">
          <img 
            src="https://res.cloudinary.com/ddk4lshru/image/upload/WhatsApp_Image_2025-10-02_at_2.35.56_PM__1_-removebg-preview_7_rtmewu.png" 
            alt="Eminent Paper Logo" 
            className="h-20 w-auto bg-white/10 p-2 rounded-lg"
          />
          <p className="text-gray-300 text-sm leading-relaxed">
            Eminent Paper Industries LLP is committed to krafting a sustainable legacy through advanced manufacturing and eco-friendly practices.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-kraft transition-colors"><Facebook size={18} /></a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-kraft transition-colors"><Linkedin size={18} /></a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-kraft transition-colors"><Instagram size={18} /></a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-kraft transition-colors"><Youtube size={18} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold border-l-4 border-kraft pl-3">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-kraft transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-kraft transition-colors">About Us</Link></li>
            <li><Link to="/offering/products" className="hover:text-kraft transition-colors">Products</Link></li>
            <li><Link to="/media" className="hover:text-kraft transition-colors">Media & Events</Link></li>
            <li><Link to="/career" className="hover:text-kraft transition-colors">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-kraft transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services/Offerings */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold border-l-4 border-kraft pl-3">Offerings</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/offering/products" className="hover:text-kraft transition-colors">Fluting/Test Liner Paper</Link></li>
            <li><Link to="/offering/certifications" className="hover:text-kraft transition-colors">Certifications</Link></li>
            <li><Link to="/offering/data-sheets" className="hover:text-kraft transition-colors">Technical Data Sheets</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold border-l-4 border-kraft pl-3">Contact Details</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="text-kraft mt-1 shrink-0" />
              <span>Block No. 449, Near Sava Chokdi, Behind Shital Hotel, Kosamba – Moti Pardi Road, Surat – 394405, Gujarat</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-kraft shrink-0" />
              <span>+91 93274 36834</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-kraft shrink-0" />
              <span>crm@epil.biz</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-16 pt-8 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 space-y-4 md:space-y-0">
          <p>All Rights Reserved © 2024 Eminent Paper Industries LLP</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-golden-white transition-colors">Terms and Conditions</a>
            <a href="#" className="hover:text-golden-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

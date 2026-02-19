
import React, { useState } from 'react';
import { X, Download } from 'lucide-react';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      onSuccess();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full relative overflow-hidden">
        <div className="bg-eco p-6 text-white text-center">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-1 hover:bg-white/20 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
          <Download className="mx-auto mb-3" size={40} />
          <h3 className="text-2xl font-bold">Download e-Brochure</h3>
          <p className="text-eco-light text-sm mt-1">Get detailed insights into our offerings</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input 
              required
              type="text" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco focus:border-transparent" 
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input 
              required
              type="email" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco focus:border-transparent" 
              placeholder="john@company.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
            <input 
              required
              type="text" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco focus:border-transparent" 
              placeholder="Your Business Name"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input 
              required
              type="tel" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eco focus:border-transparent" 
              placeholder="+91 XXXXX XXXXX"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>

          <button 
            disabled={loading}
            type="submit" 
            className="w-full bg-kraft hover:bg-kraft-dark text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center space-x-2 mt-6"
          >
            {loading ? (
              <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              <>
                <Download size={20} />
                <span>Submit & Download</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LeadCaptureModal;

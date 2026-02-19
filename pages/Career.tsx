
import React from 'react';
import { Send, Upload, Heart, Zap, Shield, Users } from 'lucide-react';

const Career: React.FC = () => {
  const benefits = [
    { title: "Growth Mindset", icon: <Zap />, desc: "Continuous learning and skill development programs." },
    { title: "Sustainable Future", icon: <Heart />, desc: "Work on projects that matter for the planet." },
    { title: "Inclusive Culture", icon: <Users />, desc: "A diverse team that values every voice." },
    { title: "Safe Environment", icon: <Shield />, desc: "Top-tier industrial safety standards for everyone." },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-eco-dark/70 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" 
          alt="Careers" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-4 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Join the Eminent Team</h1>
          <p className="text-eco-light text-xl max-w-2xl mx-auto italic font-light">Build a sustainable future with us. Your career at the intersection of innovation and nature.</p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-gray-900">Why Work With Us?</h2>
            <div className="h-1 w-20 bg-kraft mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <div key={i} className="p-8 bg-golden-white rounded-3xl text-center space-y-4 border border-gray-100 hover:shadow-lg transition-all">
                <div className="w-16 h-16 mx-auto bg-white text-eco rounded-2xl flex items-center justify-center shadow-md">
                  {/* Fix: Cast to React.ReactElement<any> to allow 'size' prop during cloning */}
                  {React.cloneElement(b.icon as React.ReactElement<any>, { size: 32 })}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Positions */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Current Openings</h2>
              <p className="text-gray-600">While we are currently at full capacity, we are always on the lookout for exceptional talent. Submit your details below to be considered for future roles.</p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl border border-gray-100 flex justify-between items-center opacity-50 grayscale">
                <div>
                  <h4 className="font-bold text-gray-900">QC Analyst</h4>
                  <p className="text-sm text-gray-500">Kosamba, Surat | Full-time</p>
                </div>
                <span className="px-4 py-2 bg-gray-100 rounded-full text-xs font-bold uppercase text-gray-400">Filled</span>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 flex justify-between items-center opacity-50 grayscale">
                <div>
                  <h4 className="font-bold text-gray-900">Plant Supervisor</h4>
                  <p className="text-sm text-gray-500">Kosamba, Surat | Full-time</p>
                </div>
                <span className="px-4 py-2 bg-gray-100 rounded-full text-xs font-bold uppercase text-gray-400">Filled</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-eco/5 rounded-full -mr-16 -mt-16"></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Career Inquiry Form</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-widest text-[10px]">Full Name</label>
                  <input type="text" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-eco outline-none" placeholder="John Smith" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-widest text-[10px]">Email Address</label>
                  <input type="email" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-eco outline-none" placeholder="john@email.com" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-widest text-[10px]">Phone Number</label>
                  <input type="tel" className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-eco outline-none" placeholder="+91 XXX" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-widest text-[10px]">Position</label>
                  <select className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-eco outline-none bg-white">
                    <option>Select a field...</option>
                    <option>Production</option>
                    <option>Quality Control</option>
                    <option>Sales & Marketing</option>
                    <option>Operations/Logistics</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-widest text-[10px]">Resume/CV</label>
                <div className="border-2 border-dashed border-gray-200 p-8 rounded-xl text-center group hover:border-eco transition-colors cursor-pointer">
                  <Upload className="mx-auto mb-2 text-gray-400 group-hover:text-eco" size={32} />
                  <p className="text-sm text-gray-500 group-hover:text-eco">Click or drag to upload your CV (PDF/DOC)</p>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-widest text-[10px]">Cover Message</label>
                <textarea rows={4} className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-eco outline-none" placeholder="Tell us why you want to join Eminent..."></textarea>
              </div>
              <button className="w-full bg-eco py-4 rounded-xl text-white font-bold text-lg hover:bg-eco-dark transition-colors flex items-center justify-center space-x-2">
                <Send size={20} />
                <span>Submit Application</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;

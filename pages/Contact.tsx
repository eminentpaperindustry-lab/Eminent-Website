
import React from 'react';
import { Mail, Phone, MapPin, Send, Globe, Printer, ShoppingCart, Users, MessageSquare, Smile } from 'lucide-react';

const Contact: React.FC = () => {
  const departments = [
    { 
      title: "Registered Office", 
      icon: <MapPin />, 
      color: "bg-[#2482B7]",
      details: [
        { label: "Regd. Office Address", text: "Block No. 449, Near Sava Chokdi, Behind Shital Hotel, Kosamba – Moti Pardi Road, Surat – 394405, Gujarat" },
        { label: "Email Address", text: "crm@epil.biz", icon: <Mail size={12} /> },
        { label: "Telephone", text: "93274 36834", icon: <Phone size={12} /> },
        { label: "Fax No.", text: "+91-72-23298642", icon: <Printer size={12} /> },
      ]
    },
    { 
      title: "For Sales Enquiries", 
      icon: <ShoppingCart />, 
      color: "bg-[#2482B7]",
      details: [
        { label: "Contact Person", text: "Chandani ma'am" },
        { label: "Email Address", text: "sales@epil.biz", icon: <Mail size={12} /> },
        { label: "Telephone", text: "93274 36834", icon: <Phone size={12} /> },
        { label: "Fax No.", text: "+91-72-23298642", icon: <Printer size={12} /> },
      ]
    },
    { 
      title: "For Export & Import Enquiries", 
      icon: <Globe />, 
      color: "bg-[#2482B7]",
      details: [
        { label: "Contact Person", text: "International Desk" },
        { label: "Email Address", text: "export@epil.biz", icon: <Mail size={12} /> },
        { label: "Telephone", text: "93274 36834", icon: <Phone size={12} /> },
        { label: "Fax No.", text: "+91-72-23298642", icon: <Printer size={12} /> },
      ]
    },
    { 
      title: "Customer Relationship Management (CRM) Team", 
      icon: <Smile size={24} />, 
      color: "bg-[#2482B7]",
      details: [
        { label: "Contact Person", text: "CRM Helpdesk" },
        { label: "Email Address", text: "crm@epil.biz", icon: <Mail size={12} /> },
        { label: "Telephone", text: "93274 36834", icon: <Phone size={12} /> },
        { label: "Fax No.", text: "+91-72-23298642", icon: <Printer size={12} /> },
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Contact Form Header Section */}
      <section className="relative min-h-[70vh] bg-eco-dark pt-20 flex flex-col items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')] bg-cover opacity-10" />
        
        <div className="max-w-4xl mx-auto px-4 z-10 text-center mb-16">
           <h2 className="text-white text-4xl md:text-6xl font-black heading-serif leading-tight uppercase">
             We're Here To Help & <span className="text-golden-accent italic underline decoration-kraft">Get In Touch</span> With Our Team.
           </h2>
        </div>

        <div className="max-w-3xl w-full mx-auto px-4 z-10 -mb-40">
           <div className="bg-golden-white p-10 md:p-12 rounded-[3rem] shadow-2xl border-4 border-white/20">
             <h3 className="text-2xl font-black text-center text-eco-dark mb-10 heading-serif tracking-widest uppercase">Contact Us</h3>
             <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="First Name" className="w-full bg-white px-6 py-4 rounded-2xl border border-gray-100 shadow-sm outline-none focus:ring-4 focus:ring-eco/10 transition-all" />
                <input type="text" placeholder="Last Name" className="w-full bg-white px-6 py-4 rounded-2xl border border-gray-100 shadow-sm outline-none focus:ring-4 focus:ring-eco/10 transition-all" />
                <input type="email" placeholder="Email" className="w-full bg-white px-6 py-4 rounded-2xl border border-gray-100 shadow-sm outline-none focus:ring-4 focus:ring-eco/10 transition-all" />
                <input type="tel" placeholder="Phone No." className="w-full bg-white px-6 py-4 rounded-2xl border border-gray-100 shadow-sm outline-none focus:ring-4 focus:ring-eco/10 transition-all" />
                <textarea placeholder="Message" className="w-full bg-white px-6 py-4 rounded-2xl border border-gray-100 shadow-sm outline-none focus:ring-4 focus:ring-eco/10 transition-all col-span-1 md:col-span-2" rows={4}></textarea>
                <button className="col-span-1 md:col-span-2 bg-eco hover:bg-eco-dark text-white py-5 rounded-2xl font-black text-lg shadow-xl transition-all transform hover:-translate-y-1 uppercase tracking-widest">Send Message</button>
             </form>
           </div>
        </div>
      </section>

      {/* Pill-Card Department Section on Dark Green */}
      <section className="bg-eco-dark pt-64 pb-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto space-y-24">
           {departments.map((dept, idx) => (
             <div key={idx} className="space-y-12">
                <div className="flex items-center space-x-6">
                  <div className="w-24 h-1.5 bg-red-600 rounded-full" />
                  <h3 className="text-white text-3xl font-black heading-serif tracking-widest uppercase">{dept.title}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                   {dept.details.map((detail, dIdx) => (
                     <div key={dIdx} className={`p-8 ${dIdx === 0 ? dept.color : 'bg-golden-white'} rounded-[2.5rem] shadow-2xl relative min-h-[180px] flex flex-col justify-center text-center group transition-all hover:scale-105 border-t-4 border-white/10`}>
                        <div className={`absolute -top-6 left-1/2 -translate-x-1/2 p-4 ${dIdx === 0 ? 'bg-white text-eco' : 'bg-eco text-white'} rounded-full shadow-xl border-4 border-eco-dark`}>
                           {detail.icon || dept.icon}
                        </div>
                        <h4 className={`text-[10px] uppercase font-black tracking-widest mb-3 ${dIdx === 0 ? 'text-white/60' : 'text-gray-400'}`}>
                          {detail.label}
                        </h4>
                        <p className={`text-sm font-bold ${dIdx === 0 ? 'text-white' : 'text-gray-800'} break-words leading-relaxed`}>
                          {detail.text}
                        </p>
                     </div>
                   ))}
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* Floating Floating Icons */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col space-y-6">
          <div className="w-16 h-16 bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] rounded-full flex items-center justify-center shadow-[0_15px_30px_rgba(188,24,136,0.3)] cursor-pointer hover:scale-110 transition-transform border-4 border-white">
             <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" className="w-8 h-8 invert" alt="IG" />
          </div>
          <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_15px_30px_rgba(37,211,102,0.3)] cursor-pointer hover:scale-110 transition-transform border-4 border-white">
             <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" className="w-8 h-8 invert" alt="WA" />
          </div>
      </div>
    </div>
  );
};

export default Contact;

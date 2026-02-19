import React, { useEffect, useRef } from 'react';
import { Download } from 'lucide-react';

const useAnimateOnScroll = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return ref;
};

const Certifications: React.FC = () => {
  const certifications = [
    { name: "ISO 9001 : 2015", sub: "Quality Management System", logo: "https://res.cloudinary.com/ddk4lshru/image/upload/v1740338160/iso9001_p1u3w2.png" },
    { name: "ISO 14001 : 2015", sub: "Environment Management System", logo: "https://res.cloudinary.com/ddk4lshru/image/upload/v1740338160/iso14001_s2m2m2.png" },
    { name: "ISO 45001 : 2018", sub: "Occupational Health & Safety", logo: "https://res.cloudinary.com/ddk4lshru/image/upload/v1740338160/iso45001_k3m3m3.png" },
    { name: "Global Recycled Standard", sub: "GRS Certified", logo: "https://res.cloudinary.com/ddk4lshru/image/upload/v1740338160/grs_l4m4m4.png" },
    { name: "Food Grade", sub: "FDA/Food Contact Compliant", logo: "https://res.cloudinary.com/ddk4lshru/image/upload/v1740338160/foodgrade_m5m5m5.png" },
    { name: "REACH Compliant", sub: "Chemical Compliance", logo: "https://res.cloudinary.com/ddk4lshru/image/upload/v1740338160/reach_n6m6m6.png" },
    { name: "FSC® RECYCLED", sub: "FSC® C179439", logo: "https://res.cloudinary.com/ddk4lshru/image/upload/v1740338160/fsc_o7m7m7.png" },
    { name: "RoHS 2 COMPLIANT", sub: "Restricted Substances", logo: "https://res.cloudinary.com/ddk4lshru/image/upload/v1740338160/rohs_p8m8m8.png" },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1550147760-44c9966d6bc7?auto=format&fit=crop&q=80&w=1600" 
          alt="Certificates Background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-4 animate-fade-in-up">
          <h1 className="text-3xl md:text-6xl font-black text-white heading-serif uppercase tracking-[0.4em]">
            CERTIFICATES
          </h1>
        </div>
      </section>

      {/* Center Title Section (Exactly like image 2) */}
      <section className="py-24 bg-white animate-on-scroll" ref={useAnimateOnScroll()}>
        <div className="max-w-4xl mx-auto text-center px-4 space-y-6">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 heading-serif uppercase tracking-widest">
            EMINENT PAPER INDUSTRIES
          </h2>
          <div className="w-32 h-1.5 bg-[#937047] mx-auto rounded-full"></div>
          <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-bold max-w-2xl mx-auto italic uppercase tracking-wider">
            Highlighted below are the prestigious achievements and certifications of Eminent Paper Industries, reflecting our commitment to excellence and quality in the industry.
          </p>
        </div>
      </section>

      {/* Clean Grid Section */}
      <section className="pb-32 bg-white animate-on-scroll" ref={useAnimateOnScroll()}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20">
            {certifications.map((cert, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="relative w-full aspect-square flex items-center justify-center p-8 bg-white transition-all duration-500 hover:scale-105">
                  <img 
                    src={cert.logo} 
                    alt={cert.name} 
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://via.placeholder.com/200?text=${cert.name.replace(/\s/g, '+')}`;
                    }}
                  />
                  {/* Small Teal Download Icon next to logo */}
                  <div className="absolute bottom-4 right-4 p-2 bg-[#F2F8F6] text-[#40916C] hover:bg-[#40916C] hover:text-white rounded-lg shadow-sm cursor-pointer transition-all">
                    <Download size={16} />
                  </div>
                </div>
                
                {/* Minimalist Info Below */}
                <div className="mt-4 text-center space-y-1">
                  <h4 className="text-[9px] md:text-[10px] font-black text-gray-800 uppercase tracking-widest leading-tight">
                    {cert.name}
                  </h4>
                  <p className="text-[7px] md:text-[8px] text-gray-400 font-bold uppercase tracking-tight">
                    {cert.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;
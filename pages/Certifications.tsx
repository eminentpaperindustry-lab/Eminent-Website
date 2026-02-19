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
    { name: "ISO 9001 : 2015", sub: "Quality Management System", logo: "https://res.cloudinary.com/ddk4lshru/image/upload/v1771490657/ISO_QUALITY_C_1_1_1_rxib7v.png" },
    { name: "ISO 14001 : 2015", sub: "Environment Management System", logo: "https://res.cloudinary.com/ddk4lshru/image/upload/v1771490657/ISO_ENVIRONMENT_CERTIFICATE_1_1_1_ebe3ng.png" },
    { name: "ISO 45001 : 2018", sub: "Occupational Health & Safety", logo: "https://res.cloudinary.com/ddk4lshru/image/upload/v1771490658/OCCUPA_ONAL_HEALTH_SAFETY_CERTIFICATE_1_1_1_1_jemrpt.png" },
    { name: "Global Recycled Standard", sub: "GRS Certified", logo: "https://res.cloudinary.com/ddk4lshru/image/upload/v1771490657/GLOBAL_RECYCLED_STANDARD_CERTIFICATE_2_1_1_heeryk.png" },
    { name: "Food Grade", sub: "FDA/Food Contact Compliant", logo: "https://res.cloudinary.com/ddk4lshru/image/upload/v1771490656/FOOD_GRADE_CERTIFICATE_2_1_1_vc52ka.png" },
    { name: "REACH Compliant", sub: "Chemical Compliance", logo: "https://res.cloudinary.com/ddk4lshru/image/upload/v1771490660/Compliant_REACH_CERTIFICATE_1_1_1_q7bgtj.png" },
    { name: "FSC® RECYCLED", sub: "FSC® C179439", logo: "https://res.cloudinary.com/ddk4lshru/image/upload/v1771490657/FSC_RECYCLED_CERTIFICATE_2_1_1_uihlsk.png" },
    { name: "RoHS 2 COMPLIANT", sub: "Restricted Substances", logo: "https://res.cloudinary.com/ddk4lshru/image/upload/v1771490658/ROHS_COMPLIANT_CERTIFICATE_2_1_1_e8tkm4.jpg" },
  ];

  return (
    <div className="bg-gradient-to-b from-[#fdf6f0] to-[#fff6e6] min-h-screen">
      
      {/* Hero Header Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1550147760-44c9966d6bc7?auto=format&fit=crop&q=80&w=1600" 
          alt="Certificates Background" 
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="relative z-20 text-center px-4 animate-fade-in-up">
          <h1 className="text-3xl md:text-6xl font-black text-white heading-serif uppercase tracking-[0.4em]">
            CERTIFICATES
          </h1>
        </div>
      </section>

      {/* Center Title Section */}
      <section className="py-24 bg-transparent animate-on-scroll" ref={useAnimateOnScroll()}>
        <div className="max-w-4xl mx-auto text-center px-4 space-y-6">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 heading-serif uppercase tracking-widest">
            EMINENT PAPER INDUSTRIES
          </h2>
          <div className="w-32 h-1.5 bg-[#937047] mx-auto rounded-full shadow-md"></div>
          <p className="text-gray-700 text-xs md:text-sm leading-relaxed font-bold max-w-2xl mx-auto italic uppercase tracking-wider">
            Highlighted below are the prestigious achievements and certifications of Eminent Paper Industries, reflecting our commitment to excellence and quality in the industry.
          </p>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="pb-32 bg-transparent animate-on-scroll" ref={useAnimateOnScroll()}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-16">
            {certifications.map((cert, i) => (
              <div 
                key={i} 
                className="flex flex-col items-center group transition-transform duration-500 hover:scale-105"
              >
                <div className="relative w-full aspect-square flex items-center justify-center p-6 bg-white shadow-xl rounded-3xl hover:shadow-2xl border-2 border-[#e0c9a1] transition-all">
                  <img 
                    src={cert.logo} 
                    alt={cert.name} 
                    className="max-w-full max-h-full object-contain transition-all duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://via.placeholder.com/200?text=${cert.name.replace(/\s/g, '+')}`;
                    }}
                  />
                </div>
                
                {/* Text Info */}
                <div className="mt-4 text-center space-y-1">
                  <h4 className="text-[10px] font-black text-gray-900 uppercase tracking-widest leading-tight">
                    {cert.name}
                  </h4>
                  <p className="text-[8px] text-gray-500 font-bold uppercase tracking-tight">
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

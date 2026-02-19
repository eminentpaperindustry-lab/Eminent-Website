import React, { useEffect, useRef } from 'react';
import { Box, Recycle, Award, Globe, CheckCircle2 } from 'lucide-react';

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

const Products: React.FC = () => {
  const shades = [
    { name: "NATURAL", color: "#8E795E" },
    { name: "GOLDEN YELLOW", color: "#B8860B" },
    { name: "CADBURY BROWN", color: "#4B3621" },
    { name: "LIGHT TL", color: "#A0816C" },
    { name: "DARK TL", color: "#3D2B1F" },
  ];

  const specs = [
    { label: "MEDIUM", value: "Fluting and Testliner" },
    { label: "SHADES", value: "Natural, Golden Yellow, Cadbury Brown, Light TL, Dark TL" },
    { label: "DECKLE", value: "160 Inches" },
    { label: "GSM", value: "120 to 300" },
    { label: "BF", value: "18 to 35" }
  ];

  const features = [
    {
      title: "SAFE, SECURE & PROTECTIVE EXPORT-GRADE PACKAGING",
      desc: "EXPORT-SAFE PROTECTIVE PACKAGING: EDGE BOARD PROTECTORS & STRETCH FILM WRAPPING",
      icon: <Box size={24} />
    },
    {
      title: "JOINT-FREE ROLLS FOR UNIFORM STRENGTH",
      desc: "JOINT-FREE SINGLE-BODY ROLLS: PROPERLY PASTED JOINTS, UNIFORM STRENGTH & ZERO WASTAGE",
      icon: <Recycle size={24} />
    },
    {
      title: "QUALITY ASSURANCE",
      desc: "MAINTAINING CONSISTENCY IN BF, RCT, AND GSM MEASUREMENTS",
      icon: <Award size={24} />
    },
    {
      title: "ECO-FRIENDLY & SUSTAINABLE",
      desc: "MADE FROM RENEWABLE, RECYCLABLE MATERIALS, COMBINING STRENGTH AND SUSTAINABILITY.",
      icon: <Globe size={24} />
    }
  ];

  return (
    <div className="bg-[#EFE9E1] min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column */}
          <div className="flex-1 space-y-10 animate-on-scroll" ref={useAnimateOnScroll()}>
            <h1 className="text-6xl md:text-7xl font-black text-[#1B4332] heading-serif">
              Our Product
            </h1>
            
            <div className="relative inline-block w-full max-w-lg">
              <div className="rounded-[3rem] overflow-hidden border-[12px] border-white shadow-2xl">
                <img 
                  src="https://res.cloudinary.com/ddk4lshru/image/upload/v1770615625/WhatsApp-Image-2024-07-30-at-12.27.40-PM-1_1_1_1_fyplek.jpg" 
                  alt="Industrial Machine" 
                  className="w-full h-auto object-cover aspect-[4/3]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800";
                  }}
                />
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-[#1B4332] heading-serif underline decoration-[#937047] decoration-4 underline-offset-8">
                Fluting/Test Liner Paper
              </h2>
            </div>

            {/* Dark Green Spec Box */}
            <div className="bg-[#1B4332] p-8 md:p-12 rounded-[3rem] text-white shadow-2xl space-y-8">
              {specs.map((row, i) => (
                <div key={i} className="flex justify-between items-start border-b border-white/10 pb-6 last:border-0 last:pb-0">
                  <span className="text-white/60 font-black uppercase text-[10px] tracking-widest pt-1">{row.label} :</span>
                  <span className="font-black text-right ml-8 text-base md:text-xl uppercase tracking-tight">{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 lg:pt-20 space-y-16 animate-on-scroll" ref={useAnimateOnScroll()}>
            {/* Shade Section */}
            <div className="text-center lg:text-left space-y-10">
              <h3 className="text-3xl font-black text-[#1B4332] heading-serif tracking-widest uppercase text-center">
                Available Shades
              </h3>
              <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                {shades.map((s, idx) => (
                  <div key={idx} className="flex flex-col items-center space-y-4">
                    <div 
                      className="w-24 h-14 md:w-32 md:h-18 rounded-xl shadow-lg border-2 border-white transform transition hover:scale-110"
                      style={{ backgroundColor: s.color }}
                    />
                    <span className="text-[#1B4332] font-black text-[10px] uppercase tracking-widest">{s.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature Box */}
            <div className="bg-white p-12 md:p-16 rounded-[4rem] shadow-2xl relative border border-gray-100">
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#1B4332] text-white px-10 py-4 rounded-full font-black uppercase text-[10px] tracking-widest shadow-xl">
                 Specification And Key Features
              </div>

              <div className="space-y-12 pt-6">
                {features.map((f, i) => (
                  <div key={i} className="flex items-start space-x-6 group">
                    <div className="p-4 border-2 border-[#1B4332]/10 text-[#1B4332] rounded-full group-hover:bg-[#1B4332] group-hover:text-white transition-all shrink-0">
                      {f.icon}
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-black text-xs md:text-sm uppercase text-[#1B4332] tracking-widest">
                        {f.title}
                      </h4>
                      <p className="text-[10px] text-gray-400 font-black uppercase leading-relaxed tracking-wider">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
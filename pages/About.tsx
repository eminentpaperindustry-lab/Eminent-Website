import React, { useEffect, useRef } from 'react';

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

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Header - Unchanged */}
      <section className="relative h-[55vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />

        <img 
          src="https://res.cloudinary.com/ddk4lshru/image/upload/Gemini_Generated_Image_x03y3ox03y3ox03y_3_dbwlin.png" 
          alt="Modern Factory" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-4 animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-black text-white heading-serif leading-tight uppercase tracking-tight">
            About <span className="text-golden-accent">Eminent</span> Paper
          </h1>
          <p className="mt-8 text-white/80 text-xl md:text-2xl font-light italic">Pioneering industrial paper manufacturing with environmental consciousness.</p>
        </div>
      </section>

      {/* Exact Image Layout Section */}
{/* Exact Image Layout Section */}
<section className="py-32 bg-[#FCF9F0] relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 relative">

    <div className="relative flex items-center justify-center min-h-[750px]">

      {/* Dotted Circle Ring */}
      <div className="hidden lg:block absolute w-[650px] h-[650px] rounded-full border-2 border-dashed border-green-700 opacity-40"></div>

      {/* Center Circular Image */}
      <div className="relative z-20 w-[420px] h-[420px] md:w-[520px] md:h-[520px] rounded-full border-[14px] border-white shadow-2xl overflow-hidden">
        <img 
          src="https://res.cloudinary.com/ddk4lshru/image/upload/Gemini_Generated_Image_x03y3ox03y3ox03y_3_dbwlin.png"
          className="w-full h-full object-cover"
          alt="Eminent Paper Manufacturing"
        />
      </div>

      {/* TOP LEFT */}
      <div className="hidden lg:block absolute top-10 left-32 text-right w-72">
        <h4 className="font-black text-[#1B4332] text-2xl uppercase">Trusted 750+ Clients</h4>
        <p className="text-gray-600 text-sm mt-2">
          Serving a network of 750+ clients with consistent quality and service.
        </p>
      </div>

      {/* TOP RIGHT */}
      <div className="hidden lg:block absolute top-10 right-32 w-72">
        <h4 className="font-black text-[#1B4332] text-2xl uppercase">Factory Area – 52,000 Sq.m</h4>
        <p className="text-gray-600 text-sm mt-2">
          A world-class manufacturing hub built for precision and efficiency.
        </p>
      </div>

      {/* LEFT CENTER */}
      <div className="hidden lg:block absolute left-10 top-1/2 -translate-y-1/2 text-right w-72">
        <h4 className="font-black text-[#1B4332] text-2xl uppercase">100% Eco-Friendly & Recyclable</h4>
        <p className="text-gray-600 text-sm mt-2">
          Fully recyclable, environmentally responsible paper.
        </p>
      </div>

      {/* RIGHT CENTER */}
      <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 w-72">
        <h4 className="font-black text-[#1B4332] text-2xl uppercase">Production Capacity – 7,000 MT/Month</h4>
        <p className="text-gray-600 text-sm mt-2">
          Supplying high-grade recycled kraft paper at scale.
        </p>
      </div>

      {/* BOTTOM LEFT */}
      <div className="hidden lg:block absolute bottom-10 left-32 text-right w-72">
        <h4 className="font-black text-[#1B4332] text-2xl uppercase">312,000 Metric Tons Delivered</h4>
        <p className="text-gray-600 text-sm mt-2">
          Delivering premium paper with reliability. (2021–25)
        </p>
      </div>

      {/* BOTTOM RIGHT */}
      <div className="hidden lg:block absolute bottom-10 right-32 w-72">
        <h4 className="font-black text-[#1B4332] text-2xl uppercase">Global Presence – 27 Cities | 5 Countries</h4>
        <p className="text-gray-600 text-sm mt-2">
          Delivering premium solutions globally.
        </p>
      </div>

    </div>

    {/* Mobile Layout */}
    <div className="lg:hidden mt-20 space-y-12 text-center">
      <div>
        <h4 className="font-black text-[#1B4332] text-xl uppercase">Trusted 750+ Clients</h4>
        <p className="text-gray-600 text-sm mt-2">Serving a network of 750+ clients.</p>
      </div>

      <div>
        <h4 className="font-black text-[#1B4332] text-xl uppercase">100% Eco-Friendly & Recyclable</h4>
        <p className="text-gray-600 text-sm mt-2">Fully recyclable paper solutions.</p>
      </div>

      <div>
        <h4 className="font-black text-[#1B4332] text-xl uppercase">312,000 Metric Tons Delivered</h4>
        <p className="text-gray-600 text-sm mt-2">(2021–25)</p>
      </div>

      <div>
        <h4 className="font-black text-[#1B4332] text-xl uppercase">Factory Area – 52,000 Sq.m</h4>
      </div>

      <div>
        <h4 className="font-black text-[#1B4332] text-xl uppercase">Production Capacity – 7,000 MT/Month</h4>
      </div>

      <div>
        <h4 className="font-black text-[#1B4332] text-xl uppercase">Global Presence – 27 Cities | 5 Countries</h4>
      </div>
    </div>

  </div>
</section>


      {/* Section 1: OUR EXCLUSIVE PROPOSITION */}
      <section className="py-24 bg-white animate-on-scroll" ref={useAnimateOnScroll()}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
           <div className="text-center mb-24 space-y-8">
              <h2 className="text-4xl font-black text-gray-800 heading-serif uppercase tracking-widest underline decoration-[#937047] decoration-8 underline-offset-[12px] inline-block">
                OUR EXCLUSIVE PROPOSITION
              </h2>
              <p className="text-gray-500 max-w-5xl mx-auto text-lg italic leading-relaxed pt-4 font-medium">
                At Eminent Paper, we blend traditional craftsmanship with modern innovation to deliver unparalleled kraft paper solutions. Our commitment to excellence is evident in every sheet we produce, ensuring that your packaging stands out in both durability and design.
              </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {[
                { title: "High-Quality Products", desc: "Our products stand as a testament to superior quality and durability.", img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=500&q=80" },
                { title: "Strategic Location", desc: "Our strategic location ensures swift delivery & seamless supply chain efficiency.", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=500&q=80" },
                { title: "Environmental Responsibility", desc: "Committed to the planet, we embrace environmental responsibility in every sheet we produce.", img: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=500&q=80" }
              ].map((p, i) => (
                <div key={i} className="flex flex-col items-center text-center space-y-8 group">
                  <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-[6px] border-[#FCF9F0] transform group-hover:scale-105 transition-all duration-700">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                  </div>
                  <div className="space-y-4 px-6">
                    <h4 className="text-2xl font-black heading-serif text-gray-800 uppercase tracking-widest">{p.title}</h4>
                    <p className="text-[11px] text-gray-400 leading-relaxed font-black uppercase tracking-[0.2em]">{p.desc}</p>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Section 2: Our Mission */}
      <section className="py-32 bg-[#FCF9F0] animate-on-scroll" ref={useAnimateOnScroll()}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-24 space-y-6">
            <h2 className="text-6xl font-black text-gray-900 heading-serif">Our Mission</h2>
            <p className="text-gray-700 max-w-6xl mx-auto text-xl md:text-2xl italic leading-relaxed font-semibold opacity-90">
              To deliver high-quality, eco-friendly, and reliable paper solutions that exceed customer expectations through Innovation, sustainability, and timely service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-16 max-w-5xl mx-auto px-6">
             {[
               { label: "People and community care", icon: "https://cdn-icons-png.flaticon.com/512/3126/3126647.png" },
               { label: "Quality Assurance", icon: "https://cdn-icons-png.flaticon.com/512/3532/3532051.png" },
               { label: "Digitalisation and innovation", icon: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png" },
               { label: "Environmental Consciousness", icon: "https://cdn-icons-png.flaticon.com/512/2910/2910189.png" },
               { label: "Customer Focus", icon: "https://cdn-icons-png.flaticon.com/512/1261/1261143.png" },
               { label: "Timely Delivery", icon: "https://cdn-icons-png.flaticon.com/512/2830/2830305.png" }
             ].map((p, i) => (
               <div key={i} className="flex items-center space-x-8 group hover:translate-x-4 transition-transform">
                 <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 bg-white rounded-[2rem] shadow-xl p-5 group-hover:shadow-2xl transition-all border border-gray-100">
                   <img src={p.icon} alt={p.label} className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all" />
                 </div>
                 <span className="text-2xl md:text-3xl font-black text-gray-800 leading-tight uppercase tracking-tight">{p.label}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Section 3: Vision & Core Values */}
      <section className="py-32 bg-white animate-on-scroll" ref={useAnimateOnScroll()}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-[5rem] shadow-[0_50px_100px_-30px_rgba(0,0,0,0.2)]">
          {/* Blue Vision Block */}
          <div className="bg-[#1D70B8] p-16 md:p-24 text-white space-y-12 relative group">
             <h3 className="text-5xl md:text-6xl font-black heading-serif border-b-8 border-white inline-block pb-4">Our Vision</h3>
             <p className="text-xl opacity-95 leading-relaxed font-medium max-w-xl">
               Revolutionizing the paper industry with sustainability, innovation, and digital transformation to create eco-friendly and future-ready paper products
             </p>
             <div className="space-y-10">
               {[
                 { title: "Digital Integration", icon: "2103/2103633" },
                 { title: "Innovation in Product Development", icon: "3159/3159310" },
                 { title: "Collaboration and Partnerships", icon: "3126/3126647" },
                 { title: "Sustainable Practices", icon: "2910/2910189" }
               ].map((item, idx) => (
                 <div key={idx} className="flex items-center space-x-8 group/item hover:translate-x-4 transition-transform">
                   <div className="w-12 h-12 flex items-center justify-center">
                      <img 
                        src={`https://cdn-icons-png.flaticon.com/512/${item.icon}.png`} 
                        className="w-full h-full invert brightness-0" 
                        alt="icon" 
                      />
                   </div>
                   <span className="font-black text-lg md:text-xl tracking-[0.1em] uppercase">{item.title}</span>
                 </div>
               ))}
             </div>
          </div>

          {/* Light Core Values Block */}
          <div className="bg-[#F2F2F2] p-16 md:p-24 space-y-12">
             <h3 className="text-5xl md:text-6xl font-black text-gray-900 heading-serif uppercase tracking-widest">Core Values</h3>
             <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-light italic opacity-80">
               At Eminent Paper we hold several core values that shape its culture and approach to business in the paper industry
             </p>
             <div className="space-y-10">
                {[
                  { title: "Community Engagement", icon: "3126/3126647" },
                  { title: "Sustainability", icon: "2910/2910189" },
                  { title: "Innovation", icon: "3159/3159310" },
                  { title: "Integrity", icon: "3532/3532051" },
                  { title: "Sustainable Practices", icon: "2910/2910189" }
                ].map((v, i) => (
                  <div key={i} className="flex items-center space-x-10 border-b-2 border-gray-300 pb-8 last:border-0 hover:translate-x-4 transition-transform group">
                    <img src={`https://cdn-icons-png.flaticon.com/512/${v.icon}.png`} className="w-10 h-10 opacity-30 group-hover:opacity-100 transition-all" alt="icon" />
                    <span className="text-gray-800 font-black uppercase tracking-widest text-xl md:text-2xl">{v.title}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
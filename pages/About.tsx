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
        <div className="absolute inset-0 bg-eco/100 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1586075010633-247fe1bd6639?auto=format&fit=crop&q=80&w=1600" 
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
      <section className="py-32 bg-[#FCF9F0] relative overflow-hidden animate-on-scroll" ref={useAnimateOnScroll()}>
        <div className="max-w-7xl mx-auto px-4 relative">
          
          {/* Main Container */}
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
            
            {/* Left Column Stats */}
            <div className="lg:w-1/3 space-y-16 z-10">
              {/* Stat 1 - Clients */}
              <div className="flex items-start space-x-6 justify-end text-right">
                <div className="order-2 lg:order-1">
                  <h4 className="font-black text-[#1B4332] text-2xl md:text-3xl uppercase leading-tight">Trusted 750+<br/>Clients</h4>
                  <p className="text-gray-600 text-sm mt-2 font-medium leading-relaxed">
                    Serving a network of 750+ clients with consistent<br/>quality and service.
                  </p>
                </div>
                <div className="order-1 lg:order-2 p-5 bg-white rounded-full shadow-lg border border-gray-100 flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5 3.5l-5-5m0 0l-5 5m5-5v12"></path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Stat 2 - Eco-Friendly */}
              <div className="flex items-start space-x-6 justify-end text-right">
                <div className="order-2 lg:order-1">
                  <h4 className="font-black text-[#1B4332] text-2xl md:text-3xl uppercase leading-tight">100% Eco-Friendly<br/>& Recyclable</h4>
                  <p className="text-gray-600 text-sm mt-2 font-medium leading-relaxed">
                    Green solutions through fully recyclable,<br/>environmentally responsible paper.
                  </p>
                </div>
                <div className="order-1 lg:order-2 p-5 bg-white rounded-full shadow-lg border border-gray-100 flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Stat 3 - Metric Tons */}
              <div className="flex items-start space-x-6 justify-end text-right">
                <div className="order-2 lg:order-1">
                  <h4 className="font-black text-[#1B4332] text-2xl md:text-3xl uppercase leading-tight">312,000 Metric Tons<br/>Delivered</h4>
                  <p className="text-gray-600 text-sm mt-2 font-medium leading-relaxed">
                    Successfully delivering 312,000 MT of<br/>premium paper with reliability and<br/>efficiency. (2021–25)
                  </p>
                </div>
                <div className="order-1 lg:order-2 p-5 bg-white rounded-full shadow-lg border border-gray-100 flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Circular Image */}
            <div className="lg:w-1/3 flex justify-center relative z-20">
              <div className="relative w-[350px] h-[350px] md:w-[400px] md:h-[400px] rounded-full border-[12px] border-white shadow-2xl overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/ddk4lshru/image/upload/Gemini_Generated_Image_x03y3ox03y3ox03y_3_dbwlin.png" 
                  className="w-full h-full object-cover"
                  alt="Eminent Paper Manufacturing"
                />
              </div>
            </div>

            {/* Right Column Stats */}
            <div className="lg:w-1/3 space-y-16 z-10">
              {/* Stat 4 - Factory Area */}
              <div className="flex items-start space-x-6">
                <div className="p-5 bg-white rounded-full shadow-lg border border-gray-100 flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-black text-[#1B4332] text-2xl md:text-3xl uppercase leading-tight">Factory Area –<br/>52,000 Sq.m</h4>
                  <p className="text-gray-600 text-sm mt-2 font-medium leading-relaxed">
                    A world-class manufacturing hub built for<br/>precision, efficiency, and large-scale<br/>production.
                  </p>
                </div>
              </div>

              {/* Stat 5 - Production Capacity */}
              <div className="flex items-start space-x-6">
                <div className="p-5 bg-white rounded-full shadow-lg border border-gray-100 flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-black text-[#1B4332] text-2xl md:text-3xl uppercase leading-tight">Production Capacity<br/>– 7,000 MT/Month</h4>
                  <p className="text-gray-600 text-sm mt-2 font-medium leading-relaxed">
                    Supplying high-grade recycled kraft<br/>paper at scale.
                  </p>
                </div>
              </div>

              {/* Stat 6 - Global Presence */}
              <div className="flex items-start space-x-6">
                <div className="p-5 bg-white rounded-full shadow-lg border border-gray-100 flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-black text-[#1B4332] text-2xl md:text-3xl uppercase leading-tight">Global Presence – 27<br/>Cities | 5 Countries</h4>
                  <p className="text-gray-600 text-sm mt-2 font-medium leading-relaxed">
                    Delivering premium solutions across 27<br/>cities and 5 countries.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Connecting Lines - Simple lines between stats */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-10">
            <div className="flex justify-between">
              {/* Line 1 */}
              <div className="w-[30%] h-[1px] bg-gray-300 mt-8"></div>
              {/* Line 2 */}
              <div className="w-[30%] h-[1px] bg-gray-300 mt-8"></div>
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
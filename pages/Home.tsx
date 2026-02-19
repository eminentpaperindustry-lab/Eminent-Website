import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Smile, 
  Factory, 
  TrendingUp, 
  Leaf, 
  Award, 
  Headphones, 
  Truck, 
  FileCheck,
  Quote,
  Zap,
  ChevronLeft,
  ChevronRight,
  Globe,
  MapPin,
  Package,
  Building,
    ShieldCheck,
  Clock,

  Smartphone,
  Bell,
  Star,

} from 'lucide-react';
import LeadCaptureModal from '../components/LeadCaptureModal';

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

const Counter = ({ target, duration = 2000 }: { target: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setStarted(true);
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [started, target, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const heroSlides = [
    "https://res.cloudinary.com/ddk4lshru/image/upload/WhatsApp_Image_2025-11-13_at_10.40.09_AM_1_2_cu6etw.jpg",
    "https://res.cloudinary.com/ddk4lshru/image/upload/WhatsApp-Image-2024-07-30-at-12.27.40-PM-1_1_1_1_fyplek.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide(prev => (prev + 1) % heroSlides.length), 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const testimonials = [
    { name: "Rajesh Sharma", company: "Prime Packaging", quote: "Exceptional quality paper. Their consistent BF and GSM measurements have improved our box strength significantly." },
    { name: "Anand Mehta", company: "Global Exports", quote: "Reliable partner for large scale supply. Their automation ensures every roll is perfect." },
    { name: "Suresh Patel", company: "EcoCartons", quote: "The odorless paper protocol is a game changer for our food-grade packaging clients." },
    { name: "Vikram Singh", company: "SafeBox LLP", quote: "Digital tracking and auto-alerts make our logistics planning effortless." },
    { name: "Anita Desai", company: "Kraft Solutions", quote: "Their 72-hour complaint resolution is not just a promise, they actually deliver." },
    { name: "Sunil Verma", company: "Industrial Kraft", quote: "Highly durable test liners with uniform strength. Zero wastage in our production line." }
  ];

  const whyChooseUs = [
  { title: "Superior Quality", icon: <ShieldCheck size={36} /> },
  { title: "On-time Delivery", icon: <Truck size={36} /> },
  { title: "72-Hour QC Complaint Resolution", icon: <Clock size={36} /> },
  { title: "Dedicated CRM Support", icon: <Headphones size={36} /> },
  { title: "Digital Order Tracking", icon: <Smartphone size={36} /> },
  { title: "Auto-Alerts Dispatch & Delivery", icon: <Bell size={36} /> },
  { title: "Commitment to Customer Service & Satisfaction", icon: <Star size={36} /> },
  { title: "Sustainability & Green Initiatives", icon: <Leaf size={36} /> },
];


  useEffect(() => {
    const timer = setInterval(() => setTestimonialIdx(prev => (prev + 2) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="overflow-hidden">
      {/* Hero Banner Slider */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={slide}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="absolute inset-0 bg-black/60 z-10" />
            <img src={slide} alt="Manufacturing" className="w-full h-full object-cover" />
          </div>
        ))}
        
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-2xl md:text-5xl lg:text-7xl font-black text-white drop-shadow-2xl heading-serif uppercase tracking-[0.1em] leading-tight max-w-[95vw] whitespace-nowrap animate-fade-in-up">
            Krafting a <span className="text-golden-accent underline decoration-[#937047]">sustainable</span> legacy
          </h1>
          <div className="flex mt-12 space-x-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
             <button onClick={() => setIsModalOpen(true)} className="px-12 py-5 bg-[#937047] hover:bg-white hover:text-[#1B4332] text-white font-black rounded-full transition-all transform hover:scale-110 shadow-2xl uppercase tracking-[0.2em] text-[12px]">
                Enquire Now
             </button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-[#FCF9F0] animate-on-scroll" ref={useAnimateOnScroll()}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-2">
                <span className="text-[#937047] font-black uppercase text-[10px] tracking-[0.4em]">Our Story</span>
                <h2 className="text-4xl font-black text-[#1B4332] heading-serif leading-none uppercase">THE PAPER TRAIL PANORAMA</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg font-medium opacity-80">
                Eminent Paper Industries LLP is a kraft paper manufacturing plant based at Kosamba, Surat. With a production capacity of 250 tons per day, our target is to manufacture high-grade recycled kraft paper used for packaging in various verticals such as FMCG, automobiles, healthcare and pharmaceuticals.
              </p>
              <Link to="/about" className="inline-flex items-center space-x-4 text-[#937047] font-black border-b-2 border-[#937047] pb-2 hover:translate-x-2 transition-all group">
                <span className="uppercase tracking-widest text-xs">Read Our Full Story</span>
                <TrendingUp size={16} />
              </Link>
            </div>
            <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white group">
              <iframe 
                className="w-full aspect-video z-20"
                src="https://www.youtube.com/embed/KZKRoK_UGc4" 
                title="Eminent Paper" 
                frameBorder="0" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Redesigned Standout Progress (Infographic style) */}
      <section className="py-32 bg-white animate-on-scroll" ref={useAnimateOnScroll()}>
        <div className="max-w-7xl mx-auto px-4">
           <div className="text-center mb-20 space-y-4">
              <h2 className="text-5xl font-black heading-serif text-[#1B4332] uppercase tracking-widest">Our Standout Progress</h2>
              <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-xs">Detailed stats on team size, customer growth, factory area, and production capacity</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: "Team Size", value: 250, unit: "+", desc: "Employees ensure efficient operations and high-quality output.", icon: <Users size={40} className="text-[#937047]" /> },
                { label: "Customers", value: 750, unit: "+", desc: "Clients demonstrate the project's ability to cater to a wide range of needs.", icon: <Smile size={40} className="text-[#937047]" /> },
                { label: "Factory Area", value: 52000, unit: " Sq.m", desc: "Expansive space provides ample room for streamlined production.", icon: <Building size={40} className="text-[#937047]" /> },
                { label: "Production Capacity", value: 7000, unit: " MT/M", desc: "Showcases the ability to meet demands & maintain consistent supply.", icon: <Factory size={40} className="text-[#937047]" /> },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center text-center p-10 bg-[#FCF9F0] rounded-[3rem] border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-2 group">
                  <div className="mb-8 p-6 bg-white rounded-3xl shadow-sm group-hover:bg-[#1B4332] group-hover:text-white transition-colors">
                     {/* Fixed: cast to any to allow className prop */}
                     {React.cloneElement(stat.icon as React.ReactElement<any>, { className: 'group-hover:text-white transition-colors' })}
                  </div>
                  <div className="text-5xl font-black text-[#1B4332] heading-serif mb-4">
                    <Counter target={stat.value} />{stat.unit}
                  </div>
                  <h4 className="text-[#937047] font-black uppercase tracking-widest text-sm mb-4">{stat.label}</h4>
                  <p className="text-gray-400 text-[10px] font-bold uppercase leading-relaxed px-4">{stat.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>


{/* Why Choose Us Section */}
<section className="py-28 bg-[#F5F1EA] animate-on-scroll" ref={useAnimateOnScroll()}>
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-20">
      <h2 className="text-5xl font-black text-[#1B4332] heading-serif uppercase tracking-widest">
        Why Choose Us
      </h2>
      <div className="w-28 h-1 bg-[#937047] mx-auto mt-6"></div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-gray-200">

      {whyChooseUs.map((item, i) => (
        <div
          key={i}
          className="group p-12 text-center border border-gray-200 bg-white hover:bg-[#1B4332] transition-all duration-500 flex flex-col items-center justify-center space-y-6 hover:-translate-y-2"
        >
          <div className="text-[#1B4332] group-hover:text-[#937047] transition-colors duration-500">
            {item.icon}
          </div>

          <h4 className="text-lg font-semibold text-[#1B4332] group-hover:text-white transition-colors duration-500 leading-snug">
            {item.title}
          </h4>
        </div>
      ))}

    </div>

    <div className="mt-20 text-center max-w-4xl mx-auto">
      <p className="text-gray-600 text-lg leading-relaxed">
        Driven by integrity, we prioritize customer needs to deliver high-quality eco-friendly kraft paper with advanced automation and world-class testing, ensuring unmatched service and reliability.
      </p>
    </div>

  </div>
</section>



      {/* Testimonials - Show 2 at a time as requested */}
      <section className="py-24 bg-[#1B4332] text-white animate-on-scroll" ref={useAnimateOnScroll()}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
             <h3 className="text-4xl md:text-5xl font-black heading-serif text-white uppercase tracking-widest">What Our Clients Say</h3>
             <div className="w-32 h-2 bg-golden-accent mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="relative flex items-center justify-center space-x-6">
            <button onClick={() => setTestimonialIdx(prev => (prev - 2 + testimonials.length) % testimonials.length)} className="p-5 bg-white/10 hover:bg-white/20 rounded-full border border-white/10 transition-all">
              <ChevronLeft size={32} />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
              {[0, 1].map(offset => {
                const item = testimonials[(testimonialIdx + offset) % testimonials.length];
                return (
                  <div key={offset} className="bg-white/5 p-12 rounded-[4rem] border border-white/10 relative group hover:bg-white/10 transition-all duration-500 shadow-xl">
                    <Quote className="absolute top-12 right-12 text-kraft opacity-20" size={80} />
                    <p className="text-xl italic leading-relaxed text-white/90 font-light mb-12">
                      "{item.quote}"
                    </p>
                    <div className="flex items-center space-x-6">
                      <div className="w-16 h-16 bg-[#937047] rounded-3xl flex items-center justify-center font-black text-white text-3xl">
                        {item.name.charAt(0)}
                      </div>
                      <div>
                        <h5 className="font-black text-2xl text-white">{item.name}</h5>
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-golden-accent">{item.company}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <button onClick={() => setTestimonialIdx(prev => (prev + 2) % testimonials.length)} className="p-5 bg-white/10 hover:bg-white/20 rounded-full border border-white/10 transition-all">
              <ChevronRight size={32} />
            </button>
          </div>
        </div>
      </section>

{/* Premium Luxury Clients Section */}
<section className="py-28 relative overflow-hidden">
  {/* Luxury Background */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#0F1F1C] via-[#1B4332] to-[#0F1F1C]"></div>
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(198,161,91,0.1)_0%,_transparent_80%)]"></div>
  
  <div className="relative max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16">
      <h3 className="text-5xl font-black text-[#F5E2B8] uppercase tracking-widest">
        Our Trusted Clients
      </h3>
      <div className="w-28 h-1 bg-[#C6A15B] mx-auto mt-5 rounded-full"></div>
      <p className="text-[#F5E2B8]/80 mt-6 text-lg">
        Trusted by leading packaging & kraft paper companies
      </p>
    </div>

    {/* Logo Strip */}
    <div className="relative w-full overflow-hidden py-12">

      <div className="flex w-max animate-scroll gap-28 px-10 items-center">

        {[
          "https://res.cloudinary.com/ddk4lshru/image/upload/v1771484503/WhatsApp_Image_2026-01-08_at_4.45.03_PM_xauijd.jpg",
          "https://res.cloudinary.com/ddk4lshru/image/upload/v1771484502/WhatsApp_Image_2026-01-08_at_4.10.13_PM_a8tmfm.jpg",
          "https://res.cloudinary.com/ddk4lshru/image/upload/v1771484501/download_2_1_1_v2etru.jpg",
          "https://res.cloudinary.com/ddk4lshru/image/upload/v1771484501/Royal_Paper_Logo_1_2_1_1_izu84t.png",
          "https://res.cloudinary.com/ddk4lshru/image/upload/v1771484502/WhatsApp_Image_2026-01-08_at_4.05.37_PM_nlr2hm.jpg",
          "https://res.cloudinary.com/ddk4lshru/image/upload/v1771484502/WhatsApp_Image_2026-01-08_at_4.27.45_PM_tt8hj2.jpg",
          "https://res.cloudinary.com/ddk4lshru/image/upload/v1771484502/WhatsApp_Image_2026-01-08_at_4.13.17_PM_yyjx5f.jpg",

          // duplicate for seamless loop
          "https://res.cloudinary.com/ddk4lshru/image/upload/v1771484503/WhatsApp_Image_2026-01-08_at_4.45.03_PM_xauijd.jpg",
          "https://res.cloudinary.com/ddk4lshru/image/upload/v1771484502/WhatsApp_Image_2026-01-08_at_4.10.13_PM_a8tmfm.jpg",
          "https://res.cloudinary.com/ddk4lshru/image/upload/v1771484501/download_2_1_1_v2etru.jpg",
          "https://res.cloudinary.com/ddk4lshru/image/upload/v1771484501/Royal_Paper_Logo_1_2_1_1_izu84t.png",
          "https://res.cloudinary.com/ddk4lshru/image/upload/v1771484502/WhatsApp_Image_2026-01-08_at_4.05.37_PM_nlr2hm.jpg",
          "https://res.cloudinary.com/ddk4lshru/image/upload/v1771484502/WhatsApp_Image_2026-01-08_at_4.27.45_PM_tt8hj2.jpg",
          "https://res.cloudinary.com/ddk4lshru/image/upload/v1771484502/WhatsApp_Image_2026-01-08_at_4.13.17_PM_yyjx5f.jpg",
        ].map((logo, index) => (
          <div key={index} className="flex items-center justify-center">
            <img
              src={logo}
              alt="Client Logo"
              className="h-24 object-contain bg-white p-4 rounded-2xl shadow-lg hover:scale-110 transition duration-500"
            />
          </div>
        ))}

      </div>
    </div>

  </div>

  {/* Animation */}
  <style>
    {`
      .animate-scroll {
        animation: scroll 35s linear infinite;
      }
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `}
  </style>
</section>



      <LeadCaptureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSuccess={() => alert("Thank you for your enquiry!")} />
    </div>
  );
};

export default Home;
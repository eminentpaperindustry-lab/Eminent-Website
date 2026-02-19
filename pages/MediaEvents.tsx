import React, { useState } from 'react';
import { PlayCircle, Image as ImageIcon, Video, Calendar, FileText, ChevronRight } from 'lucide-react';

const MediaEvents: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'videos' | 'articles' | 'events'>('videos');

  const valueProtocols = [
    { title: "Cleaning & Housekeeping", url: "https://www.youtube.com/embed/KZKRoK_UGc4" },
    { title: "Complaint Management", url: "https://www.youtube.com/embed/KZKRoK_UGc4" },
    { title: "Joint Pasting", url: "https://www.youtube.com/embed/KZKRoK_UGc4" },
    { title: "Loading Operations", url: "https://www.youtube.com/embed/KZKRoK_UGc4" },
    { title: "On Time Delivery", url: "https://www.youtube.com/embed/KZKRoK_UGc4" },
    { title: "Quality Control", url: "https://www.youtube.com/embed/KZKRoK_UGc4" },
  ];

  const articles = [
    { title: "The Future of Sustainable Packaging in India", date: "Jan 12, 2024", category: "Industry Update" },
    { title: "Why GSM Consistency Matters for Your Brand", date: "Feb 05, 2024", category: "Technical Guide" },
    { title: "Eminent Paper Reaches 250 TPD Milestone", date: "Mar 20, 2024", category: "Company News" },
  ];

  return (
    <div className="bg-golden-white min-h-screen">
      {/* Dynamic Header */}
      <section className="bg-eco py-24 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <h1 className="text-4xl md:text-7xl font-black mb-4 heading-serif uppercase tracking-tighter">Media & Events</h1>
        <p className="text-golden-accent text-lg md:text-xl italic font-light tracking-widest">Digital transparency and industrial updates.</p>
        
        {/* Tab Switcher */}
        <div className="mt-16 flex justify-center space-x-4 md:space-x-8 relative z-10 px-4">
           {[
             { id: 'videos', label: 'Videos Library', icon: <Video size={18} /> },
             { id: 'articles', label: 'Articles & Updates', icon: <FileText size={18} /> },
             { id: 'events', label: 'Exhibitions & Meets', icon: <ImageIcon size={18} /> },
           ].map(tab => (
             <button
               key={tab.id}
               onClick={() => setActiveTab(tab.id as any)}
               className={`flex items-center space-x-3 px-8 py-4 rounded-full font-black uppercase text-[10px] tracking-widest transition-all shadow-xl border-2 ${activeTab === tab.id ? 'bg-golden-accent text-eco border-golden-accent scale-110' : 'bg-white/10 text-white border-white/20 hover:bg-white/20'}`}
             >
               {tab.icon}
               <span className="hidden md:inline">{tab.label}</span>
             </button>
           ))}
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-24 max-w-7xl mx-auto px-4 md:px-8">
        {activeTab === 'videos' && (
          <div className="space-y-20 animate-fade-in-up">
            <div className="max-w-4xl mx-auto aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/KZKRoK_UGc4" 
                  title="Main Corporate Video" 
                  frameBorder="0" 
                  allowFullScreen
              ></iframe>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {valueProtocols.map((v, i) => (
                <div key={i} className="group bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 hover:-translate-y-2 transition-all">
                  <div className="aspect-video relative bg-eco">
                    <div className="absolute inset-0 flex items-center justify-center text-golden-accent group-hover:scale-125 transition-transform z-20">
                      <PlayCircle size={60} />
                    </div>
                    <img src={`https://picsum.photos/400/225?random=${i+100}`} className="w-full h-full object-cover opacity-40" alt={v.title} />
                  </div>
                  <div className="p-8">
                    <h4 className="font-black text-eco text-xs uppercase tracking-widest">{v.title}</h4>
                    <p className="text-[10px] text-gray-400 mt-2 uppercase font-bold tracking-widest">Protocol Series #0{i+1}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'articles' && (
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
            {articles.map((art, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100 group cursor-pointer hover:bg-eco-dark transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-4">
                    <span className="text-kraft font-black uppercase text-[10px] tracking-[0.3em]">{art.category}</span>
                    <h3 className="text-2xl font-black text-eco group-hover:text-white transition-colors heading-serif">{art.title}</h3>
                    <p className="text-gray-400 text-xs uppercase font-bold tracking-widest">{art.date}</p>
                  </div>
                  <div className="p-5 bg-golden-white text-eco rounded-2xl group-hover:bg-kraft group-hover:text-white transition-all">
                    <ChevronRight size={32} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'events' && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 animate-fade-in-up">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="aspect-square bg-white rounded-[2rem] overflow-hidden relative group shadow-xl">
                <img src={`https://picsum.photos/600/600?random=${item+200}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Event" />
                <div className="absolute inset-0 bg-eco-dark/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6 text-center">
                  <div className="space-y-4">
                    <Calendar size={32} className="text-golden-accent mx-auto" />
                    <h5 className="text-white font-black uppercase text-[10px] tracking-widest leading-relaxed">International Paper Expo 2024</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default MediaEvents;
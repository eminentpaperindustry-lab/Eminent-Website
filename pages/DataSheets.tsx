
import React from 'react';
import { FileText, Download, Eye, Search } from 'lucide-react';

const DataSheets: React.FC = () => {
  const sheets = [
    { name: "Fluting Paper - High BF", type: "TDS-FP-H", date: "2024.01" },
    { name: "Test Liner - Natural", type: "TDS-TL-N", date: "2024.01" },
    { name: "Test Liner - Golden Yellow", type: "TDS-TL-GY", date: "2024.01" },
    { name: "Test Liner - Cadbury Brown", type: "TDS-TL-CB", date: "2024.01" },
    { name: "Heavy Duty Kraft - Export Grade", type: "TDS-HK-E", date: "2024.02" },
  ];

  return (
    <div>
      <section className="bg-kraft py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Technical Data Sheets</h1>
          <p className="text-kraft-light text-lg">
            Detailed technical specifications including GSM, BF, RCT, and other performance parameters.
          </p>
        </div>
      </section>

      <section className="py-24 bg-golden-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <h2 className="text-3xl font-bold text-gray-900">Product Specifications</h2>
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Search products or codes..." 
                className="w-full pl-12 pr-4 py-3 bg-white rounded-full border border-gray-200 focus:ring-2 focus:ring-eco focus:border-transparent outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sheets.map((sheet, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-16 bg-gray-50 text-kraft rounded-2xl flex items-center justify-center group-hover:bg-kraft group-hover:text-white transition-all">
                    <FileText size={32} />
                  </div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{sheet.type}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{sheet.name}</h3>
                <p className="text-gray-500 text-sm mb-8">Version: {sheet.date}</p>
                <div className="flex space-x-3">
                  <button className="flex-1 flex items-center justify-center space-x-2 py-3 bg-eco text-white rounded-xl font-bold hover:bg-eco-dark transition-colors">
                    <Download size={18} />
                    <span>Download</span>
                  </button>
                  <button className="p-3 bg-gray-50 text-gray-400 rounded-xl hover:bg-gray-100 transition-colors">
                    <Eye size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 p-10 bg-white rounded-3xl border border-dashed border-gray-300 text-center">
            <p className="text-gray-500">Need a custom technical parameter analysis?</p>
            <button className="mt-4 text-eco font-bold hover:underline">Contact our technical department &rarr;</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataSheets;

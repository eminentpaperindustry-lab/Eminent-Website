import React from "react";
import { Box, Recycle, Award, Globe } from "lucide-react";

const Products: React.FC = () => {
  const shades = [
    { name: "Natural", color: "#8E795E" },
    { name: "Golden Yellow", color: "#B8860B" },
    { name: "Cadbury Brown", color: "#4B3621" },
    { name: "Light TL", color: "#A0816C" },
    { name: "Dark TL", color: "#3D2B1F" },
  ];

  const specs = [
    { label: "Medium", value: "Fluting and Testliner" },
    { label: "Deckle", value: "160 Inches" },
    { label: "GSM", value: "120 – 300" },
    { label: "BF", value: "18 – 35" },
  ];

  const features = [
    {
      title: "Export Grade Packaging",
      desc: "Edge board protectors & stretch film wrapping",
      icon: <Box size={20} />,
    },
    {
      title: "Joint-Free Rolls",
      desc: "Uniform strength & zero wastage",
      icon: <Recycle size={20} />,
    },
    {
      title: "Quality Assurance",
      desc: "Consistent BF, RCT & GSM measurements",
      icon: <Award size={20} />,
    },
    {
      title: "Eco-Friendly",
      desc: "Renewable & recyclable materials",
      icon: <Globe size={20} />,
    },
  ];

  return (
    <section className="bg-[#F5F1EA] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION TITLE */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#1B4332]">
            Our Product
          </h1>
        </div>

        {/* GRID LAYOUT */}
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-10">

            {/* Image */}
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://res.cloudinary.com/ddk4lshru/image/upload/v1770615625/WhatsApp-Image-2024-07-30-at-12.27.40-PM-1_1_1_1_fyplek.jpg"
                alt="Fluting Paper Roll"
                className="w-full object-cover aspect-[4/3]"
              />
            </div>

            {/* Product Name */}
            <h2 className="text-3xl font-semibold text-[#1B4332] border-b-2 border-[#C6A15B] inline-block pb-2">
              Fluting / Test Liner Paper
            </h2>

            {/* Specs Card */}
            <div className="bg-[#1B4332] text-white rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">
                {specs.map((row, i) => (
                  <div
                    key={i}
                    className="flex justify-between border-b border-white/20 pb-4 last:border-none"
                  >
                    <span className="uppercase text-sm tracking-wider text-white/70">
                      {row.label}
                    </span>
                    <span className="font-semibold">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-14">

            {/* Shades */}
            <div>
              <h3 className="text-2xl font-semibold text-[#1B4332] mb-8">
                Available Shades
              </h3>

              <div className="flex flex-wrap gap-6">
                {shades.map((s, idx) => (
                  <div key={idx} className="flex flex-col items-center space-y-3">
                    <div
                      className="w-20 h-14 rounded-lg shadow-md border"
                      style={{ backgroundColor: s.color }}
                    />
                    <span className="text-sm font-medium text-[#1B4332] text-center">
                      {s.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features Card */}
            <div className="bg-white rounded-2xl p-10 shadow-lg">
              <h3 className="text-xl font-semibold text-[#1B4332] mb-8">
                Specifications & Key Features
              </h3>

              <div className="space-y-8">
                {features.map((f, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="p-3 bg-[#F1EEE8] text-[#1B4332] rounded-full">
                      {f.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1B4332]">
                        {f.title}
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">
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
    </section>
  );
};

export default Products;

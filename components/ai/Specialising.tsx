import React from "react";

// ----------------------------------------------------------------------
// 1. DATA CONFIGURATION
// ----------------------------------------------------------------------

const aiFrameworks = [
  { name: "Python", years: "1 year", src: "/python.svg" },
  { name: "Hugging Face", years: "1 year", src: "/ai/huggingface.svg" },
  { name: "SMOTE", years: "1 year", src: "/ai/smote.svg" },
  { name: "IBM AIF360", years: "1 year", src: "/ai/ibm.png" },
];

const aiTools = [
  { name: "Google Colab", years: "2 years", src: "/ai/colab.svg" },
  { name: "Gemini API", years: "1 year", src: "/ai/gemini.svg" },
  { name: "AI Studio", years: "1 year", src: "/ai/aistudio.svg" },
];

// ----------------------------------------------------------------------
// 2. HELPER COMPONENTS
// ----------------------------------------------------------------------

const SkillItem = ({ item }: { item: (typeof aiFrameworks)[0] }) => (
  <div className="flex-shrink-0 min-w-[200px] flex flex-col items-start border-r border-gray-300 mr-12 pl-4">
    <img
      alt={`${item.name} logo`}
      className="object-contain w-[100px] h-[100px]"
      src={item.src}
    />
    <span className="mt-4 text-black text-2xl md:text-3xl font-bold">{item.name}</span>
    <span className="mt-1 font-semibold text-2xl md:text-2xl bg-gradient-to-r from-[#FF3F3F] via-[#28FFB4] to-[#8833FF] bg-clip-text text-transparent">
      {item.years}
    </span>
  </div>
);

interface SkillRowProps {
  title: string;
  items: typeof aiFrameworks;
  reverse?: boolean;
}

const SkillRow = ({ title, items, reverse = false }: SkillRowProps) => {
  return (
    <div className="w-full border-b border-gray-300 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {reverse ? (
          <>
            <div className="col-span-2 w-full flex items-center overflow-hidden py-16 border-r border-gray-300 order-2 lg:order-1">
              <div
                className="flex items-start"
                style={{
                  gap: "24px",
                  width: "max-content",
                  animation: "scroll-right 20s linear infinite",
                }}
              >
                {/* Duplicate list for seamless loop */}
                {items.map((item, index) => (
                  <SkillItem key={`r-a-${index}`} item={item} />
                ))}
                {items.map((item, index) => (
                  <SkillItem key={`r-b-${index}`} item={item} />
                ))}
              </div>
            </div>

            {/* 2. Title Section (Right) */}
            <div className="col-span-1 p-8 flex items-center justify-center lg:justify-start order-1 lg:order-2 border-b lg:border-b-0 border-gray-300">
              <h3 className="text-3xl md:text-4xl font-semibold text-black leading-tight">
                {title}
              </h3>
            </div>
          </>
        ) : (
          <>
            <div className="col-span-1 p-8 border-r border-gray-300 flex items-center border-b lg:border-b-0">
              <h3 className="text-3xl md:text-4xl font-semibold text-black leading-tight">
                {title}
              </h3>
            </div>

            {/* 2. Tools Section (Right) */}
            <div className="col-span-2 w-full flex items-center overflow-hidden py-16">
              <div
                className="flex items-start"
                style={{
                  gap: "24px",
                  width: "max-content",
                  animation: "scroll-left 20s linear infinite",
                }}
              >
                {/* Duplicate list for seamless loop */}
                {items.map((item, index) => (
                  <SkillItem key={`s-a-${index}`} item={item} />
                ))}
                {items.map((item, index) => (
                  <SkillItem key={`s-b-${index}`} item={item} />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// ----------------------------------------------------------------------
// 3. MAIN COMPONENT
// ----------------------------------------------------------------------

const Specialising = () => {
  return (
    <div aria-hidden={false} className="relative bg-transparent w-full ">
      {/* Row 1: Languages (Standard Layout) */}
      <SkillRow items={aiFrameworks} title="Languages & Frameworks" />

      {/* Row 2: DevOps (Reverse Layout) */}
      <SkillRow
        items={aiTools}
        reverse={true}
        title="DevOps, Cloud & Tools"
      />

      {/* Animation Styles */}
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        /* Hover effect to pause scrolling so users can read */
        .col-span-2:hover .flex {
          animation-play-state: paused !important;
        }
      `}</style>
    </div>
  );
};

export default Specialising;
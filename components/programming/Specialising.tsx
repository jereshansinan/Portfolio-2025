import React from "react";

// ----------------------------------------------------------------------
// 1. DATA CONFIGURATION
// ----------------------------------------------------------------------

const languages = [
  { name: ".NET", years: "3 years", src: "/NET.svg" },
  { name: "C#", years: "3 years", src: "/csharp.svg" },
  { name: "Java", years: "5 years", src: "/java.svg" },
  { name: "Kotlin", years: "2 years", src: "/kotlin.svg" },
  { name: "Next.js", years: "3 years", src: "/nextjs.svg" },
  { name: "Python", years: "1 year", src: "/python.svg" },
  { name: "React", years: "3 years", src: "/react.svg" },
  { name: "TypeScript", years: "2 years", src: "/typeScript.svg" },
];

const devopsAndTools = [
  { name: "Android Studio", years: "3 years", src: "/android.svg" },
  { name: "Azure", years: "3 years", src: "/azure.svg" },
  { name: "CircleCI", years: "2 years", src: "/circleci.svg" },
  { name: "Clerk", years: "2 years", src: "/clerk.svg" },
  { name: "Git", years: "10 years", src: "/git.svg" },
  { name: "Github", years: "4 years", src: "/github.svg" },
  { name: "Postman", years: "2 years", src: "/postman.svg" },
  { name: "Prisma", years: "3 years", src: "/prisma.svg" },
  { name: "Snyk", years: "2 years", src: "/snyk.svg" },
  { name: "Sonarqube", years: "2 years", src: "/sonarqube.svg" },
  { name: "Vercel", years: "2 years", src: "/vercel.svg" },
];

// ----------------------------------------------------------------------
// 2. HELPER COMPONENTS
// ----------------------------------------------------------------------

const SkillItem = ({ item }: { item: (typeof languages)[0] }) => (
  <div className="flex-shrink-0 min-w-[200px] flex flex-col items-start border-r border-gray-300 mr-12 pl-4">
    <img
      alt={`${item.name} logo`}
      className="object-contain w-[100px] h-[100px]"
      src={item.src}
    />
    <span className="mt-4 text-black text-xl font-bold">{item.name}</span>
    <span className="mt-1 font-semibold bg-gradient-to-r from-[#FF3F3F] via-[#28FFB4] to-[#8833FF] bg-clip-text text-transparent">
      {item.years}
    </span>
  </div>
);

interface SkillRowProps {
  title: string;
  items: typeof languages;
  reverse?: boolean;
}

const SkillRow = ({ title, items, reverse = false }: SkillRowProps) => {
  return (
    <div className="w-full border-b border-gray-300 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {reverse ? (
          <>
            <div className="col-span-2 w-full font-mono flex items-center overflow-hidden py-16 border-r border-gray-300 order-2 lg:order-1">
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
              <h3 className="text-3xl md:text-4xl font-semibold text-black font-mono leading-tight">
                {title}
              </h3>
            </div>
          </>
        ) : (
          <>
            <div className="col-span-1 p-8 border-r border-gray-300 flex items-center border-b lg:border-b-0">
              <h3 className="text-3xl md:text-4xl font-semibold text-black font-mono leading-tight">
                {title}
              </h3>
            </div>

            {/* 2. Tools Section (Right) */}
            <div className="col-span-2 w-full font-mono flex items-center overflow-hidden py-16">
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
    <div aria-hidden={false} className="relative bg-transparent w-full">
      {/* Row 1: Languages (Standard Layout) */}
      <SkillRow items={languages} title="Languages & Frameworks" />

      {/* Row 2: DevOps (Reverse Layout) */}
      <SkillRow
        items={devopsAndTools}
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
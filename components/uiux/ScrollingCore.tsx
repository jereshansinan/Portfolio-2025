import React from "react";

const ScrollingCore: React.FC = () => {
  const items = [
    {
      id: 1,
      label: "Web & Mobile",
      title: "INTERFACES",
      img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1470&auto=format&fit=crop",
    },
    {
      id: 2,
      label: "Brand & Print",
      title: "IDENTITY",
      img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1355&auto=format&fit=crop",
    },
    {
      id: 3,
      label: "Code & Systems",
      title: "SYSTEMS",
      img: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1470&auto=format&fit=crop",
    },
  ];

  return (
    <section
      aria-label="Scrolling focus section"
      className="w-full py-12 md:py-[6vh] flex flex-col gap-16 md:gap-[10vh] items-center bg-transparent overflow-hidden"
    >
      {items.map((it) => (
        <div
          key={it.id}
          className="w-full max-w-[1300px] relative px-4 md:px-[4vw] box-border"
        >
          <div className="absolute left-8 -top-7 flex items-center gap-3 z-40">
            <div className="bg-white px-3 py-1 rounded-md text-sm font-extrabold shadow-md text-black font-mono">
              {it.label}
            </div>
            <div
              aria-hidden
              className="w-[2px] h-[28px] bg-gray-200 ml-1 rounded-sm"
            />
          </div>

          <div className="relative w-full min-h-[50vh] md:min-h-[65vh] flex items-center justify-center overflow-visible my-10 md:my-0">
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[15vw] md:text-[clamp(60px,18vw,220px)] leading-[0.9] font-black text-white/10 md:text-white whitespace-nowrap pointer-events-none select-none z-0 font-mono"
            >
              {it.title}
            </div>

            <div
              aria-label={`${it.label} visual placeholder`}
              className="w-[90%] md:w-[70%] aspect-video md:h-[70%] overflow-hidden flex items-center justify-center relative z-10 rounded-xl shadow-2xl"
            >
              <img
                alt={`${it.label} placeholder`}
                className="w-full h-full object-cover block hover:scale-105 transition-transform duration-700"
                loading="lazy"
                src={it.img}
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ScrollingCore;
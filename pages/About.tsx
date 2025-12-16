import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="order-2 md:order-1">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-slate-400 text-xl font-light">01.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">About Me</h2>
            <div className="h-px bg-slate-200 flex-grow ml-4 max-w-xs"></div>
          </div>

          <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
            <p>
              Hello! My name is Alex and I enjoy creating things that live on the internet. My interest in web development started back in 2015 when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS was pretty fun!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working at an <span className="text-slate-900 font-bold border-b-2 border-slate-200">advertising agency</span>, a <span className="text-slate-900 font-bold border-b-2 border-slate-200">start-up</span>, and a <span className="text-slate-900 font-bold border-b-2 border-slate-200">student-led design studio</span>.
            </p>
            <p>
              My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
            </p>
            <p>
              When I'm not at the computer, I'm usually hanging out with my cat, reading sci-fi novels, or hiking.
            </p>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative group w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-slate-200 rounded-lg transform translate-x-3 translate-y-3"></div>
                <div className="absolute inset-0 bg-white rounded-lg overflow-hidden border-2 border-slate-900">
                    <img 
                        src="https://picsum.photos/seed/profile/800/800" 
                        alt="Profile" 
                        className="w-full h-full object-cover grayscale" 
                    />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
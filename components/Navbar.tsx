import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import gsap from 'gsap';
import { NAV_ITEMS, SOCIALS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuOverlayRef = useRef<HTMLDivElement>(null);
  const menuContentRef = useRef<HTMLDivElement>(null);
  const menuPreviewImgRef = useRef<HTMLDivElement>(null);
  const menuLinkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const socialLinkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const videoEmbedUrl =
    "https://www.youtube.com/embed/h62aeDVJ9IA?autoplay=1&mute=1&loop=1&playlist=h62aeDVJ9IA&controls=0";
  useEffect(() => {
    // Close menu on route change
    if (isOpen) toggleMenu();
  }, [location]);

  const toggleMenu = () => {
    // Standard easing close to the "hop" feel
    const ease = "power4.inOut";

    if (isOpen) {
        // Close Menu Animation
        document.body.style.overflow = 'unset';
        const tl = gsap.timeline({
            defaults: { ease: ease }
        });

        tl.to(menuLinkRefs.current, {
            y: 120,
            opacity: 0,
            stagger: 0.05,
            duration: 0.5,
        });

        tl.to(socialLinkRefs.current, {
            y: 120,
            opacity: 0,
            stagger: 0.05,
            duration: 0.5,
        }, "<");
        
        tl.to(menuPreviewImgRef.current, {
            opacity: 0,
            duration: 0.5
        }, "<");

        tl.to(menuContentRef.current, {
            x: -100,
            y: -100,
            scale: 1.5,
            rotation: -15,
            duration: 1,
        });

        tl.to(menuOverlayRef.current, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            duration: 1,
            onComplete: () => {
                setIsOpen(false);
                if (menuOverlayRef.current) {
                    menuOverlayRef.current.classList.remove('open');
                }
            }
        }, "<");

    } else {
        // Open Menu Animation
        document.body.style.overflow = 'hidden';
        setIsOpen(true);
        if (menuOverlayRef.current) {
            menuOverlayRef.current.classList.add('open');
        }

        const tl = gsap.timeline({
            defaults: { ease: ease }
        });

        tl.to(menuOverlayRef.current, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 1.25,
        });

        tl.to(menuContentRef.current, {
            x: 0,
            y: 0,
            scale: 1,
            rotation: 0,
            duration: 1.25,
        }, "<");

        tl.to(menuPreviewImgRef.current, {
            opacity: 1,
            duration: 1,
            delay: 0.5
        }, "<");

        tl.to(menuLinkRefs.current, {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 1,
            delay: 0.5
        }, "<");

        tl.to(socialLinkRefs.current, {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 1,
            delay: 0.5
        }, "<0.2");
    }
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 mix-blend-difference text-white bg-transparent">
        <div className="w-full px-6 py-6 flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link to="/" className="font-bold text-xl tracking-tighter hover:opacity-70 transition-opacity">
              JERESHANSINAN
            </Link>
          </div>
          
          <div className="flex">
            <button
              onClick={toggleMenu}
              className="nav-menu-btn z-50 inline-flex items-center justify-center w-10 h-10 rounded-full border border-white text-white hover:bg-white hover:text-black transition-colors focus:outline-none"
              aria-label="Menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      <div ref={menuOverlayRef} className="menu-overlay px-4 md:px-12">
        <button
          className="nav-menu-btn absolute top-6 right-6 z-50 w-10 h-10 rounded-full flex items-center justify-center border border-white text-white hover:bg-[#fef3c7] hover:text-black hover:border-[#fef3c7] transition-colors duration-300"
          onClick={toggleMenu}
        >
          ✕
        </button>
        <div ref={menuContentRef} className="menu-content">
          <div className="menu-items">
            <div className="col-lg">
              <div
                ref={menuPreviewImgRef}
                className="menu-preview-img w-[40%] h-96"
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src='./menuhero.mkv' type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div className="col-sm">
              <div className="menu-links">
                {NAV_ITEMS.map((item, i) => (
                  <div key={i} className="link text-white">
                    {item.path.startsWith('http') ? (
                       <a
                        ref={(el) => {
                            menuLinkRefs.current[i] = el;
                        }}
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                       >
                         {item.label}
                       </a>
                    ) : (
                        <Link
                        ref={(el) => {
                            menuLinkRefs.current[i] = el;
                        }}
                        to={item.path}
                        >
                        {item.label}
                        </Link>
                    )}
                  </div>
                ))}
              </div>

              <div className="menu-socials">
                {SOCIALS.map((item, i) => (
                  <div
                    key={item.platform}
                    className="social text-white font-mono"
                  >
                    <a
                      ref={(el) => {
                        socialLinkRefs.current[i] = el;
                      }}
                      href={item.url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {item.platform}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="menu-footer font-mono">
            <div className="col-lg text-white hidden md:flex">
              <Link to="/">My Portfolio</Link>
            </div>
            <div className="col-sm text-white flex justify-between w-full md:w-auto">
              <Link to="/">Designed by</Link>
              <Link to="/">Jereshan Sinan</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
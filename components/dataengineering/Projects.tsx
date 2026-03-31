"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { SplitText } from "gsap/SplitText";
import Grainient from "../Grainient";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText);

// ─── Types ────────────────────────────────────────────────────────────────────

interface ProjectsProps {
  projects: Array<{
    id: string;
    image: string;
    coverImage?: string;
    title?: string;
    description?: string;
    categories?: string[];
    githubUrl?: string;
  }>;
}

// ─── Dark-theme colour palette ────────────────────────────────────────────────

const SLIDE_COLORS = [
  { content: "#1e1a2e", scrollLine: "#a78bfa", grain: ["#a78bfa", "#1e1a2e", "#4c1d95"] },
  { content: "#0f1e1e", scrollLine: "#34d399", grain: ["#34d399", "#064e3b", "#0f1e1e"] },
  { content: "#1e1812", scrollLine: "#fbbf24", grain: ["#fbbf24", "#78350f", "#1e1812"] },
  { content: "#0f1828", scrollLine: "#60a5fa", grain: ["#60a5fa", "#1e3a8a", "#0f1828"] },
  { content: "#1a1222", scrollLine: "#f472b6", grain: ["#f472b6", "#831843", "#1a1222"] },
  { content: "#121a14", scrollLine: "#86efac", grain: ["#86efac", "#14532d", "#121a14"] },
];

// ─── Slide ────────────────────────────────────────────────────────────────────

interface SlideProps {
  project: ProjectsProps["projects"][number];
  index: number;
  total: number;
  sectionId: string;
}

function Slide({ project, index, total, sectionId }: SlideProps) {
  const colors = SLIDE_COLORS[index % SLIDE_COLORS.length];
  const isLast = index === total - 1;
  const currentId = `${sectionId}-slide-${index}`;
  const nextId = `${sectionId}-slide-${index + 1}`;
  const imageOnRight = index % 2 === 0;
  const accentColor = colors.scrollLine;

  const contentPanel = (
    <div className="relative z-10 shrink-0 w-full md:w-[42%]" style={{ minHeight: "100%" }}>
      <div
        className="projects-col-content relative flex flex-col justify-end h-full px-10 pb-16 pt-10"
        style={{ backgroundColor: colors.content }}
      >
        {/* Accent top border */}
        <div
          className="absolute top-0 left-0 w-full h-[2px]"
          style={{ backgroundColor: accentColor, opacity: 0.4 }}
        />

        {/* Slide counter */}
        <span
          className="projects-col-txt mb-4 text-xs tracking-[0.3em] uppercase page-specific-font"
          style={{ color: accentColor, opacity: 0.7 }}
        >
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>

        {/* Title — each word masked so lines slide up from fully hidden */}
        <h2
          className="projects-col-title m-0 mb-6 leading-none text-white page-specific-font-mag"
          style={{
            fontSize: "clamp(2.2rem, 6vw, 6rem)",
            letterSpacing: "-0.04em",
          }}
        >
          {(project.title ?? `Project ${index + 1}`).split(" ").map((word, wi) => (
            <span
              key={wi}
              className="projects-line-outer block overflow-hidden"
              style={{ marginTop: wi > 0 ? "-0.1em" : 0 }}
            >
              <span className="projects-line-inner block translate-y-full">{word}</span>
            </span>
          ))}
        </h2>

        {/* Description */}
        {project.description && (
          <p
            className="projects-col-txt mb-8 text-sm leading-relaxed page-specific-font"
            style={{ color: "rgba(255,255,255,0.55)", maxWidth: "32ch" }}
          >
            {project.description}
          </p>
        )}

        {/* Categories */}
        {project.categories && project.categories.length > 0 && (
          <div className="projects-col-txt flex flex-wrap gap-2 mb-8">
            {project.categories.map((cat) => (
              <span
                key={cat}
                className="text-[10px] tracking-widest uppercase px-2 py-1 rounded page-specific-font"
                style={{
                  border: `1px solid ${accentColor}`,
                  color: accentColor,
                  opacity: 0.8,
                }}
              >
                {cat}
              </span>
            ))}
          </div>
        )}

        {/* Scroll-to-next indicator */}
        {!isLast && (
          <a
            href={`#${nextId}`}
            className="projects-scroll-link absolute hidden md:flex flex-col items-center justify-end gap-2 pb-3 page-specific-font"
            style={{
              right: imageOnRight ? -56 : "auto",
              left: imageOnRight ? "auto" : -56,
              bottom: "3.5vw",
              width: 112,
              height: 112,
              backgroundColor: "#171717",
              border: `1px solid ${accentColor}44`,
              zIndex: 20,
            }}
            aria-label="Next slide"
          >
            <div
              className="projects-scroll-line absolute w-px top-0"
              style={{
                left: "50%",
                height: "55%",
                backgroundColor: accentColor,
                opacity: 0.7,
              }}
            />
            <span
              className="text-[9px] font-mono tracking-[0.2em] uppercase z-10"
              style={{ color: accentColor, opacity: 0.8 }}
            >
              Next
            </span>
          </a>
        )}
      </div>
    </div>
  );

  const imagePanel = (
    <div className="relative flex-1 overflow-hidden bg-[#0d0d0d]">
      {/* Parallax background */}
      <div
        className="projects-img-wrap absolute left-0 w-full"
        style={{ height: "160vh", top: "-30vh" }}
      >
        <Grainient
          color1={colors.grain[0]}
          color2={colors.grain[1]}
          color3={colors.grain[2]}
          timeSpeed={1.5}
          warpStrength={1}
          className="w-full h-full"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.55)" }} />
      </div>

      {/* Dashboard screenshot — centred overlay */}
      <div className="absolute inset-0 z-10 flex items-center justify-center p-8 md:p-12">
        <img
          src={project.image}
          alt={project.title ?? `Project ${index + 1} dashboard`}
          className="max-w-full max-h-full object-contain"
          style={{
            borderRadius: "0.375rem",
            boxShadow: "0 8px 48px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.06)",
          }}
        />
      </div>
    </div>
  );

  return (
    <div
      className="projects-slide flex items-stretch overflow-hidden relative"
      id={currentId}
      style={{
        backgroundColor: "#171717",
        minHeight: "100vh",
        flexDirection: imageOnRight ? "row" : "row-reverse",
      }}
    >
      {contentPanel}
      {imagePanel}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function Projects({ projects }: ProjectsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionId = useRef(`proj-${Math.random().toString(36).slice(2, 7)}`).current;
  const slideIdRef = useRef(0);
  const cleanupRef = useRef<(() => void)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const slides = container.querySelectorAll<HTMLElement>(".projects-slide");
    const scrollLinks = container.querySelectorAll<HTMLElement>(".projects-scroll-link");

    gsap.set(container, { autoAlpha: 1 });

    // ── Snap ─────────────────────────────────────────────────────────────────
    // A single ScrollTrigger on the whole container. snapTo receives the
    // current scroll progress (0–1) and returns the nearest slide's progress
    // value, so only one snap fires per gesture — no double-jumping.
    ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "bottom bottom",
      snap: {
        snapTo: (progress) => {
          const n = slides.length;
          if (n <= 1) return 0;
          // Each slide sits at an evenly-spaced progress position
          const positions = Array.from({ length: n }, (_, i) => i / (n - 1));
          // Return whichever position is closest to where the user stopped
          return positions.reduce((nearest, pos) =>
            Math.abs(pos - progress) < Math.abs(nearest - progress) ? pos : nearest
          );
        },
        duration: { min: 0.4, max: 0.9 },
        delay: 0.1, // wait until the user clearly stops scrolling
        ease: "power2.inOut",
      },
    });

    // ── Slide entrance animations ────────────────────────────────────────────
    slides.forEach((slide) => {
      const lineInners = slide.querySelectorAll<HTMLElement>(".projects-line-inner");
      const colTxts = slide.querySelectorAll<HTMLElement>(".projects-col-txt");
      const scrollLink = slide.querySelectorAll<HTMLElement>(".projects-scroll-link");

      gsap.set(lineInners, { y: "110%", opacity: 1 });
      gsap.set(colTxts, { opacity: 0, y: 20 });
      gsap.set(scrollLink, { opacity: 0, y: 40 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: slide,
          start: "top 60%",
        },
      });

      tl.to(lineInners, {
        y: "0%",
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.08,
      })
        .to(colTxts, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.06 }, 0.3)
        .to(scrollLink, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, 0.6);
    });

    // ── Parallax background ──────────────────────────────────────────────────
    slides.forEach((slide) => {
      const imgWraps = slide.querySelectorAll<HTMLElement>(".projects-img-wrap");
      gsap.fromTo(
        imgWraps,
        { y: "-50vh" },
        {
          y: "50vh",
          ease: "none",
          scrollTrigger: {
            trigger: slide,
            scrub: true,
            start: "top bottom",
            end: "bottom top",
          },
        }
      );
    });

    // ── Scroll-to-next links ─────────────────────────────────────────────────
    scrollLinks.forEach((link) => {
      const line = link.querySelector<HTMLElement>(".projects-scroll-line");
      const href = link.getAttribute("href") ?? "";

      const onClick = (e: Event) => {
        e.preventDefault();
        slideIdRef.current = Math.min(slideIdRef.current + 1, slides.length - 1);
        gsap.to(window, { duration: 2, scrollTo: { y: href }, ease: "power2.inOut" });
      };
      const onOver = () =>
        line &&
        gsap.to(line, {
          scaleY: 1.4,
          transformOrigin: "top center",
          duration: 0.5,
          ease: "power3",
        });
      const onOut = () =>
        line &&
        gsap.to(line, { scaleY: 1, transformOrigin: "top center", duration: 0.5, ease: "power3" });

      link.addEventListener("click", onClick);
      link.addEventListener("mouseover", onOver);
      link.addEventListener("mouseout", onOut);
      cleanupRef.current.push(() => {
        link.removeEventListener("click", onClick);
        link.removeEventListener("mouseover", onOver);
        link.removeEventListener("mouseout", onOut);
      });
    });

    // ── Keyboard navigation ───────────────────────────────────────────────────
    const onKeyDown = (e: KeyboardEvent) => {
      const rect = container.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (slideIdRef.current < slides.length - 1) {
          slideIdRef.current++;
          gsap.to(window, {
            duration: 2,
            scrollTo: { y: `#${sectionId}-slide-${slideIdRef.current}` },
            ease: "power2.inOut",
          });
        }
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (slideIdRef.current > 0) {
          slideIdRef.current--;
          gsap.to(window, {
            duration: 2,
            scrollTo: { y: `#${sectionId}-slide-${slideIdRef.current}` },
            ease: "power2.inOut",
          });
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);

    // ── Cleanup ───────────────────────────────────────────────────────────────
    return () => {
      ScrollTrigger.getAll()
        .filter((t) => container.contains(t.trigger as Node))
        .forEach((t) => t.kill());
      cleanupRef.current.forEach((fn) => fn());
      cleanupRef.current = [];
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [projects, sectionId]);

  return (
    <section className="w-full" aria-label="Projects">
      <div ref={containerRef} style={{ visibility: "hidden" }}>
        {projects.map((project, index) => (
          <Slide
            key={project.id}
            project={project}
            index={index}
            total={projects.length}
            sectionId={sectionId}
          />
        ))}
      </div>
    </section>
  );
}

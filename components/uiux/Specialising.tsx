"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";

export interface SpecialisingItem {
  src: string;
  alt: string;
}

interface SpecialisingProps {
  items?: SpecialisingItem[];
}

// ─── GLSL shaders ─────────────────────────────────────────────────────────────

const vertexShader = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform sampler2D uTexture;
  uniform vec2 uResolution;
  uniform vec2 uImageResolution;
  uniform float uParallax;
  uniform float uUvScale;
  uniform float uShaderMultiplier;

  vec2 coverUv(vec2 uv, vec2 resolution, vec2 imageResolution) {
    vec2 ratio = vec2(
      min((resolution.x / resolution.y) / (imageResolution.x / imageResolution.y), 1.0),
      min((resolution.y / resolution.x) / (imageResolution.y / imageResolution.x), 1.0)
    );
    return vec2(
      uv.x * ratio.x + (1.0 - ratio.x) * 0.5,
      uv.y * ratio.y + (1.0 - ratio.y) * 0.5
    );
  }

  void main() {
    vec2 uv = coverUv(vUv, uResolution, uImageResolution);
    uv.x += uParallax * uShaderMultiplier;
    uv -= 0.5;
    uv *= uUvScale;
    uv += 0.5;
    gl_FragColor = vec4(texture2D(uTexture, uv).rgb, 1.0);
  }
`;

// ─── Defaults ─────────────────────────────────────────────────────────────────

const DEFAULT_ITEMS: SpecialisingItem[] = [
  {
    src: "https://res.cloudinary.com/dxmnledfa/image/upload/v1772694600/Frame_1_x6ngpo.png",
    alt: "UX work",
  },
  {
    src: "https://res.cloudinary.com/dxmnledfa/image/upload/v1772694596/Frame_2_zs1uqa.png",
    alt: "UI work",
  },
  {
    src: "https://res.cloudinary.com/dxmnledfa/image/upload/v1772694619/Frame_3_rvjavl.png",
    alt: "Prototyping",
  },
  {
    src: "https://res.cloudinary.com/dxmnledfa/image/upload/v1772694602/Frame_4_atirlr.png",
    alt: "Wireframing",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function Specialising({ items = DEFAULT_ITEMS }: SpecialisingProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // We render 3 copies of items; each image element needs its own Three plane.
  // tripleItems drives the DOM; planes map 1-to-1 with DOM images.
  const tripleItems = [...items, ...items, ...items];

  useEffect(() => {
    const section = sectionRef.current;
    const wrapper = wrapperRef.current;
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!section || !wrapper || !container || !canvas) return;

    // ── Three.js setup ───────────────────────────────────────────────────────
    let W = window.innerWidth;
    let H = window.innerHeight;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);

    const scene = new THREE.Scene();
    const getFov = (h: number) => 2 * Math.atan(h / 2 / 100) * (180 / Math.PI);
    const camera = new THREE.PerspectiveCamera(getFov(H), W / H, 0.01, 1000);
    camera.position.set(0, 0, 100);

    const geometry = new THREE.PlaneGeometry(1, 1, 32, 32);
    const group = new THREE.Group();
    scene.add(group);

    // ── WebGL planes — one per DOM image (3 × items.length) ─────────────────
    const domImages = Array.from(container.querySelectorAll<HTMLImageElement>(".spec-gl-img"));

    interface Plane {
      mesh: THREE.Mesh;
      mat: THREE.ShaderMaterial;
      el: HTMLImageElement;
    }

    const planes: Plane[] = domImages.map((el, i) => {
      const mat = new THREE.ShaderMaterial({
        uniforms: {
          uTexture: { value: null },
          uResolution: { value: new THREE.Vector2(1, 1) },
          uImageResolution: { value: new THREE.Vector2(1, 1) },
          uParallax: { value: 0.2 },
          uUvScale: { value: 0.85 },
          uShaderMultiplier: { value: 1.2 },
        },
        vertexShader,
        fragmentShader,
      });

      const mesh = new THREE.Mesh(geometry, mat);
      group.add(mesh);

      // All 3 copies share the same texture — load only from the first set
      const srcItem = items[i % items.length];
      new THREE.TextureLoader().load(srcItem.src, (tex) => {
        mat.uniforms.uTexture.value = tex;
        mat.uniforms.uImageResolution.value.set(tex.image.width, tex.image.height);
      });

      return { mesh, mat, el };
    });

    // ── Infinite scroll state ────────────────────────────────────────────────
    const scroll = { current: 0, target: 0, ease: 0.07 };
    let oneSetWidth = 0;

    const measureOneSet = () => {
      const itemH = window.innerHeight * 0.6;
      const itemW = itemH * (4 / 3);
      const gap = 32;
      const pad = 32;
      oneSetWidth = pad + items.length * itemW + (items.length - 1) * gap;
    };

    const setInitialScroll = () => {
      measureOneSet();
      scroll.current = oneSetWidth;
      scroll.target = oneSetWidth;
      container.style.transform = `translateX(${-scroll.current}px)`;
    };

    requestAnimationFrame(setInitialScroll);

    // ── Update each plane ────────────────────────────────────────────────────
    const updatePlane = ({ mesh, mat, el }: Plane) => {
      const b = el.getBoundingClientRect();
      mesh.scale.set(b.width, b.height, 1);
      mat.uniforms.uResolution.value.set(b.width, b.height);
      mesh.position.set(b.left + b.width / 2 - W / 2, -b.top - b.height / 2 + H / 2, 0);
      mat.uniforms.uParallax.value = ((b.left + b.width / 2 - W / 2) / W) * 0.4;
    };

    // ── RAF loop ─────────────────────────────────────────────────────────────
    let rafId = 0;
    let running = true;

    const render = () => {
      if (!running) return;

      scroll.current = gsap.utils.interpolate(scroll.current, scroll.target, scroll.ease);
      if (oneSetWidth > 0) {
        if (scroll.current >= oneSetWidth * 2) {
          scroll.current -= oneSetWidth;
          scroll.target -= oneSetWidth;
        } else if (scroll.current < oneSetWidth) {
          scroll.current += oneSetWidth;
          scroll.target += oneSetWidth;
        }
      }

      container.style.transform = `translateX(${-scroll.current}px)`;

      const sRect = section.getBoundingClientRect();
      const visible = sRect.bottom > 0 && sRect.top < H;
      if (visible) {
        planes.forEach(updatePlane);
        renderer.render(scene, camera);
      }

      rafId = requestAnimationFrame(render);
    };
    render();

    // ── Wheel on wrapper only ─────────────────────────────────────────────────
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
      scroll.target += e.deltaY + e.deltaX;
    };
    wrapper.addEventListener("wheel", onWheel, { passive: false });

    // ── Resize ───────────────────────────────────────────────────────────────
    const onResize = () => {
      W = window.innerWidth;
      H = window.innerHeight;

      camera.aspect = W / H;
      camera.fov = getFov(H);
      camera.updateProjectionMatrix();

      renderer.setSize(W, H);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      measureOneSet(); // recalculate after viewport change
    };
    window.addEventListener("resize", onResize);

    // ── Cleanup ───────────────────────────────────────────────────────────────
    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      wrapper.removeEventListener("wheel", onWheel);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      geometry.dispose();
      planes.forEach((p) => p.mat.dispose());
    };
  }, [items]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section ref={sectionRef} className="relative w-full bg-transparent backdrop-blur-[2px] py-16">
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />

      <div className="relative px-4 md:px-8 pb-8" style={{ zIndex: 2 }}>
        <h2 className="text-4xl md:text-7xl page-specific-font-pp text-white border-b border-gray-700 pb-8">
          Specialising
        </h2>
      </div>

      <div
        ref={wrapperRef}
        className="relative overflow-hidden select-none"
        style={{ zIndex: 2, cursor: "ew-resize" }}
      >
        <div
          ref={containerRef}
          className="flex gap-8 will-change-transform"
          style={{ paddingLeft: "2rem", paddingRight: "2rem" }}
        >
          {/* 3 copies rendered; only the middle one is ever "shown" at rest */}
          {tripleItems.map((item, i) => (
            <picture
              key={i}
              className="shrink-0 block relative"
              style={{ aspectRatio: "4/3", height: "60vh" }}
            >
              <img
                src={item.src}
                alt={item.alt}
                draggable={false}
                className="spec-gl-img absolute inset-0 w-full h-full object-cover"
                style={{ opacity: 0 }}
              />
            </picture>
          ))}
        </div>
      </div>
    </section>
  );
}

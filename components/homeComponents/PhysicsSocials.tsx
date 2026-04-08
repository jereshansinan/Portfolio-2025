import React, { useEffect, useRef } from "react";
import Matter from "matter-js";

const RoundedPhysics: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef(Matter.Engine.create());

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const { Engine, Render, Runner, Composite, Bodies, Mouse, MouseConstraint } = Matter;
    const engine = engineRef.current;
    const world = engine.world;

    let width = containerRef.current.offsetWidth;
    let height = containerRef.current.offsetHeight;

    // 1. Setup Renderer
    const render = Render.create({
      canvas: canvasRef.current,
      engine: engine,
      options: {
        width: width,
        height: height,
        background: "transparent",
        wireframes: false, // Must be false to show images and colors
      },
    });

    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    // 2. Responsive Walls
    let ground = Bodies.rectangle(width / 2, height + 25, width, 50, { isStatic: true });
    let leftWall = Bodies.rectangle(-25, height / 2, 50, height, { isStatic: true });
    let rightWall = Bodies.rectangle(width + 25, height / 2, 50, height, { isStatic: true });
    let ceiling = Bodies.rectangle(width / 2, -25, width, 50, { isStatic: true });

    Composite.add(world, [ground, leftWall, rightWall, ceiling]);

    // 3. Responsive Object Sizing
    // Makes objects larger on desktop, slightly smaller on mobile, but overall MUCH bigger
    const isMobile = width < 768;
    const baseSize = isMobile ? 120 : 200;

    // Helper to configure image sprites
    // Matter.js needs xScale and yScale to stretch/shrink the image to fit the physical body
    const createTexture = (
      imageUrl: string,
      imageSize: number,
      bodyWidth: number,
      bodyHeight: number
    ) => ({
      sprite: {
        texture: imageUrl,
        xScale: bodyWidth / imageSize,
        yScale: bodyHeight / imageSize,
      },
    });

    // 4. Add the Image-Filled Objects
    Composite.add(world, [
      // Block 1 (Square)
      Bodies.rectangle(width * 0.2, 100, baseSize, baseSize, {
        chamfer: { radius: 20 },
        render: createTexture(
          "https://res.cloudinary.com/dxmnledfa/image/upload/q_auto/f_auto/v1775064256/Gemini_Generated_Image_3tywar3tywar3tyw_etbe2k.png",
          2048,
          baseSize,
          baseSize
        ),
      }),

      // Block 3 (Large Square)
      Bodies.rectangle(width * 0.6, 100, baseSize * 1.2, baseSize * 1.2, {
        chamfer: { radius: [70, 10, 70, 10] },
        render: createTexture(
          "https://res.cloudinary.com/dxmnledfa/image/upload/q_auto/f_auto/v1775068405/2_n2m3lu.png",
          668,
          baseSize * 1.2,
          baseSize * 1.2
        ),
      }),

      // Block 4 (Standard Square)
      Bodies.rectangle(width * 0.8, 120, baseSize, baseSize, {
        chamfer: { radius: 20 },
        render: createTexture("https://res.cloudinary.com/dxmnledfa/image/upload/q_auto/f_auto/v1775068417/3_c2afzi.png", 2048, baseSize, baseSize),
      }),
    ]);

    // 5. Mouse Control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: { stiffness: 0.2, render: { visible: false } },
    });
    Composite.add(world, mouseConstraint);
    render.mouse = mouse;

    // 6. Perfect Responsive Resizing
    const handleResize = () => {
      if (!containerRef.current) return;

      const newWidth = containerRef.current.offsetWidth;
      const newHeight = containerRef.current.offsetHeight;

      // Update Canvas
      render.canvas.width = newWidth;
      render.canvas.height = newHeight;
      render.options.width = newWidth;
      render.options.height = newHeight;

      // Calculate scale difference
      const scaleX = newWidth / width;
      const scaleY = newHeight / height;

      // Reposition AND Scale Walls physically so they don't develop gaps
      Matter.Body.setPosition(ground, { x: newWidth / 2, y: newHeight + 25 });
      Matter.Body.scale(ground, scaleX, 1);

      Matter.Body.setPosition(ceiling, { x: newWidth / 2, y: -25 });
      Matter.Body.scale(ceiling, scaleX, 1);

      Matter.Body.setPosition(leftWall, { x: -25, y: newHeight / 2 });
      Matter.Body.scale(leftWall, 1, scaleY);

      Matter.Body.setPosition(rightWall, { x: newWidth + 25, y: newHeight / 2 });
      Matter.Body.scale(rightWall, 1, scaleY);

      width = newWidth;
      height = newHeight;
    };

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(containerRef.current);

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      Engine.clear(engine);
      Composite.clear(world, false);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full absolute inset-0 bg-transparent">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};

export default RoundedPhysics;

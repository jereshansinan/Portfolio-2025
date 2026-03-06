import React from "react";

interface SceneProps {
  background: string | string;
}

const Scene3D: React.FC<SceneProps> = ({ background }) => {
  const isImage =
    typeof background === "string" && /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(background);
  return (
    <div className="w-full h-full relative">
      {/* VIDEO BACKGROUND (Temporary Placeholder) */}
      {isImage ? (
        <img src={background} alt="Background" className="w-full h-full object-cover" />
      ) : (
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src={background} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Optional: Dark overlay to ensure text legibility if the video is too bright */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      {/* // --- 3D SCENE (Commented out for later) ---
      <Canvas camera={{ position: [0, 0, 12], fov: 45 }} gl={{ antialias: true }}>
        // Dark background is necessary for the cutout effect (Black text reveals this background)
        <color attach="background" args={['#0f172a']} />
        
        // High density stars and sparkles to fill the void
        <Stars radius={100} depth={50} count={7000} factor={4} saturation={1} fade speed={1} />
        <Sparkles count={100} scale={12} size={6} speed={0.4} opacity={0.5} color="#fff" />
        
        <ambientLight intensity={1} />
        <spotLight position={[20, 20, 10]} angle={0.15} penumbra={1} intensity={2} color="#ffffff" castShadow />
        <pointLight position={[-10, -10, -10]} intensity={1.5} color="#6366f1" />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#ec4899" />
        
        <Environment preset="city" />
        
        // <AnimatedShapes />
        
        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={0.3}
          enablePan={false}
        />
      </Canvas>
      */}
    </div>
  );
};

export default Scene3D;

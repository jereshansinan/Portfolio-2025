import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  Float,
  Stars,
  Sparkles,
} from "@react-three/drei";
import * as THREE from "three";

// Fix for missing JSX types in current environment
declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      torusKnotGeometry: any;
      meshStandardMaterial: any;
      color: any;
      ambientLight: any;
      spotLight: any;
      pointLight: any;
    }
  }
}

const AnimatedShapes = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const meshRef2 = useRef<THREE.Mesh>(null);
  const meshRef3 = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
    if (meshRef2.current) {
      meshRef2.current.rotation.x -= delta * 0.15;
      meshRef2.current.rotation.y -= delta * 0.2;
    }
    if (meshRef3.current) {
      meshRef3.current.rotation.x += delta * 0.1;
      meshRef3.current.rotation.z += delta * 0.1;
    }
  });

  return (
    <>
      {/* Central massive shape to ensure text overlap */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <mesh ref={meshRef} scale={3.5}>
          <torusKnotGeometry args={[1, 0.3, 100, 16]} />
          <meshStandardMaterial
            color="#4f46e5"
            emissive="#4338ca"
            emissiveIntensity={1}
            roughness={0.1}
            metalness={0.8}
          />
        </mesh>
      </Float>

      {/* Scattered background shapes */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
        <mesh ref={meshRef2} position={[-8, 4, -5]} scale={2}>
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#db2777"
            emissive="#be185d"
            emissiveIntensity={0.8}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={1.2} floatIntensity={1.8}>
        <mesh ref={meshRef3} position={[8, -4, -5]} scale={2.5}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#0d9488"
            emissive="#0f766e"
            emissiveIntensity={0.8}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      </Float>
    </>
  );
};

const Scene3D: React.FC = () => {
  return (
    <div className="w-full h-full relative">
      {/* VIDEO BACKGROUND (Temporary Placeholder) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        {/* Replace '/blackhole.mp4' with your actual video file in the public folder */}
        <source src="/blackhole.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

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

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Box, Icosahedron } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]}>
        <MeshDistortMaterial
          color="#0ea5e9" // BLUE
          distort={0.35}
          speed={2}
          roughness={0.15}
          metalness={0.9}
        />
      </Sphere>
    </Float>
  );
}

function FloatingTorus() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={1}>
      <Torus ref={meshRef} args={[0.6, 0.2, 32, 64]} position={[2.5, 1, -1]}>
        <meshStandardMaterial
          color="#38bdf8" // LIGHT BLUE
          roughness={0.25}
          metalness={1}
          emissive="#0ea5e9"
          emissiveIntensity={0.4}
        />
      </Torus>
    </Float>
  );
}

function FloatingBox() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={1.5} floatIntensity={1.5}>
      <Box ref={meshRef} args={[0.5, 0.5, 0.5]} position={[-2.5, -0.5, -0.5]}>
        <meshStandardMaterial
          color="#1d4ed8" // DEEP BLUE
          roughness={0.2}
          metalness={0.9}
          emissive="#1e3a8a"
          emissiveIntensity={0.3}
        />
      </Box>
    </Float>
  );
}

function FloatingIcosahedron() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <Float speed={2.2} rotationIntensity={1} floatIntensity={2}>
      <Icosahedron ref={meshRef} args={[0.4, 1]} position={[-1.8, 1.5, 0]}>
        <meshStandardMaterial
          color="#60a5fa" // SOFT BLUE
          roughness={0.25}
          metalness={0.8}
          emissive="#3b82f6"
          emissiveIntensity={0.4}
        />
      </Icosahedron>
    </Float>
  );
}

function ParticleField() {
  const count = 120;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#38bdf8"
        transparent
        opacity={0.7}
      />
    </points>
  );
}

export default function ThreeScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>

        {/* LIGHTING (more premium) */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} intensity={0.6} color="#0ea5e9" />

        {/* OBJECTS */}
        <AnimatedSphere />
        <FloatingTorus />
        <FloatingBox />
        <FloatingIcosahedron />
        <ParticleField />

      </Canvas>
    </div>
  );
}
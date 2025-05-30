import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function SpinningCube({ scale = 1 }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y -= delta * 0.4; // left spin
      meshRef.current.rotation.z -= delta * 0.2; // left spin
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} scale={[scale, scale, scale]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#00e676" />
    </mesh>
  );
}

function FixedGrid() {
  return (
    <group>
      {/* Tilted grid, fixed camera */}
      <gridHelper args={[36, 75, '#064e3b', '#065f46']} rotation={[-Math.PI / 2.5, 0, 0]} position={[0, -1.2, 0]} />
    </group>
  );
}

// New: GLTF model loader
export function MyModel({ scale = 1 }) {
    const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/models/tablLOGO_3D.gltf');

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y -= delta * 0.4;
      groupRef.current.rotation.z -= delta * 0.2;
    }
  });

  return (
    <group ref={groupRef} scale={[scale, scale, scale]}>
      <primitive object={scene} position={[0, 0, 0]} />
    </group>
  );
}

export default function AnimatedCube({ scale = 1, useModel = false }) {
  return (
    <div style={{ width: 900, height: 300, background: 'transparent', position: 'relative' }}>
      {/* Background grid canvas (fixed, non-interactive) */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
        <Canvas style={{ background: 'transparent', width: '100%', height: '100%' }} camera={{ position: [0, -3, -3], fov: 60 }}>
          <ambientLight intensity={0.7} />
          <FixedGrid />
        </Canvas>
      </div>
      {/* Foreground model/cube canvas (interactive) */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 2 }}>
        <Canvas style={{ background: 'transparent', width: '100%', height: '100%' }} camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.2} />
          <directionalLight position={[5, 5, 5]} intensity={0.7} castShadow />
          <directionalLight position={[-5, -5, -5]} intensity={0.3} color="#b9fbc0" />
          {useModel ? <MyModel scale={scale} /> : <SpinningCube scale={scale} />}
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
    </div>
  );
} 
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function Gear({ radius = 1, teeth = 12 }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Symmetric, even gear teeth with center hole and cutouts
  const gearGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    const rootRadius = radius * 0.7;
    const tipRadius = radius;
    const toothAngle = (Math.PI * 2) / teeth;
    const halfTooth = toothAngle / 2;
    const flankFraction = 0.28; // how wide the tooth tip is (as a fraction of toothAngle)

    // Start at the root of the first tooth
    shape.moveTo(
      rootRadius * Math.cos(0),
      rootRadius * Math.sin(0)
    );

    for (let i = 0; i < teeth; i++) {
      const angle = i * toothAngle;
      // Left root to left tip
      const leftTipAngle = angle + halfTooth * (1 - flankFraction);
      shape.lineTo(
        tipRadius * Math.cos(leftTipAngle),
        tipRadius * Math.sin(leftTipAngle)
      );
      // Left tip to right tip
      const rightTipAngle = angle + halfTooth * (1 + flankFraction);
      shape.lineTo(
        tipRadius * Math.cos(rightTipAngle),
        tipRadius * Math.sin(rightTipAngle)
      );
      // Right tip to right root
      const nextRootAngle = angle + toothAngle;
      shape.lineTo(
        rootRadius * Math.cos(nextRootAngle),
        rootRadius * Math.sin(nextRootAngle)
      );
    }

    shape.closePath();

    // Add center hole
    const holeRadius = radius * 0.25;
    const holePath = new THREE.Path();
    holePath.absarc(0, 0, holeRadius, 0, Math.PI * 2, false);
    shape.holes.push(holePath);

    // Add radial cutouts (rectangular slots)
    const cutoutInner = holeRadius * 1.15; // just outside the center hole
    const cutoutOuter = rootRadius * 0.98; // just inside the root of the teeth
    const cutoutWidthAngle = toothAngle * 0.32; // width of cutout as angle
    for (let i = 0; i < teeth; i++) {
      const angle = i * toothAngle + toothAngle / 2; // center between teeth
      const cutoutPath = new THREE.Path();
      // Four corners of the rectangle
      const a1 = angle - cutoutWidthAngle / 2;
      const a2 = angle + cutoutWidthAngle / 2;
      cutoutPath.moveTo(cutoutInner * Math.cos(a1), cutoutInner * Math.sin(a1));
      cutoutPath.lineTo(cutoutOuter * Math.cos(a1), cutoutOuter * Math.sin(a1));
      cutoutPath.lineTo(cutoutOuter * Math.cos(a2), cutoutOuter * Math.sin(a2));
      cutoutPath.lineTo(cutoutInner * Math.cos(a2), cutoutInner * Math.sin(a2));
      cutoutPath.closePath();
      shape.holes.push(cutoutPath);
    }

    // Extrude the shape
    const extrudeSettings = {
      steps: 1,
      depth: radius * 0.3,
      bevelEnabled: true,
      bevelThickness: radius * 0.05,
      bevelSize: radius * 0.05,
      bevelSegments: 3
    };

    return new THREE.ExtrudeGeometry(shape, extrudeSettings);
  }, [radius, teeth]);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y -= delta * 0.4;
    }
  });

  return (
    <mesh ref={meshRef} geometry={gearGeometry}>
      <meshStandardMaterial 
        color="#00e676"
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
}

function FixedGrid() {
  return (
    <group>
      <gridHelper args={[36, 75, '#b9b9b9', '#e0e0e0']} rotation={[-Math.PI / 2.5, 0, 0]} position={[0, -1.2, 0]} />
    </group>
  );
}

export default function AnimatedGear({ radius = 1, teeth = 12 }) {
  return (
    <div style={{ width: 900, height: 300, background: 'transparent', position: 'relative' }}>
      {/* Background grid canvas */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
        <Canvas style={{ background: 'transparent', width: '100%', height: '100%' }} camera={{ position: [0, -3, -3], fov: 60 }}>
          <ambientLight intensity={0.7} />
          <FixedGrid />
        </Canvas>
      </div>
      {/* Foreground gear canvas */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 2 }}>
        <Canvas style={{ background: 'transparent', width: '100%', height: '100%' }} camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 5, 5]} intensity={0.7} castShadow />
          <directionalLight position={[-5, -5, -5]} intensity={0.3} color="#b9fbc0" />
          <Gear radius={radius} teeth={teeth} />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
    </div>
  );
} 
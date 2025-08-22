import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface Floating3DObjectProps {
  position?: [number, number, number];
  color?: string;
  size?: number;
}

export const Floating3DObject: React.FC<Floating3DObjectProps> = ({
  position = [0, 0, 0],
  color = '#3b82f6',
  size = 1
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <icosahedronGeometry args={[size, 2]} />
      <meshStandardMaterial
        color={color}
        wireframe={false}
        transparent={true}
        opacity={0.7}
        roughness={0.5}
        metalness={0.5}
      />
    </mesh>
  );
};
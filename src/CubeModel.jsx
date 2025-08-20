import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function CubeModel() {
  return (
    <div style={{ width: "100%", height: "80vh" }}>
      <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
        {/* Lumières */}
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Cube rouge */}
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="red" />
        </mesh>

        {/* Contrôles pour rotation et zoom */}
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}

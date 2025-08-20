/*import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html, Center } from "@react-three/drei";

function Skeleton() {
  const { scene } = useGLTF("/models/skeleton.glb");

  // Ajuster la taille, position et rotation
  scene.scale.set(0.1, 0.1, 0.1);       
  scene.position.set(0, 0, 0);         
  scene.rotation.set(0, Math.PI, 0);    

  return <primitive object={scene} />;
}

export default function SkeletonModel() {
  return (
    <Canvas camera={{ position: [0, 1, 3], fov: 50 }}>
      {}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <directionalLight position={[-5, 5, 5]} intensity={0.5} />

      {}
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />

      {}
      <Center>
        <Skeleton />
      </Center>

      {}
      <Html center>
        <div style={{ color: "white" }}>Chargement du squelette...</div>
      </Html>
    </Canvas>
  );
}
*/
import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model({ modelPath }) {
  const { scene } = useGLTF(modelPath);
  const [rotation, setRotation] = useState([0, 0, 0]);

  // Interaction au clic : tourner légèrement
  const handleClick = () => {
    setRotation([rotation[0], rotation[1] + 0.5, rotation[2]]);
  };

  return (
    <primitive 
      object={scene} 
      scale={2} 
      position={[0, -1, 0]} 
      rotation={rotation}
      onClick={handleClick}
    />
  );
}

export default function SkeletonModel({ modelPath }) {
  return (
    <div style={{ width: "100%", height: "80vh" }}>
      <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <Suspense fallback={<span>Chargement du modèle...</span>}>
          <Model modelPath={modelPath} />
        </Suspense>

        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}

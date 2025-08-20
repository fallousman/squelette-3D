//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
/*
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

*/
/*import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function App() {
  return (
    <Canvas style={{ height: "100vh", width: "100vw" }}>
      {}
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      {}
      <mesh rotation={[0.4, 0.2, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>

      {}
      <OrbitControls />
    </Canvas>
  );
}
*/

/*import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

// Composant pour charger le modèle
function SkeletonModel() {
  const { scene } = useGLTF("/models/skeleton.glb");
  return <primitive object={scene} scale={0.02} />;
}

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [0, 1, 3], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <SkeletonModel />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

*/

/*import React, { useState } from "react";
//import ModelViewer from "./ModelViewer";
// Après
import SkeletonModel from "./SkeletonModel";
// ...

import "./App.css";

function App() {
  const [selectedModel, setSelectedModel] = useState("skeleton");

  const models = {
    skeleton: { 
      path: "models/skeleton.glb", 
      name: "Squelette",
      description: "Le squelette humain est la charpente du corps, constitué de 206 os qui assurent le soutien, la protection des organes et la mobilité."
    },
    body: { 
      path: "models/body.glb", 
      name: "Corps humain",
      description: "Le corps humain est un système complexe formé de différents organes, tissus et cellules travaillant ensemble pour maintenir la vie."
    },
    heart: { 
      path: "models/heart.glb", 
      name: "Cœur",
      description: "Le cœur est un organe musculaire qui pompe le sang dans tout le corps, assurant l'apport d'oxygène et de nutriments aux tissus."
    },
    organ: { 
      path: "models/organ.glb", 
      name: "Autre Cœur",
      description: "Une autre représentation du cœur humain, utile pour visualiser sa structure interne et son rôle vital dans la circulation sanguine."
    },
  };

  return (
    <div className="App">
      <h1>Exploration du Corps Humain en 3D</h1>

      {}
      <div style={{ marginBottom: "20px" }}>
        {Object.keys(models).map((key) => (
          <button
            key={key}
            onClick={() => setSelectedModel(key)}
            style={{
              margin: "5px",
              padding: "10px 15px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              cursor: "pointer",
              backgroundColor: selectedModel === key ? "#4cafef" : "#fff",
              color: selectedModel === key ? "#fff" : "#000",
            }}
          >
            {models[key].name}
          </button>
        ))}
      </div>

      {} //Affichage du modèle 3D 
      <SkeletonModel modelPath={models[selectedModel].path} />

      {} //Texte descriptif 
      <div style={{ marginTop: "20px", padding: "10px", maxWidth: "600px", margin: "auto" }}>
        <h2>{models[selectedModel].name}</h2>
        <p>{models[selectedModel].description}</p>
      </div>
    </div>
  );
}

export default App;
*/
import React from "react";
import CubeModel from "./CubeModel";

function App() {
  return (
    <div className="App">
      <h1>Test 3D Cube</h1>
      <CubeModel />
    </div>
  );
}

export default App;



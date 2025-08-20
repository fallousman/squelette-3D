// ModelViewer.jsx
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

function ModelViewer({ modelPath }) {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;

    // Création de la scène
    const scene = new THREE.Scene();

    // Caméra
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // Lumière
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);

    // Chargement du modèle
    const base = import.meta.env.BASE_URL;
    const loader = new GLTFLoader();
    loader.load(
      `${base}${modelPath.replace(/^\/+/, "")}`, // enlève le slash initial
      (gltf) => {
        scene.add(gltf.scene);
      },
      undefined,
      (error) => console.error("Erreur de chargement :", error)
    );

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Nettoyage
    return () => {
      container.removeChild(renderer.domElement);
    };
  }, [modelPath]);

  return <div ref={containerRef} style={{ width: "100%", height: "60vh" }} />;
}

export default ModelViewer;

# Exploration du Corps Humain en 3D

## Description

Cette application permet de visualiser différents modèles 3D du corps humain, y compris le squelette, le corps entier et le cœur. L'utilisateur peut sélectionner le modèle via des boutons et interagir avec le modèle en 3D (rotation et zoom).

## Technologies utilisées

- **React.js** : structure de l'application et gestion de l'état.
- **Vite** : développement rapide et build optimisée.
- **React Three Fiber (`@react-three/fiber`)** : intégration de Three.js dans React.
- **Drei (`@react-three/drei`)** : simplification du chargement de modèles GLTF et ajout de contrôles 3D.
- **GLTF / GLB** : format 3D utilisé pour les modèles humains.
- **CSS** : style des boutons et de l'interface.
- **GitHub Pages** : déploiement en ligne et accès direct via un lien.

## Structure du projet

public/
models/
skeleton.glb
body.glb
heart.glb
organ.glb
src/
App.jsx
SkeletonModel.jsx
index.css


## Fonctionnalités

- Sélection du modèle 3D via boutons.
- Affichage du modèle 3D avec rotation et zoom interactifs.
- Description textuelle du modèle affiché.
- Chargement optimisé des modèles avec `useGLTF.preload`.

## Déploiement

- **Local** : `npm run dev` pour lancer le serveur local.
- **GitHub Pages** : `npm run build` puis publier le dossier `dist/` sur la branche `gh-pages`.
- Le lien GitHub Pages est public et peut être partagé : `https://username.github.io/nom-du-repo/`

## Auteur

- Ousmane FALL

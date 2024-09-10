import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Model3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    // Definir o background da cena para branco
    scene.background = new THREE.Color(0xffffff);

    // Estilizando o renderizador para ocupar toda a altura da tela
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Carregar o modelo 3D (substitua './assets/nissan.glb' pelo caminho correto)
    const loader = new GLTFLoader();
    loader.load('/assets/nissan.glb', (glb) => {
      scene.add(glb.scene);
      glb.scene.position.set(0, 1, 0); // Ajuste a posição do modelo se necessário
    });

    // Luz para iluminar o modelo
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 1, 1).normalize();
    scene.add(light);

    camera.position.z = 5;

    // Adicionando os controles de rotação
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Suaviza a rotação
    controls.dampingFactor = 0.1;
    controls.autoRotate = true; // Se quiser rotação automática, coloque true
    controls.enableZoom = true;  // Permite zoom

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update(); // Atualiza os controles a cada frame
      renderer.render(scene, camera);
    };

    animate();

    // Função para lidar com redimensionamento da janela
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      // Verifique se mountRef.current está definido antes de tentar remover o renderizador
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100vh', backgroundColor: 'white', overflow: 'hidden' }} />;
};

const Home = () => {
  return (
    <div style={{ width: '100%', height: '85vh', margin: 0, padding: 0 }}>
      <Model3D />
    </div>
  );
};

export default Home;

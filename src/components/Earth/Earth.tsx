"use client";

import React, { useEffect } from "react";
import * as THREE from "three";

const W_WIDTH: number = window.innerWidth; // ブラウザの横サイズ
const W_HEIGHT: number = window.innerHeight; // ブラウザの縦サイズ
const W_ASPECT: number = window.innerWidth / window.innerHeight; // アスペクト比
const W_RATIO: number = window.devicePixelRatio; // ドット比
let camera: THREE.PerspectiveCamera,
  scene: THREE.Scene,
  renderer: THREE.WebGLRenderer,
  earth: THREE.Mesh;

const EarthGlobe: React.FC = () => {
  useEffect(() => {
    // カメラを作る
    camera = new THREE.PerspectiveCamera(50, W_ASPECT, 1, 1000);
    camera.position.set(0, 0, 600);
    // シーンを作る
    scene = new THREE.Scene();
    // ライトを作る1
    let dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(5, 3, 5); // 光の向き
    scene.add(dirLight);
    // ライトを作る2
    let ambLight = new THREE.AmbientLight(0x333333);
    scene.add(ambLight);
    // レンダラーを作る
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(W_RATIO); // ピクセル比
    renderer.setSize(W_WIDTH, W_HEIGHT);
    // HTMLに配置する
    const div = document.getElementById("three");
    if (div) {
      div.appendChild(renderer.domElement);
      // 地球を配置する
      // 1, テクスチャ
      const txLoader = new THREE.TextureLoader();
      const normalMap = txLoader.load("/img/earth/earth_tx.png");
      // 2, ジオメトリ
      const geometry = new THREE.SphereGeometry(100, 30, 30);
      // 3, マテリアル
      const material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        map: normalMap,
      });
      // 4, メッシュ
      earth = new THREE.Mesh(geometry, material);
      scene.add(earth);
      // アニメーションの開始
      animate();
    } else {
      console.error("Element with id 'three' not found.");
    }

    return () => {
      // Clean up on component unmount
      if (scene && earth) {
        scene.remove(earth);
      }
    };
  }, []);

  function animate() {
    earth.rotation.y += 0.002; // 5, 地球を回転させる
    renderer.render(scene, camera); // レンダリング
    requestAnimationFrame(animate); // 更新
  }

  return <div id="three" />;
};

export default EarthGlobe;

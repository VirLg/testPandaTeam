import React, { useEffect, useRef, useState } from 'react';
import { Suspense } from 'react';
import { OrbitControls, SpotLight, Plane } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';
// Class
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//   45,
//   window.innerWidth,
//   window.innerHeight
// );
// const render = new THREE.WebGLRenderer({ antialtas: true });
// render.setSize(window.innerWidth, window.innerHeight);
// const controls = new OrbitControls(camera, render.domElement);
// const onWindowResize = function () {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   render.setSize(window.innerWidth, window.innerHeight);
// };

// init camera
// camera.position.z = 30;
// camera.position.x = 3;
// camera.position.y = 6;
// camera.lookAt(2, 0, -20);
// ********Class

//*************************** */
const Box = ({ position }) => {
  const {
    scene,
    camera,
    gl: { domElement },
  } = useThree();
  useEffect(() => {
    scene.background = new THREE.Color(0xf1f1f1);
    scene.fog = new THREE.Fog(0xf1f1f1, 20, 100);
    camera.fov = 75;
  }, [camera, scene]);
  const spotCtl = {
    visible: false,
    position: {
      x: 3,
      y: 2.5,
      z: 1,
    },
    castShadow: true,
  };
  return (
    <>
      <OrbitControls
        minAzimuthAngle={[Math.PI / 300, Math.PI / 300, -Math.PI / 300]}
        maxAzimuthAngle={[Math.PI / 300, 0, -Math.PI / 300]}
        minPolarAngle={[Math.PI / 3]}
        maxPolarAngle={[Math.PI / 3]}
      />
      <SpotLight
        // penumbra={penumbra}
        position={[4, 3, 2]}
        intensity={1}
        angle={0.8}
        color={'red'}
        castShadow={spotCtl.castShadow}
      />

      <mesh position={position}>
        <boxGeometry />
      </mesh>
    </>
  );
};

export default Box;

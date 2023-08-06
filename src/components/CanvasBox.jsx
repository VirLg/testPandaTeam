import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  OrbitControls,
  Preload,
  useGLTF,
  Stage,
  Plane,
} from '@react-three/drei';
import Box from './boxes/Box';
import PlaneBox from './plane/PlaneBox';
import { Physics } from '@react-three/cannon';

const CanvasBox = ({ children }) => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [0.2, 0.1, 0.3], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Physics>
        <hemisphereLight intensity={0.15} groundColor="black" />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight intensity={1} castShadow shadow-mapSize={1024} />
        <OrbitControls
          enableZoom={true}
          maxPolarAngle={Math.PI / 3}
          minPolarAngle={Math.PI / 3}
          dampingFactor={0.3}
        />
        <Stage contactShadow={{ resolution: 1024, scale: 1000 }}>
          {children}
        </Stage>
        <Preload all />
        <Box position={[0, 1.25, 2.5]} />
        <Box position={[-1, 1.25, 10]} />
        <PlaneBox />
      </Physics>
    </Canvas>
  );
};

export default CanvasBox;

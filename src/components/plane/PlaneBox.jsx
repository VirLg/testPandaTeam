import React from 'react';
import { usePlane } from '@react-three/cannon';
import { useFrame } from '@react-three/fiber';
const PlaneBox = () => {
  // useFrame;
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }));

  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry
        args={[100, 100]}
        position={[0, 0, 0]}
        receiveShadow
        castShadow
      />
      <meshPhongMaterial color="red" attach="material" />
    </mesh>
  );
};

export default PlaneBox;

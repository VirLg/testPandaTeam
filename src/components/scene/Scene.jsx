import { useEffect, useRef, useState } from 'react';
import { Suspense } from 'react';
import { extend, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, SpotLight, Plane, Box } from '@react-three/drei';
import * as THREE from 'three';
import { Plane } from '@react-three/drei';
import React from 'react';

const Scene = ({ newMaterialOpt }) => {
  // Set receiveShadow on any mesh that should be in shadow,
  // and castShadow on any mesh that should create a shadow.
  return (
    <>
      <Box castShadow receiveShadow ref={boxRef} position={[0, 0.5, 0]}>
        <meshStandardMaterial attach="material" color="white" />
      </Box>
      <Plane
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1, 0]}
        args={[1000, 1000]}
      >
        <meshStandardMaterial attach="material" color="white" />
      </Plane>
    </>
  );
};

export default Scene;

// const Scene = ({ newMaterialOpt }) => {
//   // const ref = useRef();
//   // const [count, setCount] = useState(0);

//   // useFrame((_, delta) => {
//   //   ref.current.rotation.x += delta;
//   //   ref.current.rotation.y += 0.5 * delta;
//   // });
//   return (
//     <>
//       <OrbitControls
//         minAzimuthAngle={[Math.PI / 300, Math.PI / 300, -Math.PI / 300]}
//         maxAzimuthAngle={[Math.PI / 300, 0, -Math.PI / 300]}
//         minPolarAngle={[Math.PI / 3]}
//         maxPolarAngle={[Math.PI / 3]}
//       />
//       <Plane
//         receiveShadow
//         rotation={[-Math.PI / 2, 0, 0]}
//         args={[100, 100]}
//         position={[0, -1, 0]}
//         color={'blue'}
//       >
//         <meshPhongMaterial color={'grey'} />
//       </Plane>
//       <SpotLight
//         // penumbra={penumbra}
//         position={[2, 2, 2]}
//         intensity={0.1}
//         angle={0.8}
//         color={'red'}
//       />
//       <Suspense fallback={null}>
//         <mesh>
//           <boxGeometry args={[2, 2, 2]} />
//         </mesh>
//       </Suspense>
//     </>
//   );
// };
// export default Scene;

import { Canvas } from '@react-three/fiber';
import Scene from './scene/Scene';
import Box from './boxes/Box';
import { Plane } from '@react-three/drei';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Canvas camera={{ position: [4, 4, 1.5] }} shadows>
        <directionalLight
          intensity={0.5}
          castShadow // highlight-line
          shadow-mapSize-height={512}
          shadow-mapSize-width={512}
        />

        <Scene />
        <Box castShadow position={[1, 0, 0]} />

        <Box position={[-5, 0, 4]} />
      </Canvas>
    </div>
  );
};

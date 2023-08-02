import { Canvas } from '@react-three/fiber';
import Scene from './scene/Scene';

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
      <Canvas>
        <mesh>
          <Scene />
        </mesh>
      </Canvas>
    </div>
  );
};

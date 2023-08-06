import { Canvas } from '@react-three/fiber';
// import Scene from './scene/Scene';
import Box from './boxes/Box';
// import { Plane } from '@react-three/drei';
import { OrbitControls, Stage } from '@react-three/drei';
// import Layout from './Layout';
import CanvasBox from './CanvasBox';
import PlaneBox from './plane/PlaneBox';
export const App = ({ children }) => {
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
      id="canvas-container"
    >
      <CanvasBox />

      <>hellp</>
      {/* <Overlay /> */}
    </div>
  );
};

{
  /* <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [4, 4, 1.5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <OrbitControls
          maxPolarAngle={Math.PI / 3}
          minPolarAngle={Math.PI / 3}
        />
        <directionalLight
          intensity={5}
          castShadow
          highlightLine
          shadow-mapSize-height={512}
          shadow-mapSize-width={512}
        />
        <Stage contactShadow={{ resolution: 1024, scale: 1000 }}>
          {children}
        </Stage>
        <Scene />
        <Box castShadow position={[1, 0, 0]} />

        <Box position={[-5, 0, 4]} />
      </Canvas>
    */
}

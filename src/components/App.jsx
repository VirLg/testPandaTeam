import { Canvas } from '@react-three/fiber';
// import Sphere from './sphere/Sphere';
// import PlaneSphere from './plane/PlaneSphere';
import { OrbitControls } from '@react-three/drei';
import { Suspense, lazy } from 'react';
import Loader from './loader/Loader';
// import Scene from './scene/Scene';
import { CircularProgress } from '@mui/material';
// import './App.css';
const Share = lazy(() => import('./sphere/Sphere'));
const PlaneShare = lazy(() => import('./plane/PlaneSphere'));

function App() {
  return (
    <div className="App">
      <Canvas
        camera={{
          fov: 30,
          position: [0, 10, 13],
        }}
        shadows
      >
        <Suspense fallback={<Loader />}>
          <Share position={[-4, -1.4, -0.8]} />
          <Share position={[2, -1.4, 2]} />
          <PlaneShare />
          <ambientLight intensity={0.1} groundColor="black" />
          <directionalLight
            angle={0.12}
            penumbra={1}
            position={[-7, 5, 3]}
            intensity={0.8}
            castShadow
          />
          <OrbitControls
            enableZoom={true}
            maxPolarAngle={Math.PI / 3}
            minPolarAngle={Math.PI / 3}
            // dampingFactor={0.3}
            position={[-2, 2, 2]}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;

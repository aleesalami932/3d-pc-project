import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  return (
    <mesh>
       <hemisphereLight intensity={2.15} groundColor="blue" />
     <spotLight
       position={[-20, 50, 10]}
       angle={0.12}
       penumbra={1}
       intensity={1}
       castShadow
       shadow-mapSize={1024}
     />
     <pointLight intensity={1} />
      <primitive
        object={earth.scene}
        scale={2.5}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};
const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [-4, 3, 6], fov: 45, near: 0.1, far: 200 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate={true}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;

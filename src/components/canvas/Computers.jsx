import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  console.log("kentrell");
  const computer = useGLTF("./foxs_islands/scene.gltf");

  console.log("jyf");

  return (
    <mesh>
      <hemisphereLight intensity={0.1}
      groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        // position={[30, 0, -10]}
        position={[30, 0, -50]}

        angle={0.2}
        penumbra={1}
        intensity={0.4}
        castShadow
        shadow-mapSize={1024}
        shadow-mapSize-width={512} // Reduced size for optimization
        shadow-mapSize-height={512}
        />
      <primitive
        object={computer.scene}
        // scale={isMobile ? 0.28 : 0.52}
        // scale={isMobile ? 0.04 : 0.09}

        // position={isMobile ? [-1.5, -2, 0.6] : [0, -3, 0]}
        // rotation={isMobile ? [0.3, 1, -0.3] : [0, 1.2, -0.05]}
        scale={isMobile ? 0.06 : 0.09}
        position={isMobile ? [0, 0, 0] : [0, -3, 0]}
        rotation={isMobile ? [0.3, 1.0, -0.2] : [0, 1.2, -0.05]}
      />
       <hemisphereLight intensity={0.9} groundColor='black' /> 
       {/* above is the light for the surrownding */}
      <spotLight
        // position={[-20, 50, 10]}
        position={[-20, 50, -50]}

        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        // scale={isMobile ? 0.7 : 0.75}
        // scale={isMobile ? 0.1 : 0.18}

        // position={isMobile ? [-2, -3, -2.2] : [0, -3.25, -1.5]}
        // rotation={[-0.01, -0.2, -0.1]}

        scale={isMobile ? 0.12 : 0.18}
        position={isMobile ? [0, -3, 0] : [0, -3, 0]}
        rotation={[0, -3, 0]} 
      />
      
    </mesh>
    // <div>hey</div>
  );
};

const ComputersCanvas = () => {
  console.log("kenneth");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full z-0">
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* // erorr occuring here */}
      <Suspense fallback={<CanvasLoader />}>  
        <OrbitControls
        autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
    </div>
  );
};

export default ComputersCanvas;
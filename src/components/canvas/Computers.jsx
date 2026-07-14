import { Suspense, useEffect, useState, useRef, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ scale, position, setControlsEnabled }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
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
        object={computer.scene}
        scale={scale}
        position={position}
        rotation={[-0.01, -0.2, -0.1]}
        onPointerDown={(e) => {
          e.stopPropagation();
          setControlsEnabled(true);
          document.body.style.cursor = "grabbing";
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          document.body.style.cursor = "grab";
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          document.body.style.cursor = "auto";
        }}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [isTabVisible, setIsTabVisible] = useState(true);
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  const [controlsEnabled, setControlsEnabled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    const handlePointerUp = () => {
      setControlsEnabled(false);
      document.body.style.cursor = "auto";
    };
    window.addEventListener("pointerup", handlePointerUp);

    // Setup intersection observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: "200px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Setup visibility change listener
    const handleVisibility = () => {
      setIsTabVisible(document.visibilityState === "visible");
    };
    document.addEventListener("visibilitychange", handleVisibility);

    // Remove listeners when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointerup", handlePointerUp);
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  const { scale, position } = useMemo(() => {
    if (windowWidth < 280) {
      return { scale: 0.32, position: [0, -1.6, -2.2] };
    } else if (windowWidth < 360) {
      return { scale: 0.42, position: [0, -1.9, -2.2] };
    } else if (windowWidth < 500) {
      return { scale: 0.52, position: [0, -2.3, -2.2] };
    } else if (windowWidth < 800) {
      return { scale: 0.62, position: [0, -2.7, -2.2] };
    } else {
      return { scale: 0.75, position: [0, -3.25, -1.5] };
    }
  }, [windowWidth]);

  return (
    <div ref={containerRef} className="w-full h-full min-h-[350px] sm:min-h-[500px]">
      {isInView && isTabVisible ? (
        <Canvas
          frameloop="demand"
          shadows
          dpr={[1, 1.5]}
          camera={{ position: [20, 3, 5], fov: 25 }}
          gl={{ preserveDrawingBuffer: false, powerPreference: "high-performance" }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
              enabled={controlsEnabled}
            />
            <Computers scale={scale} position={position} setControlsEnabled={setControlsEnabled} />
          </Suspense>

          <Preload all />
        </Canvas>
      ) : (
        <div className="w-full h-full flex items-center justify-center text-secondary">
          {/* Static placeholder to maintain layout and prevent lag */}
        </div>
      )}
    </div>
  );
};

export default ComputersCanvas;

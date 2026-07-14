import { Suspense, useEffect, useState, useRef, useMemo } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ scale, position, orbitControlsRef }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const { camera, raycaster, scene, gl } = useThree();

  useEffect(() => {
    const canvasEl = gl.domElement;

    const handleNativePointerDown = (event) => {
      // 1. Get click position normalized relative to canvas size
      const rect = canvasEl.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      // 2. Raycast from camera to check model intersection
      raycaster.setFromCamera({ x, y }, camera);
      const intersects = raycaster.intersectObjects(scene.children, true);

      // 3. Update OrbitControls synchronously via its ref
      if (orbitControlsRef.current) {
        if (intersects.length === 0) {
          orbitControlsRef.current.enabled = false;
        } else {
          orbitControlsRef.current.enabled = true;
          document.body.style.cursor = "grabbing";
        }
      }
    };

    const handlePointerUp = () => {
      if (orbitControlsRef.current) {
        orbitControlsRef.current.enabled = false;
      }
      document.body.style.cursor = "auto";
    };

    // Use capture phase so we evaluate intersection before OrbitControls processes pointerdown
    canvasEl.addEventListener("pointerdown", handleNativePointerDown, true);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      canvasEl.removeEventListener("pointerdown", handleNativePointerDown, true);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [gl, camera, raycaster, scene, orbitControlsRef]);

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
  const orbitControlsRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

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
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  const { scale, position } = useMemo(() => {
    if (windowWidth < 280) {
      return { scale: 0.24, position: [-0.1, -1.2, -2.2] };
    } else if (windowWidth < 360) {
      return { scale: 0.32, position: [-0.15, -1.5, -2.2] };
    } else if (windowWidth < 500) {
      return { scale: 0.40, position: [-0.2, -1.8, -2.2] };
    } else if (windowWidth < 800) {
      return { scale: 0.55, position: [-0.25, -2.4, -2.2] };
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
              ref={orbitControlsRef}
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
              enabled={false}
            />
            <Computers scale={scale} position={position} orbitControlsRef={orbitControlsRef} />
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

import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = ({ orbitControlsRef }) => {
  const earth = useGLTF("./planet/scene.gltf");
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
          orbitControlsRef.current.enableRotate = false;
        } else {
          orbitControlsRef.current.enableRotate = true;
          document.body.style.cursor = "grabbing";
        }
      }
    };

    const handlePointerUp = () => {
      if (orbitControlsRef.current) {
        orbitControlsRef.current.enableRotate = false;
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
    <primitive
      object={earth.scene}
      scale={2.5}
      position-y={0}
      rotation-y={0}
      onPointerOver={(e) => {
        e.stopPropagation();
        document.body.style.cursor = "grab";
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        document.body.style.cursor = "auto";
      }}
    />
  );
};

const EarthCanvas = () => {
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [isTabVisible, setIsTabVisible] = useState(true);
  const orbitControlsRef = useRef(null);

  useEffect(() => {
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

    // Clean up
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full min-h-[350px]">
      {isInView && isTabVisible ? (
        <Canvas
          shadows
          frameloop="demand"
          dpr={[1, 1.5]}
          gl={{ preserveDrawingBuffer: false, powerPreference: "high-performance" }}
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [-4, 3, 6],
          }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              ref={orbitControlsRef}
              autoRotate
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
              enableRotate={false}
            />
            <Earth orbitControlsRef={orbitControlsRef} />

            <Preload all />
          </Suspense>
        </Canvas>
      ) : (
        <div className="w-full h-full flex items-center justify-center text-secondary">
          {/* Static placeholder to maintain layout and prevent lag */}
        </div>
      )}
    </div>
  );
};

export default EarthCanvas;

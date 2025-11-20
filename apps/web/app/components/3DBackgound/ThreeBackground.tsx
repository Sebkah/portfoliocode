"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { PerspectiveCamera, useProgress } from "@react-three/drei";
import {
  NoToneMapping,
  PerspectiveCamera as ThreePerspectiveCamera,
  RGBAFormat,
  UnsignedByteType,
  Vector3,
  WebGLRenderTarget,
} from "three";
import {
  EffectComposer,
  Vignette,
  Noise,
  ChromaticAberration,
  DepthOfField,
  Bloom,
} from "@react-three/postprocessing";
import { BlendFunction, DepthOfFieldEffect, KernelSize } from "postprocessing";
import { Suspense, useEffect, useRef } from "react";

import Boat from "./Boat";
import Birds from "./Birds/Birds";
import { Nav } from "./Navigation";
import { usePathname } from "next/navigation";

import { SimpleCameraControls } from "@/utils/three/CameraHelpers";

// Camera movement constants
const CAMERA_BASE_POSITION = [-3, 0.75, 20] as const;
const CAMERA_BASE_ROTATION = [0.1, 0, 0] as const; // Base rotation for the camera
const CAMERA_CV_POSITION = [-4, 0.6, 2] as const; // Adjusted for CV position
const CAMERA_SENSITIVITY = 0.2;
const CAMERA_LERP_FACTOR = 0.05;
const CAMERA_Z_MULTIPLIER = 10;

/**
 * Camera controller that follows mouse movement with smooth interpolation
 */
const DollyCamera = () => {
  const pathname = usePathname();

  // Check if we are on the CV page
  const isCVPage = pathname === "/cv";

  const { scene, size, camera } = useThree();
  const renderTarget = useRef(
    new WebGLRenderTarget(size.width, size.height, {
      colorSpace: "srgb-linear",
      type: UnsignedByteType,
      format: RGBAFormat,
      generateMipmaps: false,
      depthBuffer: true,
    }),
  );

  const cameraControls = new SimpleCameraControls(
    camera as ThreePerspectiveCamera,
  );

  cameraControls.addWaypoint(
    "default",
    CAMERA_BASE_POSITION,
    CAMERA_BASE_ROTATION,
  );

  cameraControls.addWaypoint(
    "cv",
    CAMERA_CV_POSITION,
    [0.15, 0, 0], // Adjusted rotation for CV page
  );

  scene.userData.renderTarget = renderTarget.current;

  useFrame(() => {
    // Update render target size if the canvas size changes
    if (
      renderTarget.current.width !== size.width ||
      renderTarget.current.height !== size.height
    ) {
      renderTarget.current.setSize(size.width, size.height);
    }
  });

  useFrame(({ pointer }) => {
    const offsetX = pointer.x * CAMERA_SENSITIVITY;
    const offsetY = pointer.y * CAMERA_SENSITIVITY;

    const targetWaypoint = isCVPage ? "cv" : "default";
    cameraControls.lerpToWaypoint(targetWaypoint, CAMERA_LERP_FACTOR, [
      offsetX,
      offsetY,
      offsetY * CAMERA_Z_MULTIPLIER,
    ]);
  });

  useFrame(({ gl, camera }) => {
    gl.setRenderTarget(renderTarget.current);
    gl.render(scene, camera);
    gl.setRenderTarget(null);
  });

  return (
    <>
      <PerspectiveCamera
        position={CAMERA_BASE_POSITION}
        rotation={[0.1, 0, 0]}
        fov={20}
        makeDefault={true}
      />
      {/*       <CameraControls makeDefault /> */}
    </>
  );
};

/**
 * Post-processing effects component
 */
const Effects = () => {
  const pathname = usePathname();

  // Check if we are on the CV page
  const isCVPage = pathname === "/cv";

  const depthRef = useRef<DepthOfFieldEffect>(null);

  const blurLevel = isCVPage ? 20 : 0; // Adjust blur level based on page

  useFrame(() => {
    if (depthRef.current) {
      // Lerp the blur level for smooth transitions
      depthRef.current.bokehScale =
        depthRef.current.bokehScale * 0.95 + blurLevel * 0.05;
    }
  });

  return (
    <EffectComposer>
      <ChromaticAberration
        blendFunction={BlendFunction.NORMAL}
        offset={[0.0008, 0.0008]}
      />
      <Vignette eskil={false} offset={0.2} darkness={0.6} />
      <Noise premultiply blendFunction={BlendFunction.SCREEN} opacity={0.7} />
      <DepthOfField ref={depthRef} focusDistance={100000}></DepthOfField>
      <Bloom
        intensity={0.2}
        kernelSize={KernelSize.HUGE}
        luminanceSmoothing={0.001}
      ></Bloom>
    </EffectComposer>
  );
};

/**
 * Main scene objects
 */
const Scene = ({
  targetPosition,
}: {
  targetPosition: React.RefObject<Vector3 | null>;
}) => {
  return (
    <group rotation={[0, Math.PI / -2, 0]}>
      <Suspense>
        <Boat />
        <Birds targetPosition={targetPosition} />
      </Suspense>
    </group>
  );
};

/**
 * Main Three.js background component with 3D scene, navigation, and post-processing effects
 */
export default function ThreeBackground() {
  const targetPosition = useRef<Vector3>(null);
  const { progress, total, loaded } = useProgress();
  useEffect(() => {
    console.log(`Loading progress: ${progress} / ${total}`);
  }, [progress]);

  return (
    loaded >= total && (
      <div className="h-full w-full">
        <Canvas
          className="h-full w-full"
          gl={{
            antialias: true,
            alpha: true,
            toneMapping: NoToneMapping,
          }}
        >
          <Effects></Effects>
          <Nav targetPosition={targetPosition} />

          <DollyCamera />
          <Scene targetPosition={targetPosition} />
        </Canvas>
      </div>
    )
  );
}

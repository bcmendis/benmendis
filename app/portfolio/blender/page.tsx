"use client";

import ThreeJsLoader from "@/components/three/ThreeJsLoader";
import { Separator } from "@/components/ui/separator";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";

const Rocket = dynamic(
  () => import("@/components/three/3dModels").then((mod) => mod.Rocket),
  { ssr: false }
);

const Donut = dynamic(
  () => import("@/components/three/3dModels").then((mod) => mod.Donut),
  { ssr: false }
);

const Blob = dynamic(
  () => import("@/components/three/3dModels").then((mod) => mod.Blob),
  { ssr: false }
);

const BlenderPage = () => {
  return (
    <div className="flex flex-col w-full h-fit gap-y-6">
      <div className="pt-6 md:pt-4 space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Blender & React Three Fiber</h2>
          <p className="text-muted-foreground">
            A collection of <strong>3D Models</strong> I created using Blender & integrated into my webapp using React Three Fiber.
          </p>
        </div>
        <Separator />
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 w-full h-full gap-6 sm:gap-4">
        <div className="flex flex-col w-full h-96 sm:h-64">
          <Suspense fallback={<ThreeJsLoader />}>
            <Canvas className="border flex flex-1 w-full rounded-t-xl">
              <color attach="background" args={["lightblue"]} />
              <ambientLight intensity={1} />
              <directionalLight
                color="white"
                position={[0, 5, 0]}
                intensity={1}
              />
              <Donut scale={30} position={[0, 0, 0]} />
              <PerspectiveCamera makeDefault fov={40} position={[0, 3, 6]} />
              <OrbitControls enablePan={false} />
            </Canvas>
          </Suspense>
          <div className="border border-t-0 flex flex-col w-full h-fit px-4 py-4 bg-muted rounded-b-xl gap-y-2">
            <h3 className="text-xl font-semibold text-accent-foreground">
              Eyeball Donut
            </h3>
            <span className="italic">{`"...appetizing"`}</span>
          </div>
        </div>

        <div className="flex flex-col w-full h-96 sm:h-64">
          <Suspense fallback={<ThreeJsLoader />}>
            <Canvas className="border flex flex-1 w-full rounded-t-xl">
              <color attach="background" args={["#ddd6fe"]} />
              <ambientLight intensity={1} />
              <directionalLight
                color="white"
                position={[0, 5, 0]}
                intensity={1}
              />
              <Rocket scale={0.6} position={[0, 0, 0]} />
              <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
              <OrbitControls enablePan={false} />
            </Canvas>
          </Suspense>
          <div className="border border-t-0 flex flex-col w-full h-fit px-4 py-4 bg-muted rounded-b-xl gap-y-2">
            <h3 className="text-xl font-semibold text-accent-foreground">
              {`Ben's Rocket`}
            </h3>
            <span className="italic">{`"Whooosh!!!"`}</span>
          </div>
        </div>

        <div className="flex flex-col w-full h-96 sm:h-64">
          <Suspense fallback={<ThreeJsLoader />}>
            <Canvas className="border flex flex-1 w-full rounded-t-xl">
              <color attach="background" args={["#bbf7d0"]} />
              <ambientLight intensity={1} />
              <directionalLight
                color="white"
                position={[0, 5, 0]}
                intensity={1}
              />
              <Blob route={"/reviews"} scale={1.25} position={[0, 0, 0]} />
              <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
              <OrbitControls enablePan={false} />
            </Canvas>
          </Suspense>
          <div className="border border-t-0 flex flex-col w-full h-fit px-4 py-4 bg-muted rounded-b-xl gap-y-2">
            <h3 className="text-xl font-semibold text-accent-foreground">
              Space Blob
            </h3>
            <span className="italic">{`"Umm...weird"`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlenderPage;

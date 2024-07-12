import { MeshDistortMaterial, useCursor, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function Rocket(props) {
  const { scene } = useGLTF("/assets/3dModels/Rocket.glb");

  useFrame((state, delta) => (scene.rotation.y += delta));

  return <primitive object={scene} {...props} />;
}

export function Donut(props) {
  const { scene } = useGLTF("/assets/3dModels/Donut.glb");

  useFrame((state, delta) => (scene.rotation.y += delta / 2));

  return <primitive object={scene} {...props} />;
}

export const Blob = ({route = "/", ...props}) => {
  const [hovered, hover] = useState(false);
  const router = useRouter();
  useCursor(hovered);
  return (
    <mesh
      onClick={() => router.push(route)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      {...props}
    >
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial
        roughness={0.5}
        color={hovered ? "#b366ff" : "#3c8cdd"}
      />
    </mesh>
  );
};

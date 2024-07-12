import { Html, useProgress } from "@react-three/drei";

const ThreeJsLoader = () => {
  const { progress } = useProgress();
  return <Html center color="white">{progress} % loaded</Html>;
};

export default ThreeJsLoader;

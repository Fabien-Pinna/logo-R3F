import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Experience } from "./components/Experience";
import "./App.css";

const App = () => {
  return (
    <Canvas camera={{
      fov: 70,
      position: [0, 0, 5]
    }}>
      <Experience />
    </Canvas>
  );
};

export default App;
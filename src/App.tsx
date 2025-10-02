import { Canvas } from "@react-three/fiber";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { EffectComposer, TiltShift2 } from "@react-three/postprocessing";
import SeiyaModel from "./SeiyaModel";
import { useState } from "react";

import "./index.css";

export default function App() {
  const [showModel, setShowModel] = useState<boolean>(false);

  return (
    <>
      {showModel ? null : (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            backgroundColor: "rgba(0, 0, 0, 0.9)",

            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,

            zIndex: 10,
          }}
        >
          <button
            style={{ width: "100px", height: "100px" }}
            onClick={() => {
              setShowModel(true);
              const audio = new Audio("/song/pegasus_fantasy.mp3");
              audio.play();
            }}
          >
            Show Model
          </button>
        </div>
      )}
      <Canvas
        shadows
        gl={{ antialias: false }}
        camera={{ position: [0, 0, 1], fov: 1 }}
      >
        <ambientLight intensity={2} />
        <directionalLight
          intensity={5}
          position={[-5, 5, 5]}
          castShadow
          shadow-mapSize={2048}
          shadow-bias={-0.0001}
        />
        <directionalLight
          intensity={2}
          position={[20, 20, 20]}
          castShadow
          shadow-mapSize={2048}
          shadow-bias={-0.0001}
        />
        <ScrollControls pages={2}>
          <OrbitControls />
          <SeiyaModel position={[0, -0.01, 0]} rotation={[0, 0, 0]} />
        </ScrollControls>
        <mesh
          rotation={[-0.5 * Math.PI, 0, 0]}
          position={[0, -1.01, 0]}
          receiveShadow
        >
          <shadowMaterial transparent opacity={0.75} />
        </mesh>
        <EffectComposer multisampling={4}>
          <TiltShift2 blur={1} />
        </EffectComposer>
      </Canvas>
    </>
  );
}

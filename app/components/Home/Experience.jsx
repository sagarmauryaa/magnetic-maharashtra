import { AdaptiveDpr } from "@react-three/drei";
import { Book } from "./Book";

export const Experience = () => {
  // The book has PAGE_WIDTH = 1.28 and is scaled by 1.2, so total width is about 1.54
  // Adding extra width for the leather binding
  const LEATHER_WIDTH = 3.7; // Wider to accommodate the book pages
  const LEATHER_HEIGHT = 2.5;

  // Match the rotation of the book (rotation-x={-Math.PI / 10} rotation-y={-Math.PI / 16})
  const ROTATION_X = -Math.PI / 10.5;
  const ROTATION_Y = -Math.PI / 16;

  return (
    <>
      {/* Background leather plane - slightly larger than the book pages */}
      {/* <mesh position={[0, -0.1, -0.5]} rotation={[ROTATION_X, ROTATION_Y, 0]}>
        <planeGeometry args={[LEATHER_WIDTH, LEATHER_HEIGHT]} />
        <meshStandardMaterial color="#472B1B" roughness={0.9} metalness={0.1} />
      </mesh> */}

      {/* Add a subtle border to simulate book binding */}
      {/* <mesh position={[0, -0.1, -0.48]} rotation={[ROTATION_X, ROTATION_Y, 0]}>
        <planeGeometry args={[LEATHER_WIDTH - 0.05, LEATHER_HEIGHT - 0.05]} />
        <meshStandardMaterial color="#2A1A10" roughness={1} metalness={0} />
      </mesh> */}

      {/* Add decorative embossed border for the leather */}
      {/* <mesh position={[0, -0.1, -0.46]} rotation={[ROTATION_X, ROTATION_Y, 0]}>
        <planeGeometry args={[LEATHER_WIDTH - 0.3, LEATHER_HEIGHT - 0.3]} />
        <meshStandardMaterial color="#3A2213" roughness={0.8} metalness={0.2} />
      </mesh> */}

      <Book />

      {/* Main directional light */}
      <directionalLight
        position={[0, 3, 1]}
        intensity={6}
        color="#F2E7D4"
        castShadow
        shadow-camera-far={50}
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.0001}
      />

      {/* Ambient light to better illuminate the leather texture */}
      <ambientLight intensity={0.5} color="#F2E7D4" />

      <AdaptiveDpr pixelated />
    </>
  );
};

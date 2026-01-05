import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

/* ================= ORB ================= */
function NeuralOrb() {
  const groupRef = useRef();
  const { mouse } = useThree();

  /* ================= PARTICLES ================= */
  const particles = useMemo(() => {
    const count = 2400;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const radius = 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }

    return positions;
  }, []);

  /* ================= GEOMETRY ================= */
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(particles, 3));
    return geo;
  }, [particles]);

  /* ================= CORE MATERIAL ================= */
  const coreMaterial = useMemo(
    () =>
      new THREE.PointsMaterial({
        color: new THREE.Color("#C5A363"),
        size: 0.030,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    []
  );

  /* ================= ANIMATION ================= */
  useFrame(({ clock }) => {
    const t = clock.elapsedTime;

    // Rotation
    groupRef.current.rotation.y = t * 0.15 + mouse.x * 0.8;
    groupRef.current.rotation.x = t * 0.08 + mouse.y * 0.6;

    // Breathing scale
    const scale = 1 + Math.sin(t * 2.2) * 0.05;
    groupRef.current.scale.set(scale, scale, scale);

    // Pulse glow
    coreMaterial.size = 0.020 + Math.sin(t * 3) * 0.004;
    coreMaterial.opacity = 0.85 + Math.sin(t * 2.5) * 0.1;
  });

  return (
    <group ref={groupRef}>
      {/* Core points */}
      <points geometry={geometry} material={coreMaterial} />

      {/* Glow layer */}
      <points geometry={geometry}>
        <pointsMaterial
          color="#C5A363"
          size={0.065}
          transparent
          opacity={0.25}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </group>
  );
}

/* ================= SCENE ================= */
export default function NeuralOrbScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ antialias: true }}
    >
      {/* Lights */}
      <ambientLight intensity={0.15} />

      <pointLight
        position={[4, 4, 4]}
        intensity={4}
        color="#C5A363"
      />

      <pointLight
        position={[-4, -4, 2]}
        intensity={2}
        color="#C5A363"
      />

      {/* Orb */}
      <NeuralOrb />
    </Canvas>
  );
}



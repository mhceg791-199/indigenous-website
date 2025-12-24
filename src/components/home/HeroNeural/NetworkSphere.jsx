// import { Canvas, useFrame } from "@react-three/fiber";
// import { Points, PointMaterial } from "@react-three/drei";
// import * as THREE from "three";
// import { useRef } from "react";

// function NetworkSphere() {
//   const ref = useRef();

//   // دوران خفيف
//   useFrame(() => {
//     ref.current.rotation.y += 0.0015;
//     ref.current.rotation.x += 0.0005;
//   });

//   // توليد نقاط على شكل كرة
//   const points = new Float32Array(3000 * 3);
//   for (let i = 0; i < points.length; i += 3) {
//     const r = 1.5;
//     const theta = Math.random() * 2 * Math.PI;
//     const phi = Math.acos(2 * Math.random() - 1);

//     points[i] = r * Math.sin(phi) * Math.cos(theta);
//     points[i + 1] = r * Math.sin(phi) * Math.sin(theta);
//     points[i + 2] = r * Math.cos(phi);
//   }

//   return (
//     <Points ref={ref} positions={points}>
//       <PointMaterial
//         transparent
//         color="#d946ef"
//         size={0.015}
//         sizeAttenuation
//         depthWrite={false}
//       />
//     </Points>
//   );
// }

// export default function SphereCanvas() {
//   return (
//     <Canvas camera={{ position: [0, 0, 4] }}>
//       <ambientLight intensity={0.5} />
//       <NetworkSphere />
//     </Canvas>
//   );
// }
// import React, { useRef, useState, useMemo } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
// import * as THREE from 'three';

// // المكون الأساسي للكرة الشبكية
// function Scene() {
//   const meshRef = useRef();
//   const groupRef = useRef();
  
//   // تحديث الدوران في كل إطار
//   useFrame((state) => {
//     const time = state.clock.getElapsedTime();
//     if (meshRef.current) {
//       meshRef.current.rotation.y = time * 0.2;
//       meshRef.current.rotation.x = time * 0.1;
//     }
//     if (groupRef.current) {
//       // حركة طفو خفيفة للمجموعة كاملة
//       groupRef.current.position.y = Math.sin(time) * 0.1;
//     }
//   });

//   return (
//     <group ref={groupRef}>
//       {/* 1. الكرة الشبكية الأساسية */}
//       <mesh ref={meshRef}>
//         <sphereGeometry args={[2.5, 40, 40]} />
//         <meshBasicMaterial 
//           color="#D4AF37" 
//           wireframe 
//           transparent 
//           opacity={0.4} 
//         />
//       </mesh>

//       {/* 2. نقاط التقاطع (Vertices) لإعطاء تأثير "الشبكة الرقمية" */}
//       <points>
//         <sphereGeometry args={[2.5, 40, 40]} />
//         <pointsMaterial 
//           color="#FFD700" 
//           size={0.03} 
//           sizeAttenuation={true} 
//         />
//       </points>

//       {/* 3. كرة داخلية ناعمة لإعطاء عمق وتوهج */}
//       <mesh>
//         <sphereGeometry args={[2.45, 32, 32]} />
//         <meshStandardMaterial 
//           color="#1a1a1a" 
//           emissive="#7e632d"
//           emissiveIntensity={0.5}
//           transparent
//           opacity={0.8}
//         />
//       </mesh>
//     </group>
//   );
// }

// export default function WireframeGlobe() {
//   return (
//     <div className="relative w-full h-[600px] bg-black overflow-hidden flex items-center justify-center">
//       {/* محتوى نصي فوق الأنيميشن */}
//       <div className="absolute z-10 text-center pointer-events-none px-4">
//         <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">
//           GLOBAL <span className="text-[#D4AF37]">CONNECTIVITY</span>
//         </h2>
//         <p className="text-gray-400 text-lg max-w-xl mx-auto">
//           نحن نربط الجذور بالأفق العالمي، مستخدمين شبكة من التآزر والقوة لدعم استثماراتنا.
//         </p>
//       </div>

//       {/* منطقة الـ Canvas الخاصة بـ Three.js */}
//       <div className="absolute inset-0 z-0">
//         <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
//           {/* الإضاءة */}
//           <ambientLight intensity={0.5} />
//           <pointLight position={[10, 10, 10]} intensity={1} color="#FFD700" />
//           <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />

//           {/* مشهد الـ 3D */}
//           <Float speed={2} rotationIntensity={1} floatIntensity={1}>
//             <Scene />
//           </Float>

//           {/* تحكم الكاميرا (يمكنك تدوير الكرة بالماوس) */}
//           <OrbitControls 
//             enableZoom={false} 
//             autoRotate 
//             autoRotateSpeed={0.5} 
//             enablePan={false}
//           />
//         </Canvas>
//       </div>

//       {/* تأثير تدرج لوني في الأسفل لدمج السكشن مع السكشن التالي */}
//       <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />
//     </div>
//   );
// }

// function WireSphere() {
//   const meshRef = useRef();

//   useFrame(({ clock }) => {
//     meshRef.current.rotation.y = clock.elapsedTime * 0.15;
//     meshRef.current.rotation.x = clock.elapsedTime * 0.05;
//   });

//   return (
//     <lineSegments ref={meshRef}>
//       <edgesGeometry
//         args={[new THREE.SphereGeometry(2.5, 32, 32)]}
//       />
//       <lineBasicMaterial
//         color="#d946ef"
//         linewidth={1}
//         transparent
//         opacity={0.9}
//       />
//     </lineSegments>
//   );
// }



// import { Canvas, useFrame } from "@react-three/fiber";
// import { useRef } from "react";
// import * as THREE from "three";

// function ParticleSphere() {
//   const pointsRef = useRef();

//   const geometry = new THREE.SphereGeometry(2.5, 64, 64);
//   const material = new THREE.PointsMaterial({
//     color: "#e879f9",
//     size: 0.02,
//     transparent: true,
//     opacity: 0.8,
//     blending: THREE.AdditiveBlending,
//   });

//   useFrame(({ clock }) => {
//     pointsRef.current.rotation.y = clock.elapsedTime * 0.1;
//   });

//   return <points ref={pointsRef} geometry={geometry} material={material} />;
// }

// export default function NetworkSphereScene() {
//   return (
//     <Canvas
//       camera={{ position: [0, 0, 6], fov: 50 }}
//     >
//       <ambientLight intensity={0.4} />
//       <pointLight position={[5, 5, 5]} intensity={2} />

//       <points scale={1.05}>
//   <ParticleSphere />
// </points>

//     </Canvas>
//   );
// }


// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import { useRef, useMemo } from "react";
// import * as THREE from "three";

// /* ================= ORB ================= */
// function NeuralOrb() {
//   const groupRef = useRef();
//   const pointsRef = useRef();
//   const { mouse } = useThree();

//   /* ===== PARTICLES ===== */
//   const particles = useMemo(() => {
//     const count = 2200;
//     const positions = new Float32Array(count * 3);

//     for (let i = 0; i < count; i++) {
//       const r = 2.4;
//       const theta = Math.random() * Math.PI * 2;
//       const phi = Math.acos(2 * Math.random() - 1);

//       positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
//       positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
//       positions[i * 3 + 2] = r * Math.cos(phi);
//     }

//     return positions;
//   }, []);

//   /* ===== GEOMETRY ===== */
//   const geometry = useMemo(() => {
//     const geo = new THREE.BufferGeometry();
//     geo.setAttribute("position", new THREE.BufferAttribute(particles, 3));
//     return geo;
//   }, [particles]);

//   /* ===== MATERIAL ===== */
//   const material = useMemo(
//     () =>
//       new THREE.PointsMaterial({
//         color: "#d946ef",
//         size: 0.018,
//         transparent: true,
//         opacity: 0.85,
//         blending: THREE.AdditiveBlending,
//         depthWrite: false,
//       }),
//     []
//   );

//   /* ===== ANIMATION ===== */
//   useFrame(({ clock }) => {
//     const t = clock.elapsedTime;

//     /* Core motion */
//     groupRef.current.rotation.y = t * 0.15;
//     groupRef.current.rotation.x = t * 0.08;

//     /* Mouse gravity */
//     groupRef.current.rotation.y += mouse.x * 0.8;
//     groupRef.current.rotation.x += mouse.y * 0.8;

//     /* Breathing */
//     const scale = 1 + Math.sin(t * 2.5) * 0.05;
//     groupRef.current.scale.set(scale, scale, scale);

//     /* Depth fade */
//     material.opacity = 0.7 + Math.sin(t * 3) * 0.15;
//   });

//   return (
//     <group ref={groupRef}>
//       <points ref={pointsRef} geometry={geometry} material={material} />
//     </group>
//   );
// }

// /* ================= SCENE ================= */
// export default function NeuralOrbScene() {
//   return (
//     <Canvas
//       camera={{ position: [0, 0, 6], fov: 45 }}
//       gl={{ antialias: true }}
//     >
//       <ambientLight intensity={0.25} />
//       <pointLight position={[6, 6, 6]} intensity={3} color="#f0abfc" />

//       <NeuralOrb />
//     </Canvas>
//   );
// }


// function ParticleSphere() {
//   const ref = useRef();

//   useFrame(({ clock }) => {
//     const t = clock.elapsedTime;
//     ref.current.rotation.y = t * 0.12;

//     const pulse = 1 + Math.sin(t * 2) * 0.02;
//     ref.current.scale.setScalar(pulse);
//   });

//   return (
//     <points ref={ref}>
//       <sphereGeometry args={[2.5, 128, 128]} />
//       <pointsMaterial
//         color="#e879f9"
//         size={0.025}
//         transparent
//         opacity={0.85}
//         blending={THREE.AdditiveBlending}
//         depthWrite={false}
//       />
//     </points>
//   );
// }


// function EnergyRays({ count = 300 }) {
//   const ref = useRef();

//   const geometry = useMemo(() => {
//     const positions = [];

//     for (let i = 0; i < count; i++) {
//       const dir = new THREE.Vector3(
//         (Math.random() - 0.5),
//         (Math.random() - 0.5),
//         (Math.random() - 0.5)
//       ).normalize();

//       const start = dir.clone().multiplyScalar(2.5);
//       const end = dir.clone().multiplyScalar(3.8 + Math.random() * 1.5);

//       positions.push(
//         start.x, start.y, start.z,
//         end.x, end.y, end.z
//       );
//     }

//     const geo = new THREE.BufferGeometry();
//     geo.setAttribute(
//       "position",
//       new THREE.Float32BufferAttribute(positions, 3)
//     );
//     return geo;
//   }, [count]);

//   useFrame(({ clock }) => {
//     ref.current.rotation.y = clock.elapsedTime * 0.15;
//   });

//   return (
//     <lineSegments ref={ref} geometry={geometry}>
//       <lineBasicMaterial
//         color="#f0abfc"
//         transparent
//         opacity={0.35}
//         blending={THREE.AdditiveBlending}
//         depthWrite={false}
//       />
//     </lineSegments>
//   );
// }


// export default function EnergySphereScene() {
//   return (
//     <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
//       <color attach="background" args={["#050008"]} />

//       <ambientLight intensity={0.3} />
//       <pointLight position={[5, 5, 5]} intensity={3} color="#ff9cff" />
//       <pointLight position={[-5, -5, -5]} intensity={2} color="#7dd3fc" />

//       <ParticleSphere />
//       <EnergyRays />
//     </Canvas>
//   );
// }


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



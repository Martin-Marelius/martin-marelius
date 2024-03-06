"useclient"

import React, { useRef, useState, useEffect, useCallback } from "react";
import { Canvas, useFrame, useLoader, useThree, extend } from "@react-three/fiber";
import * as THREE from "three";
import { motion } from "framer-motion-3d"
import { useAnimation } from 'framer-motion';
import { Bloom, DepthOfField, EffectComposer, Noise, Vignette, Glitch, GodRays } from '@react-three/postprocessing'


const Introduction = () => {
  // Variables
  const [speed, setSpeed] = useState(0.004);
  const [size, setSize] = useState(3);
  const [animating, setAnimating] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  // Animation Controlelrs
  const sizeControls = useAnimation();
  const controls = useAnimation();

  const onClick = async () => {
    if (animating) return;

    sizeControls.start({
      scale: [1, 1.04, 0.96, 1],
      transition: { duration: 0.6, type: "tween", stiffness: 100, damping: 1 }
    });
    setSpeed((speed) => (speed *= 1.2));
    setSize((size) => (size *= 0.992));
  };

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    const animate = async () => {
      if (1.2 - (1 * speed) <= 0.1 && !animating) {
        setAnimating(true);
        await controls.start({
          scale: [1, 0.01],
          transition: { duration: 2, type: "spring", stiffness: 60, damping: 5 }
        });
        setSpeed(0.1);
        setSize(3);
        await controls.start({
          scale: [0.01, 1.3],
          transition: { duration: 0.2, type: "spring", stiffness: 100, damping: 10 }
        });
      }
    };
    animate();
  }, [size, controls, speed]);

  return (
    <>
      <Canvas style={{
        opacity: hasMounted ? 1 : 0,
        transition: 'opacity 2.5s ease-in'
        }}>

        <ambientLight intensity={2} />
        <pointLight position={[10, 10, 10]} intensity={100} />
        <motion.mesh animate={controls}>
          <BasicParticles size={size - 1} rotationSpeed={0.0015} detail={5} reverse={true} />
          <motion.mesh animate={sizeControls}>
            <Sphere rotationSpeed={speed} size={size - 0.5} />
            <BasicParticles size={Math.max(0.4 - (1 * speed), 0.05)} rotationSpeed={speed} detail={4} />
          </motion.mesh>
          <BasicParticles size={size + 1} rotationSpeed={0.0015 * (speed - 1)} detail={5} />
        </motion.mesh>
        <EffectComposer>
          <Bloom luminanceThreshold={0.1} luminanceSmoothing={0.5} intensity={1000 * speed} />
        </EffectComposer>
      </Canvas>
      <div className="absolute top-0 w-full h-full" onClick={() => onClick()} />
    </>
  );
};

const BasicParticles = (props: any) => {
  const points = useRef();

  useFrame(() => {
    if (!points.current) {
      return;
    }

    if (props.reverse) {
      points.current.rotation.x = points.current.rotation.y -= props.rotationSpeed;
    }
    else {
      points.current.rotation.x = points.current.rotation.y += props.rotationSpeed;
    }

    points.current.position.y = Math.sin(window.performance.now() / 1000) / 2;
  });

  const color = new THREE.Color();
  const h = THREE.MathUtils.lerp(0.6, 0.16, props.rotationSpeed);
  color.setHSL(h, 1, 0.2);

  return (
    <points ref={points}>
      <icosahedronGeometry args={[props.size, props.detail]} />
      <pointsMaterial
        color={color}
        size={0.011}
      />
    </points>
  );
};

// Sphere component that spins around and changes color
const Sphere = (props: any) => {
  const sphereRef = useRef();
  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = sphereRef.current.rotation.y += 0.01;
      sphereRef.current.position.y = Math.sin(window.performance.now() / 1000) / 2;
    }
  });

  // Calculate color based on props.size
  const color = new THREE.Color();
  const hue = THREE.MathUtils.lerp(0.6, 0.5, props.size); // Calculate hue
  color.setHSL(hue, 1, 0.5); // Set color based on hue

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[0.08, 32, 32]} />
      <meshStandardMaterial color={color}
        emissive={'white'}
        emissiveIntensity={0.01}
      />
    </mesh>
  );
};


export default Introduction;
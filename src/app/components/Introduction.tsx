"useclient"

import React, { useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, extend, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { EdgesGeometry, LineBasicMaterial, LineSegments } from "three";
import { motion } from "framer-motion-3d"
import { useAnimation } from 'framer-motion';
import { Bloom, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing'

const Introduction = () => {

  // Variables
  const [speed, setSpeed] = useState(0.001);
  const [size, setSize] = useState(2);
  const [animating, setAnimating] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  // Animation Controlelrs
  const sizeControls = useAnimation();
  const controls = useAnimation();

  useEffect(() => {
    setHasMounted(true);
  }, [hasMounted]);

  useEffect(() => {
    const animate = async () => {
      if (1 - (1.4 * speed) <= 0.4 && !animating) {
        setAnimating(true);
        await controls.start({
          scale: [1, 1.2],
          transition: { duration: 2, type: "linear", stiffness: 100, damping: 10 }
        });
        await controls.start({
          scale: [1, 0.01],
          transition: { duration: 1.5, type: "spring", stiffness: 80, damping: 10 }
        });
        setSpeed(0.005);
        setSize(3.5);
        setVisible(true);
        await controls.start({
          scale: [0.01, 1.3],
          transition: { duration: 0.2, type: "spring", stiffness: 100, damping: 10 }
        });
      }
    };
    animate();
  }, [size, controls, speed, animating]);

  return (
    <>
      <Canvas style={{
        opacity: hasMounted ? 1 : 0,
        transition: 'opacity 2.5s ease-in',
      }}>
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />

        <Square
          size={size}
          rotationSpeed={speed}
          color={"white"} />
        <EffectComposer>
          <Bloom luminanceThreshold={1} luminanceSmoothing={0.1} intensity={5} />
          <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} />
          <Noise opacity={0.1} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>

      </Canvas>
    </>
  );
};

// Square component that spins around and changes color
const Square = (props: any) => {
  const mesh = useRef<THREE.Mesh>(null);
  const sizeControls = useAnimation();
  const size = 0.11;

  const smallSquares = useMemo(() => {
    const squares = [];
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        for (let k = 0; k < 5; k++) {
          if (k > 0 && k < 4 && i > 0 && i < 4 && j > 0 && j < 4) continue;

          let rand = Math.random() * 4;
          let randX = ((i == 0 || i == 4) && (j > 0 && j < 4 && k > 0 && k < 4)) ? rand : 1;
          let randY = ((j == 0 || j == 4) && (i > 0 && i < 4 && k > 0 && k < 4)) ? rand : 1;
          let randZ = ((k == 0 || k == 4) && (j > 0 && j < 4 && i > 0 && i < 4)) ? rand : 1;

          let color1 = new THREE.Color().setHSL((Math.random() * 50) + 200, 1, 0.6);
          let color2 = new THREE.Color().setHSL((Math.random() * 50) + 180, 1, 0.6);

          squares.push(
            <motion.mesh
              position={[0.13 * (i - 4), 0.13 * (j - 4), 0.13 * (k - 4)]}
              key={`${i}-${j}-${k}`}
              animate={{
                scaleX: [1, randX, 1],
                scaleY: [1, randY, 1],
                scaleZ: [1, randZ, 1],
                transition: { duration: (rand) + 2, type: "linear", stiffness: 10, damping: 1, repeat: Infinity, repeatType: "reverse" }
              }}>

              <motion.mesh
                key={`${i}-${j}-${k}line`}
                animate={{
                  color: [`#${color1.getHexString()}`, `#${color2.getHexString()}`],
                  transition: { duration: 2, type: "linear", stiffness: 10, damping: 1, repeat: Infinity, repeatType: "reverse" }
                }}>
                <mesh>
                  <boxGeometry args={[size, size, size]} />
                  <meshBasicMaterial attach="material" color={'black'} />
                </mesh>
                <lineSegments>
                  <edgesGeometry attach="geometry" args={[new THREE.BoxGeometry(size, size, size)]} />

                  <lineBasicMaterial attach="material" color={'red'} />

                </lineSegments>
              </motion.mesh>
            </motion.mesh>
          );
        }
      }
    }
    return squares;
  }, []);

  useFrame(() => {
    if (!mesh.current) {
      return;
    }

    mesh.current.rotation.x = mesh.current.rotation.y += props.rotationSpeed;
  });

  return (
    <mesh ref={mesh}>


      {smallSquares}
    </mesh>
  );
};




export default Introduction;
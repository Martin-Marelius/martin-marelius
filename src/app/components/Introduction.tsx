"useclient"

import React, { useState } from "react";
import Image from "next/image";
import {
    motion,
    useMotionValue,
    useTransform,
  } from "framer-motion"
import { IoHandRight } from 'react-icons/io5';

const Introduction  = () => { 
    const [hidden, setHidden] = useState(false);

    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const background = useTransform(
      x,
      [-100, 0, 100],
      ["linear-gradient(90deg,#ffa0ae 0%,#aacaef 75%)", "linear-gradient(0deg,#ffa0ae 0%,#aacaef 75%)", "linear-gradient(-90deg,#ffa0ae 0%,#aacaef 75%)"]
    )
    const rotation = useTransform(
        y,
        [-100, 0, 100],
        [-50, 0, 50]
      )

    const opacity = useTransform(
        x,
        [-100, 0, 100],
        [1, 0, 1]
      )

    return (
    <div style={{background: "#aacaef"}}>
        <motion.div
            transition={{ease:"easeIn", duration: 0.4}}
            initial={{ opacity: 0, y: 10}}
            whileInView={{ opacity: 1, y:0}}
            viewport={{ once: true }}
            style={{background}}>
        <div className="flex flex-col justify-center items-center p-24 w-full h-screen">
        
        <div className="flex flex-col gap-2 align-center justify-center items-center">
            <motion.div
            hidden={hidden} 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{ease:"easeInOut", duration:1, delay: 1.2}}>
            <motion.div
            animate={{
                x: [0, -10, 20, 0],
                y: [0, 0, 0, 0],
                rotate: [-20]
              }}
            transition={{ ease: "linear", duration: 1, repeat: Infinity }}
            >
                <IoHandRight size={32} className="absolute z-10 right-2 top-24" color="white" opacity={1}/>
            </motion.div>
            </motion.div>
            <motion.div
                drag
                dragConstraints={{ left: 0, right: 0, top:0, bottom:0 }}
                dragElastic={0.4}
                dragTransition={{ bounceStiffness: 1000, bounceDamping: 5 }}
                style={{ x, y, rotate:rotation }}
                onTapStart={() => setHidden(true)}
                whileTap={{ cursor: "grabbing", scale: 1.05}}
                >
                <div className="rounded-full overflow-hidden">
                    <motion.div>
                        <Image src="/headshot.jpg" alt="Image" height={164} width={164} draggable={false} />
                    </motion.div>

                    <motion.div
                    style={{opacity}}>
                        <div className="absolute top-px -mt-px rounded-full overflow-hidden">
                        <Image src="/headshot_color.jpg" alt="Image" height={164} width={164} draggable={false} />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
       <div>
         <h1 className="text-3xl font-bold text-slate-700">
           Martin Marelius Johnsen
         </h1>
       </div>
       <div>
         <p className="text-1xl text-slate-600">
           Fullstack Developer
         </p>
       </div>
        </div>
        
       </div>
       </motion.div>
       </div>
   );
 };

 export default Introduction;
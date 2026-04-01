"use client";
import {motion, useScroll} from "framer-motion";

export default function ProgressBar() {



const {scrollYProgress} = useScroll();




return (
<>
 <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex:99999999,
                    height: 5,
                    originX: 0,
                    backgroundColor: "linear-gradient(135deg, #520b4d 0%, #5f0fb9 100%)",
                }}
            ></motion.div>
</>
)



}

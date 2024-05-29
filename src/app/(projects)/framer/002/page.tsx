"use client"

import { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type AnimatedDivProps = {
    children: ReactNode;
    isVisible: boolean;
  };

  
const AnimatedDiv = ({children, isVisible}: AnimatedDivProps) => {
    
  return (
    <div
        className="relative"
        style={{ height: "100px", width: "100px" }}
    >
        <AnimatePresence>
            
            {isVisible && ( <motion.div
                
                className="bg-gray-900 p-4 absolute inset-4 rounded-md"
                style={{height: "100px", width: "100px"}}
                initial={{ scale: 0, rotate: "0deg" }}
                animate={{ scale: 1, rotate: "180deg", x: [0, 150, 0, -150, -250, 0] }}
                transition={{ duration: 3, ease: "easeInOut"}}
                exit={{ scale: 0, rotate: "0deg" }}
            >
                {children}
            </motion.div>)}
        
        
        </AnimatePresence>
    </div>
    
  )
}

export default function Page() {
    const [isVisible, setIsVisible] = useState(true);
    return (
        <div
            style={{
                display: "grid",
                placeContent: "center",
                height: "100vh",
                gap: "0.8rem",
            }}
        >
            <motion.button layout onClick={() => setIsVisible(!isVisible)}>Toggle</motion.button>
            <AnimatedDiv isVisible={isVisible}>test</AnimatedDiv>
        </div>
        )
}

"use client"

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";



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
                
                className="bg-gray-900 p-4 absolute inset-4 rounded-md text-center flex items-center justify-center opacity-50"
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

export default AnimatedDiv;
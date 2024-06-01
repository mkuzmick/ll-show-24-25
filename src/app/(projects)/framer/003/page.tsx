"use client"

import { ReactNode, useState } from "react";
import CenteredContainer from "@/components/elements/framer/CenteredContainer";
import AnimatedDiv from "@/components/elements/framer/AnimatedDiv_001";
import { motion, AnimatePresence } from "framer-motion";


const GestureTest = ({ children }: {children: ReactNode}) => {
    return (
        <div>
            <AnimatePresence>
                <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9, rotate: "5deg"}} className="bg-zinc-900 cursor-pointer text-center">
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    )
    
}

export default function Page() {
    const [isVisible, setIsVisible] = useState(true);
    return (
        <CenteredContainer>
            <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
            <AnimatedDiv isVisible={isVisible}>test</AnimatedDiv>
            <GestureTest>test</GestureTest>
            
        </CenteredContainer>
    )
}

"use client"

import { ReactNode, useState } from "react";
import CenteredContainer from "@/components/elements/framer/CenteredContainer";
import AnimatedDiv from "@/components/elements/framer/AnimatedDiv_001";
import GestureTest from "@/components/elements/framer/GestureTest";  // Adjust the path as necessary

export default function Page() {
    const [isVisible, setIsVisible] = useState(true);
    return (
        <CenteredContainer>
            <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
            <AnimatedDiv isVisible={isVisible}>test</AnimatedDiv>
            <GestureTest>test</GestureTest>
        </CenteredContainer>
    );
}


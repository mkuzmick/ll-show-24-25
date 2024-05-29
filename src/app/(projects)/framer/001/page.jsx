"use client"

import React from 'react'
import { motion } from "framer-motion"

export default function Page() {
  return (
    <div
        style={{
            display: "grid",
            placeContent: "center",
            height: "100vh",
            gap: "0.8rem",
            
        }}
    >
        framer test 001
        <div style={{
            backgroundColor: "red",
        }}>
            button content
        </div>
        <motion.div
            style={{
                width: 150,
                height: 150,
                background: "black"
            }}
            initial={{ scale: 0.3}}
            animate={{ x: 100, scale: 1 }}
        >

        </motion.div>
        <motion.div
            className="rounded-xl bg-blue-500 w-64 h-64"
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 1.2,
                // delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}
            whileHover={{ scale: 1.2 }}
  whileTap={{ scale: 1.1 }}
  drag="x"
  dragConstraints={{ left: -100, right: 100}}
        />
    </div>
  )
}

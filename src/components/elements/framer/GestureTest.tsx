import { ReactNode } from "react";
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
    );
};

export default GestureTest;
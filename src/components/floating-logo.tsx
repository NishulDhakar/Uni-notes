"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function FloatingLogo() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="absolute top-24 left-[12%] lg:left-[18%] hidden md:block pointer-events-none z-20"
        >
            <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="
                    w-34 h-34
                    bg-white 
                    rounded-[2rem]
                    shadow-[0_15px_30px_rgba(0,0,0,0.10)]
                    flex items-center justify-center 
                    rotate-[-12deg]
                    border border-white/60
                "
            >
                <Image
                    src="/logo.svg"
                    alt="Logo"
                    width={90}
                    height={90}
                    className="object-contain"
                />
            </motion.div>
        </motion.div>
    );
}

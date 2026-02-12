"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { IconType } from "react-icons";

interface ServiceHeroProps {
    title: string;
    tagline: string;
    description: string;
    icon: IconType;
}

export default function ServiceHero({ title, tagline, description, icon: Icon }: ServiceHeroProps) {
    return (
        <section className="relative min-h-[80vh] flex flex-col justify-center items-center px-6 bg-black overflow-hidden pt-24 pb-16">
            {/* Subtle grid background */}
            <div className="absolute inset-0 z-0 opacity-[0.04]">
                <div className="w-full h-full" style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }} />
            </div>

            {/* Radial glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-white/[0.03] rounded-full blur-3xl" />

            <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
                {/* Icon badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
                    className="mb-8 w-20 h-20 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center"
                >
                    <Icon className="w-10 h-10 text-white/80" />
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 mb-4 leading-[1.1]"
                >
                    {title}
                </motion.h1>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.3 }}
                    className="text-xl md:text-2xl text-gray-400 font-light mb-6"
                >
                    {tagline}
                </motion.p>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.4 }}
                    className="text-base md:text-lg text-gray-500 max-w-2xl leading-relaxed mb-12"
                >
                    {description}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.5 }}
                    className="flex flex-col sm:flex-row items-center gap-5"
                >
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                        <Link
                            href="/pricing"
                            className="group relative px-8 py-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-lg font-semibold overflow-hidden transition-all duration-300 hover:bg-white/15 hover:border-white/30 flex items-center gap-2"
                        >
                            View Pricing
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                    </motion.div>

                    <Link
                        href="#service-contact"
                        className="text-gray-400 hover:text-white font-medium text-lg border-b border-transparent hover:border-white/50 transition-all duration-300 pb-0.5"
                    >
                        Contact Us
                    </Link>
                </motion.div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </section>
    );
}

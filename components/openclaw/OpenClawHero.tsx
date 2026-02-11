"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Beams from "@/components/reactbits/Beams";
import { LineShadowText } from "@/components/ui/line-shadow-text";

export default function OpenClawHero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 bg-black overflow-hidden pt-20">
            {/* Background Light Pillars */}
            <div className="absolute inset-0 z-0">
                <Beams />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
                    className="mb-8 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
                >
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-semibold text-gray-300 tracking-[0.15em] uppercase">
                        Managed OpenClaw Hosting
                    </span>
                </motion.div>

                {/* Headline with mascot icon + LineShadowText */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8 leading-[1.1]"
                >
                    {/* Mascot + "OpenClaw" on same line */}
                    <span className="inline-flex items-center">
                        <Image
                            src="/openclaw-mascot.png"
                            alt="OpenClaw Mascot"
                            width={100}
                            height={100}
                            className="inline-block w-16 h-16 md:w-[100px] md:h-[100px] object-contain -mr-3 md:-mr-5 relative z-10 drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                            priority
                        />
                        <LineShadowText shadowColor="white" className="text-white">
                            OpenClaw
                        </LineShadowText>
                    </span>{" "}
                    in the{" "}
                    <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#FF3BFF_0%,#ECBFBF_38%,#5C24FF_76%,#D94FD5_100%)]">
                        Cloud
                    </span>
                    <br className="hidden md:block" />
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="text-gray-400 text-4xl md:text-5xl font-medium block mt-3"
                    >
                        No Mac Mini Required
                    </motion.span>
                </motion.h1>

                {/* Sub-headline */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.35 }}
                    className="text-lg md:text-xl text-gray-400 max-w-2xl font-light leading-relaxed mb-12"
                >
                    We deploy, secure, and manage your OpenClaw AI agent in production-grade
                    cloud infrastructure. Always-on, zero hardware, zero headaches.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.5 }}
                    className="flex flex-col sm:flex-row items-center gap-6"
                >
                    {/* Primary CTA */}
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                        <Link
                            href="#pricing"
                            className="group relative px-8 py-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-lg font-semibold overflow-hidden transition-all duration-300 hover:bg-white/15 hover:border-white/30 flex items-center gap-2"
                        >
                            Get Started
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                    </motion.div>

                    {/* Secondary CTA */}
                    <Link
                        href="#openclaw-contact"
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

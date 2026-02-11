"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function OpenClawBanner() {
    return (
        <section className="relative py-20 px-6 overflow-hidden bg-white">
            <div className="container mx-auto max-w-5xl relative z-10">
                {/* Subtle separator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center gap-6 mb-14"
                >
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-gray-300" />
                    <span className="text-xs font-bold text-gray-400 tracking-[0.2em] uppercase">
                        Featured
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gray-300 to-gray-300" />
                </motion.div>

                <Link href="/openclaw" className="block group">
                    {/* Logo — large, standalone, no box */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ type: "spring", stiffness: 60, damping: 18 }}
                        className="flex justify-center mb-4"
                    >
                        <div className="relative">
                            <Image
                                src="/openclaw-logo.png"
                                alt="OpenClaw"
                                width={560}
                                height={190}
                                className="object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.4)] group-hover:drop-shadow-[0_35px_60px_rgba(0,0,0,0.55)] group-hover:scale-[1.04] transition-all duration-500"
                                priority
                            />

                        </div>
                    </motion.div>

                    {/* Text content — black-to-white silver gradient */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.1 }}
                        className="text-center max-w-2xl mx-auto"
                    >
                        <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-transparent bg-clip-text bg-gradient-to-b from-gray-900 via-gray-600 to-gray-300">
                            OpenClaw in the Cloud
                        </h3>
                        <p className="text-gray-500 mb-6 text-base leading-relaxed">
                            Skip the Mac Mini. We deploy, secure, and manage your OpenClaw AI agent
                            in production-grade cloud infrastructure — always-on, zero headaches.
                        </p>
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 group-hover:gap-3 transition-all duration-300">
                            Learn More
                            <FaArrowRight className="text-gray-500 group-hover:text-gray-900 transition-colors duration-300" />
                        </span>

                        {/* NEW badge — black-to-white gradient */}
                        <div className="mt-4">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase bg-gradient-to-b from-gray-900 via-gray-600 to-gray-300 text-white shadow-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                New Service
                            </span>
                        </div>
                    </motion.div>
                </Link>
            </div>
        </section>
    );
}

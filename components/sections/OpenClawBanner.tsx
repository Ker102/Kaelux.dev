"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function OpenClawBanner() {
    return (
        <section className="relative py-16 px-6 overflow-hidden bg-white">
            <div className="container mx-auto max-w-5xl relative z-10">
                {/* Subtle separator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center gap-6 mb-12"
                >
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-gray-300" />
                    <span className="text-xs font-bold text-gray-400 tracking-[0.2em] uppercase">
                        Featured
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gray-300 to-gray-300" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ type: "spring", stiffness: 60, damping: 18 }}
                >
                    <Link href="/openclaw" className="block group">
                        <div className="relative p-8 md:p-10 rounded-3xl border border-gray-200 bg-gradient-to-br from-white via-gray-50/30 to-white hover:border-gray-300 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-2xl">

                            {/* NEW Badge */}
                            <div className="absolute top-5 right-5 md:top-6 md:right-6 z-10">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg shadow-violet-500/20">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                    New
                                </span>
                            </div>

                            {/* OpenClaw Logo Header Image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                                className="flex justify-center mb-6"
                            >
                                <div className="relative">
                                    <Image
                                        src="/openclaw-logo.png"
                                        alt="OpenClaw"
                                        width={420}
                                        height={140}
                                        className="object-contain drop-shadow-[0_12px_35px_rgba(0,0,0,0.25)] group-hover:drop-shadow-[0_18px_45px_rgba(0,0,0,0.35)] transition-all duration-500 group-hover:scale-[1.03]"
                                        priority
                                    />
                                    {/* Soft reflection/glow underneath for 3D pop */}
                                    <div className="absolute -bottom-4 left-[10%] right-[10%] h-8 bg-gradient-to-r from-transparent via-black/10 to-transparent blur-2xl rounded-full" />
                                </div>
                            </motion.div>

                            {/* Content — centered below the logo */}
                            <div className="text-center max-w-2xl mx-auto">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    OpenClaw in the Cloud
                                </h3>
                                <p className="text-gray-500 mb-5 text-sm md:text-base leading-relaxed">
                                    Skip the Mac Mini. We deploy, secure, and manage your OpenClaw AI agent
                                    in production-grade cloud infrastructure — always-on, zero headaches.
                                </p>
                                <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 group-hover:gap-3 transition-all duration-300">
                                    Learn More
                                    <FaArrowRight className="text-gray-500 group-hover:text-gray-900 transition-colors duration-300" />
                                </span>
                            </div>

                            {/* Bottom accent line */}
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-violet-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

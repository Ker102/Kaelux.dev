"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function OpenClawServiceCard() {
    return (
        <section className="py-20 px-6 bg-white relative overflow-hidden">
            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Subtle separator */}
                <div className="flex items-center justify-center gap-6 mb-14">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-gray-200" />
                    <span className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-900 via-gray-600 to-gray-300 tracking-[0.2em] uppercase">
                        New Service
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gray-200 to-gray-200" />
                </div>

                <Link href="/openclaw" className="block group">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ type: "spring", stiffness: 60, damping: 18 }}
                        className="flex flex-col md:flex-row md:items-center gap-10 md:gap-14"
                    >
                        {/* Logo — large, standalone, no box */}
                        <div className="shrink-0 relative flex justify-center md:justify-start">
                            <div className="relative">
                                <Image
                                    src="/openclaw-logo.png"
                                    alt="OpenClaw"
                                    width={440}
                                    height={150}
                                    className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] group-hover:drop-shadow-[0_28px_60px_rgba(0,0,0,0.45)] group-hover:scale-[1.04] transition-all duration-500"
                                />
                                {/* Always-visible 3D ground shadow */}
                                <div className="absolute -bottom-4 left-[15%] right-[15%] h-8 bg-black/15 blur-2xl rounded-full group-hover:bg-black/25 transition-all duration-500" />
                            </div>
                        </div>

                        {/* Content — black-to-white silver gradient text */}
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-gray-900 via-gray-600 to-gray-300">
                                    OpenClaw Cloud
                                </h3>
                            </div>
                            <span className="text-xs font-semibold text-gray-500 uppercase tracking-[0.15em] mb-4 block">
                                Managed AI Agent Hosting
                            </span>
                            <p className="text-gray-600 leading-relaxed text-base md:text-lg max-w-3xl mb-6">
                                OpenClaw is the open-source AI agent everyone is talking about — but self-hosting
                                means buying hardware, managing security, and keeping it online 24/7. We eliminate
                                all of that. Kaelux deploys, secures, and manages your OpenClaw instance in
                                production-grade cloud infrastructure so you get an always-on AI agent without
                                the Mac Mini.
                            </p>

                            <div className="flex flex-wrap items-center gap-4">
                                <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 group-hover:gap-3 transition-all duration-300">
                                    Learn More
                                    <FaArrowRight className="text-gray-500 group-hover:text-gray-900 transition-colors duration-300" />
                                </span>
                                <span className="text-sm text-gray-400">|</span>
                                <span className="text-sm font-medium text-gray-500">
                                    Starting from $29/mo
                                </span>
                                <span className="text-sm text-gray-400">|</span>
                                {/* NEW badge — black-to-white gradient */}
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase bg-gradient-to-b from-gray-900 via-gray-600 to-gray-300 text-white shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                    New
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </Link>
            </div>
        </section>
    );
}

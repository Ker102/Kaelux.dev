"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiOutlineCloudArrowUp } from "react-icons/hi2";
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
                            <div className="absolute top-5 right-5 md:top-6 md:right-6">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg shadow-violet-500/20">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                    New
                                </span>
                            </div>

                            <div className="flex flex-col md:flex-row md:items-center gap-6">
                                {/* Icon */}
                                <div className="shrink-0 p-4 rounded-xl bg-gradient-to-br from-gray-100 to-white border border-gray-200 group-hover:scale-110 transition-transform duration-300 shadow-sm w-fit">
                                    <HiOutlineCloudArrowUp className="w-8 h-8 text-gray-700" />
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                                        OpenClaw in the Cloud
                                    </h3>
                                    <p className="text-gray-500 mb-4 text-sm md:text-base leading-relaxed max-w-2xl">
                                        Skip the Mac Mini. We deploy, secure, and manage your OpenClaw AI agent
                                        in production-grade cloud infrastructure — always-on, zero headaches.
                                    </p>
                                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 group-hover:gap-3 transition-all duration-300">
                                        Learn More
                                        <FaArrowRight className="text-gray-500 group-hover:text-gray-900 transition-colors duration-300" />
                                    </span>
                                </div>
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

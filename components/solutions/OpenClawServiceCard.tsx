"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiOutlineCloudArrowUp } from "react-icons/hi2";
import { FaArrowRight } from "react-icons/fa";

export default function OpenClawServiceCard() {
    return (
        <section className="py-16 px-6 bg-white relative overflow-hidden">
            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Subtle separator */}
                <div className="flex items-center justify-center gap-6 mb-12">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-gray-200" />
                    <span className="text-xs font-bold text-gray-400 tracking-[0.2em] uppercase">
                        New Service
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gray-200 to-gray-200" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ type: "spring", stiffness: 60, damping: 18 }}
                    className="relative"
                >
                    <Link href="/openclaw" className="block group">
                        <div className="relative p-8 md:p-10 rounded-2xl border border-gray-200 bg-gradient-to-br from-white via-gray-50/50 to-white hover:border-gray-300 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-xl">

                            {/* NEW Badge */}
                            <div className="absolute top-5 right-5 md:top-6 md:right-6">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg shadow-violet-500/20">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                    New
                                </span>
                            </div>

                            <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
                                {/* Icon */}
                                <div className="shrink-0 p-5 rounded-2xl bg-gradient-to-br from-gray-100 via-white to-gray-200 border border-gray-200 group-hover:scale-110 transition-transform duration-300 shadow-sm w-fit">
                                    <HiOutlineCloudArrowUp className="w-10 h-10 text-gray-700" />
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
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
                                    </div>
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

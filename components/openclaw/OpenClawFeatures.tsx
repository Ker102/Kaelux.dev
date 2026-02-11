"use client";

import { motion } from "framer-motion";
import {
    HiOutlineShieldCheck,
    HiOutlineBolt,
    HiOutlineCurrencyDollar,
    HiOutlineWrenchScrewdriver,
    HiOutlineServerStack,
    HiOutlineLockClosed
} from "react-icons/hi2";

const painPoints = [
    {
        icon: HiOutlineCurrencyDollar,
        title: "Hardware Costs",
        pain: "A Mac Mini M4 starts at $599+ just for hardware — plus electricity, cooling, and internet uptime.",
        solution: "We host in the cloud. No upfront investment, no surprise bills."
    },
    {
        icon: HiOutlineShieldCheck,
        title: "Security Gaps",
        pain: "OpenClaw can access your files, browser, and shell. A misconfigured instance is a major security risk.",
        solution: "We implement strict sandboxing, network policies, and access controls from day one."
    },
    {
        icon: HiOutlineBolt,
        title: "Uptime & Reliability",
        pain: "A home Mac Mini goes down when your internet or power does. No SLA, no redundancy.",
        solution: "Production-grade cloud with 99.9% uptime, auto-restarts, and health monitoring."
    },
    {
        icon: HiOutlineWrenchScrewdriver,
        title: "Setup Complexity",
        pain: "Configuring OpenClaw, LLM API keys, messaging integrations, and SSL takes hours of DevOps work.",
        solution: "We handle the entire setup. You get a working OpenClaw instance, ready to use."
    },
    {
        icon: HiOutlineServerStack,
        title: "Scaling Limitations",
        pain: "A single Mac Mini can only handle so much. Adding capacity means buying more hardware.",
        solution: "Cloud infrastructure scales on demand. Add instances, increase resources, no physical limits."
    },
    {
        icon: HiOutlineLockClosed,
        title: "Update Management",
        pain: "OpenClaw is open-source and fast-moving. Keeping up with releases and patches is a chore.",
        solution: "We manage updates, patches, and version upgrades so you stay current without downtime."
    }
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.15
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring" as const,
            stiffness: 80,
            damping: 18
        }
    }
};

export default function OpenClawFeatures() {
    return (
        <section className="py-28 px-6 bg-black relative overflow-hidden">
            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-20"
                >
                    <span className="text-gray-400 font-medium tracking-[0.2em] uppercase mb-4 block text-sm">
                        Why Kaelux
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Self-Hosting is{" "}
                        <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#FF3BFF_0%,#ECBFBF_38%,#5C24FF_76%,#D94FD5_100%)]">
                            Hard
                        </span>
                        . We Make It Easy.
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        OpenClaw is powerful — but running it yourself comes with real operational challenges.
                        Here&apos;s what we handle so you don&apos;t have to.
                    </p>
                </motion.div>

                {/* Pain Point / Solution Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {painPoints.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                            className="group relative p-7 bg-zinc-900/60 rounded-2xl hover:bg-zinc-800/60 transition-all duration-500 overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.04)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_8px_30px_-8px_rgba(0,0,0,0.5)]"
                        >
                            {/* Icon — clean, no border, just the icon with subtle glow */}
                            <motion.div
                                className="mb-5 text-white/80 group-hover:text-white transition-colors duration-300"
                                whileHover={{ scale: 1.15, rotate: -5 }}
                                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                            >
                                <item.icon className="w-8 h-8" strokeWidth={1.5} />
                            </motion.div>

                            <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>

                            {/* Pain */}
                            <p className="text-gray-500 text-sm leading-relaxed mb-4">
                                <span className="text-red-400/80 font-medium">The problem: </span>
                                {item.pain}
                            </p>

                            {/* Solution */}
                            <p className="text-gray-400 text-sm leading-relaxed">
                                <span className="text-emerald-400/80 font-medium">Our solution: </span>
                                {item.solution}
                            </p>

                            {/* Subtle top accent on hover */}
                            <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

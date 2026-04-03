"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const smoothTransition = {
    type: "spring" as const,
    damping: 40,
    stiffness: 100,
    mass: 1,
};

const slideUpFade = {
    initial: { opacity: 0, y: 40 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { ...smoothTransition, duration: 1.0 },
    },
};

const services = [
    {
        title: "Custom LLM Systems",
        description:
            "We design and deploy fine-tuned language models, prompt engineering architectures, and multi-model routing systems tailored to your specific domain.",
    },
    {
        title: "RAG Pipelines & Knowledge Retrieval",
        description:
            "From naive retrieval to Corrective RAG (CRAG) with Brave Search fallback, we engineer retrieval pipelines that ground AI responses in your proprietary data.",
    },
    {
        title: "Intelligent Automation & AI Agents",
        description:
            "Autonomous workflow agents using LangGraph and n8n that reason, plan, and execute multi-step business processes — replacing fragile RPA scripts.",
    },
    {
        title: "Full-Stack Web Infrastructure",
        description:
            "Production-grade web applications built with Next.js, React, TypeScript, and modern cloud infrastructure — from MVP to enterprise scale.",
    },
];

export default function AboutPageClient() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
            <Navbar />

            {/* Hero */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-cyan-900/10 via-transparent to-transparent blur-[120px] rounded-full pointer-events-none" />

                <div className="relative z-10 container mx-auto max-w-4xl text-center">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        className="flex flex-col items-center gap-8"
                    >
                        <motion.div variants={slideUpFade}>
                            <Image
                                src="/kaelux-icon-v3.png"
                                alt="Kaelux AI Engineering Agency Logo"
                                width={120}
                                height={120}
                                priority
                                className="rounded-2xl shadow-2xl shadow-cyan-500/10"
                            />
                        </motion.div>

                        <motion.h1
                            variants={slideUpFade}
                            className="text-5xl md:text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500"
                        >
                            About Kaelux
                        </motion.h1>

                        <motion.p
                            variants={slideUpFade}
                            className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl"
                        >
                            <strong className="text-white">Kaelux</strong> is a
                            global AI engineering agency. We build custom LLM
                            systems, intelligent automation, and
                            production-ready web infrastructure for businesses
                            worldwide.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Mission */}
            <section className="py-20 px-6 border-t border-white/5">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: "-10%" }}
                        className="flex flex-col gap-8"
                    >
                        <motion.h2
                            variants={slideUpFade}
                            className="text-3xl md:text-4xl font-semibold tracking-tight text-white"
                        >
                            Our Mission
                        </motion.h2>
                        <motion.div
                            variants={slideUpFade}
                            className="text-lg text-gray-300 font-light leading-relaxed space-y-6"
                        >
                            <p>
                                Kaelux was founded by{" "}
                                <strong className="text-white">
                                    Kristofer Jussmann
                                </strong>{" "}
                                to bridge the gap between cutting-edge AI
                                research and real-world business applications.
                                We don&apos;t just build software — we engineer
                                intelligent ecosystems.
                            </p>
                            <p>
                                From custom LLM retrieval pipelines to automated
                                workflow agents, our mission is to empower
                                creators and enterprises with infrastructure
                                that thinks, adapts, and scales. We combine
                                robust full-stack engineering with
                                state-of-the-art AI research to deliver
                                solutions that are not only powerful but also
                                reliable and production-ready.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* What We Do */}
            <section className="py-20 px-6 border-t border-white/5">
                <div className="container mx-auto max-w-5xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-12 text-center"
                    >
                        What Kaelux Builds
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {services.map((service, i) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.7,
                                    delay: i * 0.1,
                                }}
                                className="p-6 border border-white/10 rounded-xl hover:border-white/20 transition-colors"
                            >
                                <h3 className="text-xl font-semibold text-white mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Founder */}
            <section className="py-20 px-6 border-t border-white/5">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: "-10%" }}
                        className="flex flex-col gap-6"
                    >
                        <motion.h2
                            variants={slideUpFade}
                            className="text-3xl md:text-4xl font-semibold tracking-tight text-white"
                        >
                            Founded by Kristofer Jussmann
                        </motion.h2>
                        <motion.p
                            variants={slideUpFade}
                            className="text-lg text-gray-300 font-light leading-relaxed"
                        >
                            Kristofer is a full-stack engineer and AI researcher
                            with deep expertise in retrieval-augmented
                            generation, multi-model architectures, and scalable
                            cloud infrastructure. His research spans 28K system
                            prompt analysis, Corrective RAG pipelines on Azure
                            ML clusters, and fine-tuning specialized small
                            language models using QLoRA.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6 border-t border-white/5">
                <div className="container mx-auto max-w-3xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
                            Ready to Build Something Intelligent?
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Whether you need a custom AI agent, a RAG pipeline,
                            or a full-stack web platform — Kaelux engineers it.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 pt-4">
                            <Link
                                href="/solutions"
                                className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
                            >
                                View Solutions
                            </Link>
                            <Link
                                href="/#contact"
                                className="px-8 py-3 rounded-full border border-white/20 text-white font-semibold hover:border-white/40 transition-colors"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}

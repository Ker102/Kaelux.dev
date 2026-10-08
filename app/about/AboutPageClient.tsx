"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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

const focusAreas = [
    {
        title: "AI and ML Research",
        description:
            "Kaelux investigates agent reasoning, tool use, artifact inspection, and real-world AI environments, then publishes or develops the useful results.",
    },
    {
        title: "Medical AI Division",
        description:
            "MedAI is the medical-research division for secure AI infrastructure, research tooling, DevSecOps, and MLOps in retina, hearing, tinnitus, and medical imaging contexts.",
    },
    {
        title: "Spatial Reasoning and Agent Harnesses",
        description:
            "ViperMesh and Harneloop connect spatial-reasoning research, Blender workflows, artifact-aware evaluation, and evidence-gated harness evolution.",
    },
    {
        title: "Infrastructure Security Labs",
        description:
            "Nullstate and related labs explore local-first infrastructure security, DevSecOps workflows, and evidence-driven tooling for technical teams.",
    },
];

const facts = [
    {
        label: "Entity Type",
        value: "Research and Engineering Lab",
        detail: "Kaelux is an Estonia-based collaborative research and engineering lab.",
    },
    {
        label: "Founder",
        value: "Kristofer Jussmann",
        detail: "Founder, researcher, and builder leading Kaelux.",
    },
    {
        label: "Base",
        value: "Estonia, Global Reach",
        detail: "Kaelux is built from Estonia with public ventures and partner conversations that can cross borders.",
    },
    {
        label: "Core Focus",
        value: "Research, Useful Tools, and Collaboration",
        detail: "MedAI, ViperMesh, Harneloop, PromptTriage, Nullstate, and secure business automation.",
    },
];

const faqs = [
    {
        question: "What is Kaelux?",
        answer: "Kaelux is an Estonia-based collaborative research and engineering lab behind MedAI, ViperMesh, Harneloop, PromptTriage, Nullstate, and OpenCoast.",
    },
    {
        question: "Who founded Kaelux?",
        answer: "Kaelux was founded by Kristofer Jussmann, an Estonia-based AI/ML systems researcher and builder.",
    },
    {
        question: "What kind of work does Kaelux do?",
        answer: "Kaelux works with collaborators to solve real problems through research, open-source tools, practical products, and business automation.",
    },
    {
        question: "Is Kaelux a software company or a content channel?",
        answer: "Kaelux builds useful software, publishes open-source work, and collaborates with researchers, developers, domain experts, and business clients.",
    },
];

export default function AboutPageClient() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
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
                                alt="Kaelux AI research lab logo"
                                width={1536}
                                height={1565}
                                priority
                                style={{ width: "auto", height: "120px" }}
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
                            <strong className="text-white">Kaelux</strong> is an
                            Estonia-based collaborative research and engineering lab
                            behind MedAI, ViperMesh, Harneloop, PromptTriage,
                            Nullstate, and the experiments that connect them.
                        </motion.p>

                        <motion.p
                            variants={slideUpFade}
                            className="max-w-2xl text-sm uppercase tracking-[0.28em] text-gray-500"
                        >
                            Last updated October 7, 2026
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Brand Facts */}
            <section className="py-20 px-6 border-t border-white/5">
                <div className="container mx-auto max-w-5xl">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: "-10%" }}
                        className="space-y-10"
                    >
                        <motion.div variants={slideUpFade} className="space-y-3">
                            <p className="text-sm uppercase tracking-[0.28em] text-gray-500">
                                Brand Profile
                            </p>
                            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
                                Kaelux At a Glance
                            </h2>
                            <p className="max-w-3xl text-lg text-gray-300 font-light leading-relaxed">
                                Our projects cover agent reliability, creative workflows,
                                infrastructure security, medical research tools, and
                                public-interest mapping. The common goal is useful
                                software grounded in real needs.
                            </p>
                        </motion.div>

                        <div className="grid gap-6 md:grid-cols-2">
                            {facts.map((fact, index) => (
                                <motion.div
                                    key={fact.label}
                                    variants={slideUpFade}
                                    transition={{ delay: index * 0.06 }}
                                    className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
                                >
                                    <p className="text-xs uppercase tracking-[0.28em] text-gray-500">
                                        {fact.label}
                                    </p>
                                    <h3 className="mt-3 text-2xl font-semibold text-white">
                                        {fact.value}
                                    </h3>
                                    <p className="mt-3 text-gray-400 leading-relaxed">
                                        {fact.detail}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Identity */}
            <section className="py-20 px-6 border-t border-white/5">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: "-10%" }}
                        className="space-y-8"
                    >
                        <motion.h2
                            variants={slideUpFade}
                            className="text-3xl md:text-4xl font-semibold tracking-tight text-white"
                        >
                            What Kaelux Is
                        </motion.h2>
                        <motion.div
                            variants={slideUpFade}
                            className="rounded-2xl border border-cyan-500/20 bg-cyan-500/[0.05] p-7 text-lg text-gray-200 leading-relaxed"
                        >
                            Kaelux is a collaborative lab founded by Kristofer Jussmann.
                            We start with problems people encounter and combine
                            research, engineering, and firsthand experience to build
                            practical solutions.
                        </motion.div>
                        <motion.p
                            variants={slideUpFade}
                            className="text-lg text-gray-300 font-light leading-relaxed"
                        >
                            The lab is centered on practical evidence: working
                            products, open-source projects, measured case studies,
                            and selective partnerships. Research can remain public
                            infrastructure or develop into a product, company, or
                            division.
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
                            Why Kaelux Exists
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
                                to work on real problems with people who understand them.
                                The lab welcomes researchers, developers, domain experts,
                                and businesses that want to turn a practical need into
                                a useful tool.
                            </p>
                            <p>
                                Kaelux closes the loop between research and use:
                                investigate the failure, build the artifact,
                                inspect the evidence, publish what is reusable,
                                and develop the work when it solves a real problem.
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
                        {focusAreas.map((service, i) => (
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
                            Kristofer is an Agentic Systems Architect & Cloud
                            Engineer based in Estonia, developing
                            products that bridge LLM orchestration, autonomous
                            agents, research workflows, creative tooling, and
                            infrastructure security. He focuses on useful results,
                            observable systems, and public engineering evidence.
                        </motion.p>
                        <motion.p
                            variants={slideUpFade}
                            className="text-lg text-gray-400 font-light leading-relaxed"
                        >
                            Through Kaelux, he works with clients and collaborators
                            to understand problems, build practical systems, and
                            improve them through real use and measured evidence.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 px-6 border-t border-white/5">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: "-10%" }}
                        className="space-y-10"
                    >
                        <motion.div variants={slideUpFade} className="space-y-3">
                            <p className="text-sm uppercase tracking-[0.28em] text-gray-500">
                                FAQ
                            </p>
                            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
                                Common Questions About Kaelux
                            </h2>
                        </motion.div>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={faq.question}
                                    variants={slideUpFade}
                                    transition={{ delay: index * 0.05 }}
                                    className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
                                >
                                    <h3 className="text-xl font-semibold text-white">
                                        {faq.question}
                                    </h3>
                                    <p className="mt-3 text-gray-400 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
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
                            Interested in Kaelux?
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Researchers, developers, businesses, and people with
                            firsthand experience of a problem can start with
                            the collaboration paths or contact form.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 pt-4">
                            <Link
                                href="/pricing"
                                className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
                            >
                                View Engagements
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

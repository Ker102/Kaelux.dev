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

const services = [
    {
        title: "Custom AI Systems",
        description:
            "Kaelux designs and deploys production AI systems with custom LLM workflows, routing layers, and domain-specific orchestration tuned for real operating environments.",
    },
    {
        title: "Knowledge and Retrieval Infrastructure",
        description:
            "From internal search to retrieval-augmented generation, Kaelux builds data pipelines that ground responses in company knowledge instead of generic public output.",
    },
    {
        title: "Agents and Operational Automation",
        description:
            "Kaelux engineers agentic workflows and execution systems that automate repetitive operations, coordinate tools, and reduce dependence on brittle manual processes.",
    },
    {
        title: "IaaS, PaaS, and SaaS Delivery",
        description:
            "Kaelux ships managed infrastructure, platform layers, and software products that help businesses operate on modern stacks instead of lagging behind fast-moving technical shifts.",
    },
];

const facts = [
    {
        label: "Entity Type",
        value: "Engineering and Platform Company",
        detail: "Kaelux builds and operates AI systems, software platforms, and production infrastructure.",
    },
    {
        label: "Founder",
        value: "Kristofer Jussmann",
        detail: "Agentic systems architect and cloud engineer leading Kaelux.",
    },
    {
        label: "Base",
        value: "Estonia, Serving Worldwide",
        detail: "Kaelux works with companies internationally from its Estonia-based studio.",
    },
    {
        label: "Core Focus",
        value: "IaaS, PaaS, SaaS, AI",
        detail: "From managed infrastructure and platform layers to applied AI systems and software products.",
    },
];

const faqs = [
    {
        question: "What is Kaelux?",
        answer: "Kaelux is an engineering and platform company that builds AI systems, managed infrastructure, internal platforms, and software products for businesses.",
    },
    {
        question: "Who founded Kaelux?",
        answer: "Kaelux was founded by Kristofer Jussmann, an Estonia-based agentic systems architect and cloud engineer focused on production-grade AI and infrastructure delivery.",
    },
    {
        question: "What kind of work does Kaelux do?",
        answer: "Kaelux delivers production AI systems, retrieval infrastructure, agentic automation, managed cloud environments, and platform offerings across IaaS, PaaS, and SaaS.",
    },
    {
        question: "Is Kaelux a software company or a content channel?",
        answer: "Kaelux is an engineering company and product builder, not a media or entertainment channel.",
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
                            <strong className="text-white">Kaelux</strong> is an
                            engineering and platform company that builds AI
                            systems, agentic workflows, retrieval pipelines,
                            and infrastructure across IaaS, PaaS, and SaaS for
                            businesses that need durable technical advantage.
                        </motion.p>

                        <motion.p
                            variants={slideUpFade}
                            className="max-w-2xl text-sm uppercase tracking-[0.28em] text-gray-500"
                        >
                            Last updated April 12, 2026
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
                                This page exists to make the Kaelux brand easy to
                                identify, cite, and understand across search
                                engines, AI assistants, partner directories, and
                                social platforms as a company that builds and
                                operates production systems.
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
                            Kaelux is an engineering company focused on AI
                            systems, infrastructure, and software platforms. It
                            is the operating brand under which Kristofer
                            Jussmann builds, ships, and manages production
                            systems for companies that need modern technical
                            leverage, not generic advisory work.
                        </motion.div>
                        <motion.p
                            variants={slideUpFade}
                            className="text-lg text-gray-300 font-light leading-relaxed"
                        >
                            The brand is centered on practical delivery: custom
                            AI applications, retrieval systems, multi-step
                            agents, modern software platforms, and managed cloud
                            environments. Kaelux is not an advisory label or a
                            media property; it is a technical company built
                            around operating useful systems and keeping clients
                            ahead of rapid infrastructure shifts.
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
                                to help businesses modernize faster than their
                                current stack allows. Many teams know AI,
                                automation, and cloud-native platforms matter,
                                but they struggle to turn disconnected tools
                                into systems that actually improve execution.
                            </p>
                            <p>
                                Kaelux closes that gap by combining AI systems
                                engineering, platform development, and cloud
                                infrastructure into one operating model. Whether
                                a client needs internal knowledge retrieval,
                                workflow automation, private AI infrastructure,
                                platform foundations, or a new software product,
                                the goal is the same: ship systems that create
                                lasting operational advantage.
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
                            Kristofer is an Agentic Systems Architect & Cloud
                            Engineer based in Estonia, designing intelligent
                            infrastructure that bridges LLM orchestration,
                            autonomous agents, and enterprise-grade cloud
                            deployments. He focuses on engineering advanced
                            retrieval systems, multi-model architectures,
                            scalable AI products, and infrastructure layers that
                            help businesses stay current as the technical
                            landscape moves.
                        </motion.p>
                        <motion.p
                            variants={slideUpFade}
                            className="text-lg text-gray-400 font-light leading-relaxed"
                        >
                            Under the Kaelux brand, he combines hands-on
                            engineering with platform thinking so clients can
                            move from scattered experimentation to durable
                            systems with measurable operational value.
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
                            Ready to Build Something Intelligent?
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Whether you need AI infrastructure, a platform
                            layer, or a software system that can keep pace with
                            the market, Kaelux builds technical foundations that
                            are meant to stay useful under pressure.
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

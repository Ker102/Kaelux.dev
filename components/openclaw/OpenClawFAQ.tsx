"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";

const faqs = [
    {
        question: "What is OpenClaw?",
        answer: "OpenClaw is a free, open-source autonomous AI agent that runs on your machine and connects to messaging platforms like WhatsApp, Telegram, and Discord. It uses LLM APIs (Claude, GPT, DeepSeek) to execute real-world tasks including browser automation, file management, and shell commands."
    },
    {
        question: "Why not just buy a Mac Mini and self-host?",
        answer: "A Mac Mini costs $599+ upfront, plus ongoing electricity, internet uptime, and security management. Self-hosting means you're responsible for updates, firewall configuration, SSL certificates, and keeping the instance online 24/7. Our cloud hosting eliminates all of that for a fraction of the cost."
    },
    {
        question: "Which cloud providers do you use?",
        answer: "We deploy on Google Cloud Platform (GCP), Microsoft Azure, or DigitalOcean — depending on your requirements and geographic preferences. All deployments follow cloud security best practices."
    },
    {
        question: "Can I bring my own LLM API keys?",
        answer: "Yes. OpenClaw supports any LLM provider — Claude (Anthropic), GPT (OpenAI), DeepSeek, and more. You provide your own API keys, which means you maintain full control over model costs and usage."
    },
    {
        question: "What messaging platforms are supported?",
        answer: "OpenClaw integrates with WhatsApp, Telegram, and Discord out of the box. We configure the integration of your choice during setup. Additional integrations can be added at any time."
    },
    {
        question: "How secure is a cloud-hosted OpenClaw instance?",
        answer: "Very. We implement network isolation, strict firewall rules, encrypted connections (SSL/TLS), role-based access controls, and automated security patching. Your data never leaves your dedicated instance unless you explicitly configure it to."
    },
    {
        question: "What does the One-Time Setup tier include?",
        answer: "The One-Time Setup tier is for organizations with specific infrastructure, compliance, or scale requirements. It includes multi-instance deployments, custom cloud provider selection, advanced security configurations, priority support, and dedicated on-call engineering. Contact us for a tailored proposal."
    },
    {
        question: "Can I switch from Managed Hosting to One-Time Setup later?",
        answer: "Absolutely. You can start with our Managed Hosting plan and upgrade to a One-Time Setup at any time. We'll handle the migration seamlessly with zero downtime."
    },
];

export default function OpenClawFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-28 px-6 bg-white relative overflow-hidden">
            <div className="container mx-auto max-w-3xl relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-16"
                >
                    <span className="text-gray-500 font-medium tracking-[0.2em] uppercase mb-4 block text-sm">
                        FAQ
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        Frequently Asked{" "}
                        <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#FF3BFF_0%,#ECBFBF_38%,#5C24FF_76%,#D94FD5_100%)]">
                            Questions
                        </span>
                    </h2>
                </motion.div>

                {/* FAQ Items */}
                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.4 }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className={`w-full text-left p-5 rounded-xl border transition-all duration-300 ${openIndex === index
                                    ? "border-gray-300 bg-gray-50 shadow-sm"
                                    : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50/50"
                                    }`}
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <h3 className="text-base font-semibold text-gray-900">
                                        {faq.question}
                                    </h3>
                                    <motion.div
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="shrink-0"
                                    >
                                        <HiChevronDown className="w-5 h-5 text-gray-400" />
                                    </motion.div>
                                </div>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

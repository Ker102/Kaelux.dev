"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown } from "react-icons/hi2";
import { ServiceFAQ as FAQItem } from "@/data/services";

interface ServiceFAQProps {
    faqs: FAQItem[];
    title?: string;
    darkMode?: boolean;
}

export default function ServiceFAQ({
    faqs,
    title = "Frequently Asked Questions",
    darkMode = false,
}: ServiceFAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className={`py-24 px-6 ${darkMode ? "bg-black" : "bg-white"}`}>
            <div className="container mx-auto max-w-3xl">
                {/* Header */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`text-4xl md:text-5xl font-bold tracking-tighter text-center mb-14 text-transparent bg-clip-text ${darkMode
                            ? "bg-gradient-to-b from-white via-gray-200 to-gray-500"
                            : "bg-gradient-to-b from-gray-900 via-gray-700 to-gray-400"
                        }`}
                >
                    {title}
                </motion.h2>

                {/* FAQ Items */}
                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={`rounded-2xl border overflow-hidden transition-all duration-300 ${darkMode
                                    ? "border-white/10 bg-white/[0.02] hover:border-white/20"
                                    : "border-gray-200 bg-white hover:border-gray-300"
                                }`}
                        >
                            <button
                                onClick={() =>
                                    setOpenIndex(openIndex === index ? null : index)
                                }
                                className={`w-full px-6 py-5 flex items-center justify-between text-left transition-colors ${darkMode
                                        ? "text-white hover:bg-white/[0.03]"
                                        : "text-gray-900 hover:bg-gray-50"
                                    }`}
                            >
                                <span className="font-semibold pr-4">
                                    {faq.question}
                                </span>
                                <HiChevronDown
                                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                        } ${darkMode ? "text-gray-400" : "text-gray-500"}`}
                                />
                            </button>

                            <AnimatePresence initial={false}>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div
                                            className={`px-6 pb-5 leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-600"
                                                }`}
                                        >
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

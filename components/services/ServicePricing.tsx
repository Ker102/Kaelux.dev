"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import { ServicePlan } from "@/data/services";

interface ServicePricingProps {
    plans: ServicePlan[];
    title?: string;
    subtitle?: string;
    sectionId?: string;
}

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring" as const, stiffness: 80, damping: 18 },
    },
};

export default function ServicePricing({
    plans,
    title = "Simple Pricing",
    subtitle = "No hidden fees. No surprises.",
    sectionId = "pricing",
}: ServicePricingProps) {
    return (
        <section id={sectionId} className="py-24 px-6 bg-white">
            <div className="container mx-auto max-w-5xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-gray-900 via-gray-700 to-gray-400 mb-4">
                        {title}
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </motion.div>

                {/* Plans */}
                <motion.div
                    className={`grid gap-8 ${plans.length === 1 ? "max-w-lg mx-auto" : "grid-cols-1 md:grid-cols-2"}`}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className={`relative group p-8 rounded-3xl border transition-all duration-300 overflow-hidden ${plan.highlighted
                                    ? "border-gray-900 bg-white shadow-2xl shadow-gray-300/50 hover:shadow-3xl"
                                    : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-xl"
                                }`}
                        >
                            {/* Highlighted accent */}
                            {plan.highlighted && (
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-900 via-gray-600 to-gray-300" />
                            )}

                            <div className="flex flex-col h-full">
                                <div className="mb-8">
                                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-[0.15em] mb-2">
                                        {plan.subtitle}
                                    </p>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                        {plan.name}
                                    </h3>

                                    {/* Price */}
                                    <div className="flex items-baseline gap-1 mb-4">
                                        <span className="text-5xl font-bold tracking-tight text-gray-900">
                                            {plan.price}
                                        </span>
                                        {plan.period && (
                                            <span className="text-lg text-gray-500 font-medium">
                                                {plan.period}
                                            </span>
                                        )}
                                    </div>

                                    <p className="text-gray-500 leading-relaxed text-sm">
                                        {plan.description}
                                    </p>
                                </div>

                                {/* Features */}
                                <ul className="space-y-3 mb-8 flex-1">
                                    {plan.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-start gap-3">
                                            <FaCheck className="w-3.5 h-3.5 text-gray-900 mt-1 flex-shrink-0" />
                                            <span className="text-sm text-gray-600">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <Link href={plan.ctaHref}>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`w-full py-4 rounded-full text-base font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${plan.highlighted
                                                ? "bg-gray-900 text-white hover:bg-black"
                                                : "bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-200"
                                            }`}
                                    >
                                        {plan.cta}
                                        <FaArrowRight className="text-sm" />
                                    </motion.button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

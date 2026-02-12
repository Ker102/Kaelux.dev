"use client";

import { motion } from "framer-motion";
import { ServiceFeature } from "@/data/services";

interface ServiceFeaturesProps {
    features: ServiceFeature[];
    title?: string;
    subtitle?: string;
}

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring" as const, stiffness: 80, damping: 18 },
    },
};

export default function ServiceFeatures({
    features,
    title = "What's Included",
    subtitle = "Everything you need, nothing you don't.",
}: ServiceFeaturesProps) {
    return (
        <section className="py-24 px-6 bg-black">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 mb-4">
                        {title}
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </motion.div>

                {/* Feature Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="group p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300"
                        >
                            <div className="flex items-start gap-5">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <feature.icon className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

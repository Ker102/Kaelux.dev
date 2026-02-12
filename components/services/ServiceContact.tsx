"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface ServiceContactProps {
    serviceName?: string;
}

export default function ServiceContact({ serviceName = "this service" }: ServiceContactProps) {
    return (
        <section id="service-contact" className="py-24 px-6 bg-black">
            <div className="container mx-auto max-w-3xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                        Let&apos;s discuss how {serviceName} can transform your business.
                        Reach out and we&apos;ll get back to you within 24 hours.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                            <Link
                                href="/solutions#contact-form"
                                className="group relative px-8 py-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-lg font-semibold overflow-hidden transition-all duration-300 hover:bg-white/15 hover:border-white/30 flex items-center gap-2"
                            >
                                Contact Us
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                        </motion.div>

                        <Link
                            href="/pricing"
                            className="text-gray-400 hover:text-white font-medium text-lg border-b border-transparent hover:border-white/50 transition-all duration-300 pb-0.5"
                        >
                            View All Pricing
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
